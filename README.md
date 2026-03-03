# 🎵 Music Player - React Vite Project

A modern, responsive music player web application built with React and Vite. Features multiple playlists (Punjabi, Hindi, English), audio controls, and a clean user interface.


## 📸 Screenshots

<img width="901" height="570" alt="english-songs" src="https://github.com/user-attachments/assets/5e641190-4693-41c2-8d27-0e1e4402f6f2" />
<img width="893" height="677" alt="hinid-songs" src="https://github.com/user-attachments/assets/cb5cff68-7f97-4778-9f8b-81434a2fa193" />




## ✨ Features

- 🎵 **Multiple Playlists** - Punjabi, Hindi, and English music categories
- ▶️ **Playback Controls** - Play, Pause, Next, Previous
- 📊 **Progress Bar** - Seekable timeline with current/total duration
- 🔊 **Volume Control** - Adjustable volume with mute option
- 🎨 **Modern UI** - Clean and responsive design
- 📱 **Responsive** - Works on desktop and mobile devices
- 🎯 **Auto Next** - Automatically plays next song when current ends
- ⚡ **Fast Loading** - Built with Vite for optimal performance

## 🚀 Demo

<img width="1918" height="872" alt="music-player-demo" src="https://github.com/user-attachments/assets/db6e28d0-a844-458a-9ef1-71b73f878913" />



## 🛠️ Tech Stack

- **React 18.2.0** - UI Library
- **Vite 5.0** - Build Tool
- **React Icons** - Icon Library
- **CSS3** - Styling
- **HTML5 Audio API** - Audio Playback

## 📁 Project Structure

music-player/
├── public/
│ └── songs/
│ ├── punjabi/ # Punjabi songs (21 tracks)
│ ├── hindi/ # Hindi songs (18 tracks)
│ └── english/ # English songs (15 tracks)
├── src/
│ ├── components/
│ │ ├── Sidebar/
│ │ │ ├── Sidebar.jsx
│ │ │ └── Sidebar.css
│ │ ├── Playlist/
│ │ │ ├── PlaylistSection.jsx
│ │ │ ├── SongList.jsx
│ │ │ ├── SongItem.jsx
│ │ │ ├── Playlist.css
│ │ │ └── SongItem.css
│ │ └── Player/
│ │ ├── Player.jsx
│ │ ├── PlayerControls.jsx
│ │ ├── ProgressBar.jsx
│ │ ├── Player.css
│ │ └── PlayerControls.css
│ ├── data/
│ │ └── songsData.js # Songs database
│ ├── App.jsx # Main component
│ ├── App.css
│ ├── index.css
│ └── main.jsx
├── package.json
├── vite.config.js
└── README.md




## 🎯 Installation & Setup

Follow these steps to run the project locally:

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Step 1: Clone the Repository

git clone https://github.com/your-username/music-player.git
cd music-player


## Step 2: Install Dependencies
npm install Required packages will be installed:

react
react-dom
react-icons
vite

## Step 3: Add Music Files (Important!):
mkdir -p public/songs/punjabi
mkdir -p public/songs/hindi
mkdir -p public/songs/english

## Step 4: Run Development Server
npm run dev
