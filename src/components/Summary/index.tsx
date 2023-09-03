import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../Context/TransactionsContext";
import { useContext } from "react";

export function Summary() {
  const transactions = useContext(TransactionsContext);

  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Incoming</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$7000,00</strong>
      </div>
      <div>
        <header>
          <p>Spending</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>- R$8000,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>- R$1000,00</strong>
      </div>
    </Container>
  );
}
