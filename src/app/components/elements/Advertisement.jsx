import React from 'react';
import PropTypes from 'prop-types';

export default class Advertisement extends React.Component {
    static propTypes = {
        unit: PropTypes.string.isRequired,
        style: PropTypes.object,
        desktop: PropTypes.array,
        mobile: PropTypes.array,
        alt: PropTypes.string,
    };

    render() {
        const { unit, style, desktop, mobile, alt } = this.props;

        const randDesktop =
            desktop.length === 1
                ? 0
                : Math.floor(Math.random() * desktop.length);
        const randMobile =
            mobile.length === 1 ? 0 : Math.floor(Math.random() * mobile.length);

        const linkDesktop = desktop[randDesktop].href || '#';
        const srcDesktop = desktop[randDesktop].src || '#';
        const linkMobile = mobile[randMobile].href || '#';
        const srcMobile = mobile[randMobile].src || '#';

        const adDesktop = (
            <div className="desktop">
                <a href={linkDesktop}>
                    <img src={srcDesktop} alt={alt || 'Advertisement'} />
                </a>
            </div>
        );
        const adMobile = (
            <div className="mobile">
                <a href={linkMobile}>
                    <img src={srcMobile} alt={alt || 'Advertisement'} />
                </a>
            </div>
        );
        const cls = `ad ${unit}`;
        return React.createElement('div', { className: cls, style }, [
            adDesktop,
            adMobile,
        ]);
    }
}
