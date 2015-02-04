/*global self*/

self.on('context', function (node, data) {
    self.postMessage(new URL(node.href).protocol);
    return true;
});
