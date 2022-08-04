import React, {
    lazy, useEffect, useState, Suspense,
} from 'react';

import { useParams } from 'react-router-dom';

import {
    Banner,
    Button,
    Catalog,
    CastList,
    Image,
    Loader,
    Modal,
    NoContent,
    RatingStar,
    Trailer,
} from '../../components';
import { useFetchContentDetailsQuery } from '../../services';
import { IMovieDetails, ITVDetails } from '../../types';
import { scrollToTop } from '../../utils';
import styles from './ContentDetails.module.scss';

const MovieLayout = lazy(() => import(
    /* webpackChunkName: "MovieLayout" */
    './MovieLayout'
));
const TVLayout = lazy(() => import(
    /* webpackChunkName: "TVLayout" */
    './TVLayout'
));

const ContentDetails: React.FC = () => {
    const { category, id } = useParams();
    const { data, isFetching } = useFetchContentDetailsQuery({ category, id });
    const isRecommendations = data?.recommendations && data.recommendations.results.length > 0;
    const isCredits = data && data?.credits?.cast.length > 0;
    const isTrailer = data && data?.videos.results.length > 0;
    const [isModalActive, setIsModalActive] = useState(false);

    useEffect(() => {
        scrollToTop();
    }, [id]);

    return (
        <>
            {/* eslint-disable-next-line no-nested-ternary */}
            {isFetching ? <Loader /> : (data ? (
                <div className={styles.root}>
                    <Banner path={data.backdrop_path} />
                    <div className={styles.content}>
                        <div className={styles.info}>
                            <div className={styles.info__left}>
                                <div className={styles.poster}>
                                    <Image path={data.poster_path} alt={data.name || data.title} width="w342" />
                                </div>
                                {isTrailer && (
                                    <div
                                        className={styles.trailerBtn}
                                        onClick={() => setIsModalActive(true)}
                                    >
                                        <Button>Watch Trailer</Button>
                                    </div>
                                )}
                                <div className={styles.ratingBar}>
                                    <RatingStar
                                        category={category}
                                        movieId={data.id}
                                        vote_average={data.vote_average}
                                        vote_count={data.vote_count}
                                    />
                                </div>
                            </div>
                            {
                                category === 'movie' ? (
                                    <Suspense fallback={<></>}>
                                        <MovieLayout data={(data) as IMovieDetails} />
                                    </Suspense>
                                ) : (
                                    <Suspense fallback={<></>}>
                                        <TVLayout data={(data) as ITVDetails} />
                                    </Suspense>
                                )
                            }
                        </div>
                        {(isTrailer && isModalActive) && (
                            <Modal isActive={isModalActive} setIsActive={setIsModalActive}>
                                <Trailer videos={data.videos.results} />
                            </Modal>
                        )}
                        {isCredits && <CastList cast={data.credits.cast} />}
                        {
                            isRecommendations && (
                                <div className={styles.content__recommendations}>
                                    <h2><span className={styles.fieldTitle}>Recommendations</span></h2>
                                    <Catalog category={category} content={data.recommendations?.results} />
                                </div>
                            )
                        }
                    </div>
                </div>
            ) : <NoContent />)}
        </>
    );
};

export default ContentDetails;
