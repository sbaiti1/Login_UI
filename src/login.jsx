import './login.css'
import icon from './assets/eye-slash.svg'
import google from './assets/google.svg'
import mac from './assets/mac.svg'
import fb from './assets/fb.svg'

function Login(){
    return(
        <div className="login">
            <div className="hello">Hello Again!</div>
            <div className="wlcm">Wellcome back you've <br /> been missed!</div>

            <div className="form">
                <div className="input"><span>Enter username</span></div>
                <div className="input"><span>Password</span> <span className="icon"><img src={icon} alt="" /></span></div>


            </div>
            <div className="recover">Recovery Password</div>
            <div className="btn">Sign In</div>
            <div className="social">
                <p>or continue with</p>
                <div className="icons">
                    <img src={google} alt="" />
                    <img src={mac} alt="" />
                    <img src={fb} alt="" />
                    
                </div>
            </div>
            <div className="signup">
                Not a member? <a href="">Register now</a>
            </div>

        </div>
    )

}
export default Login