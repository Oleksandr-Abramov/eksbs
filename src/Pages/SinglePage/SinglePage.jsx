import { Container } from 'components/Container/Container';
import { useParams, useNavigate } from 'react-router-dom';
import s from './SinglePage.module.css';
import { content } from 'data/subMenu';
export const Singlepage = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  //   const goHome = () => navigate('/', { replace: true });

  return (
    <Container>
      <button onClick={goBack}>
        <p className={s.arrow}>&#10096;</p>
      </button>
      {/* Bad approach */}
      {/* <button onClick={goHome}>Go home</button> */}
      {
        <>
          <h1>{title}</h1>
          <p>{content[title]}</p>
        </>
      }
    </Container>
  );
};
