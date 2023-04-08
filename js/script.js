function getLuminance(r, g, b) {
    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
  }
  
  function setTextColorBasedOnBackground(backgroundColor) {
    const rgb = backgroundColor.match(/\d+/g).map(Number);
    const luminance = getLuminance(rgb[0], rgb[1], rgb[2]);
    const textColor = luminance > 0.5 ? "black" : "white";
  
    const body = document.getElementById("body");
    body.style.color = textColor;
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
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
  
        // Get the average color of the background image
        const data = ctx.getImageData(0, 0, img.width, img.height).data;
        const r = data[0];
        const g = data[1];
        const b = data[2];
  
        const backgroundColor = `rgb(${r}, ${g}, ${b})`;
        setTextColorBasedOnBackground(backgroundColor);
      };
    });
  