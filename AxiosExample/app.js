//IMPORTANT website for Axios is https://axios-http.com/docs/example

//You dont have to call .json with this method.
//it will fill the JSON data for you automaticly
//
// axios
//   .get('https://swapi.dev/api/people/1/')
//   .then((res) => {
//     console.log('RESPONSE: ', res);
//   })
//   .catch((err) => {
//     console.log('ERROR! ', err);
//   });

//refactor to be an async function (BELOW)
//also note that a default parameter is set to make id 1
const asyncApiAxios = async (id = 1) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (error) {
    console.log('Error: ', error);
  }
};

//now we have a function that accepts a number to show a person from starwars in
//the api list.
// asyncApiAxios(7);

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement('LI');
  newLI.append(jokeText);
  jokes.append(newLI);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com', config);
    return res.data.joke;
  } catch (error) {
    jokes.append(error);
  }
};

button.addEventListener('click', addNewJoke);
