import React, { Component } from 'react';
import Hls from 'hls.js';

class HLS extends Component {
    constructor(props, context) {
        super(props, context);
        /*
        There are lots of configuration options avialable here:
        https://github.com/video-dev/hls.js/blob/master/docs/API.md#fine-tuning
    */
        let config = {
            startLevel: 10,
        };
        this.hls = new Hls(config);
    }

    componentWillReceiveProps(nextProps) {}

    componentDidMount() {
        const { src, video } = this.props;
        if (Hls.isSupported()) {
            this.hls.loadSource(src);
            this.hls.attachMedia(video);
            this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
                // Video loaded
                video.play();
            });
        }
    }

    componentWillUnmount() {
        if (this.hls) {
            this.hls.destroy();
        }
    }

    // getVolume() {
    //   let vol = parseFloat(localStorage.getItem("volume"));
    //   if (isNaN(vol) || vol < 0 || vol > 1)
    //     vol = 1;
    //
    //   return vol
    // }
    //
    // isMuted() {
    //   const isMuted = localStorage.getItem("isMuted");
    //   if (!isMuted){
    //       return false;
    //   }
    //   return isMuted === 'true'
    // }
    //
    // onVolumeChange(e) {
    //   localStorage.setItem("isMuted", e.target.muted);
    //   localStorage.setItem("volume", e.target.volume);
    // }

    render() {
        return (
            <source
                src={this.props.src}
                type={this.props.type || 'application/x-mpegURL'}
            />
        );
    }
}

export default HLS;
