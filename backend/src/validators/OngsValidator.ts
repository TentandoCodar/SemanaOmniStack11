import * as Yup from 'yup';

export const createSchema = Yup.object().shape({
    name: Yup.string().required(`Please provide a name`),
    email: Yup.string().email('Bad format in email field').required('Please provide a email'),
    uf: Yup.string().max(2).required('Please provide a uf'),
    city: Yup.string().required('Please provide a city'),
    password: Yup.string().min(6).required('password is required'),
    whatsapp: Yup.string().min(11).max(11).required('Whatsapp is required'),
});