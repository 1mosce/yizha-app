import "../styles/routes/Register.scss";

export default function Register() {
  return (
    <div className="wrapper">
      <h1 className="title">Register your account now</h1>
      <div className="register">
        <div className="register-field">
          <span className="register-field-span">Enter your login</span>
          <input className="register-field-input" type="text" />
        </div>
        <div className="register-field">
          <span className="register-field-span">Enter your e-mail</span>
          <input className="register-field-input" type="email" />
        </div>
        <div className="register-field">
          <span className="register-field-span">Enter your password</span>
          <input className="register-field-input" type="password" />
        </div>
        <div className="register-button"></div>
        <button>Register</button>
      </div>
    </div>
  );
}
