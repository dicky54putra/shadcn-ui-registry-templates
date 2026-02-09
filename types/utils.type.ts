export interface Option {
  label: string;
  value: string;
}

export interface IModal {
  close?: () => void;
  isOpen?: boolean;
  open?: () => void;
}

export type Classnames<T extends string> = Partial<Record<T, string>>;

export interface ResponseData<T> {
  data: T;
}
