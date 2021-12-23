const Employee = require('../lib/Employee')

//TTD Test Driven Development
//red, green, refactor
//arrange, act, assert

//create employee object
test('creates an Employee object', () =>{
    const employee = new Employee('Dave', "1", "dave@gmail.com");

    //expect(typeof employee).toBe("object");

    expect(employee instanceof Employee).toBeTruthy();

    //console.log(employee instanceof Employee);
    //console.log(typeof employee);

})

//gets employee's name
test("gets employee's name", () => {
    const employee = new Employee('Dave', "1", "dave@gmail.com");

    expect(employee.name).toBe('Dave');
});

//gets employee's id
test("gets employee's id", () => {
    const employee = new Employee('Dave', "1", "dave@gmail.com");

    expect(employee.id).toBe("1");
});

//gets employee's email
test("gets employee's email", () => {
    const employee = new Employee('Dave', "1", "dave@gmail.com");

    expect(employee.email).toBe('dave@gmail.com');
});

//gets employee's role
test("gets employee's role", () => {
    const employee = new Employee('Dave', "1", "dave@gmail.com");//arrange

    expect(employee.getRole()).toBe('Employee');//act //assert
});
