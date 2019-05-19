const NewsModel = require('./schema');

const getAll = async (request, response) => {
    const newsList = await NewsModel.find({}, null, { sort: { createdAt: 1 }}).exec();
    return response.json(newsList);
};

module.exports = {
    getAll
}