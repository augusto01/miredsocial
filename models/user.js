const {Schema, model} = require ("mongoose")


const UserSchema = Schema({
    name: {type: String, required: true},
    surname: String,
    username: String,
    email: {type: String, required: true},
    rol: {type: String, default: 'role_user'},
    image: {type: String, default: 'image.png'},
    creted_at: {type: Date, default: Date.now}
});

module.exports = model("User", UserSchema, "User")