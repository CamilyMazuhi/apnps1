const express= require ('express')
const app=express ()

app.get('/',function(req,res){
 res.send ("Olá Camily")
})

app.get('/msg',function(req,res){
    res.send ("Essa mensagem é automática]")
   })

   app.get('/msg',function(req,res){
    res.send ("Essa página está sendo desenvolvida pela camily")
   })

app.listen(3000, function(){
    
    console.log("Conexão inicializada")

})

