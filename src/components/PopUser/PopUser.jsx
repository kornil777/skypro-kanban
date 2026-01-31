import React from 'react';
import {
  PopUserSet,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserThemeText,
  PopUserThemeCheckbox,
  PopUserExitButton
} from './PopUser.styled.js';

function PopUser() {
  return (
    <PopUserSet className="pop-user-set" id="user-set-target">
      <PopUserName>Ivan Ivanov</PopUserName>
      <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
      <PopUserTheme>
        <PopUserThemeText>Темная тема</PopUserThemeText>
        <PopUserThemeCheckbox className="checkbox" name="checkbox" />
      </PopUserTheme>
      <PopUserExitButton type="button" className="_hover03">
        <a href="#popExit">Выйти</a>
      </PopUserExitButton>
    </PopUserSet>
  );
}

export default PopUser;