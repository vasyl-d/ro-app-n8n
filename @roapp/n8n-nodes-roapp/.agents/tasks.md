### GET /tasks
**Summary:** Get Tasks

### Parameters for GET /tasks
```json
[
  {
    "name": "page",
    "in": "query",
    "description": "Page number",
    "schema": {
      "type": "integer",
      "format": "int32"
    }
  },
  {
    "name": "sort_dir",
    "in": "query",
    "description": "Sorting direction",
    "schema": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    }
  },
  {
    "name": "author_ids[]",
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
    "name": "assignee_ids[]",
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
    "name": "deadline_at[]",
    "in": "query",
    "description": "Filter by the Task Deadline date. An array of one or two values that contain a timestamp. If the array consists of one value, then it is the left border. Examples: [0, 1454277600000], [1454277500000].",
    "schema": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "date-time"
      }
    }
  }
]
```

### Response for GET /tasks
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

### Parameters for POST /tasks
```json
{}
```

### Response for POST /tasks
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

### GET /tasks
**Summary:** Get Tasks

### Parameters for GET /tasks
```json
[
  {
    "name": "page",
    "in": "query",
    "description": "Page number",
    "schema": {
      "type": "integer",
      "format": "int32"
    }
  },
  {
    "name": "sort_dir",
    "in": "query",
    "description": "Sorting direction",
    "schema": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    }
  },
  {
    "name": "author_ids[]",
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
    "name": "assignee_ids[]",
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
    "name": "deadline_at[]",
    "in": "query",
    "description": "Filter by the Task Deadline date. An array of one or two values that contain a timestamp. If the array consists of one value, then it is the left border. Examples: [0, 1454277600000], [1454277500000].",
    "schema": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "date-time"
      }
    }
  }
]
```

### Response for GET /tasks
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

### Parameters for POST /tasks
```json
{}
```

### Response for POST /tasks
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

### GET /tasks
**Summary:** Get Tasks

### Parameters for GET /tasks
```json
[
  {
    "name": "page",
    "in": "query",
    "description": "Page number",
    "schema": {
      "type": "integer",
      "format": "int32"
    }
  },
  {
    "name": "sort_dir",
    "in": "query",
    "description": "Sorting direction",
    "schema": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    }
  },
  {
    "name": "author_ids[]",
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
    "name": "assignee_ids[]",
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
    "name": "deadline_at[]",
    "in": "query",
    "description": "Filter by the Task Deadline date. An array of one or two values that contain a timestamp. If the array consists of one value, then it is the left border. Examples: [0, 1454277600000], [1454277500000].",
    "schema": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "date-time"
      }
    }
  }
]
```

### Response for GET /tasks
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

### Parameters for POST /tasks
```json
{}
```

### Response for POST /tasks
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

### GET /tasks
**Summary:** Get Tasks

### Parameters for GET /tasks
```json
[
  {
    "name": "page",
    "in": "query",
    "description": "Page number",
    "schema": {
      "type": "integer",
      "format": "int32"
    }
  },
  {
    "name": "sort_dir",
    "in": "query",
    "description": "Sorting direction",
    "schema": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    }
  },
  {
    "name": "author_ids[]",
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
    "name": "assignee_ids[]",
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
    "name": "deadline_at[]",
    "in": "query",
    "description": "Filter by the Task Deadline date. An array of one or two values that contain a timestamp. If the array consists of one value, then it is the left border. Examples: [0, 1454277600000], [1454277500000].",
    "schema": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "date-time"
      }
    }
  }
]
```

### Response for GET /tasks
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

### Parameters for POST /tasks
```json
{}
```

### Response for POST /tasks
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

### Parameters for GET /tasks/{task_id}
```json
[
  {
    "name": "task_id",
    "in": "path",
    "description": "Task ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /tasks/{task_id}
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

### Parameters for PUT /tasks/{task_id}
```json
[
  {
    "name": "task_id",
    "in": "path",
    "description": "Task ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for PUT /tasks/{task_id}
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

### Parameters for POST /tasks/{task_id}/close
```json
[
  {
    "name": "task_id",
    "in": "path",
    "description": "Task ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for POST /tasks/{task_id}/close
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

### Parameters for POST /tasks/{task_id}/reopen
```json
[
  {
    "name": "task_id",
    "in": "path",
    "description": "Task ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for POST /tasks/{task_id}/reopen
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

### Parameters for POST /tasks/{task_id}/comments
```json
[
  {
    "name": "task_id",
    "in": "path",
    "description": "Task ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for POST /tasks/{task_id}/comments
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

