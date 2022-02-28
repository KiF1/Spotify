let musicas = [
    {titulo:"A Thousand Years", artista: "Christina Perri", src:"./audio/Christina Perri - A Thousand Years Official Music Video _48k.mp3", img: "./imf/msc.jpg"},
    {titulo:"Be Alright", artista: "Dean Lewis", src:"./audio/Dean Lewis - Be Alright (Official Video)_48k.mp3", img: "./imf/pmf.jpg"},
    {titulo:"All of Me", artista: "John Legend", src:"./audio/John Legend - All of Me (Official Video)_48k.mp3", img: "./imf/aom.jpg"},

]

let indexMusica = 0;

let musica = document.querySelector('audio');

let imagem = document.querySelector(".img");
let nomeMusica = document.querySelector(".descricao h2");
let nomeArtista = document.querySelector(".descricao i");

renderizarMusica(indexMusica);

musica.addEventListener('timeupdate', atualizarBarra);

function renderizarMusica(index){
    musica.setAttribute("src", musicas[index].src);
    musica.addEventListener("loadeddata", () =>{
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        tempoTotal.textContent = segundosParaMinutos(Math.floor(musica.duration));

    })
}

function play(){
    musica.play();
}

function pause(){
    musica.pause();
}

function vlt(){
    musica.currentTime -=15;
}

function avr(){
    musica.currentTime +=15;
}



document.querySelector(".anterior").addEventListener("click", () => {
    indexMusica --;
   renderizarMusica(indexMusica);
  
})

document.querySelector(".proxima").addEventListener("click", () => {
    indexMusica ++;
    renderizarMusica(indexMusica);
   
})

function atualizarBarra(){
    let barra = document.querySelector('progress')
    barra.style.width = (musica.currentTime / musica.duration)* 100 + '%';
    let tempoDecorrido = document.querySelector(".inicio");
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
    let tempoTotal = document.querySelector(".fim");
tempoTotal.textContent = segundosParaMinutos(Math.floor(musica.duration));

}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = "0" + campoSegundos;
    } return campoMinutos + ":" + campoSegundos;
}

function iniciar(){
    let TirarNav = document.getElementById("navbar")
    let TirarShowcase = document.getElementById("showcase")
    let TirarFooter = document.getElementById("footer")
    document.getElementById("container").classList.remove("hiden")
    

    TirarNav.style.display = "none";
    TirarShowcase.style.display = "none";
    TirarFooter.style.display = "none";
   
}