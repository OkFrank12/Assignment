// Consume 4 methods on req;
/**
 * headers
 * rawTrailers
 * httpVersion
 * method
 */

import http from "http"; //the module that fosters creation of server...

const port: number = 1021;

const server: http.Server<
  typeof http.IncomingMessage,
  typeof http.ServerResponse
> = http.createServer(
  (
    req: http.IncomingMessage,
    res: http.ServerResponse<http.IncomingMessage>
  ) => {
    const { method, url } = req;

    //Condition
    if (method === "DELETE" && url === "/") {
      //   console.log("");
      //   console.log(req.rawHeaders);
      //   const holderStr: any = req.rawTrailers;
      //   const newHolderStr: any = req.rawTrailers.push("Chidera", "Paul", "Ola");
      //   res.write(JSON.stringify(holderStr));
      //   res.end();
      //   console.log(req.httpVersion)
      //   res.end();
      res.write(req.method);
      res.end();
    } else {
    }
  }
);

server.listen(port, () => {
  console.log("Server is up and running!");
});
