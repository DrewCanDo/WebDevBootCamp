const login = async (username, password) => {
  if (!username || !password) throw 'Missing Credentials';
  if (password === 'corgifeetarecute') return 'WELCOME';
  throw 'Invalid Password';
};

login('akjsdhsa', 'corgifeetarecute')
  .then((msg) => {
    console.log('LOGGED IN!');
    console.log(msg);
  })
  .catch((err) => {
    console.log('ERROR!');
    console.log(err);
  });
