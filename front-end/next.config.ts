import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "'SAMEORIGIN'",
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
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.vercel-insights.com https://va.vercel-scripts.com https://*.vercel.app https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://www.google.com; " +
      "connect-src 'self' https://api.emailjs.com https://cdn.vercel-insights.com https://vitals.vercel-insights.com https://*.vercel.app https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://www.google.com wss: https:; " +
      "img-src 'self' data: https: blob:; " +
      "style-src 'self' 'unsafe-inline' https:; " +
      "font-src 'self' https: data:; " +
      "frame-src 'self'; " +
      "manifest-src 'self'; " +
      "media-src 'self' https: blob:; " +
      "object-src 'none'; " +
      "base-uri 'self'; " +
      "form-action 'self'; " +
      "frame-ancestors 'self'",
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
