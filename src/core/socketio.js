import { io } from "socket.io-client";
const socket = io("192.168.1.7:6543");
export default socket;