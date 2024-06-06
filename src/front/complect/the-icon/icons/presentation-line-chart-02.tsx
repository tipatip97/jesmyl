import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 8C2.5 5.17157 2.5 3.75736 3.37868 2.87868C4.25736 2 5.67157 2 8.5 2H15.5C18.3284 2 19.7426 2 20.6213 2.87868C21.5 3.75736 21.5 5.17157 21.5 8V11C21.5 13.8284 21.5 15.2426 20.6213 16.1213C19.7426 17 18.3284 17 15.5 17H8.5C5.67157 17 4.25736 17 3.37868 16.1213C2.5 15.2426 2.5 13.8284 2.5 11V8Z',
  d2: 'M8 9.7246L8.69655 8.81009C9.57522 7.65647 11.1291 7.74842 11.9058 8.99998C12.6564 10.2094 14.1427 10.3437 15.0402 9.28321L16 8.1491',
  d3: 'M8.5 22L8.82821 21.6717C9.40628 21.0936 9.69532 20.8045 10.0629 20.6523C10.4305 20.5 10.8392 20.5 11.6568 20.5H12.343C13.1605 20.5 13.5692 20.5 13.9368 20.6522C14.3043 20.8045 14.5933 21.0935 15.1714 21.6716L15.4998 22',
  d4: 'M12 17.5V22',
  d5: 'M12 17L12.0001 22',
  d6: 'M8 9.72467L8.69655 8.81016C9.57522 7.65654 11.1291 7.74849 11.9058 9.00005C12.6564 10.2095 14.1427 10.3438 15.0402 9.28328L16 8.14917',
  d7: 'M11.25 22C11.25 22.4142 11.5858 22.75 12 22.75C12.4142 22.75 12.75 22.4142 12.75 22L11.25 22ZM11.25 17L11.25 22L12.75 22L12.75 17L11.25 17Z',
  d8: 'M11 21.5063V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V21.5063C13.3473 21.5156 13.4577 21.5365 13.5541 21.5764C13.6951 21.6348 13.8285 21.7432 14.4643 22.379L14.7927 22.7074C15.1832 23.0979 15.8164 23.0979 16.2069 22.7074C16.5974 22.3169 16.5974 21.6837 16.2069 21.2932L15.8785 20.9647L15.7804 20.8665C15.3012 20.3858 14.8758 19.9591 14.3194 19.7286C13.9088 19.5585 13.473 19.5145 13 19.5035V17H11L11 19.5035C10.5268 19.5145 10.091 19.5585 9.68018 19.7287C9.12373 19.9592 8.69838 20.3859 8.21912 20.8667L8.12106 20.965L7.79285 21.2932C7.40235 21.6838 7.40239 22.3169 7.79294 22.7074C8.18349 23.0979 8.81665 23.0979 9.20715 22.7073L9.53536 22.3791C10.1711 21.7432 10.3046 21.6348 10.4456 21.5764C10.542 21.5365 10.6525 21.5156 11 21.5063Z',
  d9: 'M1.75 7.6C1.75 4.48873 1.75 2.9331 2.69805 1.96655C3.6461 1 5.17196 1 8.22368 1H15.7763C18.828 1 20.3539 1 21.302 1.96655C22.25 2.9331 22.25 4.48873 22.25 7.6V10.9C22.25 14.0113 22.25 15.5669 21.302 16.5335C20.3539 17.5 18.828 17.5 15.7763 17.5H8.22368C5.17196 17.5 3.6461 17.5 2.69805 16.5335C1.75 15.5669 1.75 14.0113 1.75 10.9V7.6ZM10.2804 9.00138C10.0386 8.98707 9.74287 9.08683 9.49213 9.41604L8.79558 10.3306C8.46094 10.7699 7.83349 10.8548 7.39413 10.5202C6.95478 10.1855 6.86989 9.55806 7.20453 9.11871L7.90108 8.2042C8.529 7.3798 9.44957 6.94872 10.3985 7.00487C11.3447 7.06085 12.2102 7.59401 12.7556 8.4727C12.9794 8.83331 13.2689 8.97529 13.508 8.9969C13.7432 9.01816 14.0268 8.93283 14.2769 8.63724L15.2367 7.50313C15.5935 7.08155 16.2245 7.02902 16.6461 7.3858C17.0676 7.74258 17.1202 8.37356 16.7634 8.79514L15.8036 9.92925C15.1563 10.6941 14.2479 11.0719 13.328 10.9888C12.4119 10.906 11.583 10.3761 11.0562 9.52733C10.8248 9.15446 10.5251 9.01586 10.2804 9.00138Z',
  d10: 'M2.69805 1.96655C1.75 2.9331 1.75 4.48873 1.75 7.6V10.9C1.75 14.0113 1.75 15.5669 2.69805 16.5335C3.6461 17.5 5.17196 17.5 8.22368 17.5H15.7763C18.828 17.5 20.3539 17.5 21.302 16.5335C22.25 15.5669 22.25 14.0113 22.25 10.9V7.6C22.25 4.48873 22.25 2.9331 21.302 1.96655C20.3539 1 18.828 1 15.7763 1H8.22368C5.17196 1 3.6461 1 2.69805 1.96655Z',
  d11: 'M11 17.5H13V19.5035C13.473 19.5145 13.9088 19.5585 14.3194 19.7286C14.8758 19.9591 15.3012 20.3858 15.7804 20.8665L15.8785 20.9647L16.2069 21.2932C16.5974 21.6837 16.5974 22.3169 16.2069 22.7074C15.8164 23.0979 15.1832 23.0979 14.7927 22.7074L14.4643 22.379C13.8285 21.7432 13.6951 21.6348 13.5541 21.5764C13.4577 21.5365 13.3473 21.5156 13 21.5063V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V21.5063C10.6525 21.5156 10.542 21.5365 10.4456 21.5764C10.3046 21.6348 10.1711 21.7432 9.53536 22.3791L9.20715 22.7073C8.81665 23.0979 8.18349 23.0979 7.79294 22.7074C7.40239 22.3169 7.40235 21.6838 7.79285 21.2932L8.12106 20.965L8.21912 20.8667C8.69838 20.3859 9.12373 19.9592 9.68018 19.7287C10.091 19.5585 10.5268 19.5145 11 19.5035L11 17.5Z',
  d12: 'M9.49213 9.41604C9.74287 9.08683 10.0386 8.98707 10.2804 9.00138C10.5251 9.01586 10.8248 9.15446 11.0562 9.52733C11.583 10.3761 12.4119 10.906 13.328 10.9888C14.2479 11.0719 15.1563 10.6941 15.8036 9.92925L16.7634 8.79514C17.1202 8.37356 17.0676 7.74258 16.6461 7.3858C16.2245 7.02902 15.5935 7.08155 15.2367 7.50313L14.2769 8.63724C14.0268 8.93283 13.7432 9.01816 13.508 8.9969C13.2689 8.97529 12.9794 8.83331 12.7556 8.4727C12.2102 7.59401 11.3447 7.06085 10.3985 7.00487C9.44957 6.94872 8.529 7.3798 7.90108 8.2042L7.20453 9.11871C6.86989 9.55806 6.95478 10.1855 7.39413 10.5202C7.83349 10.8548 8.46094 10.7699 8.79558 10.3306L9.49213 9.41604Z',
  d13: 'M21 16.5V2.5H3V16.5L21 16.5Z',
  d14: 'M12 16.5L12 21.5',
  d15: 'M8 21.5L9.5 19.5H14.5L16 21.5',
  d16: 'M16.5 8L13.5 11L10.5 8L7.5 11',
  d17: 'M11 20.6944V22.25H13V20.6944H13.9792L15.1667 22.25L16.75 21.0833L15.2656 19.1389C15.0787 18.8941 14.7854 18.75 14.474 18.75H13V16.75H11V18.75H9.52604C9.21456 18.75 8.92126 18.8941 8.73438 19.1389L7.25 21.0833L8.83333 22.25L10.0208 20.6944H11Z',
  d18: 'M3 1.75C2.58579 1.75 2.25 2.08579 2.25 2.5V16.5C2.25 16.9142 2.58579 17.25 3 17.25L21 17.25C21.1989 17.25 21.3897 17.171 21.5303 17.0303C21.671 16.8897 21.75 16.6989 21.75 16.5V2.5C21.75 2.08579 21.4142 1.75 21 1.75H3ZM11.2072 7.29289C10.8167 6.90237 10.1835 6.90237 9.79297 7.29289L6.79297 10.2929L8.20718 11.7071L10.5001 9.41421L12.793 11.7071C13.1835 12.0976 13.8167 12.0976 14.2072 11.7071L17.2072 8.70711L15.793 7.29289L13.5001 9.58579L11.2072 7.29289Z',
};

export const IconPresentationLineChart02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-line-chart-02-stroke-rounded IconPresentationLineChart02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconPresentationLineChart02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-line-chart-02-duotone-rounded IconPresentationLineChart02DuotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentationLineChart02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-line-chart-02-twotone-rounded IconPresentationLineChart02TwotoneRounded"
    >
      <path 
        d={d.d1} 
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentationLineChart02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-line-chart-02-solid-rounded IconPresentationLineChart02SolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentationLineChart02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-line-chart-02-bulk-rounded IconPresentationLineChart02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentationLineChart02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-line-chart-02-stroke-sharp IconPresentationLineChart02StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
    </TheIconWrapper>
  );
};

export const IconPresentationLineChart02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-line-chart-02-solid-sharp IconPresentationLineChart02SolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPresentationLineChart02: TheIconSelfPack = {
  name: 'PresentationLineChart02',
  StrokeRounded: IconPresentationLineChart02StrokeRounded,
  DuotoneRounded: IconPresentationLineChart02DuotoneRounded,
  TwotoneRounded: IconPresentationLineChart02TwotoneRounded,
  SolidRounded: IconPresentationLineChart02SolidRounded,
  BulkRounded: IconPresentationLineChart02BulkRounded,
  StrokeSharp: IconPresentationLineChart02StrokeSharp,
  SolidSharp: IconPresentationLineChart02SolidSharp,
};