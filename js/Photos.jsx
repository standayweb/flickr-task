// @flow
import React from 'react';

const Photos = (props: Object) => (
  <div
    css={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: 24,
      margin: '0 -12px',
    }}
    {...props}
  />
);

export default Photos;
