Webcam.attach('camara');
 camera=document.getElementById("camara");

 Webcamp.set (
{
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

 function capturar_imagen(){
Webcam.snap (function(data_uri)
{
 document.getElementById("resultado").innerHTML='<img id="foto_tomada" src="'+data_uri+'"/>';   
});
 }