import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import VideoPlayerDescription from './VideoPlayer/VideoPlayerDescription';
import VideoPlayerInfo from './VideoPlayer/VideoPlayerInfo';
import VideoPlayerComments from './VideoPlayerComments/VideoPlayerComments';
import VideoSideBar from './VideoSideBar/VideoSideBar';
import { getVideoInfo, getVideoComments } from '../../../api/service';

class VideoPage extends Component {
  constructor(props) {
    super(props);
    const { match, location } = this.props;
    this.state = {
      videoId: match.params.videoId,
      relatedVideos: location.state.data,
      videoInfo: null,
      videoComments: null,
      redirect: false,
    };

    this.handleSelectedVideo = this.handleSelectedVideo.bind(this);
    this.updateVideoInfo = this.updateVideoInfo.bind(this);
  }

  componentDidMount() {
    this.updateVideoInfo(this.state.videoId);
  }

  handleSelectedVideo(videoId) {
    this.setState({ videoId, redirect: true });
    this.updateVideoInfo(videoId);
  }

  updateVideoInfo(videoId) {
    getVideoInfo(videoId).then((data) => this.setState({ videoInfo: data.items[0] }));
    getVideoComments(videoId).then((data) => this.setState({ videoComments: data.items }));
  }

  render() {
    const { videoInfo, redirect, videoId, videoComments, relatedVideos } = this.state;
    if (!videoInfo || !videoComments) return <main />;
    if (redirect) {
      this.setState({ redirect: false });
      return (
        <Redirect
          to={{
            pathname: `/watch/${videoId}`,
            state: { data: relatedVideos },
          }}
        />
      );
    }

    return (
      <main>
        <section className="player">
          <VideoPlayer embedId={videoId} />
          <VideoPlayerInfo
            statisticsInfo={videoInfo.statistics}
            title={videoInfo.snippet.title}
          />
          <VideoPlayerDescription
            channelTitle={videoInfo.snippet.channelTitle}
            description={videoInfo.snippet.description}
            publishedAt={videoInfo.snippet.publishedAt}
          />
          <VideoPlayerComments
            statisticsInfo={videoInfo.statistics}
            videoComments={videoComments}
          />
        </section>
        <section className="sidebar">
          <VideoSideBar
            relatedVideos={relatedVideos}
            handleSelectedVideo={this.handleSelectedVideo}
          />
        </section>
      </main>
    );
  }
}

export default VideoPage;
