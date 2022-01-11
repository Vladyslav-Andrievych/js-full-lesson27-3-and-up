export const addImage = (imgSrc) => {
  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My photo');
    imgElem.src = imgSrc;

    const container = document.querySelector('.page');
    container.append(imgElem);

    const onImageLoad = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    const onImageErrorLoad = () => {
      reject(new Error('Image load is failed...'));
    }

    imgElem.addEventListener('load', onImageLoad);
    imgElem.addEventListener('error', onImageErrorLoad);
  })

  return p;
};

const promiseObj = addImage('https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg');

const onPromiseResolved = ({ width, height }) => {
  const imageSizeElem = document.querySelector('.image-size');
  imageSizeElem.textContent = `${width} x ${height}`;
};

const onPromiseRejected = (error) => {
  console.log(error);
};

promiseObj.then(onPromiseResolved, onPromiseRejected);