window.addEventListener('DOMContentLoaded',(event) =>{
    createInnerHtml();
});

//Template literal ES6 feature
const createInnerHtml = () =>
{
    const headerHtml =  "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = ` ${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON(); 
    for (const empPayrollData of empPayrollList)
    {
        innerHtml = `${innerHtml}
    <tr>
        <td><img class= "profile"src="${empPayrollData._proficPic}" alt=""></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img name = "${empPayrollData._id}" onclick="remove(this)" src="..//assets/icons/delete-black-18dp.svg" alt="delete">
            <img name = "${empPayrollData._id}" src="..//assets/icons/create-black-18dp.svg"  alt="edit">
        </td>
    </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) =>
{
    let deptHtml = '';
    for (const dept of deptList)
    {
        deptHtml = `${deptHtml} <div class = 'depth-label'>${dept}</div>`
    }
    return deptHtml
}
const createEmployeePayrollJSON = () =>{
    let employeePayrollList = [
        {
            _name: "Sanket More",
            _gender: "Male",
            _department: [
                "Engineering",
                "Finance"
            ],
            _salary: "500000",
            _startDate: "29-02-2019",
            _id: new Date().getTime(),
            _proficPic: "../assets/profile-images/Ellipse -3.png"
        },
        {
            _name: "Alexa Bliss",
            _gender: "Female",
            _department: [
                "Sales"
            ],
            _salary: "300000",
            _startDate: "20-02-2020",
            _id: new Date().getTime() + 1,
            _proficPic: "../assets/profile-images/Ellipse -1.png"

        }
    ];
    return employeePayrollList;
} 