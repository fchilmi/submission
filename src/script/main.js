function main(){
    
    const getKota = () => {
        fetch(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=35`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.error){
                showResponseMessage(responseJson.message);
            } else {
                renderKota(responseJson.kotaa);
            }
        })
        .catch(error => {
            showResponseMessage(error);
        })
    };

    const renderKota = (kotaa) => {
        const listKotaElement = document.querySelector("#listKota");
        listKotaElement.innerHTML = "";

        kotaa.forEach(kota => {
            listKotaElement.innerHTML += `
            <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-body">
                        <h5>(${kota.id_provinsi}) ${kota.id}</h5>
                        <p>${kota.nama}</p>
                            </div>
                    </div>
                </div>
            `;
        });
    };

    const showResponseMessage = (message = "Check your connection") => {
        alert(message);
    };
};
export default main;