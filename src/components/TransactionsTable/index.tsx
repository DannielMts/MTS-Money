import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionsTable(){

    useEffect(() => {
        api.get('/transactions')
            .then(response => console.log(response.data))
    },[]);
    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Salario 10</td>
                        <td className="deposit">R$ 2.400</td>
                        <td>Salario</td>
                        <td>10/08/2023</td>
                    </tr>
                    <tr>
                        <td>Salario 25</td>
                        <td className="deposit">R$ 2.600</td>
                        <td>Salario</td>
                        <td>25/08/2023</td>
                    </tr>
                    <tr>
                        <td>Sodexo</td>
                        <td className="withdraw">- R$ 1.200</td>
                        <td>Mercado</td>
                        <td>25/08/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}