import React from 'react';
import '../../../../css/common.css';
import style from './SocialNets.module.css';
import { string } from 'prop-types';
import sprite from '../../../../images/sprite.svg';

function SocialNet({ title, link }) {
  return (
    <li className={style.net}>
      <a
        href={link}
        aria-label={`ссылка на ${title}`}
        className={style.netButton}
        target="_blank"
        rel="noreferrer"
      >
        <svg className={style.netIcon} width="35" height="35">
          <use href={`${sprite}#${title}`}></use>
        </svg>
      </a>
    </li>
  );
}

export default SocialNet;

SocialNet.propTypes = {
  title: string.isRequired,
  link: string.isRequired,
};
