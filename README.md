# React TypeScript Youtube Clone App

This is a Youtube Clone app built using React and TypeScript created for an internship assignment. It allows users to browse and view Videos while fetching data from an external api, providing a homepage with video cards of the video and a videoPlayer page for each selected video which also contains the link about the platform where the actual video was created/uploaded. The app utilizes packages such as axios, react-intersection-observer, and react-icons, and implements state management using Context API.

## Features

- Browse and view videos
- Homepage with image/thumbnail cards
- Infinite scrolling using react-intersection-observer
- video details page
- state management using Context API

## Installation

1. clone the repository:
   https://github.com/abadullah-khan/youtube-clone.git

2. Navigate to the project directory:
   cd youtube-clone

3. install the dependencies:
   npm install

## Usage

1. Start the development server:
   npm start

2. Open your browser and visit:
   http://localhost:300

3. Browse the videos on the homepage and click on a video card to view its details.

## Dependencies

The app relies on the following dependencies:

- axios: Used for making HTTP requests to retrieve video data.
- react-intersection-observer: Used for tracking the visibility of elements in the viewport and make HTTP requests to retrieve next page data.
- react-icons: Provides a collection of icons for UI components.
- react-router-dom: Handles routing and navigation between different pages
