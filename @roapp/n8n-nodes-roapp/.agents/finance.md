### GET /finance/cashflow-categories
**Summary:** No summary

### Parameters for GET /finance/cashflow-categories
```json
[
  {
    "in": "query",
    "name": "direction",
    "schema": {
      "type": "string",
      "enum": [
        "income",
        "expense"
      ]
    },
    "description": "Type of financial transaction"
  },
  {
    "in": "query",
    "name": "sort",
    "schema": {
      "type": "string",
      "enum": [
        "id",
        "-id",
        "title",
        "-title"
      ]
    },
    "description": "Defines the sorting order of returned results. Use a field name to sort ascending or prefix it with a minus sign (-) to sort descending."
  }
]
```

### Response for GET /finance/cashflow-categories
```json
{
  "200": {
    "description": ""
  }
}
```

---

### GET /finance/cashflow-categories/{id}
**Summary:** Copy of 

### Parameters for GET /finance/cashflow-categories/{id}
```json
[
  {
    "in": "path",
    "name": "id",
    "schema": {
      "type": "number"
    },
    "required": true,
    "description": "Cashflow Category ID"
  }
]
```

### Response for GET /finance/cashflow-categories/{id}
```json
{
  "200": {
    "description": ""
  }
}
```

---

### GET /finance/accounts
**Summary:** No summary

### Parameters for GET /finance/accounts
```json
[
  {
    "in": "query",
    "name": "payment_method",
    "schema": {
      "type": "string",
      "enum": [
        "cash",
        "cashless",
        "credit_card"
      ]
    },
    "description": "Account's payment method type"
  },
  {
    "in": "query",
    "name": "branch_id",
    "schema": {
      "type": "number"
    },
    "description": "Location ID"
  },
  {
    "in": "query",
    "name": "sort",
    "schema": {
      "type": "string",
      "enum": [
        "id",
        "-id",
        "title",
        "-title"
      ]
    },
    "description": "Defines the sorting order of returned results. Use a field name to sort ascending or prefix it with a minus sign (-) to sort descending."
  }
]
```

### Response for GET /finance/accounts
```json
{
  "200": {
    "description": ""
  }
}
```

---

### GET /finance/accounts/{id}/transactions
**Summary:** Copy of Copy of 

### Parameters for GET /finance/accounts/{id}/transactions
```json
[
  {
    "in": "path",
    "name": "id",
    "schema": {
      "type": "number"
    },
    "required": true,
    "description": "Finance Account ID"
  },
  {
    "in": "query",
    "name": "page",
    "schema": {
      "type": "number"
    },
    "description": "Page number"
  },
  {
    "in": "query",
    "name": "direction",
    "schema": {
      "type": "string",
      "enum": [
        "income",
        "expense"
      ]
    },
    "description": "Transaction direction"
  },
  {
    "in": "query",
    "name": "category_id",
    "schema": {
      "type": "number"
    },
    "description": "Cashflow Category ID"
  },
  {
    "in": "query",
    "name": "created_by_id",
    "schema": {
      "type": "number"
    },
    "description": "Employee ID"
  },
  {
    "in": "query",
    "name": "created_at",
    "schema": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "date-time"
      }
    },
    "description": "Filter by creation date. Accepts an array with one or two ISO 8601 date-time values. If one value is provided, it represents the start (left) boundary. If two values are provided, they define a date range (start and end). Examples: [\"2025-05-01T00:00:00Z\"] \u2014 filter from May 1, 2025 onward. [\"2025-05-01T00:00:00Z\", \"2025-05-02T00:00:00Z\"] \u2014 filter between May 1 and May 2, 2025."
  },
  {
    "in": "query",
    "name": "sort",
    "schema": {
      "type": "string",
      "enum": [
        "created_at",
        "-created_at"
      ]
    },
    "description": "Defines the sorting order of returned results. Use a field name to sort ascending or prefix it with a minus sign (-) to sort descending."
  }
]
```

### Response for GET /finance/accounts/{id}/transactions
```json
{
  "200": {
    "description": ""
  }
}
```

---

### GET /finance/accounts/{account_id}/transactions/{transaction_id}
**Summary:** Copy of Copy of Copy of 

### Parameters for GET /finance/accounts/{account_id}/transactions/{transaction_id}
```json
[
  {
    "in": "path",
    "name": "account_id",
    "schema": {
      "type": "number"
    },
    "required": true,
    "description": "Finance Account ID"
  },
  {
    "in": "path",
    "name": "transaction_id",
    "schema": {
      "type": "number"
    },
    "required": true,
    "description": "Transaction ID"
  }
]
```

### Response for GET /finance/accounts/{account_id}/transactions/{transaction_id}
```json
{
  "200": {
    "description": ""
  }
}
```

---

### DELETE /finance/accounts/{account_id}/transactions/{transaction_id}
**Summary:** Copy of Copy of Copy of Copy of 

### Parameters for DELETE /finance/accounts/{account_id}/transactions/{transaction_id}
```json
[
  {
    "in": "path",
    "name": "account_id",
    "schema": {
      "type": "number"
    },
    "required": true,
    "description": "Finance Account ID"
  },
  {
    "in": "path",
    "name": "transaction_id",
    "schema": {
      "type": "number"
    },
    "required": true,
    "description": "Transaction ID"
  }
]
```

### Response for DELETE /finance/accounts/{account_id}/transactions/{transaction_id}
```json
{
  "200": {
    "description": ""
  }
}
```

---

### GET /finance/accounts/{account_id}
**Summary:** Copy of 

### Parameters for GET /finance/accounts/{account_id}
```json
[
  {
    "in": "path",
    "name": "account_id",
    "schema": {
      "type": "number"
    },
    "required": true,
    "description": "Finance Account ID"
  }
]
```

### Response for GET /finance/accounts/{account_id}
```json
{
  "200": {
    "description": ""
  }
}
```

---

### POST /finance/accounts/{account_id}/transactions
**Summary:** No summary

### Parameters for POST /finance/accounts/{account_id}/transactions
```json
[
  {
    "in": "path",
    "name": "account_id",
    "schema": {
      "type": "number"
    },
    "required": true,
    "description": "Finance Account ID"
  }
]
```

### Response for POST /finance/accounts/{account_id}/transactions
```json
{
  "200": {
    "description": ""
  }
}
```

---

### POST /finance/accounts:transfer
**Summary:** Copy of 

### Parameters for POST /finance/accounts:transfer
```json
[]
```

### Response for POST /finance/accounts:transfer
```json
{
  "200": {
    "description": ""
  }
}
```

---

