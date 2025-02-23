function SignInSubmitButton() {
    const handleClick = () => {
      console.log('Button clicked!');
      // Add simple sign in logic here
    };
  
    return (
      <button 
        onClick={handleClick}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-black-600"
      >
        Sign In
      </button>
    );
  }

  const handleClick = () => {
    const username = prompt("Enter username:");
    const password = prompt("Enter password:");
    
    if (username === "admin" && password === "password") {
      alert("Signed in successfully!");
      window.location.href = '/dashboard';
    } else {
      alert("Invalid credentials!");
    }
  };
  
  export default SignInSubmitButton;