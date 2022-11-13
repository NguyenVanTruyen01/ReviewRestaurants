import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const secret = process.env.JWT_SECRET;

        const token = req.headers.authorization;
        if (token) {
            const accessToken = token.split(" ")[1];
            const decoded = jwt.verify(accessToken, secret, (err,user)=>{
                if(err){
                   return res.status(400).json({message: "Token is not valid"})
                }
                req.body._id = user?.userID;
                next();
            });

        }
        else {
            return res.status(400).json({message:"You are not authenticated"})
        }
    }
}
