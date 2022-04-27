const express=require('express');
const app= express();
const path=require('path');
const port= process.env.PORT || 6000;

app.set('view engine','hbs');
//console.log(path.join(__dirname,"../views/images/"));
staticpath=path.join(__dirname , "../public")
app.use(express.static(staticpath));
app.get("/", (req,res)=>{
    res.render('index');
})
app.get("/home", (req,res)=>{
    res.render('index');
})
app.get("/about", (req,res)=>{
    res.render('about');
})
app.get("/contactus" , (req,res)=>{
    res.render('contactus');
})
app.get("/services" , (req,res)=>{
    res.render('services');
})
app.get("*", (req,res)=>{
    res.status(404).render('404error')
})
app.listen(port, ()=>{
    console.log(`listening to the port ${port}`);
    
})
