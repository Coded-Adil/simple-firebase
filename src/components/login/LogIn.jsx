import { signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";

const LogIn = () => {

    const provider = new GoogleAuthProvider();

    console.log(auth, provider)
    const [user, setUser] = useState(null);
    const handleSignInGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch(error => {
                console.log('Error: ', error);
                setUser(null);
            } )

    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log('Signing Out');
            setUser(null);
        })
        .catch(error => console.log(error));
    }
    return (
        <div>
            {
                user ? <button onClick={handleSignOut}>SignOut</button> : <button onClick={handleSignInGoogle}>LogIn with Google</button>
            }
            {
                user && 
                <div>
                    <h4>{user.displayName}</h4>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default LogIn;