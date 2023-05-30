
import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import jwtDecode from "jwt-decode";
const GoogleLoginButton = ({setres}) => {
    const clientId = '254786573789-ql2ure96d1vj31p2mej0ohjjm6ks6q1v.apps.googleusercontent.com'
    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={(res) => {
                        console.log(jwtDecode(res.credential));
                        setres(jwtDecode(res.credential))

                    }}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
            </GoogleOAuthProvider>
        </>
    );
};

export default GoogleLoginButton
