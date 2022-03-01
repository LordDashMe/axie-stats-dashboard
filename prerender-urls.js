module.exports = function () {
  return [
    {
      env: (typeof process !== 'undefined' && typeof process.env !== 'undefined' ? process.env.ENVIRONMENT : 'production'),
      url: '/',
      title: 'Axie Stats Dashboard',
      description: 'A simplified dashboard for your Axie Infinity stats.',
      canonical_url: (typeof process !== 'undefined' && typeof process.env !== 'undefined' && process.env.ENVIRONMENT === 'production' ? '/axie-stats-dashboard/' : '/')
    }
  ];
};
