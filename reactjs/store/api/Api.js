import axios from 'axios';

export default {
    gif: {
        gifs:() => axios.get('http://api.giphy.com/v1/gifs/trending?api_key=ovU9KlXS8RtZr0VgRT6X02ZaH02P30qw&limit=120')
    }
}