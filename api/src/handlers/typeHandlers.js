const {getAllTypes} = require('../controllers/typeControllers')

const getAllTypesHandler = async (req, res) => {
  try {
    const types = await getAllTypes()

    res.status(201).json(types)

  } catch (error) {
    
    res.status(500).json({error: error.message})
  }
}

module.exports = {
  getAllTypesHandler,
}