import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 20V22M19 20V22',
  d2: 'M17.5556 10H6.44444C4.34931 10 3.30175 10 2.65087 10.5858C2 11.1716 2 12.1144 2 14V16C2 17.8856 2 18.8284 2.65087 19.4142C3.30175 20 4.34931 20 6.44444 20H17.5556C19.6507 20 20.6983 20 21.3491 19.4142C22 18.8284 22 17.8856 22 16V14C22 12.1144 22 11.1716 21.3491 10.5858C20.6983 10 19.6507 10 17.5556 10Z',
  d3: 'M12 10.0001L12 20.0001',
  d4: 'M16 15.0001L17 15.0001',
  d5: 'M7 15.0001L8 15.0001',
  d6: 'M8 2C6.1038 2 4.51109 3.27976 4.0638 5.01012C3.8557 5.81516 4.15776 6 4.95386 6H11.0461C11.8422 6 12.1443 5.81516 11.9362 5.01012C11.4889 3.27976 9.8962 2 8 2Z',
  d7: 'M8 6V10',
  d8: 'M11 6V7.5',
  d9: 'M5 18.875C5.55228 18.875 6 19.3227 6 19.875V21.875C6 22.4273 5.55228 22.875 5 22.875C4.44772 22.875 4 22.4273 4 21.875V19.875C4 19.3227 4.44772 18.875 5 18.875ZM19 18.875C19.5523 18.875 20 19.3227 20 19.875V21.875C20 22.4273 19.5523 22.875 19 22.875C18.4477 22.875 18 22.4273 18 21.875V19.875C18 19.3227 18.4477 18.875 19 18.875Z',
  d10: 'M10.65 9.125C10.9328 9.125 11.0743 9.125 11.1621 9.21286C11.25 9.30073 11.25 9.44215 11.25 9.725L11.25 20.025C11.25 20.3078 11.25 20.4493 11.1621 20.5371C11.0743 20.625 10.9328 20.625 10.65 20.625H6.39604H6.39602C5.38966 20.625 4.56629 20.625 3.91598 20.5463C3.24107 20.4647 2.63898 20.2875 2.14916 19.8467C1.64802 19.3957 1.43568 18.8236 1.3396 18.1804C1.24994 17.5801 1.24997 16.8261 1.25 15.9316L1.25 13.8184C1.24997 12.924 1.24994 12.1698 1.3396 11.5696C1.43568 10.9264 1.64802 10.3543 2.14916 9.90331C2.63898 9.46247 3.24107 9.28532 3.91598 9.20365C4.5663 9.12496 5.38963 9.12498 6.39601 9.125L10.65 9.125ZM12.75 9.725C12.75 9.44215 12.75 9.30073 12.8379 9.21286C12.9257 9.125 13.0672 9.125 13.35 9.125H17.604C18.6103 9.12498 19.4337 9.12496 20.084 9.20365C20.7589 9.28532 21.361 9.46247 21.8509 9.90331C22.352 10.3543 22.5643 10.9264 22.6604 11.5696C22.7501 12.1698 22.75 12.9238 22.75 13.8183V13.8183V13.8183V13.8184V13.8184V15.9316V15.9316V15.9316V15.9316V15.9317C22.75 16.8261 22.7501 17.5802 22.6604 18.1804C22.5643 18.8236 22.352 19.3957 21.8509 19.8467C21.361 20.2875 20.7589 20.4647 20.084 20.5463C19.4337 20.625 18.6104 20.625 17.604 20.625H17.604L13.35 20.625C13.0672 20.625 12.9257 20.625 12.8379 20.5371C12.75 20.4493 12.75 20.3078 12.75 20.025L12.75 9.725ZM15.25 14.875C15.25 14.4608 15.5858 14.125 16 14.125H17C17.4142 14.125 17.75 14.4608 17.75 14.875C17.75 15.2892 17.4142 15.625 17 15.625H16C15.5858 15.625 15.25 15.2892 15.25 14.875ZM7 14.125C6.58579 14.125 6.25 14.4608 6.25 14.875C6.25 15.2892 6.58579 15.625 7 15.625H8C8.41422 15.625 8.75 15.2892 8.75 14.875C8.75 14.4608 8.41422 14.125 8 14.125H7Z',
  d11: 'M9 6.625V9.875C9 10.4273 8.55228 10.875 8 10.875C7.44772 10.875 7 10.4273 7 9.875V6.625L4.95352 6.625C4.73351 6.625 4.50345 6.61301 4.28939 6.56629C4.07559 6.51962 3.81806 6.42563 3.6055 6.21616C3.14063 5.75807 3.22692 5.12458 3.33733 4.69742C3.86989 2.63719 5.76033 1.125 7.99966 1.125C10.239 1.125 12.1294 2.63719 12.662 4.69742C12.7724 5.12458 12.8587 5.75808 12.3938 6.21616C12.1943 6.41281 11.9551 6.50768 11.7497 6.55717V7.375C11.7497 7.78921 11.4139 8.125 10.9997 8.125C10.5855 8.125 10.2497 7.78921 10.2497 7.375V6.625H9Z',
  d12: 'M12.75 9.725C12.75 9.44216 12.75 9.30074 12.8379 9.21287C12.9257 9.125 13.0672 9.125 13.35 9.125H17.604C18.6103 9.12498 19.4337 9.12497 20.084 9.20366C20.7589 9.28532 21.361 9.46248 21.8509 9.90332C22.352 10.3543 22.5643 10.9264 22.6604 11.5696C22.7501 12.1699 22.75 12.9239 22.75 13.8184V15.9316C22.75 16.8261 22.7501 17.5801 22.6604 18.1804C22.5643 18.8236 22.352 19.3957 21.8509 19.8467C21.361 20.2875 20.7589 20.4647 20.084 20.5463C19.4337 20.625 18.6104 20.625 17.604 20.625H13.35C13.0672 20.625 12.9257 20.625 12.8379 20.5371C12.75 20.4493 12.75 20.3078 12.75 20.025L12.75 9.725Z',
  d13: 'M10.65 9.125C10.9328 9.125 11.0743 9.125 11.1621 9.21287C11.25 9.30074 11.25 9.44216 11.25 9.725L11.25 20.025C11.25 20.3078 11.25 20.4493 11.1621 20.5371C11.0743 20.625 10.9328 20.625 10.65 20.625H6.39604C5.38967 20.625 4.56629 20.625 3.91597 20.5463C3.24107 20.4647 2.63898 20.2875 2.14916 19.8467C1.64802 19.3957 1.43568 18.8236 1.3396 18.1804C1.24993 17.5802 1.24997 16.8261 1.25 15.9316V13.8184C1.24997 12.924 1.24993 12.1699 1.3396 11.5696C1.43568 10.9264 1.64802 10.3543 2.14916 9.90332C2.63898 9.46248 3.24107 9.28532 3.91597 9.20366C4.5663 9.12497 5.38963 9.12498 6.39601 9.125H10.65Z',
  d14: 'M15.25 14.875C15.25 14.4608 15.5858 14.125 16 14.125L17 14.125C17.4142 14.125 17.75 14.4608 17.75 14.875C17.75 15.2892 17.4142 15.625 17 15.625L16 15.625C15.5858 15.625 15.25 15.2892 15.25 14.875Z',
  d15: 'M6.25 14.875C6.25 14.4608 6.58579 14.125 7 14.125L8 14.125C8.41421 14.125 8.75 14.4608 8.75 14.875C8.75 15.2892 8.41421 15.625 8 15.625L7 15.625C6.58579 15.625 6.25 15.2892 6.25 14.875Z',
  d16: 'M12.3938 6.21616C12.1943 6.41281 11.9551 6.50768 11.7497 6.55717C11.6134 6.5975 11.269 6.61919 11.1138 6.625H10.2497H4.95352C4.73351 6.625 4.50345 6.61301 4.28939 6.56629C4.07559 6.51962 3.81806 6.42563 3.6055 6.21616C3.14063 5.75807 3.22692 5.12458 3.33733 4.69742C3.86989 2.63719 5.76033 1.125 7.99966 1.125C10.239 1.125 12.1294 2.63719 12.662 4.69742C12.7724 5.12458 12.8587 5.75808 12.3938 6.21616Z',
  d17: 'M10.25 7.37642V6.62642H11.1142C11.2693 6.62062 11.6137 6.59892 11.75 6.55859V7.37642C11.75 7.79064 11.4142 8.12642 11 8.12642C10.5858 8.12642 10.25 7.79064 10.25 7.37642Z',
  d18: 'M4 20.5547C4.54733 20.614 5.21215 20.6224 6 20.6235V21.8737C6 22.426 5.55228 22.8737 5 22.8737C4.44772 22.8737 4 22.426 4 21.8737V20.5547Z',
  d19: 'M20 20.5547V21.8737C20 22.426 19.5523 22.8737 19 22.8737C18.4477 22.8737 18 22.426 18 21.8737V20.6235C18.7879 20.6224 19.4527 20.614 20 20.5547Z',
  d20: 'M9 9.125H7V6.625H9V9.125Z',
  d21: 'M5 19V22M19 19V22',
  d22: 'M22 11H2V19H22V11Z',
  d23: 'M12 11L12 19',
  d24: 'M16 15.0001L18 15.0001',
  d25: 'M6 15L8 15.0001',
  d26: 'M8 2C5.79086 2 4 3.79086 4 6H12C12 3.79086 10.2091 2 8 2Z',
  d27: 'M8 6V11',
  d28: 'M11 6V8',
  d29: 'M4 22.25V19.25H6V22.25H4ZM18 22.25V19.25H20V22.25H18Z',
  d30: 'M11.25 20.25H2C1.80109 20.25 1.61032 20.171 1.46967 20.0303C1.32902 19.8897 1.25 19.6989 1.25 19.5L1.25 11.5C1.25 11.0858 1.58579 10.75 2 10.75L11.25 10.75L11.25 20.25ZM12.75 10.75L12.75 20.25L22 20.25C22.4142 20.25 22.75 19.9142 22.75 19.5V11.5C22.75 11.0858 22.4142 10.75 22 10.75H12.75ZM18 16.25L16 16.25V14.75H18V16.25ZM5.99991 16.25L7.99991 16.2501L8 14.7501L6 14.75L5.99991 16.25Z',
  d31: 'M3.25 6.5C3.25 3.87665 5.37665 1.75 8 1.75C10.6234 1.75 12.75 3.87665 12.75 6.5V7.25H3.25V6.5Z',
  d32: 'M7.25 11.5V6.5H8.75V11.5H7.25Z',
  d33: 'M10.25 8.5V6.5H11.75V8.5H10.25Z',
};

export const IconTableLamp02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-lamp-02-stroke-rounded IconTableLamp02StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTableLamp02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-lamp-02-duotone-rounded IconTableLamp02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTableLamp02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-lamp-02-twotone-rounded IconTableLamp02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTableLamp02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-lamp-02-solid-rounded IconTableLamp02SolidRounded"
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

export const IconTableLamp02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-lamp-02-bulk-rounded IconTableLamp02BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTableLamp02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-lamp-02-stroke-sharp IconTableLamp02StrokeSharp"
    >
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTableLamp02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-lamp-02-solid-sharp IconTableLamp02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d33} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTableLamp02: TheIconSelfPack = {
  name: 'TableLamp02',
  StrokeRounded: IconTableLamp02StrokeRounded,
  DuotoneRounded: IconTableLamp02DuotoneRounded,
  TwotoneRounded: IconTableLamp02TwotoneRounded,
  SolidRounded: IconTableLamp02SolidRounded,
  BulkRounded: IconTableLamp02BulkRounded,
  StrokeSharp: IconTableLamp02StrokeSharp,
  SolidSharp: IconTableLamp02SolidSharp,
};