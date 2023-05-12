/* "const o "let" = declaración de una variable
    "cipher" es el nombre de la variable
    "=" inicia y declara tu variable */

/* let password ="";


const cipher = function cifrado(password){

  };
  
  export default cipher; */

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(message, shift) {
  let cipheredMessage = "";
  for (let i = 0; i < message.length; i++) {
    const character = message[i];
    const index = alphabet.indexOf(character);
    if (index === -1) {
      cipheredMessage += character;
      continue;
    }
    const cipheredIndex = (index + shift) % alphabet.length;
    const cipheredCharacter = alphabet[cipheredIndex];
    cipheredMessage += cipheredCharacter;
  }
  return cipheredMessage;
}

console.log(caesarCipher("hola mundo", 3)); // "krod pxqgr"
