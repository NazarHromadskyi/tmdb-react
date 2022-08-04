import React from 'react';

import { Badge, InfoField } from '../../components';
import styles from './ContentDetails.module.scss';
import { ITVLayout } from './ContentDetails.types';

export const TVLayout: React.FC<ITVLayout> = ({ data }) => {
    const isTagline = data.tagline.length > 0;

    return (
        <>
            <div className={styles.info__right}>
                <h1 className={styles.title}>{data.name}</h1>
                {isTagline && <h4 className={styles.tagline}>{`«${data.tagline}»`}</h4>}
                <div className={styles.genres}>
                    {
                        data.genres.map((genre) => (
                            <Badge
                                key={genre.id}
                                isMatchNeeded={false}
                            >{genre}
                            </Badge>
                        ))
                    }
                </div>
                <div className={styles.fields}>
                    <InfoField title="First air" value={data.first_air_date} />
                    <InfoField title="Status" value={data.status} />
                    <InfoField title="Last air" value={data.last_air_date} />
                    <InfoField title="Seasons" value={data.number_of_seasons} />
                    <InfoField title="Episodes" value={data.number_of_episodes} />
                    <InfoField title="Countries" arr={data.production_countries} field="name" />
                    <InfoField title="Languages" arr={data.spoken_languages} field="english_name" />
                    <InfoField title="Production" arr={data.production_companies} field="name" />
                </div>
                <div className={styles.overview}>
                    <h2><span className={styles.fieldTitle}>Overview</span></h2>
                    <p className={styles.overview__text}>{data.overview}</p>
                </div>
            </div>
        </>
    );
};
