function addTeacher(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    
    fetch("http://localhost:3000/teachers", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": form.get('name'),
            "class": form.get('class'),
            "gender": form.get('gender'),
            "subject": form.get('subject'),
            "section": form.get('section'),
            "mobileNumber": form.get('mobileNumber'),
            "address": form.get('address')
        })
    }).then(r => {
        window.location.href = "/pages/teachers-list.html";
    })
}