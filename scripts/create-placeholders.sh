#!/bin/bash

# Customer Portal
cat > contents/docs/customer-portal/features/index.mdx << 'EOF'
---
title: Self-Service Features
description: Overview of self-service features available in the Customer Portal.
keywords: ["self-service", "features", "customer portal"]
---

# Self-Service Features

Explore the comprehensive self-service features available to your customers.

## Available Features

*Documentation content to be added.*

## Feature Benefits

*Documentation content to be added.*

## Feature Configuration

*Documentation content to be added.*
EOF

cat > contents/docs/customer-portal/order-tracking/index.mdx << 'EOF'
---
title: Order Tracking
description: Track orders in real-time through the Customer Portal.
keywords: ["order tracking", "orders", "status"]
---

# Order Tracking

Enable customers to track their orders in real-time.

## Overview

*Documentation content to be added.*

## Tracking Features

*Documentation content to be added.*

## Status Updates

*Documentation content to be added.*
EOF

cat > contents/docs/customer-portal/invoice-payments/index.mdx << 'EOF'
---
title: Invoice Payments
description: Process secure invoice payments through the Customer Portal.
keywords: ["invoices", "payments", "billing"]
---

# Invoice Payments

Allow customers to view and pay invoices securely online.

## Overview

*Documentation content to be added.*

## Payment Methods

*Documentation content to be added.*

## Payment Security

*Documentation content to be added.*
EOF

cat > contents/docs/customer-portal/sro-deposits/index.mdx << 'EOF'
---
title: SRO Deposits
description: Manage SRO deposit payments through the Customer Portal.
keywords: ["SRO", "deposits", "payments", "repairs"]
---

# SRO Deposits

Enable customers to pay SRO deposits and track repair status.

## Overview

*Documentation content to be added.*

## Deposit Payments

*Documentation content to be added.*

## Status Tracking

*Documentation content to be added.*
EOF

cat > contents/docs/customer-portal/customization/index.mdx << 'EOF'
---
title: Portal Customization
description: Customize the Customer Portal to match your brand.
keywords: ["customization", "branding", "configuration"]
---

# Portal Customization

Customize the Customer Portal to reflect your brand identity.

## Branding Options

*Documentation content to be added.*

## Configuration Settings

*Documentation content to be added.*

## Advanced Customization

*Documentation content to be added.*
EOF

# Appointment Scheduler
cat > contents/docs/appointment-scheduler/index.mdx << 'EOF'
---
title: Appointment Scheduler
description: Embed appointment scheduling on your website with GSX integration.
keywords: ["appointments", "scheduler", "GSX", "booking"]
---

# Appointment Scheduler

Enable customers to book appointments directly on your website with seamless GSX integration.

## Overview

The Appointment Scheduler allows you to:

- Embed a booking widget on your website
- Sync with Apple GSX automatically
- Send automated email notifications
- Manage appointment availability

## Getting Started

<CardGrid>
  <Card
    title="Setup & Configuration"
    description="Configure your appointment scheduler settings."
    href="/docs/appointment-scheduler/setup"
  />
  <Card
    title="GSX Integration"
    description="Connect with Apple GSX for seamless syncing."
    href="/docs/appointment-scheduler/gsx-integration"
  />
  <Card
    title="Website Embedding"
    description="Add the scheduler to your website."
    href="/docs/appointment-scheduler/embedding"
  />
  <Card
    title="Email Notifications"
    description="Automated email workflows for appointments."
    href="/docs/appointment-scheduler/notifications"
  />
</CardGrid>
EOF

cat > contents/docs/appointment-scheduler/setup/index.mdx << 'EOF'
---
title: Appointment Scheduler Setup
description: Configure your appointment scheduler settings.
keywords: ["setup", "configuration", "appointments"]
---

# Appointment Scheduler Setup

Learn how to set up and configure the Appointment Scheduler.

## Initial Configuration

*Documentation content to be added.*

## Availability Settings

*Documentation content to be added.*

## Service Types

*Documentation content to be added.*
EOF

cat > contents/docs/appointment-scheduler/gsx-integration/index.mdx << 'EOF'
---
title: GSX Integration for Appointments
description: Connect appointment scheduler with Apple GSX.
keywords: ["GSX", "Apple", "integration", "sync"]
---

# GSX Integration

Configure GSX integration for automatic appointment syncing.

## Overview

*Documentation content to be added.*

## Configuration

*Documentation content to be added.*

## Syncing Process

*Documentation content to be added.*
EOF

cat > contents/docs/appointment-scheduler/embedding/index.mdx << 'EOF'
---
title: Website Embedding
description: Embed the appointment scheduler on your website.
keywords: ["embed", "widget", "website", "integration"]
---

# Website Embedding

Add the appointment scheduler to your website.

## Embedding Options

*Documentation content to be added.*

## Customization

*Documentation content to be added.*

## Technical Integration

*Documentation content to be added.*
EOF

cat > contents/docs/appointment-scheduler/notifications/index.mdx << 'EOF'
---
title: Email Notifications
description: Configure automated email notifications for appointments.
keywords: ["email", "notifications", "automation"]
---

# Email Notifications

Set up automated email workflows for appointment confirmations and reminders.

## Notification Types

*Documentation content to be added.*

## Email Templates

*Documentation content to be added.*

## Configuration

*Documentation content to be added.*
EOF

# GSX Integration
cat > contents/docs/gsx/index.mdx << 'EOF'
---
title: GSX Integration
description: Automated email workflows and appointment sync with Apple GSX.
keywords: ["GSX", "Apple", "integration", "automation"]
---

# GSX Integration

Automate your Apple GSX workflows with Weevio Cloud.

## Overview

For Apple Authorized Service Providers, GSX Integration provides:

- Automated email notifications for GSX appointments
- Appointment synchronization
- Customer communication workflows
- Seamless PIMS integration

## Features

<CardGrid>
  <Card
    title="Setup & Authentication"
    description="Connect your GSX credentials securely."
    href="/docs/gsx/setup"
  />
  <Card
    title="Email Workflows"
    description="Automated customer email notifications."
    href="/docs/gsx/email-workflows"
  />
  <Card
    title="Appointment Sync"
    description="Sync GSX appointments automatically."
    href="/docs/gsx/appointment-sync"
  />
  <Card
    title="Troubleshooting"
    description="Common issues and solutions."
    href="/docs/gsx/troubleshooting"
  />
</CardGrid>
EOF

cat > contents/docs/gsx/setup/index.mdx << 'EOF'
---
title: GSX Setup & Authentication
description: Configure your GSX integration credentials.
keywords: ["GSX", "setup", "authentication", "credentials"]
---

# GSX Setup & Authentication

Connect your Apple GSX account to Weevio Cloud.

## Prerequisites

*Documentation content to be added.*

## Configuration Steps

*Documentation content to be added.*

## Authentication

*Documentation content to be added.*

## Testing Connection

*Documentation content to be added.*
EOF

cat > contents/docs/gsx/email-workflows/index.mdx << 'EOF'
---
title: Automated Email Workflows
description: Configure automated email notifications for GSX appointments.
keywords: ["email", "automation", "workflows", "GSX"]
---

# Automated Email Workflows

Set up automated email notifications for GSX appointment events.

## Overview

*Documentation content to be added.*

## Workflow Types

*Documentation content to be added.*

## Email Templates

*Documentation content to be added.*

## Configuration

*Documentation content to be added.*
EOF

cat > contents/docs/gsx/appointment-sync/index.mdx << 'EOF'
---
title: Appointment Sync
description: Synchronize appointments between GSX and Weevio Cloud.
keywords: ["sync", "appointments", "GSX", "integration"]
---

# Appointment Sync

Automatically sync appointments between GSX and your system.

## Overview

*Documentation content to be added.*

## Sync Process

*Documentation content to be added.*

## Managing Synced Appointments

*Documentation content to be added.*
EOF

cat > contents/docs/gsx/troubleshooting/index.mdx << 'EOF'
---
title: GSX Troubleshooting
description: Common issues and solutions for GSX integration.
keywords: ["troubleshooting", "issues", "GSX", "support"]
---

# GSX Troubleshooting

Common issues and solutions for GSX integration.

## Common Issues

*Documentation content to be added.*

## Connection Problems

*Documentation content to be added.*

## Sync Issues

*Documentation content to be added.*

## Getting Help

*Documentation content to be added.*
EOF

echo "Placeholder files created successfully!"
