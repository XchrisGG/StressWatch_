const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true,
        trim: true,
        match: [/^[a-zA-Z\s]+$/, 'El campo nombres solo puede contener caracteres alfabéticos y espacios']
    },
    apellidos: {
        type: String,
        required: true,
        trim: true,
        match: [/^[a-zA-Z\s]+$/]
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
        // Note: No se valida el formato aquí, ya que se cifrará
    },
    sexo: {
        type: String,
        enum: ['Masculino', 'Femenino'],
        required: true
    },
    edad: {
        type: Number,
        required: true,
        min: 0,
        max: 99,
        validate:{
            validator: function(v){
                return /^[0-9]{1,2}$/.test(v);
            },
            message: props => `${props.value} no es una edad válida! Debe ser un número de uno o dos dígitos.`
        }
    },
    password: {
        type: String,
        required: true
        // Note: No se valida el formato aquí, ya que se cifrará
    }
 
});

userSchema.plugin(uniqueValidator, { message: 'El {PATH} YA ESTA EN Uso' });

module.exports = mongoose.model('User', userSchema);
