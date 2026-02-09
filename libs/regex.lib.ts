import { PhoneNumberUtil } from "google-libphonenumber";

export const passwordRules =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*/\\'`;=+\-_~(),.?":{}|<>])[^\s]{8,}$/;

export const emailRules =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9\\-]+\.)+[a-zA-Z]{2,}))$/;

export const phoneNumberRules =
  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{5})(?: *x(\d+))?\s*$/;

export const numberRules = /^-?\d+(\.\d+)?$/;

export const numberFormatRules = /\B(?=(\d{3})+(?!\d))/g;

export const websiteRules =
  /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})\/?.*$/;
export const linkedinRules =
  /^(https?:\/\/)?([a-zA-Z0-9-]+\.)?linkedin\.com\/[a-zA-Z0-9@:%._\+~#=\/-]+\/?$/;
export const igRules =
  /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9@:%._\+~#=\/-]+\/?$/;
export const xRules =
  /^(https?:\/\/)?(www\.)?x\.com\/[a-zA-Z0-9@:%._\+~#=\/-]+\/?$/;
export const fbRules =
  /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9@:%._\+~#=\/-]+\/?$/;

export const chamberOfCommerceRules =
  /\b(HRA|HRB)\s?\d{1,6}\b|\b(ATU)\s?\d{1,9}\b|\b(CHE)\s?\d{1,9}\b$/;

export const emptyWyswyg = /^(<p><\/p>\n|<p>&nbsp;<\/p>\n)$/;

export const acceptPdf = "application/pdf";
export const acceptImage = "image/png, image/jpeg, image/webp";

const phoneUtil = PhoneNumberUtil.getInstance();
export const phoneNumberValidate = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch {
    return false;
  }
};
