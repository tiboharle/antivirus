const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  _id: Schema.Types.ObjectId,
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, default: 'basic', enum: ['basic', 'pro'] },
  virus: [{ type: Schema.Types.ObjectId, ref: 'Virus'}]
});

//voir comment faire la relation One to Many entre user et Virus.
// Attention j'ai changé le système d'Id dans les models et probablement dans le controller de user

UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', UserSchema);
