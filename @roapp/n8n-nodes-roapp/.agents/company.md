### GET /company
**Summary:** Get Company Information

### Parameters for GET /company
```json
{}
```

### Response for GET /company
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

### Parameters for GET /company/license
```json
{}
```

### Response for GET /company/license
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

### Parameters for GET /company/locations
```json
[
  {
    "name": "is_archived",
    "in": "query",
    "description": "Filters locations by archived status",
    "schema": {
      "type": "boolean"
    }
  },
  {
    "name": "legal_entity_id",
    "in": "query",
    "description": "Legal entity ID",
    "schema": {
      "type": "integer",
      "format": "int32"
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
        "name",
        "-name"
      ]
    }
  }
]
```

### Response for GET /company/locations
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

### Parameters for GET /company/locations/{id}
```json
[
  {
    "name": "id",
    "in": "path",
    "description": "Location ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /company/locations/{id}
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

### Parameters for GET /company/locations/{id}/resources
```json
[
  {
    "name": "id",
    "in": "path",
    "description": "Location ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
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
        "name",
        "-name"
      ]
    }
  }
]
```

### Response for GET /company/locations/{id}/resources
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

### Parameters for GET /company/employees
```json
[
  {
    "name": "sort",
    "in": "query",
    "description": "Defines the sorting order of returned results. Use a field name to sort ascending or prefix it with a minus sign (-) to sort descending.",
    "schema": {
      "type": "string",
      "enum": [
        "id",
        "-id",
        "name",
        "-name"
      ]
    }
  }
]
```

### Response for GET /company/employees
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

### Parameters for GET /company/employees/{id}
```json
[
  {
    "name": "id",
    "in": "path",
    "description": "Employee ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /company/employees/{id}
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

### Parameters for GET /company/legal-entities
```json
[
  {
    "name": "sort",
    "in": "query",
    "description": "Defines the sorting order of returned results. Use a field name to sort ascending or prefix it with a minus sign (-) to sort descending.",
    "schema": {
      "type": "string",
      "enum": [
        "id",
        "-id",
        "name",
        "-name"
      ]
    }
  }
]
```

### Response for GET /company/legal-entities
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

### Parameters for GET /company/legal-entities/{id}
```json
[
  {
    "name": "id",
    "in": "path",
    "description": "Legal entity ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /company/legal-entities/{id}
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

### Parameters for GET /company/taxes
```json
[
  {
    "name": "sort",
    "in": "query",
    "description": "Defines the sorting order of returned results. Use a field name to sort ascending or prefix it with a minus sign (-) to sort descending.",
    "schema": {
      "type": "string",
      "enum": [
        "id",
        "-id",
        "name",
        "-name"
      ]
    }
  }
]
```

### Response for GET /company/taxes
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

### Parameters for GET /company/directories
```json
{}
```

### Response for GET /company/directories
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

### Parameters for GET /company/directories/{id}/items
```json
[
  {
    "name": "id",
    "in": "path",
    "description": "Custom Directory ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  },
  {
    "name": "branch_id",
    "in": "query",
    "description": "Location ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    }
  }
]
```

### Response for GET /company/directories/{id}/items
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

