//configuração do servidor
const express = require('express')
const app = express()
const port = process.env.PORT || 3030
app.use(express.json())
app.set('view engine','ejs')

//rota padrão 
app.get('/',(rec,res) => {
    res.render('index.ejs')
})

//upload
app.post('/',(rec,res) =>{
    res.send("ok")
    console.log(`Servidor escutando em http://localhost:$
    {port}`)
})
//escuta do servidor
app.listen(port,() => {
   console.log(`Servidor executando em http://localhost:${port}`)
})