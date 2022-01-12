mapboxgl.accessToken = 'pk.eyJ1IjoiYWJkdWxsYWgwMTE5IiwiYSI6ImNrdGJzanB6ZTF5eTAydWxhM3NvcGY4MmEifQ.gY_AfH8mVz5Q5SRGtSpf5A';
var map = new mapboxgl.Map({
	container: 'map',
	zoom:1,
	style: 'mapbox://styles/mapbox/dark-v10'
});

fetch('view.json')
    .then(countrydata => countrydata.json())
    .then((finalcountry) => {
        finalcountry.map((elem) => {
            return fetch('countrylatlong.json')
                .then(countrydatalatlong => countrydatalatlong.json())
                .then((countrydatafinal) => {
                    let final = elem.country.toLowerCase()
                    let longi = countrydatafinal[final];
                    let latitude = longi[0];
                    let longitude = longi[1];
                    console.log(final)
                    console.log(longi)
                    let  = elem.views;
                    if(view>100){
                        color="green";
                    }    
                    else if(view>50){
                        color="yellow";
                    }
                    else(
                        color="red"
                    )
                    new mapboxgl.Marker({
                        color:color
                    })
                        .setLngLat([longitude, latitude])
                        .addTo(map);

                })
            // console.log(elem.country);
            // console.log(elem.views);
        })
        // console.log(finalcountry)
    })