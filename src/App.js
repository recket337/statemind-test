import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Clients } from './pages/Clients/Clients';
import { NotFound } from './pages/NotFound/NotFound';
import { Projects } from './pages/Projects/Projects';
import { FeedbackForm } from './pages/FeedbackForm/FeedbackForm';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Clients />}/>
        <Route path="/:userId" element={<Projects />}/>
        <Route path="/:userId/project/:projectId" element={<FeedbackForm />}/>
        <Route path="notfound" element={<NotFound />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
