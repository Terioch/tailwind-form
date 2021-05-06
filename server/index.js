const express = require("express");
const app = express();
const PORT = 2200;

app.use(express.static, "client");

app.listen(port, () => {
	console.log(`Server is listening on port ${PORT}`);
});
