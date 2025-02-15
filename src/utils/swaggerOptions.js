const pathtoRoutesFile = new URL('../routers/v1/*.json', import.meta.url).pathname;
console.log(pathtoRoutesFile);



export const options = {
    definition: {
       openapi: '3.0.0',
       info: {
           title: 'Image gram API',
           version: '1.0.0',
           description: 'This is a CRUD API application made with Express and documented with Swagger',
       },

       
       servers: [
           {
               url: 'http://localhost:3001/api/v1',
           },
        ],
    },
    apis: ['../src/routers/v1/*.js'],
};


