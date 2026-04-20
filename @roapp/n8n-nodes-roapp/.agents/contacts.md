### GET /contacts/people
**Summary:** Get People

### Parameters for GET /contacts/people
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
    "name": "names",
    "in": "query",
    "description": "List of names",
    "schema": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  {
    "name": "phones",
    "in": "query",
    "description": "List of phones",
    "schema": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  {
    "name": "managers",
    "in": "query",
    "description": "List of Employee IDs",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
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
        "name",
        "-name"
      ]
    }
  }
]
```

### Response for GET /contacts/people
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

### Parameters for POST /contacts/people
```json
{}
```

### Response for POST /contacts/people
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

### Parameters for GET /contacts/people/{person_id}
```json
[
  {
    "name": "person_id",
    "in": "path",
    "description": "Person ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /contacts/people/{person_id}
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

### Parameters for PATCH /contacts/people/{person_id}
```json
[
  {
    "name": "person_id",
    "in": "path",
    "description": "Person ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for PATCH /contacts/people/{person_id}
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

### Parameters for DELETE /contacts/people/{person_id}
```json
[
  {
    "name": "person_id",
    "in": "path",
    "description": "Person ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for DELETE /contacts/people/{person_id}
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

### Parameters for GET /contacts/people/{person_id}/organizations
```json
[
  {
    "name": "person_id",
    "in": "path",
    "description": "Person ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /contacts/people/{person_id}/organizations
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

### Parameters for POST /contacts/people/{person_id}/comments
```json
[
  {
    "name": "person_id",
    "in": "path",
    "description": "Person ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for POST /contacts/people/{person_id}/comments
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

### Parameters for POST /contacts/people/{person_id}/merge
```json
[
  {
    "name": "person_id",
    "in": "path",
    "description": "Person ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for POST /contacts/people/{person_id}/merge
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

### Parameters for GET /contacts/people/custom-fields
```json
{}
```

### Response for GET /contacts/people/custom-fields
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

### Parameters for GET /contacts/organizations
```json
{}
```

### Response for GET /contacts/organizations
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

### Parameters for POST /contacts/organizations
```json
{}
```

### Response for POST /contacts/organizations
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

### Parameters for GET /contacts/organizations/{organization_id}
```json
[
  {
    "name": "organization_id",
    "in": "path",
    "description": "Organization ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /contacts/organizations/{organization_id}
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

### Parameters for PATCH /contacts/organizations/{organization_id}
```json
[
  {
    "name": "organization_id",
    "in": "path",
    "description": "Organization ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for PATCH /contacts/organizations/{organization_id}
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

### Parameters for DELETE /contacts/organizations/{organization_id}
```json
[
  {
    "name": "organization_id",
    "in": "path",
    "description": "Organization ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for DELETE /contacts/organizations/{organization_id}
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

### Parameters for GET /contacts/organizations/{organization_id}/people
```json
[
  {
    "name": "organization_id",
    "in": "path",
    "description": "Organization ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /contacts/organizations/{organization_id}/people
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

### Parameters for POST /contacts/organizations/{organization_id}/people
```json
[
  {
    "name": "organization_id",
    "in": "path",
    "description": "Organization ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for POST /contacts/organizations/{organization_id}/people
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

### Parameters for DELETE /contacts/organizations/{organization_id}/people/{person_id}
```json
[
  {
    "name": "organization_id",
    "in": "path",
    "description": "Organization ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  },
  {
    "name": "person_id",
    "in": "path",
    "description": "Person ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for DELETE /contacts/organizations/{organization_id}/people/{person_id}
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

### Parameters for POST /contacts/organizations/{organization_id}/comments
```json
[
  {
    "name": "organization_id",
    "in": "path",
    "description": "Organization ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for POST /contacts/organizations/{organization_id}/comments
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

### Parameters for POST /contacts/organizations/{organization_id}/merge
```json
[
  {
    "name": "organization_id",
    "in": "path",
    "description": "Organization ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for POST /contacts/organizations/{organization_id}/merge
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

### Parameters for GET /contacts/organizations/custom-fields
```json
{}
```

### Response for GET /contacts/organizations/custom-fields
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

### Parameters for GET /contacts/tags
```json
{}
```

### Response for GET /contacts/tags
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

### Parameters for POST /contacts/tags
```json
{}
```

### Response for POST /contacts/tags
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

### Parameters for GET /contacts/tags/{tag_id}
```json
[
  {
    "name": "tag_id",
    "in": "path",
    "description": "Tag ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /contacts/tags/{tag_id}
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

### Parameters for PATCH /contacts/tags/{tag_id}
```json
[
  {
    "name": "tag_id",
    "in": "path",
    "description": "Tag ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for PATCH /contacts/tags/{tag_id}
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

### Parameters for DELETE /contacts/tags/{tag_id}
```json
[
  {
    "name": "tag_id",
    "in": "path",
    "description": "Tag ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for DELETE /contacts/tags/{tag_id}
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

