const form = document.querySelector('#searchForm');

form.addEventListener('click', async function (e) {
  //always use a try catch to find any errors!!
  try {
    e.preventDefault();
    const searchTerm = form.elements.query.value;

    //we can do something very interesting with axios.
    //we can pass the search items using a config varaiable!
    const config = { params: { q: searchTerm } };

    const res = await axios.get(
      // `http://api.tvmaze.com/search/shows?q=${searchTerm}`
      `http://api.tvmaze.com/search/shows`,
      config
    );

    console.log('res VARA:', res);
    console.log('res.data VARA:', res.data);

    // Below shows the image for the movie.
    console.log(
      'res.data[0].show.image.medium RES: ',
      res.data[0].show.image.medium
    );

    //run fuction below and send the data array into it!
    makeImages(res.data);

    //after the function has completed we need to empty the input value.
    //so the user can search again.
    //REMINDER that the name query comes from the what we named the input element in the HTML file.
    form.elements.query.value;
  } catch (error) {
    console.log(error);
  }
});

const makeImages = (shows) => {
  for (const result of shows) {
    //create a new element for the html
    const img = document.createElement('IMG');
    console.log('IMG VAR: ', img);

    //the if statement below needs to be added so that we check to see if there is an image.
    //if there is no image then there will be an errror without this for statement.
    if (result.show.image.medium) {
      //attach a new src to the img element
      img.src = result.show.image.medium;

      //add the element to the body!
      document.body.append(img);
    }
  }
};
