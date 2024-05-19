function addEmployee(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    
    fetch("http://localhost:3000/staff", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": form.get('name'),
            "dateOfBirth": form.get('dob'),
            "gender": form.get('gender'),
            "job": form.get('job'),
            "salary": form.get('salary'),
            "mobileNumber": form.get('mobileNumber'),
            "address": form.get('address')
        })
    }).then(r => {
        window.location.href = "/pages/staff-list.html";
    }).catch(e => console.log(e))
}