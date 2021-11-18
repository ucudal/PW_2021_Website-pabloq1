// job modal
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

// contact modal
const contactModal: HTMLElement = document.getElementById("contact-modal");
const contactName: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("contact-full-name")
);
const contactEmail: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("contact-email")
);
const contactMessage: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("contact-message")
);

// buttons
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
                jobModalEndDateContainer.style.display = "none";
            } else {
                jobModalEndDateContainer.style.display = "grid";
                jobModalEndDate.innerHTML = `${data.endDate}`;
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

const form = document.getElementById('form');

const handleSubmit = (event) => {
    event.preventDefault();

    let data = {
        name: contactName.value,
        email: contactEmail.value,
    };

    fetch("https://PW2021-APINode-pabloq1.pabloq1.repl.co", {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "text/plain",
        },
        body: JSON.stringify({ data }),
    })
        .then((res) => res.json())
        .then((data) => {
            closeModal(Modals.Contact)
            console.log(data);
        })
        .catch((error) => {
            alert(`${error}`);
            console.log(error);
        });
}

form.addEventListener('submit', handleSubmit)

const showContactModal = () => (contactModal.style.display = "block");

window.onclick = (event: Event) => {
    switch (event.target) {
        case jobModal:
            closeModal(Modals.Job)
            break;
        case contactModal:
            closeModal(Modals.Contact)
            break;
        default:
            break;
    }
};

const closeModal = (id: string) => {
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
