import {
  CompanyProfile,
  Product,
  CaseStudy,
  ServiceOffering,
  InquiryFormData,
} from './types';
import {
  fallbackCompanyProfile,
  fallbackProducts,
  fallbackCaseStudies,
  fallbackServices,
} from './fallback-data';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') || 'https://api.ethertrix.com';

const FETCH_TIMEOUT_MS = 3500;

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
    const res = await fetchWithTimeout(`${API_BASE_URL}/api/company`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    return json.data || fallbackCompanyProfile;
  } catch (error) {
    console.warn('[API] Could not fetch company profile from backend, using fallback:', (error as Error).message);
    return fallbackCompanyProfile;
  }
}

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/api/products`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    return json.data || fallbackProducts;
  } catch (error) {
    console.warn('[API] Could not fetch products from backend, using fallback:', (error as Error).message);
    return fallbackProducts;
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/api/products/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    return json.data || fallbackProducts.find((p) => p.slug === slug) || null;
  } catch (error) {
    console.warn(`[API] Could not fetch product ${slug}, using fallback:`, (error as Error).message);
    return fallbackProducts.find((p) => p.slug === slug) || null;
  }
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/api/case-studies`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    return json.data || fallbackCaseStudies;
  } catch (error) {
    console.warn('[API] Could not fetch case studies from backend, using fallback:', (error as Error).message);
    return fallbackCaseStudies;
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/api/case-studies/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    return json.data || fallbackCaseStudies.find((c) => c.slug === slug) || null;
  } catch (error) {
    console.warn(`[API] Could not fetch case study ${slug}, using fallback:`, (error as Error).message);
    return fallbackCaseStudies.find((c) => c.slug === slug) || null;
  }
}

export async function getServices(): Promise<ServiceOffering[]> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/api/services`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    return json.data || fallbackServices;
  } catch (error) {
    console.warn('[API] Could not fetch services from backend, using fallback:', (error as Error).message);
    return fallbackServices;
  }
}

export async function submitInquiry(
  data: InquiryFormData
): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/inquiries`, {
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
