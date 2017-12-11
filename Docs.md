# Get a random quote

**GET** `/random`

## Responses

**Success response** (200)  
Quote model

**Error response** (500)  
Error model

# Get the latest quote

**GET** `/latest`

## Responses

**Success response** (200)  
Quote model

**Error response** (500)  
Error model

# Get a specific quote by it's id

**GET** `/:id`

## Responses

**Success response** (200)  
Quote model

**Error response** (400, 500)  
Error model

# Search for a quote

**GET** `/search`

## Required parameters

**query**: The string to be searched for.

## Optional parameters

**sort**: The sort order. 0 for score, 1 for number. Default = 0  
**count**: The number of items to be returned. 10, 25, 50, 75 or 100. Default = 10

## Responses

**Success response** (200)  
An array of quote models

**Error response** (400, 500)  
Error model

# Quote model

```JSON
{
  "id": "17",
  "score": "1527",
  "text": "<emufreak> And now, an interview with Marat Fayzullin.\n<emufreak> How did you get into emulation?\n<RST38h> Well, it started when som*** PLZ PAY $35 TO CONTINUE"
}
```

# Error model

```JSON
{
  "error": "Error message"
}
```
