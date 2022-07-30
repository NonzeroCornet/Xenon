const path = require("path");
const fs = require("fs");
const fastify = require("fastify")();

fastify.get("/", function (req, res) {
    const bufferIndexHtml = fs.readFileSync(
        path.join(__dirname, "/public/index.html")
    );
    res.type("text/html").send(bufferIndexHtml);
});

fastify.listen({ port: 80, host: "0.0.0.0" }, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Running on ${address} at port 80`);
});
