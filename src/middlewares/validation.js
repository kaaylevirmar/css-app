import * as Yup from 'yup';

export const UserSignupSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'too short').max(20, 'too long').required('this field is required'),
    lastName: Yup.string().min(2, 'too short!').max(20, 'too long').required('this field is required'),
    email: Yup.string().email('Invalid email').required('This field is required'),
    username: Yup.string().min(2, 'too short!').max(20, 'too long').required('Username is required!'),
    password: Yup.string().required('Password is required!'),
    role: Yup.string().required('Role is required!')
});