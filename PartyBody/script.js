let btn = document.getElementById('btn');
let body =document.getElementById('back')

let index = 0;

const colors = ['red', 'lawngreen', 'blue'];

btn.addEventListener('click', function change_back() {
  body.style.backgroundColor = colors[index];

  index = index >= colors.length - 1 ? 0 : index + 1;
});
