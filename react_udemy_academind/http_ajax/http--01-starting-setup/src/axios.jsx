import axios from 'axios';


const instance =Axios.create({
    baseURL: 'https:jsonplaceholder.typicode.com'
});


instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;