# CareerPath - AI-Powered Learning Roadmap Generator

##  Project Overview

CareerPath is an AI-powered web application that generates personalized learning roadmaps for any career goal. Users simply input their desired career (e.g., "I want to become a Data Scientist") and receive a structured roadmap with phases, topics, resources, and progress tracking.

---

##  What I Built

### Core Features
- **Career Goal Input** - Natural language input with example chips
- **AI-Generated Roadmap** - Personalized phases (Beginner → Intermediate → Advanced)
- **Resource Recommendations** - YouTube videos, online courses, and research papers per topic
- **Progress Tracking** - Check off topics with visual progress bar
- **Readiness Score** - Shows estimated knowledge percentage
- **Save Roadmaps** - Local storage to save and revisit roadmaps

---

##  Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS |
| AI/LLM | Groq API (Llama 3.3 70B) |
| Routing | React Router DOM v6 |
| State Management | React Hooks (useState, useEffect) |
| Storage | localStorage (browser) |
| Version Control | Git |
| Code Editor | VS Code |
| AI Assistant | Claude (Anthropic) |

---

##  Development Approach

### 1. **Project Setup & Planning**
- Created React project using Vite (faster and more modern than create-react-app)
- Set up folder structure following React best practices (components, pages, services)
- Configured Tailwind CSS for styling

### 2. **AI Integration Strategy**
- Initially attempted Claude API (paid) → switched to Gemini API (free but hit rate limits)
- Finally settled on **Groq API** with Llama 3.3 70B model
- ✅ **Why Groq?** - Lightning fast responses (3-5 seconds vs 30+ seconds), generous free tier, and excellent JSON output

### 3. **Component Architecture**

CareerPath/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── GoalInput.jsx
│   │   ├── RoadmapCard.jsx
│   │   ├── MilestoneList.jsx
│   │   └── ProgressBar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Roadmap.jsx
│   │   └── SavedRoadmaps.jsx
│   └── services/
│       └── groqAPI.js




### 4. **AI Prompt Engineering**
Crafted prompts to consistently return structured JSON:
```javascript
const prompt = `
You are a career coach. The user wants to: "${goal}"
Generate a learning roadmap as raw JSON only...
{
  "title": "...",
  "readinessScore": 20,
  "phases": [...],
  "milestones": [...]
}


### 5. **User Experience Focus**
- Clean, modern UI with purple/white color scheme
- Loading states with spinner
- Error handling with retry options
- Smooth animations and transitions
- Mobile-responsive design



##  Challenges & Blockers Faced


### Challenge 1: **PowerShell Execution Policy**
**Issue:** `npm` commands blocked by Windows security
**Solution:** `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`

### Challenge 2: **API Rate Limits**
**Issue:** Gemini API free tier reached rate limits quickly
**Solution:** Switched to Groq API - faster and more generous free tier

### Challenge 3: **Model Availability & Timeouts**
**Issue:** OpenRouter models were slow (30-60 seconds) or unavailable
**Solution:** Groq API with `llama-3.3-70b-versatile` - consistent 3-5 second responses

### Challenge 4: **API Response Parsing**
**Issue:** AI sometimes returned JSON with markdown formatting
**Solution:** `const clean = text.replace(/```json|```/g, '').trim()`




##  How I Used AI (Claude)

### Claude as Development Assistant
- Used Claude (Anthropic's AI) through web interface
- Described each component's requirements in natural language
- Claude generated complete React components with Tailwind CSS
- Reviewed the generated code and integrated into the project
- Used Claude to debug errors and suggest fixes

### Example Prompts Used

"Create a React Home page component with Tailwind CSS that has:
- A centered hero section with the title 'CareerPath'
- An input box where users type their career goal


### AI for API Integration
- Used Claude to write the Groq API service file
- Crafted prompt structures to ensure JSON output
- Debugged API errors with console logs and Claude's guidance



##  Results

✅ Working web app with complete functionality
✅ AI generates roadmaps in 3-5 seconds
✅ All features: goal input, roadmap display, progress tracking, saving
✅ Professional UI with clean design
✅ Fully interactive and responsive



##  Key Takeaways

1. **Start with free tools** - Groq API is excellent for prototypes
2. **API choice matters** - Speed and reliability > brand names
3. **Local storage is valid** - Not every project needs a database
4. **Prompt engineering is critical** - Structure determines AI output quality
5. **Claude accelerates development** - Generated ~70%+ of the code
6. **Debug systematically** - Console logs, API responses, one fix at a time
7. **Adapt quickly** - When one API fails, move to the next



##  Future Improvements

- [ ] User authentication with Firebase
- [ ] Save roadmaps to cloud database
- [ ] PDF export functionality
- [ ] User skill assessment before roadmap generation
- [ ] Personalized readiness score based on current skills
- [ ] Dark mode support


##  How to Run

```bash
# Clone repository
git clone [repo-url]

# Install dependencies
npm install

# Add your API key to .env
VITE_GROQ_API_KEY=your_key_here

# Run the app
npm run dev
