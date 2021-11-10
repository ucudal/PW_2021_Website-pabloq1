var jobModal = document.getElementById("job-modal");
var jobModalTitle = document.getElementById("site-title");
var jobModalParagraph = document.getElementById("site-paragraph");
var contactModal = document.getElementById("contact-modal");
var hireMeButton = document.getElementById("hire-me-btn");
var okButton = document.getElementById("ok-btn");
var Work;
(function (Work) {
    Work["MercadoLibre"] = "meli";
    Work["OrangeLoops"] = "orange";
    Work["ThinkUp"] = "thinkup";
    Work["KPMG"] = "kpmg";
})(Work || (Work = {}));
;
var Titles;
(function (Titles) {
    Titles["MercadoLibre"] = "Mercado Libre";
    Titles["OrangeLoops"] = "OrangeLoops";
    Titles["ThinkUp"] = "ThinkUp Software";
    Titles["KPMG"] = "KPMG Uruguay";
})(Titles || (Titles = {}));
;
var Modals;
(function (Modals) {
    Modals["Contact"] = "contact-modal";
    Modals["Job"] = "job-modal";
})(Modals || (Modals = {}));
;
var showJobModal = function (button) {
    switch (button) {
        case Work.MercadoLibre:
            jobModalTitle.innerHTML = Titles.MercadoLibre;
            jobModalParagraph.innerHTML = "\n            UNDER CONSTRUCTION\n            ";
            break;
        case Work.OrangeLoops:
            jobModalTitle.innerHTML = Titles.OrangeLoops;
            jobModalParagraph.innerHTML = "\n            Worked with custom styling in white-label Objective-C apps and Unit and UI testing using Xcode. <br>\n            Usage of versioning tools.\n            ";
            break;
        case Work.ThinkUp:
            jobModalTitle.innerHTML = Titles.ThinkUp;
            jobModalParagraph.innerHTML = "\n            Mostly working with iOS mobile apps using Swift and Objective-C refactoring. <br>\n            Solid understanding of object-oriented programming. <br>\n            Knowledge of memory management and multi-threading. <br>\n            Good sense of UI design and user-oriented focus, with an understanding of Apple\u2019s design principles and interface guidelines. <br>\n            Experience with code versioning tools (Git).<br>\n            ";
            break;
        case Work.KPMG:
            jobModalTitle.innerHTML = Titles.KPMG;
            jobModalParagraph.innerHTML = "\n            Worked with RPA automation tools such as Automation Anywhere, UI Path and WorkFusion development tools, for projects meant for Uruguayan technological and accounting companies. <br> \n            Functional Testing and helped in the design of Javascript websites. <br>\n            Data Analytics using IDEA Software and Python developed scripts.\n            ";
            break;
        default:
            break;
    }
    jobModal.style.display = "block";
};
var closeModal = function (id) {
    switch (id) {
        case Modals.Contact:
            contactModal.style.display = "none";
            sentMessageAlert();
            break;
        case Modals.Job:
            jobModal.style.display = "none";
            break;
        default:
            break;
    }
};
var showContactModal = function () { return contactModal.style.display = "block"; };
window.onclick = function (event) {
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
var sentMessageAlert = function () { return alert('Thank you!'); };
