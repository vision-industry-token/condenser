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
        const image = <img src={src || '#'} alt={alt || 'Advertisement'} />;
        const cls = `ad ${unit}`;
        return React.createElement('a', { className: cls, href: link }, [
            image,
        ]);
    }
}
