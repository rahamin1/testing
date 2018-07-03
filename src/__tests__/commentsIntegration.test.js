import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      { name: 'dummy Comment 1' },
      { name: 'dummy Comment 2' },
      { name: 'dummy Comment 3' },
      { name: 'dummy Comment 4' }
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
});

// done is a name of a function that we are using to tell Jest
// that it is the right time to check the test's status
it('can fetch a list of comments and display them', (done) => {

  // attempt to render the entire App
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetch comments' button and click it
  wrapped.find('.fetch-comments-button').simulate('click');

  // expect to find a list of comments
  // wait for moxios to let it finish its thing
  moxios.wait(() => {
    wrapped.update();   // render the wrapped component, to make sure we
                        // will test it in its updated condition
    expect(wrapped.find('li').length).toBeGreaterThan(1);
    done();   // tell Jest that we are done
    wrapped.unmount();
  });

  /* An alternative to the above
  // Set a timeout to let the moxios 'simulator' do its thing
  setTimeout(() => {
    wrapped.update();   // render the wrapped component, to make sure we
                        // will test it in its updated condition
    expect(wrapped.find('li').length).toBeGreaterThan(1);
    done();   // tell Jest that we are done
    wrapped.unmount();
  }, 100);
  */

});
