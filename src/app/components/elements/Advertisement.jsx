import React from 'react';
import PropTypes from 'prop-types';

export default class Advertisement extends React.Component {
    static propTypes = {
        unit: PropTypes.string.isRequired,
        style: PropTypes.object,
        desktop: PropTypes.array,
        mobile: PropTypes.array,
        allSizes: PropTypes.array,
        alt: PropTypes.string,
    };

    hideOnError(env) {
        env.target.style = 'display:none';
    }

    render() {
        const { unit, style, desktop, mobile, allSizes, alt } = this.props;
        let linkAllSizes,
            srcAllSizes,
            linkDesktop,
            linkMobile,
            srcDesktop,
            srcMobile;
        let ads = [];

        if (allSizes) {
            const rand =
                allSizes.length === 1
                    ? 0
                    : Math.floor(Math.random() * allSizes.length);
            linkAllSizes = allSizes[rand].href || '#';
            srcAllSizes = allSizes[rand].src || '#';

            const adAllSizes = (
                <div>
                    <a href={linkAllSizes}>
                        <img
                            src={srcAllSizes}
                            alt={alt || 'Advertisement'}
                            onError={this.hideOnError}
                        />
                    </a>
                </div>
            );
            ads.push(adAllSizes);
        } else {
            if (desktop) {
                const rand =
                    desktop.length === 1
                        ? 0
                        : Math.floor(Math.random() * desktop.length);
                linkDesktop = desktop[rand].href || '#';
                srcDesktop = desktop[rand].src || '#';

                const adDesktop = (
                    <div className="desktop">
                        <a href={linkDesktop}>
                            <img
                                src={srcDesktop}
                                alt={alt || 'Advertisement'}
                                onError={this.hideOnError}
                            />
                        </a>
                    </div>
                );
                ads.push(adDesktop);
            }

            if (mobile) {
                const rand =
                    mobile.length === 1
                        ? 0
                        : Math.floor(Math.random() * mobile.length);
                linkMobile = mobile[rand].href || '#';
                srcMobile = mobile[rand].src || '#';
                const adMobile = (
                    <div className="mobile">
                        <a href={linkMobile}>
                            <img
                                src={srcMobile}
                                alt={alt || 'Advertisement'}
                                onError={this.hideOnError}
                            />
                        </a>
                    </div>
                );
                ads.push(adMobile);
            }
        }

        const cls = `ad ${unit}`;
        return React.createElement('div', { className: cls, style }, ads);
    }
}
