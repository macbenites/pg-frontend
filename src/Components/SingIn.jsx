import React from "react";
import { Link } from "react-router-dom";

function SingIn() {
    return(
    <div>
        <h1>Create new account</h1>
        <h4>Already A Member? <Link to='/login'>Log In</Link></h4>
        <input/>
        <input/>
        <input/>
        <input/>
        <input/>
        <input/>
        <button type='submit' onClick={}>Create Account</button>
    </div>
    );
};

export default SingIn;