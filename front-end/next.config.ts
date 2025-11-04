import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), microphone=(), camera=()",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com va.vercel-scripts.com www.google-analytics.com www.googletagmanager.com google.com; " +
      "style-src 'self' 'unsafe-inline'; " +
      "font-src 'self' fonts.gstatic.com fonts.googleapis.com data:; " +
      "img-src 'self' data: https: blob: cdn.vercel-insights.com va.vercel-scripts.com www.google-analytics.com www.googletagmanager.com www.gstatic.com csi.gstatic.com; " +
      "media-src 'self' data:; " +
      "connect-src 'self' cdn.vercel-insights.com vitals.vercel-insights.com va.vercel-scripts.com www.google-analytics.com www.googletagmanager.com api.emailjs.com https://chase-the-pop.vercel.app wss:; " +
      "frame-src 'self' google.com www.google.com; " +
      "frame-ancestors 'self'; " +
      "object-src 'none'; " +
      "base-uri 'self'; " +
      "form-action 'self'; " +
      "upgrade-insecure-requests; " +
      "block-all-mixed-content",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
