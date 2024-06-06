import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.2852 19.3647L5.82243 20.7506C4.39103 21.0164 3.67534 21.1493 3.26303 20.737C2.85072 20.3246 2.98362 19.6089 3.24943 18.1774L4.63523 10.7143C4.85745 9.51762 4.96856 8.91925 5.36302 8.5577C5.75749 8.19616 6.47889 8.1256 7.9217 7.98448C9.31227 7.84847 10.6283 7.37177 12 6L18 12.0005C16.6283 13.3723 16.1513 14.6874 16.0151 16.0781C15.8738 17.5211 15.8031 18.2426 15.4416 18.637C15.0801 19.0314 14.4818 19.1425 13.2852 19.3647Z',
  d2: 'M11 15.2105C10.4405 15.1197 9.92895 14.8763 9.52632 14.4737M9.52632 14.4737C9.12368 14.0711 8.8803 13.5595 8.78947 13M9.52632 14.4737L4 20',
  d3: 'M12 6C12.7123 4.9491 13.6771 3.1812 15.1065 3.01098C16.0822 2.89479 16.8906 3.70312 18.5072 5.31978L18.6802 5.49277C20.2969 7.10944 21.1052 7.91777 20.989 8.8935C20.8188 10.3229 19.0509 11.2877 18 12',
  d4: 'M17.0124 2.91296C17.5835 3.33594 18.2225 3.97495 18.9947 4.74721L19.2524 5.00494C20.0247 5.77714 20.6637 6.4161 21.0867 6.98724C21.5322 7.58883 21.8233 8.22593 21.7333 8.9823C21.6142 9.98235 20.9503 10.7392 20.3119 11.2856C20.0817 11.4826 19.8328 11.6697 19.5863 11.8434C19.3972 11.9767 19.3026 12.0434 19.1935 12.034C19.0845 12.0246 19.0006 11.9408 18.8329 11.7731L12.2267 5.16629C12.0591 4.99859 11.9752 4.91474 11.9658 4.80568C11.9565 4.69663 12.0232 4.60205 12.1565 4.41291C12.3301 4.16661 12.5171 3.9178 12.714 3.68767C13.2604 3.0493 14.0173 2.38545 15.0173 2.26636C15.7737 2.17628 16.4108 2.46744 17.0124 2.91296ZM17.6962 13.5207C17.8504 13.2972 17.9274 13.1854 17.9176 13.0773C17.9078 12.9691 17.8184 12.8798 17.6396 12.701L11.3001 6.36087C11.1213 6.18211 11.032 6.09273 10.9238 6.08287C10.8157 6.07301 10.7039 6.15007 10.4804 6.30419C9.60257 6.90934 8.74752 7.15067 7.84867 7.23859L7.81043 7.24233C7.12158 7.30969 6.55052 7.36553 6.10476 7.45302C5.65128 7.54202 5.20709 7.68378 4.85624 8.00535C4.52064 8.31294 4.34167 8.69559 4.21703 9.1049C4.0998 9.4899 4.00997 9.97376 3.90524 10.5379L2.50174 18.0963C2.37759 18.7646 2.26935 19.3473 2.2524 19.8126C2.24646 19.9758 2.25074 20.1436 2.27426 20.3104L8.2124 14.3722C8.00518 13.993 7.86957 13.5826 7.80103 13.1604C7.71253 12.6152 8.08271 12.1016 8.62786 12.0131C9.17301 11.9246 9.68668 12.2948 9.77518 12.8399C9.83572 13.2128 9.99189 13.5266 10.2321 13.7667C10.4722 14.0069 10.786 14.1631 11.1589 14.2236C11.704 14.3121 12.0742 14.8258 11.9857 15.3709C11.8972 15.9161 11.3835 16.2863 10.8384 16.1978C10.4162 16.1292 10.0058 15.9936 9.62662 15.7864L3.68723 21.7258C3.85496 21.7497 4.02376 21.7541 4.18785 21.7481C4.65316 21.7312 5.23577 21.6229 5.90403 21.4988L13.4621 20.0952L13.4621 20.0952C14.0262 19.9905 14.51 19.9006 14.895 19.7834C15.3042 19.6588 15.6869 19.4798 15.9944 19.1443C16.316 18.7935 16.4578 18.3493 16.5468 17.8958C16.6344 17.45 16.6903 16.8789 16.7578 16.1899L16.7615 16.1517C16.8495 15.2529 17.091 14.3983 17.6962 13.5207Z',
  d5: 'M17.6962 13.5207C17.8504 13.2972 17.9274 13.1854 17.9176 13.0773C17.9078 12.9691 17.8184 12.8798 17.6396 12.701L11.3001 6.36087C11.1213 6.18211 11.032 6.09273 10.9238 6.08287C10.8157 6.07301 10.7039 6.15007 10.4804 6.30419C9.60257 6.90934 8.74752 7.15067 7.84867 7.23859L7.81043 7.24233C7.12158 7.30969 6.55052 7.36553 6.10476 7.45302C5.65128 7.54202 5.20709 7.68378 4.85624 8.00535C4.52064 8.31294 4.34167 8.69559 4.21703 9.1049C4.0998 9.4899 4.00997 9.97376 3.90524 10.5379L2.50174 18.0963C2.37759 18.7646 2.26935 19.3473 2.2524 19.8126C2.23437 20.3077 2.31043 20.8456 2.73266 21.2678C3.15489 21.6901 3.6928 21.7661 4.18785 21.7481C4.65316 21.7312 5.23577 21.6229 5.90403 21.4988L13.4621 20.0952C14.0262 19.9905 14.51 19.9006 14.895 19.7834C15.3042 19.6588 15.6869 19.4798 15.9944 19.1443C16.316 18.7935 16.4578 18.3493 16.5468 17.8958C16.6344 17.45 16.6903 16.8789 16.7578 16.1899L16.7615 16.1517C16.8495 15.2529 17.091 14.3983 17.6962 13.5207Z',
  d6: 'M18.9947 4.74721C18.2225 3.97495 17.5835 3.33594 17.0124 2.91296C16.4108 2.46744 15.7737 2.17628 15.0173 2.26636C14.0173 2.38545 13.2604 3.0493 12.714 3.68767C12.5171 3.9178 12.3301 4.16661 12.1565 4.41291C12.0232 4.60205 11.9565 4.69663 11.9658 4.80568C11.9752 4.91474 12.0591 4.99859 12.2267 5.16629L18.8329 11.7731C19.0006 11.9408 19.0845 12.0246 19.1935 12.034C19.3026 12.0434 19.3972 11.9767 19.5863 11.8434C19.8328 11.6697 20.0817 11.4826 20.3119 11.2856C20.9503 10.7392 21.6142 9.98235 21.7333 8.9823C21.8233 8.22593 21.5322 7.58883 21.0867 6.98724C20.6637 6.4161 20.0247 5.77714 19.2524 5.00494L18.9947 4.74721Z',
  d7: 'M15.6497 10.7109L11.4551 6.51597C11.4597 6.52084 11.4644 6.52567 11.4692 6.53044L15.6497 10.7109Z',
  d8: 'M3.68766 21.7255L9.62673 15.7864C10.0059 15.9936 10.4163 16.1292 10.8385 16.1978C11.3836 16.2863 11.8973 15.9161 11.9858 15.3709C12.0743 14.8258 11.7041 14.3121 11.159 14.2236C10.7861 14.1631 10.4723 14.0069 10.2322 13.7667C9.992 13.5266 9.83582 13.2128 9.77529 12.8399C9.68679 12.2948 9.17312 11.9246 8.62797 12.0131C8.08282 12.1016 7.71264 12.6153 7.80114 13.1604C7.86967 13.5826 8.00529 13.993 8.21251 14.3722L2.27441 20.3103C2.3223 20.6495 2.44979 20.9845 2.73276 21.2675C3.01513 21.5498 3.34924 21.6774 3.68766 21.7255Z',
  d9: 'M11.9854 5.99212L14.9822 2L21.975 8.9862L17.9791 11.9803',
  d10: 'M18.0468 11.945L12.0334 5.9746L4.47107 9.51232L2.96035 20.9976C2.95949 21.0041 2.96507 21.0096 2.9716 21.0088L14.4684 19.4632L18.0468 11.945Z',
  d11: 'M11.5186 15.5719L9.93788 14.011M9.93788 14.011L8.41218 12.4872M9.93788 14.011L3.65699 20.2966',
  d12: 'M10.2501 6.25928L3.36673 9.47149L1.75 21.1917L8.4328 14.5093L7.4215 13.4979L8.47904 12.4405L11.5589 15.5207L10.5014 16.5781L9.49023 15.5669L2.8065 22.2501L14.5291 20.6338L17.7413 13.7505L10.2501 6.25928Z',
  d13: 'M15.0518 1.96901C14.8985 1.81574 14.6863 1.73652 14.4701 1.75188C14.2539 1.76725 14.0549 1.87569 13.9249 2.0491L11.4512 5.34738L18.6525 12.5487L21.9508 10.075C22.1242 9.9449 22.2326 9.74599 22.248 9.52977C22.2633 9.31355 22.1841 9.1013 22.0308 8.94802L15.0518 1.96901Z',
};

export const IconPenTool03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-03-stroke-rounded IconPenTool03StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPenTool03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-03-duotone-rounded IconPenTool03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPenTool03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-03-twotone-rounded IconPenTool03TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPenTool03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-03-solid-rounded IconPenTool03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPenTool03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-03-bulk-rounded IconPenTool03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPenTool03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-03-stroke-sharp IconPenTool03StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPenTool03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-03-solid-sharp IconPenTool03SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPenTool03: TheIconSelfPack = {
  name: 'PenTool03',
  StrokeRounded: IconPenTool03StrokeRounded,
  DuotoneRounded: IconPenTool03DuotoneRounded,
  TwotoneRounded: IconPenTool03TwotoneRounded,
  SolidRounded: IconPenTool03SolidRounded,
  BulkRounded: IconPenTool03BulkRounded,
  StrokeSharp: IconPenTool03StrokeSharp,
  SolidSharp: IconPenTool03SolidSharp,
};