const jobModal: HTMLElement = document.getElementById("job-modal");
const jobModalTitle: HTMLElement = document.getElementById("site-title");
const jobModalPosition: HTMLElement = document.getElementById("site-position");
const jobModalDescription: HTMLElement =
    document.getElementById("site-description");
const jobModalStartDate: HTMLElement =
    document.getElementById("site-start-date");
const jobModalEndDate: HTMLElement = document.getElementById("site-end-date");
const jobModalEndDateContainer: HTMLElement =
    document.getElementById("end-date-container");

const contactModal: HTMLElement = document.getElementById("contact-modal");

const hireMeButton: HTMLElement = document.getElementById("hire-me-btn");
const okButton: HTMLElement = document.getElementById("ok-btn");

enum Modals {
    Contact = "contact-modal",
    Job = "job-modal",
}

const showJobModal = (button: string) => {
    fetch(`https://PW2021-APINode-pabloq1.pabloq1.repl.co/${button}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            
            if (data.endDate == "") {
                jobModalEndDateContainer.style.display = "none"
            } else {
                jobModalEndDateContainer.style.display = "grid"
                jobModalEndDate.innerHTML = `${data.endDate}`
            }

            jobModalTitle.innerHTML = data.title;
            jobModalPosition.innerHTML = data.position;
            jobModalDescription.innerHTML = `${data.description}`;
            jobModalStartDate.innerHTML = `${data.startDate}`;
        })
        .catch((err) => {
            jobModalTitle.innerHTML = "Error";
            jobModalDescription.innerHTML = `Cannot fetch job information in this moment. Try again.`;
        });

    jobModal.style.display = "block";
};

const closeModal = (id: string) => {
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

const showContactModal = () => (contactModal.style.display = "block");

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

const sentMessageAlert = () => alert("Thank you!");
