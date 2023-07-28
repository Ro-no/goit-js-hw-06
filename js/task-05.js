// const inputName = document.querySelector("#name-input");
// const outputName = document.querySelector("#name-output");

// const replaceName = ((event) => {
//     if (inputName.textContent.trim() === '') {
//         return outputName.textContent = 'Anonymous';
//     } return (outputName.textContent = inputName.event);
// });

// inputName.addEventListener("input", replaceName);





const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");

const getInputValue = ({ currentTarget }) => {
  if (currentTarget.value.trim() !== "") {
    nameRef.textContent = currentTarget.value.trim();
  } else {
    nameRef.textContent = "Anonymous";
  }
};

inputRef.addEventListener("input", getInputValue);