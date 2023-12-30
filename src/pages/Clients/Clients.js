import { Link } from 'react-router-dom';
import './Clients.css';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { getProjects } from '../../api/api';

export function Clients() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const data = getProjects();
    setProjects(data);
  }, [])

  return (
    <>
      <Header>Clients</Header>
      <ul className='Clients-list'>
        {projects.map(project => <li key={project.loc}><Link className='styledLink' to={`/${project.loc}`}>{project.client}</Link></li>)}
      </ul>
    </>
  );
}
