const Transaction = require("../models/Transaction");

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.user.userId });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch transactions" });
    }
};

exports.addTransaction = async (req, res) => {
    try {
        const transaction = new Transaction({ ...req.body, userId: req.user.userId });
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ error: "Failed to add transaction" });
    }
};

exports.deleteTransaction = async (req, res) => {
    try {
        await Transaction.findByIdAndDelete(req.params.id);
        res.json({ message: "Transaction deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete transaction" });
    }
};
