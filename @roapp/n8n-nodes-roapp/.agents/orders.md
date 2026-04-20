### GET /orders
**Summary:** Get Orders

### Parameters for GET /orders
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
    "name": "types",
    "in": "query",
    "description": "List of Order Type IDs (same as order types)",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
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
    "description": "List of Order IDs",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  {
    "name": "numbers",
    "in": "query",
    "description": "List of Order document numbers",
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
    "description": "List of Order Status IDs",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
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
    "name": "clients_ids",
    "in": "query",
    "description": "List of Client (Person / Organization) IDs",
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
    "description": "List of Client (Person / Organization) names",
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
    "name": "due_date",
    "in": "query",
    "description": "Filter by due date. Accepts an array with one or two ISO 8601 date-time values. If one value is provided, it represents the start (left) boundary. If two values are provided, they define a date range (start and end). Examples: [\"2025-05-01T00:00:00Z\"] \u2014 filter from May 1, 2025 onward. [\"2025-05-01T00:00:00Z\", \"2025-05-02T00:00:00Z\"] \u2014 filter between May 1 and May 2, 2025.",
    "schema": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "date-time"
      }
    }
  },
  {
    "name": "asset_uid",
    "in": "query",
    "description": "List of asset serial numbers (vin, imei)",
    "schema": {
      "type": "array",
      "items": {
        "type": "string"
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
        "-scheduled_for",
        "due_date",
        "-due_date"
      ]
    }
  }
]
```

### Response for GET /orders
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

### Parameters for POST /orders
```json
{}
```

### Response for POST /orders
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

### Parameters for GET /orders/{order_id}
```json
[
  {
    "name": "order_id",
    "in": "path",
    "description": "Order ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /orders/{order_id}
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

### Parameters for PATCH /orders/{order_id}
```json
[
  {
    "name": "order_id",
    "in": "path",
    "description": "Order ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for PATCH /orders/{order_id}
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

### Parameters for GET /orders/{order_id}/items
```json
[
  {
    "name": "order_id",
    "in": "path",
    "description": "Order ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /orders/{order_id}/items
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

### Parameters for POST /orders/{order_id}/items
```json
[
  {
    "name": "order_id",
    "in": "path",
    "description": "Order ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for POST /orders/{order_id}/items
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

### Parameters for PATCH /orders/{order_id}/items/{item_id}
```json
[
  {
    "name": "order_id",
    "in": "path",
    "description": "Order ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  },
  {
    "name": "item_id",
    "in": "path",
    "description": "Order Item ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for PATCH /orders/{order_id}/items/{item_id}
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

### Parameters for POST /orders/{order_id}/status
```json
[
  {
    "name": "order_id",
    "in": "path",
    "description": "Order ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for POST /orders/{order_id}/status
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

### Parameters for POST /orders/{order_id}/comments
```json
[
  {
    "name": "order_id",
    "in": "path",
    "description": "Order ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for POST /orders/{order_id}/comments
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

### Parameters for GET /orders/{order_id}/public-url
```json
[
  {
    "name": "order_id",
    "in": "path",
    "description": "Order ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /orders/{order_id}/public-url
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

### Parameters for GET /orders/statuses
```json
{}
```

### Response for GET /orders/statuses
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

### Parameters for GET /orders/types
```json
{}
```

### Response for GET /orders/types
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

### Parameters for GET /orders/custom-fields
```json
{}
```

### Response for GET /orders/custom-fields
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

