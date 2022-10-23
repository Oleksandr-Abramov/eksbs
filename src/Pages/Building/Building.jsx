import { Container } from 'components/Container/Container';
import { subMenuBuilding } from 'data/subMenu';
import { Link } from 'react-router-dom';

export const Building = () => {
  return (
    <Container>
      <h1>Будівництво</h1>
      <ul>
        {subMenuBuilding.map((el, idx) => (
          <li key={Object.keys + idx}>
            <Link to={`/building/${Object.keys(el)}`}>{Object.values(el)}</Link>
          </li>
        ))}
      </ul>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis velit
        cum quisquam nesciunt perferendis, eveniet autem doloremque libero
        blanditiis facilis dolorum aliquam molestias sint sed vitae quis
        deleniti, amet explicabo eius sequi unde excepturi, ducimus ad
        architecto! Aliquam esse officiis vero nam nisi quas iure cumque
        repellat sapiente inventore? Eveniet aliquam facere omnis doloremque
        architecto voluptas, quia iure pariatur, error assumenda delectus?
        Cupiditate suscipit a voluptatibus eius eveniet sit laborum. Odit,
        officiis! Eligendi rerum soluta voluptatum excepturi nihil ad, nemo
        architecto cupiditate sapiente, accusamus laborum possimus eius minima
        eos numquam ut maxime itaque obcaecati quidem quae. Excepturi deleniti
        quibusdam incidunt quidem, nulla sapiente blanditiis fugiat eligendi
        consectetur neque odit optio vero! Voluptas laboriosam accusamus alias
        ratione voluptates, aperiam illum dolorum modi dolores harum
        necessitatibus, et quibusdam cupiditate. Reiciendis ducimus repudiandae
        odit labore! Officia velit molestias vel voluptates nostrum mollitia
        natus assumenda quae, vitae excepturi deserunt illum iusto, aut totam
        nulla! Repellat eaque quidem, vitae ea nemo soluta itaque nesciunt quod
        neque libero fuga aperiam ullam optio odio aliquam maxime possimus nobis
        numquam beatae a similique eos. Incidunt ea voluptatem est vel
        dignissimos quos aspernatur beatae nihil odio dolore, quisquam minus
        velit harum iste placeat ab aliquam id! Accusantium illo incidunt nam
        impedit a, aperiam id deleniti officia accusamus animi cupiditate saepe
        omnis distinctio tempora eveniet debitis sed voluptatibus, fuga sunt
      </p>
    </Container>
  );
};
