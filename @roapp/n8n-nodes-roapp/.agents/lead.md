### GET /lead/types/
**Summary:** Get Inquiry Types

### Parameters for GET /lead/types/
```json
{}
```

### Response for GET /lead/types/
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

### Parameters for GET /lead/custom-fields/
```json
[
  {
    "name": "leadtype_id",
    "in": "query",
    "description": "Specific inquiry type ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    }
  }
]
```

### Response for GET /lead/custom-fields/
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

### Parameters for GET /lead/
```json
[
  {
    "name": "ids[]",
    "in": "query",
    "description": "List of Inquiry IDs",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  {
    "name": "id_labels[]",
    "in": "query",
    "description": "Array of Inquiry document numbers",
    "schema": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  {
    "name": "statuses[]",
    "in": "query",
    "description": "Array of Inquiry Status IDs",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  {
    "name": "managers[]",
    "in": "query",
    "description": "Array of Employee IDs",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  {
    "name": "names[]",
    "in": "query",
    "description": "List of client names",
    "schema": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  {
    "name": "phones[]",
    "in": "query",
    "description": "List of Client phone numbers",
    "schema": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  {
    "name": "created_at[]",
    "in": "query",
    "description": "Filter by date of creation of inquiries. An array of one or two values that contain a timestamp. If the array consists of one value, then it is the left border. Examples: [0, 1454277600000], [1454277500000].",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int64"
      }
    }
  },
  {
    "name": "modified_at[]",
    "in": "query",
    "description": "Filter by date of modification of inquiries. An array of one or two values that contain a timestamp. If the array consists of one value, then it is the left border. Examples: [0, 1454277600000], [1454277500000].",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int64"
      }
    }
  },
  {
    "name": "closed_at[]",
    "in": "query",
    "description": "Filter by date of closing of inquiries. An array of one or two values that contain a timestamp. If the array consists of one value, then it is the left border. Examples: [0, 1454277600000], [1454277500000].",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int64"
      }
    }
  },
  {
    "name": "page",
    "in": "query",
    "schema": {
      "type": "integer",
      "format": "int32",
      "default": 1
    }
  }
]
```

### Response for GET /lead/
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

### Parameters for POST /lead/
```json
{}
```

### Response for POST /lead/
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

### Parameters for PUT /lead/
```json
{}
```

### Response for PUT /lead/
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

### Parameters for POST /lead/status/
```json
{}
```

### Response for POST /lead/status/
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

### Parameters for POST /lead/{lead_id}/comments
```json
[
  {
    "name": "lead_id",
    "in": "path",
    "description": "Inquiry ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for POST /lead/{lead_id}/comments
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

