import { FETCH_USER } from "./types";

export const fetchUserReq= user=>{
    return {
        type: FETCH_USER,
        payload: user
    }
}
