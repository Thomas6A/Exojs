const images = document.querySelectorAll('.image');

images.forEach((image) => {
  image.addEventListener('click', function () {
    const src = this.getAttribute('src');

    images.forEach((image) => {
      image.classList.remove('selected');
    });

    document.getElementById('main').src = src;

    this.classList.add('selected');
  });
});