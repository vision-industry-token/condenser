import React from 'react';
import PropTypes from 'prop-types';

export default class Advertisement extends React.Component {
    static propTypes = {
        unit: PropTypes.string.isRequired,
        src: PropTypes.string,
        alt: PropTypes.string,
        href: PropTypes.string,
        style: PropTypes.object,
    };

    render() {
        const { unit, src, alt, href, style } = this.props;
        const link = href || '#';
        const ad = (
            <a href={link}>
                <img src={src || '#'} alt={alt || 'Advertisement'} />
            </a>
        );
        const cls = `ad ${unit}`;
        return React.createElement('div', { className: cls, style }, [ad]);
    }
}
