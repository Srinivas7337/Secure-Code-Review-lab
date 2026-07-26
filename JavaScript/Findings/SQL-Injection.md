# SQL Injection

## Severity
Critical

## CWE
CWE-89

## OWASP
A03:2021 – Injection

## Description

The vulnerable code builds SQL queries by concatenating user input directly into the SQL statement.

## Vulnerable Code

JavaScript/Vulnerable/login.js

## Risk

An attacker can manipulate SQL queries and bypass authentication or access sensitive data.

## Remediation

Use parameterized queries or prepared statements.

## Secure Example

JavaScript/Fixed/login.js

## Tool Used

Semgrep
