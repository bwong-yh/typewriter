const message = "hello there from lighthouse labs";
// const message = "this is another test message";

const typeMessage = (message, timePerChar, initialTimeout = 0) => {
  const charPerSecond = timePerChar;
  let timeout = initialTimeout;

  for (let i = 0; i < message.length; i++) {
    setTimeout(() => {
      process.stdout.write(message[i]); // print on a single line
      if (i === message.length - 1) console.log(); // pinrt a newline if the current index is the last index of the message
    }, timeout);
    timeout += charPerSecond;
  }
};

typeMessage(message, 200, 1000);
