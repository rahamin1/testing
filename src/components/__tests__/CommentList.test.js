import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: [ 'comment1', 'comment2']
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates one <li> per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('renders the text for each comment', () => {
  //console.log(wrapped.render().text());
  const foundText = wrapped.render().text();
  expect(foundText).toContain('comment1');
  expect(foundText).toContain('comment2');
  expect(foundText).not.toContain('comment3');
});
