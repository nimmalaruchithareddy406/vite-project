function Contact() {
  return (
    <div className="page">
      <h1>Contact Page</h1>

      <div className="card">
        <input type="text" placeholder="Enter Name" />
        <input type="email" placeholder="Enter Email" />
        <textarea placeholder="Enter Message"></textarea>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Contact;