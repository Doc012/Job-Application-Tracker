const emailSystem = [];

function toggleForm(formId) {
  document.getElementById("emailListForm").style.display = "none";
  document.getElementById("sendEmailForm").style.display = "none";
  document.getElementById(formId).style.display = "block";

  if (formId === "sendEmailForm") {
    populateEmailRecipients();
  }
}

// Fetch existing applications from the system and display them
async function fetchStoredEmails() {
  try {
    const response = await fetch("http://localhost:1918/api/emails/all");
    if (!response.ok) throw new Error("Failed to fetch emails.");
    const emails = await response.json();
    emailSystem.push(...emails);
    updateEmailList();
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Add new email application to the system
function addEmailToSystem() {
  const companyName = document.getElementById("emailName").value;
  const email = document.getElementById("emailToAdd").value;
  const jobLink = document.getElementById("jobLink").value;
  const description = document.getElementById("emailDescription").value;

  if (!companyName || !email || !jobLink || !description) {
    alert("Please fill out all fields.");
    return;
  }

  const emailData = { companyName, email, jobLink, description, status: "NOT_APPLIED" };

  fetch("http://localhost:1918/api/emails/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(emailData)
  })
  .then(response => {
    if (!response.ok) throw new Error("Failed to add email to the system.");
    alert("Email added successfully!");
    fetchStoredEmails(); // Refresh the stored email list
    clearFormFields();
  })
  .catch(error => alert("There was an error adding the email."));
}

function clearFormFields() {
  document.getElementById("emailName").value = "";
  document.getElementById("emailToAdd").value = "";
  document.getElementById("jobLink").value = "";
  document.getElementById("emailDescription").value = "";
}

// Display the stored emails in a list
function updateEmailList() {
  const emailListElem = document.getElementById("storedEmailList");
  emailListElem.innerHTML = "";

  emailSystem.forEach((email, index) => {
    const listItem = document.createElement("li");
    listItem.className = "email-item";
    listItem.innerHTML = `
      <div>
        <strong>${email.companyName}</strong> (${email.email})
        <br>${email.description}
        <br><i>(${email.jobLink})</i>
      </div>
      <br>${email.status}
      <i class="fas fa-trash delete-icon" onclick="removeEmailFromSystem(${email.id})"></i>
    `;
    emailListElem.appendChild(listItem);
  });
}

// Remove email from system
function removeEmailFromSystem(emailId) {
  fetch(`http://localhost:1918/api/emails/delete/${emailId}`, { method: "DELETE" })
    .then(response => {
      if (!response.ok) throw new Error("Failed to delete email.");
      alert("Email deleted successfully!");
      emailSystem.splice(emailSystem.findIndex(email => email.id === emailId), 1);
      updateEmailList();
    })
    .catch(error => console.error("Error deleting email:", error.message));
}

// Populate email recipients list with NOT_APPLIED statuses
async function populateEmailRecipients() {
  try {
    const response = await fetch("http://localhost:1918/api/emails/notApplied");
    if (!response.ok) throw new Error("Failed to fetch not applied emails.");
    const data = await response.json();
    const emailRecipientsElem = document.getElementById("emailRecipients");

    emailRecipientsElem.innerHTML = "";
    data.forEach(app => {
      const listItem = document.createElement("li");
      listItem.textContent = `${app.companyName} (${app.email})`;
      listItem.dataset.emailId = app.id;
      emailRecipientsElem.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error fetching NOT_APPLIED emails:", error.message);
  }
}

// Send an email to the selected recipients and update their statuses
async function sendEmail() {
  const emailSubject = document.getElementById("emailSubject").value;
  const emailBody = document.getElementById("emailBody").value;
  const emailAttachments = document.getElementById("emailAttachments").files;
  const recipients = Array.from(document.querySelectorAll("#emailRecipients li"))
                          .map(li => ({ email: li.textContent.split(" (")[1].slice(0, -1), id: li.dataset.emailId }));

  if (!recipients.length || !emailSubject || !emailBody) {
    alert("Please ensure recipients, subject, and body are filled out.");
    return;
  }

  const recipientEmails = recipients.map(recipient => recipient.email).join(",");
  const formData = new FormData();
  formData.append("recipientEmails", recipientEmails);
  formData.append("subject", emailSubject);
  formData.append("body", emailBody);
  Array.from(emailAttachments).forEach(file => formData.append("attachments", file));

  try {
    const response = await fetch("http://localhost:1918/api/emails/send", {
      method: "POST",
      body: formData
    });
    if (!response.ok) throw new Error("Failed to send email.");

    await updateStatusAfterEmailSent(recipients.map(recipient => recipient.id));
    alert("Emails sent and statuses updated!");
  } catch (error) {
    console.error("Error sending email:", error.message);
    alert("There was an error sending the email.");
  }
}

// Update the statuses of recipients to "APPLIED" after sending emails
async function updateStatusAfterEmailSent(ids) {
  for (const id of ids) {
    try {
      const response = await fetch(`http://localhost:1918/api/emails/updateStatus/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "APPLIED" })
      });
      if (!response.ok) throw new Error("Failed to update status.");
      emailSystem.find(email => email.id === id).status = "APPLIED";
    } catch (error) {
      console.error("Error updating status:", error.message);
    }
  }
  populateEmailRecipients(); // Refresh the recipients list
}

// Initialize stored emails on page load
fetchStoredEmails();
