import React from 'react';

import YouTube, { YouTubeProps } from 'react-youtube';

import { TRAILER_EN } from '../../constants';
import { ITrailer } from './Trailer.types';

export const Trailer: React.FC<ITrailer> = ({ videos }) => {
    const trailer = videos.find((video) => video.type.toLowerCase().includes(TRAILER_EN));
    const options: YouTubeProps['opts'] = {
        width: '1150',
        height: '650',
        playerVars: {
            autoplay: 1,
            iv_load_policy: 3,
            modestbranding: 1,
        },
    };

    return <YouTube videoId={trailer?.key} opts={options} />;
};
