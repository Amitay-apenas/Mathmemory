const card = document.querySelectorAll('.cards');
const content = document.querySelectorAll(".content")
const svgIndex = '<img class = "mathIcon"src="./img/mathmemory.svg" alt="mathmemory">'
const cardArray = [
    'Cachorro', 'Cachorro',
    'Gato', 'Gato',
    'Elefante', 'Elefante',
    'Leão', 'Leão',
    'Tigre', 'Tigre',
    'Girafa', 'Girafa',
    'Macaco', 'Macaco',
    'Coelho', 'Coelho',
    'Pato', 'Pato',
    'Vaca', 'Vaca'
];
let primeiroCardClicado = null;
let valorPrimeiroCard = null;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(cardArray);

if(card.length < cardArray.length){
    console.error("have more cards than cardArray")
}

card.forEach((card, index) => {
    card.addEventListener('click', () => {
        card.classList.add('activate');

        const contentDoCardClicado = card.querySelector('.content');

        if (contentDoCardClicado) {
            contentDoCardClicado.innerHTML = cardArray[index % cardArray.length];
            console.log(`Conteúdo do card ${index + 1} alterado para: ${cardArray[index % cardArray.length]}`);
        }

        if (content) {
            const valorDoCardAtual = cardArray[index % cardArray.length];
            content.innerHTML = valorDoCardAtual;
            console.log(`Conteúdo do card ${index + 1} alterado para: ${valorDoCardAtual}`);

            if (primeiroCardClicado === null) {
                primeiroCardClicado = card;
                valorPrimeiroCard = valorDoCardAtual;
                console.log("Primeiro card clicado:", valorPrimeiroCard);
            } else if (card !== primeiroCardClicado) {
                const valorSegundoCard = valorDoCardAtual;
                console.log("Segundo card clicado:", valorSegundoCard);

                if (valorSegundoCard === valorPrimeiroCard) {
                    console.log("Você clicou em dois cards com o mesmo valor:", valorPrimeiroCard);

                    setTimeout(() => {
                        card.classList.add('right');
                        primeiroCardClicado.classList.add('right');
                        primeiroCardClicado = null;
                        valorPrimeiroCard = null;
                    }, 1000);
                    
                } else {
                    console.log("Os valores dos cards clicados são diferentes.");

                    setTimeout(() =>{
                        card.classList.remove('activate');
                        primeiroCardClicado.classList.remove('activate');
    
                        const contentDoCardAtual = card.querySelector('.content');
                        const contentPrimeiroCard = primeiroCardClicado.querySelector('.content');
                        if (contentPrimeiroCard) {
                            contentPrimeiroCard.innerHTML = svgIndex; 
                        }
                        if (contentDoCardAtual) {
                            contentDoCardAtual.innerHTML = svgIndex; 
                        }
    
                        primeiroCardClicado = null;
                        valorPrimeiroCard = null;
                    }, 1000);
                }
            }
        }
    });
});