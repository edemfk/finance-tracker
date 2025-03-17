const Transaction = require("../models/Transaction");

exports.generateReport = async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.user.userId });

        const report = {
            totalIncome: transactions.filter(t => t.type === "income").reduce((sum, t) => sum + t.amount, 0),
            totalExpenses: transactions.filter(t => t.type === "expense").reduce((sum, t) => sum + t.amount, 0),
        };

        res.json(report);
    } catch (error) {
        res.status(500).json({ error: "Failed to generate report" });
    }
};
