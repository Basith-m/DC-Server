const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    try{
        const token = req.headers['authorization'].split(' ')[1]
        console.log(token);
        const jwtResponse = jwt.verify(token,process.env.JWT_SECRET_KEY)
        req.payload = jwtResponse.userId
        next()
    }catch{
        res.status(401).json("Authorization failed!!! Please login...")
    }
}

module.exports = jwtMiddleware