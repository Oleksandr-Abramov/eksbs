import { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import s from './ImageViewer.module.css';

export function ImageViewer({ thumb, gallery }) {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      {/* <div className={s.img}> */}
      <img
        src={thumb}
        alt="img"
        className={s.img}
        onClick={() => setToggler(!toggler)}
      />
      <FsLightbox toggler={toggler} sources={gallery} />

      {/* </div> */}
    </>
  );
}

// import React, { Component } from 'react';
// import Lightbox from 'react-18-image-lightbox';
// import 'react-18-image-lightbox/style.css'; // This only needs to be imported once in your app

// const images = [
//   '//placekitten.com/1500/500',
//   '//placekitten.com/4000/3000',
//   '//placekitten.com/800/1200',
//   '//placekitten.com/1500/1500',
// ];

// export class ImageViewer extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       photoIndex: 0,
//       isOpen: false,
//     };
//   }
//   render() {
//     const { photoIndex, isOpen } = this.state;
//     const { images } = this.props;
//     return (
//       <div>
//         <button type="button" onClick={() => this.setState({ isOpen: true })}>
//           Open Lightbox
//         </button>

//         {isOpen && (
//           <Lightbox
//             mainSrc={images[photoIndex]}
//             nextSrc={images[(photoIndex + 1) % images.length]}
//             prevSrc={images[(photoIndex + images.length - 1) % images.length]}
//             onCloseRequest={() => this.setState({ isOpen: false })}
//             onMovePrevRequest={() =>
//               this.setState({
//                 photoIndex: (photoIndex + images.length - 1) % images.length,
//               })
//             }
//             onMoveNextRequest={() =>
//               this.setState({
//                 photoIndex: (photoIndex + 1) % images.length,
//               })
//             }
//           />
//         )}
//       </div>
//     );
//   }
// }
