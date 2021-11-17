var jobModal = document.getElementById("job-modal");
var jobModalTitle = document.getElementById("site-title");
var jobModalPosition = document.getElementById("site-position");
var jobModalDescription = document.getElementById("site-description");
var jobModalStartDate = document.getElementById("site-start-date");
var jobModalEndDate = document.getElementById("site-end-date");
var jobModalEndDateContainer = document.getElementById("end-date-container");
var contactModal = document.getElementById("contact-modal");
var hireMeButton = document.getElementById("hire-me-btn");
var okButton = document.getElementById("ok-btn");
var Modals;
(function (Modals) {
    Modals["Contact"] = "contact-modal";
    Modals["Job"] = "job-modal";
})(Modals || (Modals = {}));
var showJobModal = function (button) {
    fetch("https://PW2021-APINode-pabloq1.pabloq1.repl.co/" + button)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        if (data.endDate == "") {
            jobModalEndDateContainer.style.display = "none";
        }
        else {
            jobModalEndDateContainer.style.display = "grid";
            jobModalEndDate.innerHTML = "" + data.endDate;
        }
        jobModalTitle.innerHTML = data.title;
        jobModalPosition.innerHTML = data.position;
        jobModalDescription.innerHTML = "" + data.description;
        jobModalStartDate.innerHTML = "" + data.startDate;
    })
        .catch(function (err) {
        jobModalTitle.innerHTML = "Error";
        jobModalDescription.innerHTML = "Cannot fetch job information in this moment. Try again.";
    });
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
var showContactModal = function () { return (contactModal.style.display = "block"); };
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
var sentMessageAlert = function () { return alert("Thank you!"); };
