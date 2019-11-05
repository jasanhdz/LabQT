import { fromJS } from 'immutable';

const initialState = fromJS({
  user: {},
  message: '',
  messages: [],
  posts: [],
  isVisibility: false,
  id: null,
  userUid: null
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
    case 'LOADING_POSTS': {
      return state.set('posts', fromJS( action.payload) );
    }
    case 'LOADING_OLD_POSTS': {
      return state.set('posts', fromJS( action.payload) );
    }
    case 'DELETE_POST': {
      return state.merge(fromJS({
        isVisibility: true,
        id: action.payload.id,
        userUid: action.payload.userUid
      }))
    }
    case 'CLOSE_MODAL_DELETE_POST': {
      return state.merge(fromJS({
        isVisibility: false,
        id: null,
      }))
    }
    default: {
      return state;
    }
  }
}

export default data;