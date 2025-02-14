# Code Review AI Project

A full-stack application for automated code review using AI, consisting of a React frontend and Node.js/Express backend.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Setup Instructions](#setup-instructions)
5. [API Documentation](#api-documentation)
6. [Development Guidelines](#development-guidelines)
7. [Deployment](#deployment)
8. [Environment Variables](#environment-variables)
9. [Troubleshooting](#troubleshooting)
10. [Contributing](#contributing)
11. [License](#license)

## Project Overview

The Code Review AI project provides an automated code review solution using Google's Gemini AI. It helps developers improve code quality by analyzing code submissions and providing detailed feedback on:
- Code quality and maintainability
- Security vulnerabilities
- Performance optimizations
- Best practices and design patterns

## Features

### Backend Features
- REST API for code review requests
- Integration with Google Gemini AI
- Detailed code analysis and suggestions
- Secure API key management
- Rate limiting and request validation
- Comprehensive logging and error handling

### Frontend Features
- User-friendly interface for code submission
- Real-time code review results
- Syntax highlighting with code editor
- Responsive design for all devices
- Dark/Light theme support
- Code snippet sharing functionality

## Project Structure

```
code-review/
├── BackEnd/              # Node.js backend service
│   ├── src/               # Source code
│   │   ├── controllers/    # API controllers
│   │   ├── routes/         # API routes
│   │   ├── services/      # Business logic
│   │   └── utils/          # Utility functions
│   ├── .env                # Environment variables
│   ├── package.json        # Backend dependencies
│   └── vercel.json         # Backend deployment config
├── Frontend/               # React frontend
│   ├── public/              # Static assets
│   ├── src/                 # React components
│   │   ├── components/      # UI components
│   │   ├── pages/            # Application pages
│   │   ├── services/        # API services
│   │   └── styles/           # CSS styles
│   ├── package.json         # Frontend dependencies
│   └── vercel.json          # Frontend deployment config
├── .gitignore               # Git ignore rules
└── README.md                 # Project documentation
```

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Google Gemini API key

### Backend Setup
1. Navigate to BackEnd directory: `cd BackEnd`
2. Install dependencies: `npm install`
3. Create `.env` file with your Google Gemini API key:
```
GOOGLE_GEMINI_KEY=your_api_key_here
```
4. Start the server: `npm start`
5. The backend will be available at `http://localhost:3000`

### Frontend Setup
1. Navigate to Frontend directory: `cd Frontend`
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. The frontend will be available at `http://localhost:3001`

## API Documentation

### POST /ai/get-review
Analyzes provided code and returns review suggestions

**Request Body:**
```json
{
    "code": "your_code_here",
    "language": "javascript" // Optional: programming language
}
```

**Response:**
```json
{
    "review": "Detailed code review analysis...",
    "suggestions": [
        {
            "type": "performance",
            "description": "Optimize this loop for better performance",
            "codeSnippet": "for (let i = 0; i < array.length; i++) {...}"
        }
    ],
    "rating": 8.5
}
```

## Development Guidelines

### Backend Development
- Use ES6+ JavaScript features
- Follow REST API best practices
- Implement proper error handling
- Write unit tests using Jest
- Use ESLint for code linting

### Frontend Development
- Use React functional components
- Follow component-based architecture
- Use React hooks for state management
- Implement responsive design
- Write unit tests using Jest and React Testing Library

## Deployment

Both frontend and backend are deployed on Vercel. To deploy:

1. Install Vercel CLI: `npm install -g vercel`
2. For backend:
   - `cd BackEnd`
   - `vercel`
3. For frontend:
   - `cd Frontend`
   - `vercel`

## Environment Variables

### Backend
| Variable            | Description                          | Required |
|---------------------|--------------------------------------|----------|
| GOOGLE_GEMINI_KEY   | API key for Google Gemini AI service | Yes      |
| PORT                | Server port (default: 3000)         | No       |
| NODE_ENV            | Environment (development/production) | No       |

## Troubleshooting

### Common Issues
1. **API Key Not Working**
   - Verify the API key is correct
   - Check Google Cloud Console for API usage limits
   - Ensure the API is enabled for your project

2. **Server Not Starting**
   - Check for port conflicts
   - Verify all dependencies are installed
   - Check server logs for errors

3. **Frontend Not Connecting to Backend**
   - Verify backend is running
   - Check CORS configuration
   - Ensure correct API endpoint in frontend config

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Write tests for your changes
5. Submit a pull request with detailed description

## License

MIT License

Copyright (c) 2024 Code Review AI Team

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
