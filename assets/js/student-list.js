const table = document.querySelector(".students-data");
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
        fetch("http://localhost:3000/students")
        .then(response => response.json())
        .then(data => fillTableWith(data))
        return;
    }
    else if (idInpt != "") {
        fetch(`http://localhost:3000/students/${idInpt}`)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Student not found (404)');
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
        fetch(`http://localhost:3000/students/?mobileNumber=${phoneInpt}`)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Student not found (404)');
                } else if (response.status === 500) {
                    throw new Error('Server error (500)');
                } else {
                    throw new Error(`Unexpected error: ${response.status}`);
                }
            }
            return response.json();
        })
        .then(data => {
            if (data.length > 1) {
                fillTableWith(data)
            } else {
                fillTableWith([data])
            }
        })
        return;
    }
    else if (nameInpt != "") {
        fetch(`http://localhost:3000/students/?name=${nameInpt}`)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Student not found (404)');
                } else if (response.status === 500) {
                    throw new Error('Server error (500)');
                } else {
                    throw new Error(`Unexpected error: ${response.status}`);
                }
            }
            return response.json();
        })
        .then(data => {
            if (data.length > 1) {
                fillTableWith(data)
            } else {
                fillTableWith([data])
            }
        })
        return;
    }

}

// Wrap the search function with debounce
const debouncedSearch = debounce(performSearch, 1000);

searchBtn.onclick = debouncedSearch;
