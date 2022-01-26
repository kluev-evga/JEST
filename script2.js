const fetch = require('node-fetch');

const getPeople = async (fetch) => {
    const getRequest = await fetch('https://api.github.com/users/github');
    const data = await getRequest.json();
    // console.log(data);
    return {
        login: data.login,
        id: data.id
    }
};

// getPeople(fetch);

module.exports = getPeople;