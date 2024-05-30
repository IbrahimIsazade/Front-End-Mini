const table = document.querySelector(".data");
const TABLE_URL = "staff";

function fillTableWith(data) {
    table.innerHTML = ``;

    data.forEach(item => {
        const valuesArray = Object.values(item);
        console.log(valuesArray);
        const staffRow = document.createElement("tr");
        
        valuesArray.forEach(value => {
            const prop = document.createElement("td");
            prop.innerText = value;

            staffRow.appendChild(prop);
        });

        table.appendChild(staffRow);
    });
}

fetch(`http://localhost:3000/${TABLE_URL}`)
.then(response => response.json())
.then(data => fillTableWith(data))

