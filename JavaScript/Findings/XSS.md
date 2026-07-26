# Cross-Site Scripting (XSS)

## Severity
High

## CWE
CWE-79

## OWASP
A03:2021 – Injection

## Description
User-controlled input is returned directly to the browser without output encoding.

## Risk
Attackers can execute malicious JavaScript in a victim's browser.

## Vulnerable File
JavaScript/Vulnerable/xss.js

## Fixed File
JavaScript/Fixed/xss.js

## Remediation
Escape or encode all user-controlled output before rendering it in HTML.
