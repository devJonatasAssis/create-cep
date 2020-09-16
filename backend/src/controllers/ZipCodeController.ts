import { Request, Response } from "express";

import ZipCode from "../models/ZipCode";

class ZipCodeController {
    public async index(req: Request, res: Response): Promise<Response> {
        const zipcode = await ZipCode.find();
        return res.json(zipcode);
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const { user_id } = req.headers;
        const { zipcode, city } = req.body;

        const zip = await ZipCode.create({
            user_id,
            zipcode,
            city,
        });

        await zip.populate("User").execPopulate();

        return res.json(zip);
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        await ZipCode.deleteOne({ _id: id });

        return res.status(204).send("Excluido com sucesso");
    }
}

export default new ZipCodeController();
