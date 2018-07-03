import CommentsReducer from 'reducers/CommentsReducer';
import { SAVE_COMMENT } from 'actions/types';

it('handles the SAVE_COMMENT action properly', () => {

  const newComment = 'Interesting comment';
  const wrongComment = 'Another comment';
  const action = {
    type: SAVE_COMMENT,
    payload: newComment
  };

  const newState = CommentsReducer([], action);
  expect(newState).not.toEqual([wrongComment]);
  expect(newState).toEqual([newComment]);
});

it('handles properly unknown actions', () => {
  const action = {
    type: 'bla bla',
    payload: null
  };

  const newState = CommentsReducer(['bbb'], action);
  expect(newState).not.toEqual(['aaa']);
  expect(newState).toEqual(['bbb']);
});
