const Employee = require("../lib/Employee");

test("can set name via constructor", () => {
  const testValue = "Sam";
  const e = new Employee(testValue, 1, "test@test.com");
  expect(e.getName()).toBe(testValue);
});

test("can set id via constructor", () => {
  const testValue = 1;
  const e = new Employee("Foo", testValue, "test@test.com");
  expect(e.getID()).toBe(testValue);
});

test("can set email via constructor", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getName() should return name", () => {
  const testValue = "Foo";
  const e = new Employee("Foo", 1, "test@test.com");
  expect(e.getName()).toBe(testValue);
});

test("getID() should return ID", () => {
  const testValue = 1;
  const e = new Employee("Foo", 1, "test@test.com");
  expect(e.getID()).toBe(testValue);
});

test("getEmail() should return email", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, "test@test.com");
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return Employee", () => {
  const testValue = "Employee";
  const e = new Employee("Foo", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
