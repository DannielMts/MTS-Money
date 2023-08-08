import ReactModal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {

  const [type, setType] = useState('')

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="close modal" />
      </button>
      <Container>
        <h2>New Transaction</h2>

        <input type="text" placeholder="Title" />
        <input type="number" placeholder="Pricing" />
        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
          >
                <img src={incomeImg} alt="income" />
                <span>Income</span>
          </RadioBox>
          <RadioBox
            type='button'
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
          >
              <img src={outcomeImg} alt="outcome" />
              <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input type="text" placeholder="Category" />
        <button type="submit">Register</button>
      </Container>
    </ReactModal>
  );
}
