export default function Transactions() {
    return (
        <div className="transactions">
            <h2>Recent Transactions</h2>
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>2025-03-06</td>
                    <td>Groceries</td>
                    <td>- $50</td>
                </tr>
                <tr>
                    <td>2025-03-05</td>
                    <td>Freelance Payment</td>
                    <td>+ $500</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
