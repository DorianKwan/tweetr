# LHL Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This project was originally forked from Lighthouse Labs Head of Education. At the time of the fork, the page was only a bird image and a header of "Tweeter". Since then I have used my front-end and back-end skills to create a simple and easy to use twitter clone. I used HTML, CSS, JS, jQuery, and AJAX on the front-end. Using Node, Express and MongoDB for the back-end magic.

Below is the user page on load
![Screenshot1](https://raw.github.com/DorianKwan/tweetr/master/public/images/screenshots/Screenshot1.png)

Once the compose button is hovered
![Screenshot2](https://raw.github.com/DorianKwan/tweetr/master/public/images/screenshots/Screenshot2.png)

And clicked, the compose tweet section slides down
![Screenshot3](https://raw.github.com/DorianKwan/tweetr/master/public/images/screenshots/Screenshot3.png)

Above in the compose tweet section there is a character counter in the bottom right which will update as a user enters their tweet. If the user goes past 140 characters the counter will change colors to red to indicate that they have past the allowed character count. Tweeter will not allow tweets longer than 140 characters.

![Screenshot4](https://raw.github.com/DorianKwan/tweetr/master/public/images/screenshots/Screenshot4.png)
Once a tweet is made, the users name, avatar, handle, time counter and tweet will be shown in a separate section below. Tweets are uploaded and put on top of the page based on the time since the post. The time counter will update on refresh but will show time ago in seconds, minutes, hours, days and years.

## Dependencies
- Body Parser
- MongoDB
- Chance
- Md5
- Express
- Node 5.10.x or above
