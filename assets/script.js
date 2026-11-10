const foto = document.getElementById('foto');
const modalFoto = document.getElementById('modalFoto');
const btnTirarFoto = document.getElementById('btnTirarFoto');
const btnFecharModal = document.getElementById('btnFecharModal');
const mensagem = document.getElementById('mensagem');

Webcam.set({
  width: 400,
  height: 300,
  image_format: 'jpeg',
  jpeg_quality: 90
});


Webcam.attach('#camera');


Webcam.on('error', function (erro) {
  mensagem.textContent = 'Não foi possível acessar a câmera: ' + erro;
});

function tirarFoto() {
  Webcam.snap(function (imagemCapturada) {
    foto.src = imagemCapturada;
    modalFoto.classList.remove('escondido');
  });
}


function fecharModal() {
  modalFoto.classList.add('escondido');
}


btnTirarFoto.addEventListener('click', tirarFoto);
btnFecharModal.addEventListener('click', fecharModal);


modalFoto.addEventListener('click', function (evento) {
  if (evento.target === modalFoto) {
    fecharModal();
  }
});