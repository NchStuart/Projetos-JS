const colors = [
    'Blue',
    'Green',
    'Red',
    'Purple',
    'Rgba(133,122,200)'
];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomNumber = numberRandomGenerate();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function numberRandomGenerate() {
    return Math.floor(Math.random() * colors.length);
};
