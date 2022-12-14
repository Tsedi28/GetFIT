const { Blog } = require('../models');

const BlogData = [
    {
        "title":"EXERCISE DAILY",
        "textarea":"TEXT"
    },
    {
        "title":"THINK POSITIVE AND FOCUS ON GRATITUDE",
        "textarea":"TEXT"
    },
                
    {
        "title":"GET A GOOD NIGHT'S SLEEP",
        "textarea":"TEXT"
        
     
    },            
    {
        "title":"USE FOODS OVER SUPPLEMENTS",
       "textarea": "TEXT"

    },

    {
        "title":"EAT LIKE A KID",
        "textarea":"TEXT"
    },

    {
        "title":"THINK SMALL",
        "textarea":"TEXT"
    }
];

const seedBlog = () => Blog.bulkCreate(BlogData);

module.exports = seedBlog