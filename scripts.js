function handleFileSelect() {
  const input = document.getElementById("imageUpload");
  const uploadButton = document.getElementById("uploadButton");

  if (input.files && input.files[0]) {
    uploadButton.style.display = "block";
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById(
        "imagePreview"
      ).innerHTML = `<img src="${e.target.result}" alt="Image Preview">`;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function uploadImage() {
  alert("Image uploaded successfully!");
}

if (window.navigator) {
}
