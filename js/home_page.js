window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});
    
const createInnerHtml = () => { 
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>Start Date</th><th>Actions</th>"
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" src="${empPayrollData._profilePic}" alt="">
            </td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td><${getDptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img name="${empPayrollData._id}" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
                <img name="${empPayrollData._id}" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
            </td>
        </tr> 
    `;
    }   
    document.querySelector('#table-display').innerHTML = innerHtml;
};

const getDptHtml = (depList) => {
    let depHtml = '';
    for(const dept of depList) {
        depHtml = `${depHtml} <div classs='dept-label'>${dept}</div>`
    }
    return depHtml;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Rayan',
            _gender: 'Male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '500000',
            _startDate: '20 oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -2.png'
        },
        {
            _name: 'Anupama keerthi shashanka',
            _gender: 'Female',
            _department: [
                'Sales'
            ],
            _salary: '400000',
            _startDate: '29 oct 2019',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../assets/profile-images/Ellipse -1.png'

        }
    ];
    return empPayrollListLocal;
}
    