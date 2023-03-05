const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test("can set github via constructor", () => {
  const testValue = "githubaccount";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});

test("getGithub() should return github", () => {
  const testValue = "githubaccount";
  const e = new Engineer("Foo", 1, "test@test.com", "githubaccount");
  expect(e.getGithub()).toBe(testValue);
});

test("getRole() should return Engineer", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "githubaccount");
  expect(e.getRole()).toBe(testValue);
});
