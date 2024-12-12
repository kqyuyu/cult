const imageList = ['images/234.png', 'images/123.png', 'images/egg.png'];
const img = document.querySelector('.img');
const next = document.getElementById('next');
let numImage = 0; // Используем let для лучшей практики

img.src = imageList[numImage];

next.addEventListener('click', () => {
    numImage++;
    if (numImage >= imageList.length) {
        numImage = 0;
    }
    img.src = imageList[numImage];
});
