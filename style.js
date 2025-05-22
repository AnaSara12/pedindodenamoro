function sim() {
    alert("Você aceitou namorar comigo!:)");
    location.href = "https://www.youtube.com/watch?v=D9W4DLjmoOM&list=RDQMd9f0yM7j-6I&index=4"
}

function desvia(btn){
    // btn declarado na função
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10,90);
    btn.style.left = geraPosicao(10,90);
    console.log('opa, desviei...');

}

function geraPosicao(min, max){
    return (Math.random() * (max - min) + min) + "%"
}