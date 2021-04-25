const io = require("socket.io-client");
const socket = io("192.168.1.202:6543", {
  withCredentials: true,
});
export default socket;