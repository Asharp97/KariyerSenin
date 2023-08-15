var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.countrystatecity.in/v1/countries/IN/states',
  headers: {
    'X-CSCAPI-KEY': 'Zmt0UVBvWElEVnQzYUp4OXBjRk1HRkY0SFd5RTl2WFJWaGJkbElPeg=='
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});