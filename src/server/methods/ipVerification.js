
const { isProxy } = require('is-proxy');
const ipVerification = async (req, res) => {
  const ip = req.clientIp;
  const proxy = isProxy(ip);
  if (proxy) return res.send(":(");
  else return;
};
module.exports = ipVerification;