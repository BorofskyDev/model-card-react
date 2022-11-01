import { GiAngelOutfit, GiDevilMask } from 'react-icons/gi';

import './Header.css';

export default function Header(props) {
  const redImg = props.redMode ? 'red__header header__image' : 'header__image';

  const redToggler = props.redMode
    ? 'red__toggler header__toggler--slider'
    : 'header__toggler--slider';

  const iconRed = props.redMode ? 'toggled header__red' : 'header__red';
  const iconBlue = props.redMode ? 'toggled header__blue' : 'header__blue';

  return (
    <header className="header">
      <div className={redImg}></div>
      <div className="header__toggler">
        <GiAngelOutfit className={iconBlue} onClick={props.toggleRedMode} />
        <div className={redToggler} onClick={props.toggleRedMode}>
          <div className="header__toggler--circle"></div>
        </div>
        <GiDevilMask className={iconRed} onClick={props.toggleRedMode} />
      </div>
    </header>
  );
}
