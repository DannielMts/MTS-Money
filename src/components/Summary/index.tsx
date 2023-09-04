import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  console.log(transactions);

  const totalDeposit = transactions.reduce((sum, transaction) => {
    if (transaction.type === "deposit") {
      return (sum += transaction.amount);
    }

    return sum;
  }, 0);

  const totalWithdraw = transactions.reduce((decrease, transaction) => {
    if (transaction.type === "withdraw") {
      return (decrease -= transaction.amount);
    }

    return decrease;
  }, 0);

  const total = totalDeposit + totalWithdraw;

  return (
    <Container>
      <div>
        <header>
          <p>Incoming</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(totalDeposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Spending</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(totalWithdraw)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(total)}
        </strong>
      </div>
    </Container>
  );
}
