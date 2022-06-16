export type UnitCardProps = {
    priority: 'emergency' | 'notification' | 'regular';
    title: string;
    description?: string;
    operable?: boolean;
    enableMessage?: boolean;
    enableCall?: boolean;
  };
  