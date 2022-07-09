const studentList = [];
const Classes = ['C2106L', 'C2348K', 'C2567I'];
function addList() {
    var id = document.getElementById('id').value;
    var studentname = document.getElementById('studentname').value;
    var dob = document.getElementById('dob').value;
    var gender = document.getElementsByName('gender');
    var language = document.getElementsByName('language');
    var selectClass = document.querySelector('#selectClass option:checked').value;

    // Validate 
    if (id === "") {
        document.getElementById('id-error').innerHTML = "Please input id";
    } else {
        document.getElementById('id-error').innerHTML = "";
    }
    if (studentname == "") {
        document.getElementById('studentname-error').innerHTML = "Please input studentname ";
    } else {
        document.getElementById('studentname-error').innerHTML = "";
    }
    if (id && studentname) {
        console.log(id, studentname);
    }
    // Find gender
    function getGender() {
        for (let i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                return gender[i].value;
            }
        }
    }
    // Find language
    function getLanguage() {
        var result = "";
        for (let i = 1; i < language.length; i++) {
            if (language[i].checked) {
                result += language[i].value;
                return result;
            }
        }

    }
    // Create object
    const students = {
        id: id,
        studentname: studentname,
        dob: dob,
        gender: getGender(),
        language: getLanguage(),
        selectClass: selectClass || addOptionToClass()
    }

    studentList.push(students);
    // console.log(studentList);
    renderStudentList();
    clearStudentList();
};
function addClass() {
    var addClass = prompt('input new class');
    if (addClass == "") {
        alert('please input new class');
        prompt('input new class');
    } else {
        Classes.push(addClass);
        // console.log(Classes);
        addOptionToClass();
    }
}
function addOptionToClass() {
    var optionClass = ``;
   for (var i = 0; i < Classes.length; i++) {
       optionClass = `<select">
       <option value="${Classes[i]}">${Classes[i]}</option>
       </select>`
   }
   document.getElementById('more').innerHTML = optionClass;
}
function renderStudentList() {
    table = `
    <tr>
    <td>Id</td>
    <td>Student name</td>
    <td>Dob</td>
    <td>Gender</td>
    <td id="more">Language</td>
    <td>SelectClass</td>
    <td>Action</td>
</tr>`
    for (var i = 0; i < studentList.length; i++) {
        table += `
      <tr>
      <td>${studentList[i].id}</td>
      <td>${studentList[i].studentname} name</td>
      <td>${studentList[i].dob}</td>
      <td>${studentList[i].gender}</td>
      <td>${studentList[i].language}</td>
      <td>${studentList[i].selectClass}</td>
      <td><button onclick="deleteStudentList(${studentList[i].id})">Delete</button>
      <button onclick="editStudentList(${studentList[i].id})">Edit</button> </td>
  </tr>`
    }
    document.getElementById('studentList').innerHTML = table;
};
// function renderClass() {
//     studentClass = ``;
//     for(var i=0;i<Classes.length;i++) {
//         studentClass += `<select>
//         <option value="${Classes[i]}"></option>
//     </select>`
//     }

// }
function clearStudentList() {
    document.getElementById('id').value = "";
    document.getElementById('studentname').value = "";
    document.getElementById('dob').value = "";
    document.getElementsByName('gender').value = "";
    document.getElementsByName('language').value = "";
    document.getElementById('selectClass').value = "";
}
function deleteStudentList(id) {
    console.log(id);
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].id == id) {
            studentList.splice(i, 1);

            renderStudentList();
        }
    }
}
function editStudentList(id) {
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].id == id) {
            document.getElementById('id').value = studentList[i].id;
            document.getElementById('studentname').value = studentList[i].studentname;
            document.getElementById('dob').value = studentList[i].dob;
            document.getElementsByName('gender').value = studentList[i].gender;
            document.getElementsByName('language').value = studentList[i].language;
            document.getElementById('selectClass').value = studentList[i].selectClass;
        }
    }
}



