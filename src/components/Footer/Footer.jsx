import React from 'react';
import './Footer.css'

export default function Footer(props) {
  const reverseStyle = props.redMode ? "reverse__style logo__first" : "logo__first"
  return (
    <footer className="footer">
      <p className="footer__logo">
        A &lt;<span className={reverseStyle}>BorofskyDev</span> /&gt; creation
      </p>
      <p className="footer__credit">
        Photos by{' '}
        <a href="https://unsplash.com/photos/COgbRUTvL-s" target="_blank" >Daniel Monteiro</a>
      </p>
    </footer>
  );
}

// Photos by https://unsplash.com/photos/COgbRUTvL-s
