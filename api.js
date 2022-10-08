const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7328e277fdmsh672adc6c3a97ccfp131107jsn7b5642151bc3',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
};

fetch('https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=200', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));