import express, { Express } from 'express'

const app: Express = express()
const port = process.env.PORT || '3000'

app.get('/', (req, res) => {
  console.log('Query: ' + req.query)
  console.log('Body: ' + req.body)
  res.send('Hello, World\n\n')
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
