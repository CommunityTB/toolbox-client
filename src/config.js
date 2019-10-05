module.exports = {
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL || `https://communitytoolbox.herokuapp.com/api`,
  REACT_APP_TOKEN_KEY: 'community-toolbox-auth-token',
  GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY || 'AIzaSyDNgxQ8uYfWohowute6UUSbmTcSGVN4G-4',
  // remove key for deployment
}
