const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: any, res: any) => {
    res.json({ message: "Hello World!" })
});

app.listen(port, () => console.log(`Listining on port ${port}!`));