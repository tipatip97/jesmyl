import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 9.5C22 13.6421 18.6421 17 14.5 17C10.3579 17 7 13.6421 7 9.5C7 5.35786 10.3579 2 14.5 2C18.6421 2 22 5.35786 22 9.5Z',
  d2: 'M19 9C19 11.2091 17.2091 13 15 13C12.7909 13 11 11.2091 11 9C11 6.79086 12.7909 5 15 5C17.2091 5 19 6.79086 19 9Z',
  d3: 'M15.0078 9L14.9988 9',
  d4: 'M2 22L9 15',
  d5: 'M14.5 17C18.6421 17 22 13.6421 22 9.5C22 5.35786 18.6421 2 14.5 2C10.3579 2 7 5.35786 7 9.5C7 13.6421 10.3579 17 14.5 17ZM15 13C17.2091 13 19 11.2091 19 9C19 6.79086 17.2091 5 15 5C12.7909 5 11 6.79086 11 9C11 11.2091 12.7909 13 15 13Z',
  d6: 'M6.25 9.5C6.25 4.94365 9.94365 1.25 14.5 1.25C19.0563 1.25 22.75 4.94365 22.75 9.5C22.75 14.0563 19.0563 17.75 14.5 17.75C9.94365 17.75 6.25 14.0563 6.25 9.5ZM15 5.75C13.2051 5.75 11.75 7.20507 11.75 9C11.75 10.7949 13.2051 12.25 15 12.25C16.7949 12.25 18.25 10.7949 18.25 9C18.25 7.20507 16.7949 5.75 15 5.75ZM10.25 9C10.25 6.37665 12.3766 4.25 15 4.25C17.6234 4.25 19.75 6.37665 19.75 9C19.75 11.6234 17.6234 13.75 15 13.75C12.3766 13.75 10.25 11.6234 10.25 9ZM15.0078 10C15.5601 10 16.0078 9.55229 16.0078 9C16.0078 8.44772 15.5601 8 15.0078 8H14.9988C14.4465 8 13.9988 8.44771 13.9988 9C13.9988 9.55228 14.4465 10 14.9988 10H15.0078Z',
  d7: 'M9.95711 14.0429C10.3476 14.4334 10.3476 15.0666 9.95711 15.4571L2.95711 22.4571C2.56658 22.8476 1.93342 22.8476 1.54289 22.4571C1.15237 22.0666 1.15237 21.4334 1.54289 21.0429L8.54289 14.0429C8.93342 13.6524 9.56658 13.6524 9.95711 14.0429Z',
  d8: 'M6.25 9.5C6.25 4.94365 9.94365 1.25 14.5 1.25C19.0563 1.25 22.75 4.94365 22.75 9.5C22.75 14.0563 19.0563 17.75 14.5 17.75C9.94365 17.75 6.25 14.0563 6.25 9.5Z',
  d9: 'M8.00202 14.5837L1.54289 21.0429C1.15237 21.4334 1.15237 22.0666 1.54289 22.4571C1.93342 22.8476 2.56658 22.8476 2.95711 22.4571L9.41623 15.998C8.88969 15.5854 8.41455 15.1103 8.00202 14.5837Z',
  d10: 'M15 5.75C13.2051 5.75 11.75 7.20507 11.75 9C11.75 10.7949 13.2051 12.25 15 12.25C16.7949 12.25 18.25 10.7949 18.25 9C18.25 7.20507 16.7949 5.75 15 5.75ZM10.25 9C10.25 6.37665 12.3766 4.25 15 4.25C17.6234 4.25 19.75 6.37665 19.75 9C19.75 11.6234 17.6234 13.75 15 13.75C12.3766 13.75 10.25 11.6234 10.25 9Z',
  d11: 'M16.0078 9C16.0078 9.55228 15.5601 10 15.0078 10H14.9988C14.4465 10 13.9988 9.55228 13.9988 9C13.9988 8.44771 14.4465 8 14.9988 8H15.0078C15.5601 8 16.0078 8.44772 16.0078 9Z',
  d12: 'M14.7725 5.98689C12.9827 5.98689 11.5318 7.43777 11.5318 9.22753C11.5318 11.0173 12.9827 12.4682 14.7725 12.4682C16.5622 12.4682 18.0131 11.0173 18.0131 9.22753C18.0131 7.43777 16.5622 5.98689 14.7725 5.98689ZM14.7812 10.2246C15.3319 10.2246 15.7783 9.77818 15.7783 9.22749C15.7783 8.6768 15.3319 8.23037 14.7812 8.23037H14.7722C14.2216 8.23037 13.7751 8.6768 13.7751 9.22749C13.7751 9.77818 14.2216 10.2246 14.7722 10.2246H14.7812Z',
  d13: 'M6.04785 9.72624C6.04785 5.18301 9.73086 1.5 14.2741 1.5C18.8173 1.5 22.5003 5.18301 22.5003 9.72624C22.5003 14.2695 18.8173 17.9525 14.2741 17.9525C9.73086 17.9525 6.04785 14.2695 6.04785 9.72624ZM10.0361 9.22753C10.0361 6.61173 12.1567 4.49121 14.7725 4.49121C17.3882 4.49121 19.5088 6.61173 19.5088 9.22753C19.5088 11.8433 17.3882 13.9638 14.7725 13.9638C12.1567 13.9638 10.0361 11.8433 10.0361 9.22753Z',
  d14: 'M9.31932 15.7392L2.55761 22.5L1.5 21.4424L8.26172 14.6816L9.31932 15.7392Z',
} as const;

export const IconFryStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fry-stroke-rounded IconFryStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFryDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fry-duotone-rounded IconFryDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFryTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fry-twotone-rounded IconFryTwotoneRounded"
    >
      <path 
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

export const IconFrySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fry-solid-rounded IconFrySolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFryBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fry-bulk-rounded IconFryBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFryStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fry-stroke-sharp IconFryStrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFrySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fry-solid-sharp IconFrySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
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

export const iconPackOfFry: TheIconSelfPack = {
  name: 'Fry',
  StrokeRounded: IconFryStrokeRounded,
  DuotoneRounded: IconFryDuotoneRounded,
  TwotoneRounded: IconFryTwotoneRounded,
  SolidRounded: IconFrySolidRounded,
  BulkRounded: IconFryBulkRounded,
  StrokeSharp: IconFryStrokeSharp,
  SolidSharp: IconFrySolidSharp,
};