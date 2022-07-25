function showImageModal(image)
{
  // Get the modal
  var modal = document.getElementById("modalForImageZoom");

  // Get the image and insert it inside the modal
  var imageModal = document.getElementById("imageModal");
  var captionText = document.getElementById("imageModalCaption");

  // Change the source image and captions, then display the image modal
  imageModal.src = image.src;
  captionText.innerHTML = image.alt;
  modal.style.display = "block";

  // Get the <span> element that closes the image modal
  var span = document.getElementsByClassName("closeImageModal")[0];

  // When user clicks on <span>, close the image modal
  modal.onclick = function()
  {
    modal.style.display = "none";
  }
}