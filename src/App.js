import './App.css';
import { useState } from 'react';
import { Button } from 'bootstrap';

function App() {

  const [values, setVlaues] = useState({
    firstName: "",
    lastName: "",
    email:""
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setVlaues({
      ...values, firstName: event.target.value
    })
  }

  const handleLastNameInputChange = (event) => {
    setVlaues({
      ...values, lastName: event.target.value
    })
  }

  const handleEmailInputChange = (event) => {
    setVlaues({
      ...values, email: event.target.value
    })
  }

  const handleSubmit = (event) =>{
    if(values.firstName && values.lastName && values.email) {
      event.preventDefault();         
    }
    setSubmitted(true);   

  }

  return (
    <div className="App">
      <div className='form-container'>
        <form className='register-form' onSubmit={handleSubmit}>
          {submitted && valid ? <div className='success-message'>Success!, Thank you for registering</div> : null}
          <input onChange={handleFirstNameInputChange} value={values.firstName} className='form-field' placeholder='First Name' name='firstName'/>
          {submitted && !values.firstName ? <span>Please enter your first name!</span> : null}
          <input onChange={handleLastNameInputChange} value={values.lastName}className='form-field' placeholder='Last Name' name='lastName'/>
          {submitted && !values.lastName ? <span>Please enter your last name!</span> : null }<br/>
          <input onChange={handleEmailInputChange} value={values.email} className='form-field' placeholder='Email' name='email'/>
          {submitted && !values.email ? <span>Please enter your email!</span> : null }<br/>
          <button className='form-field'>Register</button>
        </form>
      </div>
    </div>
  );
}

export default App;
