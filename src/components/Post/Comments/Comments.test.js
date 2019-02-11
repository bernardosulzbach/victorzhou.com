import React from 'react';
import renderer from 'react-test-renderer';
import { CommentsContainer as Comments } from './Comments';

describe('Comments', () => {
  it('renders correctly', () => {
    const props = {
      data: {
        site: {
          siteMetadata: {
            url: 'http://localhost',
            disqusShortname: 'test'
          }
        }
      },
      postTitle: 'test',
      postSlug: '/test',
    };

    const tree = renderer.create(<Comments {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
