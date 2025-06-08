function validatePassword(password) {
  const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
  return strongPasswordPattern.test(password);
}
export default validatePassword;
// Example usage:
// const password = "Test@123!";
// const isValid = validatePassword(password);

// if (isValid) {
//   console.log("Password is valid.");
// } else {
//   console.log("Password is not valid.");
// }

