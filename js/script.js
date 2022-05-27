const init = () => {
  const myMap = new ymaps.Map(
    "map",
    {
      center: [51.53227981064729, 46.02023553988656],
      zoom: 18,
      controls: ["smallMapDefaultSet"],
    },
    {}
  );
  
  //отключаем зум колёсиком мышки

  myMap.behaviors.disable('scrollZoom');
  //на мобильных устройствах... (проверяем по userAgent браузера)
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      //... отключаем перетаскивание карты
      myMap.behaviors.disable('drag');
  }

  const myPlacemark = new ymaps.Placemark(
    [51.53227981064729, 46.02023553988656],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "assets/img/mark.svg",
      iconImageSize: [50, 50],
      iconImageOffset: [-30, -55],
    }
  );
  myMap.geoObjects.add(myPlacemark);
};
ymaps.ready(init);

const createElement = (tag, attr) => {
  const elem = document.createElement(tag);

  return Object.assign(elem, { ...attr });
};

const createModal = (title, description) => {
  const overlay = createElement('div', { className: 'modal' });
  const modalElem = createElement('div', { className: 'modal__block'});

  overlay.append(modalElem);
  return overlay;
}

const productTitle = document.querySelectorAll('.product__title');
const productDescription =document.querySelectorAll('.product__description');
const productBtn = document.querySelectorAll('product__btn');

for (let i = 0; i < productBtn.length; i++) {
  productBtn[i].addEventListener('click', () => {
    const title = productTitle[i].textContent;
    const description = productDescription[i].textContent;

    const modal = createModal(title, description);
  });
   
}


