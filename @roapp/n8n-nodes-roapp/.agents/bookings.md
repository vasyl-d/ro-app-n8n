### GET /bookings
**Summary:** Get Bookings

### Parameters for GET /bookings
```json
[
  {
    "name": "page",
    "in": "query",
    "description": "Page number",
    "schema": {
      "type": "integer",
      "format": "int32",
      "default": 1
    }
  },
  {
    "name": "branches",
    "in": "query",
    "description": "List of Location IDs",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  {
    "name": "ids",
    "in": "query",
    "description": "List of Booking IDs",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  {
    "name": "statuses",
    "in": "query",
    "description": "Array of Booking status IDs",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  {
    "name": "assignees",
    "in": "query",
    "description": "Array of employee IDs",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  {
    "name": "clients_ids",
    "in": "query",
    "description": "List of client (person / organization) IDs",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  {
    "name": "client_names",
    "in": "query",
    "description": "List of client (person / organization) names",
    "schema": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  {
    "name": "client_phones",
    "in": "query",
    "description": "List of phone numbers",
    "schema": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  {
    "name": "created_at",
    "in": "query",
    "description": "Filter by creation date. Accepts an array with one or two ISO 8601 date-time values. If one value is provided, it represents the start (left) boundary. If two values are provided, they define a date range (start and end). Examples: [\"2025-05-01T00:00:00Z\"] \u2014 filter from May 1, 2025 onward. [\"2025-05-01T00:00:00Z\", \"2025-05-02T00:00:00Z\"] \u2014 filter between May 1 and May 2, 2025.",
    "schema": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "date-time"
      }
    }
  },
  {
    "name": "modified_at",
    "in": "query",
    "description": "Filter by modification date. Accepts an array with one or two ISO 8601 date-time values. If one value is provided, it represents the start (left) boundary. If two values are provided, they define a date range (start and end). Examples: [\"2025-05-01T00:00:00Z\"] \u2014 filter from May 1, 2025 onward. [\"2025-05-01T00:00:00Z\", \"2025-05-02T00:00:00Z\"] \u2014 filter between May 1 and May 2, 2025.",
    "schema": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "date-time"
      }
    }
  },
  {
    "name": "scheduled_for",
    "in": "query",
    "description": "Filter by \"Scheduled from\" date and time. Accepts an array with one or two ISO 8601 date-time values. If one value is provided, it represents the start (left) boundary. If two values are provided, they define a date range (start and end). Examples: [\"2025-05-01T00:00:00Z\"] \u2014 filter from May 1, 2025 onward. [\"2025-05-01T00:00:00Z\", \"2025-05-02T00:00:00Z\"] \u2014 filter between May 1 and May 2, 2025.",
    "schema": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "date-time"
      }
    }
  },
  {
    "name": "sort",
    "in": "query",
    "description": "Defines the sorting order of returned results. Use a field name to sort ascending or prefix it with a minus sign (-) to sort descending.",
    "schema": {
      "type": "string",
      "enum": [
        "id",
        "-id",
        "modified_at",
        "-modified_at",
        "scheduled_for",
        "-scheduled_for"
      ]
    }
  }
]
```

### Response for GET /bookings
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

### Parameters for POST /bookings
```json
{}
```

### Response for POST /bookings
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

### Parameters for GET /bookings/{booking_id}
```json
[
  {
    "name": "booking_id",
    "in": "path",
    "description": "Booking ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /bookings/{booking_id}
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

### Parameters for PATCH /bookings/{booking_id}
```json
[
  {
    "name": "booking_id",
    "in": "path",
    "description": "Booking ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for PATCH /bookings/{booking_id}
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

### Parameters for DELETE /bookings/{booking_id}
```json
[
  {
    "name": "booking_id",
    "in": "path",
    "description": "Booking ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for DELETE /bookings/{booking_id}
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

### Parameters for POST /bookings/{booking_id}/items
```json
[
  {
    "name": "booking_id",
    "in": "path",
    "description": "Booking ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for POST /bookings/{booking_id}/items
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

### Parameters for GET /bookings/{booking_id}/items
```json
[
  {
    "in": "path",
    "name": "booking_id",
    "schema": {
      "type": "string"
    },
    "required": true,
    "description": "Booking ID"
  }
]
```

### Response for GET /bookings/{booking_id}/items
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

### Parameters for PATCH /bookings/{booking_id}/items/{item_id}
```json
[
  {
    "name": "booking_id",
    "in": "path",
    "description": "Booking ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  },
  {
    "name": "item_id",
    "in": "path",
    "description": "Booking Item ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for PATCH /bookings/{booking_id}/items/{item_id}
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

### Parameters for DELETE /bookings/{booking_id}/items/{item_id}
```json
[
  {
    "name": "booking_id",
    "in": "path",
    "description": "Booking ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  },
  {
    "name": "item_id",
    "in": "path",
    "description": "Booking Item ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for DELETE /bookings/{booking_id}/items/{item_id}
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

