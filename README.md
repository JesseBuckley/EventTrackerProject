# EventTrackerProject


## Project Description

This project is an inventory tracker application designed to help users manage their inventory of items. It provides CRUD (Create, Read, Update, Delete) functionality for inventory items, allowing users to add, view, update, and remove items from an inventory. 


## Technologies Used

- Java
- JavaScript
- Angular
- Spring Boot
- SQL
- REST
- JPA
- Postman


## REST Endpoints

| HTTP Verb | URI               | Request Body | Response Body | Status Codes |
|-----------|-------------------|--------------|---------------|---------|
| GET       | `/api/inventory`      |              | List of all _item_ entities | 200 |
| GET       | `/api/inventory/3`   |              | JSON of _item_ `3` | 200,404 |
| POST      | `/api/inventory`      | JSON of a new _item_ entity  | JSON of created _item_ | 201,400 |
| PUT       | `/api/inventory/3`   | JSON of a new version of _item_ `3` | JSON of updated _item_ | 200,404,400 |
| DELETE    | `/api/inventory/3`   |              |               | 204,404|

## JSON Examples

- Adding items to Inventory:

```json
{
    "itemName": "AM-FM Radio",
    "quantity": 7,
    "unitPrice": 65.35,
    "category": "Electronics",
    "location": "Supply Office Storage"
}
```

- Updating items in Inventory

```json
{
    "itemName": "AM-FM Radio with feeling",
    "quantity": 8,
    "unitPrice": 45.35,
    "category": "Electronics",
    "location": "Signed out to Mr. Biggins"
}
```

## Future Goals

- Add users accounts where they can make their own inventories of items.

- Do more with the locations and maybe allow the users to put items in specific locations inventories and each location has its own inventory


## Lessons Learned

- Cemented my understanding of Rest controllers, Mapping, and Crud operations.

- Using a Repository for my Entity streamlines the developing process.

- Using my backend work to implement a fully functional frontend using JavaScript.

- Using angular to bring up the frontend of the project instead of JavaScript.

AWS Deployment link: http://44.222.56.254:8080/RESTInventoryTracker/api/inventory


