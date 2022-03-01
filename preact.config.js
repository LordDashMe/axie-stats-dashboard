export default {
  webpack(config, env, helpers, options) {
    if (
      typeof process !== 'undefined' && 
      typeof process.env !== 'undefined' && 
      process.env.ENVIRONMENT === 'production'
    ) {
      config.output.publicPath = '/axie-stats-dashboard/';
    }
  }
}
