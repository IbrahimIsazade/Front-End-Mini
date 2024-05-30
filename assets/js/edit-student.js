const urlParams = new URLSearchParams(window.location.search);
const ID = urlParams.get('Id');
const BASE_URL = "students";

function addStudent(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    
    fetch(`http://localhost:3000/${BASE_URL}/${ID}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": ID,
            "name": form.get('name'),
            "dateOfBirth": form.get('dob'),
            "gender": form.get('gender'),
            "class": form.get('class'),
            "parentName": form.get('parent-name'),
            "mobileNumber": form.get('mobileNumber'),
            "address": form.get('address')
        })
    }).then(r => {
        window.location.href = "/pages/student-list.html";
    })
}