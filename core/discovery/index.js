const DiscoveryProtocol = require('./discover');

const { ENABLE_DISCOVERY } = process.env;

if (ENABLE_DISCOVERY) {
  const proto = new DiscoveryProtocol();
  proto.start();
}
