import React, { useState } from "react";
import Axios from 'axios';
import { useHistory } from 'react-router';
import { useToken } from '../auth/useToken';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import '../components/login.css';
// import  { Redirect } from 'react-router-dom'

function LoginPage() {
  const history = useHistory();
  const [token, setToken] = useToken();
  // const [usernameReg,setUsernameReg] = useState("");
  // const [passwordReg,setPasswordReg] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const login = async () => {
    await Axios.post("/api/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message)
      }
      else {
        const { token } = response.data;
        setToken(token);
        history.push('/home');
        // setLoginStatus(response.data[0].username)
      }
    }).catch(error => {
      console.log(error)
    });
  };


  // const login = async () => {
  //   await Axios.post(" http://localhost:3001/api/login", {
  //     username: username,
  //     password: password,
  //   }).then((response) => {
  //     if (response.data.message) {
  //       setLoginStatus(response.data.message)
  //     }
  //     else {
  //       const { token } = response.data;
  //       setToken(token);
  //       history.push('/home');
  //       // setLoginStatus(response.data[0].username)
  //     }
  //   }).catch(error => {
  //     console.log(error)
  //   });
  // };

  return (
    <div className="loginPage">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Login</h3>
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
                <input type="text" className="form-control" placeholder="username" onChange={(e) => setUsername(e.target.value)} />

              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-key"></i></span>
                </div>
                <input type="password" className="form-control" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
              </div>
              {/* <div  className="row align-items-center remember">
                      <input type="checkbox"/>Remember Me
                    </div> */}
              <div className="form-group">
                <input type="button" onClick={login} value="Login" className="btn float-right login_btn" />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Don't have an account?<a href="/register">Register</a>
            </div>
            {/* <div  className="d-flex justify-content-center">
                    <a href="#">Forgot your password?</a>
                  </div> */}
          </div>
          <h5 style={{ color: "red", textAlign: "center" }}>{loginStatus}</h5>
        </div>
      </div>



    </div>
  );
}

export default LoginPage;