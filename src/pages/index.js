import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';
import Logo from '../images/sodastop.png';
import Social from '../images/124010.svg';
import {Link} from "gatsby";

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>The Soda Stop</title>
        <script type="text/javascript" id="mcjs">{`!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/6c225a264532c289522f4f7e3/3e475057d5b411abc57dfa680.js");
`}</script>
      </Helmet>
    <div > <img style={{maxWidth: "90%"}} src={Logo} alt="The Soda Shop Carrizo Springs Logo" title="The Soda Shop"/></div>
      <h1>The Soda Stop is coming soon!</h1>
      <h2>
        Pouring into Carrizo Springs and surrounding areas this spring.
      </h2>
      <section className="footer">
        <footer>
           <a rel="noreferrer" href="https://www.facebook.com/TheSodaStopCarrizoSprings" target="_blank"><img alt="Facebook Icon" title="Visit our Facebook page for more information." src={Social} height="30"/></a>
        </footer>
      </section>
    </main>
  );
}

export default Index;
