function Register() {
  return (
    <div className="page">
      <h1>Registration Page</h1>

      <div className="card">
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email Address" />
        <input type="tel" placeholder="Mobile Number" />
        <input type="date" placeholder="Date of Birth" />
        <input type="text" placeholder="Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button>Register</button>
      </div>
    </div>
  );
}

export default Register;