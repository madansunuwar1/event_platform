import { Schema, models, model } from "mongoose"

const UserSchema = new Schema({
    clerkID: { type: String,requierd: true, unique: true },
    email: { type: String,requierd: true, unique: true },
    username: { type: String,requierd: true, unique: true },
    firstName: { type: String,requierd: true, unique: true },
    lastName: { type: String,requierd: true, unique: true },
    photo: { type: String,required: true },
})

const User = models.user || model('User', UserSchema);
export default User;