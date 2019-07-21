# Personal Portfolio Web App

Includes personal: 

- Milestones
- Articles
- Projects

## Stack

### Backend

- Node (RESTful server with Express.js)
- Mongodb

#### Dependent on the following environment variables (Save '.env' file at project root):

* `PORT`: The port for the server

* `MONGO_CONNECTION_STRING`: Connection string for the Mongodb 

* `SECRET`: String used to for the JWT

* `SECURE_COOKIE`: (Boolean value string ex: 'true') 
 Marks the cookie to be used with HTTPS only.

### Frontend

Vuejs (This repository only contains the distributable version of the frontend, development version is contained in a seperate repository)

## Database Schemas

**These do not include fields automatically injected by mongoose (other than \_id to indicate its type is changed)**

- **--Common Fields--**
  - `_id` : String (The value of the name field with white spaces replaced by hyphens)
  - `name` : String
  - `description` : String
  - `thumbnailUrl` : String
  - `originDate` : Date (The date the item was first conceived e.g. a program might have been implemented in 2015 but posted about in 2016)

---

- **Article**
  -  Implements common fields.

---

- **Project**
  - Implements common fields
  - `imgUrls` : [String]

  - `youtubeEmbed` : String (URL to youtube embed)

---

- **Milestone**
  - Implements common fields.

---

- **User** (DOES NOT IMPLEMENT COMMON FIELDS)
  - `_id` : String
  - `password` : String

## Request parameters to field mapping

- Project

```
  - name -> () -> _id
         |
          -> name

  - description -> description

  - imgUrls -> imgUrls

  - thumbnailUrl -> thumbnailUrl

  - youtubeEmbed -> youtubeEmbed

  - originDate -> originDate


```

- Article

```
  - name -> () -> _id
         |
          -> name

  - description -> description

  - thumbnailUrl -> thumbnailUrl

  - originDate -> originDate
```

- News

```
  - name -> () -> _id
          |
           -> name

  - thumbnailUrl -> thumbnailUrl

  - description -> description

  - originDate -> originDate
```

- User

```
- username -> _id

- password -> () -> password
```
