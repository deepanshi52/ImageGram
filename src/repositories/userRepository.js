import user from '../schema/user'


export const findUserbyEmail = async () => {
       try {
        const user = await User.findOne({ email });
        return user;
       } catch (error) {
         console.log(error);
         
       }
}