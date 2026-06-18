#!/bin/bash
# Step 1: Create a new React project with Vite
#npm create vite@latest tempus-app -- --template react

# Step 2: Navigate to the project directory
#cd tempus-app

# Step 3: Install dependencies
npm install

# Step 4: Install Bootstrap
npm install bootstrap

# Step 5: Update src/main.jsx to import Bootstrap
# Add this line to the top of src/main.jsx:
# import 'bootstrap/dist/css/bootstrap.min.css';

# Step 6: Update src/App.jsx with the code provided previously.
# Ensure you have 'grid.svg' in your 'public' folder.

# Step 7: Start the development server
npm run dev
