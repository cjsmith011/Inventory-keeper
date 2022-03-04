const router = require('express').Router();
const express = express.Router();
const { Tag, Product, ProductTag } = require('../../models');
const seedTags = require('../../seeds/tag-seeds');

// The `/api/tags` endpoint

router.get('/tags', (req, res) => {
  // find all tags
  const sql = 'SELECT * FROM tags';
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
