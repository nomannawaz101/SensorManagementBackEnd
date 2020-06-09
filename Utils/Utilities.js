var jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
exports.checkPasswordMinLength = function (password) {
        if(password==null) {
            return false;
        }
        if(password.length<8) {
            return false;
        } else {
            return true;
        }
};

exports.getJWT = function (userId) {
    try {
    console.log(userId);
    var token = jwt.sign({id: userId}, config.secret, {
        expiresIn: 86400 // 24 hours
    });
    return token;
    } catch (e) {
        console.log(e);
    }
};

exports.verifyToken = function (token,) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return false;
            }
            if(decoded.id != null && decoded.id.length>0) {
                return true;
            }
        });
}