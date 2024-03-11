
import bcrypt from 'bcrypt'

import User from '../model/user.js';

export const signupUser = async (request, response) => {
    try {
        
        //  const hashedPassword = await bcrypt.hash(request.body.password, 10);
        // const user = {username:request.body.username, password:hashedPassword, reva_srn:request.body.reva_srn, reva_mail:request.body.reva_mail}
        const user = request.body;

        const newUser = new User(user);
        await newUser.save();

        return response.status(200).json({msg:'signup successful'})
    }catch(error){
        return response.status(500).json({msg: 'Error while signup the user'})
    }

}