import dotenv from 'dotenv'
dotenv.config()

const config = {
  node_env: process.env.NODE_ENV,
  secretKey: process.env.VUE_APP_SUBSCRIPTION_KEY,
  baseUrl: process.env.VUE_APP_API_BASE_URL
}

export default config
