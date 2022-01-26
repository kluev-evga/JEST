const fetch = require('node-fetch');
const getPeopleFunc = require('./script2');

// it('calls getPeople to get people', (done) => {
//     expect.assertions(1);
//     getPeopleFunc(fetch).then(data => {
//         expect(data.login).toEqual('github');
//         done();
//     })
// });

it('calls getPeople to get people', () => {
    expect.assertions(2);// дополнительная проверка в асинхронных тестах
    return getPeopleFunc(fetch).then(data => {// вместо done
        // console.log(data);
        expect(data.login).toEqual('github');
        expect(data.id).toBeGreaterThan(9900);
    })
});


it('getPeople returns results', () => {
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({
                login: 'github',
                id: 9919
            })
        }));

    expect.assertions(4);
    return getPeopleFunc(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://api.github.com/users/github');
        expect(data.login).toEqual('github');
        expect(data.id).toBeGreaterThan(9900);
    })
});