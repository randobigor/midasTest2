window.addEventListener('load', function () {
    document.querySelector('#myButton').addEventListener('click', function () {
        alert('It Works');
    });
    getJson();
});
function getJson() {
    fetch('http://localhost:3000/students')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        drawTable(data);
    })["catch"](function (error) { return console.error(error); });
}
function drawTable(students) {
    var body = document.querySelector('#tableBody');
    students.forEach(function (student) {
        var tr = document.createElement('tr');
        body.appendChild(tr);
        var tdName = document.createElement('td');
        tdName.innerHTML = student.name;
        tr.appendChild(tdName);
        var tdSurname = document.createElement('td');
        tdSurname.innerHTML = student.surname;
        tr.appendChild(tdSurname);
    });
}
