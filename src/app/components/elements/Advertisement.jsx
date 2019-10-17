import React from 'react';
import PropTypes from 'prop-types';

export default class Advertisement extends React.Component {
    static propTypes = {
        unit: PropTypes.string.isRequired,
        src: PropTypes.string,
        alt: PropTypes.string,
        href: PropTypes.string,
    };

    render() {
        const { unit, src, alt, href } = this.props;
        const link = href || '#';
        const cls = `ad ${unit}`;
        const image = (
            <img
                className={cls}
                src={src || '#'}
                alt={alt || 'Advertisement'}
            />
        );
        return React.createElement('a', { href: link }, [image]);
    }
}
