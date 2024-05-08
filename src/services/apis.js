// const BASE_URL = "https://express-backend-cdlo.onrender.com/api/v1/rules"
// const AUTH_URL = "https://express-backend-cdlo.onrender.com/api/v1/auth"

const BASE_URL = "http://localhost:5000/api/v1/rules"
const AUTH_URL = "http://localhost:5000/api/v1/auth"

//ENDPOINTS
export const endpoints = {
  CREATE_RULE_API: BASE_URL + "/createRule",
}

export const authEndpoints = {
  LOGIN_API: AUTH_URL + "/login",
  REGISTER_API: AUTH_URL + "/register",
}
