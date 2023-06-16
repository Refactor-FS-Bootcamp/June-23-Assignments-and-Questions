//Grab Single element
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('.container'));
// console.log(document.querySelector('#my-form'));
// console.log(document.querySelector('h1'));

//Grab multiple elements
// const nodeItems = document.querySelectorAll('.item');
// const colItems = document.getElementsByClassName('item');
// console.log(document.getElementsByTagName('li'));
// console.log([45, 67, 89]);
// nodeItems.forEach(item => console.log(item));
// colItems.forEach(item => console.log(item));
// for(let i=0; i<colItems.length; i++){
//     console.log(colItems[i])
// }

//DOM Manipulation
const ul = document.querySelector('.items');
// ul.remove();
const btn = document.querySelector('.btn');

btn.addEventListener('click', e => {
    // e.preventDefault()
    btn.style.backgroundColor = 'blue';
    btn.style.textTransform = 'uppercase';
    btn.style.fontSize = '16px';
    ul.firstElementChild.textContent = 'HTML';
    ul.children[1].innerText = 'CSS';
    ul.lastElementChild.innerHTML = '<h3>JavaScript</h3><p>Language of web</p>';
})