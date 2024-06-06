import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 13C2 12.0572 2 11.5858 2.29289 11.2929C2.58579 11 3.05719 11 4 11C4.94281 11 5.41421 11 5.70711 11.2929C6 11.5858 6 12.0572 6 13C6 13.9428 6 14.4142 5.70711 14.7071C5.41421 15 4.94281 15 4 15C3.05719 15 2.58579 15 2.29289 14.7071C2 14.4142 2 13.9428 2 13Z',
  d2: 'M18 13C18 12.0572 18 11.5858 18.2929 11.2929C18.5858 11 19.0572 11 20 11C20.9428 11 21.4142 11 21.7071 11.2929C22 11.5858 22 12.0572 22 13C22 13.9428 22 14.4142 21.7071 14.7071C21.4142 15 20.9428 15 20 15C19.0572 15 18.5858 15 18.2929 14.7071C18 14.4142 18 13.9428 18 13Z',
  d3: 'M12 6.99989V13.9999M12 18.9999V21.9999M4 11V9C4 5.69067 4.69067 5 8 5M20 11V9C20 5.69067 19.3093 5 16 5',
  d4: 'M14.5 16.5C14.5 17.8807 13.3807 19 12 19C10.6193 19 9.5 17.8807 9.5 16.5C9.5 15.1193 10.6193 14 12 14C13.3807 14 14.5 15.1193 14.5 16.5Z',
  d5: 'M10 2H14C15.8152 2 16 2.92494 16 4.5C16 6.07506 15.8152 7 14 7H10C8.1848 7 8 6.07506 8 4.5C8 2.92494 8.1848 2 10 2Z',
  d6: 'M3.95526 10.125L4.00001 10.125L4.04476 10.125C4.47757 10.125 4.8744 10.1249 5.19721 10.1683C5.55269 10.2161 5.92842 10.3285 6.23744 10.6376C6.54647 10.9466 6.65891 11.3223 6.70671 11.6778C6.75011 12.0006 6.75006 12.3974 6.75001 12.8302V12.8303L6.75001 12.875L6.75001 12.9198V12.9198C6.75006 13.3526 6.75011 13.7494 6.70671 14.0722C6.65891 14.4277 6.54647 14.8034 6.23744 15.1124C5.92842 15.4215 5.55269 15.5339 5.19721 15.5817C4.8744 15.6251 4.47758 15.6251 4.04476 15.625H4.04475L4.00001 15.625L3.95526 15.625H3.95525C3.52244 15.6251 3.12561 15.6251 2.8028 15.5817C2.44732 15.5339 2.07159 15.4215 1.76257 15.1124C1.45355 14.8034 1.3411 14.4277 1.29331 14.0722C1.24991 13.7494 1.24995 13.3526 1.25 12.9198L1.25001 12.875L1.25 12.8303C1.24995 12.3974 1.24991 12.0006 1.29331 11.6778C1.3411 11.3223 1.45355 10.9466 1.76257 10.6376C2.07159 10.3285 2.44732 10.2161 2.8028 10.1683C3.12561 10.1249 3.52244 10.125 3.95526 10.125Z',
  d7: 'M19.9553 10.125L20 10.125L20.0448 10.125C20.4776 10.125 20.8744 10.1249 21.1972 10.1683C21.5527 10.2161 21.9284 10.3285 22.2374 10.6376C22.5465 10.9466 22.6589 11.3223 22.7067 11.6778C22.7501 12.0006 22.7501 12.3974 22.75 12.8302V12.8303L22.75 12.875L22.75 12.9198V12.9198C22.7501 13.3526 22.7501 13.7494 22.7067 14.0722C22.6589 14.4277 22.5465 14.8034 22.2374 15.1124C21.9284 15.4215 21.5527 15.5339 21.1972 15.5817C20.8744 15.6251 20.4776 15.6251 20.0448 15.625H20.0448L20 15.625L19.9553 15.625H19.9553C19.5224 15.6251 19.1256 15.6251 18.8028 15.5817C18.4473 15.5339 18.0716 15.4215 17.7626 15.1124C17.4535 14.8034 17.3411 14.4277 17.2933 14.0722C17.2499 13.7494 17.25 13.3526 17.25 12.9198L17.25 12.875L17.25 12.8303C17.25 12.3974 17.2499 12.0006 17.2933 11.6778C17.3411 11.3223 17.4535 10.9466 17.7626 10.6376C18.0716 10.3285 18.4473 10.2161 18.8028 10.1683C19.1256 10.1249 19.5224 10.125 19.9553 10.125Z',
  d8: 'M5.13633 7.06844C5.04336 7.49169 5 8.06931 5 8.875V10.875C5 11.4273 4.55228 11.875 4 11.875C3.44772 11.875 3 11.4273 3 10.875V8.875C3 8.02602 3.04298 7.27631 3.18292 6.63931C3.32534 5.99098 3.58149 5.3973 4.05189 4.92689C4.5223 4.45649 5.11598 4.20034 5.76431 4.05792C6.40131 3.91798 7.15102 3.875 8 3.875C8.55228 3.875 9 4.32272 9 4.875C9 5.42728 8.55228 5.875 8 5.875C7.19431 5.875 6.61669 5.91836 6.19344 6.01133C5.78152 6.10183 5.58204 6.22518 5.46611 6.34111C5.35018 6.45704 5.22683 6.65652 5.13633 7.06844ZM15 4.875C15 4.32272 15.4477 3.875 16 3.875C16.849 3.875 17.5987 3.91798 18.2357 4.05792C18.884 4.20034 19.4777 4.45649 19.9481 4.92689C20.4185 5.3973 20.6747 5.99098 20.8171 6.63931C20.957 7.27631 21 8.02602 21 8.875V10.875C21 11.4273 20.5523 11.875 20 11.875C19.4477 11.875 19 11.4273 19 10.875V8.875C19 8.06931 18.9566 7.49169 18.8637 7.06844C18.7732 6.65652 18.6498 6.45704 18.5339 6.34111C18.418 6.22518 18.2185 6.10183 17.8066 6.01133C17.3833 5.91836 16.8057 5.875 16 5.875C15.4477 5.875 15 5.42728 15 4.875ZM12 5.87489C12.5523 5.87489 13 6.32261 13 6.87489V13.8749C13 14.4272 12.5523 14.8749 12 14.8749C11.4477 14.8749 11 14.4272 11 13.8749V6.87489C11 6.32261 11.4477 5.87489 12 5.87489ZM12 17.8749C12.5523 17.8749 13 18.3226 13 18.8749V21.8749C13 22.4272 12.5523 22.8749 12 22.8749C11.4477 22.8749 11 22.4272 11 21.8749V18.8749C11 18.3226 11.4477 17.8749 12 17.8749Z',
  d9: 'M8.75 16.375C8.75 14.5801 10.2051 13.125 12 13.125C13.7949 13.125 15.25 14.5801 15.25 16.375C15.25 18.1699 13.7949 19.625 12 19.625C10.2051 19.625 8.75 18.1699 8.75 16.375Z',
  d10: 'M7.68699 2.131C8.16023 1.38914 8.97917 1.125 10 1.125H14C15.0208 1.125 15.8398 1.38914 16.313 2.131C16.7214 2.77123 16.75 3.61989 16.75 4.375C16.75 5.13011 16.7214 5.97877 16.313 6.619C15.8398 7.36086 15.0208 7.625 14 7.625H10C8.97917 7.625 8.16023 7.36086 7.68699 6.619C7.27859 5.97877 7.25 5.13011 7.25 4.375C7.25 3.61989 7.27859 2.77123 7.68699 2.131Z',
  d11: 'M7.25708 3.88672C6.70771 3.9083 6.20859 3.95873 5.76431 4.05634C5.11598 4.19876 4.5223 4.45491 4.05189 4.92531C3.58149 5.39572 3.32534 5.9894 3.18292 6.63773C3.04298 7.27473 3 8.02445 3 8.87342V10.146C3.28189 10.1233 3.60691 10.1234 3.95525 10.1234H4.04476C4.39308 10.1234 4.71811 10.1233 5 10.146V8.87342C5 8.06773 5.04336 7.49011 5.13633 7.06686C5.22683 6.65494 5.35018 6.45546 5.46611 6.33953C5.58204 6.2236 5.78152 6.10025 6.19344 6.00976C6.49981 5.94245 6.88707 5.90115 7.38317 5.88347C7.26211 5.396 7.25 4.8649 7.25 4.37342C7.25 4.2144 7.25127 4.05122 7.25708 3.88672Z',
  d12: 'M11 7.62342V13.2802C11.315 13.1784 11.6511 13.1234 12 13.1234C12.3489 13.1234 12.685 13.1784 13 13.2802V7.62342H11Z',
  d13: 'M16.6168 5.88347C17.1129 5.90115 17.5002 5.94245 17.8066 6.00976C18.2185 6.10025 18.418 6.2236 18.5339 6.33953C18.6498 6.45546 18.7732 6.65494 18.8637 7.06686C18.9566 7.49011 19 8.06773 19 8.87342V10.146C19.2819 10.1233 19.6069 10.1234 19.9553 10.1234H20.0448C20.3931 10.1234 20.7181 10.1233 21 10.146V8.87342C21 8.02445 20.957 7.27473 20.8171 6.63773C20.6747 5.9894 20.4185 5.39572 19.9481 4.92531C19.4777 4.45491 18.884 4.19876 18.2357 4.05634C17.7914 3.95873 17.2923 3.9083 16.7429 3.88672C16.7487 4.05122 16.75 4.2144 16.75 4.37342C16.75 4.8649 16.7379 5.396 16.6168 5.88347Z',
  d14: 'M11 19.4667C11.315 19.5684 11.6511 19.6234 12 19.6234C12.3489 19.6234 12.685 19.5684 13 19.4667V21.8733C13 22.4256 12.5523 22.8733 12 22.8733C11.4477 22.8733 11 22.4256 11 21.8733V19.4667Z',
  d15: 'M16 7V2H8V7H16Z',
  d16: 'M6 15V11H2V15H6Z',
  d17: 'M22 15V11H18V15H22Z',
  d18: 'M12 6.9999V13.9999M12 18.9999V21.9999M4 11V5.00002L8 5.00001M20 11V5L16 5.00001',
  d19: 'M7.25 2C7.25 1.58579 7.58579 1.25 8 1.25H16C16.4142 1.25 16.75 1.58579 16.75 2V7C16.75 7.41421 16.4142 7.75 16 7.75H8C7.58579 7.75 7.25 7.41421 7.25 7V2Z',
  d20: 'M1.25 11C1.25 10.5858 1.58579 10.25 2 10.25H6C6.41421 10.25 6.75 10.5858 6.75 11V15C6.75 15.4142 6.41421 15.75 6 15.75H2C1.58579 15.75 1.25 15.4142 1.25 15V11Z',
  d21: 'M17.25 11C17.25 10.5858 17.5858 10.25 18 10.25H22C22.4142 10.25 22.75 10.5858 22.75 11V15C22.75 15.4142 22.4142 15.75 22 15.75H18C17.5858 15.75 17.25 15.4142 17.25 15V11Z',
  d22: 'M19 6L16 6.00001L16 4.00001L20 4C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5V11H19V6ZM5 6.00002L8 6.00001L8 4.00001L4 4.00002C3.44771 4.00002 3 4.44774 3 5.00002V11H5V6.00002ZM11 13.9999V6.9999H13V13.9999H11ZM11 21.9999V18.9999H13V21.9999H11Z',
  d23: 'M8.75 16.5C8.75 14.7051 10.2051 13.25 12 13.25C13.7949 13.25 15.25 14.7051 15.25 16.5C15.25 18.2949 13.7949 19.75 12 19.75C10.2051 19.75 8.75 18.2949 8.75 16.5Z',
};

export const IconStructure02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-02-stroke-rounded IconStructure02StrokeRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructure02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-02-duotone-rounded IconStructure02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructure02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-02-twotone-rounded IconStructure02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructure02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-02-solid-rounded IconStructure02SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructure02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-02-bulk-rounded IconStructure02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconStructure02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-02-stroke-sharp IconStructure02StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStructure02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-02-solid-sharp IconStructure02SolidSharp"
    >
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStructure02: TheIconSelfPack = {
  name: 'Structure02',
  StrokeRounded: IconStructure02StrokeRounded,
  DuotoneRounded: IconStructure02DuotoneRounded,
  TwotoneRounded: IconStructure02TwotoneRounded,
  SolidRounded: IconStructure02SolidRounded,
  BulkRounded: IconStructure02BulkRounded,
  StrokeSharp: IconStructure02StrokeSharp,
  SolidSharp: IconStructure02SolidSharp,
};