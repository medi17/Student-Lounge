import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {
     const { token } = req.headers;

     if (!token) {
          return res.json({success: false, message:"Not Authorized"})
     }

     try {
          const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
          req.userId = tokenDecode.id;
          next();
     } catch (error) {
          console.log("Authentication Error:", error)
          res.json({success:false, message:"Invalid or expired token"})
     }
}

export default authMiddleware