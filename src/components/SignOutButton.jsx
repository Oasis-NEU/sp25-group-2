import { useNavigate } from "react-router-dom";

export default function SignInButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Home'); // navigates to the SignIn page
    };

    return (
        <button onClick={handleClick}>
            Sign Out
        </button>
    );
}