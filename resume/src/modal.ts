const jobModal: HTMLElement = document.getElementById("job-modal");
const jobModalTitle: HTMLElement = document.getElementById("site-title");
const jobModalParagraph: HTMLElement = document.getElementById("site-paragraph");

const contactModal: HTMLElement = document.getElementById("contact-modal");

const hireMeButton: HTMLElement = document.getElementById("hire-me-btn");
const okButton: HTMLElement = document.getElementById("ok-btn");

enum Work {
    MercadoLibre = "meli",
    OrangeLoops = "orange",
    ThinkUp = "thinkup",
    KPMG = "kpmg"
};

enum Titles {
    MercadoLibre = "Mercado Libre",
    OrangeLoops = "OrangeLoops",
    ThinkUp = "ThinkUp Software",
    KPMG = "KPMG Uruguay"
};

enum Modals {
    Contact = "contact-modal",
    Job = "job-modal"
};

const showJobModal = (button: string) => {
    switch (button) {
        case Work.MercadoLibre:
            jobModalTitle.innerHTML = Titles.MercadoLibre
            jobModalParagraph.innerHTML = `
            UNDER CONSTRUCTION
            `
            break;
        case Work.OrangeLoops:
            jobModalTitle.innerHTML = Titles.OrangeLoops
            jobModalParagraph.innerHTML = `
            Worked with custom styling in white-label Objective-C apps and Unit and UI testing using Xcode. <br>
            Usage of versioning tools.
            `
            break;
        case Work.ThinkUp:
            jobModalTitle.innerHTML = Titles.ThinkUp
            jobModalParagraph.innerHTML = `
            Mostly working with iOS mobile apps using Swift and Objective-C refactoring. <br>
            Solid understanding of object-oriented programming. <br>
            Knowledge of memory management and multi-threading. <br>
            Good sense of UI design and user-oriented focus, with an understanding of Apple’s design principles and interface guidelines. <br>
            Experience with code versioning tools (Git).<br>
            `
            break;
        case Work.KPMG:
            jobModalTitle.innerHTML = Titles.KPMG
            jobModalParagraph.innerHTML = `
            Worked with RPA automation tools such as Automation Anywhere, UI Path and WorkFusion development tools, for projects meant for Uruguayan technological and accounting companies. <br> 
            Functional Testing and helped in the design of Javascript websites. <br>
            Data Analytics using IDEA Software and Python developed scripts.
            `
            break;
        default:
            break;
        
    }
    jobModal.style.display = "block"
};

const closeModal = (id: string) => {
    switch (id) {
        case Modals.Contact:
            contactModal.style.display = "none"
            sentMessageAlert();
            break;
        case Modals.Job:
            jobModal.style.display = "none"
            break;
        default:
            break;
    }
};

const showContactModal = () => contactModal.style.display = "block";

window.onclick = (event: Event) => {
    switch (event.target) {
        case jobModal:
            jobModal.style.display = "none";
            break;
        case contactModal:
            contactModal.style.display = "none";
            break;
        default:
            break;
    }
};

const sentMessageAlert = () => alert('Thank you!');