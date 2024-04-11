class UserAlreadyExists extends Error {
    get message() {
        return "User with this email already exists :/";
    }
    get name() {
        return "UserAlreadyExists";
    }
}

class ValidationError extends Error {
    constructor (message) {
        super(message);
    }
    get name() {
        return "ValidationError";
    }
}

class UserDoesNotExist extends Error {
    get message() {
        return "User with this email does not exist :/";
    }
    get name() {
        return "UserDoesNotExist";
    }
}

class JobDoesNotExist extends Error {
    get message() {
        return "Job does not exist :/";
    }
    get name() {
        return "JobDoesNotExist";
    }
}

class JobAlreadyExists extends Error {
    get message() {
        return "Job already exist :/";
    }
    get name() {
        return "JobAlreadyExists";
    }
}

module.exports = {
    UserAlreadyExists,
    ValidationError,
    UserDoesNotExist,
    JobDoesNotExist,
    JobAlreadyExists
}