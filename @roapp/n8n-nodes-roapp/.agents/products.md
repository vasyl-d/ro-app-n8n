### GET /products/
**Summary:** Get Products

### Parameters for GET /products/
```json
[
  {
    "name": "ids[]",
    "in": "query",
    "description": "Product ID",
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
    "description": "Product category",
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
    "description": "Product name (exact match).",
    "schema": {
      "type": "string"
    }
  },
  {
    "name": "articles[]",
    "in": "query",
    "description": "Product article",
    "schema": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  {
    "name": "barcodes[]",
    "in": "query",
    "description": "Product barcode",
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
    "description": "Search by text in title, article, code, barcode.",
    "schema": {
      "type": "string"
    }
  }
]
```

### Response for GET /products/
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

### Parameters for POST /products/
```json
{}
```

### Response for POST /products/
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

### Parameters for GET /products/{product_id}
```json
[
  {
    "name": "product_id",
    "in": "path",
    "description": "Product ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /products/{product_id}
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

### Parameters for PUT /products/{product_id}
```json
[
  {
    "name": "product_id",
    "in": "path",
    "description": "Product ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for PUT /products/{product_id}
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

