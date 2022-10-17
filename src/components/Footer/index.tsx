import {AiFillMail, AiFillEnvironment} from 'react-icons/ai'
import './styles.sass';

const informations = [
    {name: 'Localização', id: 'localizacao', key: 'localizacao', info: 'Porto Alegre - RS', icon: <AiFillEnvironment/>},
    {name: 'e-mail', id: 'email', key:'email',info: 'renatabandeiradasilva@gmail.com', icon: <AiFillMail/>}
];

export default function Footer() {
    return (
        <footer id='information'>
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
            <p><span>Rê Bandeira</span> &copy; 2022</p>
        </footer>

    )
}