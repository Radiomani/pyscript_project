function displayInfo(selectedOption) {
    const optionSelect = document.getElementById("optionSelect");
    const imageDescriptionContainer = document.getElementById("imageDescriptionContainer");
    const imageElement = document.getElementById("image");
    const descriptionElement = document.getElementById("description");

    // const selectedOption = optionSelect.value;
    let imagePath = "";
    let descriptionText = "";
    console.log("option selected:", selectedOption);
    // Set image path and description based on the selected option
    switch (selectedOption) {
      case "option1":
        imagePath = "https://picsum.photos/400"; // Replace with the actual image path for Option 1
        descriptionText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        break;
      case "option2":
        imagePath = "https://picsum.photos/450"; // Replace with the actual image path for Option 2
        descriptionText = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software";
        break;
      case "option3":
        imagePath = "https://picsum.photos/500"; // Replace with the actual image path for Option 3
        descriptionText = " Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ";
        break;
      default:
        imagePath = "";
        descriptionText = "";
    }
  
    // Display image and description if an option is selected
    if (selectedOption !== "") {
      imageElement.src = imagePath;
      descriptionElement.textContent = descriptionText;
      imageDescriptionContainer.style.display = "block";
    } else {
      imageDescriptionContainer.style.display = "none";
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("runButton").addEventListener("click", function() {
    console.log("the value will be changed");
    const selectedOption = document.getElementById("optionSelect").value;
    displayInfo(selectedOption);
  });
}); 