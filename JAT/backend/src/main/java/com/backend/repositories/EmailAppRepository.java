package com.backend.repositories;

import com.backend.entities.EmailApp;
import com.backend.enums.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmailAppRepository extends JpaRepository<EmailApp, Long> {
    List<EmailApp> findByStatus(Status status);
}
