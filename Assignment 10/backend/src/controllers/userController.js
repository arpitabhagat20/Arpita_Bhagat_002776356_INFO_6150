import { 
    getUsers, 
    createNewUser, 
    deleteUserByEmail, 
    editUser, 
    authenticateAndLogin, 
    getUserType,
    uploadImages,
    getAllImages 
} from "../services/userService";

export const getAllUsers = async (req, res, next) => {
    try {

        const users = await getUsers();
        res.status(200).send(users);

    } catch (error) {

        return next(error);

    }
};

export const createUser = async (req, res) => {

    const email = req.body.email;
    const name = req.body.fullname;
    const password = req.body.password;
    const type = req.body.type;

    try {

        const user = await createNewUser(email, name, password, type);
        res.status(201).send(user);

    } catch(error) {

        if(error.name === "UserAlreadyExists") {

            return res.status(409).json({ message: error.message });

        } else if(error.name === "ValidationError") {

            return res.status(400).json({ message: error.message });

        } else {

            return res.status(500).json({ message: "Internal server error" });

        }

    }

};

export const updateUser = async (req, res) => {
    try {

        const email = req.body.email;
        const name = req.body.fullname;
        const password = req.body.password;
        const user = await editUser(email, name, password);
        res.status(200).json(user);

    } catch (error) {

        if( error.name === "UserDoesNotExist") {

            return res.status(404).json({ message: error.message });

        } else if(error.name === "ValidationError") {

            return res.status(400).json({ message: error.message });

        } else {
             
            return res.status(500).send({message: "Internal Server Error"});

        }
    }
};

export const deleteUser = async (req, res) => {
    try {

        const email = req.query.email;
        await deleteUserByEmail(email);
        res.status(200).json({ message: "User has been deleted successfully"});

    } catch (error) {

        if( error.name === "UserDoesNotExist") {

            return res.status(404).json({ message: error.message });

        } else {

            res.status(500).json({ message: "Internal server error" });

        }
    }
};
  
export const uploadImage = async (req, res) => {

    const file = req.file;
    const email = req.body.email;

    try{

        await uploadImages(file, email);
        res.status(200).json({message: 'Image uploaded successfully'});

    } catch (error) {
        
        if( error.name === "UserDoesNotExist") {

            return res.status(404).json({ message: error.message });

        } else if ( error.name === "ValidationError" ){

            res.status(400).json({ message: error.message });

        } else {

            res.status(500).json({ message: "Internal server error" });

        }
    }
};

export const getImages = async (req, res) => {

    try {

        const modifiedPaths = await getAllImages();
        res.json(modifiedPaths);

    } catch (error) {

        res.status(500).json({ message: "Internal server error" });

    }

};

export const loginUser = async (req, res) => {
    try {

        const email = req.body.email;
        const password = req.body.password;
        const authenticatedUser = await authenticateAndLogin(email, password);
        const userType = await getUserType(email);
        res.status(200).send({email: email, token: authenticatedUser, type: userType});

    } catch ( error ) {

        if( error.name === "UserDoesNotExist") {

            return res.status(404).json({ message: error.message });

        } else if ( error.name === "ValidationError" ){

            res.status(400).json({ message: error.message });

        } else {

            res.status(500).json({ message: "Internal server error" });

        }

    }
};