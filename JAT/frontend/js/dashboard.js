document.addEventListener("DOMContentLoaded", function () {
    // Define the status breakdown chart
    const ctx = document.getElementById('statusChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Applied', 'Interview', 'Rejected', 'Offer'],
            datasets: [{
                label: 'Application Status',
                data: [40, 20, 30, 10], // Sample data
                backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0'],
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Define the status breakdown chart
    const ctx = document.getElementById('statusChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Applied', 'Interview', 'Rejected', 'Offer'],
            datasets: [{
                label: 'Application Status',
                data: [40, 20, 30, 10], // Sample data
                backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0'],
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }
    });
});



const ctx = document.getElementById('jobApplicationsChart').getContext('2d');

// Data for the chart
const jobApplicationData = {
  labels: [
    'Total Applications',
    'Sent Applications',
    'Saved Applications',
    'Interviews Scheduled',
    'Interviewed Applications',
    'Offers Received',
  ],
  datasets: [
    {
      label: 'Applications',
      data: [25, 10, 15, 3, 3, 2], // Actual data for the job applications
      backgroundColor: [
        '#007bff',
        '#28a745',
        '#ffc107',
        '#17a2b8',
        '#6f42c1',
        '#dc3545',
      ],
      borderColor: [
        '#0056b3',
        '#1e7e34',
        '#d39e00',
        '#117a8b',
        '#5a38a3',
        '#c82333',
      ],
      borderWidth: 1,
    },
  ],
};

// Chart configuration
const config = {
  type: 'bar', // You can change this to 'line', 'pie', etc. based on your preference
  data: jobApplicationData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend if there's only one dataset
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.raw} Applications`;
          },
        },
      },
    },
  },
};

// Create the chart
const jobApplicationsChart = new Chart(ctx, config);




// const donutCtx = document.getElementById('jobDonutChart').getContext('2d');

// // Data for the donut chart
// const jobDonutData = {
//   labels: [
//     'Total Applications',
//     'Sent Applications',
//     'Saved Applications',
//     'Interviews Scheduled',
//     'Interviewed Applications',
//     'Offers Received',
//   ],
//   datasets: [
//     {
//       label: 'Applications',
//       data: [25, 10, 15, 3, 3, 2],
//       backgroundColor: [
//         '#1e90ff',
//         '#32cd32',
//         '#ff7f50',
//         '#6a5acd',
//         '#ff69b4',
//         '#ffa500',
//       ],
//       borderColor: '#fff',
//       borderWidth: 2,
//     },
//   ],
// };

// // Donut chart configuration
// const donutConfig = {
//   type: 'doughnut',
//   data: jobDonutData,
//   options: {
//     responsive: true,
//     cutout: '70%',
//     plugins: {
//       legend: {
//         position: 'bottom',
//         labels: {
//           font: {
//             size: 12, /* Adjust legend font size */
//           },
//         },
//       },
//       tooltip: {
//         callbacks: {
//           label: function (tooltipItem) {
//             return `${tooltipItem.raw} Applications`;
//           },
//         },
//       },
//     },
//   },
// };

// // Create the donut chart
// const jobDonutChart = new Chart(donutCtx, donutConfig);








const lineCtx = document.getElementById('jobLineChart').getContext('2d');

// Data for the line graph
const jobLineData = {
  labels: [
    'Jun',
    'July',
    'August',
    'September',
    'October',
    'November',
  ],
  datasets: [
    {
      label: 'Job Applications',
      data: [25, 10, 15, 3, 20, 2],
      borderColor: '#1e90ff',
      backgroundColor: 'rgba(30, 144, 255, 0.2)',
      pointBackgroundColor: '#1e90ff',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1e90ff',
      fill: true, // Fill below the line
      tension: 0.4, // Smoother curves
    },
  ],
};

// Line chart configuration
const lineConfig = {
  type: 'line',
  data: jobLineData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
          font: {
            size: 10, // Smaller font for y-axis
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 10, // Smaller font for x-axis
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          font: {
            size: 12, // Smaller font size for legend
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.raw} Applications`;
          },
        },
      },
    },
  },
};

// Create the line chart
const jobLineChart = new Chart(lineCtx, lineConfig);























// Recent Applications Data
const recentApplications = [
    {
      title: "Software Developer at ABC Corp",
      date: "Applied on Sep 10, 2024",
      status: "Interview Scheduled",
    },
    {
      title: "Front-End Engineer at XYZ Ltd",
      date: "Applied on Sep 8, 2024",
      status: "Pending",
    },
    {
      title: "Full-Stack Developer at DEF Tech",
      date: "Applied on Sep 5, 2024",
      status: "Pending",
    },
    // Add more applications here if needed
  ];
  
  // Recent Interviews Data
  const recentInterviews = [
    {
      title: "Back-End Developer at GHI Inc",
      date: "Interview on Sep 12, 2024",
      time: "Time: 13:00"
    },
    {
      title: "Mobile App Developer at JKL Solutions",
      date: "Interview on Sep 11, 2024",
      time: "Time: 10:00"
    },
    {
      title: "Data Scientist at MNO Analytics",
      date: "Interview on Sep 9, 2024",
      time: "Time: 11:00"
    },
    // Add more interviews here if needed
  ];
  
  // Function to display recent applications
  function displayRecentApplications() {
    const applicationsList = document.getElementById('recentApplicationsList');
    recentApplications.slice(0, 3).forEach(app => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${app.title}</strong><br><small>${app.date}</small><br><small>${app.status}</small>`;
      applicationsList.appendChild(listItem);
    });
  }
  
  // Function to display recent interviews
  function displayRecentInterviews() {
    const interviewsList = document.getElementById('recentInterviewsList');
    recentInterviews.slice(0, 3).forEach(interview => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${interview.title}</strong><br><small>${interview.date}</small><br><small>${interview.time}</small>`;
      interviewsList.appendChild(listItem);
    });
  }
  
  // Initialize
  displayRecentApplications();
  displayRecentInterviews();
  
















  document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
  
    accordionHeaders.forEach(function (header) {
      header.addEventListener('click', function () {
        const accordionItem = header.parentElement;
        const isActive = accordionItem.classList.contains('active');
        
        // Close all other accordion items
        document.querySelectorAll('.accordion-item').forEach(function (item) {
          item.classList.remove('active');
        });
  
        // Toggle current accordion item
        if (!isActive) {
          accordionItem.classList.add('active');
        }
      });
    });
  });

  








  
  
  