# Japan Dream Jobs Portal

## Introduction

Japan Dream Jobs Portal is a web application designed to connect job seekers with employment opportunities in Japan's job market. This project utilizes React for the frontend and interacts with a custom API for fetching job data. The backend API was created by the developer using MongoDB, Express.js, and Node.js (MERN stack). The project is deployed using Render and the source code is available on GitHub.

GitHub Repository: [Japan Dream Jobs Portal](https://github.com/whyprax/job-portal.git)
GitHub Repository for Backend: [Japan Dream Jobs Server](https://github.com/whyprax/job-portal-server)

Live Website: [Japan Dream Jobs](https://job-portal-theta-fawn.vercel.app/)

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas Cluster)
- **Deployment**: Render, Vercel

## How to Setup

1. Clone the repository: `https://github.com/whyprax/job-portal.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Access the application in your browser at `http://localhost:3000`

## Features

- Browse and filter job listings based on location, employment type, and more.
- View detailed information about each job listing, including company details, job type, and salary.
- Employers can post new job listings using the "Post Job" feature.
- Subscribe to the newsletter for updates on new job listings and industry trends.

## Explain the Source Code

The source code for this project is organized into several components:

1. **About**: Displays information about the vision and mission of the job portal.
2. **Home**: The main page of the portal where users can browse and filter job listings.
3. **JobDetails**: Displays detailed information about a specific job listing.
4. **PostJob**: Allows employers to post new job listings.
5. **Sidebar**: Provides filtering options and newsletter subscription form.
6. **Button**: A reusable button component.
7. **Input**: A reusable input component.
8. **Location**: Component for filtering jobs by location.
9. **Contract**: Component for filtering jobs by employment type.
10. **Jobs**: Component for displaying job listings.
11. **Pagination**: Component for pagination of job listings.
12. **Newsletter**: Component for subscribing to the newsletter.

## Explain the APIs

1. **Custom Job API**: The application fetches job data from a custom API hosted on job-portal-server-29o2.onrender.com.
2. **News API**: The application may utilize additional APIs for fetching news related to job market trends or industry updates. However, no specific implementation of this API is provided in the given code.

## Additional Notes

- The MongoDB cluster was set up by the developer to store job listing data.
- The backend API was created using Express.js and deployed on Render.
- The frontend of the application interacts with the backend API to fetch job data and display it to users.
- Contributions to the project are welcome via GitHub pull requests or by opening issues for bug reports or feature requests.

## License

This project is licensed under the MIT License.
