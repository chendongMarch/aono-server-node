'use strict';

const Controller = require('egg').Controller;

class TestApiController extends Controller {
  async json() {
    this.ctx.body = {
      value: {
        name: 'json body',
      },
    };
  }
  async html() {
    this.ctx.body = '<a href="/"><h1>INDEX PAGE</h1></a>';
  }
}

module.exports = TestApiController;
