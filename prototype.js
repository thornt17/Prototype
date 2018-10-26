var request = require("request");

var options = { method: 'GET',
    url: 'http://archive.org/services/search/v1/scrape',
    qs:
        { access: 'KydbldiyWljf1Opg',
            secret: 'Z5JmQ6ZYsI0A5WpD',
            fields: 'name',
            q: 'grateful%20dead',
            count: '100' },
    headers:
        { 'Postman-Token': '36ffef15-87ac-45b6-a507-829385756dbf',
            'cache-control': 'no-cache',
            '': '' } };

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});