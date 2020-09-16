import { model, Schema, Document } from "mongoose";

const ZipCodeSchema = new Schema(
    {
        zipcode: { type: Number, required: true },
        city: { type: String, required: true },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    },
    {
        timestamps: true,
    }
);

export default model("ZipCode", ZipCodeSchema);
