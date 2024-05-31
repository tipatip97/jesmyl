import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 8C2.5 5.17157 2.5 3.75736 3.37868 2.87868C4.25736 2 5.67157 2 8.5 2H15.5C18.3284 2 19.7426 2 20.6213 2.87868C21.5 3.75736 21.5 5.17157 21.5 8V11C21.5 13.8284 21.5 15.2426 20.6213 16.1213C19.7426 17 18.3284 17 15.5 17H8.5C5.67157 17 4.25736 17 3.37868 16.1213C2.5 15.2426 2.5 13.8284 2.5 11V8Z',
  d2: 'M8 9.7246L8.69655 8.81009C9.57522 7.65647 11.1291 7.74842 11.9058 8.99998C12.6564 10.2094 14.1427 10.3437 15.0402 9.28321L16 8.1491',
  d3: 'M7 22L12.0001 19L17 22',
  d4: 'M12 17.5V22',
  d5: 'M12 17L12.0001 22',
  d6: 'M8 9.72467L8.69655 8.81016C9.57522 7.65654 11.1291 7.74849 11.9058 9.00005C12.6564 10.2095 14.1427 10.3438 15.0402 9.28328L16 8.14917',
  d7: 'M11.25 22C11.25 22.4142 11.5858 22.75 12 22.75C12.4142 22.75 12.75 22.4142 12.75 22L11.25 22ZM11.25 17L11.25 22L12.75 22L12.75 17L11.25 17Z',
  d8: 'M11 20.7651V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V20.7672L16.4837 22.8575C16.9573 23.1416 17.5715 22.9881 17.8557 22.5145C18.1398 22.0409 17.9863 21.4267 17.5127 21.1425L13 18.4349V17H11V18.4328L6.48371 21.1425C6.01013 21.4266 5.85656 22.0409 6.1407 22.5145C6.42485 22.9881 7.03911 23.1416 7.51269 22.8575L11 20.7651Z',
  d9: 'M1.75 7.6C1.75 4.48873 1.75 2.9331 2.69805 1.96655C3.6461 1 5.17196 1 8.22368 1H15.7763C18.828 1 20.3539 1 21.302 1.96655C22.25 2.9331 22.25 4.48873 22.25 7.6V10.9C22.25 14.0113 22.25 15.5669 21.302 16.5335C20.3539 17.5 18.828 17.5 15.7763 17.5H8.22368C5.17196 17.5 3.6461 17.5 2.69805 16.5335C1.75 15.5669 1.75 14.0113 1.75 10.9V7.6ZM10.2804 9.00138C10.0386 8.98707 9.74287 9.08683 9.49213 9.41604L8.79558 10.3306C8.46094 10.7699 7.83349 10.8548 7.39413 10.5202C6.95478 10.1855 6.86989 9.55806 7.20453 9.11871L7.90108 8.2042C8.529 7.3798 9.44957 6.94872 10.3985 7.00487C11.3447 7.06085 12.2102 7.59401 12.7556 8.4727C12.9794 8.83331 13.2689 8.97529 13.508 8.9969C13.7432 9.01816 14.0268 8.93283 14.2769 8.63724L15.2367 7.50313C15.5935 7.08155 16.2245 7.02902 16.6461 7.3858C17.0676 7.74258 17.1202 8.37356 16.7634 8.79514L15.8036 9.92925C15.1563 10.6941 14.2479 11.0719 13.328 10.9888C12.4119 10.906 11.583 10.3761 11.0562 9.52733C10.8248 9.15446 10.5251 9.01586 10.2804 9.00138Z',
  d10: 'M2.69805 1.96655C1.75 2.9331 1.75 4.48873 1.75 7.6V10.9C1.75 14.0113 1.75 15.5669 2.69805 16.5335C3.6461 17.5 5.17196 17.5 8.22368 17.5H15.7763C18.828 17.5 20.3539 17.5 21.302 16.5335C22.25 15.5669 22.25 14.0113 22.25 10.9V7.6C22.25 4.48873 22.25 2.9331 21.302 1.96655C20.3539 1 18.828 1 15.7763 1H8.22368C5.17196 1 3.6461 1 2.69805 1.96655Z',
  d11: 'M11 17.5H13V18.4349L17.5127 21.1425C17.9863 21.4267 18.1398 22.0409 17.8557 22.5145C17.5715 22.9881 16.9573 23.1416 16.4837 22.8575L13 20.7672V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V20.7651L7.51269 22.8575C7.03911 23.1416 6.42485 22.9881 6.1407 22.5145C5.85656 22.0409 6.01013 21.4266 6.48371 21.1425L11 18.4328V17.5Z',
  d12: 'M9.49213 9.41604C9.74287 9.08683 10.0386 8.98707 10.2804 9.00138C10.5251 9.01586 10.8248 9.15446 11.0562 9.52733C11.583 10.3761 12.4119 10.906 13.328 10.9888C14.2479 11.0719 15.1563 10.6941 15.8036 9.92925L16.7634 8.79514C17.1202 8.37356 17.0676 7.74258 16.6461 7.3858C16.2245 7.02902 15.5935 7.08155 15.2367 7.50313L14.2769 8.63724C14.0268 8.93283 13.7432 9.01816 13.508 8.9969C13.2689 8.97529 12.9794 8.83331 12.7556 8.4727C12.2102 7.59401 11.3447 7.06085 10.3985 7.00487C9.44957 6.94872 8.529 7.3798 7.90108 8.2042L7.20453 9.11871C6.86989 9.55806 6.95478 10.1855 7.39413 10.5202C7.83349 10.8548 8.46094 10.7699 8.79558 10.3306L9.49213 9.41604Z',
  d13: 'M21 16V2H3V16L21 16Z',
  d14: 'M12 16L12 22',
  d15: 'M16.5 7.5L13.5 10.5L10.5 7.5L7.5 10.5',
  d16: 'M11 19.6604V21.75H13V19.6603L16.4737 21.7501L17.5 20.0351L13 17.3279V15.75H11V17.328L6.5 20.0351L7.52628 21.7501L11 19.6604Z',
  d17: 'M3 1.25C2.58579 1.25 2.25 1.58579 2.25 2V16C2.25 16.4142 2.58579 16.75 3 16.75L21 16.75C21.1989 16.75 21.3897 16.671 21.5303 16.5303C21.671 16.3897 21.75 16.1989 21.75 16V2C21.75 1.58579 21.4142 1.25 21 1.25H3ZM11.2072 6.79289C10.8167 6.40237 10.1835 6.40237 9.79297 6.79289L6.79297 9.79289L8.20718 11.2071L10.5001 8.91421L12.793 11.2071C13.1835 11.5976 13.8167 11.5976 14.2072 11.2071L17.2072 8.20711L15.793 6.79289L13.5001 9.08579L11.2072 6.79289Z',
} as const;

export const IconPresentationLineChart01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-line-chart-01-stroke-rounded IconPresentationLineChart01StrokeRounded"
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

export const IconPresentationLineChart01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-line-chart-01-duotone-rounded IconPresentationLineChart01DuotoneRounded"
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

export const IconPresentationLineChart01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-line-chart-01-twotone-rounded IconPresentationLineChart01TwotoneRounded"
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

export const IconPresentationLineChart01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-line-chart-01-solid-rounded IconPresentationLineChart01SolidRounded"
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

export const IconPresentationLineChart01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-line-chart-01-bulk-rounded IconPresentationLineChart01BulkRounded"
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

export const IconPresentationLineChart01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-line-chart-01-stroke-sharp IconPresentationLineChart01StrokeSharp"
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
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconPresentationLineChart01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-line-chart-01-solid-sharp IconPresentationLineChart01SolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPresentationLineChart01: TheIconSelfPack = {
  name: 'PresentationLineChart01',
  StrokeRounded: IconPresentationLineChart01StrokeRounded,
  DuotoneRounded: IconPresentationLineChart01DuotoneRounded,
  TwotoneRounded: IconPresentationLineChart01TwotoneRounded,
  SolidRounded: IconPresentationLineChart01SolidRounded,
  BulkRounded: IconPresentationLineChart01BulkRounded,
  StrokeSharp: IconPresentationLineChart01StrokeSharp,
  SolidSharp: IconPresentationLineChart01SolidSharp,
};