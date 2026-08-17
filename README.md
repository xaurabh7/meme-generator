# Meme Generator

A responsive Meme Generator built with **React** as a project-based learning exercise. The application fetches meme templates from the Imgflip API, lets users enter top and bottom text, and generates a random meme template with the selected text displayed over the image.

## Live Features

- Enter custom **top text** and **bottom text**
- Fetch meme templates from the **Imgflip API**
- Generate a random meme template
- Display text dynamically over the meme image
- Smoothly scroll to the generated meme
- Loading-state handling while meme templates are fetched
- Error handling for failed API requests
- Abort an in-progress API request when the effect is cleaned up
- Responsive and clean meme-generator interface

## Concepts Learned

This project was built step-by-step to practice important React concepts:

- React components and JSX
- `useState`
- State objects
- Functional state updates
- Controlled components and forms
- Event handling
- Immutability and the spread operator
- Functional programming patterns
- JavaScript `fetch()`
- `async/await`
- Working with JSON APIs
- `useEffect`
- Dependency arrays
- Effect cleanup
- `AbortController`
- Loading and error states
- `useRef`
- DOM references
- `scrollIntoView()`
- Conditional UI behavior
- Defensive programming

## How It Works

The application maintains three main pieces of state:

```text
meme
├── topText
├── bottomText
└── imageUrl

memes
└── all meme templates fetched from the API

isLoading
└── whether meme templates are still being fetched
```

The main data flow is:

```text
Imgflip API
    ↓
fetch()
    ↓
useEffect()
    ↓
setMemes()
    ↓
memes state
    ↓
getRandomMeme()
    ↓
random meme selected
    ↓
setMeme()
    ↓
React re-renders
    ↓
Meme image + text displayed
```

The text inputs are controlled components, meaning their values are stored in React state:

```text
User types
    ↓
onChange
    ↓
handleChange()
    ↓
meme state
    ↓
React re-renders
```

## API

Meme templates are fetched from the Imgflip API:

`https://api.imgflip.com/get_memes`

The application reads the `memes` array from the API response and stores it in React state.

## Project Structure

```text
meme-generator/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Running Locally

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Move into the project directory

```bash
cd meme-generator
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal.

## Technologies Used

- **React**
- **JavaScript**
- **HTML**
- **CSS**
- **Vite**
- **Imgflip API**

## Learning Notes

This project was created as part of my React learning journey. Along with building the application, I focused on understanding **why** each React feature is used rather than only following the implementation.

The project helped me understand the difference between:

- State and props
- Collection state and selected/current state
- Rendering and side effects
- `useState` and `useRef`
- `useEffect` with different dependency arrays
- API data and UI state
- Setting up an effect and cleaning it up

## Future Improvements

Possible improvements include:

- Add a download/share meme feature
- Add more meme customization options
- Add font and text-size controls
- Add text color controls
- Add meme template search
- Add better mobile styling
- Add a dedicated error message in the UI
- Allow users to upload their own image

## Acknowledgements

Meme templates are provided through the [Imgflip API](https://api.imgflip.com/).

---

**Built with React as part of my frontend development learning journey.**
