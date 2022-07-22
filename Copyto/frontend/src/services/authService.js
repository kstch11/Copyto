import axios from "axios";
import {baseUrl} from "./urlService";

const register = (firstname, surname, email, number, dateOfBirth, userType, password) => {
    return (axios.post(`${baseUrl}`, {
        "firstname": firstname,
        "surname": surname,
        "email": email,
        "number": number,
        "dateOfBirth": dateOfBirth,
        "userType": userType,
        "password": password
    }))
}

const login = (email, password) => {
    return (axios.get(`${baseUrl}/login`))
}

const AuthService = {
    register, login
}

export default AuthService