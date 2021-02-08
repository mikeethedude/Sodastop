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
      </Helmet>
    <div > <img src={Logo} /></div>
      <h1>The Soda Stop is coming soon!</h1>
      <h2>
        Pouring into Carrizo Springs and surrounding areas this spring.
      </h2>
      <section className="footer">
        <footer>
           <img src={Social} height="30"/>
        </footer>
      </section>
    </main>
  );
}

export default Index;
