function users(data) {
    const table = document.getElementById('tabla');
    const mapUsers = data.map((user) => `<tr>
    <td>${user.name.first}</td><td>${user.dob.age}</td><td>${user.phone}</td><td>${user.location.city}</td></tr>`).join("")
    table.innerHTML = `
    <thead>
        <tr>
            <th>Nombre</th><th>Edad</th><th>Telefono</th><th>Ciudad</th>
        </tr>
    </thead>
    ${mapUsers}
`;
}

fetch("https://randomuser.me/api/?results=20")
    .then(res => res.json())
    .then((data) => {
        console.log(data.results)
        users(data.results)
    })