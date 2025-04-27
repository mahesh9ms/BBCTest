type USER_DATA = {
    email: string;
    password: string;
};

const USER: USER_DATA = {
    email: process.env.USER_EMAIL!,
    password: process.env.USER_PASSWORD!,
};

export {USER_DATA, USER}