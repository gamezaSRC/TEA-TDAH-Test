class TestBase {
    constructor({
        name,
        info = "",
        questions,
        labels = ["Nada", "Poco", "Bastante", "Mucho"],
        calculator,
        getDisplayName = null,
        getDisplayInfo = null
    }) {
        this.name = name;
        this.info = info;
        this.questions = questions;
        this.labels = labels;
        this.calculator = calculator;
        this.getDisplayName = getDisplayName;
        this.getDisplayInfo = getDisplayInfo;
    }

    render(container, ageGroup = null) {
        
        const displayName = this.getDisplayName ? this.getDisplayName(ageGroup) : this.name;
        const displayInfo = this.getDisplayInfo ? this.getDisplayInfo(ageGroup) : this.info;
        
        container.innerHTML = `
      <h2>${displayName}</h2>
      ${displayInfo ? `<p style="background:#fff3cd;padding:15px;border-radius:8px;"><strong>Importante:</strong> ${displayInfo}</p>` : ''}
      <form id="quizForm"></form>
    `;

        const form = document.getElementById("quizForm");
        this.questions.forEach((q, i) => {
            const div = document.createElement("div");
            div.className = "question";
            div.innerHTML = `<strong>${q}</strong><div class="options"></div>`;
            this.labels.forEach((label, val) => {
                div.querySelector(".options").innerHTML += `
          <label>
            <input type="radio" name="q${i}" value="${val}" required>
            ${label}
          </label>`;
            });
            form.appendChild(div);
        });

        const btn = document.createElement("button");
        btn.type = "submit";
        btn.textContent = "Ver resultados";
        form.appendChild(btn);

        form.onsubmit = (e) => {
            e.preventDefault();
            const responses = this.questions.map((_, i) =>
                parseInt(document.querySelector(`input[name="q${i}"]:checked`).value)
            );
            const resultHTML = this.calculator(responses);
            document.getElementById("resultText").innerHTML = resultHTML;
            document.getElementById("result").style.display = "block";
            document.getElementById("result").scrollIntoView({ behavior: "smooth" });
        };
    }
}
export { TestBase };