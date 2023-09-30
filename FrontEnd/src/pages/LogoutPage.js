import { useEffect } from "react"
import authStore from "../stores/authStore";
import '../styles/index.css';

export default function LogoutPage() {
    const store = authStore();
   
    useEffect(() => {
        store.logout();
        // eslint-disable-next-line
    }, [])
    return (
        <div className="txt-center"><h1>You are logged out now</h1></div>
    )
}
