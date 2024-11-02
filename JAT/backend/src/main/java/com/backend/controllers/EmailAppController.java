package com.backend.controllers;

import com.backend.entities.EmailApp;
import com.backend.enums.Status;
import com.backend.repositories.EmailAppRepository;
import com.backend.services.EmailAppService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/emails")
public class EmailAppController {

    @Autowired
    private EmailAppService emailAppService;

    @Autowired
    private EmailAppRepository emailAppRepository;

    // Endpoint 1: Add a company with email and description
    @PostMapping("/add")
    public ResponseEntity<EmailApp> addCompany(@RequestBody EmailApp emailApp) {
        EmailApp savedEmailApp = emailAppRepository.save(emailApp);
        return new ResponseEntity<>(savedEmailApp, HttpStatus.CREATED);
    }

    // Endpoint 2: Send email to multiple recipients individually
    @PostMapping("/send")
    public ResponseEntity<String> sendEmailToMultipleRecipients(
            @RequestParam List<String> recipientEmails,
            @RequestParam String subject,
            @RequestParam String body,
            @RequestParam(required = false) List<MultipartFile> attachments
    ) {
        try {
            emailAppService.sendEmailToMultipleRecipients(recipientEmails, subject, body, attachments);
            return new ResponseEntity<>("Emails sent successfully", HttpStatus.OK);
        } catch (MessagingException | IOException e) {
            return new ResponseEntity<>("Failed to send emails", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Endpoint 3: Delete an application by ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteApplicationById(@PathVariable Long id) {
        if (emailAppRepository.existsById(id)) {
            emailAppRepository.deleteById(id);
            return ResponseEntity.ok("Application deleted successfully.");
        } else {
            return ResponseEntity.status(404).body("Application not found.");
        }
    }

    // Endpoint 4: Get all applications
    @GetMapping("/all")
    public ResponseEntity<List<EmailApp>> getAllApplications() {
        List<EmailApp> applications = emailAppRepository.findAll();
        return ResponseEntity.ok(applications);
    }

    // Endpoint 5: Update status to APPLIED by ID
    @PutMapping("/updateStatus/{id}")
    public ResponseEntity<String> updateApplicationStatus(@PathVariable Long id) {
        Optional<EmailApp> emailAppOptional = emailAppRepository.findById(id);
        if (emailAppOptional.isPresent()) {
            EmailApp emailApp = emailAppOptional.get();
            emailApp.setStatus(Status.valueOf("APPLIED"));
            emailAppRepository.save(emailApp);
            return ResponseEntity.ok("Status updated to APPLIED.");
        } else {
            return ResponseEntity.status(404).body("Application not found.");
        }
    }

    // Endpoint 6: Get all applications with NOT_APPLIED status
    @GetMapping("/notApplied")
    public ResponseEntity<List<EmailApp>> getNotAppliedApplications() {
        List<EmailApp> notAppliedApps = emailAppRepository.findByStatus(Status.NOT_APPLIED);
        return ResponseEntity.ok(notAppliedApps);
    }
}
