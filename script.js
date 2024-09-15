const box = document.querySelector(".box");
const nextButton = document.getElementById("next");

const jokeArray = async () => {
  const response = await fetch(
    "https://hindi-jokes-api.onrender.com/jokes?api_key=078a738bcb9bf36766b7b1f24088"
  );
  if (!response.ok) {
    return {
      joke: "Some Issue Occur 🤣🤣🤣🤣🤣🤣",
    };
  }
  const data = await response.json();

  return data;
};

function jokeFun() {
  nextButton.addEventListener("click", async () => {
    const data = await jokeArray();
    localStorage.setItem("joke", data.jokeContent);
    box.textContent = "";
    box.textContent = localStorage.getItem("joke");
  });
}

(async () => {
  const data = await jokeArray();
  localStorage.setItem("joke", data.jokeContent);
  box.textContent = "";
  box.textContent = localStorage.getItem("joke");
  jokeFun();
})();

// copy button
const copyButton = document.getElementById('copyButton');
let span = copyButton.querySelector('span');

copyButton.addEventListener('click', function() {
    const jokeText = document.getElementById('jokeText').innerText;

    navigator.clipboard.writeText(jokeText).then(() => {

        span.innerText = 'Copied';
        copyButton.style.backgroundColor = "#20c997";

        setTimeout(() => {
            span.innerText = 'Copy Joke'
            copyButton.style.backgroundColor = "#28a745"
        }, 1500);

    }).catch((error) => {
        console.error('Error copying text:', error);
    });
});