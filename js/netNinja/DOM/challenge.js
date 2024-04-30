const challenge = document.querySelectorAll('p');
challenge.forEach(charge => {
    if (charge.textContent.includes('error')) {
        charge.classList.add('error');
    };
    if (charge.innerText.includes('success')) {
        charge.classList.add('success')
    }
});


const title = document.querySelector('.title');
title.classList.toggle('test')
title.classList.toggle('test')
   




