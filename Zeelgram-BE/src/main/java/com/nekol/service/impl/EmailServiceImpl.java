package com.nekol.service.impl;

import com.nekol.domain.model.MailObject;
import com.nekol.service.IEmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import java.nio.charset.StandardCharsets;

@Service
public class EmailServiceImpl implements IEmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private SpringTemplateEngine thymeleafTemplateEngine;

    private static final String NOREPLY_ADDRESS = "noreply@zeelgram.com";

    private final static Logger log = LoggerFactory.getLogger(EmailServiceImpl.class);
//    @Override
//    @Async
//    public void sendHtmlMessage(String to, String subject, String htmlBody) {
//        try {
//            MimeMessage mimeMessage = mailSender.createMimeMessage();
//            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
//            helper.setTo(to);
//            helper.setSubject(subject);
//            helper.setText(htmlBody, true);
//            helper.setFrom(NOREPLY_ADDRESS);
//            mailSender.send(mimeMessage);
//        } catch (MessagingException e) {
//            logger.error("Failed to send email for: " + htmlBody + "\n" + e);
//            throw new IllegalArgumentException("Failed to send email for: " + htmlBody);
//        }
//
//    }


    @Override
    @Async
    public void sendMail(MailObject mailObject) {
        try {
            log.info("Starting to send email to: " + mailObject.getTo());
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED, StandardCharsets.UTF_8.name());
            String html = getHtmlContent(mailObject);
            helper.setTo(mailObject.getTo());
//            helper.setFrom(mailObject.getFrom());
            helper.setFrom(NOREPLY_ADDRESS);
            helper.setSubject(mailObject.getSubject());
            helper.setText(html, true);
            mailSender.send(message);
            log.info("Send email to: " + mailObject.getTo() + " successfully!!");
        } catch (MessagingException e) {
            log.error("Failed to send email for: " + mailObject.getTo() + "\n" + e);
            throw new IllegalArgumentException("Failed to send email for: " + mailObject.getTo());
        }
    }

    private String getHtmlContent(MailObject mail) {
        Context context = new Context();
        context.setVariables(mail.getHtmlTemplate().getProps());
        return thymeleafTemplateEngine.process(mail.getHtmlTemplate().getTemplate(), context);
    }
}
