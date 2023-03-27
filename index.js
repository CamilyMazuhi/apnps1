const express= require ('express')
const app=express ()
var bodyParser= require('body-parser')
var cookieParser= require('cookie-parser')
var path=require ('path')

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.set ("view engine","ejs")

app.use(express.static(path.join(__dirname,"public")))


app.get('/',function(req,res){
 res.render ('index.ejs',{})
})

app.get('/usuarios',function(req,res){
    res.render ('usuarios.ejs',{usuarios:[
        {Nome:'camily',email: 'camily@gmail.com'},
        {Nome:'Diego',email: 'Diego@gmail.com'},
        {Nome:'Tais',email: 'Tais@gmail.com'},
        {Nome:'José',email: 'José@gmail.com'}
    ]

    })

   }) 

   app.get('/add',function(req,res){
    res.render('adiciona.ejs')


   })

   app.post('/add',function(req,res){
    console.log("Nome:" + req.body.txtNome+" Email:"+ req.body.txtEmail)
   })

app.listen(3000, function(){
    
    console.log("Conexão inicializada")

})

