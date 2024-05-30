const table = document.querySelector(".data");
const searchBtn = document.querySelector(".search-btn");
const TABLE_URL = "teachers";

console.log(TABLE_URL);

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
            <a href="./edit-teacher.html?Id=${valuesArray[0]}" class="action-btn flex justify-center items-center">
                <i class="fa-regular fa-pen-to-square"></i>
            </a>
        </td>`;

        table.appendChild(studentRow);
    });
}

fetch(`http://localhost:3000/${TABLE_URL}`)
.then(response => response.json())
.then(data => fillTableWith(data))

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const later = () => {
            clearTimeout(timeout);
            func();
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Search function
function performSearch() {
    const idInpt = document.querySelector(".input_id").value;
    const nameInpt = document.querySelector(".input_name").value;
    const phoneInpt = document.querySelector(".input_phone").value;

    if (idInpt == "" && nameInpt == "" && phoneInpt == "") {
        fetch(`http://localhost:3000/${TABLE_URL}`)
        .then(response => response.json())
        .then(data => fillTableWith(data))
        return;
    }
    else if (idInpt != "") {
        fetch(`http://localhost:3000/${TABLE_URL}/${idInpt}`)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Teacher not found (404)');
                } else if (response.status === 500) {
                    throw new Error('Server error (500)');
                } else {
                    throw new Error(`Unexpected error: ${response.status}`);
                }
            }
            return response.json();
        })
        .then(data => fillTableWith([data]))
        .catch(error => alert(error.message));
        
        return;
    }
    else if (phoneInpt != "") {
        fetch(`http://localhost:3000/${TABLE_URL}/?mobileNumber=${phoneInpt}`)
        .then(response => response.json())
        .then(data => {
            if (data.length == 0) {
                throw new Error('Teacher not found (404)');
            } else {
                fillTableWith(data);
            }
        })
        .catch(error => alert(error.message));
        return;
    }
    else if (nameInpt != "") {
        fetch(`http://localhost:3000/${TABLE_URL}/?name=${nameInpt}`)
        .then(response => response.json())
        .then(data => {
            if (data.length == 0) {
                throw new Error('Teacher not found (404)');
            } else {
                fillTableWith(data);
            }
        })
        .catch(error => alert(error.message));
        return;
    }

}

// Wrap the search function with debounce
const debouncedSearch = debounce(performSearch, 300);

searchBtn.onclick = debouncedSearch;
