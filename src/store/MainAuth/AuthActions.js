import axios from "axios";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./AuthTypes";

export const loginAction = () => async (dispatcher) => {
  try {
    const data = localStorage.getItem("lol");
    const res = await axios.post("http://localhost:8080/getuser", {
      email: data,
    });
    console.log("res:", res);
    dispatcher({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    return error.message;
  }
};
