const mongoose =require ('mongoose')
const uri= "mongodb://diego:diego@ac-pcra3vd-shard-00-00.ajiapmy.mongodb.net:27017,ac-pcra3vd-shard-00-01.ajiapmy.mongodb.net:27017,ac-pcra3vd-shard-00-02.ajiapmy.mongodb.net:27017/?ssl=true&replicaSet=atlas-14e4b2-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedtopology:true})

module.exports=mongoose