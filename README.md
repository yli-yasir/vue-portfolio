# Personal Portfolio Web App

Includes personal: 

- Milestones
- Articles
- Projects

### Backend

- Node (RESTful server with Express.js)
- Mongodb

### Frontend

Vuejs (This repository only contains the distributable version of the frontend, development version is contained in a seperate repository)

## Database Schemas

**These do not include fields automatically injected by mongoose (other than \_id to indicate its type is changed)**

- **Common Fields**
  - \_id : String (The value of the name field with white spaces replaced by hyphens)
  - name : String
  - description : String
  - thumbnailUrl : String

---

- Article
  - Consists of common fields.

---

- Project (implements common fields)
  - imgUrls : [String]
  - contributors : [{name:String, role: String}]
  - youtubeEmbed : String (URL to youtube embed)

---

- Milestones
  - Consists of common fields.

---

- User (DOES NOT IMPLEMENT COMMON FIELDS)
  - \_id : String
  - password : String

## Request parameters to field mapping

- Project

```
  - name -> () -> _id
         |
          -> name

  - description -> description

  - imgUrls -> imgUrls

  - thumbnailUrl -> thumbnailUrl

  - contributorNames \
                      -> () -> contributors
  - contributorRoles /

  - youtubeEmbed -> youtubeEmbed
```

- Article

```
  - name -> () -> _id
         |
          -> name

  - description -> description

  - thumbnailUrl -> thumbnailUrl
```

- News

```
  - name -> () -> _id
          |
           -> name

  - thumbnailUrl -> thumbnailUrl

  - description -> description
```

- User

```
- username -> _id

- password -> () -> password
```
