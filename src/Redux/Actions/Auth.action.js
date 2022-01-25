import { FirebaseError } from "firebase/app"
import auth from "../../Firebase"

export const login = () => async dispatch => {
    try{
        const provider = new Firebase.auth.GoogleAuthProvider()

        const res = await auth.signInWithPopup(provider);
        console.log(res)
    }catch(error) {}
} 