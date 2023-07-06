import React from 'react';
import { GoogleLogout} from 'react-google-login';

const clientId = "281450817984-lbo71ppusiug27vs7jvqv926bt9n2eiu.apps.googleusercontent.com";

const onSuccess = (res) => {
    console.log("LOGOUT SUCCESS!");
}

const Logout = ({ grantAccess }) => {
  return (
    <div id="signInButton" onClick={grantAccess}>
        <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
        />
  </div>
  )
}

export default Logout
