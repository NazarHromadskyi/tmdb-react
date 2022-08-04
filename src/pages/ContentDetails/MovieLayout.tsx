import React from 'react';

import { Badge, InfoField } from '../../components';
import styles from './ContentDetails.module.scss';
import { IMovieLayout } from './ContentDetails.types';

export const MovieLayout: React.FC<IMovieLayout> = ({ data }) => (
    <>
        <div className={styles.info__right}>
            <h1 className={styles.title}>{data.title}</h1>
            <h4 className={styles.tagline}>{`«${data.tagline}»`}</h4>
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
                <InfoField title="Status" value={data.status} />
                <InfoField title="Release date" value={data.release_date} />
                <InfoField title="Countries" arr={data.production_countries} field="name" />
                <InfoField title="Languages" arr={data.spoken_languages} field="english_name" />
                <InfoField title="Budget" value={data.budget} />
                <InfoField title="Revenue" value={data.revenue} />
                <InfoField title="Production" arr={data.production_companies} field="name" />
                <InfoField title="Collection" value={data.belongs_to_collection?.name} />
            </div>
            <div className={styles.overview}>
                <h2><span className={styles.fieldTitle}>Overview</span></h2>
                <p className={styles.overview__text}>{data.overview}</p>
            </div>
        </div>
    </>
);
