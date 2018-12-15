'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/test/json', controller.testApi.json);
  router.get('/test/html', controller.testApi.html);
};
