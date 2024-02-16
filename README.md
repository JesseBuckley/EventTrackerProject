# EventTrackerProject

# Project Description

# Technologies Used

# REST Endpoints
| HTTP Verb | URI               | Request Body | Response Body | Status Codes |
|-----------|-------------------|--------------|---------------|---------|
| GET       | `/api/inventory`      |              | List of all _item_ entities | 200 |
| GET       | `/api/inventory/17`   |              | JSON of _item_ `3` | 200,404 |
| POST      | `/api/inventory`      | JSON of a new _item_ entity  | JSON of created _item_ | 201,400 |
| PUT       | `/api/inventory/17`   | JSON of a new version of _item_ `3` | JSON of updated _item_ | 200,404,400 |
| DELETE    | `/api/inventory/17`   |              |               | 204,404,400|

# Lessons Learned