# Y-Li Web App

This app will show the handle the following information about Y-Li:

- News
- Members
- Projects

### Backend

- Node (RESTful server with Express.js)
- Mongodb

### Frontend

Vuejs (Note that this repository only contains the distributable version of the frontend, development version is contained in a seperate repository)

## Database Schemas

- **Common Fields**
  - \_id : String (The value of the name field with white spaces replaced by hyphens)
  - name : String
  - description : String

---

- Member
  - Consists of common fields.

---

- Project
  - imgUrls : [String]
  - contributors : [{name:String, role: String}]
  - youtubeEmbed : String (URL to youtube embed)

---

- News
  - date: Date

---
- User (DOES NOT IMPLEMENT COMMON FIELDS)
  - _id : String
  - password : String
