import { HOME_VIDEO_FAIL, HOME_VIDEO_REQUEST, HOME_VIDEO_SUCCESS } from "../ActionType"
import request from "../../components/apis/Yasmine"

export const getPopVideos = () => async dispatch=>{
    try{
        dispatch({
            type: HOME_VIDEO_REQUEST
        })
        const {data} = await request("/videos",{
            params: {
                part: 'snippet,contentDetails,statistics',
                chart: 'mostPopular',
                regionCode: "TN",
                maxResults: 20,
                pageToken:""
            }
        })
        dispatch({
            type:HOME_VIDEO_SUCCESS,
            payload:{
                videos:data.items,
                nextPageToken:data.nextPageToken
            }
        })
    }catch(error){
        console.log(error.message);
        dispatch({
            type:HOME_VIDEO_FAIL,
            payload:error.message
        })
    }
}