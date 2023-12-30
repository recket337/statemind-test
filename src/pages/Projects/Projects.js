import { Link, useNavigate, useParams } from 'react-router-dom';
import './Projects.css';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { getProjects } from '../../api/api';

export function Projects() {
  const [clientProjects, setClientProjects] = useState([]);
  const [clientName, setClientName] = useState('');
  const { userId: clientId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = getProjects();
    const currentClient = data.find(item => item.loc === Number(clientId));
    if (currentClient) {
      setClientProjects(currentClient.audits);
      setClientName(currentClient.client)
    } else {
      navigate('/notfound');
    }
  }, [])
  

  return (
    <>
      <Header>{`${clientName}'s projects`}</Header>
      <ul className='Projects-list'>
        {clientProjects.map(project => <li><Link className='styledLink' key={project.audit_name} to={`project/${project.details.loc}`}>{project.audit_name}</Link></li>)}
      </ul>
    </>
  );
}
