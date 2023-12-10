const getCharById = require('../controllers/getCharById');
const getAllChars = require('../controllers/getAllChars');
const login = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const { Router } = require('express');

const router = Router();

router.get('/all', getAllChars);
router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;
