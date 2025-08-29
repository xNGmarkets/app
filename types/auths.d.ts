export type ResetPassword = {
  uniqueVerificationCode: string;
  newPassword: string;
};

export type IUpdatePassword = {
  oldPassword: string;
  newPassword: string;
};

export type PasswordUpdate = {
  userId: string;
  oldPassword: string;
  newPassword: string;
};

export type ApiResponse = {
  success: boolean;
  statusCode?: number;
  message: string;
};

export type SendOTP = {
  email: string;
};

export type VerifyOTP = {
  email: string;
  uniqueVerificationCode: string;
};

export type VerifyOTPResponse = ApiResponse;

export type SocialAuth = {
  thirdPartyUserId: string;
  provider: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  profileImageUrl: string;
};

export type SignUp = {
  email: string;
  fullName: string;
  password: string;
};

export type Login = {
  email: string;
  password: string;
};

export type UserData = {
  Last_sign_in?: string;
  Sign_in_counts?: number;
  allowEmailNotifications?: boolean;
  allowPushNotifications?: boolean;
  allowSmsNotifications?: boolean;
  createdAt?: string;
  createdDate?: string;
  email?: string;
  fullName?: string;
  firstName?: string;
  lastName?: string;
  notifyBackOrderReservationCanceled?: boolean;
  notifyBackOrderReservationComplete?: boolean;
  notifyBillingCycleExpired?: boolean;
  notifyBillingCycleExpiryReminder?: boolean;
  notifyPaymentComplete?: boolean;
  notifyRenewalFailed?: boolean;
  notifyRenewalScheduled?: boolean;
  notifyRenewalSuccess?: boolean;
  notifySupportTicketUpdate?: boolean;
  profileImageUrl?: string;
  role?: string;
  status?: boolean;
  updatedAt?: string;
  walletBalance?: number;
  _id?: string;
};

export type AuthResponse = ApiResponse & {
  data: { user: UserData } & AccessToken;
};

export type UserDataAndAccessToken = AccessToken & {
  user: UserData;
};

export type AccessToken = { token: string };

export type EncryptData = {
  userData: UserDataAndAccessToken;
  expires: Date;
};

export type UserSession = {
  userData: UserDataAndAccessToken;
  expires: Date;
  iat: number;
  exp: number;
};

export type RequestPasswordReset = {
  identifier: string;
};
