/*  authMiddleware.js yapılacaklar:
    Jsonweb tokeni alıp kullanıcıyı doğrulayan bir middleware yazalım. Bu middleware'i kullanarak kullanıcıyı doğrulayacağız. Eğer kullanıcı doğrulanamazsa 401 hatası döndüreceğiz.
    Şu kütühaneleri kullanabiliriz: jsonwebtoken, bcryptjs (hashleme için ve çözmek için)
*/
export default (req, res, next) => {
    // jwt auth funcs
}

/*
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export default (req, res, next) => {
    // TODO: Add JWT auth functions here
    // For example:
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).send({ auth: false, message: 'No token provided.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }
        req.userId = decoded.id;
        next();
    });
}
*/