### GET /tasks
**Summary:** Get Tasks

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /tasks
**Summary:** Create Task

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /tasks/{task_id}
**Summary:** Get Task by ID

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### PUT /tasks/{task_id}
**Summary:** Update Task

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /tasks/{task_id}/close
**Summary:** Close Task

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /tasks/{task_id}/reopen
**Summary:** Reopen Task

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /tasks/{task_id}/comments
**Summary:** Create Comment on Task

```json
{
  "204": {
    "description": "204",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /statuses/leads
**Summary:** Get Inquiry Statuses

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /lead/types/
**Summary:** Get Inquiry Types

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": [\n    {\n      \"id\": 4,\n      \"name\": \"One\"\n    },\n    {\n      \"id\": 5,\n      \"name\": \"Two\"\n    },\n    {\n      \"id\": 6,\n      \"name\": \"Three\"\n    },\n    {\n      \"id\": 7,\n      \"name\": \"Four\"\n    }\n  ],\n  \"count\": 4,\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "example": 4,
                    "default": 0
                  },
                  "name": {
                    "type": "string",
                    "example": "One"
                  }
                }
              }
            },
            "count": {
              "type": "integer",
              "example": 4,
              "default": 0
            },
            "success": {
              "type": "boolean",
              "example": true,
              "default": true
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /lead/custom-fields/
**Summary:** Get Inquiry Custom Fields

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": [\n    {\n      \"id\": 6326298,\n      \"name\": \"Number test\",\n      \"type\": 6\n    },\n    {\n      \"id\": 3598280,\n      \"name\": \"\u041f\u043e\u043b\",\n      \"type\": 3\n    },\n    {\n      \"id\": 6072189,\n      \"name\": \"data test\",\n      \"type\": 5\n    },\n    {\n      \"id\": 5396374,\n      \"name\": \"test\",\n      \"type\": 4\n    }\n  ],\n  \"count\": 4,\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "example": 6326298,
                    "default": 0
                  },
                  "name": {
                    "type": "string",
                    "example": "Number test"
                  },
                  "type": {
                    "type": "integer",
                    "example": 6,
                    "default": 0
                  }
                }
              }
            },
            "count": {
              "type": "integer",
              "example": 4,
              "default": 0
            },
            "success": {
              "type": "boolean",
              "example": true,
              "default": true
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /lead/
**Summary:** Get Inquiries

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /lead/
**Summary:** Create Inquiry

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": \n    {\n      \"id\": 75\n    }\n ,\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer",
                  "example": 75,
                  "default": 0
                }
              }
            },
            "success": {
              "type": "boolean",
              "example": true,
              "default": true
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### PUT /lead/
**Summary:** Update Inquiry

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /lead/status/
**Summary:** Change Inquiry Status

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /lead/{lead_id}/comments
**Summary:** Create Inquiry Comment

```json
{
  "204": {
    "description": "204",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /company
**Summary:** Get Company Information

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /company/license
**Summary:** Get License

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /company/locations
**Summary:** Get Locations

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /company/locations/{id}
**Summary:** Get Location by ID

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /company/locations/{id}/resources
**Summary:** Get Location Resources

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /company/employees
**Summary:** Get Employees

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /company/employees/{id}
**Summary:** Get Employee by ID

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /company/legal-entities
**Summary:** Get Legal Entities

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /company/legal-entities/{id}
**Summary:** Get Legal Entity by ID

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /company/taxes
**Summary:** Get Taxes

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /company/directories
**Summary:** Get Directories

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /company/directories/{id}/items
**Summary:** Get Directory Items

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /bookings
**Summary:** Get Bookings

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /bookings
**Summary:** Create Booking

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /bookings/{booking_id}
**Summary:** Get Booking by ID

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### PATCH /bookings/{booking_id}
**Summary:** Update Booking

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### DELETE /bookings/{booking_id}
**Summary:** Delete Booking

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /bookings/{booking_id}/items
**Summary:** Add Booking Item

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /bookings/{booking_id}/items
**Summary:** Get Bookings Items

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### PATCH /bookings/{booking_id}/items/{item_id}
**Summary:** Update Booking Item

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### DELETE /bookings/{booking_id}/items/{item_id}
**Summary:** Delete Booking Item

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /estimates
**Summary:** Get Estimates

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /estimates
**Summary:** Create Estimate

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /estimates/{estimate_id}
**Summary:** Get Estimate by ID

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### PATCH /estimates/{estimate_id}
**Summary:** Update Estimate

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /estimates/{estimate_id}/items
**Summary:** Get Estimate Items

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /estimates/{estimate_id}/items
**Summary:** Add Estimate Item

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### PATCH /estimates/{estimate_id}/items/{item_id}
**Summary:** Update Estimate Item

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /estimates/{estimate_id}/status
**Summary:** Change Estimate Status

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /estimates/{estimate_id}/comments
**Summary:** Create Estimate Comment

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /estimates/{estimate_id}/public-url
**Summary:** Get Estimate Public Page Url

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /estimates/statuses
**Summary:** Get Estimate Statuses

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /estimates/types
**Summary:** Get Estimate Types

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /estimates/custom-fields
**Summary:** Get Estimate Custom Fields

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /orders
**Summary:** Get Orders

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /orders
**Summary:** Create Order

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /orders/{order_id}
**Summary:** Get Order by Id

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### PATCH /orders/{order_id}
**Summary:** Update Order

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /orders/{order_id}/items
**Summary:** Get Order Items

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "[\n  {\n    \"id\": 78870627,\n    \"created_at\": \"2025-05-09T12:52:32Z\",\n    \"assignee_id\": 206039,\n    \"quantity\": \"1.000\",\n    \"price\": \"20.00\",\n    \"cost\": \"100.00000\",\n    \"margin_id\": null,\n    \"is_deduction_required\": false,\n    \"entity\": {\n      \"id\": 38527538,\n      \"type\": \"service\",\n      \"code\": \"\",\n      \"sku\": \"\",\n      \"sn_accounting\": false,\n      \"title\": \"Diagnostics\",\n      \"image\": \"\",\n      \"thumbnail\": \"\",\n      \"uom\": {\n        \"id\": 1,\n        \"title\": \"pcs\",\n        \"description\": \"Pieces\"\n      },\n      \"is_hidden\": false\n    },\n    \"comment\": \"\",\n    \"write_offs\": null,\n    \"is_refunded\": false,\n    \"discount\": {\n      \"type\": \"value\",\n      \"percentage\": 0,\n      \"amount\": \"0.00\",\n      \"sponsor\": \"staff\"\n    },\n    \"warranty\": {\n      \"period\": 2,\n      \"period_units\": \"days\"\n    },\n    \"taxes\": [\n      {\n        \"id\": 5628,\n        \"name\": \"State taxes\",\n        \"rate\": 10\n      }\n    ],\n    \"expiration_date\": null\n  },\n  {\n    \"id\": 78870628,\n    \"created_at\": \"2025-05-09T12:52:32Z\",\n    \"assignee_id\": 206039,\n    \"quantity\": \"1.000\",\n    \"price\": \"50.00\",\n    \"cost\": \"0.00000\",\n    \"margin_id\": 538042,\n    \"is_deduction_required\": false,\n    \"entity\": {\n      \"id\": 38527535,\n      \"type\": \"work\",\n      \"code\": \"\",\n      \"sku\": \"\",\n      \"sn_accounting\": false,\n      \"title\": \"Battery service \",\n      \"image\": \"\",\n      \"thumbnail\": \"\",\n      \"uom\": {\n        \"id\": 1,\n        \"title\": \"pcs\",\n        \"description\": \"Pieces\"\n      },\n      \"is_hidden\": false\n    },\n    \"comment\": \"\",\n    \"write_offs\": null,\n    \"is_refunded\": false,\n    \"discount\": {\n      \"type\": \"value\",\n      \"percentage\": 0,\n      \"amount\": \"0.00\",\n      \"sponsor\": \"staff\"\n    },\n    \"warranty\": {\n      \"period\": 0,\n      \"period_units\": \"days\"\n    },\n    \"taxes\": [\n      {\n        \"id\": 5628,\n        \"name\": \"State taxes\",\n        \"rate\": 10\n      }\n    ],\n    \"expiration_date\": null\n  },\n  {\n    \"id\": 78870629,\n    \"created_at\": \"2025-05-09T12:52:32Z\",\n    \"assignee_id\": 206039,\n    \"quantity\": \"1.000\",\n    \"price\": \"81.00\",\n    \"cost\": \"54.00000\",\n    \"margin_id\": 387006,\n    \"is_deduction_required\": false,\n    \"entity\": {\n      \"id\": 52110291,\n      \"type\": \"product\",\n      \"code\": \"\",\n      \"sku\": \"\",\n      \"sn_accounting\": false,\n      \"title\": \"original Acer keyboard\",\n      \"image\": \"\",\n      \"thumbnail\": \"\",\n      \"uom\": {\n        \"id\": 1,\n        \"title\": \"pcs\",\n        \"description\": \"Pieces\"\n      },\n      \"is_hidden\": false\n    },\n    \"comment\": \"\",\n    \"write_offs\": [\n      {\n        \"cost\": 54,\n        \"cellId\": 3679564,\n        \"goodId\": 137183962,\n        \"quantity\": 1,\n        \"sernum_id\": null,\n        \"sernum_code\": null,\n        \"warehouseId\": 3649247,\n        \"repairOrderProductId\": 78870629\n      }\n    ],\n    \"is_refunded\": false,\n    \"discount\": {\n      \"type\": \"value\",\n      \"percentage\": 0,\n      \"amount\": \"0.00\",\n      \"sponsor\": \"staff\"\n    },\n    \"warranty\": {\n      \"period\": 0,\n      \"period_units\": \"days\"\n    },\n    \"taxes\": [\n      {\n        \"id\": 5628,\n        \"name\": \"State taxes\",\n        \"rate\": 10\n      }\n    ],\n    \"expiration_date\": null\n  },\n  {\n    \"id\": 78870630,\n    \"created_at\": \"2025-05-09T12:52:32Z\",\n    \"assignee_id\": 206039,\n    \"quantity\": \"1.000\",\n    \"price\": \"69.00\",\n    \"cost\": \"46.00000\",\n    \"margin_id\": 387006,\n    \"is_deduction_required\": false,\n    \"entity\": {\n      \"id\": 52110296,\n      \"type\": \"product\",\n      \"code\": \"\",\n      \"sku\": \"\",\n      \"sn_accounting\": false,\n      \"title\": \"original Acer display-cover\",\n      \"image\": \"\",\n      \"thumbnail\": \"\",\n      \"uom\": {\n        \"id\": 1,\n        \"title\": \"pcs\",\n        \"description\": \"Pieces\"\n      },\n      \"is_hidden\": false\n    },\n    \"comment\": \"\",\n    \"write_offs\": [\n      {\n        \"cost\": 46,\n        \"cellId\": 3679564,\n        \"goodId\": 137183963,\n        \"quantity\": 1,\n        \"sernum_id\": null,\n        \"sernum_code\": null,\n        \"warehouseId\": 3649247,\n        \"repairOrderProductId\": 78870630\n      }\n    ],\n    \"is_refunded\": false,\n    \"discount\": {\n      \"type\": \"value\",\n      \"percentage\": 0,\n      \"amount\": \"0.00\",\n      \"sponsor\": \"staff\"\n    },\n    \"warranty\": {\n      \"period\": 0,\n      \"period_units\": \"days\"\n    },\n    \"taxes\": [\n      {\n        \"id\": 5628,\n        \"name\": \"State taxes\",\n        \"rate\": 10\n      }\n    ],\n    \"expiration_date\": null\n  },\n  {\n    \"id\": 78870631,\n    \"created_at\": \"2025-05-09T12:52:32Z\",\n    \"assignee_id\": 206039,\n    \"quantity\": \"1.000\",\n    \"price\": \"129.00\",\n    \"cost\": \"86.00000\",\n    \"margin_id\": 387006,\n    \"is_deduction_required\": false,\n    \"entity\": {\n      \"id\": 52110306,\n      \"type\": \"product\",\n      \"code\": \"\",\n      \"sku\": \"\",\n      \"sn_accounting\": false,\n      \"title\": \"Battery 50.29Wh original\",\n      \"image\": \"\",\n      \"thumbnail\": \"\",\n      \"uom\": {\n        \"id\": 1,\n        \"title\": \"pcs\",\n        \"description\": \"Pieces\"\n      },\n      \"is_hidden\": false\n    },\n    \"comment\": \"\",\n    \"write_offs\": [\n      {\n        \"cost\": 86,\n        \"cellId\": 3679564,\n        \"goodId\": 137183964,\n        \"quantity\": 1,\n        \"sernum_id\": null,\n        \"sernum_code\": null,\n        \"warehouseId\": 3649247,\n        \"repairOrderProductId\": 78870631\n      }\n    ],\n    \"is_refunded\": false,\n    \"discount\": {\n      \"type\": \"value\",\n      \"percentage\": 0,\n      \"amount\": \"0.00\",\n      \"sponsor\": \"staff\"\n    },\n    \"warranty\": {\n      \"period\": 0,\n      \"period_units\": \"days\"\n    },\n    \"taxes\": [\n      {\n        \"id\": 5628,\n        \"name\": \"State taxes\",\n        \"rate\": 10\n      }\n    ],\n    \"expiration_date\": null\n  },\n  {\n    \"id\": 78870632,\n    \"created_at\": \"2025-05-09T12:52:32Z\",\n    \"assignee_id\": 206039,\n    \"quantity\": \"1.000\",\n    \"price\": \"81.00\",\n    \"cost\": \"54.00000\",\n    \"margin_id\": null,\n    \"is_deduction_required\": false,\n    \"entity\": {\n      \"id\": 52110314,\n      \"type\": \"product\",\n      \"code\": \"\",\n      \"sku\": \"\",\n      \"sn_accounting\": false,\n      \"title\": \"Acer 23.KHJN2.002 SPEAKERs\",\n      \"image\": \"\",\n      \"thumbnail\": \"\",\n      \"uom\": {\n        \"id\": 1,\n        \"title\": \"pcs\",\n        \"description\": \"Pieces\"\n      },\n      \"is_hidden\": false\n    },\n    \"comment\": \"\",\n    \"write_offs\": [\n      {\n        \"cost\": 54,\n        \"cellId\": 3679564,\n        \"goodId\": 137183965,\n        \"quantity\": 1,\n        \"sernum_id\": null,\n        \"sernum_code\": null,\n        \"warehouseId\": 3649247,\n        \"repairOrderProductId\": 78870632\n      }\n    ],\n    \"is_refunded\": false,\n    \"discount\": {\n      \"type\": \"value\",\n      \"percentage\": 0,\n      \"amount\": \"0.00\",\n      \"sponsor\": \"staff\"\n    },\n    \"warranty\": {\n      \"period\": 0,\n      \"period_units\": \"days\"\n    },\n    \"taxes\": [\n      {\n        \"id\": 5628,\n        \"name\": \"State taxes\",\n        \"rate\": 10\n      }\n    ],\n    \"expiration_date\": null\n  }\n]"
          }
        },
        "schema": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "example": 78870627,
                "default": 0
              },
              "created_at": {
                "type": "string",
                "example": "2025-05-09T12:52:32Z"
              },
              "assignee_id": {
                "type": "integer",
                "example": 206039,
                "default": 0
              },
              "quantity": {
                "type": "string",
                "example": "1.000"
              },
              "price": {
                "type": "string",
                "example": "20.00"
              },
              "cost": {
                "type": "string",
                "example": "100.00000"
              },
              "margin_id": {},
              "is_deduction_required": {
                "type": "boolean",
                "example": false,
                "default": true
              },
              "entity": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "example": 38527538,
                    "default": 0
                  },
                  "type": {
                    "type": "string",
                    "example": "service"
                  },
                  "code": {
                    "type": "string",
                    "example": ""
                  },
                  "sku": {
                    "type": "string",
                    "example": ""
                  },
                  "sn_accounting": {
                    "type": "boolean",
                    "example": false,
                    "default": true
                  },
                  "title": {
                    "type": "string",
                    "example": "Diagnostics"
                  },
                  "image": {
                    "type": "string",
                    "example": ""
                  },
                  "thumbnail": {
                    "type": "string",
                    "example": ""
                  },
                  "uom": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer",
                        "example": 1,
                        "default": 0
                      },
                      "title": {
                        "type": "string",
                        "example": "pcs"
                      },
                      "description": {
                        "type": "string",
                        "example": "Pieces"
                      }
                    }
                  },
                  "is_hidden": {
                    "type": "boolean",
                    "example": false,
                    "default": true
                  }
                }
              },
              "comment": {
                "type": "string",
                "example": ""
              },
              "write_offs": {},
              "is_refunded": {
                "type": "boolean",
                "example": false,
                "default": true
              },
              "discount": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "example": "value"
                  },
                  "percentage": {
                    "type": "integer",
                    "example": 0,
                    "default": 0
                  },
                  "amount": {
                    "type": "string",
                    "example": "0.00"
                  },
                  "sponsor": {
                    "type": "string",
                    "example": "staff"
                  }
                }
              },
              "warranty": {
                "type": "object",
                "properties": {
                  "period": {
                    "type": "integer",
                    "example": 2,
                    "default": 0
                  },
                  "period_units": {
                    "type": "string",
                    "example": "days"
                  }
                }
              },
              "taxes": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 5628,
                      "default": 0
                    },
                    "name": {
                      "type": "string",
                      "example": "State taxes"
                    },
                    "rate": {
                      "type": "integer",
                      "example": 10,
                      "default": 0
                    }
                  }
                }
              },
              "expiration_date": {}
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /orders/{order_id}/items
**Summary:** Add Order Item

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### PATCH /orders/{order_id}/items/{item_id}
**Summary:** Update Order Item

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /orders/{order_id}/status
**Summary:** Update Order Status

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /orders/{order_id}/comments
**Summary:** Create Order Comment

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /orders/{order_id}/public-url
**Summary:** Get Order Public Page Url

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": ""
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": ""
          }
        }
      }
    }
  }
}
```

---

### GET /orders/statuses
**Summary:** Get Order Statuses

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /orders/types
**Summary:** Get Order Types

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /orders/custom-fields
**Summary:** Get Order Custom Fields

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /invoices
**Summary:** Get Invoices

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": [\n    {\n      \"id\": 309859,\n      \"id_label\": \"023\",\n      \"client\": {\n        \"id\": 31152179,\n        \"name\": \"Chris Jules\",\n        \"first_name\": \"Chris\",\n        \"last_name\": \"Jules\",\n        \"email\": \"chrissy_jules14@gmail.com\",\n        \"phone\": [\n          \"4487645389\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1734549792000,\n        \"created_at\": 1714652929000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 5,\n        \"sale_discount_services\": 5,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 968112000000\n        },\n        \"ad_campaign\": {\n          \"id\": 349683,\n          \"name\": \"Friend\"\n        }\n      },\n      \"payer\": {\n        \"id\": 31152179,\n        \"name\": \"Chris Jules\",\n        \"first_name\": \"Chris\",\n        \"last_name\": \"Jules\",\n        \"email\": \"chrissy_jules14@gmail.com\",\n        \"phone\": [\n          \"4487645389\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1734549792000,\n        \"created_at\": 1714652929000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 5,\n        \"sale_discount_services\": 5,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 968112000000\n        },\n        \"ad_campaign\": {\n          \"id\": 349683,\n          \"name\": \"Friend\"\n        }\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319497,\n        \"name\": \"Paid\",\n        \"color\": \"#5CB85C\",\n        \"group\": 10\n      },\n      \"created_at\": 1740480923000,\n      \"issue_date\": 1740480920000,\n      \"due_date\": 1743072920000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2847134,\n          \"order_id\": 52100568,\n          \"price\": 47.5,\n          \"title\": \"Delivery\",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        },\n        {\n          \"amount\": 1,\n          \"id\": 2847135,\n          \"order_id\": 52100586,\n          \"price\": 121.6,\n          \"title\": \"SSD replacement\",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 3,\n          \"warranty_period\": 1\n        },\n        {\n          \"amount\": 1,\n          \"id\": 2847136,\n          \"order_id\": 52100596,\n          \"price\": 47.5,\n          \"title\": \"Battery service \",\n          \"uom_id\": 1,\n          \"type\": 3,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 309847,\n      \"id_label\": \"022\",\n      \"client\": {\n        \"id\": 31905896,\n        \"name\": \"Tanya\",\n        \"first_name\": \"Tanya\",\n        \"last_name\": \"\",\n        \"email\": \"t.baczynska@orderry.com\",\n        \"phone\": [],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1721990430000,\n        \"created_at\": 1721990430000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 396022,\n          \"name\": \"Google Map\"\n        }\n      },\n      \"payer\": {\n        \"id\": 31905896,\n        \"name\": \"Tanya\",\n        \"first_name\": \"Tanya\",\n        \"last_name\": \"\",\n        \"email\": \"t.baczynska@orderry.com\",\n        \"phone\": [],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1721990430000,\n        \"created_at\": 1721990430000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 396022,\n          \"name\": \"Google Map\"\n        }\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319497,\n        \"name\": \"Paid\",\n        \"color\": \"#5CB85C\",\n        \"group\": 10\n      },\n      \"created_at\": 1740479799000,\n      \"issue_date\": 1740479789000,\n      \"due_date\": 1743071789000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2847060,\n          \"order_id\": 52100024,\n          \"price\": 50,\n          \"title\": \"Delivery\",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 309845,\n      \"id_label\": \"021\",\n      \"client\": {\n        \"id\": 33775229,\n        \"name\": \"Jerry Hallman\",\n        \"first_name\": \"Jerry\",\n        \"last_name\": \"Hallman\",\n        \"email\": \"jerry_jay1987@gmail.com\",\n        \"phone\": [\n          \"442345674567\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1740474841000,\n        \"created_at\": 1740474841000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"payer\": {\n        \"id\": 33775229,\n        \"name\": \"Jerry Hallman\",\n        \"first_name\": \"Jerry\",\n        \"last_name\": \"Hallman\",\n        \"email\": \"jerry_jay1987@gmail.com\",\n        \"phone\": [\n          \"442345674567\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1740474841000,\n        \"created_at\": 1740474841000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319497,\n        \"name\": \"Paid\",\n        \"color\": \"#5CB85C\",\n        \"group\": 10\n      },\n      \"created_at\": 1740479400000,\n      \"issue_date\": 1740479398000,\n      \"due_date\": 1743071398000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2847057,\n          \"order_id\": 52099829,\n          \"price\": 20,\n          \"title\": \"Engine filter replacement\",\n          \"uom_id\": 1,\n          \"type\": 3,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 309844,\n      \"id_label\": \"020\",\n      \"client\": {\n        \"id\": 31152179,\n        \"name\": \"Chris Jules\",\n        \"first_name\": \"Chris\",\n        \"last_name\": \"Jules\",\n        \"email\": \"chrissy_jules14@gmail.com\",\n        \"phone\": [\n          \"4487645389\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1734549792000,\n        \"created_at\": 1714652929000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 5,\n        \"sale_discount_services\": 5,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 968112000000\n        },\n        \"ad_campaign\": {\n          \"id\": 349683,\n          \"name\": \"Friend\"\n        }\n      },\n      \"payer\": {\n        \"id\": 31152179,\n        \"name\": \"Chris Jules\",\n        \"first_name\": \"Chris\",\n        \"last_name\": \"Jules\",\n        \"email\": \"chrissy_jules14@gmail.com\",\n        \"phone\": [\n          \"4487645389\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1734549792000,\n        \"created_at\": 1714652929000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 5,\n        \"sale_discount_services\": 5,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 968112000000\n        },\n        \"ad_campaign\": {\n          \"id\": 349683,\n          \"name\": \"Friend\"\n        }\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1740479325000,\n      \"issue_date\": 1740479321000,\n      \"due_date\": 1743071321000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2847056,\n          \"order_id\": 52099796,\n          \"price\": 76,\n          \"title\": \"Windows 10 eng reload, software, backup\",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 30,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 309649,\n      \"id_label\": \"019\",\n      \"client\": {\n        \"id\": 29071649,\n        \"name\": \"Marie\",\n        \"first_name\": \"Marie\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555974513\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1695729580000,\n        \"created_at\": 1695729580000,\n        \"discount_code\": \"\",\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 349685,\n          \"name\": \"Google Search\"\n        }\n      },\n      \"payer\": {\n        \"id\": 29071649,\n        \"name\": \"Marie\",\n        \"first_name\": \"Marie\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555974513\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1695729580000,\n        \"created_at\": 1695729580000,\n        \"discount_code\": \"\",\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 349685,\n          \"name\": \"Google Search\"\n        }\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319497,\n        \"name\": \"Paid\",\n        \"color\": \"#5CB85C\",\n        \"group\": 10\n      },\n      \"created_at\": 1740414531000,\n      \"issue_date\": 1740414523000,\n      \"due_date\": 1743006523000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2845360,\n          \"order_id\": 50475845,\n          \"price\": 100,\n          \"title\": \"Water Damage\",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 309648,\n      \"id_label\": \"018\",\n      \"client\": {\n        \"id\": 29553739,\n        \"name\": \"Luis\",\n        \"first_name\": \"Luis\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1699951438000,\n        \"created_at\": 1699951438000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"payer\": {\n        \"id\": 29553739,\n        \"name\": \"Luis\",\n        \"first_name\": \"Luis\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1699951438000,\n        \"created_at\": 1699951438000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1740414501000,\n      \"issue_date\": 1740414498000,\n      \"due_date\": 1743006498000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2845358,\n          \"order_id\": 51716662,\n          \"price\": 150,\n          \"title\": \"Diagnostics\",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 2,\n          \"warranty_period\": 0\n        },\n        {\n          \"amount\": 1,\n          \"id\": 2845359,\n          \"order_id\": 51716662,\n          \"price\": 47,\n          \"title\": \"Dynamic iPhone 11\",\n          \"uom_id\": 1,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"\",\n          \"article\": \"\",\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 308983,\n      \"id_label\": \"017\",\n      \"client\": {\n        \"id\": 31152179,\n        \"name\": \"Chris Jules\",\n        \"first_name\": \"Chris\",\n        \"last_name\": \"Jules\",\n        \"email\": \"chrissy_jules14@gmail.com\",\n        \"phone\": [\n          \"4487645389\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1734549792000,\n        \"created_at\": 1714652929000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 5,\n        \"sale_discount_services\": 5,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 968112000000\n        },\n        \"ad_campaign\": {\n          \"id\": 349683,\n          \"name\": \"Friend\"\n        }\n      },\n      \"payer\": {\n        \"id\": 31152179,\n        \"name\": \"Chris Jules\",\n        \"first_name\": \"Chris\",\n        \"last_name\": \"Jules\",\n        \"email\": \"chrissy_jules14@gmail.com\",\n        \"phone\": [\n          \"4487645389\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1734549792000,\n        \"created_at\": 1714652929000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 5,\n        \"sale_discount_services\": 5,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 968112000000\n        },\n        \"ad_campaign\": {\n          \"id\": 349683,\n          \"name\": \"Friend\"\n        }\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1740135439000,\n      \"issue_date\": 1740135429000,\n      \"due_date\": 1742727429000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2840415,\n          \"price\": 0,\n          \"title\": \"Recovery software\",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 306330,\n      \"id_label\": \"016\",\n      \"client\": {\n        \"id\": 29071672,\n        \"name\": \"John\",\n        \"first_name\": \"John\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555984561\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1727174480000,\n        \"created_at\": 1695729653000,\n        \"discount_code\": \"2900000000018\",\n        \"order_discount_services\": 10,\n        \"sale_discount_services\": 10,\n        \"discount_materials\": 15,\n        \"discount_goods_margin_id\": 387005,\n        \"custom_fields\": {\n          \"f7757287\": 810864000000\n        },\n        \"ad_campaign\": {}\n      },\n      \"payer\": {\n        \"id\": 29071672,\n        \"name\": \"John\",\n        \"first_name\": \"John\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555984561\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1727174480000,\n        \"created_at\": 1695729653000,\n        \"discount_code\": \"2900000000018\",\n        \"order_discount_services\": 10,\n        \"sale_discount_services\": 10,\n        \"discount_materials\": 15,\n        \"discount_goods_margin_id\": 387005,\n        \"custom_fields\": {\n          \"f7757287\": 810864000000\n        },\n        \"ad_campaign\": {}\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1739378512000,\n      \"issue_date\": 1739378480000,\n      \"due_date\": 1742402940000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2817327,\n          \"price\": 173,\n          \"title\": \"Apple watch\",\n          \"uom_id\": 1,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"\",\n          \"article\": \"\",\n          \"warranty\": 12,\n          \"warranty_period\": 1\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 306328,\n      \"id_label\": \"015\",\n      \"client\": {\n        \"id\": 29071672,\n        \"name\": \"John\",\n        \"first_name\": \"John\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555984561\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1727174480000,\n        \"created_at\": 1695729653000,\n        \"discount_code\": \"2900000000018\",\n        \"order_discount_services\": 10,\n        \"sale_discount_services\": 10,\n        \"discount_materials\": 15,\n        \"discount_goods_margin_id\": 387005,\n        \"custom_fields\": {\n          \"f7757287\": 810864000000\n        },\n        \"ad_campaign\": {}\n      },\n      \"payer\": {\n        \"id\": 29071672,\n        \"name\": \"John\",\n        \"first_name\": \"John\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555984561\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1727174480000,\n        \"created_at\": 1695729653000,\n        \"discount_code\": \"2900000000018\",\n        \"order_discount_services\": 10,\n        \"sale_discount_services\": 10,\n        \"discount_materials\": 15,\n        \"discount_goods_margin_id\": 387005,\n        \"custom_fields\": {\n          \"f7757287\": 810864000000\n        },\n        \"ad_campaign\": {}\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1739378216000,\n      \"issue_date\": 1739378189000,\n      \"due_date\": 1741970189000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2817317,\n          \"order_id\": 46487369,\n          \"price\": 150,\n          \"title\": \"Diagnostics\",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 2,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 301274,\n      \"id_label\": \"014\",\n      \"client\": {\n        \"id\": 29553739,\n        \"name\": \"Luis\",\n        \"first_name\": \"Luis\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1699951438000,\n        \"created_at\": 1699951438000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"payer\": {\n        \"id\": 29553739,\n        \"name\": \"Luis\",\n        \"first_name\": \"Luis\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1699951438000,\n        \"created_at\": 1699951438000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319498,\n        \"name\": \"Canceled\",\n        \"color\": \"#939699\",\n        \"group\": 11\n      },\n      \"created_at\": 1738003479000,\n      \"issue_date\": 1738003473000,\n      \"due_date\": 1740595473000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2779583,\n          \"price\": 0,\n          \"title\": \"Mulching and soil amendment\",\n          \"uom_id\": 29,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 301273,\n      \"id_label\": \"013\",\n      \"client\": {\n        \"id\": 31905896,\n        \"name\": \"Tanya\",\n        \"first_name\": \"Tanya\",\n        \"last_name\": \"\",\n        \"email\": \"t.baczynska@orderry.com\",\n        \"phone\": [],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1721990430000,\n        \"created_at\": 1721990430000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 396022,\n          \"name\": \"Google Map\"\n        }\n      },\n      \"payer\": {\n        \"id\": 31905896,\n        \"name\": \"Tanya\",\n        \"first_name\": \"Tanya\",\n        \"last_name\": \"\",\n        \"email\": \"t.baczynska@orderry.com\",\n        \"phone\": [],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1721990430000,\n        \"created_at\": 1721990430000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 396022,\n          \"name\": \"Google Map\"\n        }\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1738003470000,\n      \"issue_date\": 1738003463000,\n      \"due_date\": 1740595463000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2779582,\n          \"price\": 0,\n          \"title\": \"Deppa Crab\",\n          \"uom_id\": 1,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"DPC\",\n          \"article\": \"z928\",\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 301272,\n      \"id_label\": \"012\",\n      \"client\": {\n        \"id\": 31152179,\n        \"name\": \"Chris Jules\",\n        \"first_name\": \"Chris\",\n        \"last_name\": \"Jules\",\n        \"email\": \"chrissy_jules14@gmail.com\",\n        \"phone\": [\n          \"4487645389\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1734549792000,\n        \"created_at\": 1714652929000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 5,\n        \"sale_discount_services\": 5,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 968112000000\n        },\n        \"ad_campaign\": {\n          \"id\": 349683,\n          \"name\": \"Friend\"\n        }\n      },\n      \"payer\": {\n        \"id\": 31152179,\n        \"name\": \"Chris Jules\",\n        \"first_name\": \"Chris\",\n        \"last_name\": \"Jules\",\n        \"email\": \"chrissy_jules14@gmail.com\",\n        \"phone\": [\n          \"4487645389\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1734549792000,\n        \"created_at\": 1714652929000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 5,\n        \"sale_discount_services\": 5,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 968112000000\n        },\n        \"ad_campaign\": {\n          \"id\": 349683,\n          \"name\": \"Friend\"\n        }\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319496,\n        \"name\": \"Issued\",\n        \"color\": \"#F89200\",\n        \"group\": 9\n      },\n      \"created_at\": 1738003461000,\n      \"issue_date\": 1738055280000,\n      \"due_date\": 1741165680000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2780824,\n          \"price\": 52,\n          \"title\": \"Air Case Iphone 5\",\n          \"uom_id\": 9,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"\",\n          \"article\": \"m002\",\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 301271,\n      \"id_label\": \"011\",\n      \"client\": {\n        \"id\": 32283770,\n        \"name\": \"Diana\",\n        \"first_name\": \"Diana\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1727174855000,\n        \"created_at\": 1725624982000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 10,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 1725235200000\n        },\n        \"ad_campaign\": {\n          \"id\": 396022,\n          \"name\": \"Google Map\"\n        }\n      },\n      \"payer\": {\n        \"id\": 32283770,\n        \"name\": \"Diana\",\n        \"first_name\": \"Diana\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1727174855000,\n        \"created_at\": 1725624982000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 10,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 1725235200000\n        },\n        \"ad_campaign\": {\n          \"id\": 396022,\n          \"name\": \"Google Map\"\n        }\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319496,\n        \"name\": \"Issued\",\n        \"color\": \"#F89200\",\n        \"group\": 9\n      },\n      \"created_at\": 1738003451000,\n      \"issue_date\": 1738003443000,\n      \"due_date\": 1740595443000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2779580,\n          \"price\": 0,\n          \"title\": \"iPhone Software Reset\",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 293636,\n      \"id_label\": \"010\",\n      \"client\": {\n        \"id\": 29949017,\n        \"name\": \"Vikram\",\n        \"first_name\": \"Vikram\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"480000000000\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1703147329000,\n        \"created_at\": 1703147329000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"payer\": {\n        \"id\": 29949017,\n        \"name\": \"Vikram\",\n        \"first_name\": \"Vikram\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"480000000000\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1703147329000,\n        \"created_at\": 1703147329000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1735246488000,\n      \"issue_date\": 1735246463000,\n      \"due_date\": 1737838463000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2729513,\n          \"price\": 120,\n          \"title\": \"Touchpad Replacement\",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 293635,\n      \"id_label\": \"009\",\n      \"client\": {\n        \"id\": 27354461,\n        \"name\": \"Max\",\n        \"first_name\": \"Max\",\n        \"last_name\": \"\",\n        \"email\": \"max_test@remonline.app\",\n        \"phone\": [\n          \"48498465121\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1678960892000,\n        \"created_at\": 1678960892000,\n        \"discount_code\": \"\",\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"payer\": {\n        \"id\": 27354461,\n        \"name\": \"Max\",\n        \"first_name\": \"Max\",\n        \"last_name\": \"\",\n        \"email\": \"max_test@remonline.app\",\n        \"phone\": [\n          \"48498465121\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1678960892000,\n        \"created_at\": 1678960892000,\n        \"discount_code\": \"\",\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1735246462000,\n      \"issue_date\": 1735246436000,\n      \"due_date\": 1737838436000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2729512,\n          \"price\": 200,\n          \"title\": \"Battery iPad Mini 4 - A1546\",\n          \"uom_id\": 1,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"\",\n          \"article\": \"battery-ipad\",\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 293634,\n      \"id_label\": \"008\",\n      \"client\": {\n        \"id\": 27354472,\n        \"name\": \"Kate\",\n        \"first_name\": \"Kate\",\n        \"last_name\": \"\",\n        \"email\": \"kate_test@remonline.app\",\n        \"phone\": [\n          \"48454651894\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1719589120000,\n        \"created_at\": 1678960958000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 30,\n        \"sale_discount_services\": 30,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 426716,\n          \"name\": \"Website\"\n        }\n      },\n      \"payer\": {\n        \"id\": 27354472,\n        \"name\": \"Kate\",\n        \"first_name\": \"Kate\",\n        \"last_name\": \"\",\n        \"email\": \"kate_test@remonline.app\",\n        \"phone\": [\n          \"48454651894\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1719589120000,\n        \"created_at\": 1678960958000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 30,\n        \"sale_discount_services\": 30,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 426716,\n          \"name\": \"Website\"\n        }\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1735246426000,\n      \"issue_date\": 1735246401000,\n      \"due_date\": 1737838401000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2729511,\n          \"price\": 50,\n          \"title\": \"Charging socket iPhone 7 White\",\n          \"uom_id\": 1,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"7G123\",\n          \"article\": \"DOCK\",\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 293633,\n      \"id_label\": \"007\",\n      \"client\": {\n        \"id\": 29071672,\n        \"name\": \"John\",\n        \"first_name\": \"John\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555984561\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1727174480000,\n        \"created_at\": 1695729653000,\n        \"discount_code\": \"2900000000018\",\n        \"order_discount_services\": 10,\n        \"sale_discount_services\": 10,\n        \"discount_materials\": 15,\n        \"discount_goods_margin_id\": 387005,\n        \"custom_fields\": {\n          \"f7757287\": 810864000000\n        },\n        \"ad_campaign\": {}\n      },\n      \"payer\": {\n        \"id\": 29071672,\n        \"name\": \"John\",\n        \"first_name\": \"John\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555984561\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1727174480000,\n        \"created_at\": 1695729653000,\n        \"discount_code\": \"2900000000018\",\n        \"order_discount_services\": 10,\n        \"sale_discount_services\": 10,\n        \"discount_materials\": 15,\n        \"discount_goods_margin_id\": 387005,\n        \"custom_fields\": {\n          \"f7757287\": 810864000000\n        },\n        \"ad_campaign\": {}\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1735246399000,\n      \"issue_date\": 1735246378000,\n      \"due_date\": 1737838378000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2729510,\n          \"price\": 90,\n          \"title\": \"Mulching and soil amendment\",\n          \"uom_id\": 29,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 293632,\n      \"id_label\": \"006\",\n      \"client\": {\n        \"id\": 29061708,\n        \"name\": \"Robert\",\n        \"first_name\": \"Robert\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555987454\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1695641254000,\n        \"created_at\": 1695641254000,\n        \"discount_code\": \"\",\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 349686,\n          \"name\": \"FB\"\n        }\n      },\n      \"payer\": {\n        \"id\": 29061708,\n        \"name\": \"Robert\",\n        \"first_name\": \"Robert\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555987454\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1695641254000,\n        \"created_at\": 1695641254000,\n        \"discount_code\": \"\",\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 349686,\n          \"name\": \"FB\"\n        }\n      },\n      \"status\": 2,\n      \"status_full\": {\n        \"id\": 3319497,\n        \"name\": \"Paid\",\n        \"color\": \"#5CB85C\",\n        \"group\": 10\n      },\n      \"created_at\": 1735246376000,\n      \"issue_date\": 1735246348000,\n      \"due_date\": 1737838348000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2779573,\n          \"price\": 450,\n          \"title\": \"Apple iPhone 15 Pro 256GB Natural Titanium\",\n          \"uom_id\": 1,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"15P25611\",\n          \"article\": \"\",\n          \"warranty\": 12,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206038\n    },\n    {\n      \"id\": 259733,\n      \"id_label\": \"005\",\n      \"client\": {\n        \"id\": 27354451,\n        \"name\": \"David\",\n        \"first_name\": \"David\",\n        \"last_name\": \"\",\n        \"email\": \"t.baczynska1@orderry.com\",\n        \"phone\": [\n          \"48154684516\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1732817986000,\n        \"created_at\": 1678960850000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 10,\n        \"sale_discount_services\": 10,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 1732665600000\n        },\n        \"ad_campaign\": {\n          \"id\": 396022,\n          \"name\": \"Google Map\"\n        }\n      },\n      \"payer\": {\n        \"id\": 27354451,\n        \"name\": \"David\",\n        \"first_name\": \"David\",\n        \"last_name\": \"\",\n        \"email\": \"t.baczynska1@orderry.com\",\n        \"phone\": [\n          \"48154684516\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1732817986000,\n        \"created_at\": 1678960850000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 10,\n        \"sale_discount_services\": 10,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 1732665600000\n        },\n        \"ad_campaign\": {\n          \"id\": 396022,\n          \"name\": \"Google Map\"\n        }\n      },\n      \"status\": 2,\n      \"status_full\": {\n        \"id\": 3319497,\n        \"name\": \"Paid\",\n        \"color\": \"#5CB85C\",\n        \"group\": 10\n      },\n      \"created_at\": 1724419814000,\n      \"issue_date\": 1724419806000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2656032,\n          \"price\": 0,\n          \"title\": \"Flip Cover - iPhone 4|4S\",\n          \"uom_id\": 1,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"FLCIP4s\",\n          \"article\": \"a291\",\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ]\n    },\n    {\n      \"id\": 259722,\n      \"id_label\": \"004\",\n      \"client\": {\n        \"id\": 31152179,\n        \"name\": \"Chris Jules\",\n        \"first_name\": \"Chris\",\n        \"last_name\": \"Jules\",\n        \"email\": \"chrissy_jules14@gmail.com\",\n        \"phone\": [\n          \"4487645389\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1734549792000,\n        \"created_at\": 1714652929000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 5,\n        \"sale_discount_services\": 5,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 968112000000\n        },\n        \"ad_campaign\": {\n          \"id\": 349683,\n          \"name\": \"Friend\"\n        }\n      },\n      \"payer\": {\n        \"id\": 31152179,\n        \"name\": \"Chris Jules\",\n        \"first_name\": \"Chris\",\n        \"last_name\": \"Jules\",\n        \"email\": \"chrissy_jules14@gmail.com\",\n        \"phone\": [\n          \"4487645389\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1734549792000,\n        \"created_at\": 1714652929000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 5,\n        \"sale_discount_services\": 5,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 968112000000\n        },\n        \"ad_campaign\": {\n          \"id\": 349683,\n          \"name\": \"Friend\"\n        }\n      },\n      \"status\": 2,\n      \"status_full\": {\n        \"id\": 3319497,\n        \"name\": \"Paid\",\n        \"color\": \"#5CB85C\",\n        \"group\": 10\n      },\n      \"created_at\": 1724417188000,\n      \"issue_date\": 1724417155000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2480393,\n          \"price\": 10,\n          \"title\": \"Battery iPhone (Normal) - SE\",\n          \"uom_id\": 1,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"\",\n          \"article\": \"battery-iphone-n\",\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        },\n        {\n          \"amount\": 2,\n          \"id\": 2480394,\n          \"price\": 10,\n          \"title\": \"Cabin filter\",\n          \"uom_id\": 1,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"\",\n          \"article\": \"\",\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ]\n    },\n    {\n      \"id\": 197064,\n      \"id_label\": \"003\",\n      \"client\": {\n        \"id\": 29061615,\n        \"name\": \"Nick\",\n        \"first_name\": \"Nick\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48449845465\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1695640846000,\n        \"created_at\": 1695640846000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"payer\": {\n        \"id\": 29061615,\n        \"name\": \"Nick\",\n        \"first_name\": \"Nick\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48449845465\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1695640846000,\n        \"created_at\": 1695640846000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"status\": 2,\n      \"status_full\": {\n        \"id\": 3319497,\n        \"name\": \"Paid\",\n        \"color\": \"#5CB85C\",\n        \"group\": 10\n      },\n      \"created_at\": 1700647537000,\n      \"issue_date\": 1700647527000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 1955938,\n          \"order_id\": 44889843,\n          \"price\": 0,\n          \"title\": \"3/4\\\" GF 15/26 Iron Pump Flange Pair (NPT)\",\n          \"uom_id\": 21,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"\",\n          \"article\": \"519601\",\n          \"warranty\": 3,\n          \"warranty_period\": 1\n        }\n      ]\n    },\n    {\n      \"id\": 195399,\n      \"id_label\": \"002\",\n      \"client\": {\n        \"id\": 29061708,\n        \"name\": \"Robert\",\n        \"first_name\": \"Robert\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555987454\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1695641254000,\n        \"created_at\": 1695641254000,\n        \"discount_code\": \"\",\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 349686,\n          \"name\": \"FB\"\n        }\n      },\n      \"payer\": {\n        \"id\": 29061708,\n        \"name\": \"Robert\",\n        \"first_name\": \"Robert\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555987454\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1695641254000,\n        \"created_at\": 1695641254000,\n        \"discount_code\": \"\",\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 349686,\n          \"name\": \"FB\"\n        }\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1699955093000,\n      \"issue_date\": 1699912800000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 1940438,\n          \"order_id\": 43961205,\n          \"price\": 50,\n          \"title\": \"Charging Port Repair testing TEST \",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        },\n        {\n          \"amount\": 1,\n          \"id\": 1940439,\n          \"order_id\": 43961205,\n          \"price\": 0,\n          \"title\": \"100 ft Reel of Freeze Free Pipe Heating Cable\",\n          \"uom_id\": 1,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"\",\n          \"article\": \"\",\n          \"warranty\": 3,\n          \"warranty_period\": 1\n        }\n      ]\n    },\n    {\n      \"id\": 189636,\n      \"id_label\": \"001\",\n      \"client\": {\n        \"id\": 29071649,\n        \"name\": \"Marie\",\n        \"first_name\": \"Marie\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555974513\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1695729580000,\n        \"created_at\": 1695729580000,\n        \"discount_code\": \"\",\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 349685,\n          \"name\": \"Google Search\"\n        }\n      },\n      \"payer\": {\n        \"id\": 29071649,\n        \"name\": \"Marie\",\n        \"first_name\": \"Marie\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555974513\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1695729580000,\n        \"created_at\": 1695729580000,\n        \"discount_code\": \"\",\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 349685,\n          \"name\": \"Google Search\"\n        }\n      },\n      \"status\": 1,\n      \"status_full\": {\n        \"id\": 3319496,\n        \"name\": \"Issued\",\n        \"color\": \"#F89200\",\n        \"group\": 9\n      },\n      \"created_at\": 1697535925000,\n      \"issue_date\": 1697535914000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 1889175,\n          \"order_id\": 43980997,\n          \"price\": 50,\n          \"title\": \"Charging Port Repair testing TEST \",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ]\n    }\n  ],\n  \"page\": 1,\n  \"count\": 23,\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "example": 309859,
                    "default": 0
                  },
                  "id_label": {
                    "type": "string",
                    "example": "023"
                  },
                  "client": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer",
                        "example": 31152179,
                        "default": 0
                      },
                      "name": {
                        "type": "string",
                        "example": "Chris Jules"
                      },
                      "first_name": {
                        "type": "string",
                        "example": "Chris"
                      },
                      "last_name": {
                        "type": "string",
                        "example": "Jules"
                      },
                      "email": {
                        "type": "string",
                        "example": "chrissy_jules14@gmail.com"
                      },
                      "phone": {
                        "type": "array",
                        "items": {
                          "type": "string",
                          "example": "4487645389"
                        }
                      },
                      "notes": {
                        "type": "string",
                        "example": ""
                      },
                      "address": {
                        "type": "string",
                        "example": ""
                      },
                      "supplier": {
                        "type": "boolean",
                        "example": false,
                        "default": true
                      },
                      "juridical": {
                        "type": "boolean",
                        "example": false,
                        "default": true
                      },
                      "conflicted": {
                        "type": "boolean",
                        "example": false,
                        "default": true
                      },
                      "modified_at": {
                        "type": "integer",
                        "example": 1734549792000,
                        "default": 0
                      },
                      "created_at": {
                        "type": "integer",
                        "example": 1714652929000,
                        "default": 0
                      },
                      "discount_code": {
                        "type": "string",
                        "example": ""
                      },
                      "discount_goods": {
                        "type": "integer",
                        "example": 0,
                        "default": 0
                      },
                      "order_discount_services": {
                        "type": "integer",
                        "example": 5,
                        "default": 0
                      },
                      "sale_discount_services": {
                        "type": "integer",
                        "example": 5,
                        "default": 0
                      },
                      "discount_materials": {
                        "type": "integer",
                        "example": 0,
                        "default": 0
                      },
                      "custom_fields": {
                        "type": "object",
                        "properties": {
                          "f7757287": {
                            "type": "integer",
                            "example": 968112000000,
                            "default": 0
                          }
                        }
                      },
                      "ad_campaign": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer",
                            "example": 349683,
                            "default": 0
                          },
                          "name": {
                            "type": "string",
                            "example": "Friend"
                          }
                        }
                      }
                    }
                  },
                  "payer": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer",
                        "example": 31152179,
                        "default": 0
                      },
                      "name": {
                        "type": "string",
                        "example": "Chris Jules"
                      },
                      "first_name": {
                        "type": "string",
                        "example": "Chris"
                      },
                      "last_name": {
                        "type": "string",
                        "example": "Jules"
                      },
                      "email": {
                        "type": "string",
                        "example": "chrissy_jules14@gmail.com"
                      },
                      "phone": {
                        "type": "array",
                        "items": {
                          "type": "string",
                          "example": "4487645389"
                        }
                      },
                      "notes": {
                        "type": "string",
                        "example": ""
                      },
                      "address": {
                        "type": "string",
                        "example": ""
                      },
                      "supplier": {
                        "type": "boolean",
                        "example": false,
                        "default": true
                      },
                      "juridical": {
                        "type": "boolean",
                        "example": false,
                        "default": true
                      },
                      "conflicted": {
                        "type": "boolean",
                        "example": false,
                        "default": true
                      },
                      "modified_at": {
                        "type": "integer",
                        "example": 1734549792000,
                        "default": 0
                      },
                      "created_at": {
                        "type": "integer",
                        "example": 1714652929000,
                        "default": 0
                      },
                      "discount_code": {
                        "type": "string",
                        "example": ""
                      },
                      "discount_goods": {
                        "type": "integer",
                        "example": 0,
                        "default": 0
                      },
                      "order_discount_services": {
                        "type": "integer",
                        "example": 5,
                        "default": 0
                      },
                      "sale_discount_services": {
                        "type": "integer",
                        "example": 5,
                        "default": 0
                      },
                      "discount_materials": {
                        "type": "integer",
                        "example": 0,
                        "default": 0
                      },
                      "custom_fields": {
                        "type": "object",
                        "properties": {
                          "f7757287": {
                            "type": "integer",
                            "example": 968112000000,
                            "default": 0
                          }
                        }
                      },
                      "ad_campaign": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer",
                            "example": 349683,
                            "default": 0
                          },
                          "name": {
                            "type": "string",
                            "example": "Friend"
                          }
                        }
                      }
                    }
                  },
                  "status": {
                    "type": "integer",
                    "example": 0,
                    "default": 0
                  },
                  "status_full": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer",
                        "example": 3319497,
                        "default": 0
                      },
                      "name": {
                        "type": "string",
                        "example": "Paid"
                      },
                      "color": {
                        "type": "string",
                        "example": "#5CB85C"
                      },
                      "group": {
                        "type": "integer",
                        "example": 10,
                        "default": 0
                      }
                    }
                  },
                  "created_at": {
                    "type": "integer",
                    "example": 1740480923000,
                    "default": 0
                  },
                  "issue_date": {
                    "type": "integer",
                    "example": 1740480920000,
                    "default": 0
                  },
                  "due_date": {
                    "type": "integer",
                    "example": 1743072920000,
                    "default": 0
                  },
                  "payment_type": {
                    "type": "integer",
                    "example": 0,
                    "default": 0
                  },
                  "products": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "amount": {
                          "type": "integer",
                          "example": 1,
                          "default": 0
                        },
                        "id": {
                          "type": "integer",
                          "example": 2847134,
                          "default": 0
                        },
                        "order_id": {
                          "type": "integer",
                          "example": 52100568,
                          "default": 0
                        },
                        "price": {
                          "type": "number",
                          "example": 47.5,
                          "default": 0
                        },
                        "title": {
                          "type": "string",
                          "example": "Delivery"
                        },
                        "uom_id": {
                          "type": "integer",
                          "example": 1,
                          "default": 0
                        },
                        "type": {
                          "type": "integer",
                          "example": 2,
                          "default": 0
                        },
                        "service": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "warranty": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "warranty_period": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        }
                      }
                    }
                  },
                  "manager_id": {
                    "type": "integer",
                    "example": 206037,
                    "default": 0
                  }
                }
              }
            },
            "page": {
              "type": "integer",
              "example": 1,
              "default": 0
            },
            "count": {
              "type": "integer",
              "example": 23,
              "default": 0
            },
            "success": {
              "type": "boolean",
              "example": true,
              "default": true
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /invoices/{invoice_id}
**Summary:** Get Invoice by ID

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": {\n    \"id\": 309859,\n    \"id_label\": \"023\",\n    \"client\": {\n      \"id\": 31152179,\n      \"name\": \"Chris Jules\",\n      \"first_name\": \"Chris\",\n      \"last_name\": \"Jules\",\n      \"email\": \"chrissy_jules14@gmail.com\",\n      \"phone\": [\n        \"4487645389\"\n      ],\n      \"notes\": \"\",\n      \"address\": \"\",\n      \"supplier\": false,\n      \"juridical\": false,\n      \"conflicted\": false,\n      \"modified_at\": 1734549792000,\n      \"created_at\": 1714652929000,\n      \"discount_code\": \"\",\n      \"discount_goods\": 0,\n      \"order_discount_services\": 5,\n      \"sale_discount_services\": 5,\n      \"discount_materials\": 0,\n      \"custom_fields\": {\n        \"f7757287\": 968112000000\n      },\n      \"ad_campaign\": {\n        \"id\": 349683,\n        \"name\": \"Friend\"\n      }\n    },\n    \"payer\": {\n      \"id\": 31152179,\n      \"name\": \"Chris Jules\",\n      \"first_name\": \"Chris\",\n      \"last_name\": \"Jules\",\n      \"email\": \"chrissy_jules14@gmail.com\",\n      \"phone\": [\n        \"4487645389\"\n      ],\n      \"notes\": \"\",\n      \"address\": \"\",\n      \"supplier\": false,\n      \"juridical\": false,\n      \"conflicted\": false,\n      \"modified_at\": 1734549792000,\n      \"created_at\": 1714652929000,\n      \"discount_code\": \"\",\n      \"discount_goods\": 0,\n      \"order_discount_services\": 5,\n      \"sale_discount_services\": 5,\n      \"discount_materials\": 0,\n      \"custom_fields\": {\n        \"f7757287\": 968112000000\n      },\n      \"ad_campaign\": {\n        \"id\": 349683,\n        \"name\": \"Friend\"\n      }\n    },\n    \"status\": 0,\n    \"status_full\": {\n      \"id\": 3319497,\n      \"name\": \"Paid\",\n      \"color\": \"#5CB85C\",\n      \"group\": 10\n    },\n    \"created_at\": 1740480923000,\n    \"issue_date\": 1740480920000,\n    \"due_date\": 1743072920000,\n    \"payment_type\": 0,\n    \"products\": [\n      {\n        \"amount\": 1,\n        \"id\": 2847134,\n        \"order_id\": 52100568,\n        \"price\": 47.5,\n        \"title\": \"Delivery\",\n        \"uom_id\": 1,\n        \"type\": 2,\n        \"service\": true,\n        \"warranty\": 0,\n        \"warranty_period\": 0\n      },\n      {\n        \"amount\": 1,\n        \"id\": 2847135,\n        \"order_id\": 52100586,\n        \"price\": 121.6,\n        \"title\": \"SSD replacement\",\n        \"uom_id\": 1,\n        \"type\": 2,\n        \"service\": true,\n        \"warranty\": 3,\n        \"warranty_period\": 1\n      },\n      {\n        \"amount\": 1,\n        \"id\": 2847136,\n        \"order_id\": 52100596,\n        \"price\": 47.5,\n        \"title\": \"Battery service \",\n        \"uom_id\": 1,\n        \"type\": 3,\n        \"service\": true,\n        \"warranty\": 0,\n        \"warranty_period\": 0\n      }\n    ],\n    \"manager_id\": 206037\n  },\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer",
                  "example": 309859,
                  "default": 0
                },
                "id_label": {
                  "type": "string",
                  "example": "023"
                },
                "client": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 31152179,
                      "default": 0
                    },
                    "name": {
                      "type": "string",
                      "example": "Chris Jules"
                    },
                    "first_name": {
                      "type": "string",
                      "example": "Chris"
                    },
                    "last_name": {
                      "type": "string",
                      "example": "Jules"
                    },
                    "email": {
                      "type": "string",
                      "example": "chrissy_jules14@gmail.com"
                    },
                    "phone": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "example": "4487645389"
                      }
                    },
                    "notes": {
                      "type": "string",
                      "example": ""
                    },
                    "address": {
                      "type": "string",
                      "example": ""
                    },
                    "supplier": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "juridical": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "conflicted": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "modified_at": {
                      "type": "integer",
                      "example": 1734549792000,
                      "default": 0
                    },
                    "created_at": {
                      "type": "integer",
                      "example": 1714652929000,
                      "default": 0
                    },
                    "discount_code": {
                      "type": "string",
                      "example": ""
                    },
                    "discount_goods": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "order_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "sale_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "discount_materials": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "custom_fields": {
                      "type": "object",
                      "properties": {
                        "f7757287": {
                          "type": "integer",
                          "example": 968112000000,
                          "default": 0
                        }
                      }
                    },
                    "ad_campaign": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 349683,
                          "default": 0
                        },
                        "name": {
                          "type": "string",
                          "example": "Friend"
                        }
                      }
                    }
                  }
                },
                "payer": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 31152179,
                      "default": 0
                    },
                    "name": {
                      "type": "string",
                      "example": "Chris Jules"
                    },
                    "first_name": {
                      "type": "string",
                      "example": "Chris"
                    },
                    "last_name": {
                      "type": "string",
                      "example": "Jules"
                    },
                    "email": {
                      "type": "string",
                      "example": "chrissy_jules14@gmail.com"
                    },
                    "phone": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "example": "4487645389"
                      }
                    },
                    "notes": {
                      "type": "string",
                      "example": ""
                    },
                    "address": {
                      "type": "string",
                      "example": ""
                    },
                    "supplier": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "juridical": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "conflicted": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "modified_at": {
                      "type": "integer",
                      "example": 1734549792000,
                      "default": 0
                    },
                    "created_at": {
                      "type": "integer",
                      "example": 1714652929000,
                      "default": 0
                    },
                    "discount_code": {
                      "type": "string",
                      "example": ""
                    },
                    "discount_goods": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "order_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "sale_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "discount_materials": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "custom_fields": {
                      "type": "object",
                      "properties": {
                        "f7757287": {
                          "type": "integer",
                          "example": 968112000000,
                          "default": 0
                        }
                      }
                    },
                    "ad_campaign": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 349683,
                          "default": 0
                        },
                        "name": {
                          "type": "string",
                          "example": "Friend"
                        }
                      }
                    }
                  }
                },
                "status": {
                  "type": "integer",
                  "example": 0,
                  "default": 0
                },
                "status_full": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 3319497,
                      "default": 0
                    },
                    "name": {
                      "type": "string",
                      "example": "Paid"
                    },
                    "color": {
                      "type": "string",
                      "example": "#5CB85C"
                    },
                    "group": {
                      "type": "integer",
                      "example": 10,
                      "default": 0
                    }
                  }
                },
                "created_at": {
                  "type": "integer",
                  "example": 1740480923000,
                  "default": 0
                },
                "issue_date": {
                  "type": "integer",
                  "example": 1740480920000,
                  "default": 0
                },
                "due_date": {
                  "type": "integer",
                  "example": 1743072920000,
                  "default": 0
                },
                "payment_type": {
                  "type": "integer",
                  "example": 0,
                  "default": 0
                },
                "products": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "amount": {
                        "type": "integer",
                        "example": 1,
                        "default": 0
                      },
                      "id": {
                        "type": "integer",
                        "example": 2847134,
                        "default": 0
                      },
                      "order_id": {
                        "type": "integer",
                        "example": 52100568,
                        "default": 0
                      },
                      "price": {
                        "type": "number",
                        "example": 47.5,
                        "default": 0
                      },
                      "title": {
                        "type": "string",
                        "example": "Delivery"
                      },
                      "uom_id": {
                        "type": "integer",
                        "example": 1,
                        "default": 0
                      },
                      "type": {
                        "type": "integer",
                        "example": 2,
                        "default": 0
                      },
                      "service": {
                        "type": "boolean",
                        "example": true,
                        "default": true
                      },
                      "warranty": {
                        "type": "integer",
                        "example": 0,
                        "default": 0
                      },
                      "warranty_period": {
                        "type": "integer",
                        "example": 0,
                        "default": 0
                      }
                    }
                  }
                },
                "manager_id": {
                  "type": "integer",
                  "example": 206037,
                  "default": 0
                }
              }
            },
            "success": {
              "type": "boolean",
              "example": true,
              "default": true
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /invoices/{invoice_id}/items
**Summary:** Get Invoice Items

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": {\n    \"id\": 309859,\n    \"id_label\": \"023\",\n    \"client\": {\n      \"id\": 31152179,\n      \"name\": \"Chris Jules\",\n      \"first_name\": \"Chris\",\n      \"last_name\": \"Jules\",\n      \"email\": \"chrissy_jules14@gmail.com\",\n      \"phone\": [\n        \"4487645389\"\n      ],\n      \"notes\": \"\",\n      \"address\": \"\",\n      \"supplier\": false,\n      \"juridical\": false,\n      \"conflicted\": false,\n      \"modified_at\": 1734549792000,\n      \"created_at\": 1714652929000,\n      \"discount_code\": \"\",\n      \"discount_goods\": 0,\n      \"order_discount_services\": 5,\n      \"sale_discount_services\": 5,\n      \"discount_materials\": 0,\n      \"custom_fields\": {\n        \"f7757287\": 968112000000\n      },\n      \"ad_campaign\": {\n        \"id\": 349683,\n        \"name\": \"Friend\"\n      }\n    },\n    \"payer\": {\n      \"id\": 31152179,\n      \"name\": \"Chris Jules\",\n      \"first_name\": \"Chris\",\n      \"last_name\": \"Jules\",\n      \"email\": \"chrissy_jules14@gmail.com\",\n      \"phone\": [\n        \"4487645389\"\n      ],\n      \"notes\": \"\",\n      \"address\": \"\",\n      \"supplier\": false,\n      \"juridical\": false,\n      \"conflicted\": false,\n      \"modified_at\": 1734549792000,\n      \"created_at\": 1714652929000,\n      \"discount_code\": \"\",\n      \"discount_goods\": 0,\n      \"order_discount_services\": 5,\n      \"sale_discount_services\": 5,\n      \"discount_materials\": 0,\n      \"custom_fields\": {\n        \"f7757287\": 968112000000\n      },\n      \"ad_campaign\": {\n        \"id\": 349683,\n        \"name\": \"Friend\"\n      }\n    },\n    \"status\": 0,\n    \"status_full\": {\n      \"id\": 3319497,\n      \"name\": \"Paid\",\n      \"color\": \"#5CB85C\",\n      \"group\": 10\n    },\n    \"created_at\": 1740480923000,\n    \"issue_date\": 1740480920000,\n    \"due_date\": 1743072920000,\n    \"payment_type\": 0,\n    \"products\": [\n      {\n        \"amount\": 1,\n        \"id\": 2847134,\n        \"order_id\": 52100568,\n        \"price\": 47.5,\n        \"title\": \"Delivery\",\n        \"uom_id\": 1,\n        \"type\": 2,\n        \"service\": true,\n        \"warranty\": 0,\n        \"warranty_period\": 0\n      },\n      {\n        \"amount\": 1,\n        \"id\": 2847135,\n        \"order_id\": 52100586,\n        \"price\": 121.6,\n        \"title\": \"SSD replacement\",\n        \"uom_id\": 1,\n        \"type\": 2,\n        \"service\": true,\n        \"warranty\": 3,\n        \"warranty_period\": 1\n      },\n      {\n        \"amount\": 1,\n        \"id\": 2847136,\n        \"order_id\": 52100596,\n        \"price\": 47.5,\n        \"title\": \"Battery service \",\n        \"uom_id\": 1,\n        \"type\": 3,\n        \"service\": true,\n        \"warranty\": 0,\n        \"warranty_period\": 0\n      }\n    ],\n    \"manager_id\": 206037\n  },\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer",
                  "example": 309859,
                  "default": 0
                },
                "id_label": {
                  "type": "string",
                  "example": "023"
                },
                "client": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 31152179,
                      "default": 0
                    },
                    "name": {
                      "type": "string",
                      "example": "Chris Jules"
                    },
                    "first_name": {
                      "type": "string",
                      "example": "Chris"
                    },
                    "last_name": {
                      "type": "string",
                      "example": "Jules"
                    },
                    "email": {
                      "type": "string",
                      "example": "chrissy_jules14@gmail.com"
                    },
                    "phone": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "example": "4487645389"
                      }
                    },
                    "notes": {
                      "type": "string",
                      "example": ""
                    },
                    "address": {
                      "type": "string",
                      "example": ""
                    },
                    "supplier": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "juridical": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "conflicted": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "modified_at": {
                      "type": "integer",
                      "example": 1734549792000,
                      "default": 0
                    },
                    "created_at": {
                      "type": "integer",
                      "example": 1714652929000,
                      "default": 0
                    },
                    "discount_code": {
                      "type": "string",
                      "example": ""
                    },
                    "discount_goods": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "order_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "sale_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "discount_materials": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "custom_fields": {
                      "type": "object",
                      "properties": {
                        "f7757287": {
                          "type": "integer",
                          "example": 968112000000,
                          "default": 0
                        }
                      }
                    },
                    "ad_campaign": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 349683,
                          "default": 0
                        },
                        "name": {
                          "type": "string",
                          "example": "Friend"
                        }
                      }
                    }
                  }
                },
                "payer": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 31152179,
                      "default": 0
                    },
                    "name": {
                      "type": "string",
                      "example": "Chris Jules"
                    },
                    "first_name": {
                      "type": "string",
                      "example": "Chris"
                    },
                    "last_name": {
                      "type": "string",
                      "example": "Jules"
                    },
                    "email": {
                      "type": "string",
                      "example": "chrissy_jules14@gmail.com"
                    },
                    "phone": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "example": "4487645389"
                      }
                    },
                    "notes": {
                      "type": "string",
                      "example": ""
                    },
                    "address": {
                      "type": "string",
                      "example": ""
                    },
                    "supplier": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "juridical": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "conflicted": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "modified_at": {
                      "type": "integer",
                      "example": 1734549792000,
                      "default": 0
                    },
                    "created_at": {
                      "type": "integer",
                      "example": 1714652929000,
                      "default": 0
                    },
                    "discount_code": {
                      "type": "string",
                      "example": ""
                    },
                    "discount_goods": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "order_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "sale_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "discount_materials": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "custom_fields": {
                      "type": "object",
                      "properties": {
                        "f7757287": {
                          "type": "integer",
                          "example": 968112000000,
                          "default": 0
                        }
                      }
                    },
                    "ad_campaign": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 349683,
                          "default": 0
                        },
                        "name": {
                          "type": "string",
                          "example": "Friend"
                        }
                      }
                    }
                  }
                },
                "status": {
                  "type": "integer",
                  "example": 0,
                  "default": 0
                },
                "status_full": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 3319497,
                      "default": 0
                    },
                    "name": {
                      "type": "string",
                      "example": "Paid"
                    },
                    "color": {
                      "type": "string",
                      "example": "#5CB85C"
                    },
                    "group": {
                      "type": "integer",
                      "example": 10,
                      "default": 0
                    }
                  }
                },
                "created_at": {
                  "type": "integer",
                  "example": 1740480923000,
                  "default": 0
                },
                "issue_date": {
                  "type": "integer",
                  "example": 1740480920000,
                  "default": 0
                },
                "due_date": {
                  "type": "integer",
                  "example": 1743072920000,
                  "default": 0
                },
                "payment_type": {
                  "type": "integer",
                  "example": 0,
                  "default": 0
                },
                "products": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "amount": {
                        "type": "integer",
                        "example": 1,
                        "default": 0
                      },
                      "id": {
                        "type": "integer",
                        "example": 2847134,
                        "default": 0
                      },
                      "order_id": {
                        "type": "integer",
                        "example": 52100568,
                        "default": 0
                      },
                      "price": {
                        "type": "number",
                        "example": 47.5,
                        "default": 0
                      },
                      "title": {
                        "type": "string",
                        "example": "Delivery"
                      },
                      "uom_id": {
                        "type": "integer",
                        "example": 1,
                        "default": 0
                      },
                      "type": {
                        "type": "integer",
                        "example": 2,
                        "default": 0
                      },
                      "service": {
                        "type": "boolean",
                        "example": true,
                        "default": true
                      },
                      "warranty": {
                        "type": "integer",
                        "example": 0,
                        "default": 0
                      },
                      "warranty_period": {
                        "type": "integer",
                        "example": 0,
                        "default": 0
                      }
                    }
                  }
                },
                "manager_id": {
                  "type": "integer",
                  "example": 206037,
                  "default": 0
                }
              }
            },
            "success": {
              "type": "boolean",
              "example": true,
              "default": true
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /invoices/{invoice_id}/items/{item_id}
**Summary:** Get Invoice Item by ID

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": {\n    \"id\": 309859,\n    \"id_label\": \"023\",\n    \"client\": {\n      \"id\": 31152179,\n      \"name\": \"Chris Jules\",\n      \"first_name\": \"Chris\",\n      \"last_name\": \"Jules\",\n      \"email\": \"chrissy_jules14@gmail.com\",\n      \"phone\": [\n        \"4487645389\"\n      ],\n      \"notes\": \"\",\n      \"address\": \"\",\n      \"supplier\": false,\n      \"juridical\": false,\n      \"conflicted\": false,\n      \"modified_at\": 1734549792000,\n      \"created_at\": 1714652929000,\n      \"discount_code\": \"\",\n      \"discount_goods\": 0,\n      \"order_discount_services\": 5,\n      \"sale_discount_services\": 5,\n      \"discount_materials\": 0,\n      \"custom_fields\": {\n        \"f7757287\": 968112000000\n      },\n      \"ad_campaign\": {\n        \"id\": 349683,\n        \"name\": \"Friend\"\n      }\n    },\n    \"payer\": {\n      \"id\": 31152179,\n      \"name\": \"Chris Jules\",\n      \"first_name\": \"Chris\",\n      \"last_name\": \"Jules\",\n      \"email\": \"chrissy_jules14@gmail.com\",\n      \"phone\": [\n        \"4487645389\"\n      ],\n      \"notes\": \"\",\n      \"address\": \"\",\n      \"supplier\": false,\n      \"juridical\": false,\n      \"conflicted\": false,\n      \"modified_at\": 1734549792000,\n      \"created_at\": 1714652929000,\n      \"discount_code\": \"\",\n      \"discount_goods\": 0,\n      \"order_discount_services\": 5,\n      \"sale_discount_services\": 5,\n      \"discount_materials\": 0,\n      \"custom_fields\": {\n        \"f7757287\": 968112000000\n      },\n      \"ad_campaign\": {\n        \"id\": 349683,\n        \"name\": \"Friend\"\n      }\n    },\n    \"status\": 0,\n    \"status_full\": {\n      \"id\": 3319497,\n      \"name\": \"Paid\",\n      \"color\": \"#5CB85C\",\n      \"group\": 10\n    },\n    \"created_at\": 1740480923000,\n    \"issue_date\": 1740480920000,\n    \"due_date\": 1743072920000,\n    \"payment_type\": 0,\n    \"products\": [\n      {\n        \"amount\": 1,\n        \"id\": 2847134,\n        \"order_id\": 52100568,\n        \"price\": 47.5,\n        \"title\": \"Delivery\",\n        \"uom_id\": 1,\n        \"type\": 2,\n        \"service\": true,\n        \"warranty\": 0,\n        \"warranty_period\": 0\n      },\n      {\n        \"amount\": 1,\n        \"id\": 2847135,\n        \"order_id\": 52100586,\n        \"price\": 121.6,\n        \"title\": \"SSD replacement\",\n        \"uom_id\": 1,\n        \"type\": 2,\n        \"service\": true,\n        \"warranty\": 3,\n        \"warranty_period\": 1\n      },\n      {\n        \"amount\": 1,\n        \"id\": 2847136,\n        \"order_id\": 52100596,\n        \"price\": 47.5,\n        \"title\": \"Battery service \",\n        \"uom_id\": 1,\n        \"type\": 3,\n        \"service\": true,\n        \"warranty\": 0,\n        \"warranty_period\": 0\n      }\n    ],\n    \"manager_id\": 206037\n  },\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer",
                  "example": 309859,
                  "default": 0
                },
                "id_label": {
                  "type": "string",
                  "example": "023"
                },
                "client": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 31152179,
                      "default": 0
                    },
                    "name": {
                      "type": "string",
                      "example": "Chris Jules"
                    },
                    "first_name": {
                      "type": "string",
                      "example": "Chris"
                    },
                    "last_name": {
                      "type": "string",
                      "example": "Jules"
                    },
                    "email": {
                      "type": "string",
                      "example": "chrissy_jules14@gmail.com"
                    },
                    "phone": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "example": "4487645389"
                      }
                    },
                    "notes": {
                      "type": "string",
                      "example": ""
                    },
                    "address": {
                      "type": "string",
                      "example": ""
                    },
                    "supplier": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "juridical": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "conflicted": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "modified_at": {
                      "type": "integer",
                      "example": 1734549792000,
                      "default": 0
                    },
                    "created_at": {
                      "type": "integer",
                      "example": 1714652929000,
                      "default": 0
                    },
                    "discount_code": {
                      "type": "string",
                      "example": ""
                    },
                    "discount_goods": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "order_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "sale_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "discount_materials": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "custom_fields": {
                      "type": "object",
                      "properties": {
                        "f7757287": {
                          "type": "integer",
                          "example": 968112000000,
                          "default": 0
                        }
                      }
                    },
                    "ad_campaign": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 349683,
                          "default": 0
                        },
                        "name": {
                          "type": "string",
                          "example": "Friend"
                        }
                      }
                    }
                  }
                },
                "payer": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 31152179,
                      "default": 0
                    },
                    "name": {
                      "type": "string",
                      "example": "Chris Jules"
                    },
                    "first_name": {
                      "type": "string",
                      "example": "Chris"
                    },
                    "last_name": {
                      "type": "string",
                      "example": "Jules"
                    },
                    "email": {
                      "type": "string",
                      "example": "chrissy_jules14@gmail.com"
                    },
                    "phone": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "example": "4487645389"
                      }
                    },
                    "notes": {
                      "type": "string",
                      "example": ""
                    },
                    "address": {
                      "type": "string",
                      "example": ""
                    },
                    "supplier": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "juridical": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "conflicted": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "modified_at": {
                      "type": "integer",
                      "example": 1734549792000,
                      "default": 0
                    },
                    "created_at": {
                      "type": "integer",
                      "example": 1714652929000,
                      "default": 0
                    },
                    "discount_code": {
                      "type": "string",
                      "example": ""
                    },
                    "discount_goods": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "order_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "sale_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "discount_materials": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "custom_fields": {
                      "type": "object",
                      "properties": {
                        "f7757287": {
                          "type": "integer",
                          "example": 968112000000,
                          "default": 0
                        }
                      }
                    },
                    "ad_campaign": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 349683,
                          "default": 0
                        },
                        "name": {
                          "type": "string",
                          "example": "Friend"
                        }
                      }
                    }
                  }
                },
                "status": {
                  "type": "integer",
                  "example": 0,
                  "default": 0
                },
                "status_full": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 3319497,
                      "default": 0
                    },
                    "name": {
                      "type": "string",
                      "example": "Paid"
                    },
                    "color": {
                      "type": "string",
                      "example": "#5CB85C"
                    },
                    "group": {
                      "type": "integer",
                      "example": 10,
                      "default": 0
                    }
                  }
                },
                "created_at": {
                  "type": "integer",
                  "example": 1740480923000,
                  "default": 0
                },
                "issue_date": {
                  "type": "integer",
                  "example": 1740480920000,
                  "default": 0
                },
                "due_date": {
                  "type": "integer",
                  "example": 1743072920000,
                  "default": 0
                },
                "payment_type": {
                  "type": "integer",
                  "example": 0,
                  "default": 0
                },
                "products": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "amount": {
                        "type": "integer",
                        "example": 1,
                        "default": 0
                      },
                      "id": {
                        "type": "integer",
                        "example": 2847134,
                        "default": 0
                      },
                      "order_id": {
                        "type": "integer",
                        "example": 52100568,
                        "default": 0
                      },
                      "price": {
                        "type": "number",
                        "example": 47.5,
                        "default": 0
                      },
                      "title": {
                        "type": "string",
                        "example": "Delivery"
                      },
                      "uom_id": {
                        "type": "integer",
                        "example": 1,
                        "default": 0
                      },
                      "type": {
                        "type": "integer",
                        "example": 2,
                        "default": 0
                      },
                      "service": {
                        "type": "boolean",
                        "example": true,
                        "default": true
                      },
                      "warranty": {
                        "type": "integer",
                        "example": 0,
                        "default": 0
                      },
                      "warranty_period": {
                        "type": "integer",
                        "example": 0,
                        "default": 0
                      }
                    }
                  }
                },
                "manager_id": {
                  "type": "integer",
                  "example": 206037,
                  "default": 0
                }
              }
            },
            "success": {
              "type": "boolean",
              "example": true,
              "default": true
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /invoices/{invoice_id}/comments
**Summary:** Create Invoice Comment

```json
{
  "204": {
    "description": "204",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /invoices/{invoice_id}/status
**Summary:** Update Invoice Status

```json
{
  "204": {
    "description": "204",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /invoices/statuses
**Summary:** Get Invoice Statuses

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": [\n    {\n      \"id\": 3319495,\n      \"name\": \"Draft\",\n      \"color\": \"#1E79C7\",\n      \"group\": 8\n    },\n    {\n      \"id\": 3512555,\n      \"name\": \"Control \ud83d\udc40\",\n      \"color\": \"#1E79C7\",\n      \"group\": 8\n    },\n    {\n      \"id\": 3319496,\n      \"name\": \"Issued\",\n      \"color\": \"#F89200\",\n      \"group\": 9\n    },\n    {\n      \"id\": 3319497,\n      \"name\": \"Paid\",\n      \"color\": \"#5CB85C\",\n      \"group\": 10\n    },\n    {\n      \"id\": 3319498,\n      \"name\": \"Canceled\",\n      \"color\": \"#939699\",\n      \"group\": 11\n    }\n  ],\n  \"count\": 5,\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "example": 3319495,
                    "default": 0
                  },
                  "name": {
                    "type": "string",
                    "example": "Draft"
                  },
                  "color": {
                    "type": "string",
                    "example": "#1E79C7"
                  },
                  "group": {
                    "type": "integer",
                    "example": 8,
                    "default": 0
                  }
                }
              }
            },
            "count": {
              "type": "integer",
              "example": 5,
              "default": 0
            },
            "success": {
              "type": "boolean",
              "example": true,
              "default": true
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /warehouse/
**Summary:** Get Warehouses

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": [\n    {\n      \"id\": 87310,\n      \"title\": \"1111\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 87977,\n      \"title\": \"wadwa\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 5762,\n      \"title\": \"test\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 88632,\n      \"title\": \"test123\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 88708,\n      \"title\": \"test123123123\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 87412,\n      \"title\": \"wadkwadkmwadkkakwadjwadkjwdkj\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 12092,\n      \"title\": \"\u0435\u0443\u044b\u0435\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 51735,\n      \"title\": \"333\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 52030,\n      \"title\": \"999\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 52029,\n      \"title\": \"7777\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 6,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 926,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 1450,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 3033,\n      \"title\": \"\u0412\u0438\u0442\u0440\u0438\u043d\u0430 \u041a\u0438\u0440\u043e\u0432\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 52991,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 4266,\n      \"title\": \"\u041d\u043e\u0432\u044b\u0439\",\n      \"is_global\": true,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 96301,\n      \"title\": \"Qwerty\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 611944,\n      \"title\": \"erhhet\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 777159,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434 \u0442\u043e\u0432\u0430\u0440\u043e\u0432\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 1029002,\n      \"title\": \"\u0435\u043a\u0443\u0446\u044b\u0430\u0432\",\n      \"is_global\": true,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 1519523,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 Boris\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 1572477,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434 \u0442\u043e\u0432\u0430\u0440\u043e\u0432\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 2787707,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434 \u0442\u043e\u0432\u0430\u0440\u043e\u0432\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 2833305,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434 \u0442\u043e\u0432\u0430\u0440\u043e\u0432\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 2841935,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434 \u0442\u043e\u0432\u0430\u0440\u043e\u0432\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 79928,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 4267,\n      \"title\": \"\u041d\u043e\u0432\u044b\u0439 2\",\n      \"is_global\": true,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 12912,\n      \"title\": \"\u0422\u0435\u0441\u0442\",\n      \"is_global\": true,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 51740,\n      \"title\": \"33\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 4790,\n      \"title\": \"MOY\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 3097757,\n      \"title\": \"In facilis tempora v\",\n      \"is_global\": true,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 1098798,\n      \"title\": \"test1\",\n      \"is_global\": true,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 3700615,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434 \u0442\u043e\u0432\u0430\u0440\u043e\u0432\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 3716304,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434 \u0442\u043e\u0432\u0430\u0440\u043e\u0432\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 3723813,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434 \u0442\u043e\u0432\u0430\u0440\u043e\u0432\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 387604,\n      \"title\": \"123\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 1079726,\n      \"title\": \"test2\",\n      \"is_global\": true,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 35850,\n      \"title\": \"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\",\n      \"is_global\": true,\n      \"type\": \"product\"\n    }\n  ],\n  \"count\": 38,\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "example": 87310,
                    "default": 0
                  },
                  "title": {
                    "type": "string",
                    "example": "1111"
                  },
                  "is_global": {
                    "type": "boolean",
                    "example": false,
                    "default": true
                  },
                  "type": {
                    "type": "string",
                    "example": "product"
                  }
                }
              }
            },
            "count": {
              "type": "integer",
              "example": 38,
              "default": 0
            },
            "success": {
              "type": "boolean",
              "example": true,
              "default": true
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /warehouse/{warehouse_id}/cells
**Summary:** Get Warehouse Bins

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /warehouse/goods/{warehouse_id}
**Summary:** Get Stock

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": [\n    {\n      \"id\": 38526436,\n      \"code\": \"\",\n      \"title\": \"100 ft Reel of Freeze Free Pipe Heating Cable\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 10,\n        \"306644\": 10,\n        \"386118\": 0,\n        \"386993\": 19,\n        \"386994\": 11,\n        \"387005\": 13,\n        \"387006\": 14,\n        \"391817\": 15.25\n      },\n      \"article\": \"\",\n      \"residue\": 5,\n      \"category\": {\n        \"id\": 910696,\n        \"title\": \"Phones\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"Easy Heat\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001880\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": true,\n      \"warranty\": 3,\n      \"warranty_period\": 1\n    },\n    {\n      \"id\": 38526437,\n      \"code\": \"\",\n      \"title\": \"24V Normally Closed Actuator w/ aux. switch 18\\\" Wire\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"Z111000\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910695,\n        \"title\": \"Retail\"\n      },\n      \"description\": \"Caleffi\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001200\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 1\n    },\n    {\n      \"id\": 38526438,\n      \"code\": \"\",\n      \"title\": \"3/4\\\" GF 15/26 Iron Pump Flange Pair (NPT)\",\n      \"uom\": {\n        \"id\": 21,\n        \"description\": \"Acre\",\n        \"title\": \"ac\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 10,\n        \"306644\": 10,\n        \"386118\": 0,\n        \"386993\": 20,\n        \"386994\": 12,\n        \"387005\": 14,\n        \"387006\": 15,\n        \"391817\": 16\n      },\n      \"article\": \"519601\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 817091,\n        \"title\": \"Spare parts\"\n      },\n      \"description\": \"Grundfos\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001187\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 3,\n      \"warranty_period\": 1\n    },\n    {\n      \"id\": 38526439,\n      \"code\": \"\",\n      \"title\": \"Ailun Glass Screen Protector for iPhone 11\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [\n        \"https://storage.remonline.app/media/company-assets/115231/warehouse-product/cc8074c90fd54c3488ee48caa6a672af_default.jpg\"\n      ],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 10,\n        \"386994\": 6,\n        \"387005\": 7,\n        \"387006\": 8,\n        \"391817\": 8\n      },\n      \"article\": \"\",\n      \"residue\": 8,\n      \"category\": {\n        \"id\": 910696,\n        \"title\": \"Phones\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"Display Anti Scratch Advanced HD Clarity Work Most Case\",\n      \"custom_fields\": {},\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526441,\n      \"code\": \"\",\n      \"title\": \"Air Case Iphone 5\",\n      \"uom\": {\n        \"id\": 9,\n        \"description\": \"Foot\",\n        \"title\": \"ft\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 10,\n        \"306644\": 10,\n        \"386118\": 0,\n        \"386993\": 74,\n        \"386994\": 43,\n        \"387005\": 52,\n        \"387006\": 56,\n        \"391817\": 59.2\n      },\n      \"article\": \"m002\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910714,\n        \"title\": \"Cases\",\n        \"parent_id\": 910703\n      },\n      \"description\": \"\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000586\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526442,\n      \"code\": \"010-100\",\n      \"title\": \"Amazon Basics High-Speed HDMI Cable For Television, A Male to A Male, 18 Gbps, 4K/60Hz, 6 Feet, Black\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"HDMI-6FT-BLACK-1P\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910698,\n        \"title\": \"Cable\",\n        \"parent_id\": 817092\n      },\n      \"description\": \"IN THE BOX: HDMI cable (A Male to A Male) for connecting 2 HDMI-enabled devices; 6 feet long in Black\\nDEVICE COMPATIBLE: Connects Blu-ray players, Fire TV, Apple TV, PS4, PS3, Xbox One, Xbox 360, and computers to TVs, displays, A/V receivers, and more\\nSUPPORTS 4K VIDEO: Supports 4K video at 60 Hz, 2160p, 48-bit/px color depth, as well as bandwidth up to 18Gbps, Ethernet, 3D, and Audio Return Channel (ARC)\\nEASY CONNECTION: Share an Internet connection among multiple devices (no need for a separate Ethernet cable)\\nBACKWARDS COMPATIBLE: Works with earlier versions to allow for use with a wide range of HDMI-enabled devices\\nNOTE: This cable supports up to 4K@60Hz, so if a connected device's output is higher than that standard, the cable won't work properly\",\n      \"custom_fields\": {},\n      \"barcodes\": [],\n      \"is_serial\": false,\n      \"warranty\": 3,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526443,\n      \"code\": \"0994920\",\n      \"title\": \"Anker 100W 4-Port\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 10,\n        \"306644\": 10,\n        \"386118\": 0,\n        \"386993\": 20,\n        \"386994\": 12,\n        \"387005\": 14,\n        \"387006\": 15,\n        \"391817\": 16\n      },\n      \"article\": \"\",\n      \"residue\": 2,\n      \"category\": {\n        \"id\": 910697,\n        \"title\": \"Apple\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"10324, USB-C Charger, Type-C Charging Station with Power Delivery, PowerPort Atom PD 4 [Intelligent Power Allocation] for MacBook Pro/Air, iPad Pro, Pixel, iPhone Xs/Max/XR, Galaxy and more\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000197\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 14,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526444,\n      \"code\": \"\",\n      \"title\": \"Apple 12W USB Power Adapter\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [\n        \"https://storage.remonline.app/media/company-assets/115231/warehouse-product/b8ee9530548a4c30a1aa60e3aacfd347_default.jpeg\"\n      ],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 20,\n        \"386994\": 12,\n        \"387005\": 14,\n        \"387006\": 15,\n        \"391817\": 16\n      },\n      \"article\": \"MD836LL/A\",\n      \"residue\": 2,\n      \"category\": {\n        \"id\": 910697,\n        \"title\": \"Apple\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"\",\n      \"custom_fields\": {\n        \"f7747626\": \"White\"\n      },\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000180\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 14,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526445,\n      \"code\": \"\",\n      \"title\": \"Apple AirPods Pro\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [\n        \"https://storage.remonline.app/media/company-assets/115231/warehouse-product/e8a6e3e1eeb6464ba149b8f6bcc9ea2b_hd.jpg\"\n      ],\n      \"price\": {\n        \"306643\": 200,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 360,\n        \"386994\": 207,\n        \"387005\": 252,\n        \"387006\": 270,\n        \"391817\": 288\n      },\n      \"article\": \"10324\",\n      \"residue\": 4,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"\",\n      \"custom_fields\": {\n        \"f7747626\": \"White\"\n      },\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000029\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 1\n    },\n    {\n      \"id\": 38526446,\n      \"code\": \"\",\n      \"title\": \"Apple Case (Clear) for iPhone 11\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 40,\n        \"306644\": 30,\n        \"386118\": 0,\n        \"386993\": 30,\n        \"386994\": 17,\n        \"387005\": 21,\n        \"387006\": 23,\n        \"391817\": 24\n      },\n      \"article\": \"MWVG2ZM/A\",\n      \"residue\": 25,\n      \"category\": {\n        \"id\": 910703,\n        \"title\": \"Apple Original\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000333\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 14,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526447,\n      \"code\": \"\",\n      \"title\": \"Apple Case (Clear) for iPhone 12\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 15,\n        \"306644\": 15,\n        \"386118\": 0,\n        \"386993\": 30,\n        \"386994\": 17,\n        \"387005\": 21,\n        \"387006\": 23,\n        \"391817\": 24\n      },\n      \"article\": \"\",\n      \"residue\": 5,\n      \"category\": {\n        \"id\": 910714,\n        \"title\": \"Cases\",\n        \"parent_id\": 910703\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001897\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526448,\n      \"code\": \"\",\n      \"title\": \"Apple Case (Clear) for iPhone SE 2020\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910714,\n        \"title\": \"Cases\",\n        \"parent_id\": 910703\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001903\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526449,\n      \"code\": \"\",\n      \"title\": \"Apple Case (Clear) for iPhone XR\",\n      \"uom\": {\n        \"id\": 25,\n        \"description\": \"Gallon\",\n        \"title\": \"gal\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 15,\n        \"306644\": 15,\n        \"386118\": 0,\n        \"386993\": 30,\n        \"386994\": 17,\n        \"387005\": 21,\n        \"387006\": 23,\n        \"391817\": 24\n      },\n      \"article\": \"MRW62ZM/A\",\n      \"residue\": 9,\n      \"category\": {\n        \"id\": 910703,\n        \"title\": \"Apple Original\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"Desc\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000593\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 14,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526450,\n      \"code\": \"\",\n      \"title\": \"Apple Leather Case (Forest Green) for iPhone 11 Pro\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"MWYD2ZM/A\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910703,\n        \"title\": \"Apple Original\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001910\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 14,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526451,\n      \"code\": \"iPhone 11, iPhone 12\",\n      \"title\": \"Apple Lightning to USB Cable (2 m) (Pack of 2)\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"004-220\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910698,\n        \"title\": \"Cable\",\n        \"parent_id\": 817092\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000002511\",\n          \"type\": \"ean13\"\n        },\n        {\n          \"code\": \"2100000002535\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 3,\n      \"warranty_period\": 1\n    },\n    {\n      \"id\": 38526452,\n      \"code\": \"\",\n      \"title\": \"Apple Magic Mouse 2\",\n      \"uom\": {\n        \"id\": 21,\n        \"description\": \"Acre\",\n        \"title\": \"ac\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 10,\n        \"306644\": 10,\n        \"386118\": 0,\n        \"386993\": 20,\n        \"386994\": 12,\n        \"387005\": 14,\n        \"387006\": 15,\n        \"391817\": 16\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910697,\n        \"title\": \"Apple\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001927\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526453,\n      \"code\": \"\",\n      \"title\": \"Apple Silicone Case (Cactus) for iPhone 11 Pro Max\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"MY1G2ZM/A\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910703,\n        \"title\": \"Apple Original\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000227\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 14,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526454,\n      \"code\": \"\",\n      \"title\": \"Apple Silicone Case (Pomegranate) for iPhone 11 Pro Max\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"MXM82ZM/A\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910703,\n        \"title\": \"Apple Original\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000210\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 14,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526455,\n      \"code\": \"53536353\",\n      \"title\": \"Apple Silicone Case (Surf Blue) for iPhone 11 Pro Max\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"MY1J2ZM/A\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910703,\n        \"title\": \"Apple Original\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000203\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 14,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526456,\n      \"code\": \"\",\n      \"title\": \"Apple iPhone 14 Purple 128Gb 9-0080\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [\n        \"https://storage.remonline.app/media/company-assets/115231/warehouse-product/cad9eeb37e3c419cbfcff675f904727c_hd.jpg\"\n      ],\n      \"price\": {\n        \"306643\": 500,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 858,\n        \"386994\": 493,\n        \"387005\": 601,\n        \"387006\": 644,\n        \"391817\": 686.4\n      },\n      \"article\": \"\",\n      \"residue\": 1,\n      \"category\": {\n        \"id\": 910696,\n        \"title\": \"Phones\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001934\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": true,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526457,\n      \"code\": \"\",\n      \"title\": \"Apple iPhone 11 256Gb 0-010203\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910696,\n        \"title\": \"Phones\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001941\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": true,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526458,\n      \"code\": \"\",\n      \"title\": \"Apple iPhone 11 Silicone Case (Pink Sand)\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"MTF82ZM/A\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910714,\n        \"title\": \"Cases\",\n        \"parent_id\": 910703\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000128\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 14,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526459,\n      \"code\": \"\",\n      \"title\": \"Apple iPhone 12 mini\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [\n        \"https://storage.remonline.app/media/company-assets/115231/warehouse-product/44c618784d1d41088f3a23d3b7c1137a_hd.jpg\",\n        \"https://storage.remonline.app/media/company-assets/115231/warehouse-product/f47fb4af23804ef592f8211b3e48e48f_hd.jpg\",\n        \"https://storage.remonline.app/media/company-assets/115231/warehouse-product/978f8bc7d4e34d298d87e0b3c1481b2e_hd.jpg\",\n        \"https://storage.remonline.app/media/company-assets/115231/warehouse-product/6843928151d64bdf82a9b2d47848a740_hd.jpg\"\n      ],\n      \"price\": {\n        \"306643\": 600,\n        \"306644\": 450,\n        \"386118\": 0,\n        \"386993\": 600,\n        \"386994\": 345,\n        \"387005\": 420,\n        \"387006\": 450,\n        \"391817\": 480\n      },\n      \"article\": \"MW121212\",\n      \"residue\": 31,\n      \"category\": {\n        \"id\": 910696,\n        \"title\": \"Phones\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"Apple iPhone 12 mini\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001743\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 1\n    },\n    {\n      \"id\": 38526460,\n      \"code\": \"4684513\",\n      \"title\": \"Apple iPhone 13 256Gb Pink\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910696,\n        \"title\": \"Phones\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001804\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 1\n    },\n    {\n      \"id\": 38526461,\n      \"code\": \"4894651348\",\n      \"title\": \"Apple iPhone 13 Pro 512GB Sierra Blue\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910696,\n        \"title\": \"Phones\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001705\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 1\n    },\n    {\n      \"id\": 38526462,\n      \"code\": \"43535\",\n      \"title\": \"Apple iPhone 13 Silicone Case with MagSafe (PRODUCT) RED\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910697,\n        \"title\": \"Apple\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001408\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526463,\n      \"code\": \"15P12\",\n      \"title\": \"Apple iPhone 15 Pro 1TB Black Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526464,\n      \"code\": \"15P15\",\n      \"title\": \"Apple iPhone 15 Pro 1TB Blue Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526465,\n      \"code\": \"15P13\",\n      \"title\": \"Apple iPhone 15 Pro 1TB Natural Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526466,\n      \"code\": \"15P14\",\n      \"title\": \"Apple iPhone 15 Pro 1TB White Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526467,\n      \"code\": \"15P256\",\n      \"title\": \"Apple iPhone 15 Pro 256GB Black Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {},\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526468,\n      \"code\": \"15P2561\",\n      \"title\": \"Apple iPhone 15 Pro 256GB Blue Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526469,\n      \"code\": \"15P25611\",\n      \"title\": \"Apple iPhone 15 Pro 256GB Natural Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526470,\n      \"code\": \"15P2562\",\n      \"title\": \"Apple iPhone 15 Pro 256GB White Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526471,\n      \"code\": \"15P512111\",\n      \"title\": \"Apple iPhone 15 Pro 512GB Black Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526472,\n      \"code\": \"15P5123\",\n      \"title\": \"Apple iPhone 15 Pro 512GB Blue Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526473,\n      \"code\": \"15P5125\",\n      \"title\": \"Apple iPhone 15 Pro 512GB Natural Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526474,\n      \"code\": \"15P5126\",\n      \"title\": \"Apple iPhone 15 Pro 512GB White Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526475,\n      \"code\": \"5490325\",\n      \"title\": \"Apple iPhone SE 2020 64Gb Black\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [\n        \"https://storage.remonline.app/media/company-assets/115231/warehouse-product/23884ad021634945afb4d528e256cc40_hd.jpg\"\n      ],\n      \"price\": {\n        \"306643\": 400,\n        \"306644\": 300,\n        \"386118\": 0,\n        \"386993\": 400,\n        \"386994\": 230,\n        \"387005\": 280,\n        \"387006\": 300,\n        \"391817\": 320\n      },\n      \"article\": \"MX9R2\",\n      \"residue\": 15,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000241\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": true,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526476,\n      \"code\": \"\",\n      \"title\": \"Apple iPhone SE 2020 64Gb White\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"MX9T2\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000265\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 1\n    },\n    {\n      \"id\": 38526477,\n      \"code\": \"\",\n      \"title\": \"Aqua-Pure AP117, Whole House Filter Replacement Cartridge (Carbon Filter Cartridge) - 2 Pack\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"5541731\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 817091,\n        \"title\": \"Spare parts\"\n      },\n      \"description\": \"3M Aqua-Pure\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001958\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 6,\n      \"warranty_period\": 1\n    },\n    {\n      \"id\": 38526478,\n      \"code\": \"\",\n      \"title\": \"Battery A1315 - iPad 1\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 50,\n        \"306644\": 50,\n        \"386118\": 0,\n        \"386993\": 100,\n        \"386994\": 58,\n        \"387005\": 70,\n        \"387006\": 75,\n        \"391817\": 80\n      },\n      \"article\": \"battery-ipad\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910705,\n        \"title\": \"Battery\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001965\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526479,\n      \"code\": \"\",\n      \"title\": \"Battery A1376 - iPad 2\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"battery-ipad\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910705,\n        \"title\": \"Battery\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001972\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526480,\n      \"code\": \"\",\n      \"title\": \"Battery A1389 - iPad 3/4\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"battery-ipad\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910705,\n        \"title\": \"Battery\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001989\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526481,\n      \"code\": \"\",\n      \"title\": \"Battery A1484 - iPad Air 1 / iPad 5 / iPad 6\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"battery-ipad\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910705,\n        \"title\": \"Battery\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001996\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526482,\n      \"code\": \"\",\n      \"title\": \"Battery A1547 - iPad Air 2\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"battery-ipad\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910705,\n        \"title\": \"Battery\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000002009\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526483,\n      \"code\": \"\",\n      \"title\": \"Battery iPad Mini 1 - A1445\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"battery-ipad\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910705,\n        \"title\": \"Battery\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000002016\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526484,\n      \"code\": \"\",\n      \"title\": \"Battery iPad Mini 2/3 - A1512\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"battery-ipad\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910705,\n        \"title\": \"Battery\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000002023\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526485,\n      \"code\": \"\",\n      \"title\": \"Battery iPad Mini 4 - A1546\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"battery-ipad\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910705,\n        \"title\": \"Battery\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000002030\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526486,\n      \"code\": \"\",\n      \"title\": \"Battery iPad Mini 5 - A1725\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"battery-ipad\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910705,\n        \"title\": \"Battery\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000002047\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    }\n  ],\n  \"page\": 1,\n  \"count\": 238,\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "example": 38526436,
                    "default": 0
                  },
                  "code": {
                    "type": "string",
                    "example": ""
                  },
                  "title": {
                    "type": "string",
                    "example": "100 ft Reel of Freeze Free Pipe Heating Cable"
                  },
                  "uom": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer",
                        "example": 1,
                        "default": 0
                      },
                      "description": {
                        "type": "string",
                        "example": "Pieces"
                      },
                      "title": {
                        "type": "string",
                        "example": "pcs"
                      }
                    }
                  },
                  "image": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {}
                    }
                  },
                  "price": {
                    "type": "object",
                    "properties": {
                      "306643": {
                        "type": "integer",
                        "example": 10,
                        "default": 0
                      },
                      "306644": {
                        "type": "integer",
                        "example": 10,
                        "default": 0
                      },
                      "386118": {
                        "type": "integer",
                        "example": 0,
                        "default": 0
                      },
                      "386993": {
                        "type": "integer",
                        "example": 19,
                        "default": 0
                      },
                      "386994": {
                        "type": "integer",
                        "example": 11,
                        "default": 0
                      },
                      "387005": {
                        "type": "integer",
                        "example": 13,
                        "default": 0
                      },
                      "387006": {
                        "type": "integer",
                        "example": 14,
                        "default": 0
                      },
                      "391817": {
                        "type": "number",
                        "example": 15.25,
                        "default": 0
                      }
                    }
                  },
                  "article": {
                    "type": "string",
                    "example": ""
                  },
                  "residue": {
                    "type": "integer",
                    "example": 5,
                    "default": 0
                  },
                  "category": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer",
                        "example": 910696,
                        "default": 0
                      },
                      "title": {
                        "type": "string",
                        "example": "Phones"
                      },
                      "parent_id": {
                        "type": "integer",
                        "example": 910695,
                        "default": 0
                      }
                    }
                  },
                  "description": {
                    "type": "string",
                    "example": "Easy Heat"
                  },
                  "custom_fields": {
                    "type": "object",
                    "properties": {
                      "f7747626": {
                        "type": "string",
                        "example": ""
                      }
                    }
                  },
                  "barcodes": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "code": {
                          "type": "string",
                          "example": "2100000001880"
                        },
                        "type": {
                          "type": "string",
                          "example": "ean13"
                        }
                      }
                    }
                  },
                  "is_serial": {
                    "type": "boolean",
                    "example": true,
                    "default": true
                  },
                  "warranty": {
                    "type": "integer",
                    "example": 3,
                    "default": 0
                  },
                  "warranty_period": {
                    "type": "integer",
                    "example": 1,
                    "default": 0
                  }
                }
              }
            },
            "page": {
              "type": "integer",
              "example": 1,
              "default": 0
            },
            "count": {
              "type": "integer",
              "example": 238,
              "default": 0
            },
            "success": {
              "type": "boolean",
              "example": true,
              "default": true
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /warehouse/goods/{warehouse_id} (COPY)
**Summary:** Get Stock *

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /warehouse/goods/{warehouse_id}/{good_id}
**Summary:** Get Product Serial Numbers

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /warehouse/postings/
**Summary:** Get Postings

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": [\n    {\n      \"id\": 3329731,\n      \"id_label\": \"A007\",\n      \"created_at\": 1702985134000,\n      \"created_by_id\": 114736,\n      \"supplier_id\": 14069707,\n      \"warehouse_id\": 105810,\n      \"products\": [\n        {\n          \"id\": 13547080,\n          \"title\": \"Car Battery 2.0\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 9,\n          \"price\": 100,\n          \"is_serial\": true,\n          \"sernums\": [\n            {\n              \"id\": 26398329,\n              \"code\": \"0-0001\"\n            },\n            {\n              \"id\": 26398330,\n              \"code\": \"0-0002\"\n            },\n            {\n              \"id\": 26398331,\n              \"code\": \"0-0003\"\n            },\n            {\n              \"id\": 26398332,\n              \"code\": \"0-0004\"\n            },\n            {\n              \"id\": 26398333,\n              \"code\": \"0-0005\"\n            },\n            {\n              \"id\": 26398334,\n              \"code\": \"0-0006\"\n            },\n            {\n              \"id\": 26398335,\n              \"code\": \"0-0007\"\n            },\n            {\n              \"id\": 26398336,\n              \"code\": \"0-0008\"\n            },\n            {\n              \"id\": 26398337,\n              \"code\": \"0-0009\"\n            }\n          ]\n        }\n      ],\n      \"description\": \"Created due to the product transfer to the inventory serialization\",\n      \"document_number\": \"\"\n    },\n    {\n      \"id\": 3280235,\n      \"id_label\": \"A006\",\n      \"created_at\": 1649181947000,\n      \"created_by_id\": 112125,\n      \"supplier_id\": 13746109,\n      \"warehouse_id\": 105810,\n      \"products\": [\n        {\n          \"id\": 13543067,\n          \"title\": \"Power Bank Portable Charger 20W\",\n          \"uom\": {\n            \"id\": 13,\n            \"description\": \"Kilogram\",\n            \"title\": \"kg\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 15,\n          \"price\": 80,\n          \"is_serial\": false,\n          \"sernums\": []\n        }\n      ],\n      \"description\": \"\",\n      \"document_number\": \"\"\n    },\n    {\n      \"id\": 3277038,\n      \"id_label\": \"A005\",\n      \"created_at\": 1644251052000,\n      \"created_by_id\": 112125,\n      \"supplier_id\": 13746109,\n      \"warehouse_id\": 105810,\n      \"products\": [\n        {\n          \"id\": 13543062,\n          \"title\": \"Spark Plug\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 10,\n          \"price\": 6,\n          \"is_serial\": false,\n          \"sernums\": []\n        }\n      ],\n      \"description\": \"\",\n      \"document_number\": \"\"\n    },\n    {\n      \"id\": 3277027,\n      \"id_label\": \"A004\",\n      \"created_at\": 1644238592000,\n      \"created_by_id\": 112125,\n      \"supplier_id\": 13746109,\n      \"warehouse_id\": 105810,\n      \"products\": [\n        {\n          \"id\": 13543067,\n          \"title\": \"Power Bank Portable Charger 20W\",\n          \"uom\": {\n            \"id\": 13,\n            \"description\": \"Kilogram\",\n            \"title\": \"kg\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 100,\n          \"is_serial\": false,\n          \"sernums\": []\n        }\n      ],\n      \"description\": \"\",\n      \"document_number\": \"\"\n    },\n    {\n      \"id\": 3277022,\n      \"id_label\": \"A003\",\n      \"created_at\": 1644236608000,\n      \"created_by_id\": 112125,\n      \"supplier_id\": 13746109,\n      \"warehouse_id\": 105810,\n      \"products\": [\n        {\n          \"id\": 13547080,\n          \"title\": \"Car Battery 2.0\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 10,\n          \"price\": 100,\n          \"is_serial\": false,\n          \"sernums\": []\n        }\n      ],\n      \"description\": \"\",\n      \"document_number\": \"\"\n    },\n    {\n      \"id\": 3276896,\n      \"id_label\": \"A002\",\n      \"created_at\": 1643963687000,\n      \"created_by_id\": 112125,\n      \"supplier_id\": 13746109,\n      \"warehouse_id\": 105810,\n      \"products\": [\n        {\n          \"id\": 13545168,\n          \"title\": \"Tire 1\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 10,\n          \"price\": 7,\n          \"is_serial\": false,\n          \"sernums\": []\n        }\n      ],\n      \"description\": \"\",\n      \"document_number\": \"\"\n    },\n    {\n      \"id\": 3276720,\n      \"id_label\": \"A001\",\n      \"created_at\": 1643729776000,\n      \"created_by_id\": 112125,\n      \"supplier_id\": 13746109,\n      \"warehouse_id\": 105810,\n      \"products\": [\n        {\n          \"id\": 13543067,\n          \"title\": \"Power Bank Portable Charger 20W\",\n          \"uom\": {\n            \"id\": 13,\n            \"description\": \"Kilogram\",\n            \"title\": \"kg\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 10,\n          \"price\": 89,\n          \"is_serial\": false,\n          \"sernums\": []\n        },\n        {\n          \"id\": 13543066,\n          \"title\": \"Radiator Tube\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 10,\n          \"price\": 3,\n          \"is_serial\": false,\n          \"sernums\": []\n        },\n        {\n          \"id\": 13543062,\n          \"title\": \"Spark Plug\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 10,\n          \"price\": 9,\n          \"is_serial\": false,\n          \"sernums\": []\n        }\n      ],\n      \"description\": \"\",\n      \"document_number\": \"\"\n    }\n  ],\n  \"page\": 1,\n  \"count\": 7,\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "example": 3329731,
                    "default": 0
                  },
                  "id_label": {
                    "type": "string",
                    "example": "A007"
                  },
                  "created_at": {
                    "type": "integer",
                    "example": 1702985134000,
                    "default": 0
                  },
                  "created_by_id": {
                    "type": "integer",
                    "example": 114736,
                    "default": 0
                  },
                  "supplier_id": {
                    "type": "integer",
                    "example": 14069707,
                    "default": 0
                  },
                  "warehouse_id": {
                    "type": "integer",
                    "example": 105810,
                    "default": 0
                  },
                  "products": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 13547080,
                          "default": 0
                        },
                        "title": {
                          "type": "string",
                          "example": "Car Battery 2.0"
                        },
                        "uom": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "integer",
                              "example": 1,
                              "default": 0
                            },
                            "description": {
                              "type": "string",
                              "example": "Pieces"
                            },
                            "title": {
                              "type": "string",
                              "example": "pcs"
                            }
                          }
                        },
                        "code": {
                          "type": "string",
                          "example": ""
                        },
                        "article": {
                          "type": "string",
                          "example": ""
                        },
                        "amount": {
                          "type": "integer",
                          "example": 9,
                          "default": 0
                        },
                        "price": {
                          "type": "integer",
                          "example": 100,
                          "default": 0
                        },
                        "is_serial": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "sernums": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 26398329,
                                "default": 0
                              },
                              "code": {
                                "type": "string",
                                "example": "0-0001"
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "description": {
                    "type": "string",
                    "example": "Created due to the product transfer to the inventory serialization"
                  },
                  "document_number": {
                    "type": "string",
                    "example": ""
                  }
                }
              }
            },
            "page": {
              "type": "integer",
              "example": 1,
              "default": 0
            },
            "count": {
              "type": "integer",
              "example": 7,
              "default": 0
            },
            "success": {
              "type": "boolean",
              "example": true,
              "default": true
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /warehouse/postings/
**Summary:** Create Posting

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": {\n    \"id\": 3809076,\n    \"id_label\": \"F00312\"\n  },\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer",
                  "example": 3809076,
                  "default": 0
                },
                "id_label": {
                  "type": "string",
                  "example": "F00312"
                }
              }
            },
            "success": {
              "type": "boolean",
              "example": true,
              "default": true
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /warehouse/moves/
**Summary:** Get Transfers

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /warehouse/moves/
**Summary:** Create Transfer

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"id\": 837186,\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "example": 837186,
              "default": 0
            },
            "success": {
              "type": "boolean",
              "example": true,
              "default": true
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /warehouse/outcome-transactions/
**Summary:** Get Write-Offs

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /warehouse/outcome-transactions/
**Summary:** Create Write-off

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"id\": 4627872,\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "example": 4627872,
              "default": 0
            },
            "success": {
              "type": "boolean",
              "example": true,
              "default": true
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /warehouse/assets
**Summary:** Get Assets

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /warehouse/assets
**Summary:** Create Asset

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /warehouse/assets/{asset_id}
**Summary:** Get Asset by ID

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /warehouse/assets/{asset_id}
**Summary:** Update Asset

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /warehouse/assets/{asset_id}/move
**Summary:** Move Asset

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /warehouse/assets/custom-fields/
**Summary:** Get Asset Custom Fields

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /warehouse/assets/directories
**Summary:** Get Directories of Assets

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /contacts/people
**Summary:** Get People

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /contacts/people
**Summary:** Create Person

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /contacts/people/{person_id}
**Summary:** Get Person by ID

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "404": {
    "description": "404",
    "content": {
      "text/plain": {
        "examples": {
          "Result": {
            "value": ""
          }
        }
      }
    }
  }
}
```

---

### PATCH /contacts/people/{person_id}
**Summary:** Update Person

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "404": {
    "description": "404",
    "content": {
      "text/plain": {
        "examples": {
          "Result": {
            "value": ""
          }
        }
      }
    }
  }
}
```

---

### DELETE /contacts/people/{person_id}
**Summary:** Delete Person

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "404": {
    "description": "404",
    "content": {
      "text/plain": {
        "examples": {
          "Result": {
            "value": ""
          }
        }
      }
    }
  }
}
```

---

### GET /contacts/people/{person_id}/organizations
**Summary:** Get Person's Organization

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "404": {
    "description": "404",
    "content": {
      "text/plain": {
        "examples": {
          "Result": {
            "value": ""
          }
        }
      }
    }
  }
}
```

---

### POST /contacts/people/{person_id}/comments
**Summary:** Create Person Comment

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /contacts/people/{person_id}/merge
**Summary:** Merge People

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /contacts/people/custom-fields
**Summary:** Get People Custom Fields

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /contacts/organizations
**Summary:** Get Organizations

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /contacts/organizations
**Summary:** Create Organization

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /contacts/organizations/{organization_id}
**Summary:** Get Organization by ID

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### PATCH /contacts/organizations/{organization_id}
**Summary:** Update Organization

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "404": {
    "description": "404",
    "content": {
      "text/plain": {
        "examples": {
          "Result": {
            "value": ""
          }
        }
      }
    }
  }
}
```

---

### DELETE /contacts/organizations/{organization_id}
**Summary:** Delete Organization

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "404": {
    "description": "404",
    "content": {
      "text/plain": {
        "examples": {
          "Result": {
            "value": ""
          }
        }
      }
    }
  }
}
```

---

### GET /contacts/organizations/{organization_id}/people
**Summary:** Get Organization People

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /contacts/organizations/{organization_id}/people
**Summary:** Add People to Organization

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### DELETE /contacts/organizations/{organization_id}/people/{person_id}
**Summary:** Delete People from Organization

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "404": {
    "description": "404",
    "content": {
      "text/plain": {
        "examples": {
          "Result": {
            "value": ""
          }
        }
      }
    }
  }
}
```

---

### POST /contacts/organizations/{organization_id}/comments
**Summary:** Create Organization Comment

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /contacts/organizations/{organization_id}/merge
**Summary:** Merge Organizations

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "404": {
    "description": "404",
    "content": {
      "text/plain": {
        "examples": {
          "Result": {
            "value": ""
          }
        }
      }
    }
  }
}
```

---

### GET /contacts/organizations/custom-fields
**Summary:** Get Organizations Custom Fields

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /contacts/tags
**Summary:** Get Contact Tags

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /contacts/tags
**Summary:** Create Tag

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /contacts/tags/{tag_id}
**Summary:** Get Tag by Id

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### PATCH /contacts/tags/{tag_id}
**Summary:** Update Tag

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### DELETE /contacts/tags/{tag_id}
**Summary:** Delete Tag

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /products/
**Summary:** Get Products

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": [\n    {\n      \"id\": 38526436,\n      \"code\": \"\",\n      \"title\": \"100 ft Reel of Freeze Free Pipe Heating Cable\",\n      \"is_serial\": true,\n      \"article\": \"\",\n      \"description\": \"Easy Heat\",\n      \"is_enable_expiration_tracking\": false,\n      \"barcodes\": [\n        {\n          \"id\": 77969546,\n          \"code\": \"2100000001880\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"category\": {\n        \"id\": 910696,\n        \"title\": \"Phones\",\n        \"parent_id\": 910695\n      },\n      \"images\": [],\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"warranty\": 3,\n      \"warranty_period\": 1,\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"prices\": {\n        \"306643\": 10,\n        \"306644\": 10,\n        \"386118\": 0,\n        \"386993\": 19,\n        \"386994\": 11,\n        \"387006\": 14,\n        \"391817\": 15.25\n      },\n      \"sernum_codes\": [\n        \"0-0061\",\n        \"0-0062\",\n        \"0-0063\",\n        \"0-0064\",\n        \"0-0065\"\n      ],\n      \"length_mm\": 10,\n      \"width_mm\": 20,\n      \"height_mm\": 30,\n      \"gross_weight_g\": 40,\n      \"dimensions_unit\": \"cm\",\n      \"weight_unit\": \"g\",\n      \"is_dimensions_weight_enabled\": true\n    },\n    {\n      \"id\": 38526437,\n      \"code\": \"\",\n      \"title\": \"24V Normally Closed Actuator w/ aux. switch 18\\\" Wire\",\n      \"is_serial\": true,\n      \"article\": \"Z111000\",\n      \"description\": \"Caleffi\",\n      \"is_enable_expiration_tracking\": false,\n      \"barcodes\": [\n        {\n          \"id\": 77969547,\n          \"code\": \"2100000001200\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"category\": {\n        \"id\": 910695,\n        \"title\": \"Retail\"\n      },\n      \"images\": [],\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"warranty\": 12,\n      \"warranty_period\": 1,\n      \"custom_fields\": {},\n      \"prices\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387006\": 0,\n        \"391817\": 0,\n        \"538042\": 0,\n        \"546421\": 0,\n        \"546422\": 0,\n        \"546423\": 0,\n        \"546424\": 0,\n        \"546432\": 0\n      },\n      \"sernum_codes\": [],\n      \"length_mm\": 20,\n      \"width_mm\": 30,\n      \"height_mm\": 40,\n      \"gross_weight_g\": 10,\n      \"dimensions_unit\": \"mm\",\n      \"weight_unit\": \"kg\",\n      \"is_dimensions_weight_enabled\": true\n    },\n    {\n      \"id\": 38526438,\n      \"code\": \"\",\n      \"title\": \"3/4\\\" GF 15/26 Iron Pump Flange Pair (NPT)\",\n      \"is_serial\": false,\n      \"article\": \"519601\",\n      \"description\": \"Grundfos\",\n      \"is_enable_expiration_tracking\": false,\n      \"barcodes\": [\n        {\n          \"id\": 77969548,\n          \"code\": \"2100000001187\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"category\": {\n        \"id\": 817091,\n        \"title\": \"Spare parts\"\n      },\n      \"images\": [],\n      \"uom\": {\n        \"id\": 21,\n        \"description\": \"Acre\",\n        \"title\": \"ac\"\n      },\n      \"warranty\": 3,\n      \"warranty_period\": 1,\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"prices\": {\n        \"306643\": 10,\n        \"306644\": 10,\n        \"386118\": 0,\n        \"386993\": 20,\n        \"386994\": 12,\n        \"387006\": 15,\n        \"391817\": 16\n      },\n      \"length_mm\": null,\n      \"width_mm\": null,\n      \"height_mm\": null,\n      \"gross_weight_g\": null,\n      \"dimensions_unit\": null,\n      \"weight_unit\": null,\n      \"is_dimensions_weight_enabled\": false\n    }\n]"
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /products/
**Summary:** Create Product

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": ""
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /products/{product_id}
**Summary:** Get Product by ID

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"id\": 38526437,\n  \"code\": \"\",\n  \"title\": \"24V Normally Closed Actuator w/ aux. switch 18\\\" Wire\",\n  \"is_serial\": true,\n  \"article\": \"Z111000\",\n  \"description\": \"Caleffi\",\n  \"is_enable_expiration_tracking\": false,\n  \"barcodes\": [\n    {\n      \"id\": 77969547,\n      \"code\": \"2100000001200\",\n      \"type\": \"ean13\"\n    }\n  ],\n  \"category\": {\n    \"id\": 910695,\n    \"title\": \"Retail\"\n  },\n  \"images\": [],\n  \"uom\": {\n    \"id\": 1,\n    \"description\": \"Pieces\",\n    \"title\": \"pcs\"\n  },\n  \"warranty\": 12,\n  \"warranty_period\": 1,\n  \"custom_fields\": {},\n  \"prices\": {\n    \"306643\": 12.5,\n    \"306644\": 10.0,\n    \"386118\": 0,\n    \"386993\": 22.0,\n    \"386994\": 13.0,\n    \"387006\": 16.0,\n    \"391817\": 17.25\n  },\n  \"sernum_codes\": [],\n  \"length_mm\": 480,\n  \"width_mm\": 120,\n  \"height_mm\": 85,\n  \"gross_weight_g\": 1800,\n  \"dimensions_unit\": \"cm\",\n  \"weight_unit\": \"kg\",\n  \"is_dimensions_weight_enabled\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "example": 38526437,
              "default": 0
            },
            "code": {
              "type": "string",
              "example": ""
            },
            "title": {
              "type": "string",
              "example": "24V Normally Closed Actuator w/ aux. switch 18\" Wire"
            },
            "is_serial": {
              "type": "boolean",
              "example": true,
              "default": true
            },
            "article": {
              "type": "string",
              "example": "Z111000"
            },
            "description": {
              "type": "string",
              "example": "Caleffi"
            },
            "is_enable_expiration_tracking": {
              "type": "boolean",
              "example": false,
              "default": true
            },
            "barcodes": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "example": 77969547,
                    "default": 0
                  },
                  "code": {
                    "type": "string",
                    "example": "2100000001200"
                  },
                  "type": {
                    "type": "string",
                    "example": "ean13"
                  }
                }
              }
            },
            "category": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer",
                  "example": 910695,
                  "default": 0
                },
                "title": {
                  "type": "string",
                  "example": "Retail"
                }
              }
            },
            "images": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {}
              }
            },
            "uom": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer",
                  "example": 1,
                  "default": 0
                },
                "description": {
                  "type": "string",
                  "example": "Pieces"
                },
                "title": {
                  "type": "string",
                  "example": "pcs"
                }
              }
            },
            "warranty": {
              "type": "integer",
              "example": 12,
              "default": 0
            },
            "warranty_period": {
              "type": "integer",
              "example": 1,
              "default": 0
            },
            "custom_fields": {
              "type": "object",
              "properties": {}
            },
            "prices": {
              "type": "object",
              "properties": {
                "306643": {
                  "type": "number",
                  "example": 12.5,
                  "default": 0
                },
                "306644": {
                  "type": "integer",
                  "example": 10,
                  "default": 0
                },
                "386118": {
                  "type": "integer",
                  "example": 0,
                  "default": 0
                },
                "386993": {
                  "type": "integer",
                  "example": 22,
                  "default": 0
                },
                "386994": {
                  "type": "integer",
                  "example": 13,
                  "default": 0
                },
                "387006": {
                  "type": "integer",
                  "example": 16,
                  "default": 0
                },
                "391817": {
                  "type": "number",
                  "example": 17.25,
                  "default": 0
                }
              }
            },
            "sernum_codes": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {}
              }
            },
            "length_mm": {
              "type": "integer",
              "example": 480,
              "default": 0
            },
            "width_mm": {
              "type": "integer",
              "example": 120,
              "default": 0
            },
            "height_mm": {
              "type": "integer",
              "example": 85,
              "default": 0
            },
            "gross_weight_g": {
              "type": "integer",
              "example": 1800,
              "default": 0
            },
            "dimensions_unit": {
              "type": "string",
              "example": "cm"
            },
            "weight_unit": {
              "type": "string",
              "example": "kg"
            },
            "is_dimensions_weight_enabled": {
              "type": "boolean",
              "example": true,
              "default": true
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### PUT /products/{product_id}
**Summary:** Update Product

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /warehouse/categories/
**Summary:** Get Product Categories

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /services/
**Summary:** Get Services

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### POST /services/
**Summary:** Create Service

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /services/{service_id}
**Summary:** Get Service by ID

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### PUT /services/{service_id}
**Summary:** Update Service

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /services/categories/
**Summary:** Get Service Categories

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /bundles/
**Summary:** Get Bundles

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": [\n    {\n      \"id\": 43,\n      \"title\": \"\u0421\u043a\u0430\u043d\u0435\u0440\",\n      \"description\": \"\u0421\u043a\u0430\u043d\u0435\u04401\",\n      \"price\": 70\n    },\n    {\n      \"id\": 128,\n      \"title\": \"\u041d\u0430\u0431\u0456\u0440\",\n      \"description\": \"\",\n      \"price\": 5499\n    },\n    {\n      \"id\": 7596,\n      \"title\": \"qwqwe\",\n      \"description\": \"\",\n      \"price\": 330\n    },\n    {\n      \"id\": 8741,\n      \"title\": \"awdawd\",\n      \"description\": \"\",\n      \"price\": 0\n    },\n    {\n      \"id\": 8745,\n      \"title\": \"awdawd\",\n      \"description\": \"\",\n      \"price\": 0\n    },\n    {\n      \"id\": 8746,\n      \"title\": \"a3d3ad\",\n      \"description\": \"\",\n      \"price\": 0\n    },\n    {\n      \"id\": 9103,\n      \"title\": \"\u0430\u0430\u0430\u0430\u0430\u0430\u0430\",\n      \"description\": \"\",\n      \"price\": 0\n    },\n    {\n      \"id\": 9108,\n      \"title\": \"jhbnbb\",\n      \"description\": \"\",\n      \"price\": 0\n    },\n    {\n      \"id\": 9109,\n      \"title\": \"xffxv\",\n      \"description\": \"\",\n      \"price\": 136.53\n    },\n    {\n      \"id\": 9110,\n      \"title\": \"zxcczxc\",\n      \"description\": \"\",\n      \"price\": 300\n    },\n    {\n      \"id\": 9111,\n      \"title\": \"131223\",\n      \"description\": \"\",\n      \"price\": 300\n    },\n    {\n      \"id\": 9112,\n      \"title\": \"xcxcxz\",\n      \"description\": \"\",\n      \"price\": 0\n    }\n  ],\n  \"page\": 1,\n  \"count\": 12,\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "example": 43,
                    "default": 0
                  },
                  "title": {
                    "type": "string",
                    "example": "\u0421\u043a\u0430\u043d\u0435\u0440"
                  },
                  "description": {
                    "type": "string",
                    "example": "\u0421\u043a\u0430\u043d\u0435\u04401"
                  },
                  "price": {
                    "type": "integer",
                    "example": 70,
                    "default": 0
                  }
                }
              }
            },
            "page": {
              "type": "integer",
              "example": 1,
              "default": 0
            },
            "count": {
              "type": "integer",
              "example": 12,
              "default": 0
            },
            "success": {
              "type": "boolean",
              "example": true,
              "default": true
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /bundles/{bundle_id}/entities/
**Summary:** Get Bundle Entities

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": [\n    {\n      \"id\": 33901,\n      \"title\": \"\u0421\u043a\u0430\u043d\u0435\u0440\",\n      \"entity_id\": 42740720,\n      \"discount\": {\n        \"sum\": 0,\n        \"pst\": 0\n      },\n      \"warranty\": {\n        \"warranty\": 0,\n        \"warranty_period\": 0\n      },\n      \"price_id\": 7955\n    },\n    {\n      \"id\": 33900,\n      \"title\": \"awawlawl\",\n      \"entity_id\": 14335866,\n      \"discount\": {\n        \"sum\": 0,\n        \"pst\": 0\n      },\n      \"warranty\": {\n        \"warranty\": 0,\n        \"warranty_period\": 0\n      },\n      \"custom_price\": 70\n    }\n  ],\n  \"page\": 1,\n  \"count\": 2,\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "example": 33901,
                    "default": 0
                  },
                  "title": {
                    "type": "string",
                    "example": "\u0421\u043a\u0430\u043d\u0435\u0440"
                  },
                  "entity_id": {
                    "type": "integer",
                    "example": 42740720,
                    "default": 0
                  },
                  "discount": {
                    "type": "object",
                    "properties": {
                      "sum": {
                        "type": "integer",
                        "example": 0,
                        "default": 0
                      },
                      "pst": {
                        "type": "integer",
                        "example": 0,
                        "default": 0
                      }
                    }
                  },
                  "warranty": {
                    "type": "object",
                    "properties": {
                      "warranty": {
                        "type": "integer",
                        "example": 0,
                        "default": 0
                      },
                      "warranty_period": {
                        "type": "integer",
                        "example": 0,
                        "default": 0
                      }
                    }
                  },
                  "price_id": {
                    "type": "integer",
                    "example": 7955,
                    "default": 0
                  }
                }
              }
            },
            "page": {
              "type": "integer",
              "example": 1,
              "default": 0
            },
            "count": {
              "type": "integer",
              "example": 2,
              "default": 0
            },
            "success": {
              "type": "boolean",
              "example": true,
              "default": true
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /marketing/reviews
**Summary:** Get Customer Reviews

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /marketing/campaigns/
**Summary:** Get Ad Campaigns

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": [\n    {\n      \"id\": 32776,\n      \"name\": \"\u041b\u0438\u0441\u0442\u043e\u0432\u043a\u0430\",\n      \"branch_ids\": [],\n      \"start_at\": 1596229200000,\n      \"finish_at\": 1598907599000\n    },\n    {\n      \"id\": 30491,\n      \"name\": \"\u0417\u043d\u0430\u043a\u043e\u043c\u044b\u0435\",\n      \"branch_ids\": [\n        60623,\n        15965\n      ],\n      \"start_at\": null,\n      \"finish_at\": null\n    },\n    {\n      \"id\": 30492,\n      \"name\": \"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442\",\n      \"branch_ids\": [],\n      \"start_at\": null,\n      \"finish_at\": null\n    }\n  ],\n  \"count\": 3,\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "example": 32776,
                    "default": 0
                  },
                  "name": {
                    "type": "string",
                    "example": "\u041b\u0438\u0441\u0442\u043e\u0432\u043a\u0430"
                  },
                  "branch_ids": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {}
                    }
                  },
                  "start_at": {
                    "type": "integer",
                    "example": 1596229200000,
                    "default": 0
                  },
                  "finish_at": {
                    "type": "integer",
                    "example": 1598907599000,
                    "default": 0
                  }
                }
              }
            },
            "count": {
              "type": "integer",
              "example": 3,
              "default": 0
            },
            "success": {
              "type": "boolean",
              "example": true,
              "default": true
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /margins/
**Summary:** Get Prices

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /catalogs/uoms
**Summary:** Get Units of measurement

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /sales
**Summary:** Get Sales

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": [\n    {\n      \"id\": 23097650,\n      \"id_label\": \"A026\",\n      \"created_at\": 1747750438000,\n      \"created_by_id\": 206037,\n      \"client_id\": 33775229,\n      \"warehouse_id\": 3649247,\n      \"products\": [\n        {\n          \"title\": \"Ailun Glass Screen Protector for iPhone 11\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 100,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 23097146,\n      \"id_label\": \"B5\",\n      \"created_at\": 1747748797000,\n      \"created_by_id\": 206037,\n      \"client_id\": 30780995,\n      \"products\": [\n        {\n          \"title\": \"Charging port clean up\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 9,\n          \"cost\": 0,\n          \"discount_value\": 1,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 23096908,\n      \"id_label\": \"B4\",\n      \"created_at\": 1747747916000,\n      \"created_by_id\": 206037,\n      \"client_id\": 32283770,\n      \"products\": [\n        {\n          \"title\": \"Installation service\",\n          \"uom\": {\n            \"id\": 29,\n            \"description\": \"Hour\",\n            \"title\": \"h\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 1,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {\n        \"id\": 349684,\n        \"name\": \"Outdoor Ad\"\n      }\n    },\n    {\n      \"id\": 23096882,\n      \"id_label\": \"B3\",\n      \"created_at\": 1747747857000,\n      \"created_by_id\": 206037,\n      \"products\": [\n        {\n          \"title\": \"Keyboard Replacement\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 1,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 23096872,\n      \"id_label\": \"B2\",\n      \"created_at\": 1747747824000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29071672,\n      \"products\": [\n        {\n          \"title\": \"Diagnostics\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 150,\n          \"cost\": 100,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 23096848,\n      \"id_label\": \"B1\",\n      \"created_at\": 1747747758000,\n      \"created_by_id\": 206037,\n      \"products\": [\n        {\n          \"title\": \"Computer assembly\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 800,\n          \"cost\": 500,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 23095514,\n      \"id_label\": \"A025\",\n      \"created_at\": 1747743122000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29061680,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Ailun Glass Screen Protector for iPhone 11\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 5,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {\n        \"id\": 349684,\n        \"name\": \"Outdoor Ad\"\n      }\n    },\n    {\n      \"id\": 22323393,\n      \"id_label\": \"A024\",\n      \"created_at\": 1741174806000,\n      \"created_by_id\": 206037,\n      \"warehouse_id\": 3649247,\n      \"products\": [\n        {\n          \"title\": \"Ailun Glass Screen Protector for iPhone 11\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 100,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 21100232,\n      \"id_label\": \"A023\",\n      \"created_at\": 1730985717000,\n      \"created_by_id\": 206038,\n      \"client_id\": 31152179,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"100 ft Reel of Freeze Free Pipe Heating Cable\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 19,\n          \"cost\": 5,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20705779,\n      \"id_label\": \"A022\",\n      \"created_at\": 1727795264000,\n      \"created_by_id\": 206037,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Anker 100W 4-Port\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"0994920\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 10.45,\n          \"cost\": 35,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20640425,\n      \"id_label\": \"A021\",\n      \"created_at\": 1727272945000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29553739,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple iPhone 12 mini\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MW121212\",\n          \"amount\": 1,\n          \"price\": 600,\n          \"cost\": 300,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {\n        \"id\": 396021,\n        \"name\": \"Instagram\"\n      }\n    },\n    {\n      \"id\": 20617918,\n      \"id_label\": \"A020\",\n      \"created_at\": 1727099049000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29071672,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple 12W USB Power Adapter\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MD836LL/A\",\n          \"amount\": 1,\n          \"price\": 200,\n          \"cost\": 10,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20617780,\n      \"id_label\": \"A019\",\n      \"created_at\": 1727098607000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29071672,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Certificate 100\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 100,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {\n        \"id\": 396021,\n        \"name\": \"Instagram\"\n      }\n    },\n    {\n      \"id\": 20480717,\n      \"id_label\": \"A018\",\n      \"created_at\": 1726049964000,\n      \"created_by_id\": 206039,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple AirPods Pro\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"10324\",\n          \"amount\": 1,\n          \"price\": 200,\n          \"cost\": 180,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20480699,\n      \"id_label\": \"A017\",\n      \"created_at\": 1726049917000,\n      \"created_by_id\": 206039,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple 12W USB Power Adapter\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MD836LL/A\",\n          \"amount\": 1,\n          \"price\": 20,\n          \"cost\": 10,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20470256,\n      \"id_label\": \"A016\",\n      \"created_at\": 1725966938000,\n      \"created_by_id\": 206039,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple Case (Clear) for iPhone 11\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MWVG2ZM/A\",\n          \"amount\": 1,\n          \"price\": 40,\n          \"cost\": 20,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20468488,\n      \"id_label\": \"A015\",\n      \"created_at\": 1725961302000,\n      \"created_by_id\": 206037,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Ailun Glass Screen Protector for iPhone 11\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 20,\n          \"cost\": 1000,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20463371,\n      \"id_label\": \"A014\",\n      \"created_at\": 1725895792000,\n      \"created_by_id\": 206039,\n      \"client_id\": 31152179,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Air Case Iphone 5\",\n          \"uom\": {\n            \"id\": 9,\n            \"description\": \"Foot\",\n            \"title\": \"ft\"\n          },\n          \"code\": \"\",\n          \"article\": \"m002\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 37,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20391394,\n      \"id_label\": \"A013\",\n      \"created_at\": 1725359928000,\n      \"created_by_id\": 206038,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple 12W USB Power Adapter\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MD836LL/A\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 10,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 19015249,\n      \"id_label\": \"A011\",\n      \"created_at\": 1714564937000,\n      \"created_by_id\": 206037,\n      \"client_id\": 27354461,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple iPhone 12 mini\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MW121212\",\n          \"amount\": 1,\n          \"price\": 600,\n          \"cost\": 300,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 19015024,\n      \"id_label\": \"A010\",\n      \"created_at\": 1714563986000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29061680,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple AirPods Pro\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"10324\",\n          \"amount\": 1,\n          \"price\": 200,\n          \"cost\": 145,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {\n        \"id\": 396022,\n        \"name\": \"Google Map\"\n      }\n    },\n    {\n      \"id\": 19013667,\n      \"id_label\": \"A009\",\n      \"created_at\": 1714558561000,\n      \"created_by_id\": 206037,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple iPhone 14 Purple 128Gb 9-0080\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 500,\n          \"cost\": 429,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920513,\n      \"id_label\": \"A008\",\n      \"created_at\": 1713769668000,\n      \"created_by_id\": 206037,\n      \"client_id\": 27354451,\n      \"products\": [\n        {\n          \"title\": \"Baseband IC\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 40,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        },\n        {\n          \"title\": \"Battery service \",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920502,\n      \"id_label\": \"A007\",\n      \"created_at\": 1713769633000,\n      \"created_by_id\": 206037,\n      \"client_id\": 30780995,\n      \"products\": [\n        {\n          \"title\": \"Baseband IC\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 40,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        },\n        {\n          \"title\": \"Charging port clean up\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920490,\n      \"id_label\": \"A006\",\n      \"created_at\": 1713769589000,\n      \"created_by_id\": 206037,\n      \"client_id\": 27354461,\n      \"products\": [\n        {\n          \"title\": \"Clean dust\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 100,\n          \"cost\": 50,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        },\n        {\n          \"title\": \"Camera repair\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 25,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920484,\n      \"id_label\": \"A005\",\n      \"created_at\": 1713769554000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29061708,\n      \"products\": [\n        {\n          \"title\": \"Battery service \",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        },\n        {\n          \"title\": \"Diagnostic\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920434,\n      \"id_label\": \"A004\",\n      \"created_at\": 1713769269000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29071672,\n      \"products\": [\n        {\n          \"title\": \"Screen replacement iPhone X\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 72,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920413,\n      \"id_label\": \"A003\",\n      \"created_at\": 1713769160000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29061615,\n      \"products\": [\n        {\n          \"title\": \"Camera repair\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 25,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        },\n        {\n          \"title\": \"Battery service \",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        },\n        {\n          \"title\": \"Diagnostic\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920404,\n      \"id_label\": \"A002\",\n      \"created_at\": 1713769088000,\n      \"created_by_id\": 206037,\n      \"client_id\": 27277963,\n      \"products\": [\n        {\n          \"title\": \"Diagnostics\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 150,\n          \"cost\": 100,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920388,\n      \"id_label\": \"A001\",\n      \"created_at\": 1713769044000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29061680,\n      \"products\": [\n        {\n          \"title\": \"Diagnostic\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    }\n  ],\n  \"page\": 1,\n  \"count\": 30,\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "example": 23097650,
                    "default": 0
                  },
                  "id_label": {
                    "type": "string",
                    "example": "A026"
                  },
                  "created_at": {
                    "type": "integer",
                    "example": 1747750438000,
                    "default": 0
                  },
                  "created_by_id": {
                    "type": "integer",
                    "example": 206037,
                    "default": 0
                  },
                  "client_id": {
                    "type": "integer",
                    "example": 33775229,
                    "default": 0
                  },
                  "warehouse_id": {
                    "type": "integer",
                    "example": 3649247,
                    "default": 0
                  },
                  "products": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "title": {
                          "type": "string",
                          "example": "Ailun Glass Screen Protector for iPhone 11"
                        },
                        "uom": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "integer",
                              "example": 1,
                              "default": 0
                            },
                            "description": {
                              "type": "string",
                              "example": "Pieces"
                            },
                            "title": {
                              "type": "string",
                              "example": "pcs"
                            }
                          }
                        },
                        "code": {
                          "type": "string",
                          "example": ""
                        },
                        "article": {
                          "type": "string",
                          "example": ""
                        },
                        "amount": {
                          "type": "integer",
                          "example": 1,
                          "default": 0
                        },
                        "price": {
                          "type": "integer",
                          "example": 10,
                          "default": 0
                        },
                        "cost": {
                          "type": "integer",
                          "example": 100,
                          "default": 0
                        },
                        "discount_value": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "service": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "type": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        }
                      }
                    }
                  },
                  "description": {
                    "type": "string",
                    "example": ""
                  },
                  "ad_campaign": {
                    "type": "object",
                    "properties": {}
                  }
                }
              }
            },
            "page": {
              "type": "integer",
              "example": 1,
              "default": 0
            },
            "count": {
              "type": "integer",
              "example": 30,
              "default": 0
            },
            "success": {
              "type": "boolean",
              "example": true,
              "default": true
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /sales/{id}
**Summary:** Copy of Get Sales

```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": [\n    {\n      \"id\": 23097650,\n      \"id_label\": \"A026\",\n      \"created_at\": 1747750438000,\n      \"created_by_id\": 206037,\n      \"client_id\": 33775229,\n      \"warehouse_id\": 3649247,\n      \"products\": [\n        {\n          \"title\": \"Ailun Glass Screen Protector for iPhone 11\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 100,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 23097146,\n      \"id_label\": \"B5\",\n      \"created_at\": 1747748797000,\n      \"created_by_id\": 206037,\n      \"client_id\": 30780995,\n      \"products\": [\n        {\n          \"title\": \"Charging port clean up\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 9,\n          \"cost\": 0,\n          \"discount_value\": 1,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 23096908,\n      \"id_label\": \"B4\",\n      \"created_at\": 1747747916000,\n      \"created_by_id\": 206037,\n      \"client_id\": 32283770,\n      \"products\": [\n        {\n          \"title\": \"Installation service\",\n          \"uom\": {\n            \"id\": 29,\n            \"description\": \"Hour\",\n            \"title\": \"h\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 1,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {\n        \"id\": 349684,\n        \"name\": \"Outdoor Ad\"\n      }\n    },\n    {\n      \"id\": 23096882,\n      \"id_label\": \"B3\",\n      \"created_at\": 1747747857000,\n      \"created_by_id\": 206037,\n      \"products\": [\n        {\n          \"title\": \"Keyboard Replacement\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 1,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 23096872,\n      \"id_label\": \"B2\",\n      \"created_at\": 1747747824000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29071672,\n      \"products\": [\n        {\n          \"title\": \"Diagnostics\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 150,\n          \"cost\": 100,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 23096848,\n      \"id_label\": \"B1\",\n      \"created_at\": 1747747758000,\n      \"created_by_id\": 206037,\n      \"products\": [\n        {\n          \"title\": \"Computer assembly\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 800,\n          \"cost\": 500,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 23095514,\n      \"id_label\": \"A025\",\n      \"created_at\": 1747743122000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29061680,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Ailun Glass Screen Protector for iPhone 11\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 5,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {\n        \"id\": 349684,\n        \"name\": \"Outdoor Ad\"\n      }\n    },\n    {\n      \"id\": 22323393,\n      \"id_label\": \"A024\",\n      \"created_at\": 1741174806000,\n      \"created_by_id\": 206037,\n      \"warehouse_id\": 3649247,\n      \"products\": [\n        {\n          \"title\": \"Ailun Glass Screen Protector for iPhone 11\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 100,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 21100232,\n      \"id_label\": \"A023\",\n      \"created_at\": 1730985717000,\n      \"created_by_id\": 206038,\n      \"client_id\": 31152179,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"100 ft Reel of Freeze Free Pipe Heating Cable\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 19,\n          \"cost\": 5,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20705779,\n      \"id_label\": \"A022\",\n      \"created_at\": 1727795264000,\n      \"created_by_id\": 206037,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Anker 100W 4-Port\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"0994920\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 10.45,\n          \"cost\": 35,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20640425,\n      \"id_label\": \"A021\",\n      \"created_at\": 1727272945000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29553739,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple iPhone 12 mini\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MW121212\",\n          \"amount\": 1,\n          \"price\": 600,\n          \"cost\": 300,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {\n        \"id\": 396021,\n        \"name\": \"Instagram\"\n      }\n    },\n    {\n      \"id\": 20617918,\n      \"id_label\": \"A020\",\n      \"created_at\": 1727099049000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29071672,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple 12W USB Power Adapter\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MD836LL/A\",\n          \"amount\": 1,\n          \"price\": 200,\n          \"cost\": 10,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20617780,\n      \"id_label\": \"A019\",\n      \"created_at\": 1727098607000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29071672,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Certificate 100\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 100,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {\n        \"id\": 396021,\n        \"name\": \"Instagram\"\n      }\n    },\n    {\n      \"id\": 20480717,\n      \"id_label\": \"A018\",\n      \"created_at\": 1726049964000,\n      \"created_by_id\": 206039,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple AirPods Pro\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"10324\",\n          \"amount\": 1,\n          \"price\": 200,\n          \"cost\": 180,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20480699,\n      \"id_label\": \"A017\",\n      \"created_at\": 1726049917000,\n      \"created_by_id\": 206039,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple 12W USB Power Adapter\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MD836LL/A\",\n          \"amount\": 1,\n          \"price\": 20,\n          \"cost\": 10,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20470256,\n      \"id_label\": \"A016\",\n      \"created_at\": 1725966938000,\n      \"created_by_id\": 206039,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple Case (Clear) for iPhone 11\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MWVG2ZM/A\",\n          \"amount\": 1,\n          \"price\": 40,\n          \"cost\": 20,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20468488,\n      \"id_label\": \"A015\",\n      \"created_at\": 1725961302000,\n      \"created_by_id\": 206037,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Ailun Glass Screen Protector for iPhone 11\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 20,\n          \"cost\": 1000,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20463371,\n      \"id_label\": \"A014\",\n      \"created_at\": 1725895792000,\n      \"created_by_id\": 206039,\n      \"client_id\": 31152179,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Air Case Iphone 5\",\n          \"uom\": {\n            \"id\": 9,\n            \"description\": \"Foot\",\n            \"title\": \"ft\"\n          },\n          \"code\": \"\",\n          \"article\": \"m002\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 37,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20391394,\n      \"id_label\": \"A013\",\n      \"created_at\": 1725359928000,\n      \"created_by_id\": 206038,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple 12W USB Power Adapter\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MD836LL/A\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 10,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 19015249,\n      \"id_label\": \"A011\",\n      \"created_at\": 1714564937000,\n      \"created_by_id\": 206037,\n      \"client_id\": 27354461,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple iPhone 12 mini\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MW121212\",\n          \"amount\": 1,\n          \"price\": 600,\n          \"cost\": 300,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 19015024,\n      \"id_label\": \"A010\",\n      \"created_at\": 1714563986000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29061680,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple AirPods Pro\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"10324\",\n          \"amount\": 1,\n          \"price\": 200,\n          \"cost\": 145,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {\n        \"id\": 396022,\n        \"name\": \"Google Map\"\n      }\n    },\n    {\n      \"id\": 19013667,\n      \"id_label\": \"A009\",\n      \"created_at\": 1714558561000,\n      \"created_by_id\": 206037,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple iPhone 14 Purple 128Gb 9-0080\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 500,\n          \"cost\": 429,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920513,\n      \"id_label\": \"A008\",\n      \"created_at\": 1713769668000,\n      \"created_by_id\": 206037,\n      \"client_id\": 27354451,\n      \"products\": [\n        {\n          \"title\": \"Baseband IC\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 40,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        },\n        {\n          \"title\": \"Battery service \",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920502,\n      \"id_label\": \"A007\",\n      \"created_at\": 1713769633000,\n      \"created_by_id\": 206037,\n      \"client_id\": 30780995,\n      \"products\": [\n        {\n          \"title\": \"Baseband IC\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 40,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        },\n        {\n          \"title\": \"Charging port clean up\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920490,\n      \"id_label\": \"A006\",\n      \"created_at\": 1713769589000,\n      \"created_by_id\": 206037,\n      \"client_id\": 27354461,\n      \"products\": [\n        {\n          \"title\": \"Clean dust\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 100,\n          \"cost\": 50,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        },\n        {\n          \"title\": \"Camera repair\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 25,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920484,\n      \"id_label\": \"A005\",\n      \"created_at\": 1713769554000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29061708,\n      \"products\": [\n        {\n          \"title\": \"Battery service \",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        },\n        {\n          \"title\": \"Diagnostic\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920434,\n      \"id_label\": \"A004\",\n      \"created_at\": 1713769269000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29071672,\n      \"products\": [\n        {\n          \"title\": \"Screen replacement iPhone X\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 72,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920413,\n      \"id_label\": \"A003\",\n      \"created_at\": 1713769160000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29061615,\n      \"products\": [\n        {\n          \"title\": \"Camera repair\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 25,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        },\n        {\n          \"title\": \"Battery service \",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        },\n        {\n          \"title\": \"Diagnostic\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920404,\n      \"id_label\": \"A002\",\n      \"created_at\": 1713769088000,\n      \"created_by_id\": 206037,\n      \"client_id\": 27277963,\n      \"products\": [\n        {\n          \"title\": \"Diagnostics\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 150,\n          \"cost\": 100,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920388,\n      \"id_label\": \"A001\",\n      \"created_at\": 1713769044000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29061680,\n      \"products\": [\n        {\n          \"title\": \"Diagnostic\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    }\n  ],\n  \"page\": 1,\n  \"count\": 30,\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "example": 23097650,
                    "default": 0
                  },
                  "id_label": {
                    "type": "string",
                    "example": "A026"
                  },
                  "created_at": {
                    "type": "integer",
                    "example": 1747750438000,
                    "default": 0
                  },
                  "created_by_id": {
                    "type": "integer",
                    "example": 206037,
                    "default": 0
                  },
                  "client_id": {
                    "type": "integer",
                    "example": 33775229,
                    "default": 0
                  },
                  "warehouse_id": {
                    "type": "integer",
                    "example": 3649247,
                    "default": 0
                  },
                  "products": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "title": {
                          "type": "string",
                          "example": "Ailun Glass Screen Protector for iPhone 11"
                        },
                        "uom": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "integer",
                              "example": 1,
                              "default": 0
                            },
                            "description": {
                              "type": "string",
                              "example": "Pieces"
                            },
                            "title": {
                              "type": "string",
                              "example": "pcs"
                            }
                          }
                        },
                        "code": {
                          "type": "string",
                          "example": ""
                        },
                        "article": {
                          "type": "string",
                          "example": ""
                        },
                        "amount": {
                          "type": "integer",
                          "example": 1,
                          "default": 0
                        },
                        "price": {
                          "type": "integer",
                          "example": 10,
                          "default": 0
                        },
                        "cost": {
                          "type": "integer",
                          "example": 100,
                          "default": 0
                        },
                        "discount_value": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "service": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "type": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        }
                      }
                    }
                  },
                  "description": {
                    "type": "string",
                    "example": ""
                  },
                  "ad_campaign": {
                    "type": "object",
                    "properties": {}
                  }
                }
              }
            },
            "page": {
              "type": "integer",
              "example": 1,
              "default": 0
            },
            "count": {
              "type": "integer",
              "example": 30,
              "default": 0
            },
            "success": {
              "type": "boolean",
              "example": true,
              "default": true
            }
          }
        }
      }
    }
  },
  "400": {
    "description": "400",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {}
        }
      }
    }
  }
}
```

---

### GET /finance/cashflow-categories
**Summary:** No summary

```json
{
  "200": {
    "description": ""
  }
}
```

---

### GET /finance/cashflow-categories/{id}
**Summary:** Copy of 

```json
{
  "200": {
    "description": ""
  }
}
```

---

### GET /finance/accounts
**Summary:** No summary

```json
{
  "200": {
    "description": ""
  }
}
```

---

### GET /finance/accounts/{id}/transactions
**Summary:** Copy of Copy of 

```json
{
  "200": {
    "description": ""
  }
}
```

---

### GET /finance/accounts/{account_id}/transactions/{transaction_id}
**Summary:** Copy of Copy of Copy of 

```json
{
  "200": {
    "description": ""
  }
}
```

---

### DELETE /finance/accounts/{account_id}/transactions/{transaction_id}
**Summary:** Copy of Copy of Copy of Copy of 

```json
{
  "200": {
    "description": ""
  }
}
```

---

### GET /finance/accounts/{account_id}
**Summary:** Copy of 

```json
{
  "200": {
    "description": ""
  }
}
```

---

### POST /finance/accounts/{account_id}/transactions
**Summary:** No summary

```json
{
  "200": {
    "description": ""
  }
}
```

---

### POST /finance/accounts:transfer
**Summary:** Copy of 

```json
{
  "200": {
    "description": ""
  }
}
```

---

