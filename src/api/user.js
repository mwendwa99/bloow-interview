import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../firebase-config';
// toast
import { toast } from 'react-toastify';
const auth = getAuth(app);

export const signIn = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log('Signed in successfully!');
                toast.success('Signed in successfully!');
            })
            .catch((error) => {
                console.log('failed to sign in');
                toast.error('failed to sign in');
            });
    } catch (error) {
        console.log(error);
    }
};

export const signUp = async (email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log('Signed up successfully!');
                toast.success('Signed up successfully!');
            })
            .catch((error) => {
                console.log('failed to sign up');
                toast.error('failed to sign up');
            });
    } catch (error) {
        console.log(error);
    }
};