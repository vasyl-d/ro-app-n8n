### GET /invoices
**Summary:** Get Invoices

### Parameters for GET /invoices
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
    "name": "legal_entity_id",
    "in": "query",
    "description": "Legal entity ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    }
  },
  {
    "name": "ids",
    "in": "query",
    "description": "List of Invoice IDs",
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
    "description": "List of Invoice document numbers",
    "schema": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  {
    "name": "payment_method",
    "in": "query",
    "description": "Invoice payment method",
    "schema": {
      "type": "string",
      "enum": [
        "cash",
        "cashless",
        "credit_card"
      ]
    }
  },
  {
    "name": "statuses",
    "in": "query",
    "description": "List of Invoice status IDs",
    "schema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  {
    "name": "client_ids",
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
    "name": "payer_ids",
    "in": "query",
    "description": "List of Payer IDs",
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
    "description": "List of Manager IDs",
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
        "format": "date"
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
        "format": "date"
      }
    }
  },
  {
    "name": "issue_date",
    "in": "query",
    "description": "Filter by date of issue. Accepts an array with one or two ISO 8601 date-time values. If one value is provided, it represents the start (left) boundary. If two values are provided, they define a date range (start and end). Examples: [\"2025-05-01T00:00:00Z\"] \u2014 filter from May 1, 2025 onward. [\"2025-05-01T00:00:00Z\", \"2025-05-02T00:00:00Z\"] \u2014 filter between May 1 and May 2, 2025.",
    "schema": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "date"
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
        "format": "date"
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
        "-id"
      ]
    }
  }
]
```

### Response for GET /invoices
```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": [\n    {\n      \"id\": 309859,\n      \"id_label\": \"023\",\n      \"client\": {\n        \"id\": 31152179,\n        \"name\": \"Chris Jules\",\n        \"first_name\": \"Chris\",\n        \"last_name\": \"Jules\",\n        \"email\": \"chrissy_jules14@gmail.com\",\n        \"phone\": [\n          \"4487645389\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1734549792000,\n        \"created_at\": 1714652929000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 5,\n        \"sale_discount_services\": 5,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 968112000000\n        },\n        \"ad_campaign\": {\n          \"id\": 349683,\n          \"name\": \"Friend\"\n        }\n      },\n      \"payer\": {\n        \"id\": 31152179,\n        \"name\": \"Chris Jules\",\n        \"first_name\": \"Chris\",\n        \"last_name\": \"Jules\",\n        \"email\": \"chrissy_jules14@gmail.com\",\n        \"phone\": [\n          \"4487645389\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1734549792000,\n        \"created_at\": 1714652929000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 5,\n        \"sale_discount_services\": 5,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 968112000000\n        },\n        \"ad_campaign\": {\n          \"id\": 349683,\n          \"name\": \"Friend\"\n        }\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319497,\n        \"name\": \"Paid\",\n        \"color\": \"#5CB85C\",\n        \"group\": 10\n      },\n      \"created_at\": 1740480923000,\n      \"issue_date\": 1740480920000,\n      \"due_date\": 1743072920000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2847134,\n          \"order_id\": 52100568,\n          \"price\": 47.5,\n          \"title\": \"Delivery\",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        },\n        {\n          \"amount\": 1,\n          \"id\": 2847135,\n          \"order_id\": 52100586,\n          \"price\": 121.6,\n          \"title\": \"SSD replacement\",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 3,\n          \"warranty_period\": 1\n        },\n        {\n          \"amount\": 1,\n          \"id\": 2847136,\n          \"order_id\": 52100596,\n          \"price\": 47.5,\n          \"title\": \"Battery service \",\n          \"uom_id\": 1,\n          \"type\": 3,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 309847,\n      \"id_label\": \"022\",\n      \"client\": {\n        \"id\": 31905896,\n        \"name\": \"Tanya\",\n        \"first_name\": \"Tanya\",\n        \"last_name\": \"\",\n        \"email\": \"t.baczynska@orderry.com\",\n        \"phone\": [],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1721990430000,\n        \"created_at\": 1721990430000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 396022,\n          \"name\": \"Google Map\"\n        }\n      },\n      \"payer\": {\n        \"id\": 31905896,\n        \"name\": \"Tanya\",\n        \"first_name\": \"Tanya\",\n        \"last_name\": \"\",\n        \"email\": \"t.baczynska@orderry.com\",\n        \"phone\": [],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1721990430000,\n        \"created_at\": 1721990430000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 396022,\n          \"name\": \"Google Map\"\n        }\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319497,\n        \"name\": \"Paid\",\n        \"color\": \"#5CB85C\",\n        \"group\": 10\n      },\n      \"created_at\": 1740479799000,\n      \"issue_date\": 1740479789000,\n      \"due_date\": 1743071789000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2847060,\n          \"order_id\": 52100024,\n          \"price\": 50,\n          \"title\": \"Delivery\",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 309845,\n      \"id_label\": \"021\",\n      \"client\": {\n        \"id\": 33775229,\n        \"name\": \"Jerry Hallman\",\n        \"first_name\": \"Jerry\",\n        \"last_name\": \"Hallman\",\n        \"email\": \"jerry_jay1987@gmail.com\",\n        \"phone\": [\n          \"442345674567\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1740474841000,\n        \"created_at\": 1740474841000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"payer\": {\n        \"id\": 33775229,\n        \"name\": \"Jerry Hallman\",\n        \"first_name\": \"Jerry\",\n        \"last_name\": \"Hallman\",\n        \"email\": \"jerry_jay1987@gmail.com\",\n        \"phone\": [\n          \"442345674567\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1740474841000,\n        \"created_at\": 1740474841000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319497,\n        \"name\": \"Paid\",\n        \"color\": \"#5CB85C\",\n        \"group\": 10\n      },\n      \"created_at\": 1740479400000,\n      \"issue_date\": 1740479398000,\n      \"due_date\": 1743071398000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2847057,\n          \"order_id\": 52099829,\n          \"price\": 20,\n          \"title\": \"Engine filter replacement\",\n          \"uom_id\": 1,\n          \"type\": 3,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 309844,\n      \"id_label\": \"020\",\n      \"client\": {\n        \"id\": 31152179,\n        \"name\": \"Chris Jules\",\n        \"first_name\": \"Chris\",\n        \"last_name\": \"Jules\",\n        \"email\": \"chrissy_jules14@gmail.com\",\n        \"phone\": [\n          \"4487645389\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1734549792000,\n        \"created_at\": 1714652929000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 5,\n        \"sale_discount_services\": 5,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 968112000000\n        },\n        \"ad_campaign\": {\n          \"id\": 349683,\n          \"name\": \"Friend\"\n        }\n      },\n      \"payer\": {\n        \"id\": 31152179,\n        \"name\": \"Chris Jules\",\n        \"first_name\": \"Chris\",\n        \"last_name\": \"Jules\",\n        \"email\": \"chrissy_jules14@gmail.com\",\n        \"phone\": [\n          \"4487645389\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1734549792000,\n        \"created_at\": 1714652929000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 5,\n        \"sale_discount_services\": 5,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 968112000000\n        },\n        \"ad_campaign\": {\n          \"id\": 349683,\n          \"name\": \"Friend\"\n        }\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1740479325000,\n      \"issue_date\": 1740479321000,\n      \"due_date\": 1743071321000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2847056,\n          \"order_id\": 52099796,\n          \"price\": 76,\n          \"title\": \"Windows 10 eng reload, software, backup\",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 30,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 309649,\n      \"id_label\": \"019\",\n      \"client\": {\n        \"id\": 29071649,\n        \"name\": \"Marie\",\n        \"first_name\": \"Marie\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555974513\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1695729580000,\n        \"created_at\": 1695729580000,\n        \"discount_code\": \"\",\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 349685,\n          \"name\": \"Google Search\"\n        }\n      },\n      \"payer\": {\n        \"id\": 29071649,\n        \"name\": \"Marie\",\n        \"first_name\": \"Marie\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555974513\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1695729580000,\n        \"created_at\": 1695729580000,\n        \"discount_code\": \"\",\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 349685,\n          \"name\": \"Google Search\"\n        }\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319497,\n        \"name\": \"Paid\",\n        \"color\": \"#5CB85C\",\n        \"group\": 10\n      },\n      \"created_at\": 1740414531000,\n      \"issue_date\": 1740414523000,\n      \"due_date\": 1743006523000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2845360,\n          \"order_id\": 50475845,\n          \"price\": 100,\n          \"title\": \"Water Damage\",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 309648,\n      \"id_label\": \"018\",\n      \"client\": {\n        \"id\": 29553739,\n        \"name\": \"Luis\",\n        \"first_name\": \"Luis\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1699951438000,\n        \"created_at\": 1699951438000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"payer\": {\n        \"id\": 29553739,\n        \"name\": \"Luis\",\n        \"first_name\": \"Luis\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1699951438000,\n        \"created_at\": 1699951438000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1740414501000,\n      \"issue_date\": 1740414498000,\n      \"due_date\": 1743006498000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2845358,\n          \"order_id\": 51716662,\n          \"price\": 150,\n          \"title\": \"Diagnostics\",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 2,\n          \"warranty_period\": 0\n        },\n        {\n          \"amount\": 1,\n          \"id\": 2845359,\n          \"order_id\": 51716662,\n          \"price\": 47,\n          \"title\": \"Dynamic iPhone 11\",\n          \"uom_id\": 1,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"\",\n          \"article\": \"\",\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 308983,\n      \"id_label\": \"017\",\n      \"client\": {\n        \"id\": 31152179,\n        \"name\": \"Chris Jules\",\n        \"first_name\": \"Chris\",\n        \"last_name\": \"Jules\",\n        \"email\": \"chrissy_jules14@gmail.com\",\n        \"phone\": [\n          \"4487645389\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1734549792000,\n        \"created_at\": 1714652929000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 5,\n        \"sale_discount_services\": 5,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 968112000000\n        },\n        \"ad_campaign\": {\n          \"id\": 349683,\n          \"name\": \"Friend\"\n        }\n      },\n      \"payer\": {\n        \"id\": 31152179,\n        \"name\": \"Chris Jules\",\n        \"first_name\": \"Chris\",\n        \"last_name\": \"Jules\",\n        \"email\": \"chrissy_jules14@gmail.com\",\n        \"phone\": [\n          \"4487645389\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1734549792000,\n        \"created_at\": 1714652929000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 5,\n        \"sale_discount_services\": 5,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 968112000000\n        },\n        \"ad_campaign\": {\n          \"id\": 349683,\n          \"name\": \"Friend\"\n        }\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1740135439000,\n      \"issue_date\": 1740135429000,\n      \"due_date\": 1742727429000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2840415,\n          \"price\": 0,\n          \"title\": \"Recovery software\",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 306330,\n      \"id_label\": \"016\",\n      \"client\": {\n        \"id\": 29071672,\n        \"name\": \"John\",\n        \"first_name\": \"John\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555984561\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1727174480000,\n        \"created_at\": 1695729653000,\n        \"discount_code\": \"2900000000018\",\n        \"order_discount_services\": 10,\n        \"sale_discount_services\": 10,\n        \"discount_materials\": 15,\n        \"discount_goods_margin_id\": 387005,\n        \"custom_fields\": {\n          \"f7757287\": 810864000000\n        },\n        \"ad_campaign\": {}\n      },\n      \"payer\": {\n        \"id\": 29071672,\n        \"name\": \"John\",\n        \"first_name\": \"John\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555984561\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1727174480000,\n        \"created_at\": 1695729653000,\n        \"discount_code\": \"2900000000018\",\n        \"order_discount_services\": 10,\n        \"sale_discount_services\": 10,\n        \"discount_materials\": 15,\n        \"discount_goods_margin_id\": 387005,\n        \"custom_fields\": {\n          \"f7757287\": 810864000000\n        },\n        \"ad_campaign\": {}\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1739378512000,\n      \"issue_date\": 1739378480000,\n      \"due_date\": 1742402940000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2817327,\n          \"price\": 173,\n          \"title\": \"Apple watch\",\n          \"uom_id\": 1,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"\",\n          \"article\": \"\",\n          \"warranty\": 12,\n          \"warranty_period\": 1\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 306328,\n      \"id_label\": \"015\",\n      \"client\": {\n        \"id\": 29071672,\n        \"name\": \"John\",\n        \"first_name\": \"John\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555984561\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1727174480000,\n        \"created_at\": 1695729653000,\n        \"discount_code\": \"2900000000018\",\n        \"order_discount_services\": 10,\n        \"sale_discount_services\": 10,\n        \"discount_materials\": 15,\n        \"discount_goods_margin_id\": 387005,\n        \"custom_fields\": {\n          \"f7757287\": 810864000000\n        },\n        \"ad_campaign\": {}\n      },\n      \"payer\": {\n        \"id\": 29071672,\n        \"name\": \"John\",\n        \"first_name\": \"John\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555984561\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1727174480000,\n        \"created_at\": 1695729653000,\n        \"discount_code\": \"2900000000018\",\n        \"order_discount_services\": 10,\n        \"sale_discount_services\": 10,\n        \"discount_materials\": 15,\n        \"discount_goods_margin_id\": 387005,\n        \"custom_fields\": {\n          \"f7757287\": 810864000000\n        },\n        \"ad_campaign\": {}\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1739378216000,\n      \"issue_date\": 1739378189000,\n      \"due_date\": 1741970189000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2817317,\n          \"order_id\": 46487369,\n          \"price\": 150,\n          \"title\": \"Diagnostics\",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 2,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 301274,\n      \"id_label\": \"014\",\n      \"client\": {\n        \"id\": 29553739,\n        \"name\": \"Luis\",\n        \"first_name\": \"Luis\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1699951438000,\n        \"created_at\": 1699951438000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"payer\": {\n        \"id\": 29553739,\n        \"name\": \"Luis\",\n        \"first_name\": \"Luis\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1699951438000,\n        \"created_at\": 1699951438000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319498,\n        \"name\": \"Canceled\",\n        \"color\": \"#939699\",\n        \"group\": 11\n      },\n      \"created_at\": 1738003479000,\n      \"issue_date\": 1738003473000,\n      \"due_date\": 1740595473000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2779583,\n          \"price\": 0,\n          \"title\": \"Mulching and soil amendment\",\n          \"uom_id\": 29,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 301273,\n      \"id_label\": \"013\",\n      \"client\": {\n        \"id\": 31905896,\n        \"name\": \"Tanya\",\n        \"first_name\": \"Tanya\",\n        \"last_name\": \"\",\n        \"email\": \"t.baczynska@orderry.com\",\n        \"phone\": [],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1721990430000,\n        \"created_at\": 1721990430000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 396022,\n          \"name\": \"Google Map\"\n        }\n      },\n      \"payer\": {\n        \"id\": 31905896,\n        \"name\": \"Tanya\",\n        \"first_name\": \"Tanya\",\n        \"last_name\": \"\",\n        \"email\": \"t.baczynska@orderry.com\",\n        \"phone\": [],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1721990430000,\n        \"created_at\": 1721990430000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 396022,\n          \"name\": \"Google Map\"\n        }\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1738003470000,\n      \"issue_date\": 1738003463000,\n      \"due_date\": 1740595463000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2779582,\n          \"price\": 0,\n          \"title\": \"Deppa Crab\",\n          \"uom_id\": 1,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"DPC\",\n          \"article\": \"z928\",\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 301272,\n      \"id_label\": \"012\",\n      \"client\": {\n        \"id\": 31152179,\n        \"name\": \"Chris Jules\",\n        \"first_name\": \"Chris\",\n        \"last_name\": \"Jules\",\n        \"email\": \"chrissy_jules14@gmail.com\",\n        \"phone\": [\n          \"4487645389\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1734549792000,\n        \"created_at\": 1714652929000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 5,\n        \"sale_discount_services\": 5,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 968112000000\n        },\n        \"ad_campaign\": {\n          \"id\": 349683,\n          \"name\": \"Friend\"\n        }\n      },\n      \"payer\": {\n        \"id\": 31152179,\n        \"name\": \"Chris Jules\",\n        \"first_name\": \"Chris\",\n        \"last_name\": \"Jules\",\n        \"email\": \"chrissy_jules14@gmail.com\",\n        \"phone\": [\n          \"4487645389\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1734549792000,\n        \"created_at\": 1714652929000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 5,\n        \"sale_discount_services\": 5,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 968112000000\n        },\n        \"ad_campaign\": {\n          \"id\": 349683,\n          \"name\": \"Friend\"\n        }\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319496,\n        \"name\": \"Issued\",\n        \"color\": \"#F89200\",\n        \"group\": 9\n      },\n      \"created_at\": 1738003461000,\n      \"issue_date\": 1738055280000,\n      \"due_date\": 1741165680000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2780824,\n          \"price\": 52,\n          \"title\": \"Air Case Iphone 5\",\n          \"uom_id\": 9,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"\",\n          \"article\": \"m002\",\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 301271,\n      \"id_label\": \"011\",\n      \"client\": {\n        \"id\": 32283770,\n        \"name\": \"Diana\",\n        \"first_name\": \"Diana\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1727174855000,\n        \"created_at\": 1725624982000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 10,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 1725235200000\n        },\n        \"ad_campaign\": {\n          \"id\": 396022,\n          \"name\": \"Google Map\"\n        }\n      },\n      \"payer\": {\n        \"id\": 32283770,\n        \"name\": \"Diana\",\n        \"first_name\": \"Diana\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1727174855000,\n        \"created_at\": 1725624982000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 10,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 1725235200000\n        },\n        \"ad_campaign\": {\n          \"id\": 396022,\n          \"name\": \"Google Map\"\n        }\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319496,\n        \"name\": \"Issued\",\n        \"color\": \"#F89200\",\n        \"group\": 9\n      },\n      \"created_at\": 1738003451000,\n      \"issue_date\": 1738003443000,\n      \"due_date\": 1740595443000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2779580,\n          \"price\": 0,\n          \"title\": \"iPhone Software Reset\",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 293636,\n      \"id_label\": \"010\",\n      \"client\": {\n        \"id\": 29949017,\n        \"name\": \"Vikram\",\n        \"first_name\": \"Vikram\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"480000000000\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1703147329000,\n        \"created_at\": 1703147329000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"payer\": {\n        \"id\": 29949017,\n        \"name\": \"Vikram\",\n        \"first_name\": \"Vikram\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"480000000000\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1703147329000,\n        \"created_at\": 1703147329000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1735246488000,\n      \"issue_date\": 1735246463000,\n      \"due_date\": 1737838463000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2729513,\n          \"price\": 120,\n          \"title\": \"Touchpad Replacement\",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 293635,\n      \"id_label\": \"009\",\n      \"client\": {\n        \"id\": 27354461,\n        \"name\": \"Max\",\n        \"first_name\": \"Max\",\n        \"last_name\": \"\",\n        \"email\": \"max_test@remonline.app\",\n        \"phone\": [\n          \"48498465121\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1678960892000,\n        \"created_at\": 1678960892000,\n        \"discount_code\": \"\",\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"payer\": {\n        \"id\": 27354461,\n        \"name\": \"Max\",\n        \"first_name\": \"Max\",\n        \"last_name\": \"\",\n        \"email\": \"max_test@remonline.app\",\n        \"phone\": [\n          \"48498465121\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1678960892000,\n        \"created_at\": 1678960892000,\n        \"discount_code\": \"\",\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1735246462000,\n      \"issue_date\": 1735246436000,\n      \"due_date\": 1737838436000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2729512,\n          \"price\": 200,\n          \"title\": \"Battery iPad Mini 4 - A1546\",\n          \"uom_id\": 1,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"\",\n          \"article\": \"battery-ipad\",\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 293634,\n      \"id_label\": \"008\",\n      \"client\": {\n        \"id\": 27354472,\n        \"name\": \"Kate\",\n        \"first_name\": \"Kate\",\n        \"last_name\": \"\",\n        \"email\": \"kate_test@remonline.app\",\n        \"phone\": [\n          \"48454651894\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1719589120000,\n        \"created_at\": 1678960958000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 30,\n        \"sale_discount_services\": 30,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 426716,\n          \"name\": \"Website\"\n        }\n      },\n      \"payer\": {\n        \"id\": 27354472,\n        \"name\": \"Kate\",\n        \"first_name\": \"Kate\",\n        \"last_name\": \"\",\n        \"email\": \"kate_test@remonline.app\",\n        \"phone\": [\n          \"48454651894\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1719589120000,\n        \"created_at\": 1678960958000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 30,\n        \"sale_discount_services\": 30,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 426716,\n          \"name\": \"Website\"\n        }\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1735246426000,\n      \"issue_date\": 1735246401000,\n      \"due_date\": 1737838401000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2729511,\n          \"price\": 50,\n          \"title\": \"Charging socket iPhone 7 White\",\n          \"uom_id\": 1,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"7G123\",\n          \"article\": \"DOCK\",\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 293633,\n      \"id_label\": \"007\",\n      \"client\": {\n        \"id\": 29071672,\n        \"name\": \"John\",\n        \"first_name\": \"John\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555984561\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1727174480000,\n        \"created_at\": 1695729653000,\n        \"discount_code\": \"2900000000018\",\n        \"order_discount_services\": 10,\n        \"sale_discount_services\": 10,\n        \"discount_materials\": 15,\n        \"discount_goods_margin_id\": 387005,\n        \"custom_fields\": {\n          \"f7757287\": 810864000000\n        },\n        \"ad_campaign\": {}\n      },\n      \"payer\": {\n        \"id\": 29071672,\n        \"name\": \"John\",\n        \"first_name\": \"John\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555984561\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1727174480000,\n        \"created_at\": 1695729653000,\n        \"discount_code\": \"2900000000018\",\n        \"order_discount_services\": 10,\n        \"sale_discount_services\": 10,\n        \"discount_materials\": 15,\n        \"discount_goods_margin_id\": 387005,\n        \"custom_fields\": {\n          \"f7757287\": 810864000000\n        },\n        \"ad_campaign\": {}\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1735246399000,\n      \"issue_date\": 1735246378000,\n      \"due_date\": 1737838378000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2729510,\n          \"price\": 90,\n          \"title\": \"Mulching and soil amendment\",\n          \"uom_id\": 29,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206037\n    },\n    {\n      \"id\": 293632,\n      \"id_label\": \"006\",\n      \"client\": {\n        \"id\": 29061708,\n        \"name\": \"Robert\",\n        \"first_name\": \"Robert\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555987454\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1695641254000,\n        \"created_at\": 1695641254000,\n        \"discount_code\": \"\",\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 349686,\n          \"name\": \"FB\"\n        }\n      },\n      \"payer\": {\n        \"id\": 29061708,\n        \"name\": \"Robert\",\n        \"first_name\": \"Robert\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555987454\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1695641254000,\n        \"created_at\": 1695641254000,\n        \"discount_code\": \"\",\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 349686,\n          \"name\": \"FB\"\n        }\n      },\n      \"status\": 2,\n      \"status_full\": {\n        \"id\": 3319497,\n        \"name\": \"Paid\",\n        \"color\": \"#5CB85C\",\n        \"group\": 10\n      },\n      \"created_at\": 1735246376000,\n      \"issue_date\": 1735246348000,\n      \"due_date\": 1737838348000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2779573,\n          \"price\": 450,\n          \"title\": \"Apple iPhone 15 Pro 256GB Natural Titanium\",\n          \"uom_id\": 1,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"15P25611\",\n          \"article\": \"\",\n          \"warranty\": 12,\n          \"warranty_period\": 0\n        }\n      ],\n      \"manager_id\": 206038\n    },\n    {\n      \"id\": 259733,\n      \"id_label\": \"005\",\n      \"client\": {\n        \"id\": 27354451,\n        \"name\": \"David\",\n        \"first_name\": \"David\",\n        \"last_name\": \"\",\n        \"email\": \"t.baczynska1@orderry.com\",\n        \"phone\": [\n          \"48154684516\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1732817986000,\n        \"created_at\": 1678960850000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 10,\n        \"sale_discount_services\": 10,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 1732665600000\n        },\n        \"ad_campaign\": {\n          \"id\": 396022,\n          \"name\": \"Google Map\"\n        }\n      },\n      \"payer\": {\n        \"id\": 27354451,\n        \"name\": \"David\",\n        \"first_name\": \"David\",\n        \"last_name\": \"\",\n        \"email\": \"t.baczynska1@orderry.com\",\n        \"phone\": [\n          \"48154684516\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1732817986000,\n        \"created_at\": 1678960850000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 10,\n        \"sale_discount_services\": 10,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 1732665600000\n        },\n        \"ad_campaign\": {\n          \"id\": 396022,\n          \"name\": \"Google Map\"\n        }\n      },\n      \"status\": 2,\n      \"status_full\": {\n        \"id\": 3319497,\n        \"name\": \"Paid\",\n        \"color\": \"#5CB85C\",\n        \"group\": 10\n      },\n      \"created_at\": 1724419814000,\n      \"issue_date\": 1724419806000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2656032,\n          \"price\": 0,\n          \"title\": \"Flip Cover - iPhone 4|4S\",\n          \"uom_id\": 1,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"FLCIP4s\",\n          \"article\": \"a291\",\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ]\n    },\n    {\n      \"id\": 259722,\n      \"id_label\": \"004\",\n      \"client\": {\n        \"id\": 31152179,\n        \"name\": \"Chris Jules\",\n        \"first_name\": \"Chris\",\n        \"last_name\": \"Jules\",\n        \"email\": \"chrissy_jules14@gmail.com\",\n        \"phone\": [\n          \"4487645389\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1734549792000,\n        \"created_at\": 1714652929000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 5,\n        \"sale_discount_services\": 5,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 968112000000\n        },\n        \"ad_campaign\": {\n          \"id\": 349683,\n          \"name\": \"Friend\"\n        }\n      },\n      \"payer\": {\n        \"id\": 31152179,\n        \"name\": \"Chris Jules\",\n        \"first_name\": \"Chris\",\n        \"last_name\": \"Jules\",\n        \"email\": \"chrissy_jules14@gmail.com\",\n        \"phone\": [\n          \"4487645389\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1734549792000,\n        \"created_at\": 1714652929000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 5,\n        \"sale_discount_services\": 5,\n        \"discount_materials\": 0,\n        \"custom_fields\": {\n          \"f7757287\": 968112000000\n        },\n        \"ad_campaign\": {\n          \"id\": 349683,\n          \"name\": \"Friend\"\n        }\n      },\n      \"status\": 2,\n      \"status_full\": {\n        \"id\": 3319497,\n        \"name\": \"Paid\",\n        \"color\": \"#5CB85C\",\n        \"group\": 10\n      },\n      \"created_at\": 1724417188000,\n      \"issue_date\": 1724417155000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 2480393,\n          \"price\": 10,\n          \"title\": \"Battery iPhone (Normal) - SE\",\n          \"uom_id\": 1,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"\",\n          \"article\": \"battery-iphone-n\",\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        },\n        {\n          \"amount\": 2,\n          \"id\": 2480394,\n          \"price\": 10,\n          \"title\": \"Cabin filter\",\n          \"uom_id\": 1,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"\",\n          \"article\": \"\",\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ]\n    },\n    {\n      \"id\": 197064,\n      \"id_label\": \"003\",\n      \"client\": {\n        \"id\": 29061615,\n        \"name\": \"Nick\",\n        \"first_name\": \"Nick\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48449845465\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1695640846000,\n        \"created_at\": 1695640846000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"payer\": {\n        \"id\": 29061615,\n        \"name\": \"Nick\",\n        \"first_name\": \"Nick\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48449845465\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1695640846000,\n        \"created_at\": 1695640846000,\n        \"discount_code\": \"\",\n        \"discount_goods\": 0,\n        \"order_discount_services\": 0,\n        \"sale_discount_services\": 0,\n        \"discount_materials\": 0,\n        \"custom_fields\": {},\n        \"ad_campaign\": {}\n      },\n      \"status\": 2,\n      \"status_full\": {\n        \"id\": 3319497,\n        \"name\": \"Paid\",\n        \"color\": \"#5CB85C\",\n        \"group\": 10\n      },\n      \"created_at\": 1700647537000,\n      \"issue_date\": 1700647527000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 1955938,\n          \"order_id\": 44889843,\n          \"price\": 0,\n          \"title\": \"3/4\\\" GF 15/26 Iron Pump Flange Pair (NPT)\",\n          \"uom_id\": 21,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"\",\n          \"article\": \"519601\",\n          \"warranty\": 3,\n          \"warranty_period\": 1\n        }\n      ]\n    },\n    {\n      \"id\": 195399,\n      \"id_label\": \"002\",\n      \"client\": {\n        \"id\": 29061708,\n        \"name\": \"Robert\",\n        \"first_name\": \"Robert\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555987454\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1695641254000,\n        \"created_at\": 1695641254000,\n        \"discount_code\": \"\",\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 349686,\n          \"name\": \"FB\"\n        }\n      },\n      \"payer\": {\n        \"id\": 29061708,\n        \"name\": \"Robert\",\n        \"first_name\": \"Robert\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555987454\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1695641254000,\n        \"created_at\": 1695641254000,\n        \"discount_code\": \"\",\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 349686,\n          \"name\": \"FB\"\n        }\n      },\n      \"status\": 0,\n      \"status_full\": {\n        \"id\": 3319495,\n        \"name\": \"Draft\",\n        \"color\": \"#1E79C7\",\n        \"group\": 8\n      },\n      \"created_at\": 1699955093000,\n      \"issue_date\": 1699912800000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 1940438,\n          \"order_id\": 43961205,\n          \"price\": 50,\n          \"title\": \"Charging Port Repair testing TEST \",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        },\n        {\n          \"amount\": 1,\n          \"id\": 1940439,\n          \"order_id\": 43961205,\n          \"price\": 0,\n          \"title\": \"100 ft Reel of Freeze Free Pipe Heating Cable\",\n          \"uom_id\": 1,\n          \"type\": 0,\n          \"service\": false,\n          \"code\": \"\",\n          \"article\": \"\",\n          \"warranty\": 3,\n          \"warranty_period\": 1\n        }\n      ]\n    },\n    {\n      \"id\": 189636,\n      \"id_label\": \"001\",\n      \"client\": {\n        \"id\": 29071649,\n        \"name\": \"Marie\",\n        \"first_name\": \"Marie\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555974513\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1695729580000,\n        \"created_at\": 1695729580000,\n        \"discount_code\": \"\",\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 349685,\n          \"name\": \"Google Search\"\n        }\n      },\n      \"payer\": {\n        \"id\": 29071649,\n        \"name\": \"Marie\",\n        \"first_name\": \"Marie\",\n        \"last_name\": \"\",\n        \"email\": \"\",\n        \"phone\": [\n          \"48555974513\"\n        ],\n        \"notes\": \"\",\n        \"address\": \"\",\n        \"supplier\": false,\n        \"juridical\": false,\n        \"conflicted\": false,\n        \"modified_at\": 1695729580000,\n        \"created_at\": 1695729580000,\n        \"discount_code\": \"\",\n        \"custom_fields\": {},\n        \"ad_campaign\": {\n          \"id\": 349685,\n          \"name\": \"Google Search\"\n        }\n      },\n      \"status\": 1,\n      \"status_full\": {\n        \"id\": 3319496,\n        \"name\": \"Issued\",\n        \"color\": \"#F89200\",\n        \"group\": 9\n      },\n      \"created_at\": 1697535925000,\n      \"issue_date\": 1697535914000,\n      \"payment_type\": 0,\n      \"products\": [\n        {\n          \"amount\": 1,\n          \"id\": 1889175,\n          \"order_id\": 43980997,\n          \"price\": 50,\n          \"title\": \"Charging Port Repair testing TEST \",\n          \"uom_id\": 1,\n          \"type\": 2,\n          \"service\": true,\n          \"warranty\": 0,\n          \"warranty_period\": 0\n        }\n      ]\n    }\n  ],\n  \"page\": 1,\n  \"count\": 23,\n  \"success\": true\n}"
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
                    "example": 309859,
                    "default": 0
                  },
                  "id_label": {
                    "type": "string",
                    "example": "023"
                  },
                  "client": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer",
                        "example": 31152179,
                        "default": 0
                      },
                      "name": {
                        "type": "string",
                        "example": "Chris Jules"
                      },
                      "first_name": {
                        "type": "string",
                        "example": "Chris"
                      },
                      "last_name": {
                        "type": "string",
                        "example": "Jules"
                      },
                      "email": {
                        "type": "string",
                        "example": "chrissy_jules14@gmail.com"
                      },
                      "phone": {
                        "type": "array",
                        "items": {
                          "type": "string",
                          "example": "4487645389"
                        }
                      },
                      "notes": {
                        "type": "string",
                        "example": ""
                      },
                      "address": {
                        "type": "string",
                        "example": ""
                      },
                      "supplier": {
                        "type": "boolean",
                        "example": false,
                        "default": true
                      },
                      "juridical": {
                        "type": "boolean",
                        "example": false,
                        "default": true
                      },
                      "conflicted": {
                        "type": "boolean",
                        "example": false,
                        "default": true
                      },
                      "modified_at": {
                        "type": "integer",
                        "example": 1734549792000,
                        "default": 0
                      },
                      "created_at": {
                        "type": "integer",
                        "example": 1714652929000,
                        "default": 0
                      },
                      "discount_code": {
                        "type": "string",
                        "example": ""
                      },
                      "discount_goods": {
                        "type": "integer",
                        "example": 0,
                        "default": 0
                      },
                      "order_discount_services": {
                        "type": "integer",
                        "example": 5,
                        "default": 0
                      },
                      "sale_discount_services": {
                        "type": "integer",
                        "example": 5,
                        "default": 0
                      },
                      "discount_materials": {
                        "type": "integer",
                        "example": 0,
                        "default": 0
                      },
                      "custom_fields": {
                        "type": "object",
                        "properties": {
                          "f7757287": {
                            "type": "integer",
                            "example": 968112000000,
                            "default": 0
                          }
                        }
                      },
                      "ad_campaign": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer",
                            "example": 349683,
                            "default": 0
                          },
                          "name": {
                            "type": "string",
                            "example": "Friend"
                          }
                        }
                      }
                    }
                  },
                  "payer": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer",
                        "example": 31152179,
                        "default": 0
                      },
                      "name": {
                        "type": "string",
                        "example": "Chris Jules"
                      },
                      "first_name": {
                        "type": "string",
                        "example": "Chris"
                      },
                      "last_name": {
                        "type": "string",
                        "example": "Jules"
                      },
                      "email": {
                        "type": "string",
                        "example": "chrissy_jules14@gmail.com"
                      },
                      "phone": {
                        "type": "array",
                        "items": {
                          "type": "string",
                          "example": "4487645389"
                        }
                      },
                      "notes": {
                        "type": "string",
                        "example": ""
                      },
                      "address": {
                        "type": "string",
                        "example": ""
                      },
                      "supplier": {
                        "type": "boolean",
                        "example": false,
                        "default": true
                      },
                      "juridical": {
                        "type": "boolean",
                        "example": false,
                        "default": true
                      },
                      "conflicted": {
                        "type": "boolean",
                        "example": false,
                        "default": true
                      },
                      "modified_at": {
                        "type": "integer",
                        "example": 1734549792000,
                        "default": 0
                      },
                      "created_at": {
                        "type": "integer",
                        "example": 1714652929000,
                        "default": 0
                      },
                      "discount_code": {
                        "type": "string",
                        "example": ""
                      },
                      "discount_goods": {
                        "type": "integer",
                        "example": 0,
                        "default": 0
                      },
                      "order_discount_services": {
                        "type": "integer",
                        "example": 5,
                        "default": 0
                      },
                      "sale_discount_services": {
                        "type": "integer",
                        "example": 5,
                        "default": 0
                      },
                      "discount_materials": {
                        "type": "integer",
                        "example": 0,
                        "default": 0
                      },
                      "custom_fields": {
                        "type": "object",
                        "properties": {
                          "f7757287": {
                            "type": "integer",
                            "example": 968112000000,
                            "default": 0
                          }
                        }
                      },
                      "ad_campaign": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer",
                            "example": 349683,
                            "default": 0
                          },
                          "name": {
                            "type": "string",
                            "example": "Friend"
                          }
                        }
                      }
                    }
                  },
                  "status": {
                    "type": "integer",
                    "example": 0,
                    "default": 0
                  },
                  "status_full": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer",
                        "example": 3319497,
                        "default": 0
                      },
                      "name": {
                        "type": "string",
                        "example": "Paid"
                      },
                      "color": {
                        "type": "string",
                        "example": "#5CB85C"
                      },
                      "group": {
                        "type": "integer",
                        "example": 10,
                        "default": 0
                      }
                    }
                  },
                  "created_at": {
                    "type": "integer",
                    "example": 1740480923000,
                    "default": 0
                  },
                  "issue_date": {
                    "type": "integer",
                    "example": 1740480920000,
                    "default": 0
                  },
                  "due_date": {
                    "type": "integer",
                    "example": 1743072920000,
                    "default": 0
                  },
                  "payment_type": {
                    "type": "integer",
                    "example": 0,
                    "default": 0
                  },
                  "products": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "amount": {
                          "type": "integer",
                          "example": 1,
                          "default": 0
                        },
                        "id": {
                          "type": "integer",
                          "example": 2847134,
                          "default": 0
                        },
                        "order_id": {
                          "type": "integer",
                          "example": 52100568,
                          "default": 0
                        },
                        "price": {
                          "type": "number",
                          "example": 47.5,
                          "default": 0
                        },
                        "title": {
                          "type": "string",
                          "example": "Delivery"
                        },
                        "uom_id": {
                          "type": "integer",
                          "example": 1,
                          "default": 0
                        },
                        "type": {
                          "type": "integer",
                          "example": 2,
                          "default": 0
                        },
                        "service": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
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
                    }
                  },
                  "manager_id": {
                    "type": "integer",
                    "example": 206037,
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
              "example": 23,
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

### GET /invoices/{invoice_id}
**Summary:** Get Invoice by ID

### Parameters for GET /invoices/{invoice_id}
```json
[
  {
    "name": "invoice_id",
    "in": "path",
    "description": "Invoice ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /invoices/{invoice_id}
```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": {\n    \"id\": 309859,\n    \"id_label\": \"023\",\n    \"client\": {\n      \"id\": 31152179,\n      \"name\": \"Chris Jules\",\n      \"first_name\": \"Chris\",\n      \"last_name\": \"Jules\",\n      \"email\": \"chrissy_jules14@gmail.com\",\n      \"phone\": [\n        \"4487645389\"\n      ],\n      \"notes\": \"\",\n      \"address\": \"\",\n      \"supplier\": false,\n      \"juridical\": false,\n      \"conflicted\": false,\n      \"modified_at\": 1734549792000,\n      \"created_at\": 1714652929000,\n      \"discount_code\": \"\",\n      \"discount_goods\": 0,\n      \"order_discount_services\": 5,\n      \"sale_discount_services\": 5,\n      \"discount_materials\": 0,\n      \"custom_fields\": {\n        \"f7757287\": 968112000000\n      },\n      \"ad_campaign\": {\n        \"id\": 349683,\n        \"name\": \"Friend\"\n      }\n    },\n    \"payer\": {\n      \"id\": 31152179,\n      \"name\": \"Chris Jules\",\n      \"first_name\": \"Chris\",\n      \"last_name\": \"Jules\",\n      \"email\": \"chrissy_jules14@gmail.com\",\n      \"phone\": [\n        \"4487645389\"\n      ],\n      \"notes\": \"\",\n      \"address\": \"\",\n      \"supplier\": false,\n      \"juridical\": false,\n      \"conflicted\": false,\n      \"modified_at\": 1734549792000,\n      \"created_at\": 1714652929000,\n      \"discount_code\": \"\",\n      \"discount_goods\": 0,\n      \"order_discount_services\": 5,\n      \"sale_discount_services\": 5,\n      \"discount_materials\": 0,\n      \"custom_fields\": {\n        \"f7757287\": 968112000000\n      },\n      \"ad_campaign\": {\n        \"id\": 349683,\n        \"name\": \"Friend\"\n      }\n    },\n    \"status\": 0,\n    \"status_full\": {\n      \"id\": 3319497,\n      \"name\": \"Paid\",\n      \"color\": \"#5CB85C\",\n      \"group\": 10\n    },\n    \"created_at\": 1740480923000,\n    \"issue_date\": 1740480920000,\n    \"due_date\": 1743072920000,\n    \"payment_type\": 0,\n    \"products\": [\n      {\n        \"amount\": 1,\n        \"id\": 2847134,\n        \"order_id\": 52100568,\n        \"price\": 47.5,\n        \"title\": \"Delivery\",\n        \"uom_id\": 1,\n        \"type\": 2,\n        \"service\": true,\n        \"warranty\": 0,\n        \"warranty_period\": 0\n      },\n      {\n        \"amount\": 1,\n        \"id\": 2847135,\n        \"order_id\": 52100586,\n        \"price\": 121.6,\n        \"title\": \"SSD replacement\",\n        \"uom_id\": 1,\n        \"type\": 2,\n        \"service\": true,\n        \"warranty\": 3,\n        \"warranty_period\": 1\n      },\n      {\n        \"amount\": 1,\n        \"id\": 2847136,\n        \"order_id\": 52100596,\n        \"price\": 47.5,\n        \"title\": \"Battery service \",\n        \"uom_id\": 1,\n        \"type\": 3,\n        \"service\": true,\n        \"warranty\": 0,\n        \"warranty_period\": 0\n      }\n    ],\n    \"manager_id\": 206037\n  },\n  \"success\": true\n}"
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
                  "example": 309859,
                  "default": 0
                },
                "id_label": {
                  "type": "string",
                  "example": "023"
                },
                "client": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 31152179,
                      "default": 0
                    },
                    "name": {
                      "type": "string",
                      "example": "Chris Jules"
                    },
                    "first_name": {
                      "type": "string",
                      "example": "Chris"
                    },
                    "last_name": {
                      "type": "string",
                      "example": "Jules"
                    },
                    "email": {
                      "type": "string",
                      "example": "chrissy_jules14@gmail.com"
                    },
                    "phone": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "example": "4487645389"
                      }
                    },
                    "notes": {
                      "type": "string",
                      "example": ""
                    },
                    "address": {
                      "type": "string",
                      "example": ""
                    },
                    "supplier": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "juridical": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "conflicted": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "modified_at": {
                      "type": "integer",
                      "example": 1734549792000,
                      "default": 0
                    },
                    "created_at": {
                      "type": "integer",
                      "example": 1714652929000,
                      "default": 0
                    },
                    "discount_code": {
                      "type": "string",
                      "example": ""
                    },
                    "discount_goods": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "order_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "sale_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "discount_materials": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "custom_fields": {
                      "type": "object",
                      "properties": {
                        "f7757287": {
                          "type": "integer",
                          "example": 968112000000,
                          "default": 0
                        }
                      }
                    },
                    "ad_campaign": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 349683,
                          "default": 0
                        },
                        "name": {
                          "type": "string",
                          "example": "Friend"
                        }
                      }
                    }
                  }
                },
                "payer": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 31152179,
                      "default": 0
                    },
                    "name": {
                      "type": "string",
                      "example": "Chris Jules"
                    },
                    "first_name": {
                      "type": "string",
                      "example": "Chris"
                    },
                    "last_name": {
                      "type": "string",
                      "example": "Jules"
                    },
                    "email": {
                      "type": "string",
                      "example": "chrissy_jules14@gmail.com"
                    },
                    "phone": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "example": "4487645389"
                      }
                    },
                    "notes": {
                      "type": "string",
                      "example": ""
                    },
                    "address": {
                      "type": "string",
                      "example": ""
                    },
                    "supplier": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "juridical": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "conflicted": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "modified_at": {
                      "type": "integer",
                      "example": 1734549792000,
                      "default": 0
                    },
                    "created_at": {
                      "type": "integer",
                      "example": 1714652929000,
                      "default": 0
                    },
                    "discount_code": {
                      "type": "string",
                      "example": ""
                    },
                    "discount_goods": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "order_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "sale_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "discount_materials": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "custom_fields": {
                      "type": "object",
                      "properties": {
                        "f7757287": {
                          "type": "integer",
                          "example": 968112000000,
                          "default": 0
                        }
                      }
                    },
                    "ad_campaign": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 349683,
                          "default": 0
                        },
                        "name": {
                          "type": "string",
                          "example": "Friend"
                        }
                      }
                    }
                  }
                },
                "status": {
                  "type": "integer",
                  "example": 0,
                  "default": 0
                },
                "status_full": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 3319497,
                      "default": 0
                    },
                    "name": {
                      "type": "string",
                      "example": "Paid"
                    },
                    "color": {
                      "type": "string",
                      "example": "#5CB85C"
                    },
                    "group": {
                      "type": "integer",
                      "example": 10,
                      "default": 0
                    }
                  }
                },
                "created_at": {
                  "type": "integer",
                  "example": 1740480923000,
                  "default": 0
                },
                "issue_date": {
                  "type": "integer",
                  "example": 1740480920000,
                  "default": 0
                },
                "due_date": {
                  "type": "integer",
                  "example": 1743072920000,
                  "default": 0
                },
                "payment_type": {
                  "type": "integer",
                  "example": 0,
                  "default": 0
                },
                "products": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "amount": {
                        "type": "integer",
                        "example": 1,
                        "default": 0
                      },
                      "id": {
                        "type": "integer",
                        "example": 2847134,
                        "default": 0
                      },
                      "order_id": {
                        "type": "integer",
                        "example": 52100568,
                        "default": 0
                      },
                      "price": {
                        "type": "number",
                        "example": 47.5,
                        "default": 0
                      },
                      "title": {
                        "type": "string",
                        "example": "Delivery"
                      },
                      "uom_id": {
                        "type": "integer",
                        "example": 1,
                        "default": 0
                      },
                      "type": {
                        "type": "integer",
                        "example": 2,
                        "default": 0
                      },
                      "service": {
                        "type": "boolean",
                        "example": true,
                        "default": true
                      },
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
                  }
                },
                "manager_id": {
                  "type": "integer",
                  "example": 206037,
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

### GET /invoices/{invoice_id}/items
**Summary:** Get Invoice Items

### Parameters for GET /invoices/{invoice_id}/items
```json
[
  {
    "name": "invoice_id",
    "in": "path",
    "description": "Invoice ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /invoices/{invoice_id}/items
```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": {\n    \"id\": 309859,\n    \"id_label\": \"023\",\n    \"client\": {\n      \"id\": 31152179,\n      \"name\": \"Chris Jules\",\n      \"first_name\": \"Chris\",\n      \"last_name\": \"Jules\",\n      \"email\": \"chrissy_jules14@gmail.com\",\n      \"phone\": [\n        \"4487645389\"\n      ],\n      \"notes\": \"\",\n      \"address\": \"\",\n      \"supplier\": false,\n      \"juridical\": false,\n      \"conflicted\": false,\n      \"modified_at\": 1734549792000,\n      \"created_at\": 1714652929000,\n      \"discount_code\": \"\",\n      \"discount_goods\": 0,\n      \"order_discount_services\": 5,\n      \"sale_discount_services\": 5,\n      \"discount_materials\": 0,\n      \"custom_fields\": {\n        \"f7757287\": 968112000000\n      },\n      \"ad_campaign\": {\n        \"id\": 349683,\n        \"name\": \"Friend\"\n      }\n    },\n    \"payer\": {\n      \"id\": 31152179,\n      \"name\": \"Chris Jules\",\n      \"first_name\": \"Chris\",\n      \"last_name\": \"Jules\",\n      \"email\": \"chrissy_jules14@gmail.com\",\n      \"phone\": [\n        \"4487645389\"\n      ],\n      \"notes\": \"\",\n      \"address\": \"\",\n      \"supplier\": false,\n      \"juridical\": false,\n      \"conflicted\": false,\n      \"modified_at\": 1734549792000,\n      \"created_at\": 1714652929000,\n      \"discount_code\": \"\",\n      \"discount_goods\": 0,\n      \"order_discount_services\": 5,\n      \"sale_discount_services\": 5,\n      \"discount_materials\": 0,\n      \"custom_fields\": {\n        \"f7757287\": 968112000000\n      },\n      \"ad_campaign\": {\n        \"id\": 349683,\n        \"name\": \"Friend\"\n      }\n    },\n    \"status\": 0,\n    \"status_full\": {\n      \"id\": 3319497,\n      \"name\": \"Paid\",\n      \"color\": \"#5CB85C\",\n      \"group\": 10\n    },\n    \"created_at\": 1740480923000,\n    \"issue_date\": 1740480920000,\n    \"due_date\": 1743072920000,\n    \"payment_type\": 0,\n    \"products\": [\n      {\n        \"amount\": 1,\n        \"id\": 2847134,\n        \"order_id\": 52100568,\n        \"price\": 47.5,\n        \"title\": \"Delivery\",\n        \"uom_id\": 1,\n        \"type\": 2,\n        \"service\": true,\n        \"warranty\": 0,\n        \"warranty_period\": 0\n      },\n      {\n        \"amount\": 1,\n        \"id\": 2847135,\n        \"order_id\": 52100586,\n        \"price\": 121.6,\n        \"title\": \"SSD replacement\",\n        \"uom_id\": 1,\n        \"type\": 2,\n        \"service\": true,\n        \"warranty\": 3,\n        \"warranty_period\": 1\n      },\n      {\n        \"amount\": 1,\n        \"id\": 2847136,\n        \"order_id\": 52100596,\n        \"price\": 47.5,\n        \"title\": \"Battery service \",\n        \"uom_id\": 1,\n        \"type\": 3,\n        \"service\": true,\n        \"warranty\": 0,\n        \"warranty_period\": 0\n      }\n    ],\n    \"manager_id\": 206037\n  },\n  \"success\": true\n}"
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
                  "example": 309859,
                  "default": 0
                },
                "id_label": {
                  "type": "string",
                  "example": "023"
                },
                "client": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 31152179,
                      "default": 0
                    },
                    "name": {
                      "type": "string",
                      "example": "Chris Jules"
                    },
                    "first_name": {
                      "type": "string",
                      "example": "Chris"
                    },
                    "last_name": {
                      "type": "string",
                      "example": "Jules"
                    },
                    "email": {
                      "type": "string",
                      "example": "chrissy_jules14@gmail.com"
                    },
                    "phone": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "example": "4487645389"
                      }
                    },
                    "notes": {
                      "type": "string",
                      "example": ""
                    },
                    "address": {
                      "type": "string",
                      "example": ""
                    },
                    "supplier": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "juridical": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "conflicted": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "modified_at": {
                      "type": "integer",
                      "example": 1734549792000,
                      "default": 0
                    },
                    "created_at": {
                      "type": "integer",
                      "example": 1714652929000,
                      "default": 0
                    },
                    "discount_code": {
                      "type": "string",
                      "example": ""
                    },
                    "discount_goods": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "order_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "sale_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "discount_materials": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "custom_fields": {
                      "type": "object",
                      "properties": {
                        "f7757287": {
                          "type": "integer",
                          "example": 968112000000,
                          "default": 0
                        }
                      }
                    },
                    "ad_campaign": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 349683,
                          "default": 0
                        },
                        "name": {
                          "type": "string",
                          "example": "Friend"
                        }
                      }
                    }
                  }
                },
                "payer": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 31152179,
                      "default": 0
                    },
                    "name": {
                      "type": "string",
                      "example": "Chris Jules"
                    },
                    "first_name": {
                      "type": "string",
                      "example": "Chris"
                    },
                    "last_name": {
                      "type": "string",
                      "example": "Jules"
                    },
                    "email": {
                      "type": "string",
                      "example": "chrissy_jules14@gmail.com"
                    },
                    "phone": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "example": "4487645389"
                      }
                    },
                    "notes": {
                      "type": "string",
                      "example": ""
                    },
                    "address": {
                      "type": "string",
                      "example": ""
                    },
                    "supplier": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "juridical": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "conflicted": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "modified_at": {
                      "type": "integer",
                      "example": 1734549792000,
                      "default": 0
                    },
                    "created_at": {
                      "type": "integer",
                      "example": 1714652929000,
                      "default": 0
                    },
                    "discount_code": {
                      "type": "string",
                      "example": ""
                    },
                    "discount_goods": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "order_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "sale_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "discount_materials": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "custom_fields": {
                      "type": "object",
                      "properties": {
                        "f7757287": {
                          "type": "integer",
                          "example": 968112000000,
                          "default": 0
                        }
                      }
                    },
                    "ad_campaign": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 349683,
                          "default": 0
                        },
                        "name": {
                          "type": "string",
                          "example": "Friend"
                        }
                      }
                    }
                  }
                },
                "status": {
                  "type": "integer",
                  "example": 0,
                  "default": 0
                },
                "status_full": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 3319497,
                      "default": 0
                    },
                    "name": {
                      "type": "string",
                      "example": "Paid"
                    },
                    "color": {
                      "type": "string",
                      "example": "#5CB85C"
                    },
                    "group": {
                      "type": "integer",
                      "example": 10,
                      "default": 0
                    }
                  }
                },
                "created_at": {
                  "type": "integer",
                  "example": 1740480923000,
                  "default": 0
                },
                "issue_date": {
                  "type": "integer",
                  "example": 1740480920000,
                  "default": 0
                },
                "due_date": {
                  "type": "integer",
                  "example": 1743072920000,
                  "default": 0
                },
                "payment_type": {
                  "type": "integer",
                  "example": 0,
                  "default": 0
                },
                "products": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "amount": {
                        "type": "integer",
                        "example": 1,
                        "default": 0
                      },
                      "id": {
                        "type": "integer",
                        "example": 2847134,
                        "default": 0
                      },
                      "order_id": {
                        "type": "integer",
                        "example": 52100568,
                        "default": 0
                      },
                      "price": {
                        "type": "number",
                        "example": 47.5,
                        "default": 0
                      },
                      "title": {
                        "type": "string",
                        "example": "Delivery"
                      },
                      "uom_id": {
                        "type": "integer",
                        "example": 1,
                        "default": 0
                      },
                      "type": {
                        "type": "integer",
                        "example": 2,
                        "default": 0
                      },
                      "service": {
                        "type": "boolean",
                        "example": true,
                        "default": true
                      },
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
                  }
                },
                "manager_id": {
                  "type": "integer",
                  "example": 206037,
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

### GET /invoices/{invoice_id}/items/{item_id}
**Summary:** Get Invoice Item by ID

### Parameters for GET /invoices/{invoice_id}/items/{item_id}
```json
[
  {
    "name": "invoice_id",
    "in": "path",
    "description": "Invoice ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  },
  {
    "name": "item_id",
    "in": "path",
    "description": "Item ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for GET /invoices/{invoice_id}/items/{item_id}
```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": {\n    \"id\": 309859,\n    \"id_label\": \"023\",\n    \"client\": {\n      \"id\": 31152179,\n      \"name\": \"Chris Jules\",\n      \"first_name\": \"Chris\",\n      \"last_name\": \"Jules\",\n      \"email\": \"chrissy_jules14@gmail.com\",\n      \"phone\": [\n        \"4487645389\"\n      ],\n      \"notes\": \"\",\n      \"address\": \"\",\n      \"supplier\": false,\n      \"juridical\": false,\n      \"conflicted\": false,\n      \"modified_at\": 1734549792000,\n      \"created_at\": 1714652929000,\n      \"discount_code\": \"\",\n      \"discount_goods\": 0,\n      \"order_discount_services\": 5,\n      \"sale_discount_services\": 5,\n      \"discount_materials\": 0,\n      \"custom_fields\": {\n        \"f7757287\": 968112000000\n      },\n      \"ad_campaign\": {\n        \"id\": 349683,\n        \"name\": \"Friend\"\n      }\n    },\n    \"payer\": {\n      \"id\": 31152179,\n      \"name\": \"Chris Jules\",\n      \"first_name\": \"Chris\",\n      \"last_name\": \"Jules\",\n      \"email\": \"chrissy_jules14@gmail.com\",\n      \"phone\": [\n        \"4487645389\"\n      ],\n      \"notes\": \"\",\n      \"address\": \"\",\n      \"supplier\": false,\n      \"juridical\": false,\n      \"conflicted\": false,\n      \"modified_at\": 1734549792000,\n      \"created_at\": 1714652929000,\n      \"discount_code\": \"\",\n      \"discount_goods\": 0,\n      \"order_discount_services\": 5,\n      \"sale_discount_services\": 5,\n      \"discount_materials\": 0,\n      \"custom_fields\": {\n        \"f7757287\": 968112000000\n      },\n      \"ad_campaign\": {\n        \"id\": 349683,\n        \"name\": \"Friend\"\n      }\n    },\n    \"status\": 0,\n    \"status_full\": {\n      \"id\": 3319497,\n      \"name\": \"Paid\",\n      \"color\": \"#5CB85C\",\n      \"group\": 10\n    },\n    \"created_at\": 1740480923000,\n    \"issue_date\": 1740480920000,\n    \"due_date\": 1743072920000,\n    \"payment_type\": 0,\n    \"products\": [\n      {\n        \"amount\": 1,\n        \"id\": 2847134,\n        \"order_id\": 52100568,\n        \"price\": 47.5,\n        \"title\": \"Delivery\",\n        \"uom_id\": 1,\n        \"type\": 2,\n        \"service\": true,\n        \"warranty\": 0,\n        \"warranty_period\": 0\n      },\n      {\n        \"amount\": 1,\n        \"id\": 2847135,\n        \"order_id\": 52100586,\n        \"price\": 121.6,\n        \"title\": \"SSD replacement\",\n        \"uom_id\": 1,\n        \"type\": 2,\n        \"service\": true,\n        \"warranty\": 3,\n        \"warranty_period\": 1\n      },\n      {\n        \"amount\": 1,\n        \"id\": 2847136,\n        \"order_id\": 52100596,\n        \"price\": 47.5,\n        \"title\": \"Battery service \",\n        \"uom_id\": 1,\n        \"type\": 3,\n        \"service\": true,\n        \"warranty\": 0,\n        \"warranty_period\": 0\n      }\n    ],\n    \"manager_id\": 206037\n  },\n  \"success\": true\n}"
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
                  "example": 309859,
                  "default": 0
                },
                "id_label": {
                  "type": "string",
                  "example": "023"
                },
                "client": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 31152179,
                      "default": 0
                    },
                    "name": {
                      "type": "string",
                      "example": "Chris Jules"
                    },
                    "first_name": {
                      "type": "string",
                      "example": "Chris"
                    },
                    "last_name": {
                      "type": "string",
                      "example": "Jules"
                    },
                    "email": {
                      "type": "string",
                      "example": "chrissy_jules14@gmail.com"
                    },
                    "phone": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "example": "4487645389"
                      }
                    },
                    "notes": {
                      "type": "string",
                      "example": ""
                    },
                    "address": {
                      "type": "string",
                      "example": ""
                    },
                    "supplier": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "juridical": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "conflicted": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "modified_at": {
                      "type": "integer",
                      "example": 1734549792000,
                      "default": 0
                    },
                    "created_at": {
                      "type": "integer",
                      "example": 1714652929000,
                      "default": 0
                    },
                    "discount_code": {
                      "type": "string",
                      "example": ""
                    },
                    "discount_goods": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "order_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "sale_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "discount_materials": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "custom_fields": {
                      "type": "object",
                      "properties": {
                        "f7757287": {
                          "type": "integer",
                          "example": 968112000000,
                          "default": 0
                        }
                      }
                    },
                    "ad_campaign": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 349683,
                          "default": 0
                        },
                        "name": {
                          "type": "string",
                          "example": "Friend"
                        }
                      }
                    }
                  }
                },
                "payer": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 31152179,
                      "default": 0
                    },
                    "name": {
                      "type": "string",
                      "example": "Chris Jules"
                    },
                    "first_name": {
                      "type": "string",
                      "example": "Chris"
                    },
                    "last_name": {
                      "type": "string",
                      "example": "Jules"
                    },
                    "email": {
                      "type": "string",
                      "example": "chrissy_jules14@gmail.com"
                    },
                    "phone": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "example": "4487645389"
                      }
                    },
                    "notes": {
                      "type": "string",
                      "example": ""
                    },
                    "address": {
                      "type": "string",
                      "example": ""
                    },
                    "supplier": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "juridical": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "conflicted": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "modified_at": {
                      "type": "integer",
                      "example": 1734549792000,
                      "default": 0
                    },
                    "created_at": {
                      "type": "integer",
                      "example": 1714652929000,
                      "default": 0
                    },
                    "discount_code": {
                      "type": "string",
                      "example": ""
                    },
                    "discount_goods": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "order_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "sale_discount_services": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "discount_materials": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "custom_fields": {
                      "type": "object",
                      "properties": {
                        "f7757287": {
                          "type": "integer",
                          "example": 968112000000,
                          "default": 0
                        }
                      }
                    },
                    "ad_campaign": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 349683,
                          "default": 0
                        },
                        "name": {
                          "type": "string",
                          "example": "Friend"
                        }
                      }
                    }
                  }
                },
                "status": {
                  "type": "integer",
                  "example": 0,
                  "default": 0
                },
                "status_full": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 3319497,
                      "default": 0
                    },
                    "name": {
                      "type": "string",
                      "example": "Paid"
                    },
                    "color": {
                      "type": "string",
                      "example": "#5CB85C"
                    },
                    "group": {
                      "type": "integer",
                      "example": 10,
                      "default": 0
                    }
                  }
                },
                "created_at": {
                  "type": "integer",
                  "example": 1740480923000,
                  "default": 0
                },
                "issue_date": {
                  "type": "integer",
                  "example": 1740480920000,
                  "default": 0
                },
                "due_date": {
                  "type": "integer",
                  "example": 1743072920000,
                  "default": 0
                },
                "payment_type": {
                  "type": "integer",
                  "example": 0,
                  "default": 0
                },
                "products": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "amount": {
                        "type": "integer",
                        "example": 1,
                        "default": 0
                      },
                      "id": {
                        "type": "integer",
                        "example": 2847134,
                        "default": 0
                      },
                      "order_id": {
                        "type": "integer",
                        "example": 52100568,
                        "default": 0
                      },
                      "price": {
                        "type": "number",
                        "example": 47.5,
                        "default": 0
                      },
                      "title": {
                        "type": "string",
                        "example": "Delivery"
                      },
                      "uom_id": {
                        "type": "integer",
                        "example": 1,
                        "default": 0
                      },
                      "type": {
                        "type": "integer",
                        "example": 2,
                        "default": 0
                      },
                      "service": {
                        "type": "boolean",
                        "example": true,
                        "default": true
                      },
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
                  }
                },
                "manager_id": {
                  "type": "integer",
                  "example": 206037,
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

### POST /invoices/{invoice_id}/comments
**Summary:** Create Invoice Comment

### Parameters for POST /invoices/{invoice_id}/comments
```json
[
  {
    "name": "invoice_id",
    "in": "path",
    "description": "Invoice ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for POST /invoices/{invoice_id}/comments
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

### POST /invoices/{invoice_id}/status
**Summary:** Update Invoice Status

### Parameters for POST /invoices/{invoice_id}/status
```json
[
  {
    "name": "invoice_id",
    "in": "path",
    "description": "Invoice ID",
    "schema": {
      "type": "integer",
      "format": "int32"
    },
    "required": true
  }
]
```

### Response for POST /invoices/{invoice_id}/status
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

### GET /invoices/statuses
**Summary:** Get Invoice Statuses

### Parameters for GET /invoices/statuses
```json
{}
```

### Response for GET /invoices/statuses
```json
{
  "200": {
    "description": "200",
    "content": {
      "application/json": {
        "examples": {
          "Result": {
            "value": "{\n  \"data\": [\n    {\n      \"id\": 3319495,\n      \"name\": \"Draft\",\n      \"color\": \"#1E79C7\",\n      \"group\": 8\n    },\n    {\n      \"id\": 3512555,\n      \"name\": \"Control \ud83d\udc40\",\n      \"color\": \"#1E79C7\",\n      \"group\": 8\n    },\n    {\n      \"id\": 3319496,\n      \"name\": \"Issued\",\n      \"color\": \"#F89200\",\n      \"group\": 9\n    },\n    {\n      \"id\": 3319497,\n      \"name\": \"Paid\",\n      \"color\": \"#5CB85C\",\n      \"group\": 10\n    },\n    {\n      \"id\": 3319498,\n      \"name\": \"Canceled\",\n      \"color\": \"#939699\",\n      \"group\": 11\n    }\n  ],\n  \"count\": 5,\n  \"success\": true\n}"
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
                    "example": 3319495,
                    "default": 0
                  },
                  "name": {
                    "type": "string",
                    "example": "Draft"
                  },
                  "color": {
                    "type": "string",
                    "example": "#1E79C7"
                  },
                  "group": {
                    "type": "integer",
                    "example": 8,
                    "default": 0
                  }
                }
              }
            },
            "count": {
              "type": "integer",
              "example": 5,
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

