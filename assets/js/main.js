$(document).ready(function () {
  const productList = $(".product-container.bread > div > div");
  productList.each((index, item) => {
    $(item).click(function () {
      $("#breadModal".concat((index + 1).toString())).modal("show");
    });
  });
});
