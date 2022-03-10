const router = require('express').Router();
const { json } = require('express/lib/response');
//const res = require('express/lib/response');
const { Tag, Product, ProductTag } = require('../../models');
//const seedTags = require('../../seeds/tag-seeds');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  //const sql = 'SELECT * FROM tags';
  Tag.findAll({
    // attributes: ['id', 'tag_name'],
    include: [
      {
        model: Product,
        //attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        through: ProductTag,
      },
    ],
  })
  .then((dbTagData) => res.status(200).json(dbTagData))
  .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id,
    }, 
    //attributes: ['id', 'tag_name'],
    include: [
      {
        model: Product,
        //attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        through: ProductTag,
      },
    ],
  })
  .then((dbTagData) => res.status(200).json(dbTagData))
  .catch(err => res.status(404).json(err));
  });

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((dbTagData) => res.status(200).json(dbTagData))
  .catch((err) => res.status(404).json(err));
  });

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body,
  {
    where: {
      id: req.params.id,
    },
  }
  )
  .then((dbTagData) => res.status(200).json(dbTagData))
  .catch(err => res.status(500).json(err));
  });


router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((dbTagData) => res.status(200).json(dbTagData))
  .catch(err => res.status(500).json(err));
  });

module.exports = router;
