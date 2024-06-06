import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 9L16.5218 18.4136C16.2728 19.9992 16.1483 20.7921 15.5864 21.2644C14.3865 22.273 9.54699 22.217 8.41358 21.2644C7.85167 20.7921 7.72718 19.9992 7.47819 18.4136L6 9',
  d2: 'M6 9L6.89443 7.21115C7.43234 6.13531 7.7013 5.5974 8.18461 5.2987C8.66791 5 9.26932 5 10.4721 5L13.5279 5C14.7307 5 15.3321 5 15.8154 5.2987C16.2987 5.5974 16.5677 6.13531 17.1056 7.21115L18 9',
  d3: 'M5 9H19',
  d4: 'M12 9V2',
  d5: 'M6.5 13.0112C6.77548 12.5167 8.61157 11.7101 9.93388 12.1057C11.5868 12.6002 15.0207 15.4838 17.5 13.0113',
  d6: 'M10.0078 17L9.99883 17',
  d7: 'M14.0078 19L13.9988 19',
  d8: 'M8.41467 21.2644C7.85277 20.7921 7.72827 19.9992 7.47928 18.4136L6.60938 12.8737C7.09733 12.3834 8.72961 11.7451 9.93498 12.1057C11.5542 12.5902 14.8827 15.3674 17.3485 13.1556L16.5229 18.4136C16.2739 19.9992 16.1494 20.7921 15.5875 21.2644C14.3876 22.273 9.54809 22.217 8.41467 21.2644Z',
  d9: 'M10.4258 4H13.5742C14.136 3.99997 14.6313 3.99994 15.0443 4.04264C15.4917 4.0889 15.926 4.19148 16.3411 4.44805C16.7563 4.70463 17.0422 5.04721 17.2837 5.42667C17.5066 5.77698 17.7281 6.22001 17.9793 6.72247L18.618 8H19C19.5523 8 20 8.44772 20 9C20 9.55229 19.5523 10 19 10H5C4.44772 10 4 9.55229 4 9C4 8.44772 4.44772 8 5 8H5.38197L6 6.76393C6.00694 6.75006 6.01385 6.73624 6.02074 6.72246C6.27193 6.22001 6.49341 5.77697 6.71631 5.42667C6.95775 5.04721 7.24373 4.70463 7.65887 4.44805C8.07402 4.19148 8.50833 4.0889 8.95571 4.04264C9.36871 3.99994 9.86402 3.99997 10.4258 4ZM7.61803 8H16.382L16.2111 7.65836C15.933 7.10208 15.7571 6.75301 15.5963 6.50033C15.448 6.2672 15.3578 6.19148 15.2897 6.14935C15.2215 6.10723 15.1135 6.06046 14.8386 6.03204C14.5407 6.00124 14.1498 6 13.5279 6H10.4721C9.8502 6 9.4593 6.00124 9.1614 6.03204C8.88654 6.06046 8.77849 6.10723 8.71034 6.14935C8.64218 6.19148 8.55202 6.2672 8.40369 6.50033C8.24291 6.75301 8.06699 7.10208 7.78885 7.65836L7.61803 8Z',
  d10: 'M12 1C12.5523 1 13 1.44772 13 2V9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9V2C11 1.44772 11.4477 1 12 1Z',
  d11: 'M6.98804 8.84487C6.90237 8.29927 6.39062 7.92643 5.84502 8.0121C5.29942 8.09778 4.92658 8.60953 5.01225 9.15513L6.49975 18.6281C6.61622 19.3701 6.71799 20.0184 6.86848 20.5358C7.03132 21.0956 7.28183 21.6193 7.77029 22.0299C8.26088 22.4422 8.99433 22.661 9.65213 22.7896C10.358 22.9275 11.171 22.9961 11.9705 22.9998C12.7699 23.0036 13.5888 22.9426 14.3057 22.8062C14.9787 22.6783 15.7232 22.4559 16.23 22.0299C16.7185 21.6193 16.969 21.0956 17.1318 20.5358C17.2823 20.0184 17.3841 19.3701 17.5005 18.6281L18.988 9.15513C19.0737 8.60953 18.7009 8.09778 18.1553 8.0121C17.6097 7.92643 17.0979 8.29927 17.0122 8.84487L16.369 12.9413C15.5638 13.3927 14.6522 13.3068 13.6512 12.962C13.0187 12.7441 12.3993 12.437 11.8043 12.1348L11.6668 12.0648C11.1471 11.8001 10.6034 11.5231 10.1488 11.3871C9.28355 11.1283 8.32523 11.2733 7.59257 11.5113C7.53308 11.5306 7.47426 11.5508 7.41625 11.5718L6.98804 8.84487ZM11.0078 17C11.0078 17.5523 10.5601 18 10.0078 18H9.99883C9.44655 18 8.99883 17.5523 8.99883 17C8.99883 16.4477 9.44655 16 9.99883 16H10.0078C10.5601 16 11.0078 16.4477 11.0078 17ZM14.0078 20C14.5601 20 15.0078 19.5523 15.0078 19C15.0078 18.4477 14.5601 18 14.0078 18H13.9988C13.4465 18 12.9988 18.4477 12.9988 19C12.9988 19.5523 13.4465 20 13.9988 20H14.0078Z',
  d12: 'M5.84502 8.01225C6.39062 7.92658 6.90237 8.29942 6.98804 8.84502L8.46623 18.2586C8.59481 19.0774 8.67841 19.5975 8.78888 19.9773C8.89102 20.3284 8.98371 20.4373 9.05716 20.499C9.13327 20.563 9.42978 20.7084 10.0357 20.8268C10.5934 20.9358 11.2778 20.9967 11.9798 21C12.6821 21.0033 13.3689 20.9487 13.9322 20.8416C14.5395 20.7261 14.85 20.5773 14.9431 20.499C15.0166 20.4373 15.1093 20.3284 15.2114 19.9773C15.3219 19.5975 15.4055 19.0774 15.5341 18.2586L17.0122 8.84502C17.0979 8.29942 17.6097 7.92658 18.1553 8.01225C18.7009 8.09792 19.0737 8.60967 18.988 9.15527L17.5005 18.6283C17.3841 19.3703 17.2823 20.0186 17.1318 20.5359C16.969 21.0957 16.7185 21.6194 16.23 22.03C15.7232 22.456 14.9787 22.6784 14.3057 22.8064C13.5888 22.9427 12.7699 23.0037 11.9705 23C11.171 22.9963 10.358 22.9276 9.65213 22.7897C8.99433 22.6612 8.26088 22.4424 7.77029 22.03C7.28183 21.6194 7.03132 21.0957 6.86848 20.5359C6.71799 20.0186 6.61622 19.3702 6.49975 18.6282L5.01225 9.15527C4.92658 8.60967 5.29942 8.09792 5.84502 8.01225Z',
  d13: 'M11.0078 17C11.0078 17.5523 10.5601 18 10.0078 18L9.99883 18C9.44655 18 8.99883 17.5523 8.99883 17C8.99883 16.4477 9.44655 16 9.99883 16L10.0078 16C10.5601 16 11.0078 16.4477 11.0078 17Z',
  d14: 'M15.0078 19C15.0078 19.5523 14.5601 20 14.0078 20L13.9988 20C13.4465 20 12.9988 19.5523 12.9988 19C12.9988 18.4477 13.4465 18 13.9988 18L14.0078 18C14.5601 18 15.0078 18.4477 15.0078 19Z',
  d15: 'M18 9L16.5 22H7.5L6 9',
  d16: 'M6 9L8 5L16 5L18 9',
  d17: 'M4 9H20',
  d18: 'M7.3291 4.66459C7.45615 4.4105 7.71584 4.25 7.99992 4.25H15.9999C16.284 4.25 16.5437 4.4105 16.6707 4.66459L18.6707 8.66459L17.3291 9.33541L15.5364 5.75H8.46345L6.67074 9.33541L5.3291 8.66459L7.3291 4.66459Z',
  d19: 'M20 9.75H4V8.25H20V9.75Z',
  d20: 'M12.75 1.25V9.25H11.25V1.25H12.75Z',
  d21: 'M6.74597 8.91406L7.06878 11.7117C7.23463 11.6383 7.41095 11.5707 7.59354 11.5114C8.32621 11.2734 9.28453 11.1284 10.1497 11.3872C10.6043 11.5232 11.1481 11.8002 11.6677 12.0649L11.8053 12.1349C12.4003 12.4371 13.0197 12.7442 13.6522 12.9621C14.8484 13.3741 15.9171 13.4165 16.829 12.6137L17.2559 8.91406L18.746 9.086L17.246 22.086C17.2023 22.4644 16.8819 22.75 16.5009 22.75H7.50092C7.11996 22.75 6.79953 22.4644 6.75586 22.086L5.25586 9.086L6.74597 8.91406ZM11.0078 17C11.0078 17.5523 10.5601 18 10.0078 18H9.99883C9.44655 18 8.99883 17.5523 8.99883 17C8.99883 16.4477 9.44655 16 9.99883 16H10.0078C10.5601 16 11.0078 16.4477 11.0078 17ZM14.0078 20C14.5601 20 15.0078 19.5523 15.0078 19C15.0078 18.4477 14.5601 18 14.0078 18H13.9988C13.4465 18 12.9988 18.4477 12.9988 19C12.9988 19.5523 13.4465 20 13.9988 20H14.0078Z',
};

export const IconBubbleTea02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-tea-02-stroke-rounded IconBubbleTea02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleTea02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-tea-02-duotone-rounded IconBubbleTea02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleTea02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-tea-02-twotone-rounded IconBubbleTea02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleTea02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-tea-02-solid-rounded IconBubbleTea02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleTea02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-tea-02-bulk-rounded IconBubbleTea02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleTea02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-tea-02-stroke-sharp IconBubbleTea02StrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleTea02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-tea-02-solid-sharp IconBubbleTea02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBubbleTea02: TheIconSelfPack = {
  name: 'BubbleTea02',
  StrokeRounded: IconBubbleTea02StrokeRounded,
  DuotoneRounded: IconBubbleTea02DuotoneRounded,
  TwotoneRounded: IconBubbleTea02TwotoneRounded,
  SolidRounded: IconBubbleTea02SolidRounded,
  BulkRounded: IconBubbleTea02BulkRounded,
  StrokeSharp: IconBubbleTea02StrokeSharp,
  SolidSharp: IconBubbleTea02SolidSharp,
};