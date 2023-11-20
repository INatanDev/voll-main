import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import whatsapp from './assets/whatsapp.png';
import google from './assets/google.png';

function Rodape(){
    return(
        <footer>
            <ul>
                <li>
                    <a href="#">
                        <img src={facebook} alt="logo do facebook" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Rodape;