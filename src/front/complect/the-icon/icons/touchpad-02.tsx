import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.1957 14.144L13 15.7622V7.5C13 6.67157 13.6716 6 14.5 6C15.3284 6 16 6.67157 16 7.5V11.9821L17.7888 12.2969C19.2636 12.5405 20.001 12.6623 20.5205 13.005C21.3784 13.571 22 14.4211 22 15.662C22 16.5263 21.806 17.1062 21.3344 18.6642C21.0352 19.6528 20.8855 20.1471 20.6416 20.5384C20.2399 21.1826 19.6473 21.6529 18.9653 21.8689C18.551 22.0001 18.0779 22.0001 17.1316 22.0001H16.3295C15.0714 22.0001 14.4424 22.0001 13.8824 21.7459C13.7819 21.7003 13.6838 21.6488 13.5883 21.5917C13.056 21.2734 12.6594 20.7358 11.866 19.6606L9.29778 16.1797C8.90312 15.6448 8.90049 14.8792 9.29146 14.3411C9.76138 13.6942 10.6245 13.6049 11.1957 14.144Z',
  d2: 'M22 10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2H10C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10V12C2 13.8638 2 14.7956 2.30448 15.5307C2.71046 16.5108 3.48915 17.2895 4.46927 17.6955C5.05932 17.9399 5.77617 17.9881 7 17.9977',
  d3: 'M12.25 7.49976C12.25 6.25712 13.2574 5.24976 14.5 5.24976C15.7426 5.24976 16.75 6.25712 16.75 7.49976V11.3523L17.9388 11.5613L17.9388 11.5613C18.6526 11.6792 19.2277 11.7742 19.6874 11.8841C20.1589 11.9969 20.5692 12.1384 20.9335 12.3787C21.9564 13.0536 22.75 14.1188 22.75 15.6618C22.75 16.586 22.5465 17.2551 22.1536 18.5476C21.8863 19.4312 21.5754 20.458 21.278 20.935C20.7881 21.7206 20.0548 22.3104 19.1917 22.5837C18.6649 22.7505 18.0814 22.7502 17.2499 22.7499H17.2498L16.1784 22.7499H16.1783C15.0676 22.7505 14.2826 22.751 13.5723 22.4285C13.446 22.3712 13.3229 22.3066 13.2034 22.2352C12.5397 21.8383 12.0579 21.1846 11.3554 20.2316L8.69427 16.6247C8.10532 15.8265 8.10174 14.7024 8.68467 13.9C9.40932 12.9025 10.7915 12.7392 11.7028 13.5911L12.25 14.0819V7.49976Z',
  d4: 'M14.0261 1.24976C15.8081 1.24973 17.2444 1.24971 18.3741 1.40083C19.547 1.55772 20.5345 1.89337 21.3188 2.67373C22.1031 3.45409 22.4405 4.43665 22.5982 5.60361C22.75 6.72761 22.75 8.15673 22.75 9.92978V10.0009C22.75 10.5379 22.3125 10.9732 21.7727 10.9732C21.233 10.9732 20.7955 10.5379 20.7955 10.0009C20.7955 8.13993 20.7934 6.84202 20.6611 5.86273C20.5325 4.91142 20.2974 4.40765 19.9367 4.04884C19.5761 3.69002 19.0698 3.45608 18.1137 3.32818C17.1294 3.19652 15.8249 3.19445 13.9545 3.19445H10.0455C8.17507 3.19445 6.87058 3.19652 5.88634 3.32818C4.93021 3.45608 4.42389 3.69002 4.06326 4.04884C3.70263 4.40765 3.4675 4.91142 3.33895 5.86273C3.20662 6.84202 3.20455 8.13993 3.20455 10.0009V11.9456C3.20455 12.865 3.20508 13.5059 3.23948 14.0075C3.27328 14.5004 3.33648 14.7874 3.42772 15.0066C3.72528 15.7214 4.29603 16.2892 5.01441 16.5853C5.38829 16.7394 5.89873 16.7956 7.12123 16.8051C7.66095 16.8093 8.09508 17.248 8.09088 17.785C8.08668 18.322 7.64576 18.7539 7.10604 18.7497C5.93651 18.7407 5.04583 18.7032 4.26643 18.382C3.06914 17.8885 2.11789 16.9421 1.62195 15.7508C1.41563 15.2552 1.33005 14.7318 1.28946 14.1399C1.24999 13.5643 1.24999 12.857 1.25 11.9802V11.9801V9.92975V9.92973C1.24997 8.15671 1.24995 6.7276 1.40183 5.60361C1.55952 4.43665 1.89687 3.45409 2.68118 2.67373C3.4655 1.89337 4.45303 1.55772 5.6259 1.40083C6.75558 1.24971 8.19193 1.24973 9.97393 1.24976H9.97395H14.026H14.0261Z',
  d5: 'M11.3525 14.1439L13.1786 15.7621V7.41238C13.1786 6.63234 13.8024 6 14.572 6C15.3411 6 15.9648 6.6316 15.9655 7.41117L15.9685 12.5883H19.6786C20.9607 12.5883 22 13.6417 22 14.9412V19.647C22 20.9465 20.9607 22 19.6786 22H13.6429L9.31905 16.1796C8.8962 15.6447 8.89338 14.8792 9.31228 14.341C9.81576 13.6941 10.7406 13.6048 11.3525 14.1439Z',
  d6: 'M22 10V2H2V17.9977H7',
  d7: 'M1.25 2.22235C1.25 1.68534 1.68754 1.25 2.22727 1.25H21.7727C22.3125 1.25 22.75 1.68534 22.75 2.22235V10.0011H20.7955V3.1947H3.20455V16.8053H7.11364V18.75H2.22727C1.68754 18.75 1.25 18.3147 1.25 17.7777V2.22235Z',
  d8: 'M12.4286 7.41238C12.4286 6.2277 13.3787 5.25 14.572 5.25C15.7646 5.25 16.7145 6.22656 16.7155 7.41053L16.7181 11.8383H19.6786C21.3844 11.8383 22.75 13.2371 22.75 14.9412V19.647C22.75 21.3512 21.3844 22.75 19.6786 22.75H13.2657L8.72302 16.635C8.09355 15.8295 8.09197 14.6877 8.72043 13.8803C9.48691 12.8956 10.9091 12.7538 11.8483 13.5811L11.8499 13.5826L12.4286 14.0954V7.41238Z',
};

export const IconTouchpad02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touchpad-02-stroke-rounded IconTouchpad02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTouchpad02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touchpad-02-duotone-rounded IconTouchpad02DuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTouchpad02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touchpad-02-twotone-rounded IconTouchpad02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTouchpad02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touchpad-02-solid-rounded IconTouchpad02SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouchpad02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touchpad-02-bulk-rounded IconTouchpad02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouchpad02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touchpad-02-stroke-sharp IconTouchpad02StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTouchpad02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touchpad-02-solid-sharp IconTouchpad02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfTouchpad02: TheIconSelfPack = {
  name: 'Touchpad02',
  StrokeRounded: IconTouchpad02StrokeRounded,
  DuotoneRounded: IconTouchpad02DuotoneRounded,
  TwotoneRounded: IconTouchpad02TwotoneRounded,
  SolidRounded: IconTouchpad02SolidRounded,
  BulkRounded: IconTouchpad02BulkRounded,
  StrokeSharp: IconTouchpad02StrokeSharp,
  SolidSharp: IconTouchpad02SolidSharp,
};