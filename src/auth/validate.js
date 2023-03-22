import { toast } from "react-hot-toast";

export async function loginValidation(values) {
  const errors = {};
  const specialChars = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;
  
  if (!values.username && !values.password) {
    errors.username = toast.error("Username and Password required");
  } else if (values.username.includes(" ") && values.password.includes(" ")) {
    errors.username = toast.error("Invalid Username and Password");
  } else if (values.username.length <= 2) {
    errors.username = toast.error("Username must be at least 3 characters");
  } else if (values.password.length <= 8) {
    errors.password = toast.error("Password must be at least 8 characters");
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error("Password must contain a special character!");
  }


  return errors;
}