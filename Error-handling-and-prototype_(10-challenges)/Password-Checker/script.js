class User {
    constructor(userN, p) {
      this.userName = userN;
      this.password = p;
    }
    get getPassword() {
      let maskedPassword = '';
      for(let i = 0; i < this.password.length; i++) {
          maskedPassword += "*";
      }
      return maskedPassword;
    }
    setPassword(newPassword) {
      if(newPassword.length >=   8 && !isNaN(parseFloat(newPassword)) && newPassword !== newPassword.toLowerCase()) {
          this.password = newPassword;
      }
      else {
          console.log("Invalid password");
      }
    }
  }
  
  const user = new User("Mithun", "Password123");
  console.log(user.getPassword); // Output: ***********
  
  user.setPassword("myPassword"); //Invalid password
  user.setPassword("MyPassword"); //Invalid password
  user.setPassword("Mypassword123"); //Invalid password

  user.setPassword("Mypassword123");
  console.log(user.getPassword); 