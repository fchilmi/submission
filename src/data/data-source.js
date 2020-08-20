import kota from './list-kota.js';
class Source {
    static searchKota(keyword) {
        return fetch(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=35`)
        .then(response => {
            return response.json();
        })
        .then (responseJson => {
            if(responseJson.teams){
                return Promise.resolve(responseJson.teams);
            }else{
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
}
export default DataSource;