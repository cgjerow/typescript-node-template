import express, { Express } from 'express'

const app: Express = express()
const port = process.env.PORT || '3000'

app.get("/", (req, res) => {
    res.send("Hello, World\n\n" + JSON.stringify(req.body));
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
