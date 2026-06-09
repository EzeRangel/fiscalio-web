# Product Guide: Fiscalio

## Product Vision

An offline-first web application designed to help Mexican taxpayers (specifically small business owners and freelancers under the **RESICO** tax regime) manage their SAT invoices (CFDI) with high accuracy and minimal manual effort.

## Target Audience

- **Small Business Owners in Mexico:** Managing their own accountability and tax compliance.
- **Freelancers:** Needing to track income, expenses and creditable IVA under the RESICO regime.

## Key Features & Goals

- **Autonomous Classification System:** An adaptive engine that learns from patterns to suggest account classifications and autonomously generates new rules based on observed user behavior and high-confidence patterns.
- **Tax Declarations Support:** Creating preliminary tax declarations and financial reports tailored to the RESICO regime for informational purposes.
- **Data Integrity Layer:** Enforcing strict RESICO-aligned rules (e.g., "Cash-Basis") to ensure data consistency and accuracy in estimations, supported by robust validation (including file de-duplication and UUID uniqueness checks) and tools for manual data correction.
- **CFDI Validation:** Automatically validating invoices against official SAT requirements to ensure compliance.
- **Business Partner Analytics:** Real-time tracking of invoice volumes and financial balance for clients and providers.
- **System-Wide Audit Log:** Comprehensive traceability for critical operations, tracking changes in invoices, payments, and configurations for compliance and debugging.
- **Multi-Currency Support (USD):** Automatic normalization of USD transactions to MXN based on cash-basis principles for accurate financial reporting.
- **Partner Management & Categorization:** Tools for managing business partners, including tagging and quick access to related invoice history.
- **Smart Predictions:** Providing auto-completion and suggestions during manual data adjustments to increase efficiency.
- **Privacy Mode:** A global toggle to blur sensitive currency and identifier data (RFCs, phones) for safe recording and demo presentations.

## Technical Philosophy: Offline-First

- **Privacy & Security:** Sensitive financial data (SAT credentials and invoices) stays local on the user's device using PGLite.
- **Reliability:** The application works seamlessly without an internet connection.
- **Cost Efficiency:** No cloud database hosting fees, making the tool more accessible.

## Success Metrics

- **High Accuracy:** Maximizing the precision of the ML classification engine.
- **User Efficiency:** Significantly reducing the time required for manual tax preparation.
- **Estimation Reliability:** Providing accurate, high-quality data summaries that align with RESICO best practices.

# Marketing Specification: Fiscalio Alpha Launch

## Executive Summary

**Campaign Goal:** Drive high-intent Technology Freelancers in the RESICO regime to the Fiscalio waitlist and increase downloads of the "RESICO Practical Guide" through targeted Google Search Ads.

## 1. Audience Personas

### Primary Persona: The Tech-Savvy Freelancer ("Alex")

- **Profile:** Software developer, UI/UX designer, or IT consultant.
- **Tax Regime:** RESICO.
- **Motivations:** Efficiency, tech-forward tools, control over data.
- **Pain Points:**
  - Manual classification of SAT invoices is a "boring" chore.
  - Anxiety over missing a deadline or miscalculating taxes.
  - Traditional accounting software feels bloated and outdated.
- **Core Need:** A tool that "just works" and automates the tedious parts of accounting.

## 2. Messaging Pillars

### Pillar 1: Effortless Automation (The Hero Hook)

- **Message:** Fiscalio learns how you work and automates invoice classification.
- **Angle:** Stop playing accountant. Let Fiscalio handle the busywork.

### Pillar 2: RESICO Optimized

- **Message:** Built from the ground up for the unique requirements of RESICO freelancers.
- **Angle:** Specialized accuracy that generic accounting tools can't match.

### Pillar 3: Privacy & Speed (Offline-First)

- **Message:** Blazing fast performance with total data privacy. Your data never leaves your device.
- **Angle:** The power of a database with the security of an offline tool.
