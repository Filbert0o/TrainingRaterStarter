'use strict';

const bcrypt = require('bcrypt');
const bcrypt_p = require('bcrypt-promise');

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    email: { 
      type: DataTypes.STRING, 
      unique: true, 
      validate: { isEmail: { msg: 'Email is Invalid'} }, 
      allowNull: false 
    },
    phone: { 
      type: DataTypes.STRING, 
      unique: true, 
      validate: { len: { arg:(7,20)}, 
      msg: 'Phone number invalid', 
      isNumeric: { msg: 'Not a valid phone number.'} }, 
      allowNull: true 
    },
    isTrainer: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    aboutMe: DataTypes.STRING,
    password: DataTypes.STRING,
  }, 
  {});
  
  Users.beforeSave(async (user) => {
    let err;
    if (user.changed('password')) {
      let salt, hash;
      [err, salt] = await to(bcrypt.genSalt(10));
      if (err) TE(err.message, true);

      [err, hash] = await to(bcrypt.genHash(user.password, salt));
      if (err) TE(err.message, true);

      user.password = hash;
    }
  });

  Users.prototype.comparePassword = async function (pw) {
    let err, pass
    if (!this.password) TE('password not set');
     [err, pass] = await to(bcrypt_p.compare(pw, this.password));
    if (err) TE(err);
     if (!pass) TE('invalid password');
     return this;
  }

   Users.prototype.getJWT = function () {
    let expiration_time = parseInt(CONFIG.jwt_expiration);
    return "Bearer " + jwt.sign({ user_id: this.id }, CONFIG.jwt_encryption, { expiresIn: expiration_time });
  };

  return Users;
};