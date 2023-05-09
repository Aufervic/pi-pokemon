const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonRouter = require('./pokemonRouter.js');
const typeRouter = require('./typeRouter.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// pokemons
router.use('/pokemons', pokemonRouter);

// types
router.use('/types', typeRouter);


// esto por defect
router.use('/', (req, res) => {
  res.status(200).json({message: 'Proyecto pokemons de Aufer'})
})

module.exports = router;
