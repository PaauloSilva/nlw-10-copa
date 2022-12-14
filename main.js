/* Nessa função podemos alterar os times e adcionar o horário dos jogos */
function createGame(player1, hour, player2) {
    return `
            <li>
                <img src="./assets/icon-${player1}.svg" 
                alt="Bandeira do ${player1}"/>
                <strong>${hour}</strong>
                <img src="./assets/icon-${player2}.svg" 
                alt="Bandeira da ${player2}"/>
            </li>
    `
}

/* Dentro dessa função temos que aplicar o dia em formato numérico, em dias da semana  */
let delay = -0.4;
function createCard(date, day, games){
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>           
        <ul>
            ${games}
        </ul>
    </div>
    `
}
/* Essa função está pegando o id="app" e substituindo sua estrutura pelo HTML externo que estamos criando */
/*Dentro do HTML estamos criando um card <|> Dentro do main aplicamos uma função que chama a estrutura do card*/
/*Para criar mais partidas dentro do card, será preciso concatenar com a funcão creatGame */

document.querySelector('#cards').innerHTML =

    createCard('24/11', "quinta", 
    createGame('switzerland', '07:00', 'cameroon') + 
    createGame('uruguay', '10:00', 'south-korea') +
    createGame('portugal', '13:00', 'ghana') +
    createGame('brazil', '16:00', 'serbia')) +

    createCard('28/11', "segunda", 
    createGame('cameroon', '07:00', 'serbia') +
    createGame('south-korea', '10:00', 'ghana') +
    createGame('brazil', '13:00', 'switzerland') + 
    createGame('portugal', '16:00', 'uruguay')) +

    createCard('02/12', "sexta", 
    createGame('south-korea', '12:00', 'portugal') + 
    createGame('ghana', '12:00', 'uruguay') +
    createGame('cameroon', '16:00', 'brazil') + 
    createGame('serbia', '16:00', 'switzerland'))
   
    
    
    
