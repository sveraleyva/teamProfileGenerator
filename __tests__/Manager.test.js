const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("office number can be entered with the constructor", () => {
  const testValue = 123;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});

test("getOffice() should return office number", () => {
  const testValue = 123;
  const e = new Manager("Foo", testValue, "test@test.com", "Manager");
  expect(e.getOfficeNumber()).toBe(testValue);
});

test("getRole() should return Manager", () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});
