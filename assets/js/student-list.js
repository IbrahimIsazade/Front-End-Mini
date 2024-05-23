const table = document.querySelector(".students-data");
const idInpt = document.querySelector(".input_id");
const nameInpt = document.querySelector(".input_name");
const phoneInpt = document.querySelector(".input_phone");
const searchBtn = document.querySelector(".search-btn");

function fillTableWith(data) {
    table.innerHTML = ``;

    data.forEach(item => {
        const valuesArray = Object.values(item);
        const studentRow = document.createElement("tr");
        
        valuesArray.forEach(value => {
            const prop = document.createElement("td");
            prop.innerText = value;

            studentRow.appendChild(prop);
        });
        studentRow.innerHTML += 
        `<td class="action-buttons flex items-center justify-between">
            <a href="./profile.html" class="action-btn flex justify-center items-center">
                <i class="fa-regular fa-eye"></i>
            </a>
            <a href="#" class="action-btn flex justify-center items-center">
                <i class="fa-regular fa-pen-to-square"></i>
            </a>
        </td>`;

        table.appendChild(studentRow);
    });
}

fetch("http://localhost:3000/students")
.then(response => response.json())
.then(data => fillTableWith(data))

searchBtn.onclick = () => {

    if (idInpt.value == "" && 
        nameInpt.value == "" && 
        phoneInpt.value == "") {
        console.log("Search is empty");
    }

    fetch("http://localhost:3000/students")
    .then(response => response.json())
    .then(data => fillTableWith(data))
    

}



