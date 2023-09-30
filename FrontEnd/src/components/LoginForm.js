import authStore from "../stores/authStore"
import { useNavigate } from "react-router-dom";
import '../styles/loginForm.css'

export default function LoginForm() {
    const store = authStore();
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // login check
            await store.login();
            // navigate to home page if login successfull
            navigate('/');
        } catch (error) {
            console.log(error);
        }

    }
  return (
    <div className="login-form-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          value={store.loginForm.email}
          onChange={store.updateLoginForm}
          type="text"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={store.loginForm.password}
          onChange={store.updateLoginForm}
          type="password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );

}
