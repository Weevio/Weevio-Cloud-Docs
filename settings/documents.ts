import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    heading: "Getting Started",
    title: "Introduction",
    href: "/introduction",
    items: [
      {
        title: "What is Weevio Cloud?",
        href: "/what-is-weevio",
      },
      {
        title: "Quick Start Guide",
        href: "/quick-start",
      }
    ],
  },
  {
    spacer: true,
  },
  {
    heading: "Core Platform",
    title: "Weevio Store",
    href: "/store",
    items: [
      {
        title: "Orders",
        href: "/orders",
      },
      {
        title: "Service Repair Orders",
        href: "/sros",
      },
      {
        title: "Customer Management",
        href: "/customers",
      },
      {
        title: "Inventory",
        href: "/inventory",
      },
    ],
  },
  {
    title: "Customer Portal",
    href: "/customer-portal",
    items: [
      {
        title: "Overview",
        href: "/overview",
      },
      {
        title: "Self-Service Features",
        href: "/features",
      },
      {
        title: "Order Tracking",
        href: "/order-tracking",
      },
      {
        title: "Invoice Payments",
        href: "/invoice-payments",
      },
      {
        title: "SRO Deposits",
        href: "/sro-deposits",
      },
      {
        title: "Customization",
        href: "/customization",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    heading: "Integrations",
    title: "Appointment Scheduler",
    href: "/appointment-scheduler",
    items: [
      {
        title: "Setup & Configuration",
        href: "/setup",
      },
      {
        title: "GSX Integration",
        href: "/gsx-integration",
      },
      {
        title: "Website Embedding",
        href: "/embedding",
      },
      {
        title: "Email Notifications",
        href: "/notifications",
      },
    ],
  },
  {
    title: "GSX Integration",
    href: "/gsx",
    items: [
      {
        title: "Setup & Authentication",
        href: "/setup",
      },
      {
        title: "Automated Email Workflows",
        href: "/email-workflows",
      },
      {
        title: "Appointment Sync",
        href: "/appointment-sync",
      },
      {
        title: "Troubleshooting",
        href: "/troubleshooting",
      },
    ],
  },
  {
    title: "Shopify Integration",
    href: "/shopify",
    items: [
      {
        title: "Overview",
        href: "/overview",
      },
      {
        title: "Inventory Sync",
        href: "/inventory-sync",
      },
      {
        title: "Order Sync",
        href: "/order-sync",
      },
      {
        title: "Variant Selector Widget",
        href: "/variant-selector",
      },
      {
        title: "Cross-Sell Widget",
        href: "/cross-sell",
      },
      {
        title: "API Reference",
        href: "/api",
      },
    ],
  },
  {
    spacer: true,
  },
  /*
  {
    title: "API Reference",
    href: "/api",
    items: [
      {
        title: "Authentication",
        href: "/authentication",
      },
      {
        title: "Endpoints",
        href: "/endpoints",
      },
      {
        title: "Webhooks",
        href: "/webhooks",
      },
      {
        title: "Rate Limits",
        href: "/rate-limits",
      },
    ],
  },
  {
    spacer: true,
  },
  */
  {
    heading: "Support",
    title: "Help & Support",
    href: "/support",
    items: [
      {
        title: "FAQs",
        href: "/faqs",
      },
      {
        title: "Troubleshooting",
        href: "/troubleshooting",
      },
      {
        title: "Contact Support",
        href: "/contact",
      },
      {
        title: "Release Notes",
        href: "/release-notes",
      },
    ],
  },
]
