# 🛒 Inba Mart

### Multi-Vendor E-Commerce Platform with AWS Cloud Architecture & DevSecOps

[![Node.js](https://img.shields.io/badge/Node.js-v22-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express-v5-000000.svg)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-v19-61DAFB.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5-3178C6.svg)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248.svg)](https://www.mongodb.com/cloud/atlas)
[![Docker](https://img.shields.io/badge/Docker-Multi--Stage-2496ED.svg)](https://www.docker.com/)
[![AWS](https://img.shields.io/badge/AWS-Cloud%20Architecture-FF9900.svg)](https://aws.amazon.com/)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF.svg)](https://github.com/features/actions)
[![DevSecOps](https://img.shields.io/badge/Security-Semgrep%20%7C%20Trivy%20%7C%20Gitleaks%20%7C%20ZAP-red.svg)](#️-devsecops-cicd-pipeline)

> **Inba Mart** is a production-grade multi-vendor e-commerce platform featuring high-availability AWS cloud infrastructure, an automated DevSecOps CI/CD delivery pipeline, and a role-based commerce engine.

---

## 📑 Table of Contents

- 📌 [Overview](#-overview)
- 🏗️ [System Architecture](#️-system-architecture-cloud--devsecops)
- ☁️ [AWS Cloud Architecture](#️-aws-cloud-architecture)
- 🛡️ [DevSecOps CI/CD Pipeline](#️-devsecops-cicd-pipeline)
- 🎨 [Application Interfaces](#-application-interfaces)
- ⚡ [Key Features](#-key-features)
- 🛠️ [Technology Stack](#️-technology-stack)
- 🔐 [Role-Based Access Control (RBAC)](#-role-based-access-control-rbac)
- 🔑 [Demo Credentials](#-demo-credentials)
- 🚀 [Quick Start & Setup](#-quick-start--setup)
- 🐳 [Docker Deployment](#-docker-deployment)
- 📈 [Current vs Future Roadmap](#-current-vs-future-roadmap)
- 💼 [Resume Highlights](#-resume-highlights)

---

## 📌 Overview

Inba Mart connects customers, sellers, and platform administrators in a secure multi-tenant marketplace built with React 19, Node.js 22, Docker, AWS Multi-AZ infrastructure, and automated GitHub Actions security controls.

- 🛍️ **Storefront:** Browse products, search catalog, manage cart, checkout with Razorpay.
- 🏪 **Seller Portal:** Merchant onboarding, product inventory management, order fulfillment, sales reports.
- 🔑 **Admin Center:** Vendor verification approvals, coupon management, platform governance.
- 🛡️ **DevSecOps:** Automated SAST (`Semgrep`), Secret Scanning (`Gitleaks`), Container Auditing (`Trivy`), DAST (`OWASP ZAP`), and OIDC authentication.
- ☁️ **AWS Cloud:** Multi-AZ private VPC subnets, ALB load balancing, EC2 Auto Scaling, S3 VPC Endpoint, Secrets Manager, and SSM Session Manager.

---

## 🏗️ System Architecture (Cloud + DevSecOps)

Below is the complete enterprise end-to-end architecture combining application tiers, CI/CD security gates, AWS network isolation, container registry, and cloud database integration.

![Enterprise End-to-End Architecture](docs/images/end-to-end-architecture.png)

---

## ☁️ AWS Cloud Architecture

Hosted in **AWS Mumbai (`ap-south-1`)** across 2 Availability Zones (`AZ-A` & `AZ-B`) with strict private subnet isolation.

![AWS Cloud Architecture](docs/images/aws-cloud-architecture.png)

### 🔑 Key Infrastructure Components
- 🌐 **VPC (`10.0.0.0/16`):** Public subnets host ALB & NAT Gateways; private subnets host EC2 application nodes.
- ⚖️ **Application Load Balancer (ALB):** Internet-facing entry point balancing HTTP traffic across target instances.
- 🔄 **Auto Scaling Group (`inba-mart-backend-asg`):** Auto-replaces degraded instances across AZs with zero downtime.
- 🔗 **S3 VPC Gateway Endpoint:** Directly routes S3 image traffic over internal AWS network, eliminating NAT data fees.
- 🔐 **AWS Secrets Manager & SSM:** Environment variables injected at runtime; SSH-free Session Manager administration.

---

## 🛡️ DevSecOps CI/CD Pipeline

Automated pipeline in `.github/workflows/devsecops.yml` running security checks before pushing container images or triggering ASG updates.

![DevSecOps CI/CD Pipeline](docs/images/devsecops-pipeline-architecture.png)

### 🔒 Security Gates
1. 📦 `npm audit`: Dependency vulnerability audit (`--audit-level=high`).
2. 🔍 `Semgrep`: Static Application Security Testing (SAST).
3. 🔑 `Gitleaks`: Hardcoded secret and API key detection.
4. 🐳 `Trivy`: Docker container CVE vulnerability scan (`CRITICAL`/`HIGH`).
5. ⚡ `OWASP ZAP`: Dynamic Application Security Testing (DAST) baseline scan on live ALB.
6. 🔑 `AWS OIDC`: Passwordless IAM authentication replacing long-lived secret keys.

---

## 🎨 Application Interfaces

### 🛍️ Storefront Hero & Product Discovery
![Storefront Hero Banner](docs/images/storefront-hero.png)

### 🏷️ Deals of the Day & Category Showcase
![Storefront Grid and Deals](docs/images/storefront-deals.png)

---

## ⚡ Key Features

| Category | Feature | Description |
| :--- | :--- | :--- |
| 🛒 **Application** | Multi-Vendor Commerce | Customer shopping, seller onboarding, product management, order processing |
| 💳 **Payments & Media** | Razorpay & Cloudinary | Digital checkout processing & Cloudinary image asset uploads |
| 🛡️ **Security** | OWASP Mitigation | Bcrypt hashing, short-lived JWT, Helmet headers, Mongo sanitizer, CORS |
| 🔑 **Authentication** | OIDC & RBAC | Passwordless AWS IAM role assumption + Granular Customer/Seller/Admin access |
| ☁️ **Cloud Infrastructure** | High Availability | Multi-AZ private subnets, ALB target groups, zero-downtime ASG refresh |
| ⚙️ **DevSecOps** | Continuous Security | Automated SAST, Secret Scanning, Container Audits & DAST in GitHub Actions |

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| 💻 **Frontend** | React 19, TypeScript, Vite, Tailwind CSS v4, Material UI v6, Axios, React Router v7 |
| ⚙️ **Backend** | Node.js v22 (Alpine), Express 5, Mongoose 9, Body-Parser, Multer, Nodemailer |
| 🍃 **Database** | MongoDB Atlas (Cloud NoSQL Database) |
| 🔐 **Auth & Security** | JWT, Bcrypt, Helmet, Express Mongo Sanitize, Rate Limiter |
| 🐳 **Containerization** | Docker (Multi-stage build based on `node:22-alpine`) |
| 🚀 **CI/CD** | GitHub Actions (`devsecops.yml`) |
| ☁️ **AWS Services** | VPC, ALB, ASG, ECR, IAM OIDC, Secrets Manager, SSM, S3, CloudFront, S3 VPC Endpoint, NAT Gateway |
| 🛡️ **DevSecOps Tools** | Semgrep, Gitleaks, Trivy, OWASP ZAP, npm audit |

---

## 🔐 Role-Based Access Control (RBAC)

| Action / Route | `ROLE_CUSTOMER` | `ROLE_SELLER` | `ROLE_ADMIN` | Guest |
| :--- | :---: | :---: | :---: | :---: |
| 🔍 **Browse & Search Products** | ✅ | ✅ | ✅ | ✅ |
| 🛒 **Cart & Place Orders** | ✅ | ❌ | ❌ | ❌ |
| 📦 **Manage Product Inventory** | ❌ | ✅ | ❌ | ❌ |
| 📊 **View Earnings & Reports** | ❌ | ✅ | ❌ | ❌ |
| 👮 **Approve / Suspend Sellers** | ❌ | ❌ | ✅ | ❌ |
| 🎟️ **Manage Platform Coupons** | ❌ | ❌ | ✅ | ❌ |

---

## 🔑 Demo Credentials

| Role | Email | Password |
| :--- | :--- | :--- |
| 👤 **User / Customer** | `aws@gmail.com` | `aws@123` |
| 👑 **Super Admin** | `admin@inbamart.com` | `adminpassword` |

---

## 🚀 Quick Start & Setup

### 1️⃣ Clone & Configure Environment
```bash
git clone https://github.com/inbavarunan/Inba-Mart-MultiVendor.git
cd Inba-Mart-MultiVendor
```

Create `backend/.env`:
```env
PORT=5000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
ADMIN_EMAIL=<your-admin-email>
ADMIN_PASSWORD=<your-admin-password>
RAZORPAY_KEY_ID=<your-razorpay-id>
RAZORPAY_KEY_SECRET=<your-razorpay-secret>
EMAIL_USER=<your-email>
EMAIL_PASS=<your-app-password>
CLOUDINARY_CLOUD_NAME=<your-cloudinary-name>
CLOUDINARY_API_KEY=<your-cloudinary-key>
CLOUDINARY_API_SECRET=<your-cloudinary-secret>
```

### 2️⃣ Run Locally

**Backend:**
```bash
cd backend
npm install
npm run dev
# Running on http://localhost:5000
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
# Running on http://localhost:5173
```

---

## 🐳 Docker Deployment

### Build & Run Container
```bash
# Build production image
docker build -t inba-mart-backend:local ./backend

# Run container
docker run -d -p 5000:5000 --env-file backend/.env --name inba-mart-app inba-mart-backend:local

# Check logs
docker logs -f inba-mart-app
```

---

## 📈 Current vs Future Roadmap

### ✅ Currently Implemented (Phase 1)
- 🟢 Full-Stack MERN application with React 19 & Express 5
- 🟢 Multi-AZ AWS Cloud Infrastructure (VPC, ALB, ASG, Private Subnets)
- 🟢 Multi-stage Docker containerization (`node:22-alpine`)
- 🟢 DevSecOps pipeline with Semgrep, Gitleaks, Trivy, OWASP ZAP & npm audit
- 🟢 Passwordless AWS IAM authentication via GitHub OIDC
- 🟢 AWS Secrets Manager & SSM Session Manager integration

### 🔮 Planned Enhancements (Phase 2)
- 🟡 Terraform / OpenTofu Infrastructure-as-Code codification
- 🟡 Route 53 Custom Domain & ACM HTTPS TLS termination on ALB
- 🟡 AWS WAF web application firewall rules
- 🟡 CloudWatch centralized log streaming & automated alarm rollbacks

---

## 💼 Project Highlights

- ☁️ **AWS Cloud Architecture:** Architected multi-AZ high-availability infrastructure on AWS (`ap-south-1`) with private subnet isolation, ALB load balancing, and EC2 Auto Scaling.
- 🛡️ **DevSecOps & CI/CD Pipeline:** Built automated GitHub Actions pipeline integrating SAST (`Semgrep`), secret auditing (`Gitleaks`), container scanning (`Trivy`), and DAST (`OWASP ZAP`).
- ⚡ **Zero-Downtime Deployments:** Implemented zero-downtime ASG Instance Refreshes with health checks (`MinHealthyPercentage: 100`) and active-refresh conflict prevention.
- 🔑 **Passwordless Cloud Security:** Federated GitHub Actions with AWS IAM via OIDC for credential-free CI/CD deployments.
- 💻 **Full-Stack Development:** Developed RESTful Express API with MongoDB Atlas and React 19 frontend supporting RBAC (`ROLE_CUSTOMER`, `ROLE_SELLER`, `ROLE_ADMIN`).
