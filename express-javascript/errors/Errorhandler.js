class Errorhandler{
    constructor(status,msg){
        this.status = status
        this.message = msg
    }

    static validationError(message = 'All filed are require!'){
        return new Errorhandler(422, message);
    }

    static notfoundError(message = 'Not Found Error!'){
        return new Errorhandler(404, message)
    }
}

module.exports = Errorhandler;