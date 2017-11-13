// @flow
import React from 'react';
import { css, keyframes } from 'glamor';

const fadeInUp = keyframes({
  '0%': {
    transform: 'translate3d(0, 40px ,0)',
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    opacity: 1,
  },
});

const style = css({
  display: 'flex',
  flexDirection: 'column',
  background: '#FFFFFF',
  borderRadius: 12,
  overflow: 'hidden',
  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
  margin: '0 12px 24px 12px',
  flexBasis: 312,
  flexGrow: 1,
  color: '#292929',
  '& > main': {
    padding: 12,
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
    },
    '& h2': {
      fontSize: 14,
    },
    '& span': {
      color: '#999999',
      fontSize: 12,
    },
    '& p': {
      color: '#686868',
      fontSize: 12,
    },
  },
  '& > footer': {
    marginTop: 'auto',
    borderTop: '1px solid #ccc',
    marginBottom: '-3px',
    padding: 12,
    color: '#999999',
    fontSize: 12,
  },
});

type Props = {
  index: number,
  url: string,
  link: string,
  title: string,
  author: string,
  authorId: string,
  description: string,
  tags: string,
};

const Photo = (props: Props) => {
  // we want the larger version flickr also hosts
  const url = props.url.replace('_m', '_b');

  // we need to strip out the email to just display the name
  const author = props.author.split('"')[1];

  // we need to strip the "[author] posted a photo:" and the extra
  // image included in the description and any other tags
  // TODO: probably check for xss vulnerabilities
  /* eslint-disable react/no-danger */
  const description = props.description
    .replace(/<\/?[^>]+(>|$)/g, '')
    .split('posted a photo:')[1];

  // we want to display tags as comma rather than space seperated
  const tags = props.tags.split(' ').join(', ');

  return (
    <div
      className={style}
      css={{
        opacity: 0,
        animation: `${fadeInUp} 0.6s ${props.index / 10}s`,
        animationFillMode: 'forwards',
      }}
    >
      <div
        css={{
          background: `#ccc url(${url}) center / cover`,
          height: 264,
        }}
      />
      <main>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <h2>{props.title}</h2>
        </a>
        <span>
          by{' '}
          <a
            href={`https://www.flickr.com/photos/${props.authorId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {author}
          </a>
        </span>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </main>
      <footer>Tags: {tags}</footer>
    </div>
  );
};

export default Photo;
