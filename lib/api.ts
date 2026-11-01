import {
  CompanyProfile,
  SportsOSProduct,
  ServiceCategory,
  ClientProject,
  HowWeWorkStep,
  Product,
  CaseStudy,
  ServiceOffering,
  InquiryFormData,
} from './types';
import {
  fallbackCompanyProfile,
  fallbackSportsOS,
  fallbackServicesData,
  fallbackClientProjects,
  fallbackHowWeWork,
  fallbackProducts,
  fallbackCaseStudies,
  fallbackServices,
} from './fallback-data';

// Hostinger Nginx exposes the Fastify backend under /v1/
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') || 'https://api.ethertrix.com/v1';

const FETCH_TIMEOUT_MS = 4000;

async function fetchWithTimeout(url: string, options: RequestInit = {}): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    return response;
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function getCompanyProfile(): Promise<CompanyProfile> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/company`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    return json.data || fallbackCompanyProfile;
  } catch (error) {
    console.warn('[API] getCompanyProfile fallback:', (error as Error).message);
    return fallbackCompanyProfile;
  }
}

export async function getSportsOS(): Promise<SportsOSProduct> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/products/sports-os`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    return json.data || fallbackSportsOS;
  } catch (error) {
    console.warn('[API] getSportsOS fallback:', (error as Error).message);
    return fallbackSportsOS;
  }
}

export async function getServiceCategories(): Promise<ServiceCategory[]> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/services`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    return json.data || fallbackServicesData;
  } catch (error) {
    console.warn('[API] getServiceCategories fallback:', (error as Error).message);
    return fallbackServicesData;
  }
}

export async function getClientProjects(): Promise<ClientProject[]> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/case-studies`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    return json.data || fallbackClientProjects;
  } catch (error) {
    console.warn('[API] getClientProjects fallback:', (error as Error).message);
    return fallbackClientProjects;
  }
}

export async function getClientProjectBySlug(slug: string): Promise<ClientProject | null> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/case-studies/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    return json.data || fallbackClientProjects.find((p) => p.slug === slug) || null;
  } catch (error) {
    console.warn(`[API] getClientProjectBySlug (${slug}) fallback:`, (error as Error).message);
    return fallbackClientProjects.find((p) => p.slug === slug) || null;
  }
}

export async function getHowWeWork(): Promise<HowWeWorkStep[]> {
  return fallbackHowWeWork;
}

// Backward compatibility methods
export async function getProducts(): Promise<Product[]> {
  return fallbackProducts;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return fallbackProducts.find((p) => p.slug === slug) || null;
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return fallbackCaseStudies;
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  return fallbackCaseStudies.find((c) => c.slug === slug) || null;
}

export async function getServices(): Promise<ServiceOffering[]> {
  return fallbackServices;
}

export async function submitInquiry(
  data: InquiryFormData
): Promise<{ success: boolean; message: string }> {
  try {
    // In browser, use same-origin proxy to eliminate CORS errors completely
    const targetUrl = typeof window !== 'undefined' ? '/api/inquiries' : `${API_BASE_URL}/inquiries`;

    const res = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.error || 'Failed to submit inquiry');
    }

    return {
      success: true,
      message: json.message || 'Inquiry submitted successfully',
    };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message || 'Connection error. Please try again or email us.',
    };
  }
}
