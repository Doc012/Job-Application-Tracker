const Dashboard = (() => {
	const global = {
		tooltipOptions: {
			placement: "right"
		},
		menuClass: ".c-menu"
	};

	const menuChangeActive = (el) => {
		const hasSubmenu = el.classList.contains("has-submenu");
		document.querySelector(`${global.menuClass} .is-active`).classList.remove("is-active");
		el.classList.add("is-active");
		
		// if (hasSubmenu) {
		// 	el.querySelector("ul").slideDown();
		// }
	};

	const sidebarChangeWidth = () => {
		const body = document.body;
		const hamburgerToggle = document.querySelector(".hamburger-toggle");
		const menuItemsTitle = document.querySelectorAll("li .menu-item__title");

		body.classList.toggle("sidebar-is-reduced");
		body.classList.toggle("sidebar-is-expanded");
		hamburgerToggle.classList.toggle("is-opened");
		
		const tooltips = document.querySelectorAll('[data-toggle="tooltip"]');
		if (body.classList.contains("sidebar-is-expanded")) {
			tooltips.forEach(tooltip => $(tooltip).tooltip("destroy"));
		} else {
			tooltips.forEach(tooltip => $(tooltip).tooltip(global.tooltipOptions));
		}
	};

	return {
		init: () => {
			document.querySelector(".js-hamburger").addEventListener("click", sidebarChangeWidth);

			const menuItems = document.querySelectorAll(".js-menu li");
			menuItems.forEach(item => {
				item.addEventListener("click", (e) => {
					menuChangeActive(e.currentTarget);
				});
			});

			const tooltips = document.querySelectorAll('[data-toggle="tooltip"]');
			tooltips.forEach(tooltip => $(tooltip).tooltip(global.tooltipOptions));
		}
	};
})();

Dashboard.init();

function homeFun() {
	const hHome = document.getElementById("home");
	const hProfile = document.getElementById("profile");
	const hRequests = document.getElementById("requests");
	const rSettings = document.getElementById("settings");
	const rDocuments = document.getElementById("documents");

	hHome.style.display = "block";
	hProfile.style.display = "none";
	hRequests.style.display = "none";
	rSettings.style.display = "none";
	rDocuments.style.display = "none";

}

function profileFun() {
	const pHome = document.getElementById("home");
	const pProfile = document.getElementById("profile");
	const pRequests = document.getElementById("requests");
	const rSettings = document.getElementById("settings");
	const rDocuments = document.getElementById("documents");

	pHome.style.display = "none";
	pProfile.style.display = "block";
	pRequests.style.display = "none";
	rSettings.style.display = "none";
	rDocuments.style.display = "none";

}

function requestsFun() {
	const rHome = document.getElementById("home");
	const rProfile = document.getElementById("profile");
	const rRequests = document.getElementById("requests");
	const rSettings = document.getElementById("settings");
	const rDocuments = document.getElementById("documents");

	rHome.style.display = "none";
	rProfile.style.display = "none";
	rRequests.style.display = "block";
	rSettings.style.display = "none";
	rDocuments.style.display = "none";
}

function settingsFun() {
	const rHome = document.getElementById("home");
	const rProfile = document.getElementById("profile");
	const rRequests = document.getElementById("requests");
	const rSettings = document.getElementById("settings");
	const rDocuments = document.getElementById("documents");


	rHome.style.display = "none";
	rProfile.style.display = "none";
	rRequests.style.display = "none";
	rSettings.style.display = "block";
	rDocuments.style.display = "none";
}

function documentsFun() {
	const rHome = document.getElementById("home");
	const rProfile = document.getElementById("profile");
	const rRequests = document.getElementById("requests");
	const rSettings = document.getElementById("settings");
	const rDocuments = document.getElementById("documents");

	rHome.style.display = "none";
	rProfile.style.display = "none";
	rRequests.style.display = "none";
	rSettings.style.display = "none";
	rDocuments.style.display = "block";
}

function togglePasswordUpdate(value) {
	const passwordUpdateSection = document.getElementById('passwordUpdateSection');
	if (value === 'yes') {
		passwordUpdateSection.style.display = 'block';
	} else {
		passwordUpdateSection.style.display = 'none';
	}
}

function logout(){
	window.location.href = "../index.html";
}



const appliedJobs = [
    {
        title: 'Software Engineer at Google',
        appliedOn: '2024-10-10',
        status: 'Interviewing',
    },
    {
        title: 'Frontend Developer at Facebook',
        appliedOn: '2024-10-08',
        status: 'Awaiting Response',
    },
    {
        title: 'Backend Developer at Amazon',
        appliedOn: '2024-10-05',
        status: 'Rejected',
    }
];

function renderAppliedJobs() {
    const jobsContainer = document.querySelector('.jobs-container');
    appliedJobs.forEach(job => {
        const jobBox = document.createElement('div');
        jobBox.classList.add('job-box');
        jobBox.innerHTML = `
            <h3>${job.title}</h3>
            <p>Applied on: ${job.appliedOn}</p>
            <p>Status: ${job.status}</p>
        `;
        jobsContainer.appendChild(jobBox);
    });
}

document.addEventListener('DOMContentLoaded', renderAppliedJobs);
