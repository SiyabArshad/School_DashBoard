import axios from "./http";

const setAuthToken = (jwt) => {
    if (jwt) {
        axios.defaults.headers.common["clientid"] = jwt?.clientID;

    } else {
        delete axios.defaults.headers.common["clientid"];
    }
};

export default setAuthToken;
