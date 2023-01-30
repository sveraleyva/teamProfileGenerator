const Employee = require("./Employee.test");

class Intern extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
