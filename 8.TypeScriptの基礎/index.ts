import express,{Express} from "express"

const app = express()

app.get("/", (req, res) => {
  console.log(req.params)
  console.log(req.body)
  console.log(req.query)
    res.send("Hello world")
})

app.listen(3000, () => {
  console.log("Server listening on port 3000")
})