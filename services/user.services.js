const bcrypt = require('bcrypt')

const UserModel = require('../models/user.model');

exports.signUp = async (userInfo) => {
    try {
        const newUser = new UserModel({
            ...userInfo
        })
        const savedUser = await newUser.save()
        return savedUser;
    } catch(error) {
        console.error(error)
        throw new Error("Información Invalida")
    }
}

exports.signIn = async ({ email, password }) => {
    try {
        const user = await UserModel.findOne({ email }).exec()
        const matchPassword = await bcrypt.compare(password, user.password);
        if(!matchPassword) {
            throw new Error("Usuario y/o contraseña invalida")
        }

        const token = await user.generateAuthToken();
        return { token, user : { ...user.toJSON() } }

    } catch(error) {
        console.error(error);
        throw new Error("Usuario y/o contraseña invalida")
    }
}

exports.logout = async (user) => {
    try {
        user.expirationDate = Math.floor(new Date().getTime() / 1000)
        await user.save()
        return { message: 'Sesion Cerrada Exitosamente'}
    } catch(err) {
        console.error(err);
        throw new Error('Sesion Invalida')
    }
}