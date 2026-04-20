### GET /marketing/reviews
**Summary:** Get Customer Reviews

### Parameters for GET /marketing/reviews
```json
[
  {
    "name": "ordering",
    "in": "query",
    "description": "Defines the sorting order of returned results. Use a field name to sort ascending or prefix it with a minus sign (-) to sort descending.",
    "schema": {
      "type": "string",
      "enum": [
        "id",
        "-id"
      ]
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
        "format": "date"
      }
    }
  }
]
```

### Response for GET /marketing/reviews
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

### Parameters for GET /marketing/campaigns/
```json
{}
```

### Response for GET /marketing/campaigns/
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

