import "./Login.css";
import icon from "./images/Moralis-Favicon.svg";
import { useMoralis } from "react-moralis";

function Login() {
    const { authenticate, authError } = useMoralis();
    return (
        <div className="login_container">
            <div className="login_card">
                <img src={icon} width={100} height={100} alt="" />
                <div className="sign_in_container">
                    {authError && (
                        <p className="error">
                            {authError.name}
                            {authError.message}
                        </p>
                    )}
                    <button onClick={authenticate}>Login with Moralis</button>
                </div>
            </div>
        </div>
    );
}

export default Login;