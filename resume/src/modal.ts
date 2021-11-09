const modal: HTMLElement = document.getElementById("my-modal") as HTMLElement;
const modalTitle: HTMLElement = document.getElementById("site-title") as HTMLElement;
const modalParagraph: HTMLElement = document.getElementById("site-paragraph") as HTMLElement;
const okButton: HTMLElement = document.getElementById("ok-btn") as HTMLElement;

enum Work {
    MercadoLibre = "meli",
    OrangeLoops = "orange",
    ThinkUp = "thinkup",
    KPMG = "kpmg"
}

enum Titles {
    MercadoLibre = "Mercado Libre",
    OrangeLoops = "OrangeLoops",
    ThinkUp = "ThinkUp Software",
    KPMG = "KPMG Uruguay"
}

const showModal = (button: string) => {
    switch (button) {
        case Work.MercadoLibre:
            modalTitle.innerHTML = Titles.MercadoLibre
            modalParagraph.innerHTML = `
            UNDER CONSTRUCTION
            `
            break;
        case Work.OrangeLoops:
            modalTitle.innerHTML = Titles.OrangeLoops
            modalParagraph.innerHTML = `
            Worked with custom styling in white-label Objective-C apps and Unit and UI testing using Xcode. <br>
            Usage of versioning tools.
            `
            break;
        case Work.ThinkUp:
            modalTitle.innerHTML = Titles.ThinkUp
            modalParagraph.innerHTML = `
            Mostly working with iOS mobile apps using Swift and Objective-C refactoring. <br>
            Solid understanding of object-oriented programming. <br>
            Knowledge of memory management and multi-threading. <br>
            Good sense of UI design and user-oriented focus, with an understanding of Apple’s design principles and interface guidelines. <br>
            Experience with code versioning tools (Git).<br>
            `
            break;
        case Work.KPMG:
            modalTitle.innerHTML = Titles.KPMG
            modalParagraph.innerHTML = `
            Worked with RPA automation tools such as Automation Anywhere, UI Path and WorkFusion development tools, for projects meant for Uruguayan technological and accounting companies. <br> 
            Functional Testing and helped in the design of Javascript websites. <br>
            Data Analytics using IDEA Software and Python developed scripts.
            `
            break;
        default:
            break;
        
    }
    // display modal
    modal.style.display = "block"
}

// close modal
okButton.onclick = () => modal.style.display = "none";

// register clicks outside modal
window.onclick = (event: Event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}