const io = require("socket.io-client");
const socket = io("192.168.1.7:6543", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});
export default socket;