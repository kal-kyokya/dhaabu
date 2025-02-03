# Dhaabu

Dhaabu is an online platform designed to connect Africans living in different countries or regions. The platform fosters a sense of community, provides resources, and creates opportunities for networking, cultural exchange, and collaboration across the continent and the diaspora.

## Inspiration

The idea for Dhaabu was born out of the need to bridge the gaps between Africans living in different parts of the world. While we share a common heritage, our experiences, cultures, and challenges can vary greatly. Dhaabu aims to be a space where these stories and experiences can be shared, celebrated, and supported.

## Key Features

Dhaabu is packed with features to foster collaboration, networking, and cultural exchange. Key features include:

- **User Profiles**: Create personalized profiles to showcase your background, skills, and interests.
- **Cultural Exchange Hub**: Share and explore music, food, languages, and traditional practices.
- **Networking Opportunities**: Connect with other Africans based on shared interests, professions, or locations.
- **Community Forums**: Engage in discussions about African culture, current events, and shared experiences.

## Tech Stack

Dhaabu is built with a modern and scalable tech stack to ensure a seamless user experience:

- **MongoDB**: A NoSQL database for storing and managing user data, ensuring scalability and flexibility in handling diverse data types.
- **Express.js**: A web application framework for Node.js, making it easier to handle routing, requests, and server-side logic.
- **React.js**: A powerful JavaScript library for building dynamic user interfaces, allowing us to create an engaging frontend.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, enabling us to build scalable network applications.
- **Tailwind CSS**: A utility-first CSS framework used to style the platform quickly and responsively with a modern, customizable design.

## Installation & Setup

Follow these steps to set up Dhaabu on your local machine:

### Prerequisites
- Ensure you have **Node.js** and **npm** installed. You can download them from [Node.js official website](https://nodejs.org/).
- MongoDB must be installed and running on your system or a cloud-based MongoDB database must be configured.

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/dhaabu.git
   cd dhaabu/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the backend root directory and add necessary environment variables (such as MongoDB URI and JWT secret).
4. Start the backend server:
   ```sh
   npm run start-server
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser to view the app.

## Contributing

We welcome contributions from the community! Feel free to fork the repository and submit pull requests.

