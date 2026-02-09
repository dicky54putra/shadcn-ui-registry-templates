import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { numberFormatRules } from "./regex.lib";
import { twMerge } from "./twMerge.lib";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const recordToArray = <T>(record: Record<string, T>) =>
  Object.entries(record).map(([value, label]) => ({ label, value }));

export const arrayToRecord = <T>(array: Array<T>, key: keyof T) =>
  array.reduce(
    (acc, item) => {
      const recordKey = item[key];
      if (typeof recordKey === "string" || typeof recordKey === "number") {
        acc[recordKey as string] = item;
      }
      return acc;
    },
    {} as Record<string, T>,
  );

export const extractNumbers = (input?: string) => {
  return input?.replace(/\D/g, ""); // Removes all non-digits
};

export const getFilenameFromUrl = (url?: string) => {
  return url?.split("/").pop();
};

export const formatDateForPayload = (date?: string) =>
  date ? format(date, "yyyy-MM-dd") : "";

export const numberFormat = (value: string) => {
  return value.replace(/[^0-9]/g, "").replace(numberFormatRules, ".");
};

export const numberFormatReverse = (value: string) => {
  return parseFloat(value.replace(/\./g, "") ?? "0");
};

export const ifEmpty = <T>(value: T, defaultValue: T) => {
  if (
    value === undefined ||
    value === null ||
    value === false ||
    (typeof value === "string" && value.trim() === "")
  ) {
    return defaultValue;
  }
  return value;
};
