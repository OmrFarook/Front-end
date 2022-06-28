/*let inp = document.getElementById('inp')
let btn = document.getElementById('btn')
let back = document.getElementById('back')
let flag=0;
btn.addEventListener('on click', change_back(flag))

function change_back() {
    if(flag===0)
    {document.body.style.backgroundColor = 'red';
flag=1
return flag;}
    if(flag===1)
    {document.body.style.backgroundColor = 'green';
flag=2
return flag;}
   if(flag===2)
   { document.body.style.backgroundColor = 'blue';
     flag=0
    return flag;}
}*/
let btn = document.getElementById('btn');
let body =document.getElementById('back')

let index = 0;

const colors = ['red', 'lawngreen', 'blue'];

btn.addEventListener('click', function change_back() {
  body.style.backgroundColor = colors[index];

  index = index >= colors.length - 1 ? 0 : index + 1;
});
