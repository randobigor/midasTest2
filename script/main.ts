window.addEventListener('load', () => {
    document.querySelector('#myButton').addEventListener('click', () => {
        alert('It Works');
    })
    getJson();
})

function getJson() {
    fetch('http://localhost:3000/students')
        .then(response => response.json())
        .then(data => {
            drawTable(data)
        })
        .catch(error => console.error(error))
}

function drawTable(students) {
    let body = document.querySelector('#tableBody');

    students.forEach(student => {
        let tr = document.createElement('tr');
        body.appendChild(tr);

        let tdName = document.createElement('td');
        tdName.innerHTML = student.name;
        tr.appendChild(tdName);

        let tdSurname = document.createElement('td');
        tdSurname.innerHTML = student.surname;
        tr.appendChild(tdSurname);
    });
}