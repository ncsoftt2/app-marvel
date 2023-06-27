// @ts-ignore
import avengers from '../../resource/img/Avengers.png';
// @ts-ignore
import avengersLogo from '../../resource/img/Avengers_logo.png';
import './appBanner.scss';

const AppBanner = () => {
    return (
        <div className="app__banner">
            <img src={avengers} alt="Avengers"/>
            <div className="app__banner-text">
                New comics every week!<br/>
                Stay tuned!
            </div>
            <img src={avengersLogo} alt="Avengers logo"/>
        </div>
    )
}

export default AppBanner;