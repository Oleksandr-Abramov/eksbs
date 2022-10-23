import { Container } from 'components/Container/Container';
import { ImageViewer } from 'components/ImageViewer/ImageViewer';
import andrImg from '../../img/Андріївська.jpg';
import shevImg from '../../img/Шевченка.webp';
import { images1, images2 } from '../../data/gallery';
import s from './Projects.module.css';
import { useEffect } from 'react';

export const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <h1>Проекти</h1>
      <ul className={s.galleryContainer}>
        <li className={s.imgContainer}>
          <ImageViewer thumb={andrImg} gallery={images1} className={s.img} />
          <p className={s.imgTitle}>Очень интересный и продающий текст..</p>
        </li>
        <li className={s.imgContainer}>
          <ImageViewer thumb={shevImg} gallery={images2} className={s.img} />
          <p className={s.imgTitle}>Очень интересный и продающий текст..</p>
        </li>
        <li className={s.imgContainer}>
          <ImageViewer thumb={shevImg} gallery={images2} className={s.img} />
          <p className={s.imgTitle}>Очень интересный и продающий текст..</p>
        </li>
        <li className={s.imgContainer}>
          <ImageViewer thumb={andrImg} gallery={images1} className={s.img} />
          <p className={s.imgTitle}>Очень интересный и продающий текст..</p>
        </li>
        <li className={s.imgContainer}>
          <ImageViewer thumb={andrImg} gallery={images1} className={s.img} />
          <p className={s.imgTitle}>Очень интересный и продающий текст..</p>
        </li>
        <li className={s.imgContainer}>
          <ImageViewer thumb={shevImg} gallery={images2} className={s.img} />
          <p className={s.imgTitle}>Очень интересный и продающий текст..</p>
        </li>
      </ul>
    </Container>
  );
};
