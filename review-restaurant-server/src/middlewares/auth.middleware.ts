import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const secret = process.env.JWT_SECRET;
        try {
            const token = req.headers.authorization.split(" ")[1];
            if (token) {
                const decoded = jwt.verify(token, secret);
                req.body._id = decoded?.userID;
            }
            next();
        } catch (error) {
            console.log(error);
        }
    }
}
