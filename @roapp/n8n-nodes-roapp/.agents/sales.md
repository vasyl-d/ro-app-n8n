### GET /sales
**Summary:** Get Sales

### Parameters for GET /sales
```json
[
  {
    "name": "page",
    "in": "query",
    "description": "Page number",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": false
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
    "in": "query",
    "name": "created_by_ids",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer"
      }
    },
    "description": "List of Employee IDs"
  },
  {
    "in": "query",
    "name": "client_ids",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer"
      }
    },
    "description": "List of Client (Person / Organization) IDs"
  },
  {
    "in": "query",
    "name": "sort",
    "schema": {
      "type": "string",
      "enum": [
        "id",
        "-id"
      ]
    },
    "required": false,
    "description": "Defines the sorting order of returned results. Use a field name to sort ascending or prefix it with a minus sign (-) to sort descending."
  }
]
```

### Response for GET /sales
```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": [\n    {\n      \"id\": 23097650,\n      \"id_label\": \"A026\",\n      \"created_at\": 1747750438000,\n      \"created_by_id\": 206037,\n      \"client_id\": 33775229,\n      \"warehouse_id\": 3649247,\n      \"products\": [\n        {\n          \"title\": \"Ailun Glass Screen Protector for iPhone 11\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 100,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 23097146,\n      \"id_label\": \"B5\",\n      \"created_at\": 1747748797000,\n      \"created_by_id\": 206037,\n      \"client_id\": 30780995,\n      \"products\": [\n        {\n          \"title\": \"Charging port clean up\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 9,\n          \"cost\": 0,\n          \"discount_value\": 1,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 23096908,\n      \"id_label\": \"B4\",\n      \"created_at\": 1747747916000,\n      \"created_by_id\": 206037,\n      \"client_id\": 32283770,\n      \"products\": [\n        {\n          \"title\": \"Installation service\",\n          \"uom\": {\n            \"id\": 29,\n            \"description\": \"Hour\",\n            \"title\": \"h\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 1,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {\n        \"id\": 349684,\n        \"name\": \"Outdoor Ad\"\n      }\n    },\n    {\n      \"id\": 23096882,\n      \"id_label\": \"B3\",\n      \"created_at\": 1747747857000,\n      \"created_by_id\": 206037,\n      \"products\": [\n        {\n          \"title\": \"Keyboard Replacement\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 1,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 23096872,\n      \"id_label\": \"B2\",\n      \"created_at\": 1747747824000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29071672,\n      \"products\": [\n        {\n          \"title\": \"Diagnostics\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 150,\n          \"cost\": 100,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 23096848,\n      \"id_label\": \"B1\",\n      \"created_at\": 1747747758000,\n      \"created_by_id\": 206037,\n      \"products\": [\n        {\n          \"title\": \"Computer assembly\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 800,\n          \"cost\": 500,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 23095514,\n      \"id_label\": \"A025\",\n      \"created_at\": 1747743122000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29061680,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Ailun Glass Screen Protector for iPhone 11\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 5,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {\n        \"id\": 349684,\n        \"name\": \"Outdoor Ad\"\n      }\n    },\n    {\n      \"id\": 22323393,\n      \"id_label\": \"A024\",\n      \"created_at\": 1741174806000,\n      \"created_by_id\": 206037,\n      \"warehouse_id\": 3649247,\n      \"products\": [\n        {\n          \"title\": \"Ailun Glass Screen Protector for iPhone 11\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 100,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 21100232,\n      \"id_label\": \"A023\",\n      \"created_at\": 1730985717000,\n      \"created_by_id\": 206038,\n      \"client_id\": 31152179,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"100 ft Reel of Freeze Free Pipe Heating Cable\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 19,\n          \"cost\": 5,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20705779,\n      \"id_label\": \"A022\",\n      \"created_at\": 1727795264000,\n      \"created_by_id\": 206037,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Anker 100W 4-Port\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"0994920\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 10.45,\n          \"cost\": 35,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20640425,\n      \"id_label\": \"A021\",\n      \"created_at\": 1727272945000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29553739,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple iPhone 12 mini\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MW121212\",\n          \"amount\": 1,\n          \"price\": 600,\n          \"cost\": 300,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {\n        \"id\": 396021,\n        \"name\": \"Instagram\"\n      }\n    },\n    {\n      \"id\": 20617918,\n      \"id_label\": \"A020\",\n      \"created_at\": 1727099049000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29071672,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple 12W USB Power Adapter\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MD836LL/A\",\n          \"amount\": 1,\n          \"price\": 200,\n          \"cost\": 10,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20617780,\n      \"id_label\": \"A019\",\n      \"created_at\": 1727098607000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29071672,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Certificate 100\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 100,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {\n        \"id\": 396021,\n        \"name\": \"Instagram\"\n      }\n    },\n    {\n      \"id\": 20480717,\n      \"id_label\": \"A018\",\n      \"created_at\": 1726049964000,\n      \"created_by_id\": 206039,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple AirPods Pro\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"10324\",\n          \"amount\": 1,\n          \"price\": 200,\n          \"cost\": 180,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20480699,\n      \"id_label\": \"A017\",\n      \"created_at\": 1726049917000,\n      \"created_by_id\": 206039,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple 12W USB Power Adapter\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MD836LL/A\",\n          \"amount\": 1,\n          \"price\": 20,\n          \"cost\": 10,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20470256,\n      \"id_label\": \"A016\",\n      \"created_at\": 1725966938000,\n      \"created_by_id\": 206039,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple Case (Clear) for iPhone 11\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MWVG2ZM/A\",\n          \"amount\": 1,\n          \"price\": 40,\n          \"cost\": 20,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20468488,\n      \"id_label\": \"A015\",\n      \"created_at\": 1725961302000,\n      \"created_by_id\": 206037,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Ailun Glass Screen Protector for iPhone 11\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 20,\n          \"cost\": 1000,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20463371,\n      \"id_label\": \"A014\",\n      \"created_at\": 1725895792000,\n      \"created_by_id\": 206039,\n      \"client_id\": 31152179,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Air Case Iphone 5\",\n          \"uom\": {\n            \"id\": 9,\n            \"description\": \"Foot\",\n            \"title\": \"ft\"\n          },\n          \"code\": \"\",\n          \"article\": \"m002\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 37,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20391394,\n      \"id_label\": \"A013\",\n      \"created_at\": 1725359928000,\n      \"created_by_id\": 206038,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple 12W USB Power Adapter\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MD836LL/A\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 10,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 19015249,\n      \"id_label\": \"A011\",\n      \"created_at\": 1714564937000,\n      \"created_by_id\": 206037,\n      \"client_id\": 27354461,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple iPhone 12 mini\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MW121212\",\n          \"amount\": 1,\n          \"price\": 600,\n          \"cost\": 300,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 19015024,\n      \"id_label\": \"A010\",\n      \"created_at\": 1714563986000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29061680,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple AirPods Pro\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"10324\",\n          \"amount\": 1,\n          \"price\": 200,\n          \"cost\": 145,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {\n        \"id\": 396022,\n        \"name\": \"Google Map\"\n      }\n    },\n    {\n      \"id\": 19013667,\n      \"id_label\": \"A009\",\n      \"created_at\": 1714558561000,\n      \"created_by_id\": 206037,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple iPhone 14 Purple 128Gb 9-0080\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 500,\n          \"cost\": 429,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920513,\n      \"id_label\": \"A008\",\n      \"created_at\": 1713769668000,\n      \"created_by_id\": 206037,\n      \"client_id\": 27354451,\n      \"products\": [\n        {\n          \"title\": \"Baseband IC\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 40,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        },\n        {\n          \"title\": \"Battery service \",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920502,\n      \"id_label\": \"A007\",\n      \"created_at\": 1713769633000,\n      \"created_by_id\": 206037,\n      \"client_id\": 30780995,\n      \"products\": [\n        {\n          \"title\": \"Baseband IC\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 40,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        },\n        {\n          \"title\": \"Charging port clean up\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920490,\n      \"id_label\": \"A006\",\n      \"created_at\": 1713769589000,\n      \"created_by_id\": 206037,\n      \"client_id\": 27354461,\n      \"products\": [\n        {\n          \"title\": \"Clean dust\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 100,\n          \"cost\": 50,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        },\n        {\n          \"title\": \"Camera repair\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 25,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920484,\n      \"id_label\": \"A005\",\n      \"created_at\": 1713769554000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29061708,\n      \"products\": [\n        {\n          \"title\": \"Battery service \",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        },\n        {\n          \"title\": \"Diagnostic\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920434,\n      \"id_label\": \"A004\",\n      \"created_at\": 1713769269000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29071672,\n      \"products\": [\n        {\n          \"title\": \"Screen replacement iPhone X\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 72,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920413,\n      \"id_label\": \"A003\",\n      \"created_at\": 1713769160000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29061615,\n      \"products\": [\n        {\n          \"title\": \"Camera repair\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 25,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        },\n        {\n          \"title\": \"Battery service \",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        },\n        {\n          \"title\": \"Diagnostic\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920404,\n      \"id_label\": \"A002\",\n      \"created_at\": 1713769088000,\n      \"created_by_id\": 206037,\n      \"client_id\": 27277963,\n      \"products\": [\n        {\n          \"title\": \"Diagnostics\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 150,\n          \"cost\": 100,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920388,\n      \"id_label\": \"A001\",\n      \"created_at\": 1713769044000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29061680,\n      \"products\": [\n        {\n          \"title\": \"Diagnostic\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    }\n  ],\n  \"page\": 1,\n  \"count\": 30,\n  \"success\": true\n}"
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
                    "example": 23097650,
                    "default": 0
                  },
                  "id_label": {
                    "type": "string",
                    "example": "A026"
                  },
                  "created_at": {
                    "type": "integer",
                    "example": 1747750438000,
                    "default": 0
                  },
                  "created_by_id": {
                    "type": "integer",
                    "example": 206037,
                    "default": 0
                  },
                  "client_id": {
                    "type": "integer",
                    "example": 33775229,
                    "default": 0
                  },
                  "warehouse_id": {
                    "type": "integer",
                    "example": 3649247,
                    "default": 0
                  },
                  "products": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "title": {
                          "type": "string",
                          "example": "Ailun Glass Screen Protector for iPhone 11"
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
                          "example": 1,
                          "default": 0
                        },
                        "price": {
                          "type": "integer",
                          "example": 10,
                          "default": 0
                        },
                        "cost": {
                          "type": "integer",
                          "example": 100,
                          "default": 0
                        },
                        "discount_value": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "service": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "type": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        }
                      }
                    }
                  },
                  "description": {
                    "type": "string",
                    "example": ""
                  },
                  "ad_campaign": {
                    "type": "object",
                    "properties": {}
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
              "example": 30,
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

### GET /sales/{id}
**Summary:** Copy of Get Sales

### Parameters for GET /sales/{id}
```json
[
  {
    "in": "path",
    "name": "id",
    "schema": {
      "type": "integer"
    },
    "required": true,
    "description": "Sale ID"
  }
]
```

### Response for GET /sales/{id}
```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": [\n    {\n      \"id\": 23097650,\n      \"id_label\": \"A026\",\n      \"created_at\": 1747750438000,\n      \"created_by_id\": 206037,\n      \"client_id\": 33775229,\n      \"warehouse_id\": 3649247,\n      \"products\": [\n        {\n          \"title\": \"Ailun Glass Screen Protector for iPhone 11\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 100,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 23097146,\n      \"id_label\": \"B5\",\n      \"created_at\": 1747748797000,\n      \"created_by_id\": 206037,\n      \"client_id\": 30780995,\n      \"products\": [\n        {\n          \"title\": \"Charging port clean up\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 9,\n          \"cost\": 0,\n          \"discount_value\": 1,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 23096908,\n      \"id_label\": \"B4\",\n      \"created_at\": 1747747916000,\n      \"created_by_id\": 206037,\n      \"client_id\": 32283770,\n      \"products\": [\n        {\n          \"title\": \"Installation service\",\n          \"uom\": {\n            \"id\": 29,\n            \"description\": \"Hour\",\n            \"title\": \"h\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 1,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {\n        \"id\": 349684,\n        \"name\": \"Outdoor Ad\"\n      }\n    },\n    {\n      \"id\": 23096882,\n      \"id_label\": \"B3\",\n      \"created_at\": 1747747857000,\n      \"created_by_id\": 206037,\n      \"products\": [\n        {\n          \"title\": \"Keyboard Replacement\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 1,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 23096872,\n      \"id_label\": \"B2\",\n      \"created_at\": 1747747824000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29071672,\n      \"products\": [\n        {\n          \"title\": \"Diagnostics\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 150,\n          \"cost\": 100,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 23096848,\n      \"id_label\": \"B1\",\n      \"created_at\": 1747747758000,\n      \"created_by_id\": 206037,\n      \"products\": [\n        {\n          \"title\": \"Computer assembly\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 800,\n          \"cost\": 500,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 23095514,\n      \"id_label\": \"A025\",\n      \"created_at\": 1747743122000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29061680,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Ailun Glass Screen Protector for iPhone 11\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 5,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {\n        \"id\": 349684,\n        \"name\": \"Outdoor Ad\"\n      }\n    },\n    {\n      \"id\": 22323393,\n      \"id_label\": \"A024\",\n      \"created_at\": 1741174806000,\n      \"created_by_id\": 206037,\n      \"warehouse_id\": 3649247,\n      \"products\": [\n        {\n          \"title\": \"Ailun Glass Screen Protector for iPhone 11\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 100,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 21100232,\n      \"id_label\": \"A023\",\n      \"created_at\": 1730985717000,\n      \"created_by_id\": 206038,\n      \"client_id\": 31152179,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"100 ft Reel of Freeze Free Pipe Heating Cable\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 19,\n          \"cost\": 5,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20705779,\n      \"id_label\": \"A022\",\n      \"created_at\": 1727795264000,\n      \"created_by_id\": 206037,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Anker 100W 4-Port\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"0994920\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 10.45,\n          \"cost\": 35,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20640425,\n      \"id_label\": \"A021\",\n      \"created_at\": 1727272945000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29553739,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple iPhone 12 mini\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MW121212\",\n          \"amount\": 1,\n          \"price\": 600,\n          \"cost\": 300,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {\n        \"id\": 396021,\n        \"name\": \"Instagram\"\n      }\n    },\n    {\n      \"id\": 20617918,\n      \"id_label\": \"A020\",\n      \"created_at\": 1727099049000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29071672,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple 12W USB Power Adapter\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MD836LL/A\",\n          \"amount\": 1,\n          \"price\": 200,\n          \"cost\": 10,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20617780,\n      \"id_label\": \"A019\",\n      \"created_at\": 1727098607000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29071672,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Certificate 100\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 100,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {\n        \"id\": 396021,\n        \"name\": \"Instagram\"\n      }\n    },\n    {\n      \"id\": 20480717,\n      \"id_label\": \"A018\",\n      \"created_at\": 1726049964000,\n      \"created_by_id\": 206039,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple AirPods Pro\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"10324\",\n          \"amount\": 1,\n          \"price\": 200,\n          \"cost\": 180,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20480699,\n      \"id_label\": \"A017\",\n      \"created_at\": 1726049917000,\n      \"created_by_id\": 206039,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple 12W USB Power Adapter\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MD836LL/A\",\n          \"amount\": 1,\n          \"price\": 20,\n          \"cost\": 10,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20470256,\n      \"id_label\": \"A016\",\n      \"created_at\": 1725966938000,\n      \"created_by_id\": 206039,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple Case (Clear) for iPhone 11\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MWVG2ZM/A\",\n          \"amount\": 1,\n          \"price\": 40,\n          \"cost\": 20,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20468488,\n      \"id_label\": \"A015\",\n      \"created_at\": 1725961302000,\n      \"created_by_id\": 206037,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Ailun Glass Screen Protector for iPhone 11\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 20,\n          \"cost\": 1000,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20463371,\n      \"id_label\": \"A014\",\n      \"created_at\": 1725895792000,\n      \"created_by_id\": 206039,\n      \"client_id\": 31152179,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Air Case Iphone 5\",\n          \"uom\": {\n            \"id\": 9,\n            \"description\": \"Foot\",\n            \"title\": \"ft\"\n          },\n          \"code\": \"\",\n          \"article\": \"m002\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 37,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 20391394,\n      \"id_label\": \"A013\",\n      \"created_at\": 1725359928000,\n      \"created_by_id\": 206038,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple 12W USB Power Adapter\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MD836LL/A\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 10,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 19015249,\n      \"id_label\": \"A011\",\n      \"created_at\": 1714564937000,\n      \"created_by_id\": 206037,\n      \"client_id\": 27354461,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple iPhone 12 mini\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"MW121212\",\n          \"amount\": 1,\n          \"price\": 600,\n          \"cost\": 300,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 19015024,\n      \"id_label\": \"A010\",\n      \"created_at\": 1714563986000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29061680,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple AirPods Pro\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"10324\",\n          \"amount\": 1,\n          \"price\": 200,\n          \"cost\": 145,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {\n        \"id\": 396022,\n        \"name\": \"Google Map\"\n      }\n    },\n    {\n      \"id\": 19013667,\n      \"id_label\": \"A009\",\n      \"created_at\": 1714558561000,\n      \"created_by_id\": 206037,\n      \"warehouse_id\": 2408160,\n      \"products\": [\n        {\n          \"title\": \"Apple iPhone 14 Purple 128Gb 9-0080\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 500,\n          \"cost\": 429,\n          \"discount_value\": 0,\n          \"service\": false,\n          \"type\": 0\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920513,\n      \"id_label\": \"A008\",\n      \"created_at\": 1713769668000,\n      \"created_by_id\": 206037,\n      \"client_id\": 27354451,\n      \"products\": [\n        {\n          \"title\": \"Baseband IC\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 40,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        },\n        {\n          \"title\": \"Battery service \",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920502,\n      \"id_label\": \"A007\",\n      \"created_at\": 1713769633000,\n      \"created_by_id\": 206037,\n      \"client_id\": 30780995,\n      \"products\": [\n        {\n          \"title\": \"Baseband IC\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 40,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        },\n        {\n          \"title\": \"Charging port clean up\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 10,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920490,\n      \"id_label\": \"A006\",\n      \"created_at\": 1713769589000,\n      \"created_by_id\": 206037,\n      \"client_id\": 27354461,\n      \"products\": [\n        {\n          \"title\": \"Clean dust\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 100,\n          \"cost\": 50,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        },\n        {\n          \"title\": \"Camera repair\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 25,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920484,\n      \"id_label\": \"A005\",\n      \"created_at\": 1713769554000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29061708,\n      \"products\": [\n        {\n          \"title\": \"Battery service \",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        },\n        {\n          \"title\": \"Diagnostic\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920434,\n      \"id_label\": \"A004\",\n      \"created_at\": 1713769269000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29071672,\n      \"products\": [\n        {\n          \"title\": \"Screen replacement iPhone X\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 72,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920413,\n      \"id_label\": \"A003\",\n      \"created_at\": 1713769160000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29061615,\n      \"products\": [\n        {\n          \"title\": \"Camera repair\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 25,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        },\n        {\n          \"title\": \"Battery service \",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        },\n        {\n          \"title\": \"Diagnostic\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920404,\n      \"id_label\": \"A002\",\n      \"created_at\": 1713769088000,\n      \"created_by_id\": 206037,\n      \"client_id\": 27277963,\n      \"products\": [\n        {\n          \"title\": \"Diagnostics\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 150,\n          \"cost\": 100,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 2\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    },\n    {\n      \"id\": 18920388,\n      \"id_label\": \"A001\",\n      \"created_at\": 1713769044000,\n      \"created_by_id\": 206037,\n      \"client_id\": 29061680,\n      \"products\": [\n        {\n          \"title\": \"Diagnostic\",\n          \"uom\": {\n            \"id\": 1,\n            \"description\": \"Pieces\",\n            \"title\": \"pcs\"\n          },\n          \"code\": \"\",\n          \"article\": \"\",\n          \"amount\": 1,\n          \"price\": 50,\n          \"cost\": 0,\n          \"discount_value\": 0,\n          \"service\": true,\n          \"type\": 3\n        }\n      ],\n      \"description\": \"\",\n      \"ad_campaign\": {}\n    }\n  ],\n  \"page\": 1,\n  \"count\": 30,\n  \"success\": true\n}"
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
                    "example": 23097650,
                    "default": 0
                  },
                  "id_label": {
                    "type": "string",
                    "example": "A026"
                  },
                  "created_at": {
                    "type": "integer",
                    "example": 1747750438000,
                    "default": 0
                  },
                  "created_by_id": {
                    "type": "integer",
                    "example": 206037,
                    "default": 0
                  },
                  "client_id": {
                    "type": "integer",
                    "example": 33775229,
                    "default": 0
                  },
                  "warehouse_id": {
                    "type": "integer",
                    "example": 3649247,
                    "default": 0
                  },
                  "products": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "title": {
                          "type": "string",
                          "example": "Ailun Glass Screen Protector for iPhone 11"
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
                          "example": 1,
                          "default": 0
                        },
                        "price": {
                          "type": "integer",
                          "example": 10,
                          "default": 0
                        },
                        "cost": {
                          "type": "integer",
                          "example": 100,
                          "default": 0
                        },
                        "discount_value": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "service": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "type": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        }
                      }
                    }
                  },
                  "description": {
                    "type": "string",
                    "example": ""
                  },
                  "ad_campaign": {
                    "type": "object",
                    "properties": {}
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
              "example": 30,
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

