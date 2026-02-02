import React from 'react';
import {
  PopExitContainer,
  PopExitInner,
  PopExitBlock,
  PopExitTitle,
  PopExitForm,
  PopExitButton
} from './PopExit.styled';

function PopExit() {
  return (
    <PopExitContainer id="popExit">
      <PopExitInner>
        <PopExitBlock>
          <PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTitle>
          <PopExitForm id="formExit" action="#">
            <PopExitButton className="_hover01" id="exitYes">
              <a href="modal/signin.html">Да, выйти</a>
            </PopExitButton>
            <PopExitButton $secondary className="_hover03" id="exitNo">
              <a href="index.html">Нет, остаться</a>
            </PopExitButton>
          </PopExitForm>
        </PopExitBlock>
      </PopExitInner>
    </PopExitContainer>
  );
}

export default PopExit;