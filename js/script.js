function typeText(element, text, interval, onComplete) {
  let index = 0;

  const typing = () => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(typing, interval);
    } else if (onComplete) {
      onComplete();
    }
  };

  typing();
}

    // Get the h1 element
    const typedTextElement = document.getElementById("typed-text");

    // Set the text you want to appear in the h1 element
    const textToType = "Welcome! Bienvenu! Willkommen!";

    // Set the typing speed (interval in milliseconds between each character)
    const typingSpeed = 100;

    // Type the text
    typeText(typedTextElement, textToType, typingSpeed, () => {
      // Remove aria-hidden attribute after typing is completed
      typedTextElement.removeAttribute("aria-hidden");
    });
