// @flow
import { css } from 'glamor';

// declare only some simple css which is hard to declare at component level
css.global('html ', { boxSizing: 'border-box' });
css.global('*, *:before, *:after', { boxSizing: 'inherit' });
css.global('body', {
  fontFamily: '"Open Sans", sans-serif',
  lineHeight: '24px',
  background: '#EFEFEF',
  overflowX: 'hidden',
});
css.global('h1, h2, h3, h4, p', { margin: 0 });
