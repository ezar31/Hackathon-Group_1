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
    love: 0,
  }; // OBJ ini nanti akan di pusk ke array db_UserPost
  db_UserPost.push(obj);
  console.log(db_UserPost);
  let date = new Date();
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const d = new Date();
  let mon = month[d.getMonth()];
  let day = date.getDate("July 21, 1983 01:15:00");

  let output = '<div class="tweet-content">';
  output += '<div class="tweet-header">';
  output += '  <span class="fullname">';
  output += "   <strong>Prabowo Rio</strong>";
  output += "  </span>";
  output += '  <span class="username">@riosubiyanto</span>';
  output += `  <span class="tweet-time">- ${mon} ${day}</span>`;
  output += "</div>";
  output += "<a>";
  output +=
    '  <img id="tweetCardAvatar" class="tweet-card-avatar" src="prabowo.jfif" alt="">';
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
  output += '<a class="tweet-footer-btn">';
  //   output += `<i class="bi bi-trash" ><input id='trash' type="button" value=${i} onclick="deleteTweet(this.value)"></i>`;
  output += `<button id='trash' type="submit" class="btn btn-follow" value=${i} onclick="deleteTweet(this.value)">Delete</button>`;
  //   output += `<button type="button" value=${i} onclick="deleteTweet(this.value)>delete</button>`;
  output += "             </a>";
  output += "  </div>";
  output += "</div>";

  let plus = 1 * document.getElementById("totalTweets").innerHTML;
  //   alert(plus);
  document.getElementById("totalTweets").innerHTML = plus + 1;
  document.getElementById("newPost").innerHTML = output;
  //   document.getElementById("newPost").innerHTML = `${result}`;
  //   return result;
  allPostHtml.push(output);
  showTweet(allPostHtml);
  i++;
}

function deleteTweet(del) {
  //   let del = event.target.parent;
  //   //   let idx = del.children[0];
  //   console.log(del);
  //   alert(del);
  let minus = 1 * document.getElementById("totalTweets").innerHTML;
  //   alert(plus);
  document.getElementById("totalTweets").innerHTML = minus - 1;
  allPostHtml[del] = "";
  showTweet(allPostHtml);
}

function showTweet(html) {
  let result = "";
  for (let i = html.length - 1; i >= 0; i--) {
    result += html[i];
  }
  document.getElementById("newPost").innerHTML = result;
}
// console.log(db_UserPost);

/* INI BAGIAN LOGIN YAA!*/
let db_user = [
  {
    username: prabowo,
    password: menhan123,
  },
  {
    username: ezar,
    password: jangan123,
  },
];

//  Functionnya dibawah ini yaa
