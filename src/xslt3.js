const { createBackwardCompatible } = require("./libs/utils.js");

module.exports = function (RED) {
  function Xslt3(config) {
    RED.nodes.createNode(this, config);
    const node = this;

    node.on("input", function (msg, send, done) {

      // If this is pre-1.0, 'send' will be undefined, so fallback to node.send 
      send = send || function () { node.send.apply(node, arguments) }
      // Backwards compatibility - https://nodered.org/blog/2019/09/20/node-donew

      createBackwardCompatible(config);

      const credentials = RED.nodes.getCredentials(node.id);

      RED.nodes.addCredentials(node.id, credentials);

      // eslint-disable-next-line no-unused-vars
      const sendError = (e) => {
        node.status({ fill: "red", shape: "dot", text: "Error" });
        let errorMsg = e.message;
        if (e.message && isNaN(e.message.substring(0, 1)) && e.status) {
          errorMsg = e.status + " " + e.message;
        }
        msg.response = e.response;
        if (config.errorHandling === "other output") {
          send([null, msg]);
        } else if (config.errorHandling === "throw exception") {
          if (done) {
            done(errorMsg);
          } else {
            node.error(errorMsg, msg);
          }
        } else {
          send(msg);
          if (done) done();
        }
      };
    })
  }
  RED.nodes.registerType("xslt3", Xslt3);

  RED.nodes.registerType("xslt3-credentials", Xslt3, {
    credentials: {},
  });

};

