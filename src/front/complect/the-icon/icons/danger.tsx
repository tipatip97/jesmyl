import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.5 11.25C10.5 10.2835 9.7165 9.5 8.75 9.5C7.7835 9.5 7 10.2835 7 11.25C7 12.2165 7.7835 13 8.75 13C9.7165 13 10.5 12.2165 10.5 11.25Z',
  d2: 'M17 11.25C17 10.2835 16.2165 9.5 15.25 9.5C14.2835 9.5 13.5 10.2835 13.5 11.25C13.5 12.2165 14.2835 13 15.25 13C16.2165 13 17 12.2165 17 11.25Z',
  d3: 'M11 16L11.2929 15.6306C11.6262 15.2102 11.7929 15 12 15C12.2071 15 12.3738 15.2102 12.7071 15.6306L13 16',
  d4: 'M12 2C7.30558 2 3.5 5.76644 3.5 10.4126C3.5 12.1664 4.04229 13.795 4.96997 15.1428C4.71662 15.4221 4.5625 15.7914 4.5625 16.1962C4.5625 17.0674 5.27605 17.7736 6.15625 17.7736V18.9929C6.15625 19.6422 6.46621 20.2619 7.02648 20.5901C10.2351 22.47 13.7649 22.47 16.9735 20.5901C17.5338 20.2619 17.8438 19.6422 17.8438 18.9929V17.7736C18.724 17.7736 19.4375 17.0674 19.4375 16.1962C19.4375 15.7914 19.2834 15.4221 19.03 15.1428C19.9577 13.795 20.5 12.1664 20.5 10.4126C20.5 5.76644 16.6944 2 12 2Z',
  d5: 'M14 21.5V20',
  d6: 'M10 21.5V20',
  d7: 'M12 2C7.30558 2 3.5 5.76644 3.5 10.4126C3.5 12.1664 4.04229 13.795 4.96997 15.1428C4.71662 15.4221 4.5625 15.7914 4.5625 16.1962C4.5625 17.0674 5.27605 17.7736 6.15625 17.7736V18.9929C6.15625 19.6422 6.46621 20.2619 7.02648 20.5901C10.2351 22.47 13.7649 22.47 16.9735 20.5901C17.5338 20.2619 17.8438 19.6422 17.8438 18.9929V17.7736C18.724 17.7736 19.4375 17.0674 19.4375 16.1962C19.4375 15.7914 19.2834 15.4221 19.03 15.1428C19.9577 13.795 20.5 12.1664 20.5 10.4126C20.5 5.76644 16.6944 2 12 2ZM10.5 11.25C10.5 10.2835 9.7165 9.5 8.75 9.5C7.7835 9.5 7 10.2835 7 11.25C7 12.2165 7.7835 13 8.75 13C9.7165 13 10.5 12.2165 10.5 11.25ZM15.25 9.5C16.2165 9.5 17 10.2835 17 11.25C17 12.2165 16.2165 13 15.25 13C14.2835 13 13.5 12.2165 13.5 11.25C13.5 10.2835 14.2835 9.5 15.25 9.5Z',
  d8: 'M2.75 10.4126C2.75 5.34493 6.89869 1.25 12 1.25C17.1013 1.25 21.25 5.34493 21.25 10.4126C21.25 12.0186 20.8323 13.5292 20.099 14.8422C20.0211 14.9816 19.9822 15.0513 19.9765 15.1151C19.9709 15.1788 20.0012 15.2669 20.0619 15.4431C20.1432 15.6793 20.1875 15.9327 20.1875 16.1962C20.1875 17.0726 19.7019 17.8303 18.988 18.2275C18.7804 18.3431 18.6765 18.4009 18.6351 18.4713C18.5938 18.5417 18.5938 18.6389 18.5938 18.8332V18.9929C18.5938 19.8715 18.1728 20.7567 17.3526 21.2373C16.7473 21.5919 16.1303 21.8842 15.5058 22.1141C15.1731 22.2366 15.0068 22.2978 14.8784 22.2083C14.75 22.1188 14.75 21.9344 14.75 21.5657V20C14.75 19.5858 14.4142 19.25 14 19.25C13.5858 19.25 13.25 19.5858 13.25 20V22.1421C13.25 22.3964 13.25 22.5235 13.1698 22.6099C13.0896 22.6962 12.968 22.7052 12.7246 22.7232C12.2418 22.7589 11.7582 22.7589 11.2754 22.7232C11.032 22.7052 10.9104 22.6962 10.8302 22.6099C10.75 22.5235 10.75 22.3964 10.75 22.1421V20C10.75 19.5858 10.4142 19.25 10 19.25C9.58579 19.25 9.25 19.5858 9.25 20V21.5657C9.25 21.9344 9.25 22.1188 9.12162 22.2083C8.99324 22.2978 8.82689 22.2366 8.49421 22.1141C7.86967 21.8842 7.25268 21.5919 6.64736 21.2373C5.82717 20.7567 5.40625 19.8715 5.40625 18.9929V18.8332C5.40625 18.6389 5.40625 18.5417 5.36486 18.4713C5.32348 18.4009 5.21964 18.3431 5.01196 18.2275C4.29813 17.8303 3.8125 17.0726 3.8125 16.1962C3.8125 15.9327 3.85679 15.6793 3.93814 15.4431C3.99881 15.2669 4.02915 15.1788 4.02347 15.1151C4.01779 15.0513 3.97886 14.9816 3.901 14.8422C3.16772 13.5292 2.75 12.0186 2.75 10.4126ZM8.75 12.25C8.19772 12.25 7.75 11.8023 7.75 11.25C7.75 10.6977 8.19772 10.25 8.75 10.25C9.30228 10.25 9.75 10.6977 9.75 11.25C9.75 11.8023 9.30228 12.25 8.75 12.25ZM6.25 11.25C6.25 12.6307 7.36929 13.75 8.75 13.75C10.1307 13.75 11.25 12.6307 11.25 11.25C11.25 9.86929 10.1307 8.75 8.75 8.75C7.36929 8.75 6.25 9.86929 6.25 11.25ZM14.25 11.25C14.25 11.8023 14.6977 12.25 15.25 12.25C15.8023 12.25 16.25 11.8023 16.25 11.25C16.25 10.6977 15.8023 10.25 15.25 10.25C14.6977 10.25 14.25 10.6977 14.25 11.25ZM15.25 13.75C13.8693 13.75 12.75 12.6307 12.75 11.25C12.75 9.86929 13.8693 8.75 15.25 8.75C16.6307 8.75 17.75 9.86929 17.75 11.25C17.75 12.6307 16.6307 13.75 15.25 13.75ZM12.1195 16.0966C12.0583 16.0194 11.9418 16.0194 11.8806 16.0966L11.5877 16.466C11.3304 16.7905 10.8586 16.845 10.5341 16.5877C10.2095 16.3303 10.155 15.8586 10.4123 15.534L10.7052 15.1646L10.7288 15.135L10.7288 15.135C10.8745 14.951 11.0273 14.7582 11.1738 14.6172C11.3345 14.4626 11.6074 14.25 12 14.25C12.3927 14.25 12.6656 14.4626 12.8263 14.6172C12.9728 14.7582 13.1255 14.951 13.2713 15.135L13.2948 15.1646L13.5877 15.534C13.8451 15.8586 13.7906 16.3303 13.466 16.5877C13.1414 16.845 12.6697 16.7905 12.4123 16.466L12.1195 16.0966Z',
  d9: 'M2.75 10.4126C2.75 5.34493 6.89869 1.25 12 1.25C17.1013 1.25 21.25 5.34493 21.25 10.4126C21.25 12.1387 20.7675 13.7547 19.9292 15.1334C20.094 15.4518 20.1875 15.8133 20.1875 16.1962C20.1875 17.2259 19.5171 18.0919 18.5938 18.4016V18.9929C18.5938 19.8715 18.1728 20.7567 17.3526 21.2373C13.9099 23.2542 10.0901 23.2542 6.64736 21.2373C5.82717 20.7567 5.40625 19.8715 5.40625 18.9929V18.4016C4.48294 18.0919 3.8125 17.2259 3.8125 16.1962C3.8125 15.8133 3.90599 15.4518 4.07079 15.1334C3.23255 13.7547 2.75 12.1387 2.75 10.4126Z',
  d10: 'M6.25 11.25C6.25 12.6307 7.36929 13.75 8.75 13.75C10.1307 13.75 11.25 12.6307 11.25 11.25C11.25 9.86929 10.1307 8.75 8.75 8.75C7.36929 8.75 6.25 9.86929 6.25 11.25Z',
  d11: 'M12.75 11.25C12.75 12.6307 13.8693 13.75 15.25 13.75C16.6307 13.75 17.75 12.6307 17.75 11.25C17.75 9.86929 16.6307 8.75 15.25 8.75C13.8693 8.75 12.75 9.86929 12.75 11.25Z',
  d12: 'M12 15.9465C11.9642 15.9911 11.9249 16.0407 11.8806 16.0966L11.5877 16.466C11.3304 16.7905 10.8586 16.845 10.5341 16.5877C10.2095 16.3303 10.155 15.8586 10.4123 15.534L10.7052 15.1646C10.7131 15.1548 10.7209 15.1449 10.7288 15.135C10.8745 14.951 11.0273 14.7582 11.1738 14.6172C11.3345 14.4626 11.6074 14.25 12 14.25C12.3927 14.25 12.6656 14.4626 12.8263 14.6172C12.9728 14.7582 13.1255 14.951 13.2713 15.135C13.2792 15.1449 13.287 15.1548 13.2948 15.1646L13.5877 15.534C13.8451 15.8586 13.7906 16.3303 13.466 16.5877C13.1414 16.845 12.6697 16.7905 12.4123 16.466L12.1195 16.0966C12.0751 16.0407 12.0358 15.9911 12 15.9465Z',
  d13: 'M10.75 22.6702C10.2477 22.6059 9.74699 22.5028 9.25 22.3609V20C9.25 19.5858 9.58579 19.25 10 19.25C10.4142 19.25 10.75 19.5858 10.75 20V22.6702Z',
  d14: 'M14.75 22.3609C14.253 22.5028 13.7523 22.6059 13.25 22.6702V20C13.25 19.5858 13.5858 19.25 14 19.25C14.4142 19.25 14.75 19.5858 14.75 20V22.3609Z',
  d15: 'M10.5 16.5L12 15L13.5 16.5',
  d16: 'M12 2C7.30558 2 3.5 5.76644 3.5 10.4126C3.5 12.1664 4.04229 13.795 4.96997 15.1428C4.71662 15.4221 4.5625 15.7914 4.5625 16.1962C4.5625 17.0674 5.27605 17.7736 6.15625 17.7736V20.0283C9.875 22.6572 14.125 22.6572 17.8438 20.0283V17.7736C18.724 17.7736 19.4375 17.0674 19.4375 16.1962C19.4375 15.7914 19.2834 15.4221 19.03 15.1428C19.9577 13.795 20.5 12.1664 20.5 10.4126C20.5 5.76644 16.6944 2 12 2Z',
  d17: 'M14 21.5V19M10 21.5V19',
  d18: 'M7.75 11.25C7.75 11.8023 8.19772 12.25 8.75 12.25C9.30228 12.25 9.75 11.8023 9.75 11.25C9.75 10.6977 9.30228 10.25 8.75 10.25C8.19772 10.25 7.75 10.6977 7.75 11.25Z',
  d19: 'M15.25 12.25C14.6977 12.25 14.25 11.8023 14.25 11.25C14.25 10.6977 14.6977 10.25 15.25 10.25C15.8023 10.25 16.25 10.6977 16.25 11.25C16.25 11.8023 15.8023 12.25 15.25 12.25Z',
  d20: 'M2.75 10.4126C2.75 5.34493 6.89869 1.25 12 1.25C17.1013 1.25 21.25 5.34493 21.25 10.4126C21.25 12.1387 20.7675 13.7547 19.9292 15.1334C20.094 15.4518 20.1875 15.8133 20.1875 16.1962C20.1875 17.2259 19.5171 18.0919 18.5938 18.4016V20.4166L18.2767 20.6407C17.1419 21.443 15.9568 22.0163 14.75 22.3609V20H13.25V22.6702C12.4182 22.7766 11.5818 22.7766 10.75 22.6702V20H9.25V22.3609C8.04324 22.0163 6.8581 21.443 5.72331 20.6407L5.40625 20.4166V18.4016C4.48294 18.0919 3.8125 17.2259 3.8125 16.1962C3.8125 15.8133 3.90599 15.4518 4.07079 15.1334C3.23255 13.7547 2.75 12.1387 2.75 10.4126ZM8.75 13.75C7.36929 13.75 6.25 12.6307 6.25 11.25C6.25 9.86929 7.36929 8.75 8.75 8.75C10.1307 8.75 11.25 9.86929 11.25 11.25C11.25 12.6307 10.1307 13.75 8.75 13.75ZM12.75 11.25C12.75 12.6307 13.8693 13.75 15.25 13.75C16.6307 13.75 17.75 12.6307 17.75 11.25C17.75 9.86929 16.6307 8.75 15.25 8.75C13.8693 8.75 12.75 9.86929 12.75 11.25ZM14.0294 15.9698L11.9991 13.9395L9.96875 15.9698L11.0294 17.0304L11.9991 16.0608L12.9688 17.0304L14.0294 15.9698Z',
};

export const IconDangerStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="danger-stroke-rounded IconDangerStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDangerDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="danger-duotone-rounded IconDangerDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDangerTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="danger-twotone-rounded IconDangerTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDangerSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="danger-solid-rounded IconDangerSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDangerBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="danger-bulk-rounded IconDangerBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDangerStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="danger-stroke-sharp IconDangerStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDangerSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="danger-solid-sharp IconDangerSolidSharp"
    >
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDanger: TheIconSelfPack = {
  name: 'Danger',
  StrokeRounded: IconDangerStrokeRounded,
  DuotoneRounded: IconDangerDuotoneRounded,
  TwotoneRounded: IconDangerTwotoneRounded,
  SolidRounded: IconDangerSolidRounded,
  BulkRounded: IconDangerBulkRounded,
  StrokeSharp: IconDangerStrokeSharp,
  SolidSharp: IconDangerSolidSharp,
};