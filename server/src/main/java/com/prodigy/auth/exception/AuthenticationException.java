package com.prodigy.auth.exception;

/**
 * @author badreddine
 **/
public class AuthenticationException extends RuntimeException {
    public AuthenticationException(String message) {
        super(message);
    }
}
