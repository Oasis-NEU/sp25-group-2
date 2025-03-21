import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignOutButton from "./SignOutButton"; // Import the SignOutButton component

function SignOutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Optionally sign out the user automatically
    alert("Signed out successfully!");
    // Clear user session or authentication state if needed
    navigate("/"); // Redirect to homepage or login page
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-lg mb-4">You have been signed out.</p>
      <SignOutButton /> {/* Allow user to sign out manually if needed */}
    </div>
  );
}

export default SignOutPage;
