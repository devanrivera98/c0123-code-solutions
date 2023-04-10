export class ClientError extends Error {
  // status;
  // commented out for lint rules

  constructor(status, message) {
    super(message);
    this.status = status;
  }
}
