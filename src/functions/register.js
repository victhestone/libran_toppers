import { URL } from "../constants/api";
import { login } from "./login";

export const register = async (user) => {
    try {
        const response = await fetch(`${URL}/signup`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                { ...user, id: user.username.toLowerCase() }
            )
        });
        const receivedUser = await response.json();
        if (receivedUser) {
            await login({ email: user.email, password: user.password })
        }
    } catch (error) {
        console.log('error', error);
    }
}