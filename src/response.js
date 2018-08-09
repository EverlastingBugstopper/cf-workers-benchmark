const _getHello = function() {
  return "Hello";
};

const _getWorld = function() {
  return "World";
};

const getResponse = function(Response = Response) {
  return new Response(`${_getHello()}, ${_getWorld()}!`);
};

module.exports = {
  getResponse
};
