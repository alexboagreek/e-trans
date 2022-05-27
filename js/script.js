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

const createElem = (tag, attr) => {
  const elem = document.createElement(tag);

  return Object.assign(elem, { ...attr });
};

const createModal = (title, description) => {
  const overlayElem = createElem('div', {className: 'modal'});
  const modalElem = createElem('div', {className: 'modal__block'});
  const modalContainerElem = createElem('div', {className: 'modal__container'});

  const titleElem = createElem('h2', {
    className: 'modal__title',
    textContent: `Заказать ${title}`,
  });

  const descriptionElem = createElem('p', {
    className: 'modal__description',
    textContent: description,
  });

  const formElem = createElem('form', {
    className: 'modal__form',
    method: 'post',
    action: 'http://jsonplaceholder.tyicode.com/posts',
    id: 'order',
  });

  const nameLabelElem = createElem('label', { className: 'modal__label'});
  const nameSpanElem = createElem('span', {
    className: 'modal__text',
    textContent: 'Имя',
  });

  const nameInputElem = createElem('input', {
    className: 'modal__input',
    placeholder: 'Введите ваше имя',
    name: 'name',
    required: true,
  });


  const phoneLabelElem = createElem('label', { className: 'modal__label'});
  const phoneSpanElem = createElem('span', {
    className: 'modal__text',
    textContent: 'Телефон',
  });

  const phoneInputElem = createElem('input', {
    className: 'modal__input',
    placeholder: 'Введите ваш телефон',
    name: 'phone',
    required: true,
  });


  const hideInput = createElem('input', {
    type: 'hidden',
    name: 'product',
    value: title,
  });


  nameLabelElem.append(nameSpanElem, nameInputElem);
  phoneLabelElem.append(phoneSpanElem, phoneInputElem);
  formElem.append(nameLabelElem, phoneLabelElem, hideInput);

  modalContainerElem.append(titleElem, descriptionElem, formElem);
  modalElem.append(modalContainerElem);
  overlayElem.append(modalElem);
  return overlayElem;
};

const productTitle = document.querySelectorAll('.product__title');
const productDescription = document.querySelectorAll('.product__description');
console.log(productDescription);
const productBtn = document.querySelectorAll('.product__btn');

for (let i = 0; i < productBtn.length; i++) {
  productBtn[i].addEventListener('click', () => {
    const title = productTitle[i].textContent;
    const description = productDescription[i].textContent;

    const modal = createModal(title, description);
    document.body.append(modal);
  });
   
}


