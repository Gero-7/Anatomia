//requerimos express
const express = require('express');
//requioromo spath para usar el metod sendfile y pode mostrar los archivos
const path = require('path');
//funcionalidades de express
const app = express();
//Tiene el metodo listen exprees para poneer a correr un servidor
app.listen(3000,()=>{
    console.log("servidor corriendo")
});
//Pedir que me muetre con get
app.get("/",function(req,res){
    res.send("Hola Gero")
});
//metodo para cada ruta
app.get("/home",function(req,res){
    res.send("wlecome")
});
//METODO SENDFILE() nos permitira enviar un archio al navegador para interpretarlo
app.get("/gero",function(req,res){
    let htmlPath = path.resolve(__dirname,'./views/index.html')
     res.sendFile(htmlPath);
})

