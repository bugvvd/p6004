import type {FieldProps} from '../Field/types';

export type ActionOptionProps = {
  name: string;
  callback?: () => void;
  options?: any;
};

export interface FormProps {
  field?: Array<FieldProps>;
  action?: Array<ActionOptionProps>;
}
