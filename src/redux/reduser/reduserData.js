import {SET_COMMENTS, SET_POSTS, SET_USERS} from "../constsAction";

const someInitialState = {
    users: [], posts: [], comments: []
}

export const reduserData = (state = someInitialState, action) => {
    console.log(action)
    switch (action.type)
        {
        case SET_USERS:
            console.log(action.payload)
            return {
                ...state, users: action.payload

            }
        case SET_POSTS:
            return {
                ...state, posts: action.payload
            }
        case SET_COMMENTS:
            return {
                ...state, comments: action.payload
            }
        default:
            return state

        }
}