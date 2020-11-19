function exibir_categoria (categoria){
let elemento = document.getElementsByClassName ('itens');
console.log(elemento);

}



function ver_info (figure){
    let legenda = figure.getElementsByClassName("legenda") [0] ;
      legenda.style.visibility; "initial";
   }
     
   function esconder_info (figure){
    let legenda = figure.getElementsByClassName("legenda") [0] ;
      legenda.style.visibility; "hidden";
   }
   
   function exibir_mensagem(figure){
     let legenda = figure.getElementsByClassName("legenda")[0];
     let nome = legenda.getElementsByClassName("p")[0].innerText;
     let preco = legennda.getElementsByClassName("p")[1].innerText;
     alert("nome do produto: " + nome + "preço do produto" + preco);


   }