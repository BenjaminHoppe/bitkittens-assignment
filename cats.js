document.addEventListener('DOMContentLoaded', function() {
  const summonCats = document.querySelector('button.summon-cats');
  const catBoxes = document.querySelectorAll('.cat-box');

  summonCats.addEventListener('click', () => {
    console.log("clicked!");
    axios({
      method: 'GET',
      url: 'http://bitkittens.herokuapp.com/cats.json',
    }).then((response) => {
      console.log(response.data);

      catBoxes.forEach((imgBox, index) => {
        imgBox.innerHTML = "";
        const catPic = document.createElement('img');
        catPic.src = response.data.cats[index].photo;
        catPic.alt = `Picture of ${response.data.cats[index].name}`;
        imgBox.appendChild(catPic);
      });
    });
  });
});
