
  
 let palavra;

 function setup() {
   createCanvas(400, 400);
   palavra = palavraAleatoria();
 
 }
 
 function palavraAleatoria(){
     let palavras=["rato", "tomando", "banho","bom"];
   return random(palavras);
 }
 
 function inicializaCores(){
   background("blue");
   fill("black");
   textSize(70);
   textAlign(CENTER,CENTER);
 }
 
 function palavraParcial(minimo, maximo){
   let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
   let parcial = palavra.substring(0, quantidade);
   return parcial;
 }
 
 function draw() {
   inicializaCores();
   let texto = palavraParcial(0,width);
   text(texto, 200, 200);
   
   /*if(mouseX < 50){
     let palavra = 'r';
   text(palavra, 200, 200);
 } else if(mouseX <100){
   let palavra = 'ra';
   text(palavra, 200, 200);
   
 } else if(mouseX <150){
   let palavra = 'rat';
   text(palavra, 200, 200);
   
 } else if(mouseX <200){
   let palavra = 'rato';
   text(palavra, 200, 200);}
 }*/
 }
 