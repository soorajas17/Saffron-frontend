import commonAPI from "./commonAPI";
import serverURL from "./serverURL";

//register
export const registerAPI=async (reqBody)=>{
    return await commonAPI("POST",`${serverURL}/register`,reqBody)
}

//login
export const loginAPI=async (reqBody)=>{
    return await commonAPI("POST",`${serverURL}/login`,reqBody)
}