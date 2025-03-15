import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Import Navbar component
import SignOutButton from "./SignOutButton"; // Import SignOutButton component

function CreateAccountPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    if (username.trim() && password.trim()) {
      alert("Account created successfully!");
      navigate("/dashboard"); // Redirect to dashboard or login page
    } else {
      alert("Please enter a valid username and password.");
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar /> {/* Include Navbar at the top */}
      <div className="flex justify-between items-start p-8">
        {/* Left Section - Create Account Form */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-4">Create Account</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded mb-2 text-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded mb-4 text-black"
          />
          <button
            onClick={handleCreateAccount}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Create Account
          </button>
        </div>
        {/* Right Section - User Info & Sign Out */}
        <div className="border p-4 rounded text-center bg-gray-900">
          <h3 className="text-lg font-bold">Welcome User!</h3>
          <p className="italic">user@gmail.com</p>
          <div className="mt-4">
            <SignOutButton /> {/* Allow user to sign out if needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountPage;
