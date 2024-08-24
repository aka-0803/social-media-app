# Connect - Social Media Application [🌐](https://yourwebsite.com)

## Summary
**Connect** is a social media application designed to enable users to create profiles, share posts, interact with others through comments and likes, and explore content created by other users. It features a responsive design, robust authentication, and a user-friendly interface, making it accessible on both desktop and mobile devices.

## Project Flowchart
![Project Flowchart](path-to-your-flowchart-image.png)

## Features
- **User Authentication**: Secure sign-up and login using JWT.
- **User Profiles**: Customizable profiles with personal information.
- **Posts**: Create, edit, and delete posts with text and images.
- **Comments and Likes**: Engage with posts by commenting and liking.
- **Responsive Design**: Optimized for both desktop and mobile use.

## How to Clone the Project

### Prerequisites
- **Node.js**
- **MySQL**

### Clone the Repository
```bash
git clone https://github.com/aka-0803/social-media-app.git
cd social-media-app
```

# Installation and Setup

## Install Dependencies
To install dependencies for both the frontend and backend, follow these steps:

```bash
cd connect
npm install
cd api
npm install
```

## Set Up Environment Variables
Create a .env file in the api directory with the following content:
```bash
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=connect_db
JWT_SECRET=your_jwt_secret
```

## Set Up Database
- Start MySQL and create a database named connect_db.
- Execute the necessary SQL scripts to create the required tables.

## Run the Application
- Backend:
  ```bash
  cd api
  npm start
  ```
- Frontend:
    ```bash
    cd connect
    npm start
    ```

# Tech Stack
- Frontend: ReactJS
- Backend: Node.js, Express.js
- Database: MySQL
- Authentication: JWT (JSON Web Tokens)
- Version Control: Git

# Learnings
Key learnings from developing Connect include:

- Full-Stack Development: Understanding the integration between frontend and backend technologies.
- Authentication: Implementing secure user authentication using JWT.
- Database Management: Structuring and managing relational databases with MySQL.
- Responsive Design: Building a user interface that adapts to different screen sizes.
