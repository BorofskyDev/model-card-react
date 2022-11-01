import { GiAngelOutfit, GiDevilMask } from 'react-icons/gi';
import blue from '../images/blue.jpg';
import red from '../images/red.jpg'

export default function Header(props) {
  return (
    <header className="card__header">
      <div className="card__image">
        <img
          src={props.redMode ? red : blue}
          alt="woman looking at camera while blowing a bubblegum bubble"
          className="card__image--photo"
        />
        <div className="header__toggler">
          <GiAngelOutfit className='header__blue'/>
          <div className="header__toggler--slider" onClick={props.toggleRedMode}>
            <div className="header__toggler--circle"></div>
          </div>
          <GiDevilMask className='header__red' />
        </div>
      </div>
    </header>
  );
}
