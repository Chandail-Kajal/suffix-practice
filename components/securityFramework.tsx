/* eslint-disable @next/next/no-img-element */
"use client";

type SecurityItem = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

type SecurityCard = {
  id: number;
  heading: string;
  highlighted?: boolean;
  items: SecurityItem[];
};

const securityCards: SecurityCard[] = [
  {
    id: 1,
    heading: "Certified Security Framework",
    highlighted: true,
    items: [
      {
        id: 1,
        title: "ISO 27001:2022 Certified",
        description:
          "Globally recognized information security standard.",
        icon: "/assets/security/ISO.svg",
      },
      {
        id: 2,
        title: "ISO 27701:2019 Certified",
        description:
          "Privacy management framework ensuring data protection.",
        icon: "/assets/security/ISO.svg",
      },
      {
        id: 3,
        title: "Data Classification Policy",
        description:
          "Organizes data by sensitivity for proper handling.",
        icon: "/assets/security/datacollection.svg",
      },
      {
        id: 4,
        title: "Data Retention Policy",
        description:
          "Defines secure storage and deletion timelines.",
        icon: "/assets/security/Datarentention.svg",
      },
      {
        id: 5,
        title: "Business Continuity Plan",
        description:
          "Ensures uninterrupted operations during disruptions.",
        icon: "/assets/security/businesscontinuity.svg",
      },
      {
        id: 6,
        title: "User Authentication & Onboarding Checks",
        description:
          "Verifies and controls user access from day one.",
        icon: "/assets/security/Userauthentication.svg",
      },
    ],
  },

  {
    id: 2,
    heading: "Network & Access Controls",
    items: [
      {
        id: 1,
        title: "Multi-layer Firewall Protection",
        description:
          "Shields networks from unauthorized access.",
        icon: "/assets/security/multilayer.svg",
      },
      {
        id: 2,
        title: "Enterprise-grade Antivirus",
        description:
          "Detects and prevents malware threats.",
        icon: "/assets/security/enterprise.svg",
      },
      {
        id: 3,
        title: "Segregated Network Zones",
        description:
          "Isolates critical systems for added security.",
        icon: "/assets/security/segregated.svg",
      },
      {
        id: 4,
        title: "Remote Access Restrictions",
        description:
          "Controls and monitors offsite system access.",
        icon: "/assets/security/access-control.svg",
      },
      {
        id: 5,
        title: "Role-Based Admin Privileges",
        description:
          "Limits system control based on user roles.",
        icon: "/assets/security/real-based.svg",
      },
      {
        id: 6,
        title: "Approved Software Only",
        description:
          "Prevents installation of unverified applications.",
        icon: "/assets/security/approvedsoftware.svg",
      },
    ],
  },

  {
    id: 3,
    heading: "Workplace Security & Compliance",
    items: [
      {
        id: 1,
        title: "Clean Desk Policy",
        description:
          "Minimizes risk of data exposure on physical workspaces.",
        icon: "/assets/security/clean.svg",
      },
      {
        id: 2,
        title: "CCTV Surveillance",
        description:
          "Monitors premises for security and compliance.",
        icon: "/assets/security/cctv.svg",
      },
      {
        id: 3,
        title: "Restricted Physical Access",
        description:
          "Limits entry to authorized personnel only.",
        icon: "/assets/security/restricted.svg",
      },
      {
        id: 4,
        title: "No External Device Usage",
        description:
          "Prevents data leakage through removable media.",
        icon: "/assets/security/no-external.svg",
      },
      {
        id: 5,
        title: "No Printer Access",
        description:
          "Reduces risk of unauthorized physical document copies.",
        icon: "/assets/security/printer.svg",
      },
      {
        id: 6,
        title: "Social Media Usage Prohibited",
        description:
          "Prevents distractions and data risks on corporate systems.",
        icon: "/assets/security/social-media.svg",
      },
    ],
  },

  {
    id: 4,
    heading: "Operational Governance",
    items: [
      {
        id: 1,
        title: "Managed Admin Privileges",
        description:
          "Controls high-level system permissions.",
        icon: "/assets/security/admin.svg",
      },
      {
        id: 2,
        title: "Periodic Security Audits",
        description:
          "Regular checks to ensure compliance and security.",
        icon: "/assets/security/periodic-security.svg",
      },
      {
        id: 3,
        title: "Compliance with DPDP Act",
        description:
          "Adheres to personal data protection laws.",
        icon: "/assets/security/compliance.svg",
      },
      {
        id: 4,
        title: "Incident Monitoring & Response",
        description:
          "Rapid detection and mitigation of threats.",
        icon: "/assets/security/incident.svg",
      },
      {
        id: 5,
        title: "Employee Security Training",
        description:
          "Ongoing awareness to prevent security lapses.",
        icon: "/assets/security/employee.svg",
      },
      {
        id: 6,
        title: "Access & Activity Logging",
        description:
          "Maintains audit trails for accountability.",
        icon: "/assets/security/logging.svg",
      },
    ],
  },
];

export default function SecurityFrameworkSection() {
  return (
    <section className="w-full bg-[#F6F6F6] py-16">
      <div className="mx-auto grid max-w-362.5 grid-cols-1 gap-8 px-5 md:grid-cols-2">
        
        {securityCards.map((card) => (
          <div
            key={card.id}
            className={`relative rounded-sm border border-[#007C99] p-8 ${
              card.highlighted ? "bg-[#006D77]" : "bg-transparent"
            }`}
          >
            
            {/* HEADING */}
            <div className="absolute -top-4.5 left-5 bg-[#F6F6F6] px-3">
              <h2
                className={`text-[30px] font-bold leading-tight ${
                  card.highlighted
                    ? "text-[#006D77]"
                    : "text-[#006D77]"
                }`}
              >
                {card.heading}
              </h2>
            </div>

            {/* ITEMS */}
            <div className="mt-4 space-y-7">
              {card.items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  
                  {/* ICON */}
                  <div className="mt-1 shrink-0">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-7 w-7 object-contain"
                    />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3
                      className={`text-[18px] font-semibold leading-tight ${
                        card.highlighted
                          ? "text-white"
                          : "text-[#006D77]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-1 text-[13px] leading-normal ${
                        card.highlighted
                          ? "text-white/85"
                          : "text-[#6B6B6B]"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}