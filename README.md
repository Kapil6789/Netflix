# Netflix Clone - React Portfolio Project

A React-based Netflix clone application featuring TV shows, movies, and genre filtering using The Movie Database (TMDb) API.

## Project Overview

This is a modern React web application built with Vite that replicates Netflix functionality, including browsing TV shows, movies, recently added content, and personalized watchlists.

## Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Routing**: React Router DOM 7.6.2
- **HTTP Client**: Axios 1.10.0
- **Icons**: React Icons 5.5.0
- **Styling**: CSS
- **Environment Management**: Dotenv 17.2.3
- **Linting**: ESLint 9.25.0

## Source Code Structure (`/src`)

### Core Files
- **`App.jsx`** - Main application component with route configuration
- **`main.jsx`** - React entry point and application bootstrap
- **`App.css`** - Global application styles

### Assets (`/src/assets`)
- **`image.png`** - Netflix logo or branding image
- **`.env`** - Environment variables (API keys, configuration)

### Components (`/src/Components`)

#### **Header** (`/src/Components/Header`)
- **`Header.jsx`** - Navigation bar with:
  - Netflix logo
  - Navigation links to different sections
  - Search icon for content search
  - Routing to TV Shows, Movies, Recently Added, and My List
- **`Header.css`** - Header styling

#### **Home/TV Shows** (`/src/Components/Home`)
- **`TvShows.jsx`** - TV shows catalog page featuring:
  - Multiple rows of TV content (Upcoming, Now Playing, Popular, Top Rated)
  - Integration with TMDb API
  - Card-based display with poster images
  - Action buttons (Add to List, Play)
- **`TvShows.css`** - TV shows page styling

#### **Movies** (`/src/Components/Movies`)
- **`Movies.jsx`** - Movies catalog with:
  - Genre filtering (Action, Horror, Bollywood, Hollywood)
  - Popular and trending movies
  - Multiple movie categories
  - Poster display component
  - TMDb API integration
- **`Movies.css`** - Movies page styling

#### **Genre** (`/src/Components/Genre`)
- **`Genre.jsx`** - Genre-based content filtering
  - Dynamic genre selection via URL parameter
  - Filtered content display
- **`Genre.css`** - Genre page styling

#### **Recently Added** (`/src/Components/Recently_Added`)
- **`Recently.jsx`** - Recently added content section
- **`Recently.css`** - Recently added page styling

#### **My List** (`/src/Components/MyList`)
- **`MyList.jsx`** - User's personalized watchlist
- **`MyList.css`** - My List page styling

## Routing Configuration

The application uses React Router with the following routes:

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | TvShows | Home page with TV shows |
| `/movies` | Movies | Movies catalog |
| `/genre/:id` | Genre | Genre-specific content |
| `/recently-added` | Recently | Recently added content |
| `/my-list` | MyList | User's watchlist |

## API Integration

The application uses **The Movie Database (TMDb) API** for content:
- **Base URL**: `https://api.themoviedb.org/3/movie`
- **Image Base URL**: `https://image.tmdb.org/t/p/original`
- **API Key**: Configured in environment file

### API Endpoints Used
- `/upcoming` - Upcoming movies
- `/now_playing` - Currently playing movies
- `/popular` - Popular movies
- `/top_rated` - Top-rated movies
- `/discover` - Genre-filtered content

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run ESLint
npm run lint

# Preview production build
npm preview
```

## Key Dependencies

- **React & React DOM** - UI library and rendering
- **React Router DOM** - Client-side routing
- **Axios** - HTTP requests to TMDb API
- **React Icons** - Icon components (Search, Play, Add)
- **Vite** - Fast build tool and dev server
- **Dotenv** - Environment variable management

## Development

### Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Configure API key in `.env` file
4. Run development server: `npm run dev`

### Project Structure
```
netflix/
├── src/
│   ├── Components/
│   │   ├── Header/
│   │   ├── Home/
│   │   ├── Movies/
│   │   ├── Genre/
│   │   ├── Recently_Added/
│   │   └── MyList/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
├── public/
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Features

✅ Browse TV shows and movies  
✅ Filter content by genre  
✅ View recently added content  
✅ Create personalized watchlist  
✅ Responsive navigation header  
✅ Search functionality (UI ready)  
✅ Integration with TMDb API  
✅ Card-based content display  

## Environment Configuration

Create a `.env` file in the `/src/Components` directory with necessary API credentials:
```
VITE_TMDB_API_KEY=your_api_key_here
```

## Notes

- The application uses functional components with React Hooks
- Styling is done with CSS modules and standalone CSS files
- API calls are made using Axios with error handling
- The project follows ES6+ module syntax
- ESLint is configured for code quality

---

**Status**: Portfolio project showcasing React fundamentals, API integration, and routing
