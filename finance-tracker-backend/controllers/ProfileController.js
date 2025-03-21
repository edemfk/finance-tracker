const User = require("../models/User");

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select("-password");
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Failed to get profile" });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.user.userId, req.body, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: "Failed to update profile" });
    }
};
