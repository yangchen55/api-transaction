import { findAuser } from "../models/users/UserModel.js";


   export  const isAuth = async (req, res, next) => {
        try {
            const {authorization} = req.headers;
            console.log(authorization)
          
            const user = authorization? await findAuser({_id: authorization}):null;
            console.log("hit middl ware");
            user?._id
            ? next()
            :res.json({
                status: "error",
                message: "unauthorized"
            })
        } catch (error) {
            console.log(error);
            next(error)
            
        }
    }
  
  







