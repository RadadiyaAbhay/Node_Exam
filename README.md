1. Project Setup (5 points)
- Initialize a new Node.js project.
- Install necessary dependencies: `express`, `ejs`, `body-parser`, `mongoose`, `jsonwebtoken`, `cookie-parser`, etc.
- Set up a basic server using Express.

2. Model - MongoDB Setup (5 points)
- Set up a MongoDB database to store blog data.
- Create collections for articles, users, and comments.
- Define Article, User, and Comment models using Mongoose.

3. Model - User Model with Roles (5 points)
- Enhance the User model to include fields such as `username`, `password`, `role`, etc.
- Implement role-based access control (e.g., roles: `admin`, `user`).
- Hash and store user passwords securely in the database.

4. Controller - Authentication (10 points)
- Create controllers for user registration (`/register`) and login (`/login`).
- Implement a JWT token issuance upon successful login and send it as a cookie to the client.
- Store user roles in the JWT payload.
- Configure the server to use `cookie-parser` for parsing cookies.
- Implement a route to handle user logout and clear the JWT token cookie.

5. Middleware and Routing (10 points)
- Create middleware to check for the presence and validity of JWT tokens.
- Implement a middleware to extract user information from the token and attach it to the request object.
- Use middleware to protect routes that require authentication.
- Define routes for rendering views and handling CRUD operations on articles and comments.
- Ensure that routes are protected based on user roles.

6. Model - Fetching and Displaying User-Specific Articles (10 points)
- Update the User model to include a reference or array of associated articles.
- Ensure that all articles can be retrieved for an authenticated user.
- Modify routes to handle multiuser support.

7. View Structure (5 points)
- Create the necessary views using EJS:
- `articleList.ejs` (to display all articles)
- `myArticles.ejs` (to display articles written by the logged-in user)
- `articleForm.ejs`
- `articleItem.ejs`
- `navbar.ejs` (for navigation)
- `login.ejs`
- `register.ejs`

8. Stylish Theme (5 points)
- Implement a stylish and visually appealing theme for the blog.
- Use custom CSS styles, colors, and typography to enhance the aesthetic.
- Ensure a responsive design for various screen sizes.

9. Navbar (5 points)
- Create a `navbar.ejs` partial for navigation.
- Include links to the article list, user-specific articles, article form, and a sign-out option (if applicable).
- Ensure the navbar is in line with the stylish theme.
