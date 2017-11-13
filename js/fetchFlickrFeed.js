// @flow
import fetchJsonp from './fetchJsonp';

type FlickrPhoto = {
  title: string,
  link: string,
  media: { m: string },
  date_taken: string,
  description: string,
  published: string,
  author: string,
  author_id: string,
  tags: string,
};

export type FlickrFeed = {
  title: string,
  link: string,
  description: string,
  modified: string,
  generator: string,
  items: Array<FlickrPhoto>,
};

type FetchFlickrFeed = () => Promise<FlickrFeed>;

const fetchFlickrFeed: FetchFlickrFeed = () =>
  fetchJsonp(
    'https://api.flickr.com/services/feeds/photos_public.gne?format=json',
  ).then(res => res.json());

export default fetchFlickrFeed;
