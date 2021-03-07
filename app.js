import Express from 'express'

const app = Express()
const port = 5551

app.use('/', Express.static('./src/'))

// app.get('/', (req, res, next) =>{
//     res.send('Hello World')
// })

app.listen(port, () =>{
    console.log(`App listening on port: ${port}.`)
})