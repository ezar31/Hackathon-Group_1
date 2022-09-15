let db_UserPost = []; //ini isinya OBJ
let allPostHtml = [];
let i = 0;
//     INI bagian CREATE (tweet baru)
function tweetBaru() {
  let getPost = document.getElementById("post").value;
  //   alert(getPost);
  let obj = {
    fullname: `Group ${i}`,
    username: "@hackathon",
    tweet: getPost,
    love: i,
  }; // OBJ ini nanti akan di pusk ke array db_UserPost
  db_UserPost.push(obj);
  console.log(db_UserPost);

  let output = '<div class="tweet-content">';
  output += '<div class="tweet-header">';
  output += '  <span class="fullname">';
  output += "   <strong>Jon Vadillo</strong>";
  output += "  </span>";
  output += '  <span class="username">@JonVadillo</span>';
  output += '  <span class="tweet-time">- Jul 18</span>';
  output += "</div>";
  output += "<a>";
  output +=
    '  <img class="tweet-card-avatar" src="https://pbs.twimg.com/profile_images/679974972278849537/bzzb-6H4_bigger.jpg" alt="">';
  output += "</a>";
  output += '<div class="tweet-text">';
  output += `<p id="newPost" lang="es" data-aria-label-part="0">${db_UserPost[i].tweet}</p>`;
  output += '   <a href="" class="twitter-hashtag" dir="ltr"></a>';
  output += "  </p>";
  output += "</div>";
  output += '<div class="tweet-footer">';
  output += '  <a class="tweet-footer-btn">';
  output +=
    '    <i class="octicon octicon-comment" aria-hidden="true"></i><span> 0</span>';
  output += "  </a>";
  output += '  <a class="tweet-footer-btn">';
  output +=
    '    <i class="octicon octicon-sync" aria-hidden="true"></i><span> 0</span>';
  output += "  </a>";
  output += '  <a class="tweet-footer-btn">';
  output += `    <i class="octicon octicon-heart" aria-hidden="true"></i><span> ${db_UserPost[i].love}</span>`;
  output += "  </a>";
  output += '  <a class="tweet-footer-btn">';
  output +=
    '    <i class="octicon octicon-mail" aria-hidden="true"></i><span> 0</span>';
  output += "  </a>";
  output += "</div>";
  output += "</div>";

  document.getElementById("newPost").innerHTML = output;
  //   document.getElementById("newPost").innerHTML = `${result}`;
  //   return result;
  allPostHtml.push(output);
  showTweet(allPostHtml);
  i++;
}

function showTweet(html) {
  let result = "";
  for (let i = 0; i < html.length; i++) {
    result += html[i];
  }
  document.getElementById("newPost").innerHTML = result;
}
console.log(db_UserPost);
