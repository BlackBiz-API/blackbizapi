function validate(first_name, last_name, username, email, password) {
    const errors = [];
    if (username.length === 0 || first_name.length === 0 || last_name.length === 0) {
      errors.push("* Name or Username cannot be empty");
    }
    if (email.length < 5 || email.split("").filter((x) => x === "@").length !== 1 || email.indexOf(".") === -1) {
      errors.push("* Please enter a valid Email");
    }
    if (password.length < 6) {
      errors.push("* Password should be at least 6 characters long");
    }
    return errors;
  }

  export default validate;