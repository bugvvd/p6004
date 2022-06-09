export declare type ActionOptionProps = {
  name: string;
  callback?: () => void;
  options?: any;
};

export declare type CardStyleType = {

}

export declare interface CardProps {
  title?: string;
  subTitle?: string;
  content?: string;
  actions?: Array<ActionOptionProps>;
  style?: CardStyleType;
}
