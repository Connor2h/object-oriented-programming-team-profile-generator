//const Employee = require('../lib/Employee')
const Employee = require('../dist/__mocks__/Employee')

//create employee object
test('creates an Employee object', () =>{
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('dave@gmail.com');

})

//gets employee's name
test("gets employee's name", () => {
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
});

//gets employee's id
test("gets employee's name", () => {
    const employee = new Employee('Dave');

    expect(employee.id).toEqual(expect.any(Number));
});

//gets employee's email
test("gets employee's name", () => {
    const employee = new Employee('Dave');

    expect(employee.email).toBe('dave@gmail.com');
});
