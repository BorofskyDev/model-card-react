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

export default function Main() {
  return (
    <div className="card__container">
      <div className="card__toggler"></div>
      <h1 className="card__title">Jane Smith</h1>
      <div className="card__about--container">
        <p className="card__about">
          <span className="card__about--desc">Age: &nbsp;</span> 24
        </p>
        <p className="card__about">
          <span className="card__about--desc">Years Active: &nbsp;</span> 3
        </p>
        <p className="card__about">
          <span className="card__about--desc">Services: &nbsp;</span> Acting,
          Modeling, Singing
        </p>
        <p className="card__about">
          <span className="card__about--desc">Location: &nbsp;</span>New York, NY
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
        <a href="#" className="card__link">
          <GiWireframeGlobe className="card__icon" />
        </a>
        <a href="#" className="card__link">
          <FaTiktok className="card__icon" /> 
        </a>
        <a href="#" className="card__link">
          <FaInstagram className="card__icon" /> 
        </a>
        <a href="#" className="card__link">
          <FaYoutube className="card__icon" /> 
        </a>
        <a href="#" className="card__link">
          <FaImdb className="card__icon" /> 
        </a>
        <a href="#" className="card__link">
          <FaTwitter className="card__icon" />
        </a>
        <a href="#" className="card__link">
          <FaTwitch className="card__icon" /> 
        </a>
        <a href="#" className="card__link">
          <FaEnvelope className="card__icon" /> 
        </a>
      </div>
    </div>
  );
}
