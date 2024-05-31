import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 17.5H8M8 20.5H2',
  d2: 'M16 17.5H22M22 20.5H16',
  d3: 'M13.5 12H10.5V16H13.5V12Z',
  d4: 'M17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7Z',
  d5: 'M12 7L13.5 5.5',
  d6: 'M14 16H10C9.05719 16 8.58579 16 8.29289 16.2929C8 16.5858 8 17.0572 8 18V20C8 20.9428 8 21.4142 8.29289 21.7071C8.58579 22 9.05719 22 10 22H14C14.9428 22 15.4142 22 15.7071 21.7071C16 21.4142 16 20.9428 16 20V18C16 17.0572 16 16.5858 15.7071 16.2929C15.4142 16 14.9428 16 14 16Z',
  d7: 'M8 17.5H2V20.5H8V17.5Z',
  d8: 'M22 17.5H16V20.5H22V17.5Z',
  d9: 'M12 1.25C8.82436 1.25 6.25 3.82436 6.25 7C6.25 10.1756 8.82436 12.75 12 12.75C15.1756 12.75 17.75 10.1756 17.75 7C17.75 3.82436 15.1756 1.25 12 1.25ZM14.0303 6.03033C14.3232 5.73744 14.3232 5.26256 14.0303 4.96967C13.7374 4.67678 13.2626 4.67678 12.9697 4.96967L11.4697 6.46967C11.1768 6.76256 11.1768 7.23744 11.4697 7.53033C11.7626 7.82322 12.2374 7.82322 12.5303 7.53033L14.0303 6.03033Z',
  d10: 'M9.95526 15.25H14.0448C14.4776 15.25 14.8744 15.2499 15.1972 15.2933C15.5527 15.3411 15.9284 15.4535 16.2374 15.7626C16.5465 16.0716 16.6589 16.4473 16.7067 16.8028C16.7501 17.1256 16.7501 17.5224 16.75 17.9553V17.9553V20.0448V20.0448C16.7501 20.4776 16.7501 20.8744 16.7067 21.1972C16.6589 21.5527 16.5465 21.9284 16.2374 22.2374C15.9284 22.5465 15.5527 22.6589 15.1972 22.7067C14.8744 22.7501 14.4776 22.7501 14.0448 22.75H14.0448H9.95526H9.95525C9.52244 22.7501 9.12561 22.7501 8.8028 22.7067C8.44732 22.6589 8.07159 22.5465 7.76257 22.2374C7.45355 21.9284 7.3411 21.5527 7.29331 21.1972C7.24991 20.8744 7.24995 20.4776 7.25 20.0448L7.25 17.9553C7.24995 17.5224 7.24991 17.1256 7.29331 16.8028C7.3411 16.4473 7.45355 16.0716 7.76257 15.7626C8.07159 15.4535 8.44732 15.3411 8.8028 15.2933C9.12561 15.2499 9.52244 15.25 9.95526 15.25Z',
  d11: 'M9.75 12C9.75 11.5858 10.0858 11.25 10.5 11.25H13.5C13.9142 11.25 14.25 11.5858 14.25 12V13.75H9.75V12Z',
  d12: 'M1.25 17.5C1.25 17.0858 1.58579 16.75 2 16.75H5.75V21.25H2C1.58579 21.25 1.25 20.9142 1.25 20.5V17.5Z',
  d13: 'M18.25 21.25V16.75H22C22.4142 16.75 22.75 17.0858 22.75 17.5V20.5C22.75 20.9142 22.4142 21.25 22 21.25H18.25Z',
  d14: 'M6.25 7C6.25 3.82436 8.82436 1.25 12 1.25C15.1756 1.25 17.75 3.82436 17.75 7C17.75 10.1756 15.1756 12.75 12 12.75C8.82436 12.75 6.25 10.1756 6.25 7Z',
  d15: 'M14.0303 4.96967C14.3232 5.26256 14.3232 5.73744 14.0303 6.03033L12.5303 7.53033C12.2374 7.82322 11.7626 7.82322 11.4697 7.53033C11.1768 7.23744 11.1768 6.76256 11.4697 6.46967L12.9697 4.96967C13.2626 4.67678 13.7374 4.67678 14.0303 4.96967Z',
  d16: 'M16.6992 21.2499C16.7018 21.2323 16.7044 21.2147 16.7067 21.1972C16.7501 20.8744 16.7501 20.4776 16.75 20.0448V17.9553C16.7501 17.5225 16.7501 17.1256 16.7067 16.8028C16.7043 16.7852 16.7018 16.7675 16.6991 16.7499H22C22.4142 16.7499 22.75 17.0856 22.75 17.4999V20.4999C22.75 20.9141 22.4142 21.2499 22 21.2499H16.6992Z',
  d17: 'M9.75 15.2502V12.293C10.4411 12.5871 11.2015 12.7499 12 12.7499C12.7985 12.7499 13.5589 12.5871 14.25 12.293V15.2502C14.1826 15.25 14.1141 15.25 14.0448 15.25H9.95526C9.88586 15.25 9.81739 15.25 9.75 15.2502Z',
  d18: 'M7.3009 16.7499C7.2982 16.7675 7.29567 16.7852 7.29331 16.8028C7.24991 17.1256 7.24995 17.5224 7.25 17.9553V20.0448C7.24995 20.4776 7.24991 20.8744 7.29331 21.1972C7.29566 21.2147 7.29817 21.2323 7.30085 21.2499H2C1.58579 21.2499 1.25 20.9141 1.25 20.4999V17.4999C1.25 17.0856 1.58579 16.7499 2 16.7499H7.3009Z',
  d19: 'M16 16H8V22H16V16Z',
  d20: 'M6.25 7C6.25 3.82436 8.82436 1.25 12 1.25C15.1756 1.25 17.75 3.82436 17.75 7C17.75 9.37717 16.3075 11.4174 14.25 12.2931V13.75H9.75V12.2931C7.69254 11.4174 6.25 9.37717 6.25 7ZM12.0001 8.06077L14.5608 5.50011L13.5001 4.43945L10.9395 7.00011L12.0001 8.06077Z',
  d21: 'M7.25 15.25H16.75V22.75H7.25V15.25Z',
  d22: 'M5.75 16.75H1.25V21.25H5.75V16.75Z',
  d23: 'M18.25 21.25H22.75V16.75H18.25V21.25Z',
} as const;

export const IconGasPipeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gas-pipe-stroke-rounded IconGasPipeStrokeRounded"
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

export const IconGasPipeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gas-pipe-duotone-rounded IconGasPipeDuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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

export const IconGasPipeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gas-pipe-twotone-rounded IconGasPipeTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGasPipeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gas-pipe-solid-rounded IconGasPipeSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconGasPipeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gas-pipe-bulk-rounded IconGasPipeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
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
    </TheIconWrapper>
  );
};

export const IconGasPipeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gas-pipe-stroke-sharp IconGasPipeStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconGasPipeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gas-pipe-solid-sharp IconGasPipeSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfGasPipe: TheIconSelfPack = {
  name: 'GasPipe',
  StrokeRounded: IconGasPipeStrokeRounded,
  DuotoneRounded: IconGasPipeDuotoneRounded,
  TwotoneRounded: IconGasPipeTwotoneRounded,
  SolidRounded: IconGasPipeSolidRounded,
  BulkRounded: IconGasPipeBulkRounded,
  StrokeSharp: IconGasPipeStrokeSharp,
  SolidSharp: IconGasPipeSolidSharp,
};