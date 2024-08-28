import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()


    const signup = async (formData) => {
        setIsLoading(true)
        setError(null)

        try {

            if (!(formData instanceof FormData)) {
                throw new Error("Invalid form data");
            }

            const response = await axios.post(`http://localhost:4000/api/user/signup`,
                formData,
                {headers: {'Content-Type': 'multipart/form-data'}}
            );

            if (response.status !== 200) {
                setIsLoading(false)
                setError(error.response.data.error)
            }

            if (response.status === 200) {
                // Save to local storage
                localStorage.setItem('user', JSON.stringify(response.data))
                // Update auth context state
                dispatch({type: 'LOGIN', payload: response.data})
                
                setIsLoading(false)
            }

        } catch (error) {
            console.log(error.response.data.error);
            setError(error.response.data.error)
            setIsLoading(false)
        }
    }

    return {signup, isLoading, error}
}