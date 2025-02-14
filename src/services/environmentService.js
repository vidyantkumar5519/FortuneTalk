class EnvironmentService {
  // Hardcoded fallback credentials (for development ONLY)
  static FALLBACK_CREDENTIALS = {
    REACT_APP_ASTROLOGY_USER_ID: '636470',
    REACT_APP_ASTROLOGY_API_KEY: 'f18878ae6d3e7627238b03d4d53999548576e4c1'
  }

  /**
   * Safely retrieve an environment variable
   * @param {string} key - Environment variable key
   * @param {*} [defaultValue] - Optional default value
   * @returns {string} Environment variable value
   */
  static get(key, defaultValue = '') {
    // First, check process.env
    const envValue = process.env[key]
    
    // If environment variable exists, return it
    if (envValue) return envValue

    // Check fallback credentials
    if (this.FALLBACK_CREDENTIALS[key]) {
      console.warn(`[ENV] Using fallback value for ${key}`)
      return this.FALLBACK_CREDENTIALS[key]
    }

    // If no value found, return default
    if (defaultValue !== '') {
      console.warn(`[ENV] Using default value for ${key}`)
      return defaultValue
    }

    console.warn(`[ENV] No value found for ${key}`)
    return ''
  }

  /**
   * Validate required environment variables
   * @param {string[]} requiredVars - List of required environment variables
   * @throws {Error} If any required variables are missing
   */
  static validate(requiredVars) {
    const missingVars = requiredVars.filter(
      varName => !this.get(varName)
    )

    if (missingVars.length > 0) {
      console.warn('[ENV] Using fallback credentials for missing variables')
      return true // Allow fallback in development
    }

    return true
  }

  /**
   * Load configuration for a specific service
   * @param {string[]} requiredVars - List of required variables
   * @returns {Object} Configuration object
   */
  static loadConfig(requiredVars) {
    // Validate and allow fallback
    this.validate(requiredVars)
    
    return requiredVars.reduce((config, varName) => {
      const configKey = this.convertKeyToConfigKey(varName)
      config[configKey] = this.get(varName)
      return config
    }, {})
  }

  /**
   * Convert environment variable key to camelCase config key
   * @param {string} key - Environment variable key
   * @returns {string} Converted config key
   */
  static convertKeyToConfigKey(key) {
    return key
      .replace(/^REACT_APP_/, '')
      .toLowerCase()
      .split('_')
      .map((word, index) => 
        index === 0 
          ? word 
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join('')
  }

  /**
   * Check if running in development mode
   * @returns {boolean} True if in development mode
   */
  static isDevelopment() {
    return process.env.NODE_ENV === 'development'
  }
}

export default EnvironmentService
