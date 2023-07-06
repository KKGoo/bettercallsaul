// Array to store the fetched user data
const users = [];

// Function to fetch user data from the API
async function fetchData() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=20");
    const data = await response.json();
    // Add fetched user data to the 'users' array
    users.push(...data.results);
    // Render the table with the user data
    renderTable();
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

// Function to render the table with user data
function renderTable() {
  const table = document.getElementById("tabla");
  const mapUsers = users
    .map(
      (user) => `
        <tr data-user-id="${user.dob.age}">
          <td>${user.name.first}</td>
          <td>${user.dob.age}</td>
          <td>${user.casado ? "si" : "no"}</td>
          <td>${user.location.city}</td>
        </tr>
      `
    )
    .join("");

  table.innerHTML = `
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Edad</th>
        <th>Casado</th>
        <th>Ciudad</th>
      </tr>
    </thead>
    ${mapUsers}
  `;

  // Attach click event listeners to table rows
  const rows = table.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    rows[i].addEventListener("click", selectUser);
  }
}

// Function to handle user selection
function selectUser(event) {
  // Extract the user ID from the clicked table row
  const userId = parseInt(event.currentTarget.getAttribute("data-user-id"));
  // Find the selected user from the 'users' array
  const selectedUser = users.find((user) => user.dob.age === userId);

  if (selectedUser) {
    // Store the selected user data in localStorage
    localStorage.setItem("selectedUser", JSON.stringify(selectedUser));
    // Redirect to the usuario.html page
    window.location.href = "file:///C:/Users/Santiago/Documents/GitHub/bettercallsaul/usuario.html";
  }
}

// Fetch user data and render the table
fetchData();
