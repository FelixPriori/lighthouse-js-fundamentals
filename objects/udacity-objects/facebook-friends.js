const facebookProfile = {
  name: "Felix",
  friends: 1398,
  messages: ["Hello World", "So long, and thanks for all the fish."],
  postMessage: function(message){
    facebookProfile.messages.push(message);
  },
  deleteMessage: function(index){
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function(){
    facebookProfile.friends++;
  },
  removeFriend: function(){
    facebookProfile.friends--;
  }
}