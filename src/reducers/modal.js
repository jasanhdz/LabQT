import { fromJS } from 'immutable';

const initialState = fromJS({
  chatVisibility: false,
  chatBtn: true
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
    default:
      return state;
  }
}

export default modal;