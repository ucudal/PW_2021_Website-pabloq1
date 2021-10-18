const modal = document.getElementById("my-modal");
const modalTitle = document.getElementById("job-title");
const modalParagraph = document.getElementById("job-paragraph");
const okButton = document.getElementById("ok-btn");

const showModal = (button) => {
    switch (button) {
        case "meli":
            modalTitle.innerHTML = "Mercado Libre"
            modalParagraph.innerHTML = `
            Mostly working with iOS mobile apps using Swift and Objective-C refactoring. <br>
            Solid understanding of object-oriented programming. <br>
            Knowledge of memory management and multi-threading. <br>
            Good sense of UI design and user-oriented focus, with an understanding of Apple’s design principles and interface guidelines. <br>
            Experience with code versioning tools (Git).<br>
            `
            break;
        case "orange":
            modalTitle.innerHTML = "OrangeLoops"
            modalParagraph.innerHTML = `
            Worked with custom styling in white-label Objective-C apps and Unit and UI testing using Xcode. <br>
            Usage of versioning tools.
            `
            break;
        case "thinkup":
            modalTitle.innerHTML = "ThinkUp Software"
            modalParagraph.innerHTML = `
            Mostly working with iOS mobile apps using Swift and Objective-C refactoring. <br>
            Solid understanding of object-oriented programming. <br>
            Knowledge of memory management and multi-threading. <br>
            Good sense of UI design and user-oriented focus, with an understanding of Apple’s design principles and interface guidelines. <br>
            Experience with code versioning tools (Git).<br>
            `
            break;
        case "kpmg":
            modalTitle.innerHTML = "KPMG"
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
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}