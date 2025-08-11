export const METHOD_TYPES = Object.freeze({
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
    PUT: "PUT",
    PATCH: "PATCH",
});

export const APP_ROUTES = Object.freeze({
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
    PROFILE: "/profile",
    SETTINGS: "/settings",
});

export const PAGE_DATA = Object.freeze({
    HOME: {
        title: "Home",
        description: "Home page",
    },
    LOGIN: {
        title: "Login",
        description: "Login page",
    },
    REGISTER: {
        title: "Register",
        description: "Register page",
    },
    FORGOT_PASSWORD: {
        title: "Forgot Password",
        description: "Forgot Password page",
    },
    RESET_PASSWORD: {
        title: "Reset Password",
        description: "Reset Password page",
    },
});