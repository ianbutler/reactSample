import delay from './delay';

const users = [
    {
        email: "user@email.com",
        password: "1234"
    }
];

class LoginApi {

    static verifyUser(userToCheck) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let verified = false;
                users.forEach((user) => {
                    if (user.email == userToCheck.email && user.password == userToCheck.password) {
                        verified = true;
                        resolve({
                            token: "fakeToken",
                            user
                        });
                    }
                });
                reject({message: "No match!"});
            }, delay);
        });
    }

    static logout() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 0);
        });
    }
}

export default LoginApi;
