const { Router } = require('express');

const router = Router();

//Register
router.post('/register', (req, res, next) => {
  res.send('Register');
});

//Login
router.post('/login', (req, res, next) => {
  res.send('Login');
});

router.post('/refresh_token', (req, res, next) => {
  res.send('Refresh Token');
});

//Logout
router.delete('/logout', (req, res, next) => {
  res.send('Logout');
});

module.exports = router;
