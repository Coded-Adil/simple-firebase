import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import auth from "../../firebase/firebase.init";

const LogIn = () => {

    const provider = new GoogleAuthProvider();

    const handleSignInGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
            })
            .catch(error => {
                console.log('Error: ', error);
            } )

    }
    return (
        <div>
            <button onClick={handleSignInGoogle}>LogIn with Google</button>
        </div>
    );
};

export default LogIn;