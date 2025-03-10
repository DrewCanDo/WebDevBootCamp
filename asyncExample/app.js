const loadStarWarsPeople = async () => {
  try {
    const res = await fetch('https://swapi.dev/api/people/1/');
    const data = await res.json();
    console.log(data);
    //2 calls. use try catch block to get any errors here.
    const res2 = await fetch('https://swapi.dev/api/people/2/');
    const data2 = await res2.json();
    console.log(data2);
  } catch (error) {
    console.log('Error!!', error);
  }
};

loadStarWarsPeople();
