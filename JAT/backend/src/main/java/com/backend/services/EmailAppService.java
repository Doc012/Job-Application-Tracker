package com.backend.services;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamSource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class EmailAppService {

    @Autowired
    private JavaMailSender mailSender;

    // Set your name and email here
    private final String fromEmail = "sphashepherd@gmail.com";
    private final String fromName = "Siphamandla Ngcepe";

    public void sendEmailToMultipleRecipients(
            List<String> recipientEmails,
            String subject,
            String body,
            List<MultipartFile> attachments
    ) throws MessagingException, IOException {

        for (String email : recipientEmails) {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            // Set the recipient, subject, and body
            helper.setTo(email);
            helper.setSubject(subject);
            helper.setText(body);

            // Set the "From" field with name and email address
            helper.setFrom(new InternetAddress(fromEmail, fromName));

            // Attach files if any
            if (attachments != null) {
                for (MultipartFile file : attachments) {
                    InputStreamSource attachmentSource = new ByteArrayResource(file.getBytes());
                    helper.addAttachment(file.getOriginalFilename(), attachmentSource);
                }
            }

            mailSender.send(message);
        }
    }
}
