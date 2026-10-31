export interface BookingFormData {
  name: string;
  organization?: string;
  schoolName?: string;
  email: string;
  phone?: string;
  topic?: string;
  message: string;
}

export interface SendEmailResult {
  success: boolean;
  message?: string;
  provider?: string;
}

export declare const ADMIN_EMAIL: string;
export declare const ADMIN_NAME: string;

export declare function sendBookingEmail(data: BookingFormData): Promise<SendEmailResult>;
export declare const sendEmail: typeof sendBookingEmail;
