const correctAnswers = ["B", "A", "A", "A"];
const form = document.querySelector(".quiz-form"); ///////////////To select the quiz form
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let score = 0;
    const userAnswers =
        ////////////Value/Answer by user
        [form.q1.value, form.q2.value, form.q3.value];

    /////////////////To check Answer
    userAnswers.forEach((answer, index) => {
        //////////////////// To match eatch user answer with right answer
        if (answer === correctAnswers[index]) {
            ////////////Comparing////Answer are userAnswer where correct Answers every value is in correctAnswers[index]
            score += 25;
        }
    });
    window.scrollTo(0, 0); //////// Scroll to top the page
            //For showing results
    let output = 0;
    const timer = setInterval(() => {
        //For score animation
        result.querySelector("span").textContent = `${output}%`;
        if (output === score) {
            clearInterval();
        } else {
            output++;
        }
    }, 75);
    result.classList.remove("d-none");
});
