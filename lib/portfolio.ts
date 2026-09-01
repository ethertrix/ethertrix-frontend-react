export type PortfolioCategory = "Operations" | "Legal Tech" | "Logistics" | "Events";

export interface PortfolioProject {
  slug: string;
  title: string;
  category: PortfolioCategory;
  summary: string;
  challenge: string;
  solution: string;
  capabilities: string[];
  stack: string[];
  platforms: string[];
  image: string | null;
  gallery: string[];
}

export interface PortfolioResponse {
  company: string;
  count: number;
  categories: PortfolioCategory[];
  projects: PortfolioProject[];
}

export const fallbackPortfolio: PortfolioResponse = {
  company: "Ethertrix",
  count: 5,
  categories: ["Operations", "Legal Tech", "Logistics", "Events"],
  projects: [
    {
      slug: "jl-mtc-operations",
      title: "JL MTC Operations Management",
      category: "Operations",
      summary: "A multi-depot transport platform connecting fleet, people, payroll, safety, and reporting workflows.",
      challenge: "Daily fleet operations, attendance, payroll, and incident records were fragmented across depots and roles.",
      solution: "A central administration portal and mobile workspace give operations teams and field staff one role-aware system of record.",
      capabilities: ["Multi-depot operations", "Driver onboarding", "Attendance and payroll", "Incident management", "Revenue and trip analytics", "PDF and Excel reporting"],
      stack: ["Flutter Web", "Flutter Android", "Fastify", "MySQL", "Sequelize", "GetX", "Firebase Cloud Messaging"],
      platforms: ["Web administration", "Android employee app"],
      image: "/portfolio/jl-mtc-summary.jpg",
      gallery: ["/portfolio/jl-mtc-onboarding.jpg", "/portfolio/jl-mtc-mobile.jpg"],
    },
    {
      slug: "dispatch-manager",
      title: "Dispatch Manager",
      category: "Operations",
      summary: "A dispatch platform that replaces spreadsheet-heavy auction processing with controlled, searchable operations.",
      challenge: "Manual Excel workflows created duplicate records, inconsistent documents, and slow courier preparation.",
      solution: "A role-based web application combines bulk entry, duplicate detection, cover-letter automation, label printing, and reporting.",
      capabilities: ["Excel and CSV import", "Duplicate detection", "Cover-letter generation", "Label printing", "Operational analytics", "Role-based access"],
      stack: ["Flutter Web", "Fastify", "MySQL", "Sequelize", "PDF generation"],
      platforms: ["Web administration"],
      image: "/portfolio/dispatch-analytics.jpg",
      gallery: ["/portfolio/dispatch-login.jpg"],
    },
    {
      slug: "mr-legal",
      title: "Mr Legal",
      category: "Legal Tech",
      summary: "A multi-role legal services marketplace for consultations, legal notices, agreements, payments, and live advocate tracking.",
      challenge: "Clients needed a faster way to discover, book, and pay verified advocates while providers needed controlled service workflows.",
      solution: "Connected user, advocate, and admin experiences manage discovery, booking, navigation, payments, verification, and feedback.",
      capabilities: ["Advocate onboarding", "Paid service booking", "Live location tracking", "Digital agreements", "Wallet and transactions", "Ratings and notifications"],
      stack: ["Flutter", "Fastify", "MySQL", "Sequelize", "GetX", "Razorpay", "Google Maps"],
      platforms: ["User mobile app", "Advocate mobile app", "Web administration"],
      image: "/portfolio/mr-legal-home.jpg",
      gallery: ["/portfolio/mr-legal-advocate.jpg"],
    },
    {
      slug: "jl-trail-tracker",
      title: "JL Trail Tracker",
      category: "Logistics",
      summary: "A driver and administration system for live transit visibility, daily reporting, and consolidated analytics.",
      challenge: "Transit teams needed reliable pickup-to-delivery visibility and consistent daily evidence from drivers.",
      solution: "OTP-secured driver workflows feed live tracking, multilingual reports, files, and transit status into an admin monitoring console.",
      capabilities: ["Live driver tracking", "Pickup-to-delivery routing", "Daily reports", "PDF reports", "File storage", "Multilingual workflows"],
      stack: ["Flutter", "Fastify", "MySQL", "REST APIs"],
      platforms: ["Driver mobile app", "Web administration"],
      image: null,
      gallery: [],
    },
    {
      slug: "join-liberty-marathon",
      title: "Join Liberty Marathon",
      category: "Events",
      summary: "An event platform covering participant registration, secure payments, content operations, and race-day communication.",
      challenge: "Participants and organisers needed one reliable path from event discovery through paid registration and administration.",
      solution: "A responsive public experience and secure admin portal manage categories, registrations, payments, content, galleries, and exports.",
      capabilities: ["Dynamic registration", "Race categories", "Payment verification", "Receipt generation", "Gallery and FAQ management", "Participant exports"],
      stack: ["Flutter Web", "Fastify", "MySQL", "Sequelize", "Razorpay", "PM2", "Nginx"],
      platforms: ["Public website", "Web administration"],
      image: null,
      gallery: [],
    },
  ],
};

export async function getPortfolio(): Promise<PortfolioResponse> {
  const endpoint = process.env.PORTFOLIO_API_URL ?? "https://api.ethertrix.com/v1/portfolio";

  try {
    const response = await fetch(endpoint, { next: { revalidate: 300 } });
    if (!response.ok) return fallbackPortfolio;
    const portfolio = (await response.json()) as PortfolioResponse;
    return portfolio.projects?.length ? portfolio : fallbackPortfolio;
  } catch {
    return fallbackPortfolio;
  }
}
