import React from 'react';

import Deck from '../deck/deck.js';

import '../styles/styles.scss'

const Page = props => {
  return props.content.map((section, i) => < Deck content = {section}/>);
};

export default Page;
