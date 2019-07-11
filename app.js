'use strict'

let url = 'https://jsonplaceholder.typicode.com/users';


const fetchCountry = async () => {
    return await fetch(url)
    .then(res => res.json())
    .then((data) => {
        let userDatas = '';
        data.map((users) => {
            userDatas += `
                <tr>
                    <td>${users.id}</td>
                    <td>${users.name}</td>
                    <td>${users.username}</td>
                    <td>${users.email}</td>
                </tr>
            `
        })  
        document.querySelector('#userDataTable').innerHTML = userDatas;
    })
}

fetchCountry();



