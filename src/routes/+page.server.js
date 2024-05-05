import { OPENWEATHERMAP_API_KEY } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// получение координат
	let url = 'http://www.geoplugin.net/json.gp';
	let response = await fetch(url);
	let geojson;
	if (response.ok) {
		geojson = await response.json();
		// return {
		//     geo: {
		//         latitude: geojson.geoplugin_latitude,
		//         longitude: geojson.geoplugin_longitude,
		//     }
		// }
	} else {
		alert('Ошибка HTTP: ' + response.status);
	}
	// получение погоды

	let url2 =
		'https://api.openweathermap.org/data/2.5/weather?lat=' +
		geojson.geoplugin_latitude +
		'&lon=' +
		geojson.geoplugin_longitude +
		'&appid=' +
		OPENWEATHERMAP_API_KEY +
		'&units=metric';
	let response2 = await fetch(url2);
	let weather;
	if (response2.ok) {
		weather = await response2.json();
		return {
			weather: {
				description: weather.weather[0].description,
				city: geojson.geoplugin_city
			}
		};
	}
}
