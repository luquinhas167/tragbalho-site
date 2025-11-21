document.getElementById('menuToggle').addEventListener('click', function(){
  const nav = document.querySelector('.nav');
  if(nav.style.display === 'flex') nav.style.display = '';
  else nav.style.display = 'flex';
});

function openModal(name){
  const modal = document.getElementById('modal');
  const body = document.getElementById('modalBody');
  body.innerHTML = '<h3>Quero adotar: ' + name + '</h3><p>Preencha o formulário de contato para iniciar o processo de adoção. Nosso time responderá em até 48h.</p><p><strong>Requisitos:</strong> entrevista, visita prévia e assinatura de termo de responsabilidade.</p>';
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal(){
  const modal = document.getElementById('modal');
  modal.setAttribute('aria-hidden', 'true');
  document.getElementById('modalBody').innerHTML = '';
}

function submitForm(e){
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  alert('Obrigado, ' + nome + '! Recebemos sua mensagem. Em breve entraremos em contato via ' + email + '.');
  document.getElementById('contactForm').reset();
}
