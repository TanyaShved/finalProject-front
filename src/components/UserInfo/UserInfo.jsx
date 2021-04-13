import React from 'react';
import { useSelector } from 'react-redux';

import authSelectors from 'redux/auth/auth-selectors';

import s from './UserInfo.module.css';

export default function UserInfo() {
  const name = useSelector(authSelectors.getUsername);

  //   const name = 'User1'; // Временная переменная
  const userAvatar = false; // Временная переменная

  return (
    <div className={s.userInfoMenu}>
      {userAvatar ? (
        <img
          src={userAvatar}
          alt="User avatar"
          width="30"
          height="30"
          className={s.userAvatar}
        />
      ) : (
        <span className={s.userAvatar}>{name ? name[0] : null}</span> // Ломалось при первой загрузке страницы
      )}

      <span className={s.userName}>{name && null}</span> 
    </div>
  );
}
