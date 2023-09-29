export const API_HOST = process.env.NODE_ENV === "production"
  ? process.env.REACT_APP_API_HOST
  : (process.env.REACT_APP_API_HOST_DEV || "http://52.66.240.213:4019");

export const SITE_HOST = process.env.NODE_ENV === "production"
  ? process.env.REACT_APP_CLIENT_HOST
  : (process.env.REACT_APP_CLIENT_HOST_DEV || "http://52.66.240.213:4018");

export const DOCUMENTATION_HOST = process.env.NODE_ENV === "production" ? "https://docs.chartbrew.com" : "http://localhost:8080";

export const APP_VERSION = process.env.REACT_APP_VERSION;
export const ONE_ACCOUNT_ENABLED = !!process.env.REACT_APP_ONE_ACCOUNT_EXTERNAL_ID;
