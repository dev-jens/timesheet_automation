import dotenv from 'dotenv';
dotenv.config();


const PRIVATE_KEY = process.env.private_key.replace(/\\n/g, '\n');


export const authConfig = {
  type: process.env.type,
  project_id: process.env.project_id,
  private_key_id: process.env.private_key_id,
  private_key: PRIVATE_KEY,
  client_email: process.env.client_email,
  client_id: process.env.client_id,
  auth_uri: process.env.auth_uri,
  token_uri: process.env.token_uri,
  auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
  client_x509_cert_url: process.env.auth_provider_x509_cert_url,
  universe_domain: process.env.universe_domain,
  calendar_id: process.env.calendar_id,
  scope: ["https://www.googleapis.com/auth/calendar", "https://www.googleapis.com/auth/calendar.events", "https://www.googleapis.com/auth/admin.directory.resource.calendar"]
};