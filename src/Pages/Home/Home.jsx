import { Container } from 'components/Container/Container';
import { ProjectsBar } from 'components/ProjectsBar/ProjectsBar';
import SimpleSlider from 'components/SimpleSlider/SimpleSlider';
import { Link } from 'react-router-dom';
import s from './Home.module.css';

export const Home = () => {
  return (
    <>
      <SimpleSlider />
      <div className={s.container}>
        <Container>
          <h1 className={s.title}>Наші проекти</h1>
          <ProjectsBar />
          <Link to="/projects" className={s.link}>
            УСІ ПРОЕКТИ
          </Link>
        </Container>
      </div>
    </>
  );
};
