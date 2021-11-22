var jobModal = document.getElementById("job-modal");
var jobModalTitle = document.getElementById("site-title");
var jobModalPosition = document.getElementById("site-position");
var jobModalDescription = document.getElementById("site-description");
var jobModalStartDate = document.getElementById("site-start-date");
var jobModalEndDate = document.getElementById("site-end-date");
var jobModalEndDateContainer = document.getElementById("end-date-container");
var contactModal = document.getElementById("contact-modal");
var contactForm = document.getElementById("contact-form");
var contactName = (document.getElementById("contact-full-name"));
var contactEmail = (document.getElementById("contact-email"));
var contactMessage = (document.getElementById("contact-message"));
var missingContactNameMessage = (document.getElementById("contact-name-error-label"));
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
        if (data.endDate === undefined) {
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
var handleSubmit = function (event) {
    event.preventDefault();
    var data = {
        email: contactEmail.value,
        message: contactMessage.value,
    };
    if (contactName.value !== "") {
        data["name"] = contactName.value;
    }
    fetch("https://PW2021-APINode-pabloq1.pabloq1.repl.co", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: data }),
    })
        .then(function (res) {
        if (res.status === 400) {
            res.json().then(function (data) {
                missingContactNameMessage.style.display = "block";
                missingContactNameMessage.innerHTML = data.message;
            });
        }
        else if (res.status === 200) {
            missingContactNameMessage.style.display = "none";
            res.json().then(function (data) {
                alert(data.message);
                closeModal(Modals.Contact);
            });
        }
    })
        .catch(function (error) {
        alert("" + error);
        console.log(error);
    });
};
contactForm.addEventListener("submit", handleSubmit);
var showContactModal = function () { return (contactModal.style.display = "block"); };
window.onclick = function (event) {
    switch (event.target) {
        case jobModal:
            closeModal(Modals.Job);
            break;
        case contactModal:
            closeModal(Modals.Contact);
            break;
        default:
            break;
    }
};
var closeModal = function (id) {
    switch (id) {
        case Modals.Contact:
            contactModal.style.display = "none";
            break;
        case Modals.Job:
            jobModal.style.display = "none";
            break;
        default:
            break;
    }
};
