import { GiAngelOutfit, GiDevilMask } from 'react-icons/gi';

import './Header.css';

export default function Header(props) {
  return (
    <header className="header">
      <div className="header__image"></div>
      <div className="header__toggler">
        <GiAngelOutfit className="header__blue" />
        <div className="header__toggler--slider" onClick={props.toggleRedMode}>
          <div className="header__toggler--circle"></div>
        </div>
        <GiDevilMask className="header__red" />
      </div>
    </header>
  );
}
