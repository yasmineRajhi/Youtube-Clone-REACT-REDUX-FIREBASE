import { createStore, applyMiddleware,combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {authReducer} from './Reducers/auth.reducer'
import {homeVideoRed} from './Reducers/video.reducer'

const rootReducer = combineReducers({
    auth:authReducer,
    homeVideos:homeVideoRed
})

const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))

export default store;