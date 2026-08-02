const track = document.querySelector('#message-track');

function decodeBase64(value) {
  const bytes = Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function createMessage(encoded) {
  const message = document.createElement('p');
  message.className = 'message';
  message.textContent = decodeBase64(encoded);
  return message;
}

async function start() {
  try {
    const response = await fetch('./citations.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const messages = await response.json();
    if (!Array.isArray(messages) || !messages.every((message) => typeof message === 'string')) {
      throw new TypeError('Invalid message file');
    }

    const sequence = document.createDocumentFragment();
    messages.forEach((encoded) => sequence.append(createMessage(encoded)));
    track.append(sequence);

    const copy = [...track.children].map((message) => message.cloneNode(true));
    copy.forEach((message) => {
      message.setAttribute('aria-hidden', 'true');
      track.append(message);
    });
  } catch (error) {
    track.append(createMessage(btoa('Message unavailable')));
  }
}

start();
