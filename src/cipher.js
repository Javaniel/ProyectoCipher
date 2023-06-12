document.getElementById('cifradoForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const texto = document.getElementById('textoCifrar').value;
  const desplazamiento = document.getElementById('desplazamiento').value;
  const resultado = cifrarTexto(texto, parseInt(desplazamiento));
  document.getElementById('resultado').textContent = `Texto cifrado: ${resultado}`;
});

document.getElementById('descifradoForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const texto = document.getElementById('textoDescifrar').value;
  const desplazamiento = document.getElementById('desplazamiento').value;
  const resultado = descifrarTexto(texto, parseInt(desplazamiento));
  document.getElementById('resultado').textContent = `Texto descifrado: ${resultado}`;
});

function cifrarTexto(texto, desplazamiento) {
  let resultado = '';
  for (let i = 0; i < texto.length; i++) {
    let charCode = texto.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      resultado += String.fromCharCode(((charCode - 65 + desplazamiento) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      resultado += String.fromCharCode(((charCode - 97 + desplazamiento) % 26) + 97);
    } else {
      resultado += texto.charAt(i);
    }
  }
  return resultado;
}

function descifrarTexto(texto, desplazamiento) {
  return cifrarTexto(texto, 26 - desplazamiento);
}
