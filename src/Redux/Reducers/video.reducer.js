import { HOME_VIDEO_FAIL, HOME_VIDEO_REQUEST, HOME_VIDEO_SUCCESS } from "../ActionType"
export const homeVideoRed = (state={
    videos:[],
    loading:false,
    nextPageToken:null
},action)=>{
    const {type,payload} = action
    switch (type) {
        case HOME_VIDEO_SUCCESS:return{
            ...state,
            videos:payload.videos,
            loading:false,
            nextPageToken: payload.nextPageToken
        }
        case HOME_VIDEO_FAIL:return{
            ...state,
            loading:false,
            error:payload
        }
        case HOME_VIDEO_REQUEST:return{
            ...state,
            loading:true,
        }
        default:
            return state
    }
}