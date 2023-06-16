const usuarios = [
    {
        "nombre": "Juan",
        "edad": 30,
        "ciudad": "Madrid",
        "casado": false,
        "hobbies": ["fútbol", "leer", "bailar"]
    },
    {
        "nombre": "María",
        "edad": 25,
        "ciudad": "Barcelona",
        "casado": true,
        "hobbies": ["pintar", "viajar", "cocinar"]
    },
    {
        "nombre": "Carlos",
        "edad": 40,
        "ciudad": "Sevilla",
        "casado": true,
        "hobbies": ["música", "nadar", "jardinería"]
    },
    {
        "nombre": "Ana",
        "edad": 28,
        "ciudad": "Valencia",
        "casado": false,
        "hobbies": ["yoga", "senderismo", "fotografía"]
    },
    {
        "nombre": "Luis",
        "edad": 35,
        "ciudad": "Málaga",
        "casado": true,
        "hobbies": ["ciclismo", "pescar", "videojuegos"]
    },
    {
        "nombre": "Laura",
        "edad": 22,
        "ciudad": "Bilbao",
        "casado": false,
        "hobbies": ["baile", "teatro", "compras"]
    },
    {
        "nombre": "Pedro",
        "edad": 31,
        "ciudad": "Alicante",
        "casado": false,
        "hobbies": ["cocina", "pintura", "ajedrez"]
    },
    {
        "nombre": "Sara",
        "edad": 27,
        "ciudad": "Granada",
        "casado": true,
        "hobbies": ["senderismo", "música", "ver películas"]
    },
    {
        "nombre": "Miguel",
        "edad": 33,
        "ciudad": "Zaragoza",
        "casado": true,
        "hobbies": ["deportes", "lectura", "bricolaje"]
    },
    {
        "nombre": "Isabel",
        "edad": 29,
        "ciudad": "Palma de Mallorca",
        "casado": false,
        "hobbies": ["surf", "pasear perros", "juegos de mesa"]
    }
];

function users(data) {
    const table = document.getElementById('tabla');
    const mapUsers = data.map((name) => `<tr>
    <td>${name.nombre}</td><td>${name.edad}</td><td>${name.casado ? `si` : `no`}</td><td>${name.ciudad}</td><td>${name.hobbies } </td>
    </tr>`)
    table.innerHTML = `
    <thead>
        <tr>
            <th>Nombre</th><th>Edad</th><th>Casado</th><th>Ciudad</th><th>Hobbies</th>
        </tr>
    </thead>
    ${mapUsers}
`;
}

users(usuarios)