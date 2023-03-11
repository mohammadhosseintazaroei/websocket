const socket = new WebSocket("ws://localhost:3000");
socket.onopen = (event) => {
  socket.send("Hello sever");
};
socket.onmessage = (event) => {
  console.log(event.data);
  socket.send("I want to read your data");
  document.write(event.data);
}
socket.onclose = (event) => {
    console.log(event.data)
    socket.send("i exit from scoket")
}

socket.onerror = (error) => {
    console.log(error.message)
}