import React from 'react';
import s from '../ProfileInfo.module.css'

const ContactLink = ({link, name}) => {
  if (link) {
    return <a target="_blank" href={link.includes('https://') ? link : `https://${link}`}
              className={s.contact}>{name}</a>
  }
  return null
}

const ContactsLinks = ({names, links}) => {
  return (
    <div className={s.contacts}>
      <span>Контакты:</span>
      {links.map((link, index) => <ContactLink key={index} link={link} name={names[index]}/>)}
    </div>
  );
};

export default ContactsLinks;
