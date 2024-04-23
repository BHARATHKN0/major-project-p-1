
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

import User from '../model/user.js';
import Token from '../model/token.js';
import dotenv from 'dotenv';
dotenv.config();

export const signupUser = async (request, response) => {
    try {
        
        const hashedPassword = await bcrypt.hash(request.body.password, 10);
        const user = { full_name:request.body.full_name, reva_srn: request.body.reva_srn, reva_branch: request.body.reva_branch, reva_mail: request.body.reva_mail, username: request.body.username, password: hashedPassword, }
        // const user = request.body;
        // const user={username:request.body.name, password:hashedPassword, reva_srn:request.body.reva_srn, reva_mail:request.body.reva_mail}

        const newUser = new User(user);
        console.log(newUser)
        await newUser.save();

        return response.status(200).json({msg:'signup successful'})
    }catch(error){
        return response.status(500).json({msg: 'Error while signup the user'})
    }

}

export const loginUser = async (request, response) => {
    let user = await User.findOne({ username: request.body.username });
    if (!user) {
        return response.status(400).json({ msg: "Username does not match"});
    }

    try {
        let match = await bcrypt.compare(request.body.password, user.password);
        if (!match) {
            return response.status(400).json({ msg: 'Invalid password' });
        }
        if (match) {
            const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '59m'});
            const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);

            const newToken = new Token({ token: refreshToken })
            
            await newToken.save();

            return response.status(200).json({ accessToken: accessToken, refreshToken: refreshToken,  username: user.username })

        } else {
            return response.status(400).json({ msg: "Password does not match"});
        }
    } catch (error) {
        return response.status(500).json({ msg: 'Error while login in user' })
    }
}