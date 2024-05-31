import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M2.5 9H21.5',
  d3: 'M13 13L17 13',
  d4: 'M13 17H15',
  d5: 'M6.99981 6H7.00879',
  d6: 'M10.9998 6H11.0088',
  d7: 'M9 9V21.5',
  d8: 'M3.89177 20.1087C5.28301 21.5 7.52218 21.5 12.0005 21.5C16.4789 21.5 18.718 21.5 20.1093 20.1087C21.5005 18.7175 21.5005 16.4783 21.5005 12C21.5005 10.1509 21.403 10.1835 21.305 9H2.50089C2.40296 10.1835 2.50053 10.1509 2.50053 12C2.50053 16.4783 2.50053 18.7175 3.89177 20.1087Z',
  d9: 'M13 13H17',
  d10: 'M7 6H7.00898',
  d11: 'M11 6H11.009',
  d12: 'M11.9435 1.75H12.0579H12.0579C14.2486 1.74999 15.9693 1.74998 17.3127 1.93059C18.6893 2.11568 19.7816 2.50272 20.6398 3.36091C21.498 4.21911 21.885 5.31137 22.0701 6.68802C22.1095 6.98118 22.1403 7.29229 22.1644 7.62234C22.1856 7.91313 22.1963 8.05853 22.1073 8.15427C22.0183 8.25 21.8698 8.25 21.5728 8.25H2.42863C2.13164 8.25 1.98315 8.25 1.89415 8.15427C1.80515 8.05853 1.81576 7.91313 1.83698 7.62234C1.86107 7.29229 1.89188 6.98118 1.9313 6.68802C2.11638 5.31137 2.50342 4.21911 3.36161 3.36091C4.21981 2.50272 5.31207 2.11568 6.68872 1.93059C8.03214 1.74998 9.75282 1.74999 11.9435 1.75H11.9435ZM22.1566 9.83722C22.2444 9.92444 22.2452 10.0638 22.2469 10.3424C22.25 10.8458 22.25 11.3787 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428H11.9427H11.9426H11.9425H11.9423C11.3784 22.25 10.8456 22.25 10.3424 22.2469C10.0638 22.2452 9.92444 22.2444 9.83722 22.1566C9.75 22.0689 9.75 21.9289 9.75 21.649V10.35C9.75 10.0672 9.75 9.92574 9.83787 9.83787C9.92574 9.75 10.0672 9.75 10.35 9.75H21.649C21.9289 9.75 22.0689 9.75 22.1566 9.83722ZM7.65 9.75C7.93284 9.75 8.07426 9.75 8.16213 9.83787C8.25 9.92574 8.25 10.0672 8.25 10.35V21.5721C8.25 21.8691 8.25 22.0176 8.15427 22.1066C8.05853 22.1956 7.91313 22.1849 7.62234 22.1637C7.29229 22.1396 6.98118 22.1088 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9427V11.9426C1.75 11.3786 1.74999 10.8457 1.75307 10.3424C1.75478 10.0638 1.75563 9.92444 1.84339 9.83722C1.93114 9.75 2.07108 9.75 2.35096 9.75H7.65ZM12.25 13C12.25 12.5858 12.5858 12.25 13 12.25H17C17.4142 12.25 17.75 12.5858 17.75 13C17.75 13.4142 17.4142 13.75 17 13.75H13C12.5858 13.75 12.25 13.4142 12.25 13ZM13 16.25C12.5858 16.25 12.25 16.5858 12.25 17C12.25 17.4142 12.5858 17.75 13 17.75H15C15.4142 17.75 15.75 17.4142 15.75 17C15.75 16.5858 15.4142 16.25 15 16.25H13ZM6 5C6 4.44772 6.44571 4 6.99553 4H7.00447C7.55429 4 8 4.44772 8 5C8 5.55228 7.55429 6 7.00447 6H6.99553C6.44571 6 6 5.55228 6 5ZM10.9955 4C10.4457 4 10 4.44772 10 5C10 5.55228 10.4457 6 10.9955 6H11.0045C11.5543 6 12 5.55228 12 5C12 4.44772 11.5543 4 11.0045 4H10.9955Z',
  d13: 'M22.1566 9.83722C22.2444 9.92444 22.2452 10.0638 22.2469 10.3424C22.25 10.8458 22.25 11.3787 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C11.3787 22.25 10.8458 22.25 10.3424 22.2469C10.0638 22.2452 9.92444 22.2444 9.83722 22.1566C9.75 22.0689 9.75 21.9289 9.75 21.649V10.35C9.75 10.0672 9.75 9.92574 9.83787 9.83787C9.92574 9.75 10.0672 9.75 10.35 9.75H21.649C21.9289 9.75 22.0689 9.75 22.1566 9.83722Z',
  d14: 'M7.65 9.75C7.93284 9.75 8.07426 9.75 8.16213 9.83787C8.25 9.92574 8.25 10.0672 8.25 10.35V21.5721C8.25 21.8691 8.25 22.0176 8.15427 22.1066C8.05853 22.1956 7.91313 22.1849 7.62234 22.1637C7.29229 22.1396 6.98118 22.1088 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.75 11.3788 1.74999 10.8457 1.75307 10.3424C1.75478 10.0638 1.75563 9.92444 1.84339 9.83722C1.93114 9.75 2.07108 9.75 2.35096 9.75H7.65Z',
  d15: 'M12.25 13C12.25 12.5858 12.5858 12.25 13 12.25L17 12.25C17.4142 12.25 17.75 12.5858 17.75 13C17.75 13.4142 17.4142 13.75 17 13.75L13 13.75C12.5858 13.75 12.25 13.4142 12.25 13Z',
  d16: 'M12.25 17C12.25 16.5858 12.5858 16.25 13 16.25H15C15.4142 16.25 15.75 16.5858 15.75 17C15.75 17.4142 15.4142 17.75 15 17.75H13C12.5858 17.75 12.25 17.4142 12.25 17Z',
  d17: 'M11.9435 1.75H12.0579H12.0579C14.2486 1.74999 15.9693 1.74998 17.3127 1.93059C18.6893 2.11568 19.7816 2.50272 20.6398 3.36091C21.498 4.21911 21.885 5.31137 22.0701 6.68802C22.1095 6.98118 22.1403 7.29229 22.1644 7.62234C22.1856 7.91313 22.1963 8.05853 22.1073 8.15427C22.0183 8.25 21.8698 8.25 21.5728 8.25H2.42863C2.13164 8.25 1.98315 8.25 1.89415 8.15427C1.80515 8.05853 1.81576 7.91313 1.83698 7.62234C1.86107 7.29229 1.89188 6.98118 1.93129 6.68802C2.11638 5.31137 2.50342 4.21911 3.36161 3.36091C4.21981 2.50272 5.31207 2.11568 6.68872 1.93059C8.03214 1.74998 9.75282 1.74999 11.9435 1.75H11.9435ZM6 5C6 4.44772 6.44571 4 6.99553 4H7.00447C7.55429 4 8 4.44772 8 5C8 5.55228 7.55429 6 7.00447 6H6.99553C6.44571 6 6 5.55228 6 5ZM10.9955 4C10.4457 4 10 4.44772 10 5C10 5.55228 10.4457 6 10.9955 6H11.0045C11.5543 6 12 5.55228 12 5C12 4.44772 11.5543 4 11.0045 4H10.9955Z',
  d18: 'M3 3V21L21 21V3H3Z',
  d19: 'M3 9H21',
  d20: 'M12 13H18M12 17H15',
  d21: 'M6.99982 6H7.0088M10.9998 6H11.0088',
  d22: 'M9 9V21',
  d23: 'M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25H21C21.4142 2.25 21.75 2.58579 21.75 3V8.25H2.25V3ZM8.00898 4.25H6V6.25H8.00898V4.25ZM12.009 4.25H10V6.25H12.009V4.25Z',
  d24: 'M9.75 9.75H21.75V21C21.75 21.1989 21.671 21.3897 21.5303 21.5303C21.3897 21.671 21.1989 21.75 21 21.75L9.75 21.75V9.75ZM19 14.5H13V13H19V14.5ZM16 18.5H13V17H16V18.5Z',
  d25: 'M8.25 9.75H2.25V21C2.25 21.4142 2.58579 21.75 3 21.75H8.25V9.75Z',
} as const;

export const IconWebDesign01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="web-design-01-stroke-rounded IconWebDesign01StrokeRounded"
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

export const IconWebDesign01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="web-design-01-duotone-rounded IconWebDesign01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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

export const IconWebDesign01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="web-design-01-twotone-rounded IconWebDesign01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
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
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWebDesign01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="web-design-01-solid-rounded IconWebDesign01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWebDesign01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="web-design-01-bulk-rounded IconWebDesign01BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconWebDesign01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="web-design-01-stroke-sharp IconWebDesign01StrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWebDesign01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="web-design-01-solid-sharp IconWebDesign01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWebDesign01: TheIconSelfPack = {
  name: 'WebDesign01',
  StrokeRounded: IconWebDesign01StrokeRounded,
  DuotoneRounded: IconWebDesign01DuotoneRounded,
  TwotoneRounded: IconWebDesign01TwotoneRounded,
  SolidRounded: IconWebDesign01SolidRounded,
  BulkRounded: IconWebDesign01BulkRounded,
  StrokeSharp: IconWebDesign01StrokeSharp,
  SolidSharp: IconWebDesign01SolidSharp,
};