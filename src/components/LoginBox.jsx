import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiBitbucket, SiGitlab } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa"; 
import "./LoginBox.css";
import logo from './logo.png';
import "./main.css";
function LoginBox() {
  return (
    <div className="login-box">
      <h1>
        <img src={logo} width="15%" height="15%"alt="Logo" />
        CodeAnt AI
      </h1>
      <h1>Welcome to CodeAnt AI</h1>
      <div className="tab-buttons">
        <button className="active">SAAS</button>
        <button>Self Hosted</button>
      </div>
      <div className="sign-in-options">
        <button>
          <AiFillGithub size={20} /> Sign in with GitHub
        </button>
        <button>
          <SiBitbucket size={20} /> Sign in with Bitbucket
        </button>
        <button>
          <FaMicrosoft size={20} /> Sign in with Azure DevOps
        </button>
        <button>
          <SiGitlab size={20} /> Sign in with GitLab
        </button>
      </div>
      <p>
        By signing up you agree to the <a href="#">Privacy Policy</a>.
      </p>
    </div>
  );
}

export default LoginBox;
