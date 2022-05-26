const init = () => {
  const myMap = new ymaps.Map(
    "map",
    {
      center: [51.53227981064729, 46.02023553988656],
      zoom: 16,
      controls: ["smallMapDefaultSet"],
    },
    {}
  );
  const myPlacemark = new ymaps.Placemark(
    [51.53227981064729, 46.02023553988656],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/mark.svg",
      iconImageSize: [70, 70],
      iconImageOffset: [-35, -70],
    }
  );
  myMap.geoObjects.add(myPlacemark);
};
ymaps.ready(init);
