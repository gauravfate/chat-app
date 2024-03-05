import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUser = req.user._id;    // we can get by help of middleware used

        const filteredUsers = await User.find({ _id: { $ne: loggedInUser } }).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in getUserForSidebar controller: ", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}