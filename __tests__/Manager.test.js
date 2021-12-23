
//creates manager object
test('creates a Manager object', () =>{
    const manager = new Manager('Dave');

    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('dave@gmail.com');

})