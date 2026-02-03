import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false);
  const [isBrowseModalOpen, setIsBrowseModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openNewCardModal = () => {
    setIsNewCardModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeNewCardModal = () => {
    setIsNewCardModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  const openBrowseModal = (card) => {
    setSelectedCard(card);
    setIsBrowseModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeBrowseModal = () => {
    setSelectedCard(null);
    setIsBrowseModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  const value = {
    isNewCardModalOpen,
    isBrowseModalOpen,
    selectedCard,
    openNewCardModal,
    closeNewCardModal,
    openBrowseModal,
    closeBrowseModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};