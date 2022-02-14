import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../firebase-config';
// toast
import { toast } from 'react-toastify';
const auth = getAuth(app);

export const signIn = async (values) => {
    let email = values.email;
    let password = values.password;

    try {
        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log('Signed in successfully!');
                toast.success('Signed in successfully!');
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000);
            })
            .catch((error) => {
                console.log('failed to sign in', error);
                toast.error('failed to sign in');
            });
    } catch (error) {
        console.log(error);
    }
};

export const signUp = async (values) => {
    let email = values.email;
    let password = values.password;
    try {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log('Signed up successfully!');
                toast.success(`${email} signed up successfully!`);
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000);
            })
            .catch((error) => {
                toast.error(`error: ${error.code}`);
            });
    } catch (error) {
        console.log(error);
    }
};