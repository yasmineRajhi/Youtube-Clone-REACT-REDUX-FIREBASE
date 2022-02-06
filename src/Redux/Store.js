import { createStore, applyMiddleware,combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {authReducer} from './Reducers/auth.reducer'
import {homeVideoRed,searchVideosReducer,selectedVideoReducer,relatedVideoReducer, subscriptionsChannelReducer} from './Reducers/video.reducer'
import {channelDetailsReducer} from './Reducers/Channel.reducer'
import {commentListReducer} from './Reducers/Comments.reducer'
const rootReducer = combineReducers({
    auth:authReducer,
    homeVideos:homeVideoRed,
    searchVideos:searchVideosReducer,
    selectedVideo:selectedVideoReducer,
    channelDetails:channelDetailsReducer,
    commentList:commentListReducer,
    relatedVideos:relatedVideoReducer    
})

const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))

export default store;