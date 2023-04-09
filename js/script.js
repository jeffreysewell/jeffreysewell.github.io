function getLuminance(r, g, b) {
  // ... (the rest of the getLuminance function)
}

function setTextColorBasedOnBackground(backgroundColor) {
  // ... (the rest of the setTextColorBasedOnBackground function)
}

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

// Get the current background image of the body
const body = document.getElementById("body");
const backgroundImage = getComputedStyle(body).getPropertyValue("background-image");

// Fetch the image and get the average color
fetch(backgroundImage.slice(5, -2))
  .then((response) => response.blob())
  .then((blob) => {
    const img = new Image();
    img.src = URL.createObjectURL(blob);

    img.onload = () => {
      // ... (the rest of the img.onload function)
    };

    // Get the h1 element
    const typedTextElement = document.getElementById("typed-text");

    // Set the text you want to appear in the h1 element
    const textToType = "Willkommen im Asheville Haus";

    // Set the typing speed (interval in milliseconds between each character)
    const typingSpeed = 100;

    // Type the text
    typeText(typedTextElement, textToType, typingSpeed, () => {
      // Remove aria-hidden attribute after typing is completed
      typedTextElement.removeAttribute("aria-hidden");
    });
  });
