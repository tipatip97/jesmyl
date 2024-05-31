import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 11.5C12.4955 11.5 12.9562 11.3015 13.8775 10.9045L14.5423 10.618C16.1808 9.91202 17 9.55902 17 9C17 8.44098 16.1808 8.08798 14.5423 7.38197L13.8775 7.09549C12.9562 6.6985 12.4955 6.5 12 6.5C11.5045 6.5 11.0438 6.6985 10.1225 7.09549L9.45768 7.38197C7.81923 8.08798 7 8.44098 7 9C7 9.55902 7.81923 9.91202 9.45768 10.618L10.1225 10.9045C11.0438 11.3015 11.5045 11.5 12 11.5ZM12 11.5V17.5',
  d2: 'M17 9V15C17 15.559 16.1808 15.912 14.5423 16.618L13.8775 16.9045C12.9562 17.3015 12.4955 17.5 12 17.5C11.5045 17.5 11.0438 17.3015 10.1225 16.9045L9.45768 16.618C7.81923 15.912 7 15.559 7 15V9',
  d3: 'M9.14426 2.5C6.48724 2.56075 4.93529 2.81456 3.87493 3.87493C2.81456 4.93529 2.56075 6.48724 2.5 9.14426M14.8557 2.5C17.5128 2.56075 19.0647 2.81456 20.1251 3.87493C21.1854 4.93529 21.4392 6.48724 21.5 9.14426M14.8557 21.5C17.5128 21.4392 19.0647 21.1854 20.1251 20.1251C21.1854 19.0647 21.4392 17.5128 21.5 14.8557M9.14426 21.5C6.48724 21.4392 4.93529 21.1854 3.87493 20.1251C2.81456 19.0647 2.56075 17.5128 2.5 14.8557',
  d4: 'M3.47387 19.682C4.44774 21 6.01516 21 9.15 21H14.85C17.9848 21 19.5523 21 20.5261 19.682C21.5 18.364 21.5 16.2426 21.5 12C21.5 7.75736 21.5 5.63604 20.5261 4.31802C19.5523 3 17.9848 3 14.85 3H9.15C6.01516 3 4.44774 3 3.47387 4.31802C2.5 5.63604 2.5 7.75736 2.5 12C2.5 16.2426 2.5 18.364 3.47387 19.682ZM10.1225 7.09549C11.0438 6.6985 11.5045 6.5 12 6.5C12.4955 6.5 12.9562 6.6985 13.8775 7.09549L14.5423 7.38197C16.1808 8.08798 17 8.44098 17 9V15C17 15.559 16.1808 15.912 14.5423 16.618L13.8775 16.9045C12.9562 17.3015 12.4955 17.5 12 17.5C11.5045 17.5 11.0438 17.3015 10.1225 16.9045L9.45767 16.618C7.81923 15.912 7 15.559 7 15V9C7 8.44098 7.81923 8.08798 9.45768 7.38197L10.1225 7.09549Z',
  d5: 'M7 9C7 9.55902 7.81923 9.91202 9.45768 10.618L10.1225 10.9045C11.0438 11.3015 11.5045 11.5 12 11.5M7 9C7 8.44098 7.81923 8.08798 9.45768 7.38197L10.1225 7.09549C11.0438 6.6985 11.5045 6.5 12 6.5C12.4955 6.5 12.9562 6.6985 13.8775 7.09549L14.5423 7.38197C16.1808 8.08798 17 8.44098 17 9M7 9V15C7 15.559 7.81923 15.912 9.45768 16.618L10.1225 16.9045C11.0438 17.3015 11.5045 17.5 12 17.5M12 11.5C12.4955 11.5 12.9562 11.3015 13.8775 10.9045L14.5423 10.618C16.1808 9.91202 17 9.55902 17 9M12 11.5V17.5M17 9V15C17 15.559 16.1808 15.912 14.5423 16.618L13.8775 16.9045C12.9562 17.3015 12.4955 17.5 12 17.5',
  d6: 'M12 5.5C11.2933 5.5 10.6494 5.77835 9.8693 6.11558L8.99484 6.49251C8.23313 6.82066 7.56715 7.10758 7.09898 7.38918C6.66236 7.6518 6 8.13846 6 9V15C6 15.8615 6.66236 16.3482 7.09898 16.6108C7.56715 16.8924 8.23313 17.1793 8.99485 17.5075L9.86929 17.8844C10.6494 18.2216 11.2933 18.5 12 18.5C12.7067 18.5 13.3506 18.2216 14.1307 17.8844L15.0052 17.5075C15.7669 17.1793 16.4329 16.8924 16.901 16.6108C17.3376 16.3482 18 15.8615 18 15V9C18 8.13846 17.3376 7.6518 16.901 7.38918C16.4329 7.10758 15.7669 6.82067 15.0052 6.49251L14.1307 6.11558C13.3506 5.77835 12.7067 5.5 12 5.5ZM11 12.3308V16.1913L8 14.8128V11.0708L11 12.3308ZM13 16.1913V12.3308L16 11.0708V14.8128L13 16.1913Z',
  d7: 'M10.144 2.47715C10.1566 3.02929 9.71927 3.48712 9.16713 3.49974C6.47325 3.56134 5.32529 3.83879 4.58204 4.58204C3.83879 5.32529 3.56134 6.47325 3.49974 9.16713C3.48712 9.71927 3.02929 10.1566 2.47715 10.144C1.92501 10.1314 1.48764 9.67355 1.50027 9.12141C1.56017 6.50124 1.79034 4.54531 3.16782 3.16782C4.54531 1.79034 6.50124 1.56017 9.12141 1.50027C9.67355 1.48764 10.1314 1.92501 10.144 2.47715ZM13.856 2.47715C13.8686 1.92501 14.3265 1.48764 14.8786 1.50027C17.4988 1.56017 19.4547 1.79034 20.8322 3.16782C22.2097 4.54531 22.4398 6.50124 22.4997 9.12141C22.5124 9.67355 22.075 10.1314 21.5229 10.144C20.9707 10.1566 20.5129 9.71927 20.5003 9.16713C20.4387 6.47325 20.1612 5.32529 19.418 4.58204C18.6747 3.83879 17.5268 3.56134 14.8329 3.49974C14.2807 3.48712 13.8434 3.02929 13.856 2.47715ZM21.5229 13.856C22.075 13.8686 22.5124 14.3264 22.4997 14.8786C22.4398 17.4988 22.2097 19.4547 20.8322 20.8322C19.4547 22.2097 17.4988 22.4398 14.8786 22.4997C14.3265 22.5124 13.8686 22.075 13.856 21.5229C13.8434 20.9707 14.2807 20.5129 14.8329 20.5003C17.5268 20.4387 18.6747 20.1612 19.418 19.418C20.1612 18.6747 20.4387 17.5268 20.5003 14.8329C20.5129 14.2807 20.9707 13.8434 21.5229 13.856ZM2.47715 13.856C3.02929 13.8434 3.48712 14.2807 3.49974 14.8329C3.56134 17.5268 3.83879 18.6747 4.58204 19.418C5.32529 20.1612 6.47325 20.4387 9.16713 20.5003C9.71927 20.5129 10.1566 20.9707 10.144 21.5229C10.1314 22.075 9.67355 22.5124 9.12141 22.4997C6.50124 22.4398 4.54531 22.2097 3.16782 20.8322C1.79034 19.4547 1.56017 17.4988 1.50027 14.8786C1.48764 14.3265 1.92501 13.8686 2.47715 13.856Z',
  d8: 'M12 11.5L17 9L12 6.5L7 9L12 11.5ZM12 11.5V17.5',
  d9: 'M17 9V15L12 17.5L7 15V9',
  d10: 'M9 2.5H2.5V9M15 2.5H21.5V9M15 21.5H21.5V15M9 21.5H2.5V15',
  d11: 'M16.9998 8.16101L12 5.66113L6.99972 8.16127L11.9995 10.6612L16.9998 8.16101Z',
  d12: 'M17.75 9.46294L12.7495 11.9632V17.9634L17.75 15.4632V9.46294Z',
  d13: 'M11.2495 17.9629V11.9632L6.25 9.46347V15.4632L11.2495 17.9629Z',
  d14: 'M1.5 1.5H9V3.5H3.5V9H1.5V1.5ZM20.5 3.5H15V1.5H22.5V9H20.5V3.5ZM3.5 20.5V15H1.5V22.5H9V20.5H3.5ZM20.5 20.5V15H22.5V22.5H15V20.5H20.5Z',
} as const;

export const Icon3DViewStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-view-stroke-rounded Icon3DViewStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const Icon3DViewDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-view-duotone-rounded Icon3DViewDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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
        strokeLinejoin="round" 
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

export const Icon3DViewTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-view-twotone-rounded Icon3DViewTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const Icon3DViewSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-view-solid-rounded Icon3DViewSolidRounded"
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

export const Icon3DViewBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-view-bulk-rounded Icon3DViewBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const Icon3DViewStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-view-stroke-sharp Icon3DViewStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const Icon3DViewSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-view-solid-sharp Icon3DViewSolidSharp"
    >
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOf3DView: TheIconSelfPack = {
  name: '3DView',
  StrokeRounded: Icon3DViewStrokeRounded,
  DuotoneRounded: Icon3DViewDuotoneRounded,
  TwotoneRounded: Icon3DViewTwotoneRounded,
  SolidRounded: Icon3DViewSolidRounded,
  BulkRounded: Icon3DViewBulkRounded,
  StrokeSharp: Icon3DViewStrokeSharp,
  SolidSharp: Icon3DViewSolidSharp,
};