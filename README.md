# Project Name

## Contribution Summary
As the backend developer, I focused on stabilizing the database, implementing authentication, and laying the groundwork for future features like password reset and product management. My work ensured seamless data flow between the frontend and backend while addressing client feedback.

## Completed PBIs (Product Backlog Items)

### 1. Database Fixes & Optimization
- Resolved MongoDB issues to ensure data persistence.
- Created models for `Product` and `Order` collections with validation.
- Optimized queries for faster response times (aligned with client feedback on performance).

### 2. User Authentication APIs
- Implemented API routes for:
  - User registration/login (JWT-based).
  - Session management.
- Collaborated with frontend to integrate auth flows (e.g., cart page access).

### 3. "Forgot Password" Feature (In Progress)
- Designed schema for password reset tokens.
- Built email service integration (Node Mailer).
- Pending: UI integration with frontend (planned for Sprint 4).

### 4. API Integration Support
- Worked with frontend to:
  - Connect cart functionality to backend (state management via MongoDB).
  - Fetch testimonial data dynamically.

## Technical Implementation
- **Technology Stack:** Node.js, Express.js, MongoDB.
- **Code Quality:**
  - Followed RESTful API design principles.
  - Implemented middleware for error handling and logging.
- **Collaboration:**
  - Synced with frontend team using Swagger docs for API endpoints.
  - Attended weekly standups to align on dependencies (e.g., cart page API requirements).

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repository.git
   ```
2. Navigate to the project folder:
   ```sh
   cd your-repository
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory and add necessary environment variables (e.g., database URI, JWT secret, email service credentials).

### Running the Project
To start the backend server:
```sh
npm start
```

For development mode with auto-restart:
```sh
npm run dev
```

### API Documentation
API endpoints are documented using Swagger. Run the server and visit:
```
http://localhost:5000/api-docs
```

## Contributions & Contact
For contributions, raise an issue or submit a pull request. Feel free to reach out for questions!

