import React, { useEffect } from 'react';
// import Link from 'next/link';
// import { Link } from '../i18n'
import SEO from '../component/Seo';
import CustomGoogleMap from '../component/CustomGoogleMap';
// import { withTranslation } from '../i18n';
import gsap from 'gsap';

import Welcome from '../sections/Welcome';
import Logo from '../sections/Logo';
import GeneralDesc from '../sections/GeneralDesc';
import Stats from '../sections/Stats';
import Service from '../sections/Service';
import Team from '../sections/Team';
import Certificate from '../sections/Certificate';
import Presentation from '../sections/Presentation';
import Price from '../sections/Price';
import Opinion from '../sections/Opinion';
import Gift from '../sections/Gift';
import Contact from '../sections/Contact';

const timeline = gsap.timeline();
// const Home = ({ t }) => {

const Home = () => {
  return (
    <>
      <SEO title='Przykladowa strona' description='Przykladowa strona' />
      <Welcome />
      <Logo />
      <GeneralDesc />
      <Stats />
      <Service />
      <Team />
      <Gift />
      <Certificate />
      <Presentation />
      <Price />
      <Opinion />
      <Contact />
    </>
  );
};

// Home.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'footer'],
// });

// export default withTranslation('common')(Home);
export default Home;
