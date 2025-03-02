function addAlumni() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const year = document.getElementById("year").value;
    const department = document.getElementById("department").value;

    if (!name || !email || !year) {
        alert("Please fill all fields");
        return;
    }

    let alumniList = JSON.parse(localStorage.getItem("alumni")) || [];

    alumniList.push({ name, email, year, department });

    localStorage.setItem("alumni", JSON.stringify(alumniList));

    document.getElementById("alumniForm").reset();

    displayAlumni();
}

function displayAlumni() {
    const table = document.getElementById("alumniTable");
    
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Year</th>
            <th>Department</th>
        </tr>
    `;

    let alumniList = JSON.parse(localStorage.getItem("alumni")) || [];

    alumniList.forEach((alumni) => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${alumni.name}</td>
            <td>${alumni.email}</td>
            <td>${alumni.year}</td>
            <td>${alumni.department}</td>
        `;
    });
}

// Display data on page load
window.onload = displayAlumni;
