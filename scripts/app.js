//dom queries
const chatList = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");
const newNameForm = document.querySelector(".new-name");
const updateMssg = document.querySelector(".update-mssg");
const rooms = document.querySelector(".chat-rooms");

//add new chat
newChatForm.addEventListener("submit", e => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom
    .addChat(message)
    .then(() => {
      newChatForm.reset();
    })
    .catch(err => console.log(err));
});

//Update username

newNameForm.addEventListener("submit", e => {
  e.preventDefault();
  //Update name via chatroom
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);
  //Reset the form
  newNameForm.reset();
  //Show then hide the update message
  updateMssg.innerText = `✅ Your name was update to ${newName} ✅ `;
  setTimeout(() => {
    updateMssg.innerText = "";
  }, 3000);
});

//Update the chat room
rooms.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute("id"));
    chatroom.getChats(chat => chatUI.render(chat));
  }
});

//Check localstorage for a name
const username = localStorage.username ? localStorage.username : "Mahalac";

//Class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("gaming", username);

//get chats and render
chatroom.getChats(data => {
  chatUI.render(data);
});
