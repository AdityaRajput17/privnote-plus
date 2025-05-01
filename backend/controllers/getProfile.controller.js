import jwt from "jsonwebtoken";

export const getProfile = async (req, res) => {
    try {
        const token = req.cookies.token;
        
        if (!token) {
            return res.status(401).json({ error: "No authentication token provided" });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                console.error("Token verification error:", err);
                return res.status(401).json({ error: "Invalid or expired token" });
            }
            res.json(user);
        });
    } catch (error) {
        console.error("Get profile error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}