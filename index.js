
const cardNames = ["Guadalupe", "Ollie", "Aki"]; 
function writeCards(cardNames) {
    let cards = []; 
    for ( let i=0; i<cardNames.length; i++) {
        cards.push(`Thank you, ${cardNames[i]}, for the wonderful surprise gift!`);
    }
    return cards; 
}
function countDown() {
    let count = 11;
    while (count--) {
        console.log(count); 
    }    
}
