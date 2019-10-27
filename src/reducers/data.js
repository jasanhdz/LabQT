import { fromJS } from 'immutable';

const initialState = fromJS({
  user: {},
  message: '',
  messages: []
});

function data(state = initialState, action) {
  switch (action.type) {
    case 'LOADING_MESSAGES': {
      return state.set('messages', fromJS(action.payload)); 
    }
    case 'UPDATE_MESSAGE': {
      return state.set('message', action.payload.message);
    }
    case 'SEND_MESSAGE': {
      return state.set('message', '');
    }
    case 'LOGIN': {
      return state.merge({
        uriProfile: action.payload.uriProfile,
        userName: action.payload.userName
      });
    }
    case 'SIGN_UP': {
      return state.merge({
        uriProfile: action.payload.uriProfile,
        user: action.payload.user
      });
    }
    case 'LOADING_USER': {
      return state.set('user', fromJS({ ...action.payload }));
    }
    default: {
      return state;
    }
  }
}

export default data;