export enum FieldTypes {
  plain,
}

export type FieldProps = {
  type: 'plain' | 'picker';
  name: string;
  placeholder?: string;
  description?: string;
  onValueChange?: any; // setState,  type for setState: React.Dispatch<React.SetStateAction<string | null>>
  validate: any;
  options?: any;
};
