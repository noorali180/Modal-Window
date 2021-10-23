'use strict'

// Selecting the elements...
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const toggleHiddenClass = function(e){
    e.preventDefault();
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}

// adding event listners to all the show modal buttons...
showModal.forEach(mod => mod.addEventListener('click', toggleHiddenClass));

// adding event listner to close modal button...
closeModal.addEventListener('click', toggleHiddenClass);

// adding event listner to overlay, if user will click the overlay modal will be closed...
overlay.addEventListener('click', toggleHiddenClass);

// adding event listener, when user will press the escape button on keyboard...
document.body.addEventListener('keydown', function(e){
    if(e.key === 'Escape') toggleHiddenClass(e);
});

