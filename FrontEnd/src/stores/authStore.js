import axios from 'axios';
import { create } from 'zustand';

const authStore = create((set) => ({
    // states
    loginForm: {
        email: '',
        password: ''
    },
    signupForm: {
        email: '',
        password: ''
    },
    loggedIn: null,
    // functions
    updateLoginForm: (e) => {
        // get value and name from event(onChange)
        const { name, value } = e.target;
        // set loginForm values in the state
        set((state) => {
            return {
                loginForm: {
                    ...state.loginForm,
                    [name]: value,
                }
            }
        })
    },
    login: async () => {
        // get email and password from state 
        const { loginForm } = authStore.getState();

        try {
            // call api for login
            await axios.post('/login', loginForm);
            // clear the state
            set((state) => {
                return {
                    loginForm: {
                        email: '',
                        password: ''
                    },
                    loggedIn: true
                }
            });

        } catch (error) {
            alert('Wrong Email or Password');
            console.log(error);
        }

    },
    // check if session have authorization
    checkAuth: async () => {
        try {
            await axios.get('/check-auth');
            // now set the loggedIn state to true
            set({ loggedIn: true });
        } catch (error) {
            set({ loggedIn: false });
        }
    },
    logout: async () => {
        try {
            await axios.get('/logout');
            // now set the loggedIn state to false
            set({ loggedIn: false });
        } catch (error) {
        }
    },
    updateSignupForm: (e) => {
        // get value and name from event(onChange)
        const { name, value } = e.target;
        // set loginForm values in the state
        set((state) => {
            return {
                signupForm: {
                    ...state.signupForm,
                    [name]: value,
                }
            }
        })
    },
    signup: async () => {
        // get email and password from state 
        const { signupForm } = authStore.getState();

        try {
            await axios.post('/signup', signupForm);
            // clear the state
            set({
                signupForm: {
                    email: '',
                    password: ''
                }
            });
            alert('Signup Successfull!!');

        } catch (error) {
            console.log(error);
        }


    },
    logout: async () => {
        try {
            await axios.get('/logout');
            set({
                loggedIn:false,
            })

        } catch (error) {

        }
    }
}))

export default authStore;