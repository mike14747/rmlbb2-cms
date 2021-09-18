const mutationQueryUrl = 'https://tmt0dwwl.api.sanity.io/v1/data/mutate/production';

async function deleteAllEvents() {
    const mutations = [
        {
            delete: {
                query: '*[_type == "event"]',
            },
        },
    ];
    await fetch(mutationQueryUrl, {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ mutations }),
    }).then(res => console.log('Delete Response:', res)).catch(error => console.log(error));
    return 'done';
}

async function deleteAllManagers() {
    const mutations = [
        {
            delete: {
                query: '*[_type == "manager"]',
            },
        },
    ];
    await fetch(mutationQueryUrl, {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ mutations }),
    })
        .then((res) => console.log('Delete Response:', res))
        .catch((error) => console.log(error));
    return 'done';
}

module.exports = {
    deleteAllEvents,
    deleteAllManagers,
}
