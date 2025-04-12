const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");

signupBtn.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/signup/index.html";
});

loginBtn.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/login/script.html";
});

function addCard() {
    const career = document.getElementById('career').value;
    const coding = document.getElementById('coding').value;
    const design = document.getElementById('design').value;

    const cardContainer = document.getElementById('card-container');

    const card = document.createElement('div');
    card.className = "relative bg-cover bg-center p-4 rounded shadow-md w-full max-w-sm text-white";
    card.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/024/662/442/non_2x/black-love-heart-symbol-icons-design-elements-for-valentine-s-day-isolated-on-white-background-and-easy-to-edit-free-vector.jpg')";

    card.innerHTML = `
      <div class="absolute inset-0 bg-black bg-opacity-50 rounded"></div>
      <div class="relative z-10 space-y-2">
        <p><strong>Career:</strong> ${career}</p>
        <p><strong>Coding:</strong> ${coding}</p>
        <p><strong>Design:</strong> ${design}</p>
        <p class="text-sm text-gray-200 mt-2">Posted on: ${new Date().toLocaleString()}</p>
      </div>
    `;

    cardContainer.appendChild(card);


    document.getElementById('career').value = '';
    document.getElementById('coding').value = '';
    document.getElementById('design').value = '';
}



