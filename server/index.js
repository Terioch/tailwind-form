const express = require("express");
const app = express();
const PORT = 2200;

app.use(express.static("client")); // Tell server to serve the client directory
app.get("/message", (req, res) => res.send("Time to start building."));

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
