require('dotenv').config();

// const signalR = require('@aspnet/signalr');
const express = require('express');
const app = express();
const port = 3000;

const graphql = require("./graphQL");

app.use(express.json());

app.use(graphql);

app.use('/graphql', function (req, res, next) {
  next();
});

app.listen(port, () =>
  console.log(`Stream service listening on port ${port}.`)
);

// Build connection to SignalR service
// const signalRConnection = new signalR.HubConnectionBuilder()
//   .withUrl('/chat')
//   .build();

// /**
//  * When streams need to be updated.  Payload will look like:
//  * {
//  *  stream
//  * }
//  */
// signalRConnection.on('updateStream', async data => {
//   console.log(data);

//   if (data.stream) {
//     try {
//       await db.updateStream(data.stream.streamDate, data.stream);
//     } catch (err) {
//       console.log(err);
//     }
//   }
// });

// // Connect to SignalR service
// signalRConnection.start();
