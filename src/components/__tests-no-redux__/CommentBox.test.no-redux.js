import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

const testText = 'testing textarea';
const testEvent = { target: { value: testText } };
let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('display a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area: ', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', testEvent);
    wrapped.update();
  });

  it('users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual(testText);
  });

  it('is cleared when form is submitted', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual(testText);
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
