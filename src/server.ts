import Index from "express"

const app = Index()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)