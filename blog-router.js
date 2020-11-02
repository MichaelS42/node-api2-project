const express = require('express');
const router = express.Router();
const Blogposts = require('./db.js');
// const Blogcomments = require('./seeds/02-comments.js');


router.get('/api/blogPost', (req, res) => {
    blogPost.find(req.query)
    .then(blogPost => {
      res.status(200).json(blogPost);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the blogPost',
      });
    });
  });
  
  router.get('/api/blogPost/:id', (req, res) => {
    blogPost.findById(req.params.id)
    .then(blogPost => {
      if (blogPost) {
        res.status(200).json(blogPost);
      } else {
        res.status(404).json({ message: 'blogPost not found' });
      }
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the blogPost',
      });
    });
  });
  
  router.post('/api/blogPost', (req, res) => {
    blogPost.add(req.body)
    .then(blogPost => {
      res.status(201).json(blogPost);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error adding the blogPost',
      });
    });
  });
  
  router.delete('/api/blogPost/:id', (req, res) => {
    Hubs.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: 'The blogPost has been nuked' });
      } else {
        res.status(404).json({ message: 'The blogPost could not be found' });
      }
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error removing the blogPost',
      });
    });
  });
  
  router.put('/api/blogPost/:id', (req, res) => {
    const changes = req.body;
    blogPost.update(req.params.id, changes)
    .then(blogPost => {
      if (blogPost) {
        res.status(200).json(hub);
      } else {
        res.status(404).json({ message: 'The blogPost could not be found' });
      }
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error updating the blogPost',
      });
    });
  });
  


module.exports = blogRouter;