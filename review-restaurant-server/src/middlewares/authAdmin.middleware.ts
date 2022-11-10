import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthAdminMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: NextFunction) {
        const secret = process.env.JWT_SECRET;

        const token = req.headers.authorization;
        if (token) {
            const accessToken = token.split(" ")[1];
            const decoded = jwt.verify(accessToken, secret, (err,user)=>{
                if(err){
                    res.status(400).json("Token is not valid")
                }
                if(user.role === "ADMIN"){
                    next()
                }
                else {
                    res.status(400).json("Action forbidden")
                }
            });

        }
        else {
            res.status(400).json("You are not authenticated")
        }
    }
}
