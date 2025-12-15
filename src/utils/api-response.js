class ApiSuccess {
  constructor(statusCode, message, data) {
    this.success = true;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

class ApiError extends Error {
  constructor(statusCode, message) {
    super();
    this.success = false;
    this.statusCode = statusCode;
    this.message = message;
  }
}

export { ApiSuccess, ApiError };
