import { Request, Response } from "express"
import { login } from "./user/login"


const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    console.log('inga vanthchi')
  res.send('Hello World!')
})

app.post('/user/login', login );


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


