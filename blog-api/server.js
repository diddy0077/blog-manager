import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json"); // make sure db.json exists in root
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
