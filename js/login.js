var link = document.querySelector('.login-user');
var modal = document.querySelector('.authentication-window');
var closeModal = document.querySelector('.close-form');

link.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.toggle(open);
});

closeModal.addEventListener('click', function(){
    modal.classList.remove(open);
});

