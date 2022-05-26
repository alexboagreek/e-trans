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
