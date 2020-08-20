window.addEventListener('load', function() {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
})

let x = document.querySelector('.button');
x.addEventListener('click', myFunc);

function myFunc () {
    x.classList.add('hide');
    let z = document.getElementById('hidden');
    z.classList.remove('hide');
    let c = document.getElementById('newbtn');
    c.classList.remove('hide');
}

let y = document.querySelector('#newbtn');
y.addEventListener('click', myOtherFunc);

function myOtherFunc () {
    y.classList.add('hide');
    let t = document.getElementById('hidden');
    t.classList.add('hide');
    x.classList.remove('hide');
}