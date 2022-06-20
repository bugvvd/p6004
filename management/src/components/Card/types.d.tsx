export type CardProps = {
  priority: 'high' | 'medium' | 'low';
  title: string;
  description?: string;
  operable?: boolean;
  enableMessage?: boolean;
  enableCall?: boolean;
  goto: () => void;
  testID: string
};
