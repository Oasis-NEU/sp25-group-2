import { useNavigate } from "react-router-dom";

function SignInButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/SignIn'); // navigates to the SignIn page
    };

    return (
        <button onClick={handleClick}>
            Sign In
        </button>
    )
}