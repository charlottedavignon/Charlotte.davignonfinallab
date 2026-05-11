const planForm = document.querySelector("#dayForm");
const planResult = document.querySelector("#planResult");
const quizForm = document.querySelector("#quizForm");
const quizResult = document.querySelector("#quizResult");

const ideas = {
    summer: {
        lake: "Start at Casperson Park by Lake Marion, walk near the water, and leave time for fishing or a picnic.",
        trail: "Try a morning trail walk before it gets hot, then cool down near one of the city beaches.",
        sports: "Find a ballfield or court, invite friends, and finish the day with food nearby.",
        history: "Visit the City Hall area, read about Dodd Road, and compare old Lakeville with the city today."
    },
    fall: {
        lake: "Walk near Lake Marion when the leaves are changing and bring a camera for the shoreline views.",
        trail: "Pick Ritter Farm Park for a longer trail day with fall color and quieter space.",
        sports: "Watch a local football, soccer, or baseball game and enjoy the cooler weather.",
        history: "Make a history route around Dodd Boulevard and learn how transportation shaped the city."
    },
    winter: {
        lake: "Choose a safe winter viewpoint near a lake and keep the plan simple with a warm drink after.",
        trail: "Use a park trail for a snowy walk or cross-country ski option when conditions are right.",
        sports: "Look for indoor school events, ice rinks, or winter recreation in the parks system.",
        history: "Build a cozy indoor research day about Dan Patch, Antlers Park, and early Lakeville."
    },
    spring: {
        lake: "Watch the parks wake up around the lakes and look for the first warm-weather picnic day.",
        trail: "Take a trail walk after school and notice the wetlands, trees, and neighborhoods changing.",
        sports: "Plan around spring practices, fields opening, and a casual game with friends.",
        history: "Connect the old farming community story to how fast Lakeville is growing now."
    }
};

planForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const season = planForm.season.value;
    const activity = planForm.activity.value;
    const theme = planForm.theme.value;
    const snack = document.querySelector("#snack").checked;

    document.body.classList.remove("theme-blue", "theme-gold");

    if (theme !== "green") {
        document.body.classList.add(`theme-${theme}`);
    }

    const snackText = snack ? " Add a snack stop at the end so the day feels complete." : "";
    planResult.textContent = ideas[season][activity] + snackText;
});

quizForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const answer = document.querySelector("#quizAnswer").value;

    if (answer === "149") {
        quizResult.textContent = "Correct. Lakeville lists about 149 miles of trails and sidewalks.";
    } else if (answer) {
        quizResult.textContent = "Not quite. The correct answer is 149 miles.";
    } else {
        quizResult.textContent = "Choose an answer first.";
    }
});
