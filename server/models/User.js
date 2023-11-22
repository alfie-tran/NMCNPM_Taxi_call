// src/models/User.js
class User {
  constructor(userId, name, phoneNumber) {
    this.userId = userId;
    this.name = name;
    this.phoneNumber = phoneNumber;
  }

  // Các hoạt động khác của User
  doSomething() {
    console.log(`${this.name} is doing something.`);
  }
}

export default User;
