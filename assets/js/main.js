$(document).ready(function () {
  const breadList = $(".product-container.bread > div > div");
  breadList.each((index, item) => {
    $(item).click(function () {
      $("#breadModal".concat((index + 1).toString())).modal("show");
    });
  });

  const cakeList = $(".product-container.cake > div > div");
  cakeList.each((index, item) => {
    $(item).click(function () {
      $("#cakeModal".concat((index + 1).toString())).modal("show");
    });
  });

  const pastryList = $(".product-container.pastry > div > div");
  pastryList.each((index, item) => {
    $(item).click(function () {
      $("#pastryModal".concat((index + 1).toString())).modal("show");
    });
  });

  const dessertList = $(".product-container.dessert > div > div");
  dessertList.each((index, item) => {
    $(item).click(function () {
      $("#dessertModal".concat((index + 1).toString())).modal("show");
    });
  });
});
