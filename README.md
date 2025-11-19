# Anonymized Vulnerable Web Application

This is a modified version of [OWASP Juice Shop](https://github.com/juice-shop/juice-shop), customized for blind penetration testing practice where prior knowledge of the application would constitute "cheating."

## Purpose

This fork removes identifying characteristics that would allow someone familiar with Juice Shop to skip the reconnaissance phase of security testing. It's designed for:
- Penetration testing practice without spoilers
- Teaching security assessment methodologies from scratch
- Training scenarios where prior application knowledge shouldn't be a factor

## Changes from Original OWASP Juice Shop

### Anonymization
- **Branding**: All "OWASP Juice Shop" references replaced with generic names
- **Domain**: Email domain changed from `juice-sh.op` to `webapp.test`
- **User accounts**: All default usernames, emails, and credentials randomized
- **Product names**: Juice-related branding removed while keeping functionality
- **URLs**: All identifying URLs and references anonymized
- **Documentation**: Challenge hints and documentation removed for blind testing

### Technical
- Application name: "Vulnerable WebApp" / "MarketPlace Express"
- Port: 3001 (to avoid conflicts)
- All core vulnerabilities preserved
- Challenge tracking system intact
- Full functionality maintained

## Installation & Usage

### Prerequisites
- Node.js v22+ 
- npm

### Setup
```bash
# Install dependencies
npm install

# Start the application
PORT=3001 npm start

# Access at:
# http://localhost:3001
```

### Using the Startup Scripts

Two helper scripts are provided in the `vulnerable-app-pentest/` directory:

```bash
# Start with existing data/progress
./vulnerable-app-pentest/start_webapp.sh

# Reset to clean state
./vulnerable-app-pentest/reset_webapp.sh
```

### Docker Deployment

```bash
# Build the image
docker build -t vulnerable-webapp:latest .

# Run the container
docker run -d -p 3001:3000 --name vulnerable-webapp vulnerable-webapp:latest

# Access at:
# http://localhost:3001
```

## For Penetration Testing Practice

This application contains numerous intentional security vulnerabilities across multiple categories:
- Injection flaws (SQL, XSS, etc.)
- Broken authentication
- Sensitive data exposure
- Access control issues
- Security misconfiguration
- And many more...

**Finding the scoreboard/dashboard is itself one of the first challenges.**

## Credit & License

This is a derivative work of [OWASP Juice Shop](https://github.com/juice-shop/juice-shop) by Bjoern Kimminich and contributors.

Original project: https://github.com/juice-shop/juice-shop

### Original License
Copyright (c) 2014-2026 Bjoern Kimminich & the OWASP Juice Shop contributors.
SPDX-License-Identifier: MIT

The original OWASP Juice Shop is licensed under the MIT License.

### This Fork
Anonymization modifications by Carlos, 2025.
Distributed under the same MIT License as the original.

## Ethical Use

This application is intentionally vulnerable and should NEVER be deployed on a public network or production environment. Use only in isolated lab environments for:
- Security training
- Penetration testing practice
- Educational purposes

## Contributing

If you find issues with the anonymization (places where the original app is still identifiable) or have suggestions for improving the blind-testing experience, feel free to submit issues or pull requests.

## Resources

For the original, fully-documented version with hints and tutorials:
- Original OWASP Juice Shop: https://github.com/juice-shop/juice-shop
- Official companion guide: https://pwning.owasp-juice.shop/
