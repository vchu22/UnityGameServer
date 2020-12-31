import { Socket } from "dgram";
import * as net from "net";

let server = net.createServer((socket) => {
    console.log(`${socket.remoteAddress} has been connected!`);
})

const PORT = 8080
server.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})