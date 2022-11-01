import { GiWireframeGlobe } from 'react-icons/gi';
import {
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaImdb,
  FaTwitter,
  FaEnvelope,
  FaTwitch,
} from 'react-icons/fa';
import './Main.css'

export default function Main(props) {
  const redTextShadow = props.redMode ? "red__text--shadow card__title" : "card__title"
  const redText = props.redMode ? "red__text card__about--desc" : "card__about--desc"
  const redLink = props.redMode ? "red__link card__link" : "card__link"
  return (
    <div className="card__container">
      <div className="card__toggler"></div>
      <h1 className={redTextShadow}>Jane Smith</h1>
      <div className="card__about--container">
        <p className="card__about">
          <span className={redText}>Age: &nbsp;</span> 24
        </p>
        <p className="card__about">
          <span className={redText}>Years Active: &nbsp;</span> 3
        </p>
        <p className="card__about">
          <span className={redText}>Services: &nbsp;</span> Acting,
          Modeling, Singing
        </p>
        <p className="card__about">
          <span className={redText}>Location: &nbsp;</span>New York,
          NY
        </p>
      </div>
      <p className="card__content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, nisi
        voluptates possimus eius quaerat voluptate doloribus error molestiae
        dolorum, quos eveniet alias sint nam eligendi quibusdam sunt excepturi
        esse aliquid?
      </p>
      <h3 className="card__links--title">My Links</h3>
      <div className="card__links">
        <a href="#" className={redLink}>
          <GiWireframeGlobe className="card__icon" />
        </a>
        <a href="#" className={redLink}>
          <FaTiktok className="card__icon" />
        </a>
        <a href="#" className={redLink}>
          <FaInstagram className="card__icon" />
        </a>
        <a href="#" className={redLink}>
          <FaYoutube className="card__icon" />
        </a>
        <a href="#" className={redLink}>
          <FaImdb className="card__icon" />
        </a>
        <a href="#" className={redLink}>
          <FaTwitter className="card__icon" />
        </a>
        <a href="#" className={redLink}>
          <FaTwitch className="card__icon" />
        </a>
        <a href="#" className={redLink}>
          <FaEnvelope className="card__icon" />
        </a>
      </div>
    </div>
  );
}
