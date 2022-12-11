import axios from "axios";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./AuthTypes";

export const loginAction = () => async (dispatcher) => {
  try {
    const res = await axios.get("http://localhost:8080/redisdata");

    const {
      data: { email },
    } = res;
    localStorage.setItem("email", email);
    if (!email) {
      const data = localStorage.getItem("email");
      const res = await axios.post("http://localhost:8080/getuser", {
        email: data,
      });

      dispatcher({
        type: LOGIN_SUCCESS,
        payload: res.data[0],
      });
    }
    dispatcher({
      type: LOGIN_SUCCESS,
      payload: res,
    });
  } catch (error) {
    const data = localStorage.getItem("email");
    const res = await axios.post("http://localhost:8080/getuser", {
      email: data,
    });
    dispatcher({
      type: LOGIN_SUCCESS,
      payload: res.data[0],
    });
    dispatcher({ type: LOGIN_FAILURE });
    return false;
  }
};
