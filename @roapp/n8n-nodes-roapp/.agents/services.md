### GET /services/
**Summary:** Get Services

### Parameters for GET /services/
```json
[
  {
    "name": "ids[]",
    "in": "query",
    "description": "Service ID",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  {
    "name": "categories[]",
    "in": "query",
    "description": "Service category",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  {
    "name": "title",
    "in": "query",
    "description": "Service name (exact match).",
    "schema": {
      "type": "string"
    }
  },
  {
    "name": "barcodes[]",
    "in": "query",
    "description": "Service barcode",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  {
    "name": "q",
    "in": "query",
    "description": "Search by text in title, code, barcode.",
    "schema": {
      "type": "string"
    }
  }
]
```

### Response for GET /services/
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

### Parameters for POST /services/
```json
{}
```

### Response for POST /services/
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

### Parameters for GET /services/{service_id}
```json
[
  {
    "name": "service_id",
    "in": "path",
    "description": "Service ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /services/{service_id}
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

### Parameters for PUT /services/{service_id}
```json
[
  {
    "name": "service_id",
    "in": "path",
    "description": "Service ID",
    "schema": {
      "type": "string"
    },
    "required": true
  }
]
```

### Response for PUT /services/{service_id}
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

### Parameters for GET /services/categories/
```json
{}
```

### Response for GET /services/categories/
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

