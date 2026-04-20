### GET /warehouse/
**Summary:** Get Warehouses

### Parameters for GET /warehouse/
```json
[
  {
    "name": "branch_id",
    "in": "query",
    "description": "Location ID",
    "schema": {
      "type": "string"
    }
  },
  {
    "name": "type",
    "in": "query",
    "description": "Type of warehouses that will be returned.",
    "schema": {
      "type": "string",
      "enum": [
        "product",
        "asset"
      ],
      "default": "product"
    }
  }
]
```

### Response for GET /warehouse/
```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": [\n    {\n      \"id\": 87310,\n      \"title\": \"1111\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 87977,\n      \"title\": \"wadwa\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 5762,\n      \"title\": \"test\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 88632,\n      \"title\": \"test123\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 88708,\n      \"title\": \"test123123123\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 87412,\n      \"title\": \"wadkwadkmwadkkakwadjwadkjwdkj\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 12092,\n      \"title\": \"\u0435\u0443\u044b\u0435\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 51735,\n      \"title\": \"333\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 52030,\n      \"title\": \"999\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 52029,\n      \"title\": \"7777\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 6,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 926,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 1450,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 3033,\n      \"title\": \"\u0412\u0438\u0442\u0440\u0438\u043d\u0430 \u041a\u0438\u0440\u043e\u0432\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 52991,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 4266,\n      \"title\": \"\u041d\u043e\u0432\u044b\u0439\",\n      \"is_global\": true,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 96301,\n      \"title\": \"Qwerty\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 611944,\n      \"title\": \"erhhet\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 777159,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434 \u0442\u043e\u0432\u0430\u0440\u043e\u0432\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 1029002,\n      \"title\": \"\u0435\u043a\u0443\u0446\u044b\u0430\u0432\",\n      \"is_global\": true,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 1519523,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 Boris\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 1572477,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434 \u0442\u043e\u0432\u0430\u0440\u043e\u0432\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 2787707,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434 \u0442\u043e\u0432\u0430\u0440\u043e\u0432\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 2833305,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434 \u0442\u043e\u0432\u0430\u0440\u043e\u0432\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 2841935,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434 \u0442\u043e\u0432\u0430\u0440\u043e\u0432\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 79928,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 4267,\n      \"title\": \"\u041d\u043e\u0432\u044b\u0439 2\",\n      \"is_global\": true,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 12912,\n      \"title\": \"\u0422\u0435\u0441\u0442\",\n      \"is_global\": true,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 51740,\n      \"title\": \"33\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 4790,\n      \"title\": \"MOY\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 3097757,\n      \"title\": \"In facilis tempora v\",\n      \"is_global\": true,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 1098798,\n      \"title\": \"test1\",\n      \"is_global\": true,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 3700615,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434 \u0442\u043e\u0432\u0430\u0440\u043e\u0432\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 3716304,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434 \u0442\u043e\u0432\u0430\u0440\u043e\u0432\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 3723813,\n      \"title\": \"\u0421\u043a\u043b\u0430\u0434 \u0442\u043e\u0432\u0430\u0440\u043e\u0432\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 387604,\n      \"title\": \"123\",\n      \"is_global\": false,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 1079726,\n      \"title\": \"test2\",\n      \"is_global\": true,\n      \"type\": \"product\"\n    },\n    {\n      \"id\": 35850,\n      \"title\": \"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\",\n      \"is_global\": true,\n      \"type\": \"product\"\n    }\n  ],\n  \"count\": 38,\n  \"success\": true\n}"
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
                    "example": 87310,
                    "default": 0
                  },
                  "title": {
                    "type": "string",
                    "example": "1111"
                  },
                  "is_global": {
                    "type": "boolean",
                    "example": false,
                    "default": true
                  },
                  "type": {
                    "type": "string",
                    "example": "product"
                  }
                }
              }
            },
            "count": {
              "type": "integer",
              "example": 38,
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

### GET /warehouse/{warehouse_id}/cells
**Summary:** Get Warehouse Bins

### Parameters for GET /warehouse/{warehouse_id}/cells
```json
[
  {
    "name": "warehouse_id",
    "in": "path",
    "description": "Warehouse ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /warehouse/{warehouse_id}/cells
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

### GET /warehouse/goods/{warehouse_id}
**Summary:** Get Stock

### Parameters for GET /warehouse/goods/{warehouse_id}
```json
[
  {
    "name": "warehouse_id",
    "in": "path",
    "description": "Warehouse ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  },
  {
    "name": "title",
    "in": "query",
    "description": "Product title",
    "schema": {
      "type": "string"
    }
  },
  {
    "name": "ids[]",
    "in": "query",
    "description": "Product IDs",
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
    "description": "Product category IDs",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  {
    "name": "articles[]",
    "in": "query",
    "description": "Product SKUs",
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
    "description": "Product barcodes",
    "schema": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  {
    "name": "exclude_zero_residue",
    "in": "query",
    "description": "Exclude products with zero stock balance",
    "schema": {
      "type": "boolean"
    }
  }
]
```

### Response for GET /warehouse/goods/{warehouse_id}
```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": [\n    {\n      \"id\": 38526436,\n      \"code\": \"\",\n      \"title\": \"100 ft Reel of Freeze Free Pipe Heating Cable\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 10,\n        \"306644\": 10,\n        \"386118\": 0,\n        \"386993\": 19,\n        \"386994\": 11,\n        \"387005\": 13,\n        \"387006\": 14,\n        \"391817\": 15.25\n      },\n      \"article\": \"\",\n      \"residue\": 5,\n      \"category\": {\n        \"id\": 910696,\n        \"title\": \"Phones\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"Easy Heat\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001880\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": true,\n      \"warranty\": 3,\n      \"warranty_period\": 1\n    },\n    {\n      \"id\": 38526437,\n      \"code\": \"\",\n      \"title\": \"24V Normally Closed Actuator w/ aux. switch 18\\\" Wire\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"Z111000\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910695,\n        \"title\": \"Retail\"\n      },\n      \"description\": \"Caleffi\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001200\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 1\n    },\n    {\n      \"id\": 38526438,\n      \"code\": \"\",\n      \"title\": \"3/4\\\" GF 15/26 Iron Pump Flange Pair (NPT)\",\n      \"uom\": {\n        \"id\": 21,\n        \"description\": \"Acre\",\n        \"title\": \"ac\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 10,\n        \"306644\": 10,\n        \"386118\": 0,\n        \"386993\": 20,\n        \"386994\": 12,\n        \"387005\": 14,\n        \"387006\": 15,\n        \"391817\": 16\n      },\n      \"article\": \"519601\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 817091,\n        \"title\": \"Spare parts\"\n      },\n      \"description\": \"Grundfos\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001187\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 3,\n      \"warranty_period\": 1\n    },\n    {\n      \"id\": 38526439,\n      \"code\": \"\",\n      \"title\": \"Ailun Glass Screen Protector for iPhone 11\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [\n        \"https://storage.remonline.app/media/company-assets/115231/warehouse-product/cc8074c90fd54c3488ee48caa6a672af_default.jpg\"\n      ],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 10,\n        \"386994\": 6,\n        \"387005\": 7,\n        \"387006\": 8,\n        \"391817\": 8\n      },\n      \"article\": \"\",\n      \"residue\": 8,\n      \"category\": {\n        \"id\": 910696,\n        \"title\": \"Phones\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"Display Anti Scratch Advanced HD Clarity Work Most Case\",\n      \"custom_fields\": {},\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526441,\n      \"code\": \"\",\n      \"title\": \"Air Case Iphone 5\",\n      \"uom\": {\n        \"id\": 9,\n        \"description\": \"Foot\",\n        \"title\": \"ft\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 10,\n        \"306644\": 10,\n        \"386118\": 0,\n        \"386993\": 74,\n        \"386994\": 43,\n        \"387005\": 52,\n        \"387006\": 56,\n        \"391817\": 59.2\n      },\n      \"article\": \"m002\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910714,\n        \"title\": \"Cases\",\n        \"parent_id\": 910703\n      },\n      \"description\": \"\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000586\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526442,\n      \"code\": \"010-100\",\n      \"title\": \"Amazon Basics High-Speed HDMI Cable For Television, A Male to A Male, 18 Gbps, 4K/60Hz, 6 Feet, Black\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"HDMI-6FT-BLACK-1P\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910698,\n        \"title\": \"Cable\",\n        \"parent_id\": 817092\n      },\n      \"description\": \"IN THE BOX: HDMI cable (A Male to A Male) for connecting 2 HDMI-enabled devices; 6 feet long in Black\\nDEVICE COMPATIBLE: Connects Blu-ray players, Fire TV, Apple TV, PS4, PS3, Xbox One, Xbox 360, and computers to TVs, displays, A/V receivers, and more\\nSUPPORTS 4K VIDEO: Supports 4K video at 60 Hz, 2160p, 48-bit/px color depth, as well as bandwidth up to 18Gbps, Ethernet, 3D, and Audio Return Channel (ARC)\\nEASY CONNECTION: Share an Internet connection among multiple devices (no need for a separate Ethernet cable)\\nBACKWARDS COMPATIBLE: Works with earlier versions to allow for use with a wide range of HDMI-enabled devices\\nNOTE: This cable supports up to 4K@60Hz, so if a connected device's output is higher than that standard, the cable won't work properly\",\n      \"custom_fields\": {},\n      \"barcodes\": [],\n      \"is_serial\": false,\n      \"warranty\": 3,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526443,\n      \"code\": \"0994920\",\n      \"title\": \"Anker 100W 4-Port\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 10,\n        \"306644\": 10,\n        \"386118\": 0,\n        \"386993\": 20,\n        \"386994\": 12,\n        \"387005\": 14,\n        \"387006\": 15,\n        \"391817\": 16\n      },\n      \"article\": \"\",\n      \"residue\": 2,\n      \"category\": {\n        \"id\": 910697,\n        \"title\": \"Apple\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"10324, USB-C Charger, Type-C Charging Station with Power Delivery, PowerPort Atom PD 4 [Intelligent Power Allocation] for MacBook Pro/Air, iPad Pro, Pixel, iPhone Xs/Max/XR, Galaxy and more\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000197\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 14,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526444,\n      \"code\": \"\",\n      \"title\": \"Apple 12W USB Power Adapter\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [\n        \"https://storage.remonline.app/media/company-assets/115231/warehouse-product/b8ee9530548a4c30a1aa60e3aacfd347_default.jpeg\"\n      ],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 20,\n        \"386994\": 12,\n        \"387005\": 14,\n        \"387006\": 15,\n        \"391817\": 16\n      },\n      \"article\": \"MD836LL/A\",\n      \"residue\": 2,\n      \"category\": {\n        \"id\": 910697,\n        \"title\": \"Apple\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"\",\n      \"custom_fields\": {\n        \"f7747626\": \"White\"\n      },\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000180\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 14,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526445,\n      \"code\": \"\",\n      \"title\": \"Apple AirPods Pro\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [\n        \"https://storage.remonline.app/media/company-assets/115231/warehouse-product/e8a6e3e1eeb6464ba149b8f6bcc9ea2b_hd.jpg\"\n      ],\n      \"price\": {\n        \"306643\": 200,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 360,\n        \"386994\": 207,\n        \"387005\": 252,\n        \"387006\": 270,\n        \"391817\": 288\n      },\n      \"article\": \"10324\",\n      \"residue\": 4,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"\",\n      \"custom_fields\": {\n        \"f7747626\": \"White\"\n      },\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000029\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 1\n    },\n    {\n      \"id\": 38526446,\n      \"code\": \"\",\n      \"title\": \"Apple Case (Clear) for iPhone 11\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 40,\n        \"306644\": 30,\n        \"386118\": 0,\n        \"386993\": 30,\n        \"386994\": 17,\n        \"387005\": 21,\n        \"387006\": 23,\n        \"391817\": 24\n      },\n      \"article\": \"MWVG2ZM/A\",\n      \"residue\": 25,\n      \"category\": {\n        \"id\": 910703,\n        \"title\": \"Apple Original\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000333\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 14,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526447,\n      \"code\": \"\",\n      \"title\": \"Apple Case (Clear) for iPhone 12\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 15,\n        \"306644\": 15,\n        \"386118\": 0,\n        \"386993\": 30,\n        \"386994\": 17,\n        \"387005\": 21,\n        \"387006\": 23,\n        \"391817\": 24\n      },\n      \"article\": \"\",\n      \"residue\": 5,\n      \"category\": {\n        \"id\": 910714,\n        \"title\": \"Cases\",\n        \"parent_id\": 910703\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001897\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526448,\n      \"code\": \"\",\n      \"title\": \"Apple Case (Clear) for iPhone SE 2020\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910714,\n        \"title\": \"Cases\",\n        \"parent_id\": 910703\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001903\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526449,\n      \"code\": \"\",\n      \"title\": \"Apple Case (Clear) for iPhone XR\",\n      \"uom\": {\n        \"id\": 25,\n        \"description\": \"Gallon\",\n        \"title\": \"gal\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 15,\n        \"306644\": 15,\n        \"386118\": 0,\n        \"386993\": 30,\n        \"386994\": 17,\n        \"387005\": 21,\n        \"387006\": 23,\n        \"391817\": 24\n      },\n      \"article\": \"MRW62ZM/A\",\n      \"residue\": 9,\n      \"category\": {\n        \"id\": 910703,\n        \"title\": \"Apple Original\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"Desc\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000593\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 14,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526450,\n      \"code\": \"\",\n      \"title\": \"Apple Leather Case (Forest Green) for iPhone 11 Pro\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"MWYD2ZM/A\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910703,\n        \"title\": \"Apple Original\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001910\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 14,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526451,\n      \"code\": \"iPhone 11, iPhone 12\",\n      \"title\": \"Apple Lightning to USB Cable (2 m) (Pack of 2)\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"004-220\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910698,\n        \"title\": \"Cable\",\n        \"parent_id\": 817092\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000002511\",\n          \"type\": \"ean13\"\n        },\n        {\n          \"code\": \"2100000002535\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 3,\n      \"warranty_period\": 1\n    },\n    {\n      \"id\": 38526452,\n      \"code\": \"\",\n      \"title\": \"Apple Magic Mouse 2\",\n      \"uom\": {\n        \"id\": 21,\n        \"description\": \"Acre\",\n        \"title\": \"ac\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 10,\n        \"306644\": 10,\n        \"386118\": 0,\n        \"386993\": 20,\n        \"386994\": 12,\n        \"387005\": 14,\n        \"387006\": 15,\n        \"391817\": 16\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910697,\n        \"title\": \"Apple\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001927\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526453,\n      \"code\": \"\",\n      \"title\": \"Apple Silicone Case (Cactus) for iPhone 11 Pro Max\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"MY1G2ZM/A\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910703,\n        \"title\": \"Apple Original\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000227\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 14,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526454,\n      \"code\": \"\",\n      \"title\": \"Apple Silicone Case (Pomegranate) for iPhone 11 Pro Max\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"MXM82ZM/A\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910703,\n        \"title\": \"Apple Original\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000210\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 14,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526455,\n      \"code\": \"53536353\",\n      \"title\": \"Apple Silicone Case (Surf Blue) for iPhone 11 Pro Max\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"MY1J2ZM/A\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910703,\n        \"title\": \"Apple Original\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000203\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 14,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526456,\n      \"code\": \"\",\n      \"title\": \"Apple iPhone 14 Purple 128Gb 9-0080\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [\n        \"https://storage.remonline.app/media/company-assets/115231/warehouse-product/cad9eeb37e3c419cbfcff675f904727c_hd.jpg\"\n      ],\n      \"price\": {\n        \"306643\": 500,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 858,\n        \"386994\": 493,\n        \"387005\": 601,\n        \"387006\": 644,\n        \"391817\": 686.4\n      },\n      \"article\": \"\",\n      \"residue\": 1,\n      \"category\": {\n        \"id\": 910696,\n        \"title\": \"Phones\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001934\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": true,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526457,\n      \"code\": \"\",\n      \"title\": \"Apple iPhone 11 256Gb 0-010203\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910696,\n        \"title\": \"Phones\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001941\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": true,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526458,\n      \"code\": \"\",\n      \"title\": \"Apple iPhone 11 Silicone Case (Pink Sand)\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"MTF82ZM/A\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910714,\n        \"title\": \"Cases\",\n        \"parent_id\": 910703\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000128\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 14,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526459,\n      \"code\": \"\",\n      \"title\": \"Apple iPhone 12 mini\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [\n        \"https://storage.remonline.app/media/company-assets/115231/warehouse-product/44c618784d1d41088f3a23d3b7c1137a_hd.jpg\",\n        \"https://storage.remonline.app/media/company-assets/115231/warehouse-product/f47fb4af23804ef592f8211b3e48e48f_hd.jpg\",\n        \"https://storage.remonline.app/media/company-assets/115231/warehouse-product/978f8bc7d4e34d298d87e0b3c1481b2e_hd.jpg\",\n        \"https://storage.remonline.app/media/company-assets/115231/warehouse-product/6843928151d64bdf82a9b2d47848a740_hd.jpg\"\n      ],\n      \"price\": {\n        \"306643\": 600,\n        \"306644\": 450,\n        \"386118\": 0,\n        \"386993\": 600,\n        \"386994\": 345,\n        \"387005\": 420,\n        \"387006\": 450,\n        \"391817\": 480\n      },\n      \"article\": \"MW121212\",\n      \"residue\": 31,\n      \"category\": {\n        \"id\": 910696,\n        \"title\": \"Phones\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"Apple iPhone 12 mini\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001743\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 1\n    },\n    {\n      \"id\": 38526460,\n      \"code\": \"4684513\",\n      \"title\": \"Apple iPhone 13 256Gb Pink\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910696,\n        \"title\": \"Phones\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001804\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 1\n    },\n    {\n      \"id\": 38526461,\n      \"code\": \"4894651348\",\n      \"title\": \"Apple iPhone 13 Pro 512GB Sierra Blue\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910696,\n        \"title\": \"Phones\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001705\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 1\n    },\n    {\n      \"id\": 38526462,\n      \"code\": \"43535\",\n      \"title\": \"Apple iPhone 13 Silicone Case with MagSafe (PRODUCT) RED\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910697,\n        \"title\": \"Apple\",\n        \"parent_id\": 910695\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001408\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526463,\n      \"code\": \"15P12\",\n      \"title\": \"Apple iPhone 15 Pro 1TB Black Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526464,\n      \"code\": \"15P15\",\n      \"title\": \"Apple iPhone 15 Pro 1TB Blue Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526465,\n      \"code\": \"15P13\",\n      \"title\": \"Apple iPhone 15 Pro 1TB Natural Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526466,\n      \"code\": \"15P14\",\n      \"title\": \"Apple iPhone 15 Pro 1TB White Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526467,\n      \"code\": \"15P256\",\n      \"title\": \"Apple iPhone 15 Pro 256GB Black Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {},\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526468,\n      \"code\": \"15P2561\",\n      \"title\": \"Apple iPhone 15 Pro 256GB Blue Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526469,\n      \"code\": \"15P25611\",\n      \"title\": \"Apple iPhone 15 Pro 256GB Natural Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526470,\n      \"code\": \"15P2562\",\n      \"title\": \"Apple iPhone 15 Pro 256GB White Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526471,\n      \"code\": \"15P512111\",\n      \"title\": \"Apple iPhone 15 Pro 512GB Black Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526472,\n      \"code\": \"15P5123\",\n      \"title\": \"Apple iPhone 15 Pro 512GB Blue Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526473,\n      \"code\": \"15P5125\",\n      \"title\": \"Apple iPhone 15 Pro 512GB Natural Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526474,\n      \"code\": \"15P5126\",\n      \"title\": \"Apple iPhone 15 Pro 512GB White Titanium\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"6.1\u2033\\nSuper Retina XDR display footnote\\nProMotion technology\\nAlways-On display\\n\\nA17 Pro chip with 6-core GPU\\n\\n48MP Main | Ultra Wide | Telephoto\\nSuper-high-resolution photos (24MP and 48MP)\\nUp to 10x optical zoom range\\n\\nUSB\u2011C, Supports USB 3\",\n      \"custom_fields\": {\n        \"f7747626\": \"\"\n      },\n      \"barcodes\": [],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526475,\n      \"code\": \"5490325\",\n      \"title\": \"Apple iPhone SE 2020 64Gb Black\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [\n        \"https://storage.remonline.app/media/company-assets/115231/warehouse-product/23884ad021634945afb4d528e256cc40_hd.jpg\"\n      ],\n      \"price\": {\n        \"306643\": 400,\n        \"306644\": 300,\n        \"386118\": 0,\n        \"386993\": 400,\n        \"386994\": 230,\n        \"387005\": 280,\n        \"387006\": 300,\n        \"391817\": 320\n      },\n      \"article\": \"MX9R2\",\n      \"residue\": 15,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000241\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": true,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526476,\n      \"code\": \"\",\n      \"title\": \"Apple iPhone SE 2020 64Gb White\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"MX9T2\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910704,\n        \"title\": \"Apple\",\n        \"parent_id\": 910696\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000000265\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": true,\n      \"warranty\": 12,\n      \"warranty_period\": 1\n    },\n    {\n      \"id\": 38526477,\n      \"code\": \"\",\n      \"title\": \"Aqua-Pure AP117, Whole House Filter Replacement Cartridge (Carbon Filter Cartridge) - 2 Pack\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"5541731\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 817091,\n        \"title\": \"Spare parts\"\n      },\n      \"description\": \"3M Aqua-Pure\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001958\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 6,\n      \"warranty_period\": 1\n    },\n    {\n      \"id\": 38526478,\n      \"code\": \"\",\n      \"title\": \"Battery A1315 - iPad 1\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 50,\n        \"306644\": 50,\n        \"386118\": 0,\n        \"386993\": 100,\n        \"386994\": 58,\n        \"387005\": 70,\n        \"387006\": 75,\n        \"391817\": 80\n      },\n      \"article\": \"battery-ipad\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910705,\n        \"title\": \"Battery\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001965\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526479,\n      \"code\": \"\",\n      \"title\": \"Battery A1376 - iPad 2\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"battery-ipad\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910705,\n        \"title\": \"Battery\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001972\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526480,\n      \"code\": \"\",\n      \"title\": \"Battery A1389 - iPad 3/4\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"battery-ipad\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910705,\n        \"title\": \"Battery\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001989\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526481,\n      \"code\": \"\",\n      \"title\": \"Battery A1484 - iPad Air 1 / iPad 5 / iPad 6\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"battery-ipad\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910705,\n        \"title\": \"Battery\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000001996\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526482,\n      \"code\": \"\",\n      \"title\": \"Battery A1547 - iPad Air 2\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"battery-ipad\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910705,\n        \"title\": \"Battery\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000002009\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526483,\n      \"code\": \"\",\n      \"title\": \"Battery iPad Mini 1 - A1445\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"battery-ipad\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910705,\n        \"title\": \"Battery\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000002016\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526484,\n      \"code\": \"\",\n      \"title\": \"Battery iPad Mini 2/3 - A1512\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"battery-ipad\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910705,\n        \"title\": \"Battery\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000002023\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526485,\n      \"code\": \"\",\n      \"title\": \"Battery iPad Mini 4 - A1546\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"battery-ipad\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910705,\n        \"title\": \"Battery\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000002030\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    },\n    {\n      \"id\": 38526486,\n      \"code\": \"\",\n      \"title\": \"Battery iPad Mini 5 - A1725\",\n      \"uom\": {\n        \"id\": 1,\n        \"description\": \"Pieces\",\n        \"title\": \"pcs\"\n      },\n      \"image\": [],\n      \"price\": {\n        \"306643\": 0,\n        \"306644\": 0,\n        \"386118\": 0,\n        \"386993\": 0,\n        \"386994\": 0,\n        \"387005\": 0,\n        \"387006\": 0,\n        \"391817\": 0\n      },\n      \"article\": \"battery-ipad\",\n      \"residue\": 0,\n      \"category\": {\n        \"id\": 910705,\n        \"title\": \"Battery\",\n        \"parent_id\": 910697\n      },\n      \"description\": \"\",\n      \"custom_fields\": {},\n      \"barcodes\": [\n        {\n          \"code\": \"2100000002047\",\n          \"type\": \"ean13\"\n        }\n      ],\n      \"is_serial\": false,\n      \"warranty\": 0,\n      \"warranty_period\": 0\n    }\n  ],\n  \"page\": 1,\n  \"count\": 238,\n  \"success\": true\n}"
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
                    "example": 38526436,
                    "default": 0
                  },
                  "code": {
                    "type": "string",
                    "example": ""
                  },
                  "title": {
                    "type": "string",
                    "example": "100 ft Reel of Freeze Free Pipe Heating Cable"
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
                  "image": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {}
                    }
                  },
                  "price": {
                    "type": "object",
                    "properties": {
                      "306643": {
                        "type": "integer",
                        "example": 10,
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
                        "example": 19,
                        "default": 0
                      },
                      "386994": {
                        "type": "integer",
                        "example": 11,
                        "default": 0
                      },
                      "387005": {
                        "type": "integer",
                        "example": 13,
                        "default": 0
                      },
                      "387006": {
                        "type": "integer",
                        "example": 14,
                        "default": 0
                      },
                      "391817": {
                        "type": "number",
                        "example": 15.25,
                        "default": 0
                      }
                    }
                  },
                  "article": {
                    "type": "string",
                    "example": ""
                  },
                  "residue": {
                    "type": "integer",
                    "example": 5,
                    "default": 0
                  },
                  "category": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer",
                        "example": 910696,
                        "default": 0
                      },
                      "title": {
                        "type": "string",
                        "example": "Phones"
                      },
                      "parent_id": {
                        "type": "integer",
                        "example": 910695,
                        "default": 0
                      }
                    }
                  },
                  "description": {
                    "type": "string",
                    "example": "Easy Heat"
                  },
                  "custom_fields": {
                    "type": "object",
                    "properties": {
                      "f7747626": {
                        "type": "string",
                        "example": ""
                      }
                    }
                  },
                  "barcodes": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "code": {
                          "type": "string",
                          "example": "2100000001880"
                        },
                        "type": {
                          "type": "string",
                          "example": "ean13"
                        }
                      }
                    }
                  },
                  "is_serial": {
                    "type": "boolean",
                    "example": true,
                    "default": true
                  },
                  "warranty": {
                    "type": "integer",
                    "example": 3,
                    "default": 0
                  },
                  "warranty_period": {
                    "type": "integer",
                    "example": 1,
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
              "example": 238,
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

### GET /warehouse/goods/{warehouse_id} (COPY)
**Summary:** Get Stock *

### Parameters for GET /warehouse/goods/{warehouse_id} (COPY)
```json
[
  {
    "name": "warehouse_id",
    "in": "path",
    "description": "Warehouse ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  },
  {
    "name": "categories[]",
    "in": "query",
    "description": "Product category IDs",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  {
    "name": "exclude_zero_residue",
    "in": "query",
    "description": "Exclude products with zero stock balance",
    "schema": {
      "type": "boolean"
    }
  },
  {
    "name": "title",
    "in": "query",
    "description": "Product title",
    "schema": {
      "type": "string"
    }
  },
  {
    "name": "article",
    "in": "query",
    "description": "Product SKU",
    "schema": {
      "type": "string"
    }
  },
  {
    "name": "barcode",
    "in": "query",
    "description": "Product barcode",
    "schema": {
      "type": "string"
    }
  }
]
```

### Response for GET /warehouse/goods/{warehouse_id} (COPY)
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

### GET /warehouse/goods/{warehouse_id}/{good_id}
**Summary:** Get Product Serial Numbers

### Parameters for GET /warehouse/goods/{warehouse_id}/{good_id}
```json
[
  {
    "name": "warehouse_id",
    "in": "path",
    "description": "Warehouse ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  },
  {
    "name": "good_id",
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

### Response for GET /warehouse/goods/{warehouse_id}/{good_id}
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

### GET /warehouse/postings/
**Summary:** Get Postings

### Parameters for GET /warehouse/postings/
```json
[
  {
    "name": "page",
    "in": "query",
    "schema": {
      "type": "integer",
      "format": "int32"
    }
  },
  {
    "name": "warehouse_ids[]",
    "in": "query",
    "description": "List of warehouse IDs",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  {
    "name": "supplier_ids[]",
    "in": "query",
    "description": "List of supplier IDs",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  {
    "name": "created_at[]",
    "in": "query",
    "description": "Creation date filter. Single or two values with a timestamp. These are from and to parameters; Example: [0, 1454277600000], [1454277500000];",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int64"
      }
    }
  },
  {
    "name": "ids[]",
    "in": "query",
    "description": "List of posting IDs",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  }
]
```

### Response for GET /warehouse/postings/
```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": [\n    {\n      \"id\": 3329731,\n      \"id_label\": \"A007\",\n      \"created_at\": 1702985134000,\n      \"created_by_id\": 114736,\n      \"supplier_id\": 14069707,\n      \"warehouse_id\": 105810,\n      \"products\": [\n        {\n          \"id\": 13547080,\n          \"title\": \"Car Battery 2.0\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 9,\n          \"price\": 100,\n          \"is_serial\": true,\n          \"sernums\": [\n            {\n              \"id\": 26398329,\n              \"code\": \"0-0001\"\n            },\n            {\n              \"id\": 26398330,\n              \"code\": \"0-0002\"\n            },\n            {\n              \"id\": 26398331,\n              \"code\": \"0-0003\"\n            },\n            {\n              \"id\": 26398332,\n              \"code\": \"0-0004\"\n            },\n            {\n              \"id\": 26398333,\n              \"code\": \"0-0005\"\n            },\n            {\n              \"id\": 26398334,\n              \"code\": \"0-0006\"\n            },\n            {\n              \"id\": 26398335,\n              \"code\": \"0-0007\"\n            },\n            {\n              \"id\": 26398336,\n              \"code\": \"0-0008\"\n            },\n            {\n              \"id\": 26398337,\n              \"code\": \"0-0009\"\n            }\n          ]\n        }\n      ],\n      \"description\": \"Created due to the product transfer to the inventory serialization\",\n      \"document_number\": \"\"\n    },\n    {\n      \"id\": 3280235,\n      \"id_label\": \"A006\",\n      \"created_at\": 1649181947000,\n      \"created_by_id\": 112125,\n      \"supplier_id\": 13746109,\n      \"warehouse_id\": 105810,\n      \"products\": [\n        {\n          \"id\": 13543067,\n          \"title\": \"Power Bank Portable Charger 20W\",\n          \"uom\": {\n            \"id\": 13,\n            \"description\": \"Kilogram\",\n            \"title\": \"kg\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 15,\n          \"price\": 80,\n          \"is_serial\": false,\n          \"sernums\": []\n        }\n      ],\n      \"description\": \"\",\n      \"document_number\": \"\"\n    },\n    {\n      \"id\": 3277038,\n      \"id_label\": \"A005\",\n      \"created_at\": 1644251052000,\n      \"created_by_id\": 112125,\n      \"supplier_id\": 13746109,\n      \"warehouse_id\": 105810,\n      \"products\": [\n        {\n          \"id\": 13543062,\n          \"title\": \"Spark Plug\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 10,\n          \"price\": 6,\n          \"is_serial\": false,\n          \"sernums\": []\n        }\n      ],\n      \"description\": \"\",\n      \"document_number\": \"\"\n    },\n    {\n      \"id\": 3277027,\n      \"id_label\": \"A004\",\n      \"created_at\": 1644238592000,\n      \"created_by_id\": 112125,\n      \"supplier_id\": 13746109,\n      \"warehouse_id\": 105810,\n      \"products\": [\n        {\n          \"id\": 13543067,\n          \"title\": \"Power Bank Portable Charger 20W\",\n          \"uom\": {\n            \"id\": 13,\n            \"description\": \"Kilogram\",\n            \"title\": \"kg\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 100,\n          \"is_serial\": false,\n          \"sernums\": []\n        }\n      ],\n      \"description\": \"\",\n      \"document_number\": \"\"\n    },\n    {\n      \"id\": 3277022,\n      \"id_label\": \"A003\",\n      \"created_at\": 1644236608000,\n      \"created_by_id\": 112125,\n      \"supplier_id\": 13746109,\n      \"warehouse_id\": 105810,\n      \"products\": [\n        {\n          \"id\": 13547080,\n          \"title\": \"Car Battery 2.0\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 10,\n          \"price\": 100,\n          \"is_serial\": false,\n          \"sernums\": []\n        }\n      ],\n      \"description\": \"\",\n      \"document_number\": \"\"\n    },\n    {\n      \"id\": 3276896,\n      \"id_label\": \"A002\",\n      \"created_at\": 1643963687000,\n      \"created_by_id\": 112125,\n      \"supplier_id\": 13746109,\n      \"warehouse_id\": 105810,\n      \"products\": [\n        {\n          \"id\": 13545168,\n          \"title\": \"Tire 1\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 10,\n          \"price\": 7,\n          \"is_serial\": false,\n          \"sernums\": []\n        }\n      ],\n      \"description\": \"\",\n      \"document_number\": \"\"\n    },\n    {\n      \"id\": 3276720,\n      \"id_label\": \"A001\",\n      \"created_at\": 1643729776000,\n      \"created_by_id\": 112125,\n      \"supplier_id\": 13746109,\n      \"warehouse_id\": 105810,\n      \"products\": [\n        {\n          \"id\": 13543067,\n          \"title\": \"Power Bank Portable Charger 20W\",\n          \"uom\": {\n            \"id\": 13,\n            \"description\": \"Kilogram\",\n            \"title\": \"kg\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 10,\n          \"price\": 89,\n          \"is_serial\": false,\n          \"sernums\": []\n        },\n        {\n          \"id\": 13543066,\n          \"title\": \"Radiator Tube\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 10,\n          \"price\": 3,\n          \"is_serial\": false,\n          \"sernums\": []\n        },\n        {\n          \"id\": 13543062,\n          \"title\": \"Spark Plug\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 10,\n          \"price\": 9,\n          \"is_serial\": false,\n          \"sernums\": []\n        }\n      ],\n      \"description\": \"\",\n      \"document_number\": \"\"\n    }\n  ],\n  \"page\": 1,\n  \"count\": 7,\n  \"success\": true\n}"
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
                    "example": 3329731,
                    "default": 0
                  },
                  "id_label": {
                    "type": "string",
                    "example": "A007"
                  },
                  "created_at": {
                    "type": "integer",
                    "example": 1702985134000,
                    "default": 0
                  },
                  "created_by_id": {
                    "type": "integer",
                    "example": 114736,
                    "default": 0
                  },
                  "supplier_id": {
                    "type": "integer",
                    "example": 14069707,
                    "default": 0
                  },
                  "warehouse_id": {
                    "type": "integer",
                    "example": 105810,
                    "default": 0
                  },
                  "products": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 13547080,
                          "default": 0
                        },
                        "title": {
                          "type": "string",
                          "example": "Car Battery 2.0"
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
                        "code": {
                          "type": "string",
                          "example": ""
                        },
                        "article": {
                          "type": "string",
                          "example": ""
                        },
                        "amount": {
                          "type": "integer",
                          "example": 9,
                          "default": 0
                        },
                        "price": {
                          "type": "integer",
                          "example": 100,
                          "default": 0
                        },
                        "is_serial": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "sernums": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 26398329,
                                "default": 0
                              },
                              "code": {
                                "type": "string",
                                "example": "0-0001"
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "description": {
                    "type": "string",
                    "example": "Created due to the product transfer to the inventory serialization"
                  },
                  "document_number": {
                    "type": "string",
                    "example": ""
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
              "example": 7,
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

### POST /warehouse/postings/
**Summary:** Create Posting

### Parameters for POST /warehouse/postings/
```json
{}
```

### Response for POST /warehouse/postings/
```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": {\n    \"id\": 3809076,\n    \"id_label\": \"F00312\"\n  },\n  \"success\": true\n}"
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
                  "example": 3809076,
                  "default": 0
                },
                "id_label": {
                  "type": "string",
                  "example": "F00312"
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

### GET /warehouse/moves/
**Summary:** Get Transfers

### Parameters for GET /warehouse/moves/
```json
[
  {
    "name": "page",
    "in": "query",
    "schema": {
      "type": "integer",
      "format": "int32"
    }
  },
  {
    "name": "branch_id",
    "in": "query",
    "description": "Filter by ID of location from which the transfer was made",
    "required": true,
    "schema": {
      "type": "integer",
      "format": "int32"
    }
  },
  {
    "name": "warehouse_id",
    "in": "query",
    "description": "Filter by ID of warehouse from which the transfer was made",
    "schema": {
      "type": "integer",
      "format": "int32"
    }
  },
  {
    "name": "ids[]",
    "in": "query",
    "description": "List of transfers document IDs",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int64"
      }
    }
  }
]
```

### Response for GET /warehouse/moves/
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

### POST /warehouse/moves/
**Summary:** Create Transfer

### Parameters for POST /warehouse/moves/
```json
{}
```

### Response for POST /warehouse/moves/
```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"id\": 837186,\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "example": 837186,
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

### GET /warehouse/outcome-transactions/
**Summary:** Get Write-Offs

### Parameters for GET /warehouse/outcome-transactions/
```json
[
  {
    "name": "page",
    "in": "query",
    "schema": {
      "type": "integer",
      "format": "int32"
    }
  },
  {
    "name": "branch_id",
    "in": "query",
    "description": "Filter by ID of location from which the transfer was made",
    "required": true,
    "schema": {
      "type": "integer",
      "format": "int32"
    }
  },
  {
    "name": "warehouse_id",
    "in": "query",
    "description": "Filter by ID of warehouse from which the transfer was made",
    "schema": {
      "type": "integer",
      "format": "int32"
    }
  },
  {
    "name": "ids[]",
    "in": "query",
    "description": "List of transfers document IDs",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int64"
      }
    }
  }
]
```

### Response for GET /warehouse/outcome-transactions/
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

### POST /warehouse/outcome-transactions/
**Summary:** Create Write-off

### Parameters for POST /warehouse/outcome-transactions/
```json
{}
```

### Response for POST /warehouse/outcome-transactions/
```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"id\": 4627872,\n  \"success\": true\n}"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "example": 4627872,
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

### GET /warehouse/assets
**Summary:** Get Assets

### Parameters for GET /warehouse/assets
```json
[
  {
    "name": "ids[]",
    "in": "query",
    "description": "Assets id",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  {
    "name": "uid[]",
    "in": "query",
    "description": "Serial numbers of assets (VIN, IMEI)",
    "schema": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  {
    "name": "warehouse_id[]",
    "in": "query",
    "description": "Warehouses ID",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  {
    "name": "owner_id[]",
    "in": "query",
    "description": "Assets owners ID",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  }
]
```

### Response for GET /warehouse/assets
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

### POST /warehouse/assets
**Summary:** Create Asset

### Parameters for POST /warehouse/assets
```json
[
  {
    "name": "token",
    "in": "query",
    "description": "auth token",
    "schema": {
      "type": "string"
    }
  }
]
```

### Response for POST /warehouse/assets
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

### GET /warehouse/assets/{asset_id}
**Summary:** Get Asset by ID

### Parameters for GET /warehouse/assets/{asset_id}
```json
[
  {
    "name": "asset_id",
    "in": "path",
    "description": "Asset ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /warehouse/assets/{asset_id}
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

### POST /warehouse/assets/{asset_id}
**Summary:** Update Asset

### Parameters for POST /warehouse/assets/{asset_id}
```json
[
  {
    "name": "asset_id",
    "in": "path",
    "description": "Asset ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for POST /warehouse/assets/{asset_id}
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

### POST /warehouse/assets/{asset_id}/move
**Summary:** Move Asset

### Parameters for POST /warehouse/assets/{asset_id}/move
```json
[
  {
    "name": "asset_id",
    "in": "path",
    "description": "Asset ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for POST /warehouse/assets/{asset_id}/move
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

### GET /warehouse/assets/custom-fields/
**Summary:** Get Asset Custom Fields

### Parameters for GET /warehouse/assets/custom-fields/
```json
{}
```

### Response for GET /warehouse/assets/custom-fields/
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

### GET /warehouse/assets/directories
**Summary:** Get Directories of Assets

### Parameters for GET /warehouse/assets/directories
```json
[
  {
    "name": "parent_id",
    "in": "query",
    "description": "Parent directory ID. If not specified, the directories of Asset groups will be given.",
    "schema": {
      "type": "integer",
      "format": "int32"
    }
  }
]
```

### Response for GET /warehouse/assets/directories
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

### GET /warehouse/categories/
**Summary:** Get Product Categories

### Parameters for GET /warehouse/categories/
```json
{}
```

### Response for GET /warehouse/categories/
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

