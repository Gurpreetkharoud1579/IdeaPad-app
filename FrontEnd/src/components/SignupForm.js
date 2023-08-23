import authStore from "../stores/authStore"
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
    const store = authStore();
    const navigate = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            //    signup
            await store.signup();
            // navigate to login page
            navigate('/login');

        } catch (error) {

        }

    }
    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <label htmlFor="email">Email</label>
                <input value={store.signupForm.email} onChange={store.updateSignupForm} type="text" name="email" />
                <label htmlFor="password">Password</label>
                <input value={store.signupForm.password} onChange={store.updateSignupForm} type="password" name="password" />
                <button type="submit">Signup</button>
            </form>

        </div>
    )
}
