const bcrypt = require('bcrypt');

const saltRounds = 10;

export const passwordHashing = (password) => {
    return bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (plainTextPassword, hashedPassword) => {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
};

