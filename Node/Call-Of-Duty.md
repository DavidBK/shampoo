# Call Of Duty - Duties scheduling system

-- *Estimation time: 8-10 Days*

---

In the 'Call Of Duty' project, you will be managing soldiers and duties using a database and a RESTfull API server.

![Call of Duty](https://cdn.vox-cdn.com/thumbor/cnh3fYY5kgmjuF3O4uR9JKj3avY=/0x0:960x540/1220x813/filters:focal(404x194:556x346):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70538810/025d6f6199fb817e05158e20b9640808_CODVG_Reveal_Standard_Keyart_Textless_Bnet_Shop_Product_Browsing_Card_960x540.0.jpeg)

---
*Send me back [home](home)*

[[*TOC*]]

---

## General Guidelines

- The database should be a [non relational](https://www.mongodb.com/databases/non-relational) database.
- The API server should be a [RESTfull](https://www.redhat.com/en/topics/api/what-is-a-rest-api) API server.
- You should test the project, and the coverage of the tests should be high as possible.
- You should PR Each task in the project.
- The Commits separation decision is up to you.

### Recommended Technologies

You can choose which technologies you want to use for this project, but ask your mentor before choosing.
Here is my recommended technologies:

- Language: [JavaScript](https://www.javascript.com/) or [TypeScript](https://www.typescript.org/) or [ReScript](https://www.rescript.org/)
- Server: [fastify](https://www.fastify.io/) or [express](https://expressjs.com/) 5.x [API](https://expressjs.com/en/5x/api.html)
- Test: [Vitest](https://vitest.dev/) or [Jest](https://jestjs.io/) or [Mocha](https://mochajs.org/)
- Database: [MongoDB](https://www.mongodb.com/)

  Don't use [Mongoose](https://mongoosejs.com/) ODM, use [MongoDB Node Driver](https://www.mongodb.com/docs/drivers/node/).
  You can read more about it in the [mongoose-vs-nodejs-driver](https://www.mongodb.com/developer/languages/javascript/mongoose-versus-nodejs-driver/) article.

- Logger: [pino](https://www.npmjs.com/package/pino) or fastify [built-in pino logger](https://www.fastify.io/docs/latest/Reference/Logging/) or [winston](https://www.npmjs.com/package/winston).

- Package Manager: [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.js.org/)
- Linter: [eslint](https://eslint.org/) using [airbnb](https://github.com/airbnb/javascript) style guide

## Models

Your DB Will contain 2 collections:

- **Soldiers**:

```JavaScript
{
 _id: <string>, // _id will hold the soldier's unique identifier
 name: <string> ,
 rank: <string>,
 limitations: [<string>],
 duties: [<string>],
}
```

- **Duties**:

```JavaScript  
 {
  _id: ObjectId(),
  name: <string>,
  description: <string>,
  location: <string>,
  time: {
   start: <ISODate>,
   end: <ISODate>,
  },
  constraints: [<string>],
  soldiersRequired: <number>,
  value: <number>,
  soldiers: [<string>],
 }
```

## Task 1 - Health Check

-- *Estimation time: 1 Day*

1. Create a server and an app.
    - listen on port from env var, or 3000 if not set.

2. Create a health check endpoint:

    - GET `/health`
    - Return a 200 status code if the server is running.

    Run your app and test it using `curl` command or [Postman](https://www.getpostman.com/).

    ```bash
    npm run start
    curl http://localhost:3000/health
    ```

3. Create a test for your health check endpoint.

    What is the coverage of your tests?

4. Separate application code from the server code:

    - Create `server.js` file.
    - Create `app.js` file.

    [Why Separate Express 'app' and 'server'](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/projectstructre/separateexpress.md)

5. Test your app and server.

    You can use "HTTP injection" (Fastify built in `app.inject` function)

    What is the coverage of your tests?
    Did you test error case?

6. Add linter to your project.

    - Add `lint` script to your `package.json` file.
    - Run the script before submit any merge request.

7. Log your app and server.

## Task 2 - Soldier

-- *Estimation time: 2 Days*

1. Create endpoint for creating a new soldier:

    - POST `/soldiers`
    - Return a 201 status code if the soldier is created.
    - The body will include the following parameters:

      ``` JavaScript
      { id, name, degree, limitations}
      ```

      The id should be the soldier's private tt number.
    - Validate that all the above parameters exist, any other property is invalid.-
    - When a soldier is inserted to the database, add the `duties` property and initialize it to an empty array.
    - Return the inserted `<Soldier>`.

2. Create endpoint for getting all soldiers:

    - GET `/soldiers`
    - A search query can be passed as a query parameter.
      For example: a request to `/soldiers?name=david` should return all soldiers (as an array) with the name 'david'.

3. Create endpoint for getting a soldier:

    - GET `/soldiers/:id`
    - Return a 200 status code if the soldier is found.
    - Return a 404 status code if the soldier is not found.

  Example: a request to `/soldiers/112358` should return the soldier object (if exists).

## Task 3 - Duty

-- *Estimation time: 2 Days*

1. Create endpoint for creating a new duty:

    - POST `/duties`
    - Return a 201 status code if the duty is created.
    - The body will include the following parameters:

      ``` JavaScript
      { name, location, time, constraints, soldiersRequired, value }
      ```

    - Generate a unique _id for the object.
    - Validate that all the above parameters exist, any other property is invalid.
    - When a duty is inserted to the database, add the `soldiers` property and initialize it to an empty array.
    - Return the inserted `<Duty>`.

2. Create endpoint for getting all duties:

    - GET `/duties`
    - A search query can be passed as a query parameter.
      For example: a request to `/duties?name=Hagnash` should return all should return all 'Hagnash' duties (as an array).

3. Create endpoint for getting a duty:

    - GET `/duties/:id`

4. Create endpoint for deleting a duty:

    - DELETE `/duties/:id`
    - Scheduled duties cannot be removed.

5. Create endpoint for updating a duty:

    - PATCH `/duties/:id`
    - The body will include a `<Duty>` object.
    - The updated `<Duty>` will be an object and should contain the updated properties only.
    - The updated properties will override the existing ones.
    - Scheduled duties cannot be updated.
    - Do not allow this method to add any new properties nor to alter the id.
    - Return the updated `<Duty>`.

## Task 4 - Justice Board

-- *Estimation time: 1 Day*

The justice board is an array of objects with the keys are:

- id - The unique identifier of the soldier
- score - The total weight of duties the soldier has been scheduled to.

For example:

```JavaScript
[{id: '112358', score: 23}, {id: '3141592', score: 19}, ...]
```

1. Create endpoint for getting the justice board:

    - GET `/justice-board`

## Task 5 - Scheduling

-- *Estimation time: 1 Days*

1. Create endpoint for scheduling a duty:

    - PUT `/duties/:id/schedule`

    - Use this route in order to schedule a duty.
    - The justice board and the soldiers' limitations should be taken into consideration (according to the duty's constraints) when scheduling duties.
    - When scheduling soldiers for a duty, make sure to update the soldiers and duties properties, make sure the duty is not already scheduled.

## Task 6 - Make it professional

-- *Estimation time: 1 Days*

1. Use [helmetJS](https://helmetjs.github.io) to protect your app.

    You can use the [fastify-helmet](https://github.com/fastify/fastify-helmet) plugin.
2. Add [swagger](https://swagger.io) documentation to your app.

    You can use the [fastify-swagger](https://github.com/fastify/fastify-swagger) plugin.

3. Add README.md to your app.

4. Add basic authentication to your app.

## Task 7 - Make it scalable (Advanced)

1. What will happen if you add more soldiers and duties?

    Make your app work with 1,000,000 soldiers and duties in the DB.

2. What is the performance of your app?

    Make a load test to your app.

## Task 8 - Extend query parameters (optional)

1. Extend the `/soldiers` and `/duties` routes functionality to multiple parameters search query.

    For example: A request to `/duties?name=Hagnash&soldiers=['Tair', 'Shir']` should return all *"Hagnash"* duties that contains both Tair and Shir. (Note that a Hagnash duty that was scheduled with Tair, Shir and Yuval should also be returned).

2. Extend the he `/soldiers` and `/duties` routes to accept sorting queries also with desire order.

    For example:
     - A request to `/duties?sort=value` should return the duties sorted by value.
     - A request to `/duties?sort=name&order=desc` should return the duties sorted by name in descending order.

3. Extend the `/justiceBoard` functionality to accept sorting and filtering queries.

    For example:
     - A request to `/justiceBoard?sort=score&order=desc` should return the justice board sorted by score in descending order.
     - A request to `/justiceBoard?filter=score>=20` should return the justice board with soldiers with score >= 20.

4. Extend the `/justiceBoard` `/soldiers` and `/duties` functionality to accept pagination.

    For example:
     - A request to `/justiceBoard?page=2&limit=10` should return the justice board with the second page of 10 soldiers.

5. Extend the `/justiceBoard` `/soldiers` and `/duties` functionality to accept projection.

    For example:
     - A request to `/soldiers?projection=name` should return the soldiers with only the name property.
     - A request to `/duties?projection=name,value` should return the duties with only the name and value properties.
