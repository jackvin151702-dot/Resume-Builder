
const fields = [
    "name",
    "job",
    "email",
    "phone",
    "address",
    "objective",
    "education",
    "skills",
    "projects",
    "experience",
    "achievements"
];

const defaults = {
    pName: "Your Name",
    pJob: "Your Job Title",
    pContact: "Email | Phone | Address",
    pObjective: "Your career objective will appear here.",
    pEducation: "Your education details",
    pSkills: "Your skills",
    pProjects: "Your projects",
    pExperience: "Your experience",
    pAchievements: "Your achievements"
};

function updateResume() {
    const getValue = id =>
        document.getElementById(id).value.trim();

    document.getElementById("pName").textContent =
        getValue("name") || defaults.pName;

    document.getElementById("pJob").textContent =
        getValue("job") || defaults.pJob;

    const contact = [
        getValue("email"),
        getValue("phone"),
        getValue("address")
    ].filter(Boolean);

    document.getElementById("pContact").textContent =
        contact.join(" | ") || defaults.pContact;

    const sections = {
        objective: "pObjective",
        education: "pEducation",
        skills: "pSkills",
        projects: "pProjects",
        experience: "pExperience",
        achievements: "pAchievements"
    };

    for (const [inputId, previewId] of Object.entries(sections)) {
        document.getElementById(previewId).textContent =
            getValue(inputId) || defaults[previewId];
    }
}

// Update preview whenever the user types.
fields.forEach(id => {
    document.getElementById(id).addEventListener(
        "input",
        updateResume
    );
});

// Clear the form and reset the preview.
document.getElementById("resumeForm").addEventListener(
    "reset",
    () => setTimeout(updateResume, 0)
);

// Load example information.
document.getElementById("sampleBtn").addEventListener(
    "click",
    () => {
        const sample = {
            name: "Arun Kumar",
            job: "Web Developer",
            email: "arun@example.com",
            phone: "9876543210",
            address: "Coimbatore, Tamil Nadu",
            objective:
                "Motivated student seeking an opportunity to apply programming skills and develop innovative web applications.",
            education:
                "B.Sc. Computer Science\nABC College | 2024–2027",
            skills:
                "HTML\nCSS\nJavaScript\nJava\nProblem Solving",
            projects:
                "Resume Builder\nCreated a responsive resume builder using HTML, CSS and JavaScript.",
            experience:
                "Web Development Intern\nWorked on basic website design and development.",
            achievements:
                "Completed a web development project."
        };

        fields.forEach(id => {
            document.getElementById(id).value = sample[id] || "";
        });

        updateResume();
    }
);

// Open the browser print dialog to save the resume as PDF.
document.getElementById("downloadBtn").addEventListener(
    "click",
    () => {
        if (!document.getElementById("name").value.trim()) {
            alert("Please enter your full name first.");
            document.getElementById("name").focus();
            return;
        }

        window.print();
    }
);

updateResume();
