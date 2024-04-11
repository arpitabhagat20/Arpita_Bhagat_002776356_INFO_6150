const mongoose = require('mongoose');
import { userSchema } from '../models/userSchema';
import { UserAlreadyExists, UserDoesNotExist, ValidationError } from '../errors/errorHandling';
import { validateUserFields, isValidName, isValidPassword } from './validationService';
import { passwordHashing, comparePassword } from './encryptPassword';
const path = require("path");
var fs = require("fs-extra");

const User = mongoose.model('User', userSchema);
var jwt = require('jsonwebtoken');

export const getUsers = async () => {
    return await User.find().select("-password");
};

export const createNewUser = async (email, name, password, type) => {

    validateUserFields(email, name, password, type)

    const hashedPassword = await passwordHashing(password);
    
    const userExists = await User.findOne({ email: email });
    if(userExists != null) {
        throw new UserAlreadyExists();
    }
    let user = new User({
        fullname: name,
        email: email,
        password: hashedPassword,
        type: type
    });
    let newUser = await user.save();
    return newUser;
}

export const editUser = async (email, name, password) => {
    let userExists = await User.findOne({ email: email });
    if(userExists == null) {
        throw new UserDoesNotExist();
    }
    console.log("what is name"+ name);
    if(name != "") {
        console.log("name is not null");
        if(!isValidName(name)) {
            throw new ValidationError("Name validation failed");
        }
        console.log("name validation successful");
        userExists.fullname = name;
        console.log(userExists.fullname);
    }
    if(password != "") {
        if(!isValidPassword(password)) {
            throw new ValidationError("Password validation failed");
        }
        const hashedPassword = await passwordHashing(password);
        userExists.password = hashedPassword;
    }
    let updateUser = await userExists.save();
    return updateUser;
}

export const deleteUserByEmail = async (email) => {
    const userExists = await User.findOne({ email: email });
    if(userExists == null) {
        throw new UserDoesNotExist();
    }
    await User.findOneAndDelete({ email: email });
}

export const uploadImages = async (file, email) => {
    if (!file || !email) {
        if (file) {
          fs.unlink(
            `../frontend/public/user_images/${req.file.originalname}`
          );
        }
        throw new ValidationError("Missing image file or email");
    }

    if (!(await User.findOne({ email: email }))) {
        fs.unlink(
          `../frontend/public/user_images/${file.originalname}`
        );
        throw new UserDoesNotExist();
    }

    const fileNameWithoutExtension = path.basename(
        file.originalname,
        path.extname(file.originalname)
    );

    const extension = path.extname(file.originalname);

    const imagePath = `../frontend/public/user_images/${
        email
    }/${fileNameWithoutExtension}_${Date.now()}${extension}`;

    fs.move(
        `../frontend/public/user_images/${file.originalname}`,
        imagePath,
        {
          overwrite: true,
        }
    );

    const relativePath = `public/user_images/${
        email
    }/${fileNameWithoutExtension}_${Date.now()}${extension}`;

    await User.updateOne(
        { email: email },
        {
          $push: {
            imagePaths: relativePath,
          },
        }
    );

}

export const getAllImages = async () => {
    function readImageFiles(dirPath, fileList) {
        const files = fs.readdirSync(dirPath);
  
        files.forEach((file) => {
          const filePath = path.join(dirPath, file);
          const stat = fs.statSync(filePath);
  
          if (stat.isDirectory()) {
            readImageFiles(filePath, fileList); // Recursively traverse subdirectories
          } else if (/\.(jpg|jpeg|png|gif)$/i.test(filePath)) {
            fileList.push(filePath);
          }
        });
      }
  
      const imagesDir = path.join(
        __dirname,
        "../../../frontend/public/user_images"
      );
  
      const imagePaths = [];
      readImageFiles(imagesDir, imagePaths);
      const modifiedPaths = imagePaths.map((path) =>
        path.replace(/^.*public\\/, "")
      );
      return modifiedPaths;
}

export const authenticateAndLogin = async (email, password) => {
    let userExists = await User.findOne({ email: email });
    if(userExists == null) {
        throw new UserDoesNotExist();
    }
    if(!await comparePassword(password, userExists.password)) {
        console.log("password does not match")
        throw new ValidationError("Password authentication failed");
    }
    const token = jwt.sign(
        {
          userEmail: email,
        },
        "RANDOM-TOKEN",
        { expiresIn: "3h" }
      );
      return token;
}

export const getUserType = async (email) => {
    let userExists = await User.findOne({ email: email });
    if(userExists == null) {
        throw new UserDoesNotExist();
    }
    console.log(userExists.type)
    return userExists.type;
}