let db_UserPost = [];
let allPostHtml = [];
let i = 0;
function tweetBaru() {
  let getPost = document.getElementById("post").value;
  let obj = {
    fullname: `Group ${i}`,
    username: "@hackathon",
    tweet: getPost,
    love: 0,
  };
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
  output += `    <i class="octicon octicon-heart" aria-hidden="true"></i><span> ${db_UserPost[i].love}</span>`;
  output += "  </a>";
  output += '<a class="tweet-footer-btn"> <br></br>';
  output += `<button id='trash' type="submit" class="btn btn-follow" value=${i} onclick="deleteTweet(this.value)">Delete</button>`;
  output += "</a>";
  output += "</div>";
  output += "</div>";

  let plus = 1 * document.getElementById("totalTweets").innerHTML;
  document.getElementById("totalTweets").innerHTML = plus + 1;
  document.getElementById("newPost").innerHTML = output;
  allPostHtml.push(output);
  showTweet(allPostHtml);
  i++;
}

function deleteTweet(del) {
  let minus = 1 * document.getElementById("totalTweets").innerHTML;
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

/* INI BAGIAN LOGIN YAA!*/
let db_user = [
  {
    username: "prabowo",
    password: "menhan123",
  },
  {
    username: "ezar",
    password: "jangan123",
  },
];

//  Functionnya dibawah ini yaa

// Function Login
function loginValidation(
  uID = document.getElementById("username").value,
  uPass = document.getElementById("password").value
) {
  // alert(uID);
  let isValid = false;
  for (let i = 0; i < db_user.length; i++) {
    if (uID === db_user[i].username && uPass === db_user[i].password) {
      isValid = true;
      break;
    }
  }
  if (isValid) {
    location.replace("myHome.html");
  } else {
    alert(`username atau password salah!`);
  }
}

// Function follow
function follow() {
  let plus = 1 * document.getElementById("tambah-follow").innerHTML;
  if (plus < 1) {
    document.getElementById("tambah-follow").innerHTML = plus + 1;
  }
}
