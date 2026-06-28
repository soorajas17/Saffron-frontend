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


// Checkout 
//// Load Cart
export const getChartAPI = async (reqBody) => {
  return await commonApi("GET", `${serverURL}/get-cart`, reqBody);
};
// (Optional) Load Payment Methods
// Place Order
export const placeOrderAPI = async (reqBody) => {
  return await commonApi("POST", `${serverURL}/place-order`, reqBody);
};

