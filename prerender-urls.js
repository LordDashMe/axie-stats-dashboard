module.exports = function () {
  return [
    {
      environment: (typeof process !== 'undefined' && typeof process.env !== 'undefined' ? process.env.ENVIRONMENT : 'production'),
      url: '/',
      title: 'Axie Tracker Dashboard',
      description: 'A simplified dashboard for your axie account stats.',
      canonical_url: '/'
    }
  ];
};
