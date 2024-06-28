package com.nekol.service;

import com.nekol.domain.model.MailObject;

public interface IEmailService {
//    void sendHtmlMessage(String to, String subject, String htmlBody);
//    void sendMessageUsingThymeleafTemplate(String to, String subject, Map<String, Object> templateModel);

    void sendMail(MailObject mailObject);
}
