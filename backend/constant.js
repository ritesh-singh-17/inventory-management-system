class PUBLIC_DATA{

    static port = process.env.PORT || 8000 
    static mongo_uri = process.env.MONGO_URI;
    static jwt_auth = process.env.JWT_AUTH || "@#$%^&*(@#$%^&*($%^))#$%^&"

}

module.exports = {
    PUBLIC_DATA
}