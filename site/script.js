let FilmesImg = [];
let FilmesNome = [];

function adicionarFilme() {
  let filmeImg = document.getElementById("filmeimg").value;
  let filmeNome = document.getElementById("filmenome").value;

  if (filmeImg.endsWith(".png") || filmeImg.endsWith(".jpg")) {
    FilmesImg.push(filmeImg);
    FilmesNome.push(filmeNome);
    listarFilme();
  } else {
    alert("Link da imagem inválido!");
  }

  document.getElementById("filmenome").value = "";
  document.getElementById("filmeimg").value = "";
}

function listarFilme() {
  document.getElementById("listaFilmes").innerHTML = "";
  for (let i = 0; i < FilmesNome.length; i++) {
    document.getElementById(
      "listaFilmes"
    ).innerHTML += `<p>${FilmesNome[i]}</p> <br> <img src= ${FilmesImg[i]}>`;
  }
}

function removerFilme() {
  var del = prompt("Digite o nome do filme a ser removido: ");
  console.log(del);

  for (let i = 0; i < FilmesNome.length; i++) {
    if (del == FilmesNome[i]) {
      FilmesNome.splice(i, 1);
      FilmesImg.splice(i, 1);

      listarFilme();
      console.log(FilmesNome);
      console.log(FilmesImg);
    } else {
      alert("Nome inválido!");
    }
  }
}
