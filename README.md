# MusicVerse

MusicVerse is a React-based application that brings together music learning, listening, playing games, and exploring music events in one platform. The app allows users to sign up, log in, and explore various features such as learning music theory, listening to songs, creating playlists, playing music-related games, and accessing tutorials. It also provides a dynamic library page for users to view and interact with playlists fetched from Spotify. Users can manage their cart for purchasing tutorials and explore concerts and events.

## Features

### Authentication
- **Signup**: New users can create an account to access all features of the platform.
- **Logout**: Users can log out of their account.

### Tutorials Management (Tutorials Cart CRUD Functionality)
- **Add to Cart**: Users can add tutorials to their cart.
- **Delete from Cart**: Users can remove tutorials from the cart.
- **Purchase**: Once a tutorial is purchased, users can watch and learn from it.
  
### Explore Page 
Access Learning Resources,play games,listen to music,view live and virtual concerts.
- Displays the main features of the platform:
  - **Learn Music**: Navigate to music theory lessons.
  - **Listen Music**: View playlists and tracks.
  - **Play Games**: Music trivia and instrument identification games.
  - **Events and Concerts**: Information about upcoming concerts and events.
  
### Library Page
- Displays playlists fetched from **Spotify** using the [Spotify API](https://developer.spotify.com/).
- 'https://v1.nocodeapi.com/drutika/spotify/FvSruGylpkJWfVtd/myPlaylists' - this is the spotify api used to fetch the playlist into mood.js page.
- Users can interact with playlists and view tracks.

### Games Page
- Interactive music-related games:
  - **Music Trivia**: Test your music knowledge.
  - **Instrument Identification**: Identify instruments based on sound or images.

### Tutorials Page
- Users can browse and add video tutorials to their cart.
- Tutorials are locked and can only be watched after purchase.
- Click on 'Learn Music Theory & Musical Notes' to navigate to the MusicTheory page for detailed insights into music theory and notes.

### Music Theory Page
- Learn music theory, including notes, scales, chords, and more.

## Tech Stack

- **Frontend**: **React** (with Hooks and State Management)
- **Backend**: Json Server is used, but data is managed locally and via API calls for Spotify and other integrations.
- **Routing**: **React Router DOM** for navigation between pages.
- **Styling**: **Tailwind CSS** for styling the user interface.
- **Charting**: React Slick for creating carousels and displaying tutorial slides.
- **Icons**: React Icons for using Font Awesome icons.
  
## Getting Started

## prerequisites 
- Install **Visual Studio Code (VS Code)** or any preferred **IDE**.
- **Node.js** (version 12 or higher)
- **NPM or Yarn** for package management
- **Spotify Developer Account** (for API access)
- **Run JSON Server**
- **npm start**

### How It Works

1. **User Authentication**:
   - Users can create an account or log in to access personalized data.
   
2. **Adding Tutorials to Cart**:
   - Users can browse the tutorials page and add tutorials to their cart.
   - Once the tutorial is purchased, users can view the tutorial video.

3. **CRUD Operations**:
   - **Add to Cart**: Users can add tutorials to the cart.
   - **Delete from Cart**: Users can delete tutorials from their cart if they decide not to purchase them.
   - **View Cart**: Shows all items added to the cart before purchasing.

4. **Explore Features**:
   - Users can explore the main features like learning music theory, listening to music, playing games, and more from the explore page.
   
5. **Visualization**:
   - The app provides insights into user preferences via a carousel, including events, concerts, and tutorials.

6. **Library and Tracks**:
   - Users can view Spotify playlists and tracks in the library section.
   - Clicking on a playlist navigates to the tracks page to view individual songs.


