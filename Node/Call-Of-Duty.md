# Call Of Duty - Duties scheduling system

> _Estimation time: 20-30 Days_

---

In the 'Call Of Duty' project, you will be managing soldiers and duties using a database and a RESTfull API server.

![Call of Duty](<https://cdn.vox-cdn.com/thumbor/cnh3fYY5kgmjuF3O4uR9JKj3avY=/0x0:960x540/1220x813/filters:focal(404x194:556x346):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70538810/025d6f6199fb817e05158e20b9640808_CODVG_Reveal_Standard_Keyart_Textless_Bnet_Shop_Product_Browsing_Card_960x540.0.jpeg>)

---

_Send me back [home](home)_

[[_TOC_]]

---

## Instructions

### Pre - requirements

Before you start make sure you familiar with these concepts:

- [Web Server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)
- [HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP)
- [Database](https://en.wikipedia.org/wiki/Database)
- [Unit Testing](https://en.wikipedia.org/wiki/Unit_testing)

### General Guidelines

- The database should be a [non relational](https://www.mongodb.com/databases/non-relational) database.
- The API server should be a [RESTfull](https://www.redhat.com/en/topics/api/what-is-a-rest-api) API server.
- You should test the project, and the coverage of the tests should be high as possible.
- You should PR Each task in the project.
- Log your logic and errors.
- The Commits separation decision is up to you.

### Recommended Technologies

You can choose which technologies you want to use for this project, but ask your mentor before choosing.
Here is my recommended technologies:

- Language: [JavaScript](https://www.javascript.com/) or [TypeScript](https://www.typescript.org/)
- Server: [fastify](https://www.fastify.io/) or [express](https://expressjs.com/) 5.x [API](https://expressjs.com/en/5x/api.html)
- Test: [Vitest](https://vitest.dev/) or [Node Test Runner](https://nodejs.org/api/test.html) or [Jest](https://jestjs.io/)
- Database: [MongoDB](https://www.mongodb.com/)

  Don't use [Mongoose](https://mongoosejs.com/) ODM, use [MongoDB Node Driver](https://www.mongodb.com/docs/drivers/node/).
  You can read more about it in the [mongoose-vs-nodejs-driver](https://www.mongodb.com/developer/languages/javascript/mongoose-versus-nodejs-driver/) article.

- Logger: [fastify built-in pino logger](https://www.fastify.io/docs/latest/Reference/Logging/) or [pino](https://www.npmjs.com/package/pino) or [winston](https://www.npmjs.com/package/winston).
- Schema validator: [fastify built-in ajv validator](https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/) or [Ajv](https://ajv.js.org/) or [Joi](https://joi.dev/). If you using Typescript have a look at [Runtime checks with TypeScript](Node/TypeScript#runtime-checks-with-typescript) section.
- Package Manager: [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.js.org/)
- [Linter](<https://en.wikipedia.org/wiki/Lint_(software)>): [eslint](https://eslint.org/) using [airbnb](https://github.com/airbnb/javascript) style guide or
  [XO](https://github.com/xojs/xo) style guide,
  or [Biome](https://biomejs.dev/) linter and formatter.
- Optional:
  - [prettier](https://prettier.io/)
  - [Cspell](https://cspell.org/)

## Models

Your DB Will contain 2 collections:

- **Soldiers**:

```typescript
interface Soldier {
  _id: string;
  name: string;
  rank: {
    name: string;
    value: number;
  };
  limitations: string[];
  createdAt: ISODate;
  updatedAt: ISODate;
}
```

- **Duties**:

```typescript
interface Duty {
  _id: ObjectId;
  name: string;
  description: string;
  location: GeoJSON Point;
  startTime: ISODate;
  endTime: ISODate;
  minRank: number;
  constraints: string[];
  soldiersRequired: number;
  value: number;
  soldiers: ObjectId[];
  status: string;
  statusHistory: {
    status: string;
    date: ISODate;
  }[];
  createdAt: ISODate;
  updatedAt: ISODate;
}
```

## Task 1 - Health Check

> _Estimation time: 3 Days_

1. Create a server and an app.

   - listen on port from ENV var and the default port should be `3000`.

1. Create a health check endpoint:

   - GET `/health`
   - Return a 200 status code if the server is running.
   - Return a JSON response: `{"status": "ok"}`

   Run your app and test it using `curl` command:

   ```bash
   curl http://localhost:3000/health
   ```

   You can also use
   [Postman](https://www.getpostman.com/), or any other tool you like (such as [hoppscotch](https://hoppscotch.io/), [Insomnia](https://insomnia.rest/) or [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) vscode extension).

1. Create a database connection.

   - Connect to the database using the connection string from ENV var.
   - The connection should be established before the server starts listening.
   - The connection should be closed when the server stops listening.

1. Create a db health check endpoint:

   - GET `/health/db`
   - Return a 200 status code if the database is connected.
   - Return a JSON response: `{"status": "ok"}`

1. Create a test for your health check endpoint.

   What is the coverage of your tests?

1. Separate application code from the server code (Why?):

   - Create `server.js` file.
   - Create `app.js` file.

1. Test your app and server.

   You can use "HTTP injection" (Fastify built in `app.inject` function).

   What is the coverage of your tests?
   Did you test the error case?

1. Add linter to your project.

   - Add `lint` script to your `package.json` file.
   - Run the script before submit any merge request.

1. Log your app and server.

   The log-level should be configurable, and the default level should be `info`. In the test environment, the default log level should be `silent`.

## Task 2 - Soldier

> _Estimation time: 4 Days_

1. Create endpoint for creating a new soldier:

   - POST `/soldiers`
   - Return a 201 status code if the soldier is created.
   - The body will include the following parameters:

     ```javascript
     {
       _id, name, rankValue, limitations;
     }
     ```

   - The `_id` should be the soldier's private tt number - a 7 digits number.
   - The `name` should be a string with length between 3 and 50.
   - The `rankValue` should be a number between 0 and 6. Use the following table to convert the number to the rank name:

     | Rank Value | Rank Name  |
     | ---------- | ---------- |
     | 0          | private    |
     | 1          | corporal   |
     | 2          | sergeant   |
     | 3          | lieutenant |
     | 4          | captain    |
     | 5          | major      |
     | 6          | colonel    |

   - Save the limitations in lower case.
   - Validate that all the above parameters exist, any other property is invalid.
   - Add the `createdAt` and `updatedAt` properties and initialize them to the current date.
   - Return the inserted `Soldier`.

1. Create endpoint for getting a soldier:

   - GET `/soldiers/:id`
   - Return a 200 status code if the soldier is found.
   - Return a 404 status code if the soldier is not found.

   Example: a request to `/soldiers/0112358` should return the soldier with `id` `0112358` (if exists).

1. Create endpoint for getting all soldiers:

   - GET `/soldiers`
   - A search query can be passed as a query parameter.
     For example: a request to `/soldiers?name=david` should return all soldiers (as an array) with the name 'david'.

1. Create endpoint for deleting a soldier:

   - DELETE `/soldiers/:id`
   - Return a 204 status code if the soldier is deleted.
   - Return a 404 status code if the soldier is not found.

1. Create endpoint for updating a soldier:

   - PATCH `/soldiers/:id`
   - The body will include a `Soldier` object.
   - The updated `Soldier` will be an object and should contain the updated properties only.
   - The updated properties will override the existing ones.
   - Update the `updatedAt` property to the current date.
   - Do not allow this method to add any new properties nor to alter the `_id`.
   - Return the updated `Soldier` with a 200 status code if the soldier is updated.

If you using fastify (and you should) Add schema also for the response (Why?).

## Task 3 - Duty

> _Estimation time: 4 Days_

1. Create endpoint for creating a new duty:

   - POST `/duties`
   - Return a 201 status code if the duty is created.
   - The body will include the following parameters:

     ```javascript
     {
       name,
       location,
       startTime,
       endTime,
       constraints,
       soldiersRequired,
       value,
       minRank?
       maxRank?
     }
     ```

   - Generate a unique \_id for the object (MongoDB will do it for you).
   - Validate:
     - `name` is a string with length between 3 and 50.
     - `location` is a valid GeoJSON Point.
     - `startTime` is before the `endTime` and that the `startTime` is in the future.
     - `value` is a positive number.
     - `minRank` and `maxRank` if exists are numbers between 0 and 6.
     - All the above parameters exist, `minRank` and `maxRank` are optional. Any other property is invalid.
   - When a duty is inserted to the database:
     - Add the `soldiers` property and initialize it to an empty array.
     - Add the `status` property and initialize it to `unscheduled`.
     - Add the `statusHistory` property and initialize it to an array with the current status and date.
   - Return the inserted `Duty`.

1. Create endpoint for getting all duties:

   - GET `/duties`
   - A search query can be passed as a query parameter.
     For example: a request to `/duties?name=Hagnash` should return all should return all 'Hagnash' duties (as an array).

1. Create endpoint for getting a duty:

   - GET `/duties/:id`

1. Create endpoint for deleting a duty:

   - DELETE `/duties/:id`
   - Scheduled duties cannot be removed.

1. Create endpoint for updating a duty:

   - PATCH `/duties/:id`
   - The body will include a `Duty` object.
   - The updated `Duty` will be an object and should contain the updated properties only.
   - The updated properties will override the existing ones.
   - Scheduled duties cannot be updated.
   - Do not allow this method to add any new properties nor to alter the id.
   - Return the updated `Duty`.

## Task 4 - Justice Board

> _Estimation time: 2 Day_

The justice board is an array of objects with the keys:

- `_id` - The unique identifier of the soldier
- `score` - The total value of duties the soldier has been scheduled to.

For example:

```javascript
[{ _id: '1123581', score: 13 }, { _id: '3141592', score: 12 }, { _id: '2718281', score: 94 } ...]
```

1. Create endpoint for getting the Justice Board:

   - GET `/justice-board`
   - Use mongoDB aggregation to calculate the Justice Board (Why?).

## Task 5 - Scheduling

> _Estimation time: 4 Days_

The scheduling process is the process of assigning soldiers to duties.
The soldiers' limitations (according to the duty's constraints), the Justice Board, and the rank should be taken into consideration.

The Duty status can be one of the following:

- `unscheduled` - The duty is not scheduled yet.
- `scheduled` - The duty is scheduled.
- `canceled` - The duty is canceled.

1. Create endpoint for scheduling a duty:

   - PUT `/duties/:id/schedule`
   - Don't allow to schedule a duty that is already scheduled.
   - Don't allow to schedule a duty that is canceled.
   - Don't allow to schedule a duty that is in the past.
   - The duty `status` should be updated to `scheduled`.
   - The duty `statusHistory` should be updated with the new status and the current date.
   - Use the `soldiersRequired` property to determine how many soldiers should be scheduled.
   - Make sure that the soldiers are not already scheduled to other duties at the same time.
   - Update the `soldiers` property in the Duty object with the scheduled soldiers.

1. Create endpoint for canceling a duty:

   - PUT `/duties/:id/cancel`
   - Don't allow to cancel a duty that is already canceled.
   - Don't allow to cancel a duty that is in the past.
   - The duty status should be updated to `canceled`.
   - The duty status history should be updated with the new status and the current date.
   - Update the `soldiers` property in the Duty object (to an empty array).

1. Fix the Soldiers routes to take into consideration the scheduled duties.

### Automatic Scheduling (Optional)

The auto scheduling mechanism should schedule all unscheduled duties.

1. Add an auto scheduling mechanism to your app.

   - The time should be configurable and the default time should be every 5 minutes.
   - Duty with higher value should be prioritized.
   - What will happen if there is a change in the Duties or Soldiers collection while the auto scheduling is running?

## Task 6 - Make it professional

> _Estimation time: 2 Days_

1. Add handlers for `unhandledRejection` and `uncaughtException` events.

1. Add handlers for `SIGTERM` and `SIGINT` events.

1. Validate your ENV vars before starting the server.

1. Add [openAPI](https://www.openapis.org/) v3 documentation to your app.

   You can use the [fastify-swagger](https://github.com/fastify/fastify-swagger) plugin to generate the documentation.

1. Add basic authentication to your app.

1. Add a rate limiter for your routes.

   You can use [fastify-rate-limit](https://github.com/fastify/fastify-rate-limit).

1. Add README.md to your app. Your readme should include explanation to how to use and test the app.

1. Use [helmetJS](https://helmetjs.github.io) to protect your app.

   You can use the [fastify-helmet](https://github.com/fastify/fastify-helmet) plugin.

1. Optional: Add `_link` property to your responses.

## Task 7 - Extend query parameters (optional)

> Ask your mentor which extensions you should implement.

1. **Multiple parameters**

   Extend the `/soldiers` and `/duties` routes functionality to multiple parameters search query.

   For example: A request to `/duties?name=hagnash&soldiers=mishel,shir` should return all `"hagnash"` duties that contains both `"mishel"` and `"shir"`. (Note that a `"hagnash"` duty that was scheduled with `"mishel"`, `"shir"` and `"david"` should also be returned).

1. **Sorting**

   Extend the he `/justice-board` `/soldiers` and `/duties` routes to accept sorting queries also with desire order.

   For example:

   - A request to `/duties?sort=value` should return the duties sorted by value.
   - A request to `/duties?sort=name&order=desc` should return the duties sorted by name in descending order.
   - A request to `/justice-board?sort=score&order=desc` should return the justice board sorted by score in descending order.

1. **Filtering**

   Extend the `/justice-board` `/soldiers` and `/duties` functionality to accept filtering queries.

   For example:

   - A request to `/justice-board?filter=score>=20` should return the justice board with soldiers with score >= 20.

1. **Pagination**

   Extend the `/justice-board` `/soldiers` and `/duties` functionality to accept pagination.

   For example:

   - A request to `/justice-board?page=2&limit=10` should return the justice board with the second page of 10 soldiers.

1. **Projection**

   Extend the `/justice-board` `/soldiers` and `/duties` functionality to accept projection by fields.

   For example:

   - A request to `/soldiers?select=name` should return the soldiers with only the `name` property.
   - A request to `/duties?select=name,value` should return the duties with only the `name` and `value` properties.

1. **Population**

   Extend the `/justice-board` `/soldiers` and `/duties` functionality to accept population of fields.

   For example:

   - A request to `/duties?populate=soldiers` should return the duties with the `soldiers` property populated with the soldiers data.

1. **Geo Queries**

   Extend the `/duties` functionality to accept geo queries.

   For example:

   - A request to `/duties?near=32.0853,34.7818&radius=1000` should return the duties that are near Tel Aviv (32.0853, 34.7818) with a max distance of 1000 meters.

## Task 8 - Make it scalable (Advanced)

1. What will happen if you add more soldiers and duties?

   You may use this concepts:

   - Indexing
   - Pagination
   - Cache
   - Job Queue

1. Who can modified the soldiers and duties?

   You may use this concepts:

   - Authentication
   - Authorization

1. What is the performance of your app?

   Make a load test to your app. Profile your app and find the bottlenecks.

## Next steps

Let's return to a type safe [space](Node/TypeScript)
