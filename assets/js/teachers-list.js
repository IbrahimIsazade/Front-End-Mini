const table = document.querySelector(".teachers-data");

fetch("http://localhost:3000/teachers")
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
        studentRow.innerHTML += `<td class="action-buttons flex items-center justify-between">
        <a href="./profile.html" class="action-btn flex justify-center items-center">
            <i class="fa-regular fa-eye"></i>
        </a>
        <a href="#" class="action-btn flex justify-center items-center">
            <i class="fa-regular fa-pen-to-square"></i>
        </a>
    </td>`;
        table.appendChild(studentRow);
    });
})


