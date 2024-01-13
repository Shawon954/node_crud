const express  = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
//const core = require('core');
const port = process.env.PORT || 8000;
const PRO = require('./models/pro_model');


//app.use(core());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Database Connection

mongoose.connect(`mongodb+srv://node_crud:LsEnqqly0W0d4tLb@cluster0.bcaen6z.mongodb.net/Node_API?retryWrites=true&w=majority`)
.then(()=>{
    console.log('ConnectM MongoDB Database');
    app.listen(port,()=>{
        console.log("My Server Port:",port)
    });


}).catch((error)=>{
    console.log(error)
});



app.get('/api/v1/pro',async(req,res)=>{
  try{
      const porduces = await PRO.find({});
      res.status(200).json(porduces);
  }catch(error){
      console.log(message.error.message);
      res.status(500).json(message.error.message)
  }
});

app.get('/api/v1/pro/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const porducesx = await PRO.findById(id);
        res.status(200).json(porducesx);
    }catch(error){
        console.log(message.error.message);
        res.status(500).json(message.error.message)
    }
  });
  


app.post('/api/v1/pro',async(req,res)=>{
    try{
        const prox = await PRO.create(req.body)
        res.status(201).json(prox);
    }
    catch(error){
        res.status(500).json("Internal Server Error",error)
    }
});

app.put('/api/v1/pro/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const updatepro = await PRO.findByIdAndUpdate(id,req.body)
        if(!updatepro){
           return res.status(404).json({message:`cannot find any update pro withId ${id}`})
        }

        const proupdatename = await PRO.findById(id);
        res.status(200).json(proupdatename);
    }
    catch{
        res.status(500).json({message:'Internal Server Error'})
    }
});

app.delete('/api/v1/pro/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const deletpro = await PRO.findByIdAndDelete(id);
        if(!deletpro){
            return res.status(404).json({message:`cannot find any update pro withId ${id}`})
         }
 
         
         res.status(200).json(deletpro);

    }
    catch{
        res.status(500).json({message:'Internal Server Error'});
    }
});





app.get('/',(req,res)=>{
    res.send("Server Running");
});




// user_id: node_crud
// user_pass: LsEnqqly0W0d4tLb