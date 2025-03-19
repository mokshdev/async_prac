console.log("hi");



async function getCats() {
    try {
        // Create an <img> element dynamically
        const img = document.createElement('img');
        img.alt = "Random Cat GIF"; // Set an alt text

        // Append the image to the body
        document.body.appendChild(img);

        // Fetch the cat GIF
        const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=BwqFwJlXNUbAi6DNsPOX5tO3xyaZtqU6&s=cats', { mode: 'cors' });

        const catData = await response.json();
        img.src = catData.data.images.original.url;
    } catch (error) {
        console.error("Error fetching cat GIF:", error);
    }
}

getCats();
