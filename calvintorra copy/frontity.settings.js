const settings = {
  "name": "calvintorra",
  "state": {
    "frontity": {
      "url": "http://calvintorra.com",
      "title": "Calvin Torra - Frontend Developer",
      "description": "Building things and solving problems"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Projects",
              "/projects/"
            ],
            [
              "Thoughts",
              "/thoughts"
            ],
            [
              "Contact Me",
              "/contact/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://calvint1.sg-host.com/wp-json/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
