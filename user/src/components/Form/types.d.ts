import type {FieldProps} from '../Field/types';

export declare type ActionOptionProps = {
  name: string;
  callback?: () => void;
  options?: any;
};

export declare interface FormProps {
  field?: Array<FieldProps>;
  action?: Array<ActionOptionProps>;
}
