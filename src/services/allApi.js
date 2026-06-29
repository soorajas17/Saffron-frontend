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
// get-profile
export const getProfileAPI = async (reqHeader) => {
  return await commonApi("GET", `${serverURL}/profile`, "", reqHeader);
}

// update-profile
export const updateProfileAPI = async (reqBody, reqHeader) => {
  return await commonApi("PUT", `${serverURL}/profile-update`, reqBody, reqHeader
  );
}
// addAddressAPI
export const addAddressAPI = async (reqBody, reqHeader) => {
  return await commonApi("POST", `${serverURL}/address-add`, reqBody, reqHeader);
};
// getAddressAPI
export const getAddressAPI = async (reqHeader) => {
  return await commonApi("GET", `${serverURL}/get-address`, "", reqHeader);
};
// delete-address
export const deleteAddressAPI = async (id, reqHeader) => {
  return await commonApi(
    "DELETE", `${serverURL}/address-delete/${id}`, {}, reqHeader
  );
};
// updateProfileImageApi
export const updateProfileImageAPI = async (reqBody, reqHeader) => {
  return await commonApi("PUT", `${serverURL}/profile-image`, reqBody, reqHeader);
};










