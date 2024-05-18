const table = document.querySelector(".students-data");

fetch("http://localhost:3000/students")
.then(response => response.json())
.then(data => {
    data.forEach(item => {
        const valuesArray = Object.values(item);
        const studentRow = document.createElement("tr");
        
        valuesArray.forEach(value => {
            const prop = document.createElement("td");
            prop.innerText = value;

            studentRow.appendChild(prop);
        });
        table.appendChild(studentRow);
    });
})