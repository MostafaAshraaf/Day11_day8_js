// ? Selects Html elements matching CSS selector.
//===============================================================================================
let divTask = document.querySelector('main .container .task .student-info ');
let heading = document.querySelector('main .container .task  h1');
let studentName = document.querySelector('main .container .task .student-info .name input');
let studentSection = document.querySelector('main .container .task .student-info .sec input');
let studentDepartment = document.querySelector('main .container .task .student-info .depart input');
let table = document.querySelector('main .container .task table tbody');
//===============================================================================================
// ? Prompts for a valid student count above zero & Number.
//===============================================================================================
function NumberOfStudents() {
    let num;
    do {
        num = parseFloat(prompt("Enter the number of students (must be greater than 0):"));
        if (isNaN(num)) {
            alert("Invalid input. Please enter a valid number.");
        } else if (num <= 0) {
            alert("The number must be greater than 0. Please try again.");
        }
    } while (isNaN(num) || num <= 0);
    return num;
}
//===============================================================================================
let numStudent=NumberOfStudents();
//===============================================================================================
heading.innerHTML='Student 1';
//===============================================================================================
// ? Checks name length and changes text color to red if length less than 3, otherwise makes it black.
//===============================================================================================
studentName.addEventListener('input' ,() => {
    if ((studentName.value).trim().length <3){
        
        studentName.style.color='red';
    }
    else{
        studentName.style.color='black';
    }
})
//===============================================================================================
// ? Checks section value and changes text color to red if the value is 0 or less, otherwise makes it black.
//===============================================================================================
studentSection.addEventListener('input' ,() => {
    if (+studentSection.value<=0){
        studentSection.style.color='red';
    }
    else{
        studentSection.style.color='black';
    }
})
//===============================================================================================
// ? Checks department name length and changes text color to red if length is less than 2, otherwise makes it black.
//===============================================================================================
studentDepartment.addEventListener('input' ,() => {
    if ((studentDepartment.value).trim().length <2){
        studentDepartment.style.color='red';
    }
    else{
        studentDepartment.style.color='black';
    }
})
//===============================================================================================

let i=0;
//===============================================================================================
// ? Adds a student's data to the table if all inputs are valid, else shows an error message.
//===============================================================================================
function add() {
    i += 1;
    //===============================================================================================
    if (studentName.style.color=='black' && studentSection.style.color=='black' && studentDepartment.style.color=='black'){
        //--------------------------------------------------------------------------
        let name=studentName.value;
        let sec =+studentSection.value;
        let depart =studentDepartment.value;
        //--------------------------------------------------------------------------
        let row =` <tr>
        <td>${name}</td>
        <td>${sec}</td>
        <td>${depart}</td>
        </tr>`;
        //--------------------------------------------------------------------------
        if (i<=numStudent){
            //--------------------------------------------------------------------------
            table.innerHTML+=row;
            //--------------------------------------------------------------------------
            if (numStudent==1 || i===numStudent){
                heading.innerHTML='Students';
                divTask.style.display='none';
            }
            //--------------------------------------------------------------------------
            else{
                heading.innerHTML=`Student ${i+1}`;
            }
            //--------------------------------------------------------------------------
        }
    }
    else{
        alert('Please enter the data correctly, 1- Student name must be 3 letters or more , 2- Section number must be greater than 0,3- Section consists of 2 letters or more');
    }

}




