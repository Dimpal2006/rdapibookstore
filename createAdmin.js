const User = require('./models/User')
const bcrypt = require('bcrypt')
async function createAdmin() {
    try {
        let user = await User.findOne({ email: 'dimpal123cs0032@rdec.in'})
        if(user) {
            let password = bcrypt.hashSync('dimple@123', 10);
            console.log(password, 'new password...')
            await user.save();
            console.log('User updated successfully...');
        } else {
            user = new User();
            user.firstName = 'Dimpal';
            user.lastName = 'som';
            user.mobileNo = '9536782023'
            user.email = 'dimpal123cs0032@rdec.in';
            let password = bcrypt.hashSync('dimple@123', 10);
            user.password = password;
            user.userType = 'admin';
            await user.save();
            console.log("user created successfully");
        }
    } catch(err){
        console.log(err)
    }
}
module.exports = createAdmin 