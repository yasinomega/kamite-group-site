module.exports = {

    home: (req, res) => {
        res.render('index', { 
            title: 'Accueil - Kamite Group' 
        });
    },

    about: (req, res) => {
        res.render('about', { 
            title: 'À propos - Kamite Group' 
        });
    },

    contact: (req, res) => {
        res.render('contact', { 
            title: 'Contact - Kamite Group' 
        });
    },

    products: (req, res) => {
        res.render('products', { 
            title: 'Services - Kamite Group' 
        });
    }

};
