import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard/VideoCard';

import '../../../css/sideBar.css';
import { searchVideos } from '../../../api/service';

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: '',
    };
  }

  componentDidMount() {
    const { match: { params: { searchParam } } } = this.props;

    searchVideos(searchParam).then((data) => {
      this.removeChannel(data.items);
    }).catch((error) => this.setState({ error }));
  }

  removeChannel(items) {
    const videos = items.filter((item) => item.id.kind !== 'youtube#channel');
    this.setState({ data: videos });
  }

  render() {
    const { data, error } = this.state;

    if (data.length < 1) return (<div>Loading...</div>);
    if (error !== '') return (<div>{error}</div>);
    return (
      <div>
        {data.map((item) => (
          <Link
            className="thumbnail-card"
            key={item.etag}
            to={{
              pathname: `/watch/${item.id.videoId}`,
              state: { data },
            }}
          >
            <VideoCard video={item} />
          </Link>
        ))}
      </div>
    );
  }
}

export default SearchResult;
