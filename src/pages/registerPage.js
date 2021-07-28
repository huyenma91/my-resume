import React, { useState, useEffect } from "react";
import Axios from 'axios';
// import { useHistory } from 'react-router';
import '../components/login.css';


function RegisterPage() {
  // const history = useHistory();
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  useEffect(() => {
    if (registerStatus) {
      setTimeout(() => {
        setRegisterStatus("");
      }, 2000);
    }
  }, [registerStatus]);
  const register =async () => {
    await Axios.post("/api/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      if (response.data.message) {
        setRegisterStatus(response.data.message)
      }
      else {
        setRegisterStatus("Successfully creating new account")
      }
      // console.log(response);
    }).catch(error => {
      console.log(error)
    });
  };

//   const register = async () => {
//     const response = await axios.post('/api/signup', {
//         email: emailValue,
//         password: passwordValue,
//     });
//     const { token } = response.data;
//     setToken(token);
//     history.push('/please-verify');
// }

  return (
    <div className="loginPage">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Register</h3>
            <div className="d-flex justify-content-end social_icon">
              <span><a className="icon-login" href="https://www.facebook.com/nhatphuong.pham.1/"><i className="fab fa-facebook-square"></i></a></span>
              <span><a className="icon-login" href="https://www.facebook.com/nhatphuong.pham.1/"><i className="fab fa-google-plus-square"></i></a></span>
              <span><a className="icon-login" href="https://www.facebook.com/nhatphuong.pham.1/"><i className="fab fa-twitter-square"></i></a></span>
            </div>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-user"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="username" onChange={(e) => setUsernameReg(e.target.value)} />

              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-key"></i></span>
                </div>
                <input type="password" className="form-control" placeholder="password" onChange={(e) => setPasswordReg(e.target.value)} />
              </div>
              {/* <div  className="row align-items-center remember">
                      <input type="checkbox"/>Remember Me
                    </div> */}
              <div className="form-group">
                <input type="button" onClick={register} value="Register" className="btn float-right login_btn" />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Already have an account?<a href="/">Login</a>
            </div>
            {/* <div  className="d-flex justify-content-center">
                    <a href="#">Forgot your password?</a>
                  </div> */}
          </div>
          {registerStatus== "User existed" && <h5 style={{ color: "red", textAlign: "center" }}>{registerStatus}</h5>}
          {registerStatus!== "User existed" && <h5 style={{ color: "green", textAlign: "center" }}>{registerStatus}</h5>}
        </div>
      </div>

    </div>
  );
}

export default RegisterPage;