import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M8 12V16.5C8 17.3284 7.32843 18 6.5 18C5.67157 18 5 17.3284 5 16.5V16',
  d3: 'M15.5 12L19 18M15.5 18L19 12',
  d4: 'M13.5 12H11.7C11.0373 12 10.5 12.5373 10.5 13.2V13.8C10.5 14.4627 11.0373 15 11.7 15H12.3C12.9627 15 13.5 15.5373 13.5 16.2V16.8C13.5 17.4627 12.9627 18 12.3 18H10.5',
  d5: 'M12.0572 1.75H12.0572C9.86647 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.86647 1.75 12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H11.9428C14.1335 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572C22.25 9.86646 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM8.75 12C8.75 11.5858 8.41421 11.25 8 11.25C7.58579 11.25 7.25 11.5858 7.25 12V16.5C7.25 16.9142 6.91421 17.25 6.5 17.25C6.08579 17.25 5.75 16.9142 5.75 16.5V16C5.75 15.5858 5.41421 15.25 5 15.25C4.58579 15.25 4.25 15.5858 4.25 16V16.5C4.25 17.7426 5.25736 18.75 6.5 18.75C7.74264 18.75 8.75 17.7426 8.75 16.5V12ZM15.1222 11.3523C15.48 11.1436 15.9392 11.2644 16.148 11.6222L17.2501 13.5116L18.3523 11.6222C18.561 11.2644 19.0202 11.1436 19.378 11.3523C19.7358 11.561 19.8567 12.0202 19.648 12.378L18.1184 15.0001L19.648 17.6222C19.8567 17.98 19.7358 18.4392 19.378 18.648C19.0202 18.8567 18.561 18.7358 18.3523 18.378L17.2501 16.4886L16.148 18.378C15.9392 18.7358 15.48 18.8567 15.1222 18.648C14.7644 18.4392 14.6436 17.98 14.8523 17.6222L16.3818 15.0001L14.8523 12.378C14.6436 12.0202 14.7644 11.561 15.1222 11.3523ZM11.7 11.25C10.623 11.25 9.75 12.123 9.75 13.2V13.8C9.75 14.877 10.623 15.75 11.7 15.75H12.3C12.5485 15.75 12.75 15.9515 12.75 16.2V16.8C12.75 17.0485 12.5485 17.25 12.3 17.25H10.5C10.0858 17.25 9.75 17.5858 9.75 18C9.75 18.4142 10.0858 18.75 10.5 18.75H12.3C13.377 18.75 14.25 17.877 14.25 16.8V16.2C14.25 15.123 13.377 14.25 12.3 14.25H11.7C11.4515 14.25 11.25 14.0485 11.25 13.8V13.2C11.25 12.9515 11.4515 12.75 11.7 12.75H13.5C13.9142 12.75 14.25 12.4142 14.25 12C14.25 11.5858 13.9142 11.25 13.5 11.25H11.7Z',
  d6: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.86646 22.25 12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.1335 22.25 11.9428 22.25H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572C1.74999 9.86647 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.86647 1.74999 12.0572 1.75Z',
  d7: 'M8 11.25C8.41421 11.25 8.75 11.5858 8.75 12V16.5C8.75 17.7426 7.74264 18.75 6.5 18.75C5.25736 18.75 4.25 17.7426 4.25 16.5V16C4.25 15.5858 4.58579 15.25 5 15.25C5.41421 15.25 5.75 15.5858 5.75 16V16.5C5.75 16.9142 6.08579 17.25 6.5 17.25C6.91421 17.25 7.25 16.9142 7.25 16.5V12C7.25 11.5858 7.58579 11.25 8 11.25Z',
  d8: 'M15.1222 11.3523C15.48 11.1436 15.9392 11.2644 16.148 11.6222L17.2501 13.5116L18.3523 11.6222C18.561 11.2644 19.0202 11.1436 19.378 11.3523C19.7358 11.561 19.8567 12.0202 19.648 12.378L18.1184 15.0001L19.648 17.6222C19.8567 17.98 19.7358 18.4392 19.378 18.648C19.0202 18.8567 18.561 18.7358 18.3523 18.378L17.2501 16.4886L16.148 18.378C15.9392 18.7358 15.48 18.8567 15.1222 18.648C14.7644 18.4392 14.6436 17.98 14.8523 17.6222L16.3818 15.0001L14.8523 12.378C14.6436 12.0202 14.7644 11.561 15.1222 11.3523Z',
  d9: 'M9.75 13.2C9.75 12.123 10.623 11.25 11.7 11.25H13.5C13.9142 11.25 14.25 11.5858 14.25 12C14.25 12.4142 13.9142 12.75 13.5 12.75H11.7C11.4515 12.75 11.25 12.9515 11.25 13.2V13.8C11.25 14.0485 11.4515 14.25 11.7 14.25H12.3C13.377 14.25 14.25 15.123 14.25 16.2V16.8C14.25 17.877 13.377 18.75 12.3 18.75H10.5C10.0858 18.75 9.75 18.4142 9.75 18C9.75 17.5858 10.0858 17.25 10.5 17.25H12.3C12.5485 17.25 12.75 17.0485 12.75 16.8V16.2C12.75 15.9515 12.5485 15.75 12.3 15.75H11.7C10.623 15.75 9.75 14.877 9.75 13.8V13.2Z',
  d10: 'M21 3H3V21H21V3Z',
  d11: 'M8 13V16.75C8 17.4404 7.44036 18 6.75 18C6.05964 18 5.5 17.4404 5.5 16.75V16.3333',
  d12: 'M15.5 13L18.5 18M15.5 18L18.5 13',
  d13: 'M13 13H11.5C10.9477 13 10.5 13.4477 10.5 14V14.5C10.5 15.0523 10.9477 15.5 11.5 15.5H12C12.5523 15.5 13 15.9477 13 16.5V17C13 17.5523 12.5523 18 12 18H10.5',
  d14: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM8.75 16.75V12.25H7.25V16.75C7.25 17.0261 7.02614 17.25 6.75 17.25C6.47386 17.25 6.25 17.0261 6.25 16.75V15.5833H4.75V16.75C4.75 17.8546 5.64543 18.75 6.75 18.75C7.85457 18.75 8.75 17.8546 8.75 16.75ZM15.7569 11.9707L16.9997 14.042L18.2424 11.9707L19.5287 12.7424L17.8743 15.4997L19.5287 18.2569L18.2424 19.0287L16.9997 16.9574L15.7569 19.0287L14.4707 18.2569L16.1251 15.4997L14.4707 12.7424L15.7569 11.9707ZM11.5 12.25C10.5335 12.25 9.75 13.0335 9.75 14V14.5C9.75 15.4665 10.5335 16.25 11.5 16.25H12C12.1381 16.25 12.25 16.3619 12.25 16.5V17C12.25 17.1381 12.1381 17.25 12 17.25H9.75V18.75H12C12.9665 18.75 13.75 17.9665 13.75 17V16.5C13.75 15.5335 12.9665 14.75 12 14.75H11.5C11.3619 14.75 11.25 14.6381 11.25 14.5V14C11.25 13.8619 11.3619 13.75 11.5 13.75H13.75V12.25H11.5Z',
} as const;

export const IconJsx01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="jsx-01-stroke-rounded IconJsx01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconJsx01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="jsx-01-duotone-rounded IconJsx01DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconJsx01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="jsx-01-twotone-rounded IconJsx01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconJsx01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="jsx-01-solid-rounded IconJsx01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconJsx01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="jsx-01-bulk-rounded IconJsx01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconJsx01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="jsx-01-stroke-sharp IconJsx01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconJsx01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="jsx-01-solid-sharp IconJsx01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfJsx01: TheIconSelfPack = {
  name: 'Jsx01',
  StrokeRounded: IconJsx01StrokeRounded,
  DuotoneRounded: IconJsx01DuotoneRounded,
  TwotoneRounded: IconJsx01TwotoneRounded,
  SolidRounded: IconJsx01SolidRounded,
  BulkRounded: IconJsx01BulkRounded,
  StrokeSharp: IconJsx01StrokeSharp,
  SolidSharp: IconJsx01SolidSharp,
};