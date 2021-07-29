function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(hello) {
    console.log('hello'.toUpperCase());
}
function logWhisper(HELLO) {
    console.log('HELLO'.toLowerCase());
}

function sayHiToGrandma(string) {
    const greet1 = "hello";
    const greet2 = "HELLO";
    const greet3 = "I love you, Grandma.";
    const resp1 = "I can't hear you!"
    const resp2 = "YES INDEED!"
    const resp3 = "I love you, too."
    if (string === greet1) {
      return resp1;
    }
    else if (string === greet2) {
      return resp2;
    }
    else if (string === greet3) {
        return resp3;
      }
  }

