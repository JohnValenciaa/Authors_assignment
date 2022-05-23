const AuthorController = require('../controllers/author.controller');

module.exports = function(app){
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.get('/api/author/:id', AuthorController.getAuthor);
    app.post('/api/authors/add', AuthorController.addAuthor);
    app.put('/api/authors/update/:id', AuthorController.updateAuthor);
    app.delete("/api/authors/delete/:id", AuthorController.deleteAuthor);
}