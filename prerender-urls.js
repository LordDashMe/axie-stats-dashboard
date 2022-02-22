module.exports = function () {
  return [
    {
      url: (typeof process !== 'undefined' && process.env.ENVIRONMENT === 'production' ? '/axie-tracker-dashboard/' : '/'),
      title: 'Axie Tracker Dashboard',
      description: 'A simplified dashboard for your axie account stats.',
      canonical_url: '/'
    }
  ];
};
