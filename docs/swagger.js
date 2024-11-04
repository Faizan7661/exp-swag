module.exports = {
  openapi: "3.0.0",
  info: {
    title: "User API",
    version: "1.0.0",
    description: "A simple CRUD API for users",
  },
  paths: {
    "/api/users": {
      get: {
        summary: "Get all users",
        responses: {
          200: {
            description: "A list of users",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      _id: { type: "string" },
                      name: { type: "string" },
                      email: { type: "string" },
                      age: { type: "integer" },
                    },
                  },
                },
              },
            },
          },
        },
      },
      post: {
        summary: "Create a new user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  email: { type: "string" },
                  age: { type: "integer" },
                },
                required: ["name", "email", "age"],
              },
            },
          },
        },
        responses: {
          201: {
            description: "User created successfully",
          },
        },
      },
    },
    "/api/users/{id}": {
      put: {
        summary: "Update a user",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  email: { type: "string" },
                  age: { type: "integer" },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "User updated successfully",
          },
        },
      },
      delete: {
        summary: "Delete a user",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          200: {
            description: "User deleted successfully",
          },
        },
      },
    },
  },
};
