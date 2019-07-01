var axios = require("axios");
var cheerio = require("cheerio");

app.get("/scrape", function(req, res) {
    axios.get("https://www.nytimes.com/section/science").then(function(response) {
      var $ = cheerio.load(response.data);
  
      $(".theme-summary").each(function(i, element) {
        var articles = {};
  
        articles.link = $(this).find("a").attr("href");
        articles.title = $(this).find("h2").text().trim();
        articles.summary = $(this).find("p.summary").text();
        articles.image = $(this).find("a").find("img").attr("src");
        articles.saved = false;
  
        db.Article.create(result)
          .then(function(dbArticle) {
            console.log(dbArticle);
          })
          .catch(function(err) {
            console.log(err);
          });
      }); 
    });
  });
   module.exports = scrape;