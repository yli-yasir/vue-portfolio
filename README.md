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

- **Important notes for all Schemas**
  - \_id : String (The value of the name field with white spaces replaced by hyphens)

---

- Member Schema

  - thumbnailUrl : String (URL to a profile picture)
  - name : String
  - description : String

---

- Project Schema
  - thumbnailUrl : String
  - name : String
  - description : String
  - imgUrls : [String]
  - contributors : [{name:String, role: String}]
  - youtubeEmbed : String (URL to youtube embed)

---

- News Schema
  - description : String 
