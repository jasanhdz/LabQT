import { fromJS } from 'immutable';

const initialState = fromJS({
  chatVisibility: false,
  chatBtn: true,
  htmlbutton: null,
});

function modal(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_CHAT':
      return state.merge({
        chatVisibility: action.payload.chatVisibility,
        chatBtn: action.payload.chatBtn
      });
    case 'CLOSE_CHAT':
        return state.merge({
          chatVisibility: action.payload.chatVisibility,
          chatBtn: action.payload.chatBtn
        });
    case 'REF_CHAT_BUTTON': {
      return state.set('htmlbutton', action.payload.htmlbutton)
    }
    default:
      return state;
  }
}

export default modal;