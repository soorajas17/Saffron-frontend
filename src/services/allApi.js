import { commonApi } from "./commonApi"
import { serverURL } from "./server_URL"

// Register
export const registerAPI = async (reqBody) => {
  return await commonApi("POST", `${serverURL}/register`, reqBody);
};

// Login
export const loginAPI = async (reqBody) => {
  return await commonApi("POST", `${serverURL}/login`, reqBody);
};
