// @flow
import React, { Component } from 'react';
import 'glamor/reset';
import './globalCss';
import fetchFlickrFeed from './fetchFlickrFeed';
import type { FlickrFeed } from './fetchFlickrFeed';
import Photos from './Photos';
import Photo from './Photo';

type Props = {};

type State = {
  loading: boolean,
  err: boolean,
  flickrFeed: FlickrFeed | void,
};

class App extends Component<Props, State> {
  state = {
    loading: true,
    err: false,
    flickrFeed: undefined,
  };

  componentDidMount() {
    fetchFlickrFeed()
      .then(res => {
        this.setState({
          loading: false,
          flickrFeed: res,
        });
      })
      .catch(() => {
        this.setState({
          err: true,
        });
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <Photos>
          <img
            src="public/loading-spinner.gif"
            alt="Loading Photos"
            css={{
              position: 'relative',
              top: 120,
            }}
          />
        </Photos>
      );
    }

    if (this.state.err || !this.state.flickrFeed) {
      return <Photos>Error Loading Photos</Photos>;
    }

    return (
      <Photos>
        {this.state.flickrFeed.items.map((photo, index) => (
          <Photo
            index={index}
            url={photo.media.m}
            link={photo.link}
            title={photo.title}
            author={photo.author}
            authorId={photo.author_id}
            description={photo.description}
            tags={photo.tags}
          />
        ))}
      </Photos>
    );
  }
}

export default App;
