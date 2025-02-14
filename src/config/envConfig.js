// Environment Configuration Loader
const loadEnvConfig = () => {
  const requiredEnvVars = [
    'REACT_APP_ASTROLOGY_USER_ID',
    'REACT_APP_ASTROLOGY_API_KEY'
  ]

  const missingVars = requiredEnvVars.filter(
    varName => !process.env[varName]
  )

  if (missingVars.length > 0) {
    console.error('Missing Environment Variables:', missingVars)
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`)
  }

  return {
    astrologyUserId: process.env.REACT_APP_ASTROLOGY_USER_ID,
    astrologyApiKey: process.env.REACT_APP_ASTROLOGY_API_KEY
  }
}

export default loadEnvConfig
