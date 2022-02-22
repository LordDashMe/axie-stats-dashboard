export default {
  webpack(config, env, helpers, options) {
    if (typeof process !== 'undefined' && process.env.ENVIRONMENT === 'production') {
      config.output.publicPath = '/axie-tracker-dashboard/';
    }
  }
}
