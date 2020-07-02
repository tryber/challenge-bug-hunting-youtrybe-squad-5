import React, { Component } from 'react';

import '../../../../css/searchResult.css';

class VideoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { video } = this.props;
    return (
      <div className="suggested-video search-result">
        <div className="thumbnail">
          <img
            alt="thumbnail"
            src={video.snippet.thumbnails.medium.url}
          />
          {video.id.kind === 'youtube#video' ? <span>17:30</span> : null}
        </div>

        <div className="thumbnail-info">
          <h2>{video.snippet.title}</h2>
          <div className="channel">{video.snippet.channelTitle}</div>
          {video.id.kind === 'youtube#video' ? <div className="views">792K views</div> : null}
          <p className="description">{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoCard;
