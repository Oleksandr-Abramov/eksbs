import { About } from 'Pages/About/About';
import { Building } from 'Pages/Building/Building';
import { Career } from 'Pages/Career/Career';
import { Contacts } from 'Pages/Contacts/Contacts';
import { Home } from 'Pages/Home/Home';
import { Projects } from 'Pages/Projects/Projects';
import { Restoration } from 'Pages/Restoration/Restoration';
import { Singlepage } from 'Pages/SinglePage/SinglePage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout.jsx/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="career" element={<Career />} />
          <Route path="restoration" element={<Restoration />} />
          <Route path="restoration/:title" element={<Singlepage />} />
          <Route path="building" element={<Building />} />
          <Route path="building/:title" element={<Singlepage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
};
