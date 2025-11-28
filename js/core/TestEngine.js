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
        this.responses = [];
        this.divs = [];
        this.form = null;
        this.submitButton = null;
    }

    render(container, ageGroup = null) {
        this.renderContainer(container, ageGroup);
        this.createForm();
        this.createQuestions();
        this.createSubmitButton();
        this.setupFormSubmission();
        this.updateQuestionVisibility();
    }

    renderContainer(container, ageGroup) {
        const displayName = this.getDisplayName ? this.getDisplayName(ageGroup) : this.name;
        const displayInfo = this.getDisplayInfo ? this.getDisplayInfo(ageGroup) : this.info;

        container.innerHTML = `
            <h2>${displayName}</h2>
            ${displayInfo ? `<p style="background:#fff3cd;padding:15px;border-radius:8px;"><strong>Importante:</strong> ${displayInfo}</p>` : ''}
            <form id="quizForm"></form>
        `;
    }

    createForm() {
        this.form = document.getElementById("quizForm");
        this.responses = new Array(this.questions.length).fill(null);
        this.divs = [];
    }

    createQuestions() {
        this.questions.forEach((q, i) => {
            const questionDiv = this.createQuestionElement(q, i);
            this.form.appendChild(questionDiv);
            this.divs.push(questionDiv);
            this.setupQuestionListeners(questionDiv, i);
        });
    }

    createQuestionElement(q, i) {
        const text = (typeof q === 'string') ? q : q.text;
        const div = document.createElement("div");
        div.className = "question";
        div.innerHTML = `<strong>${text}</strong><div class="options"></div>`;

        this.labels.forEach((label, val) => {
            div.querySelector(".options").innerHTML += `
                <label>
                    <input type="radio" name="q${i}" value="${val}">
                    ${label}
                </label>`;
        });

        return div;
    }

    setupQuestionListeners(div, i) {
        Array.from(div.querySelectorAll('input')).forEach(inp => {
            inp.addEventListener('change', (e) => {
                this.responses[i] = parseInt(e.target.value);
                this.updateQuestionVisibility();
            });
        });
    }

    createSubmitButton() {
        this.submitButton = document.createElement("button");
        this.submitButton.type = "submit";
        this.submitButton.classList.add('btn-15', 'custom-btn', 'submit-btn');
        this.submitButton.innerHTML = `
            <span class="submit-message">
                <span>Ver resultados</span>
            </span>
            <span class="loading-message">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17">
                    <circle class="loadingCircle" cx="1.5" cy="10" r="3.0"/>
                    <circle class="loadingCircle" cx="9.5" cy="10" r="3.0"/>
                    <circle class="loadingCircle" cx="17.5" cy="10" r="3.0"/>
                </svg>
            </span>
            <span class="success-message">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 11">
                    <polyline stroke="currentColor" points="1.4,5.8 5.1,9.5 11.6,2.1 "/>
                </svg>
                <span>¡Listo!</span>
            </span>
        `;
        this.form.appendChild(this.submitButton);
    }

    setupFormSubmission() {
        this.form.onsubmit = (e) => {
            e.preventDefault();
            this.handleFormSubmission();
        };
    }

    handleFormSubmission() {
        this.startLoadingAnimation();

        setTimeout(() => {
            const resultHTML = this.calculateResults();
            this.showCompletionAnimation();

            setTimeout(() => {
                this.triggerConfetti();
                this.showResults(resultHTML);
                this.resetButton();
            }, 500);
        }, 1800);
    }

    startLoadingAnimation() {
        this.submitButton.classList.add('loading');
        this.submitButton.disabled = true;
    }

    calculateResults() {
        const out = this.questions.map((_, i) => (this.responses[i] === null ? -1 : this.responses[i]));
        return this.calculator(out);
    }

    showCompletionAnimation() {
        this.submitButton.classList.remove('loading');
        this.submitButton.classList.add('complete');
    }

    triggerConfetti() {
        if (window.initConfettiBurst) 
            window.initConfettiBurst();
    }

    showResults(resultHTML) {
        setTimeout(() => {
            document.getElementById("resultText").innerHTML = resultHTML;
            const resultDiv = document.getElementById("result");
            resultDiv.style.display = "block";
            resultDiv.classList.add("show");
            resultDiv.scrollIntoView({ behavior: "smooth" });
        }, 400);
    }

    resetButton() {
        setTimeout(() => {
            this.submitButton.classList.remove('complete');
            this.submitButton.disabled = false;
        }, 1000);
    }

    updateQuestionVisibility() {
        this.questions.forEach((q, i) => {
            const hasCond = (typeof q !== 'string') && (typeof q.showIf === 'function');
            const visible = !hasCond || q.showIf(this.responses);
            const div = this.divs[i];

            if (visible) {
                this.showQuestion(div);
            } else this.hideQuestion(div, i);
            
        });
    }

    showQuestion(div) {
        div.style.display = 'block';
        div.querySelectorAll('input').forEach(inp => inp.required = true);
    }

    hideQuestion(div, i) {
        div.style.display = 'none';
        div.querySelectorAll('input').forEach(inp => {
            inp.required = false;
            if (inp.checked) inp.checked = false;
        });
        this.responses[i] = null;
    }
}
export { TestBase };