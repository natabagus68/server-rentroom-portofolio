# server-rentroom-portofolio

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /profiles`
- `GET /profiles`
- `GET /hotels`
- `POST /hotels`
- `GET /hotels/:id`
- `GET /hotelrooms`
- `POST /hotelrooms`
- `GET /hotelrooms/:id`
- `PUT /hotelrooms/:id`
- `DELETE /hotelrooms/:id`
- `POST /likes/:HotelDataId`
- `GET /bookmarks`
- `POST /bookmarks/:HotelDataId`
- `DELETE /bookmarks/:id`
- `GET /orders`
- `GET /orders/:id`
- `POST /orders/:HotelRoomId`
- `DELETE /orders/:id`

&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Name is required"
}
OR
{
  "message": "Password is required"
}
```

&nbsp;
