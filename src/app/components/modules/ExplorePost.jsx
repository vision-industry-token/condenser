import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { serverApiRecordEvent } from 'app/utils/ServerApiClient';
import Icon from 'app/components/elements/Icon';
import CopyToClipboard from 'react-copy-to-clipboard';
import tt from 'counterpart';

class ExplorePost extends Component {
    static propTypes = {
        permlink: PropTypes.string.isRequired,
        short_url: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            copied: false,
        };
        this.onCopy = this.onCopy.bind(this);
        this.TouchTube = this.TouchTube.bind(this);
        this.ChainExplorer = this.ChainExplorer.bind(this);
    }

    TouchTube() {
        serverApiRecordEvent('TouchTubeView', this.props.permlink);
    }

    ChainExplorer() {
        serverApiRecordEvent('ChainExplorerView', this.props.permlink);
    }

    onCopy() {
        this.setState({
            copied: true,
        });
    }

    render() {
        const short_url = this.props.short_url;
        const link = this.props.permlink;
        const chainexplorer = 'https://explore.vit.tube' + link;
        const touchitsocial = 'https://touchit.social' + link;
        const touchtube = 'https://touch.tube' + short_url;
        let text =
            this.state.copied == true
                ? tt('explorepost_jsx.copied')
                : tt('explorepost_jsx.copy');
        return (
            <span className="ExplorePost">
                <h4>{tt('g.share_this_post')}</h4>
                <hr />
                <div className="input-group">
                    <input
                        className="input-group-field share-box"
                        type="text"
                        value={touchitsocial}
                        onChange={e => e.preventDefault()}
                    />
                    <CopyToClipboard
                        text={touchitsocial}
                        onCopy={this.onCopy}
                        className="ExplorePost__copy-button input-group-label"
                    >
                        <span>{text}</span>
                    </CopyToClipboard>
                </div>
                <h5>{tt('explorepost_jsx.alternative_sources')}</h5>
                <ul>
                    <li>
                        <a
                            href={touchtube}
                            onClick={this.TouchTube}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            touch.tube <Icon name="extlink" />
                        </a>
                    </li>
                    <li>
                        <a
                            href={chainexplorer}
                            onClick={this.ChainExplorer}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            chain explorer <Icon name="extlink" />
                        </a>
                    </li>
                    {/*<li>*/}
                    {/*    <a*/}
                    {/*        href={busy}*/}
                    {/*        onClick={this.Busy}*/}
                    {/*        target="_blank"*/}
                    {/*        rel="noopener noreferrer"*/}
                    {/*    >*/}
                    {/*        busy.org <Icon name="extlink" />*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                </ul>
            </span>
        );
    }
}

export default connect()(ExplorePost);
