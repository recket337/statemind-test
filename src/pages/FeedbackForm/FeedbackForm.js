import { useNavigate, useParams } from 'react-router-dom';
import './FeedbackForm.css';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import toast from 'react-hot-toast';
import { getProjects } from '../../api/api';

export function FeedbackForm() {
  const [project, setProject] = useState('');
  const [clientName, setClientName] = useState('')

  const { userId: clientId, projectId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const data = getProjects();
    const currentClient = data.find(item => item.loc === Number(clientId));
    const currentProject = currentClient?.audits.find(item => item.details.loc === Number(projectId));
    if (currentProject) {
      setProject(currentProject.audit_name);
      setClientName(currentClient.client)
    } else {
      navigate('/notfound');
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success('Successfully sent!')
    navigate('/')
  }

  return (
    <>
      <Header>{`${clientName}'s ${project}`}</Header>
      <form className='FeedbackForm'>
        <h2 className="FeedbackForm-headline">
          Send your feedback!
        </h2>
        <textarea
          placeholder="Type..."
          className="FeedbackForm-textarea"
        />
        <button
          className="FeedbackForm-submit"
          onClick={handleSubmit}
        >
          Send
        </button>
      </form>
    </>  
  );
}
