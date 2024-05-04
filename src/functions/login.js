import { URL } from "../constants/api";

export const login = async (user) => {
    try {
        const response = await fetch(`${URL}/signin`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                user
            )
        });
        const receivedUser = await response.json();

        if (receivedUser) {
            localStorage.setItem('libraToppersData', (receivedUser.user.cardCollection));
            localStorage.setItem('libraToppersUser', JSON.stringify(receivedUser));
        }

    } catch (error) {
        console.log('error', error);
    }
}