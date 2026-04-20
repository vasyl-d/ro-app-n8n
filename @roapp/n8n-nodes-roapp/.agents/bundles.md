### GET /bundles/
**Summary:** Get Bundles

### Parameters for GET /bundles/
```json
{}
```

### Response for GET /bundles/
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

### Parameters for GET /bundles/{bundle_id}/entities/
```json
[
  {
    "name": "bundle_id",
    "in": "path",
    "description": "Bundle ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /bundles/{bundle_id}/entities/
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

