/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function usercardMaker(data) {
  //creating a div element with the class name 'card'
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  //creating the img element
  const userImage = document.createElement("img");

  //creating another div element with the class name 'card-info'
  const divCardInfo = document.createElement("div");
  divCardInfo.classList.add("card-info");

  //creating the other elements and giving them the required class name
  const name = document.createElement("h3");
  name.classList.add("name");

  const username = document.createElement("p");
  username.classList.add("username");

  const location = document.createElement("p");
  const profile = document.createElement("p");
  const profileLink = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  //assigning textContent to each new element using the key values gotten from the object

  userImage.setAttribute("src", data["avatar_url"]);

  name.textContent = data.name;
  username.textContent = data.login;
  location.textContent = data.location;
  profile.textContent = "Profile";
  profileLink.setAttribute("href", data.url);
  profileLink.textContent = data.url;
  followers.textContent = data.followers;
  following.textContent = data.following;
  bio.textContent = data.bio;

  //appending profileLink to profile
  profile.appendChild(profileLink);

  //appending the elements to divCardInfo

  divCardInfo.appendChild(name);
  divCardInfo.appendChild(username);
  divCardInfo.appendChild(location);
  divCardInfo.appendChild(profile);
  divCardInfo.appendChild(followers);
  divCardInfo.appendChild(following);
  divCardInfo.appendChild(bio);

  //appending userImage and divCardInfo to divCard
  divCard.appendChild(userImage);
  divCard.appendChild(divCardInfo);
  return divCard;
}

axios
  .get("https://api.github.com/users/estheragbaje")
  .then(response => {
    console.log(response.data);
    const user = usercardMaker(response.data);

    const cards = document.querySelector(".cards");
    cards.appendChild(user);
  })

  .catch(error => {
    // document.body.textContent = "error";
  });
