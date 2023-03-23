import { toast } from "react-hot-toast";

export async function loginValidation(values) {
  const errors = {};
  const specialChars = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;

  if (!values.username && !values.password) {
    errors.username = toast.error("Username and Password required");
  } else if (values.username.includes(" ") && values.password.includes(" ")) {
    errors.username = toast.error("Invalid Username and Password");
  } else if (values.username.length < 3) {
    errors.username = toast.error("Username must be at least 3 characters");
  } else if (values.password.length < 8) {
    errors.password = toast.error("Password must be at least 8 characters");
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error("Password must contain a special character!");
  }

  return errors;
}

export async function registerValidation(values) {
  const errors = {};
  const specialChars = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;

  if (
    !values.fname ||
    !values.username ||
    !values.city ||
    !values.country ||
    !values.job ||
    !values.password ||
    !values.cpassword
  ) {
    errors.fname = toast.error("Data Required!");
  } else if (
    /\s/.test(values.username) ||
    /\s/.test(values.password)
  ) {
    errors.username = toast.error("Space doesn't allowed for username and password!");
  } else if (values.fname.length < 4) {
    errors.fname = toast.error("Full Name must be at least 3 characters!");
  } else if (values.username.length < 3) {
    errors.username = toast.error("Username must be at least 3 characters!");
  } else if (values.password.length < 8) {
    errors.password = toast.error("Password must be at least 8 characters!");
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error("Password must contain a special character!");
  } else if (values.password !== values.cpassword) {
    errors.cpassword = toast.error("Passwords must match");
  }

  return errors;
}
