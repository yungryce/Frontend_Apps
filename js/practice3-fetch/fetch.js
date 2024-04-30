const l = console.log
const uri = 'https://jsonplaceholder.typicode.com/users/'
const req = new Request (uri, {
   method:'GET'
})
// l(req)


fetch(req)
    .then(response => {
        if (response.status === 404) {
            return response.json()
        } else {
            throw new Error('baddddd')
            // let message = 'bad network'
            // l(message)
        }
    })
    .then(data => {
        let ul = document.getElementById('list')
        let df = new DocumentFragment()

        data.forEach(user => {
            let li = document.createElement('li')
            let pp = document.createElement('p')
            let dd = document.createElement('p')
            pp.textContent = user.email
            dd.textContent = user.username
            li.appendChild(dd)
            li.appendChild(pp)
            df.appendChild(li)
        });
        ul.appendChild(df)
    })
    .catch (err => {
        l('tit', err.message)
    })
