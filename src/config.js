module.exports = {
  // API_BASE_URL: process.env.REACT_APP_API_BASE_URL || `https://communitytoolbox.herokuapp.com/api`,
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL || `http://localhost:8000/api`,
  REACT_APP_TOKEN_KEY: 'community-toolbox-auth-token',
  REACT_APP_BASKET_KEY: 'community-toolbox-basket',
  MAPS_API_KEY: process.env.REACT_APP_MAPS_API_KEY
}