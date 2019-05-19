const connection = require('./src/database');
const NewsModel = require('./src/schema');

const createNews = (number) => {
    return {
        title: 'Titulo ' + number,
        description: 'Descrição ' + number,
        image: 'Imagem ' + number,
        value: number ^ 2,
    }
}

connection.then(() => {
    const newsList = [];
    for (let i = 1; i <= 10; i++) {
        newsList.push(createNews(i));
    }

    return NewsModel.create(newsList);
}).then(() => require('./src/app'));

