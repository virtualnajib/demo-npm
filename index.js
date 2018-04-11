const _ = require("lodash");
let randomText = "THis Is A random tEXt";

//convert to lower case
randomText = _.toLower(randomText);
console.log(randomText);

randomText = _.startCase(randomText);
console.log(randomText);

const R =require("ramda");
const add = R.add(1,2);
console.log(add)


const http = require("http");
const HOST = "localhost";
const PORT = 3000;
const requestHandler = (request, response) => {
  console.log(request.url);
  response.end("Hello bastard");
}
const server = http.createServer(requestHandler);

server.listen(PORT, HOST, err => {
  if(err) {
    return console.log("Something bad happened", err);
  } else {
    console.log("Server is listening on" + HOST + PORT);
  };
});
