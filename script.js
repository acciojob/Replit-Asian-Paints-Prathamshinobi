//your JS code here. If required.
const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("Reset");

changeBtn.addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value;
  const colour = document.getElementById("colour_id").value;

  // Reset all blocks to transparent
  const blocks = document.querySelectorAll(".grid-item");
  blocks.forEach(block => {
    block.style.backgroundColor = "transparent";
  });

  // Change selected block's color if valid
  const selectedBlock = document.getElementById(blockId);
  if (selectedBlock) {
    selectedBlock.style.backgroundColor = colour;
  } else {
    alert("Please enter a valid Block ID between 1 and 9.");
  }
});

resetBtn.addEventListener("click", () => {
  const blocks = document.querySelectorAll(".grid-item");
  blocks.forEach(block => {
    block.style.backgroundColor = "transparent";
  });
});
