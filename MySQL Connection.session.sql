CREATE TABLE EmailApps (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('APPLIED', 'NOT_APPLIED') NOT NULL DEFAULT 'NOT_APPLIED',
    job_link VARCHAR(255)
);

