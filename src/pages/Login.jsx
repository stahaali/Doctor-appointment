import { useState } from "react";
import { Container, Row } from "react-bootstrap";

export default function Login() 
{
  const [state, setState] = useState('login');
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('admin'); 

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (state === 'Sign Up') {

      setState('login');
    } else {

      console.log('Logging in with:', { email, password });
    }
  };

  return (
    <>
      <section className="login-section">
        <Container>
          <Row>
            <div className="form">
              <form onSubmit={onSubmitHandler}>
                <h4>{state === 'Sign Up' ? "Create Account" : "Login"}</h4>
                <p>Please {state === 'Sign Up' ? "Sign Up" : "Login"} to book an appointment</p>
                
                {state === 'Sign Up' && (
                  <div className="form-group">
                    <label>Full name</label>
                    <input 
                      type="text" 
                      className="inpt form-control" 
                      onChange={(e) => setName(e.target.value)} 
                      value={name} 
                      required 
                    />
                  </div>
                )}

                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="text" 
                    className="inpt form-control" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label>Password</label>
                  <input 
                    type="password" 
                    className="inpt form-control" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                    required 
                  />
                </div>

                <button type="submit" className="submit">
                  {state === 'Sign Up' ? "Create Account" : "Login"}
                </button>
              </form>

              {state === "Sign Up" ? (
                <p>
                  Already have an account? 
                  <a onClick={() => setState('login')} style={{ cursor: 'pointer' }}> Login here</a>
                </p>
              ) : (
                <p>
                  Create a new account? 
                  <a onClick={() => setState('Sign Up')} style={{ cursor: 'pointer' }}> Click here</a>
                </p>
              )}
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}
