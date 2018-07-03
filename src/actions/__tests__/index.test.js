import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
  it('fires a proper SAVE_COMMENT action', () => {

    const newComment = "Very interesting comment";
    const correctAction = {
      type: SAVE_COMMENT,
      payload: newComment
    };

    const wrongAction1 = {
      type: 'bla',
      payload: 'aaaa'
    };

    const wrongAction2 = {
      type: SAVE_COMMENT,
      payload: 'bla'
    };

    const returnedAction = saveComment(newComment);
    expect(returnedAction).toEqual(correctAction);
    expect(returnedAction).not.toEqual(wrongAction1);
    expect(returnedAction).not.toEqual(wrongAction2);
  });
});
