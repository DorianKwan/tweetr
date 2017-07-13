$().ready(function() {
  // Malicious text filter
  function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
  // Get the amount of time since the tweet was posted
  function timeAgo(userTime) {
    var time = ((Date.now() - userTime) / 1000) - 655;
    const minute = 60;
    const hour = 3600;
    const day = 86400;
    const year = 31536000;
    switch(true) {
      case time < minute:
        return `Posted ${Math.floor(time)} seconds ago`;
        break;
      case time >= minute && time < hour:
        return `Posted ${Math.floor(time / minute)} minute\(s\) ago`;
        break;
      case time >= hour && time < day:
        return `Posted ${Math.floor(time / hour)} hour\(s\) ago`;
        break;
      case time >= day && time < year:
        return `Posted ${Math.floor(time / day)} day\(s\) ago`;
        break;
      default:
        return `Posted over ${Math.floor(time / year)} year\(s\) ago`;
        break;
   }
  }
  // Create a new tweet format
  function createTweetElement(tweetData) {
    const time = timeAgo(tweetData.created_at);
    const html = `
    <section class="tweet-box">
       <article class="tweet">
          <header>
              <img class="profile-photo" src=${tweetData.user.avatars.small}>
              <span class="name">${tweetData.user.name}</span>
              <span class="handle">${tweetData.user.handle}</span>
          </header>
          <div class="box">
            <p>${escape(tweetData.content.text)}</p>
          </div>
          <footer>
            <span class="created-at">${time}</span>
            <span class="icons">
              <a href="#" title="Flag as inappropriate"><i class="fa fa-flag" aria-hidden="true"></i></a>
              <a href="#" title="Re-Tweet"><i class="fa fa-refresh" aria-hidden="true"></i></a>
              <a href="#" title="Like"><i class="fa fa-heart" aria-hidden="true"></i></a>
            </span>
          </footer>
        </article>
      </section>
      <br>
      `
    return html;
   }

  // Render the tweets from the object memory database
  function renderTweets(arr) {
    arr.forEach(function(item) {
      $('#tweets').prepend(createTweetElement(item));
    });
  }

  // Handles the new tweet post
  function handleNewTweet(event) {
    event.preventDefault();

    if ($('textarea').val().length > 140) {
      alert('Too many characters');
    } else {
      var $form = $(this);
      $.post({
        url: '/tweets',
        data: $form.serialize()
      })
      .done(function() {
        loadTweets();
        $('form textarea').val('');
      })
      .error(function() {
        alert('Empty post not supported');
      });
    }
  }
  // Load the tweets from the object memory database
  function loadTweets() {
    $.get({
      url: '/tweets'
    })
    .done(function(data) {
      renderTweets(data);
    });
  }

  loadTweets();

  $('.js-tweet-form').on('submit', handleNewTweet);
});
