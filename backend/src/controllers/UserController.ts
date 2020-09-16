import { Request, Response } from "express";

import User from "../models/User";

class UserController {
    public async index(req: Request, res: Response): Promise<Response> {
        const users = await User.find();
        return res.json(users);
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ name, email, password });
        } else {
            res.status(400).json({ erro: "Email já cadastrado na nossa plataforma." });
        }

        return res.json(user);
    }
}

export default new UserController();
