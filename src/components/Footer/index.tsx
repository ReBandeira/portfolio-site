
import './styles.sass';

export default function Footer() {
    return (
        <footer id='information'>
           
            <p><span>Rê Bandeira</span> &copy; 2022</p>
        </footer>

    )
}
/*
import {AiFillMail, AiFillEnvironment} from 'react-icons/ai'
const informations = [
    {name: 'Localização', id: 'localizacao', key: 'localizacao', info: 'Porto Alegre - RS', icon: <AiFillEnvironment/>},
    {name: 'e-mail', id: 'email', key:'email',info: 'renatabandeiradasilva@gmail.com', icon: <AiFillMail/>}
];
 <div className='info-cards'>
                {informations.map((information) => (
                    <div className='info-card' key={information.key}>
                        <span id={information.id}>
                            {information.icon}
                        </span>
                        <h3>{information.name}</h3>
                        <p>{information.info}</p>
                    </div>
                ))}
            </div>
*/