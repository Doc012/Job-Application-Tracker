package com.backend.entities;

import com.backend.enums.Status;
import jakarta.persistence.*;

@Entity
@Table(name = "emailapps")
public class EmailApp {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, name = "COMPANY_NAME")
    private String companyName;

    @Column(nullable = false, name = "EMAIL")
    private String email;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "JOB_LINK")
    private String jobLink;

    @Enumerated(EnumType.STRING)
    @Column(name = "STATUS")
    private Status status = Status.NOT_APPLIED;

    public EmailApp() {
    }

    public EmailApp(Long id, String companyName, String email, String description, String jobLink, Status status) {
        this.id = id;
        this.companyName = companyName;
        this.email = email;
        this.description = description;
        this.jobLink = jobLink;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getJobLink() {
        return jobLink;
    }

    public void setJobLink(String jobLink) {
        this.jobLink = jobLink;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
