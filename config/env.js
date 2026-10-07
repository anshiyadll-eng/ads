📄 config/env.js
import dotenv from 'dotenv';
dotenv.config();

export const env = {
  BASE_URL: process.env.BASE_URL || 'http://localhost:4000',
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT) || 4000,
  CORS_ORIGINS: process.env.CORS_ORIGINS || '*',
  SOCKET_CORS_ORIGIN: process.env.SOCKET_CORS_ORIGIN || 'http://localhost:3000',
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_KEY: process.env.SUPABASE_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  DATABASE_URL: process.env.DATABASE_URL,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  JWT_SECRET: process.env.JWT_SECRET,
  GMAIL_USER: process.env.GMAIL_USER,
  GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: parseInt(process.env.SMTP_PORT) || 465,
  SMTP_CONNECTION_TIMEOUT: parseInt(process.env.SMTP_CONNECTION_TIMEOUT) || 10000,
  SMTP_GREETING_TIMEOUT: parseInt(process.env.SMTP_GREETING_TIMEOUT) || 10000,
  SMTP_SOCKET_TIMEOUT: parseInt(process.env.SMTP_SOCKET_TIMEOUT) || 10000,
  OTP_EXPIRY_MINUTES: parseInt(process.env.OTP_EXPIRY_MINUTES) || 5,
  OTP_RESEND_COOLDOWN_SECONDS: parseInt(process.env.OTP_RESEND_COOLDOWN_SECONDS) || 5,
  OTP_MAX_ATTEMPTS: parseInt(process.env.OTP_MAX_ATTEMPTS) || 20,
  SESSION_ACCESS_TTL_SECONDS: parseInt(process.env.SESSION_ACCESS_TTL_SECONDS) || 900,
  SESSION_REFRESH_TTL_DAYS: parseInt(process.env.SESSION_REFRESH_TTL_DAYS) || 30,
  APP_NAME: process.env.APP_NAME || 'AG Chat',
  SUPPORT_EMAIL: process.env.SUPPORT_EMAIL || 'support@agchat.example.com'
};