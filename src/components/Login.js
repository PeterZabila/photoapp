import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = process.env.CLIENT_ID

const Login = ({ grantAccess }) => {

    const onSuccess = (res) => {
        console.log("LOGON SUCCESS! current user: ", res.profileObj)
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res)
    }

  return (
    <div id="signInButton" onClick={grantAccess}>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  )
}

export default Login
