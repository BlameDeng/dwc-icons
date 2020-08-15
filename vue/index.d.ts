import { ComponentOptionsWithObjectProps } from "vue";

interface Props {
  name: string;
  spinning: boolean | string;
  size: string | number;
}

export declare const iconList: string[];
export declare const Icon: ComponentOptionsWithObjectProps<Props>;
