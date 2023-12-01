const axios = require('axios');

const getChats = async () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.huggy.app/v3/chats?situation=finishing',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJhNGRhNmE4YjNlZWExMmYzYzJiNTk5Y2FkYjk0MmMyNzA1MWEwNDlkYzQzMGIyMGVkNGFmY2MwNTc4MjM3OGE5ZmQ2Yzg3ODhkZDE3MjkzIn0.eyJhdWQiOiJBUFAtZjQ0YmVkNGQtYWI2YS00YjVmLThhNzEtZWM0NGI3ZTE2OWE0IiwianRpIjoiMmE0ZGE2YThiM2VlYTEyZjNjMmI1OTljYWRiOTQyYzI3MDUxYTA0OWRjNDMwYjIwZWQ0YWZjYzA1NzgyMzc4YTlmZDZjODc4OGRkMTcyOTMiLCJpYXQiOjE3MDExMjAzOTIsIm5iZiI6MTcwMTEyMDM5MiwiZXhwIjoxNzMyNzQyNzkyLCJzdWIiOiIxOTAwMyIsInNjb3BlcyI6WyJwYW5lbF9hcHAiLCJpbnN0YWxsX2FwcCJdfQ.dSEKwhMpD52SkX19kJ-f-V90v7Wpj7JttOcyznijB29I1oJKfIARgl9izMh8nlQc-qHWfkRYAjmH9wvILwuGN0vPdJnvvhmmFs_DGKfoXDwOMiz-bSCcACY-tFVX2yq_K0fZpKVIdDZZACzq5RqPCwl2dsICIvPgl8Yy4wv4VAE',
            'Cookie': 'app_powerzap=8ntko6vjvctgk9170ing07i52l'
        }
    };

    let response = await axios.request(config)
    return response.data
}

const deleteChat = async (chatId) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.huggy.app/v3/delete' + chatId,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJhNGRhNmE4YjNlZWExMmYzYzJiNTk5Y2FkYjk0MmMyNzA1MWEwNDlkYzQzMGIyMGVkNGFmY2MwNTc4MjM3OGE5ZmQ2Yzg3ODhkZDE3MjkzIn0.eyJhdWQiOiJBUFAtZjQ0YmVkNGQtYWI2YS00YjVmLThhNzEtZWM0NGI3ZTE2OWE0IiwianRpIjoiMmE0ZGE2YThiM2VlYTEyZjNjMmI1OTljYWRiOTQyYzI3MDUxYTA0OWRjNDMwYjIwZWQ0YWZjYzA1NzgyMzc4YTlmZDZjODc4OGRkMTcyOTMiLCJpYXQiOjE3MDExMjAzOTIsIm5iZiI6MTcwMTEyMDM5MiwiZXhwIjoxNzMyNzQyNzkyLCJzdWIiOiIxOTAwMyIsInNjb3BlcyI6WyJwYW5lbF9hcHAiLCJpbnN0YWxsX2FwcCJdfQ.dSEKwhMpD52SkX19kJ-f-V90v7Wpj7JttOcyznijB29I1oJKfIARgl9izMh8nlQc-qHWfkRYAjmH9wvILwuGN0vPdJnvvhmmFs_DGKfoXDwOMiz-bSCcACY-tFVX2yq_K0fZpKVIdDZZACzq5RqPCwl2dsICIvPgl8Yy4wv4VAE',
            'Cookie': 'app_powerzap=8ntko6vjvctgk9170ing07i52l'
        }
    };
    return axios.request(config)
}

const main = async () => {

    let chats = await getChats();
    let promises = []

    for (let index = 0; index < chats.length; index++) {
        const element = chats[index];
        console.log(element.id)
        const promise = axios.delete('https://api.huggy.app/v3/chats/' + element.id, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJhNGRhNmE4YjNlZWExMmYzYzJiNTk5Y2FkYjk0MmMyNzA1MWEwNDlkYzQzMGIyMGVkNGFmY2MwNTc4MjM3OGE5ZmQ2Yzg3ODhkZDE3MjkzIn0.eyJhdWQiOiJBUFAtZjQ0YmVkNGQtYWI2YS00YjVmLThhNzEtZWM0NGI3ZTE2OWE0IiwianRpIjoiMmE0ZGE2YThiM2VlYTEyZjNjMmI1OTljYWRiOTQyYzI3MDUxYTA0OWRjNDMwYjIwZWQ0YWZjYzA1NzgyMzc4YTlmZDZjODc4OGRkMTcyOTMiLCJpYXQiOjE3MDExMjAzOTIsIm5iZiI6MTcwMTEyMDM5MiwiZXhwIjoxNzMyNzQyNzkyLCJzdWIiOiIxOTAwMyIsInNjb3BlcyI6WyJwYW5lbF9hcHAiLCJpbnN0YWxsX2FwcCJdfQ.dSEKwhMpD52SkX19kJ-f-V90v7Wpj7JttOcyznijB29I1oJKfIARgl9izMh8nlQc-qHWfkRYAjmH9wvILwuGN0vPdJnvvhmmFs_DGKfoXDwOMiz-bSCcACY-tFVX2yq_K0fZpKVIdDZZACzq5RqPCwl2dsICIvPgl8Yy4wv4VAE',
                'Cookie': 'app_powerzap=8ntko6vjvctgk9170ing07i52l' 
            }
        })
        promises.push(promise)
    }

    Promise.all(promises).then(function(values) {
        console.log(values);
    });
}

main()




