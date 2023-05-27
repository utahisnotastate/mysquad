import {combineReducers} from  'redux' ;
import images from "../api/images.dummydata";
import gradientbackgrounds  from '../../src/api/gradients'
import {updateFriend} from "../api/utility";

function friends(state = [
    {
        handle: '@utahisnotastate',
        messages: [{message: 'hello'}, {message: 'hello', from: 'them'}],
        images,
        background:'linear-gradient(to right, #56ccf2, #2f80ed)'
    },
    {
        handle: '@generalmike',
        messages: [{message: 'hello'}, {message: 'hello', from: 'them'}],
        images,
        background:'linear-gradient(to right, #c31432, #240b36)'
    },
    {
        handle: '@Ivy',
        messages: [
            {
                position:"left",
                type:"text",
                title:"Kursat",
                text:"Give me a message list example !",
            },
            {
                position:"right",
                type:"text",
                title:"Emre",
                text:"That's all.",
            }],
        images,
        background: 'linear-gradient(to right, #c31432, #240b36)'
    },
    {
        handle: '@Sanna',
        messages: [{message: 'hello'}, {message: 'hello', from: 'them'}],
        images,
        background: 'linear-gradient(to right, #333333, #dd1818)'
    }

], action) {
  switch (action.type) {

      case 'SET_FRIENDS':
      return action.friends;

      case 'UPDATE_FRIEND':
          return updateFriend(state, action.friend);
          default:
            return state;

  }
}

function handle(state = '', action) {
  switch (action.type) {
    case 'SET_HANDLE':
      return action.handle;
    default:
      return state;
  }
}

function messages(state = [], action) {
    switch (action.type) {
        case 'SET_MESSAGES':
            return action.messages;
        case 'ADD_MESSAGE':
            return [...state, action.message];
        default:
            return state;
    }
}

function gallery(state = images, action) {
    switch (action.type) {
        case 'SET_IMAGES':
        return action.images;

        default:
        return state;
    }
}

function background (state = 'linear-gradient(to right, #c31432, #240b36)', action) {
    switch (action.type) {

        case 'SET_MOOD':
        return action.background;

        default:
        return state;
    }
}


function gradients(state = gradientbackgrounds, action) {
    switch (action.type) {
        case 'SET_GRADIENTS':
        return action.gradients;

        default:
        return state;
    }
}
const friend = combineReducers({
    handle,
    messages,
    gallery,
    background
});

//create a rootReducer that combines friends and friend
const rootReducer = combineReducers({
    friends,
    friend,
    gradients
});


//combine friend and friends reducers with combineReducers


export default rootReducer;

