/* eslint-disable no-unused-vars -- REMOVE ME */
export default class ClientError extends Error {
  // status;

  constructor(status, message) {
    super(message);
    this.status = status;
  }
}
