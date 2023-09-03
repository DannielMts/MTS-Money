import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Model, createServer } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Salario",
          type: "deposit",
          amount: 6000,
          category: "SALARIO",
          createdAt: new Date("2023-07-25 08:00:00"),
        },
        {
          id: 2,
          title: "Alguel",
          type: "withdraw",
          amount: 1200,
          category: "CASA",
          createdAt: new Date("2023-07-17 08:00:00"),
        },
        {
          id: 3,
          title: "Cartão NEON",
          type: "withdraw",
          amount: 2500,
          category: "CARTÃO",
          createdAt: new Date("2023-07-28 08:00:00"),
        },
        {
          id: 4,
          title: "Nova Era",
          type: "deposit",
          amount: 1300,
          category: "Mercado",
          createdAt: new Date("2023-07-25 08:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
