# EventTrackerProject

## Project Description

This project is an inventory tracker application designed to help users manage their inventory of items. It provides CRUD (Create, Read, Update, Delete) functionality for inventory items, allowing users to add, view, update, and remove items from their inventory. 

- Currently only functional via Postman. 
- Inventory database has items in inventory 1-3 starting out.

## Technologies Used

- Java
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

# Lessons Learned

- Cemented my understanding of Rest controllers, Mapping, and Crud operations.

- Using a Repository for my Entity streamlines the developing process.