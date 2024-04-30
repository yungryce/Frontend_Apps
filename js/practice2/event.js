// const bottom = document.getElementById('bottom');
// bottom.addEventListener('click  ', function(ev){
//     console.log(ev.target)    
// })

const ade = (ev) => {
    console.log(ev.target.value, ev.type)
}
const bottom = document.getElementById('bottom');    
bottom.addEventListener('change', ade)
// bottom.addEventListener('input', ade)
// bottom.addEventListener('blur', ade)

