//2

// неверно
alert(/^https?/.test('https://github.com'));

//4

// \w+ зачем?
alert(/\w+\.jpe?g/.test('index.jpeg'));

//6
alert(/\d{12}/.test('hge12334568390'));

//8
alert(/^\d{1,2}\.\d{1,2}\.\d{4}$/.test('23.03.2019'));

//10
alert(/^\w{3,20}\@\w{2,10}\.\w{2,10}$/.test('ksaga5@mail.ru'));
