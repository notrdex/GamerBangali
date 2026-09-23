const { app } = require('../../src/bot/index');

export default function handler(req, res) {
  return app(req, res);
}
