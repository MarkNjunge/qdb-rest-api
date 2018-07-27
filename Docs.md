# Get a random quote

**GET** `/random`

Example: [`http://localhost:3000/random`](http://localhost:3000/random)

## Responses

**Success response** (200)

```JSON
{
  "id": 17,
  "positiveVotes": "17",
  "totalVotes": "25",
  "text": "<emufreak> And now, an interview with Marat Fayzullin.\n<emufreak> How did you get into emulation?\n<RST38h> Well, it started when som*** PLZ PAY $35 TO CONTINUE"
}
```

**Error response** (500)

```JSON
{
  "error": "Error message"
}
```

# Get the latest quote

**GET** `/latest`

Example: [`http://localhost:3000/latest`](http://localhost:3000/latest)

## Responses

**Success response** (200)

```JSON
{
  "id": 17,
  "positiveVotes": "17",
  "totalVotes": "25",
  "text": "<emufreak> And now, an interview with Marat Fayzullin.\n<emufreak> How did you get into emulation?\n<RST38h> Well, it started when som*** PLZ PAY $35 TO CONTINUE"
}
```

**Error response** (500)

```JSON
{
  "error": "Error message"
}
```

# Get a specific quote by it's id

**GET** `/:id`

Example: [`http://localhost:3000/17`](http://localhost:3000/17)

## Responses

**Success response** (200)

```JSON
{
  "id": 17,
  "positiveVotes": "17",
  "totalVotes": "25",
  "text": "<emufreak> And now, an interview with Marat Fayzullin.\n<emufreak> How did you get into emulation?\n<RST38h> Well, it started when som*** PLZ PAY $35 TO CONTINUE"
}
```

**Error response** (400, 500)

```JSON
{
  "error": "Error message"
}
```

# Search for a quote

**GET** `/search`

Example: [`http://localhost:3000/search?query=emufreak&count=2`](http://localhost:3000/search?query=emufreak&count=2)

## Required parameters

**query**: The string to be searched for.

## Optional parameters

**order**: `score`(default), `quote_id` or `real_score`  
**sort**: `asc` or `desc`(default).  
**count**: Number of quotes to return.  
**approved**: `1`(default) for approved, `0` for pending or `-1` for all.

## Responses

**Success response** (200)

```JSON
[
  {
    "id": 17,
    "positiveVotes": "6",
    "totalVotes": "971",
    "text": "<emufreak> And now, an interview with Marat Fayzullin.\n<emufreak> How did you get into emulation?\n<RST38h> Well, it started when som*** PLZ PAY $35 TO CONTINUE"
  },
  {
    "id": 15,
    "positiveVotes": "723",
    "totalVotes": "1245",
    "text": "<emufreak> I HATE CHANNEL TOPICS\n<emufreak> WHY MUST THEY EXIST\n<emufreak> AND WHY DO I STILL CLICK THEM WHEN THEY END IN .JPG"
  }
]
```

**Error response** (400, 500)

```JSON
{
  "error": "Error message"
}
```
