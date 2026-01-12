# Movie Survey Application

A movie survey application built with React and Vite for collecting user feedback about their favorite movies.

## ✨ Features

- 📝 Movie survey form
- ✅ Form validation
- 🎬 Select favorite movie from a list
- 💬 Add comments about movies
- 📊 Display results after submission
- 🎨 Beautiful UI with Tailwind CSS
- 📱 Responsive design for all screen sizes

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone repository
```bash
git clone <repository-url>
cd react-quick-form-mini-project
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open browser at `http://localhost:5173`

## 📦 Build

To build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 🏗️ Project Structure

```
react-quick-form-mini-project/
├── src/
│   ├── components/
│   │   ├── InputForm.jsx      # Input form component
│   │   ├── ResultForm.jsx     # Results display component
│   │   └── ui/
│   │       └── button.tsx     # Button component
│   ├── data/
│   │   └── MoviesList.jsx     # Movie list data
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   ├── App.jsx                # Main App component
│   └── main.jsx               # Entry point
├── package.json
└── README.md
```

## 🎯 Components

### InputForm
Form for collecting user data:
- Name (required)
- Email (required, with format validation)
- Favorite movie selection (required)
- Comments (optional)

### ResultForm
Results page displayed after form submission:
- Shows all submitted data
- Button to start a new survey

## 🛠️ Technologies Used

- **React** - UI Library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **TypeScript** - Type checking (config files)

## 📝 Form Fields

- **Name**: Text input field (required)
- **Email**: Email input field with format validation (required)
- **Favorite Movie**: Radio buttons from movie list (required)
- **Comments**: Textarea field (optional)

## 🎨 Styling

The project uses Tailwind CSS for styling with:
- Custom color scheme (violet/purple gradient)
- Responsive breakpoints
- Form validation styling
- Hover effects and transitions

## 📄 License

MIT
