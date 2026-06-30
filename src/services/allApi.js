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
<<<<<<< HEAD
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








// ====================== MENU ======================
// Add Menu
export const addMenuAPI = async (reqBody, reqHeader) => {
  return await commonApiI("POST", `${serverURL}/add-menu`, reqBody, reqHeader);
};

// Get All Menu
export const getAllMenuAPI = async () => {
  return await commonApi("GET", `${serverURL}/all-menu`, {});
};

// Get Single Menu
export const getSingleMenuAPI = async (id) => {
  return await commonApi("GET", `${serverURL}/menu/${id}`, {});
};

// Edit Menu
export const editMenuAPI = async (id, reqBody, reqHeader) => {
  return await commonApi("PUT", `${serverURL}/menu/${id}/edit`, reqBody, reqHeader);
};

// Delete Menu
export const deleteMenuAPI = async (id, reqHeader) => {
  return await commonApi("DELETE", `${serverURL}/menu/${id}/delete`, {}, reqHeader);
};

// ====================== CART ======================
// Add Item To Cart
export const addToCartAPI = async (reqBody, reqHeader) => {
  return await commonApi("POST", `${serverURL}/add-to-cart`, reqBody, reqHeader);
};

// Get User Cart
export const getCartAPI = async (reqHeader) => {
  return await commonApi("GET", `${serverURL}/get-cart`, {}, reqHeader);
};

// Update Cart Quantity
export const updateCartAPI = async (id, reqBody, reqHeader) => {
  return await commonApi("PATCH", `${serverURL}/cart/${id}/edit`, reqBody, reqHeader);
};

// Remove Cart Item
export const deleteCartItemAPI = async (id, reqHeader) => {
  return await commonApi("DELETE", `${serverURL}/cart/${id}/delete`, {}, reqHeader);
};

// Clear Cart
export const clearCartAPI = async (reqHeader) => {
  return await commonApi("DELETE", `${serverURL}/cart/delete`, {}, reqHeader);
};

// ====================== ORDERS ======================
// Place Order
export const placeOrderAPI = async (reqBody, reqHeader) => {
  return await commonApi("POST", `${serverURL}/place-order`, reqBody, reqHeader);
};

// Get Logged-in User Orders
export const getUserOrdersAPI = async (reqHeader) => {
  return await commonApi("GET", `${serverURL}/user-order`, {}, reqHeader);
};

// Get All Orders (Admin)
export const getAllOrdersAPI = async (reqHeader) => {
  return await commonApi("GET", `${serverURL}/all-order`, {}, reqHeader);
};

// Update Order Status (Admin)
export const updateOrderStatusAPI = async (id, reqBody, reqHeader) => {
  return await commonApi("PATCH", `${serverURL}/order/${id}/status`, reqBody, reqHeader);
};

// Cancel Order (User)
export const cancelOrderAPI = async (id, reqHeader) => {
  return await commonApi("PATCH", `${serverURL}/order/${id}/cancel`, {}, reqHeader);
};

// ====================== RESERVATIONS ======================

// Create Reservation
export const createReservationAPI = async (reqBody, reqHeader) => {
  return await commonApi("POST", `${serverURL}/reservations`, reqBody, reqHeader);
};

// Get All Reservations (Admin)
export const getAllReservationsAPI = async (reqHeader) => {
  return awaitcommonApi("GET", `${serverURL}/reservations/all`, {}, reqHeader);
};

// Get Logged-in User Reservations
export const getUserReservationsAPI = async (reqHeader) => {
  return await commonApi("GET", `${serverURL}/reservations/user`, {}, reqHeader);
};

// Get Available Slots
export const getAvailableSlotsAPI = async () => {
  return await commonApi("GET", `${serverURL}/reservations/slots`, {});
};

// Get Single Reservation
export const getSingleReservationAPI = async (id, reqHeader) => {
  return await commonApi("GET", `${serverURL}/reservations/${id}`, {}, reqHeader);
};

// Update Reservation
export const updateReservationAPI = async (id, reqBody, reqHeader) => {
  return awaitcommonApi("PATCH", `${serverURL}/reservations/${id}`, reqBody, reqHeader);
};

// Confirm Reservation (Admin)
export const confirmReservationAPI = async (id, reqHeader) => {
  return await commonApi("PATCH", `${serverURL}/reservations/${id}/confirm`, {}, reqHeader);
};

// Mark Reservation as Arrived (Admin)
export const markArrivedAPI = async (id, reqHeader) => {
  return await commonApi("PATCH", `${serverURL}/reservations/${id}/arrived`, {}, reqHeader);
};

// Cancel Reservation
export const cancelReservationAPI = async (id, reqHeader) => {
  return await commonApi("DELETE", `${serverURL}/reservations/${id}`, {}, reqHeader);
};


// ====================== OFFERS ======================

// Add Offer
export const addOfferAPI = async (reqBody, reqHeader) => {
  return await commonApi("POST", `${serverURL}/offers`, reqBody, reqHeader);
};

// Get All Offers
export const getOffersAPI = async () => {
  return await commonApi("GET", `${serverURL}/offers`);
};

// Get Single Offer
export const getSingleOfferAPI = async (id) => {
  return await commonApi("GET", `${serverURL}/offers/${id}`);
};

// Update Offer
export const updateOfferAPI = async (id, reqBody, reqHeader) => {
  return await commonApi("PATCH", `${serverURL}/offers/${id}`, reqBody, reqHeader);
};

// Delete Offer
export const deleteOfferAPI = async (id, reqHeader) => {
  return await commonApi("DELETE", `${serverURL}/offers/${id}`, {}, reqHeader);
};

// Apply Coupon
export const applyCouponAPI = async (reqBody, reqHeader) => {
  return await commonApi("POST", `${serverURL}/promotions/apply`, reqBody, reqHeader);
};

// ====================== REVIEWS ======================

// Add Review
export const addReviewAPI = async (reqBody, reqHeader) => {
  return await commonApi("POST", `${serverURL}/review/add`, reqBody, reqHeader);
};

// Get All Reviews
export const getAllReviewsAPI = async () => {
  return await commonApi("GET", `${serverURL}/review/all`);
};

// Get Single Review
export const getSingleReviewAPI = async (id) => {
  return await commonApi("GET", `${serverURL}/review/${id}`);
};

// Get Reviews By Menu Item
export const getMenuReviewsAPI = async (menuId) => {
  return await commonApi("GET", `${serverURL}/review/menu/${menuId}`);
};

// Get Logged-in User Reviews
export const getUserReviewsAPI = async (reqHeader) => {
  return await commonApi("GET", `${serverURL}/review/user`, {}, reqHeader);
};

// Update Review
export const updateReviewAPI = async (id, reqBody, reqHeader) => {
  return await commonApi("PUT", `${serverURL}/review/update/${id}`, reqBody, reqHeader);
};

// Delete Review
export const deleteReviewAPI = async (id, reqHeader) => {
  return await commonApi("DELETE", `${serverURL}/review/delete/${id}`, {}, reqHeader);
};


// ====================== ADDRESS APIs ======================

// Add Address
export const addAddressAPI = async (reqBody, reqHeader) => {
  return await commonApi("POST", `${serverURL}/addresses`, reqBody, reqHeader);
};

// Get User Addresses
export const getUserAddressesAPI = async (reqHeader) => {
  return await commonApi("GET", `${serverURL}/addresses`, "", reqHeader);
};

// Get Single Address
export const getSingleAddressAPI = async (id, reqHeader) => {
  return await commonApi("GET", `${serverURL}/addresses/${id}`, "", reqHeader);
};

// Update Address
export const updateAddressAPI = async (id, reqBody, reqHeader) => {
  return await commonApi("PATCH", `${serverURL}/addresses/${id}`, reqBody, reqHeader);
};

// Delete Address
export const deleteAddressAPI = async (id, reqHeader) => {
  return await commonApi("DELETE", `${serverURL}/addresses/${id}`, "", reqHeader);
};


// ====================== PAYMENT APIs ======================

// Add Card
export const addCardAPI = async (reqBody, reqHeader) => {
  return await commonApi("POST", `${serverURL}/payments/cards`, reqBody, reqHeader);
};

// Get User Cards
export const getCardsAPI = async (reqHeader) => {
  return await commonApi("GET", `${serverURL}/payments/cards`, "", reqHeader);
};

// Get Payment Methods
export const getPaymentMethodsAPI = async () => {
  return await commonApi("GET", `${serverURL}/payments/methods`);
};

// Delete Card
export const deleteCardAPI = async (id, reqHeader) => {
  return await commonApi("DELETE", `${serverURL}/payments/cards/${id}`, "", reqHeader);
};


// ====================== NOTIFICATION APIs ======================

// Create Notification
export const createNotificationAPI = async (reqBody, reqHeader) => {
  return await commonApi("POST", `${serverURL}/notifications`, reqBody, reqHeader);
};

// Get User Notifications
export const getNotificationsAPI = async (reqHeader) => {
  return await commonApi("GET", `${serverURL}/notifications`, "", reqHeader);
};

// Get Unread Notification Count
export const getUnreadCountAPI = async (reqHeader) => {
  return await commonApi("GET", `${serverURL}/notifications/unread`, "", reqHeader);
};

// Mark Notification As Read
export const markAsReadAPI = async (id, reqHeader) => {
  return await commonApi("PATCH", `${serverURL}/notifications/${id}`, "", reqHeader);
};

// Delete Notification
export const deleteNotificationAPI = async (id, reqHeader) => {
  return await commonApi("DELETE", `${serverURL}/notifications/${id}`, "", reqHeader);
};


// ====================== DASHBOARD APIs ======================

// Get Dashboard Metrics
export const getDashboardMetricsAPI = async (reqHeader) => {
  return await commonApi("GET", `${serverURL}/dashboard/metrics`, "", reqHeader);
};

// Get Live Orders
export const getLiveOrdersAPI = async (reqHeader) => {
  return await commonApi("GET", `${serverURL}/dashboard/live-orders`, "", reqHeader);
};

// Get Weekly Revenue
export const getWeeklyRevenueAPI = async (reqHeader) => {
  return await commonApi("GET", `${serverURL}/dashboard/weekly-revenue`, "", reqHeader);
};

// Get Upcoming Reservations
export const getUpcomingReservationsAPI = async (reqHeader) => {
  return await commonApi("GET", `${serverURL}/dashboard/upcoming-reservations`, "", reqHeader);
};

// ====================== STAFF APIs ======================

// Add Staff
export const addStaffAPI = async (reqBody, reqHeader) => {
  return await commonApi("POST", `${serverURL}/staff`, reqBody, reqHeader);
};

// Get All Staff
export const getStaffAPI = async (reqHeader) => {
  return await commonApi("GET", `${serverURL}/staff`, "", reqHeader);
};

// Get Single Staff
export const getSingleStaffAPI = async (id, reqHeader) => {
  return await commonApi("GET", `${serverURL}/staff/${id}`, "", reqHeader);
};

// Update Staff
export const updateStaffAPI = async (id, reqBody, reqHeader) => {
  return await commonApi("PATCH", `${serverURL}/staff/${id}`, reqBody, reqHeader);
};

// Deactivate Staff
export const deactivateStaffAPI = async (id, reqHeader) => {
  return await commonApi("PATCH", `${serverURL}/staff/${id}/deactivate`, "", reqHeader);
};

// Search Staff
export const searchStaffAPI = async (search, reqHeader) => {
  return await commonApi("GET", `${serverURL}/staff/search?search=${search}`, "", reqHeader);
};


// ====================== SETTINGS======================
// Get Profile
export const getProfileAPI = async (reqHeader) =>
  await commonApi("GET", `${serverURL}/settings/profile`, "", reqHeader);

// Update Profile
export const updateProfileAPI = async (data, reqHeader) =>
  await commonApi("PATCH", `${serverURL}/settings/profile`, data, reqHeader);

// Upload Logo
export const uploadLogoAPI = async (file, reqHeader) => {
  const formData = new FormData();
  formData.append("logo", file);

  return await commonApi("POST", `${serverURL}/settings/logo`, formData, reqHeader);
};

// Get Theme
export const getThemeAPI = async (reqHeader) =>
  await commonApi("GET", `${serverURL}/settings/theme`, "", reqHeader);

// Save Settings
export const saveSettingsAPI = async (data, reqHeader) =>
  await commonApi("PATCH", `${serverURL}/settings`, data, reqHeader);

// Get Roles
export const getRolesAPI = async (reqHeader) =>
  await commonApi("GET", `${serverURL}/settings/roles`, "", reqHeader);

// Update Roles
export const updateRolesAPI = async (data, reqHeader) =>
  await commonApi("PATCH", `${serverURL}/settings/roles`, data, reqHeader);



// Global Search
export const globalSearchAPI = async (search, reqHeader) =>
  await commonApi("GET", `${serverURL}/search?search=${search}`, "", reqHeader);
>>>>>>> b723d727902ab7c3fc499589df1cf262859cd172







