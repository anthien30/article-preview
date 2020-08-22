const share_btn = document.querySelector('.share');
const share_icons = document.querySelector('.social-media');
const body = document.querySelector('body');

share_btn.addEventListener('click', function() {
    // share_icons.style = 'display:flex;';
    share_icons.classList.toggle('open');
});

body.addEventListener('click', function(event) {
    console.log(event);
})