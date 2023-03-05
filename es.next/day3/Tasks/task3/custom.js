const body = document.getElementById('tbody')
let content=''
async function getData()
{
    const respose = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await respose.json();
    console.log(data)

    for(let i in data)
    {
        console.log(data[i])
         content += `<tr>
        <td>${data[i].name}</td>
        <td>${data[i].username}</td>
        <td>${data[i].email}</td>
        <td>${data[i].phone}</td>
      </tr>`;
    body.innerHTML=content;
    }
}

getData()