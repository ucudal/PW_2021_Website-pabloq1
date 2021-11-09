var modal = document.getElementById("my-modal");
var modalTitle = document.getElementById("site-title");
var modalParagraph = document.getElementById("site-paragraph");
var okButton = document.getElementById("ok-btn");
var Work;
(function (Work) {
    Work["MercadoLibre"] = "meli";
    Work["OrangeLoops"] = "orange";
    Work["ThinkUp"] = "thinkup";
    Work["KPMG"] = "kpmg";
})(Work || (Work = {}));
var Titles;
(function (Titles) {
    Titles["MercadoLibre"] = "Mercado Libre";
    Titles["OrangeLoops"] = "OrangeLoops";
    Titles["ThinkUp"] = "ThinkUp Software";
    Titles["KPMG"] = "KPMG Uruguay";
})(Titles || (Titles = {}));
var showModal = function (button) {
    switch (button) {
        case Work.MercadoLibre:
            modalTitle.innerHTML = Titles.MercadoLibre;
            modalParagraph.innerHTML = "\n            UNDER CONSTRUCTION\n            ";
            break;
        case Work.OrangeLoops:
            modalTitle.innerHTML = Titles.OrangeLoops;
            modalParagraph.innerHTML = "\n            Worked with custom styling in white-label Objective-C apps and Unit and UI testing using Xcode. <br>\n            Usage of versioning tools.\n            ";
            break;
        case Work.ThinkUp:
            modalTitle.innerHTML = Titles.ThinkUp;
            modalParagraph.innerHTML = "\n            Mostly working with iOS mobile apps using Swift and Objective-C refactoring. <br>\n            Solid understanding of object-oriented programming. <br>\n            Knowledge of memory management and multi-threading. <br>\n            Good sense of UI design and user-oriented focus, with an understanding of Apple\u2019s design principles and interface guidelines. <br>\n            Experience with code versioning tools (Git).<br>\n            ";
            break;
        case Work.KPMG:
            modalTitle.innerHTML = Titles.KPMG;
            modalParagraph.innerHTML = "\n            Worked with RPA automation tools such as Automation Anywhere, UI Path and WorkFusion development tools, for projects meant for Uruguayan technological and accounting companies. <br> \n            Functional Testing and helped in the design of Javascript websites. <br>\n            Data Analytics using IDEA Software and Python developed scripts.\n            ";
            break;
        default:
            break;
    }
    modal.style.display = "block";
};
okButton.onclick = function () { return modal.style.display = "none"; };
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
