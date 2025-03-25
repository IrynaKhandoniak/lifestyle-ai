function displayPoem(response) {
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
  function generatePoem(event) {
    event.preventDefault();
  
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
    let context =
    "You are a recipe expert and love to write short recipes in English. Your mission is to generate a 4 line recipe in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the recipe. Sign the recipe with 'SheCodes AI' inside a <strong> element at the end of the recipe and NOT at the beginning.";

    let prompt = `User instructions: Generate a French poem about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${instructionsInput.value}</div>`;
  
    axios.get(apiURL).then(displayPoem);
  }
  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);