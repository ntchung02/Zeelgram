package com.nekol.domain.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
@Builder
public class MailObject {

    private String from;
    private String to;
    private String subject;
    private HtmlTemplate htmlTemplate;

    @Getter
    @Setter
    @AllArgsConstructor
    public static class HtmlTemplate {
        private String template;
        private Map<String, Object> props;
    }

}
