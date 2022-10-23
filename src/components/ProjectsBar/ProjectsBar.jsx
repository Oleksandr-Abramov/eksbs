import { ImageViewer } from 'components/ImageViewer/ImageViewer';
import { images1, images2 } from '../../data/gallery';
import andrImg from '../../img/Андріївська.jpg';
import shevImg from '../../img/Шевченка.webp';
import s from './ProjectsBar.module.css';

export const ProjectsBar = () => {
  return (
    <section className={s.section}>
      <ul className={s.list}>
        <li className={s.item}>
          <div className={s.itemImg}>
            <ImageViewer thumb={andrImg} gallery={images1} />
          </div>
          <div className={s.itemContainerUp}>
            <h2 className={s.title}>Андріївська церква</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              amet provident et natus facilis dicta sint totam minus qui odit
              cupiditate illum, at soluta voluptatem veritatis autem. Eligendi
              totam perferendis illo laborum saepe veritatis iste nesciunt
              aliquid sapiente esse veniam magni optio tempora fugit inventore
              accusamus minima ratione, vero nemo architecto fugiat voluptatibus
              ipsam ut aliquam? Repellendus quisquam commodi nulla libero
              voluptatum enim ad expedita voluptas culpa, cumque minus nobis
              fuga velit voluptatibus dolorum tenetur consequuntur maxime
              ducimus aperiam iusto voluptatem harum perferendis! Debitis ullam
              ex obcaecati consequuntur autem necessitatibus id harum accusamus,
              optio neque perspiciatis dolorem aspernatur, iure cumque. Vel nam
              accusantium inventore, aspernatur illum accusamus rerum
              reiciendis, voluptatem ipsum aliquid vero a eligendi. Quisquam
              unde tempore eum asperiores vero velit aliquid fuga, maxime odio
              aperiam voluptatum numquam vel doloremque ad aspernatur ipsam
              minus optio labore itaque culpa! Veniam reiciendis dolorem iusto
              non quibusdam nemo, voluptatum, porro facere assumenda dignissimos
              cumque laboriosam ipsum culpa sed doloremque. Nam amet maxime
              fugit ad expedita inventore eos obcaecati magnam id! Temporibus
              eligendi voluptates autem nobis ducimus repellendus similique est
              optio, suscipit blanditiis sapiente enim, quis at reprehenderit
              sint sit impedit vero aut? Corrupti laboriosam accusamus nulla ea
              ?
            </p>
          </div>
        </li>
        <li className={s.item}>
          <div className={s.itemContainerDown}>
            <h2 className={s.title}>Готель Grand Boulevard</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              amet provident et natus facilis dicta sint totam minus qui odit
              cupiditate illum, at soluta voluptatem veritatis autem. Eligendi
              totam perferendis illo laborum saepe veritatis iste nesciunt
              aliquid sapiente esse veniam magni optio tempora fugit inventore
              accusamus minima ratione, vero nemo architecto fugiat voluptatibus
              ipsam ut aliquam? Repellendus quisquam commodi nulla libero
              voluptatum enim ad expedita voluptas culpa, cumque minus nobis
              fuga velit voluptatibus dolorum tenetur consequuntur maxime
              ducimus aperiam iusto voluptatem harum perferendis! Debitis ullam
              ex obcaecati consequuntur autem necessitatibus id harum accusamus,
              optio neque perspiciatis dolorem aspernatur, iure cumque. Vel nam
              accusantium inventore, aspernatur illum accusamus rerum
              reiciendis, voluptatem ipsum aliquid vero a eligendi. Quisquam
              unde tempore eum asperiores vero velit aliquid fuga, maxime odio
              aperiam voluptatum numquam vel doloremque ad aspernatur ipsam
              minus optio labore itaque culpa! Veniam reiciendis dolorem iusto
              non quibusdam nemo, voluptatum, porro facere assumenda dignissimos
              cumque laboriosam ipsum culpa sed doloremque. Nam amet maxime
              fugit ad expedita inventore eos obcaecati magnam id! Temporibus
              eligendi voluptates autem nobis ducimus repellendus similique est
              optio?
            </p>
          </div>
          <div className={s.itemImg}>
            <ImageViewer thumb={shevImg} gallery={images2} />
          </div>
        </li>
      </ul>
    </section>
  );
};
