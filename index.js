// Code your solutions in this file
const countDown = (num) => {
    for(let i = num; i>=0; i--){
        console.log(i)
    }
}

// const writeCards = (message) => {
//     return message.map(message => `Thank you, ${message}, for the wonderful surprise gift!`);
// }

function writeCards(message){
    let cards = []
    for(let i = 0; i < message.length; i++){
        cards.push(`Thank you, ${message[i]}, for the wonderful surprise gift!`)
    }
    return cards
}