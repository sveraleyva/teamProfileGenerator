const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

test("can set school via constructor", () => {
  const testValue = "Carleton";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});

test("getSchool() should return school", () => {
  const testValue = "Carleton";
  const e = new Intern("Foo", 1, "test@test.com", "Carleton");
  expect(e.getSchool()).toBe(testValue);
});

test("getRole() should return Intern", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});
