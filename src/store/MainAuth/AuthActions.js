import axios from "axios"
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./AuthTypes"

export const loginAction = () => async (dispatcher) => {
    try {
        const res = await axios.get("https://medimedcom-backend-production.up.railway.app/redisdata")
        
        dispatcher({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        return res.data
    } catch (error) {
        dispatcher({ type: LOGIN_FAILURE })
        return false
    }
}