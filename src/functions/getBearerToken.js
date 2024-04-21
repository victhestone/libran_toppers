export const getBearerToken = () => {
    const user = localStorage.getItem('libraToppersUser');
    if (user) {
        const parsedUser = JSON.parse(user);
        return parsedUser.token;
    }
}