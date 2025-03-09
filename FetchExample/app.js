//fetch is how you get data back from an API
//it is a promise and needs a then and catch.
//they both return data when resovled or errored.
//so it needs a function to use the data for both!
fetch('https://swapi.dev/api/people/1/')
  .then((res) => {
    console.log('RESOLVED! Data: ', res);
    //.json method on a fetch request uses a promis as well.
    //below is an example of a nested one. this one looks bad
    //use the one below this one.
    // res.json().then((data) => {
    //   console.log('JSON DONE: ', data);
    // });
    //BELOW IS THE BETTER WAY
    return res.json();
  })
  .then((data) => {
    console.log('JSON Done: ', data);
  })
  .catch((errMsg) => {
    console.log('ERROR! DATA:', errMsg);
  });
