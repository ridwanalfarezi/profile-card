import { toast } from "react-hot-toast";

// Validate Login Page Username

export async function usernameValidate(values) {
    const errors = usernameVerify({}, values);

    return errors;
}

// Validate Login Page Password

export async function passwordValidate(values) {
    const errors = passwordVerify({}, values);

    return errors;
}

// Validate username
function usernameVerify(error = {}, values) {
    if(!values.username) {
        error.username = toast.error("Username Required!");
    } else if(values.username.includes(" ")) {
        error.username = toast.error("Invalid Username!");
    }
}

// Validate password
function passwordVerify(error = {}, values) {
    if(!values.password) {
        error.password = toast.error("Password Required!");
    } else if(values.password.includes(" ")) {
        error.password = toast.error("Invalid Password!");
    }
}