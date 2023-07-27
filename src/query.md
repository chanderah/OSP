// OVERPASS QL

<!-- find streets -->

https://overpass-api.de/api/interpreter?data=[out:json];way[highway](poly:`${latlong}`);out center;

<!-- find 1 amenity -->

https://overpass-api.de/api/interpreter?data=[out:json];way[amenity=hospital](poly:`${latlong}`);out center;

<!-- find 1 amenity with regex name -->

https://overpass-api.de/api/interpreter?data=[out:json];way[amenity=hospital](poly:`${latlong}`);out center;

<!-- find amenity with or -->

https://overpass-api.de/api/interpreter?data=[out:json];way[amenity~"^(cafe|hospital)"](poly:`${latlong}`);out center;

<!-- params -->

baseUrl = https://overpass-api.de/api/interpreter?data=[out:json];
output = 'out center;'
poly = (poly:'-6.170550325286482 106.86964541662748');
wayFilter = `way[${filter}]`

return `${baseUrl}${wayAl}`;

<!-- end params -->
