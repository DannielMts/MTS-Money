import ReactModal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("");

  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      category,
      value,
      type,
    };

    api.post("/transactions", data);
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>New Transaction</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="income" />
            <span>Income</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="outcome" />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Register</button>
      </Container>
    </ReactModal>
  );
}
