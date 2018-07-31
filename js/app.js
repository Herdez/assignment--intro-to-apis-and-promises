function getApi() {

    var request = superagent;
    var API_URL = 'https://restcountries.eu/rest/v2/all';

	request
		.get(API_URL)
		.then(function(response){
			var repos = response.body;
			repos.forEach(function(country){
				document.querySelector('.countries-container').innerHTML += '<div class="country-card">' +
																			'<img class="country-flag" src="' + country.flag + '" alt="flag">' +
																		    '<h4 class="country-name">' + country.name + '</h4>' +
																		    '<div class="country-main">' +
																		    '<p class="country-capital">' + country.capital + '</p>' +
																		    '</div>' +
																			'</div>';

			});
		});
}

getApi();