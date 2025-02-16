const fs = require('fs');

function replaceTabsWithEmoji(text) {
  const emojis = ['💻', '🐝', '🤥', '❤️', '0️⃣', '🔄', '🤖', '⚡', '⚙️', '✨', '📚', '🌐', '👨‍✈️', '🧠', '🚶', '🤗', '🦋'];

  const tabRegex = /\t+/g;

  return text.replace(tabRegex, () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  });
}

const inputText = fs.readFileSync('/dev/stdin', 'utf-8');
const outputText = replaceTabsWithEmoji(inputText);
console.log(outputText);
