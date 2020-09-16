import { Schema, model, Document } from "mongoose";

interface UserInterface extends Document {
    name?: string,
    email?: string,
    password?: string,
}

const UserSchema = new Schema(
    {
        email: String,
        name: String,
        password: String,
    },
    {
        timestamps: true,
    }
);

export default model<UserInterface>("User", UserSchema);
