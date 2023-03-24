import nodeStatic from "node-static";
import http from "http";

const file = new nodeStatic.Server("./dist");

http.createServer((request, response) => {
  request.on("end", () => {
    file.serve(request, response);
  }).resume();
}).listen(3000);
console.log("Listening on http://localhost:3000");