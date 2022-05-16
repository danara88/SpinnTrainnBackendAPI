const express = require('express');
const cors = require('cors');

/**
 * Class to begin the server
 */
class Server {
  /**
   * Main constructor
   */
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
  }

  /**
   * Method to define the middlewares
   */
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  /**
   * Method to run the server
   */
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running at port ${this.port}`);
    });
  }
}

module.exports = Server;
