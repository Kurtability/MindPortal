import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import axiosConfig from "../services/axiosConfig";

const dummy_user = {
    firstName: "DummyUserFirst",
    lastName: "DummyUserLast",
    email: "DummyUserEmail",
};
//TODO: add an axios interceptor that logs the user out when the JWT has expired.

const authContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const tokenStorage = localStorage.getItem("jwt-token")
        ? JSON.parse(localStorage.getItem("jwt-token"))
        : "";

    const userStorage = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : "";

    const [user, setUser] = useState(userStorage || null);
    const [token, setToken] = useState(tokenStorage || null);

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    const updateDetails = (firstName, lastName, email, success, failure) => {
        axiosConfig
            .put(
                "/api/users",
                {
                    id: user.id,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                },
                config
            )
            .then((result) => {
                console.log(result);
                setUser(result.data.user);
                setToken(result.data.token.token);
                localStorage.setItem("user", JSON.stringify(result.data.user));
                localStorage.setItem(
                    "jwt-token",
                    JSON.stringify(result.data.token.token)
                );

                success();
            })
            .catch((err) => {
                console.log(err);
                failure();
            });
    };

    const changePassword = (oldPassword, newPassword, success, failure) => {
        axiosConfig
            .put(
                `/api/users/${user.id}/changePassword`,
                { oldPassword: oldPassword, newPassword: newPassword },
                config
            )
            .then((result) => {
                console.log(result);
                success();
            })
            .catch((error) => {
                console.log(error);
                failure();
            });
    };

    const signin = (email, password, success, failure) => {
        // do sign in functionality and return user
        axiosConfig
            .post("/authenticate", {
                username: email,
                password: password,
            })
            .then((result) => {
                console.log(result);
                // setUser(dummy_user);
                setUser(result.data.user);
                setToken(result.data.token.token);
                localStorage.setItem(
                    "jwt-token",
                    JSON.stringify(result.data.token.token)
                );
                localStorage.setItem("user", JSON.stringify(result.data.user));
                success();
            })
            .catch((err) => {
                console.log(err);
                setUser(null);
                setToken(null);
                failure();
            });
        // return user;
        // return user deatils from server.
    };

    const signup = (email, password, firstName, lastName, success, failure) => {
        // set user to server

        setUser(null);
        axiosConfig
            .post("/register", {
                email,
                password,
                firstName,
                lastName,
            })
            .then((result) => {
                console.log(result);
                setUser(result.data.user);
                setToken(result.data.token.token);
                localStorage.setItem("user", JSON.stringify(result.data.user));
                localStorage.setItem(
                    "jwt-token",
                    JSON.stringify(result.data.token.token)
                );
                success();
            })
            .catch((err) => {
                console.log(err);
                setUser(null);
                setToken(null);
                failure();
            });
    };

    const signout = (cb) => {
        // setUser(false);
        setUser(null);
        setToken(null);
        localStorage.removeItem("jwt-token");
        localStorage.removeItem("user");
        if (cb) {
            cb();
        } else {
            window.location.href = "/";
        }
    };

    const getSmileResult = (imageToSend, cb) => {
        const smileConfig = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/octet-stream",
            },
        };

        axiosConfig
            .post(`/api/smile/${user.id}/getResult`, imageToSend, smileConfig)
            .then((result) => {
                console.log(result);

                let smileValue = result.data.score;
                ///
                cb(smileValue);

                if (smileValue > 0.85) {
                    refreshUser();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const refreshUser = () => {
        axiosConfig
            .get(`/api/users/${user.id}`, config)
            .then((result) => {
                console.log(result);
                setUser(result.data);
                localStorage.setItem("user", JSON.stringify(result.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        // get user again.
    }, [user]);

    return {
        user,
        signin,
        signup,
        signout,
        updateDetails,
        getSmileResult,
        changePassword,
        token,
    };
}

export default useAuth;
