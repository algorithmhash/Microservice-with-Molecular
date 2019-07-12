# Microservice-with-Molecular

Creating a microservice with molecular.

## Getting started

1- Install dependencies
`$ cd ~/service && npm install`
2- After that completes, run the server
`$ npm run start`
3- Test your endpoints on postman

```

POST  http://localhost:3010/product/
PUT   http://localhost:3010/product/1234
DELETE  http://localhost:3010/product/1234
PATCH  http://localhost:3010/product/1234
GET   http://localhost:3010/product/1234

```

1234 is not the actual id, you must first run the POST command and retrieve the \_id from the output below in postman. Then that is your id to use for the other commands, you can even use GET to get a full list. If you try it now without adding any data it will return:

```
{
    "name": "ValidationError",
    "message": "Parameters validation error!",
    "code": 422,
    "type": null,
    "data": [
        {
            "type": "required",
            "field": "populate",
            "message": "The 'populate' field is required!"
        },
        {
            "type": "required",
            "field": "fields",
            "message": "The 'fields' field is required!"
        }
    ]
}
```

It needs some data. So add the necessary data through the post request.
