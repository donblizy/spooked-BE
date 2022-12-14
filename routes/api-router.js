const apiRouter = require("express").Router();
const storiesRouter = require("./stories-router");
const topicsRouter = require("./topics-router");
const usersRouter=require("./users-router")

// apiRouter
//   .route("/")
//   .get((req, res) => res.send("I'm getting"))
//   .post((req, res) => res.send("I'm posting"));

apiRouter.use("/stories", storiesRouter);

apiRouter.use("/topics", topicsRouter);

apiRouter.use("/users", usersRouter);

module.exports = apiRouter;
