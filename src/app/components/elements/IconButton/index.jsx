import React from 'react';

import iconPost from 'assets/icons/icon-post.svg';

const IconButton = () => {
    return (
        <svg
            className="icon-button__svg"
            width="42"
            height="42"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <circle
                    className="icon-button__border"
                    cx="16"
                    cy="16"
                    r="15"
                />
                <path
                    className="icon-button__inner"
                    d="M19.5555556,10.7003165 L21.9259259,13.0706869 L22.6627455,12.3338673 C22.910371,12.0862418 22.910371,11.6847616 22.6627455,11.4371361 L21.1891063,9.96349689 C20.9414809,9.71587141 20.5400006,9.71587141 20.2923752,9.96349689 L19.5555556,10.7003165 Z M18.8571429,11.2929091 L11.015873,19.1341789 L9.77777778,22.8484646 L13.0793651,22.0230678 L21.3333333,13.7690995 L20.5079365,12.9437027 L12.6666667,20.7849726 L11.4285714,21.197671 L11.8412698,19.9595757 L19.6825397,12.1183059 L18.8571429,11.2929091 Z"
                    id="icon-svg"
                />
            </g>
        </svg>
    );
};

export default IconButton;