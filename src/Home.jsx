import girl from './assets/girl_purple.png'
import './home.css'
function Home(){
    return(
        <div className="home">
            <div className="image"></div>
            <div className="title">Discover your <br />Dream job Here</div>
            <p className='text'>Explore all the most exiting jobs roles <br /> based on your interest And Study major</p>
            <div className="btns">
                <div className="register">Register</div>
                <div className="sign">Sign in</div>
            </div>
        </div>
    )
}

export default Home