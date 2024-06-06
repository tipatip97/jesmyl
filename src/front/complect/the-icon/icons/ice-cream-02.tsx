import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.5 12L8.32693 14.6957C9.82073 19.5652 10.5676 22 12 22C13.4324 22 14.1793 19.5652 15.6731 14.6957L16.5 12',
  d2: 'M12 8.66667C12 9.26343 12.1647 9.82357 12.4531 10.3081M12.4531 10.3081C11.7173 11.3298 10.4825 12 9.08333 12C6.82817 12 5 10.2589 5 8.11111C5 6.22776 6.40574 4.6571 8.27244 4.2989C8.91067 2.94384 10.3396 2 12 2C14.0719 2 15.7833 3.46957 16.0479 5.37393M12.4531 10.3081C13.0544 11.3183 14.1936 12 15.5 12C17.433 12 19 10.5076 19 8.66667C19 7.00322 17.7206 5.62436 16.0479 5.37393M15.6904 7.55556C15.9423 7.05041 16.0833 6.48533 16.0833 5.88889C16.0833 5.71431 16.0713 5.54242 16.0479 5.37393',
  d3: 'M12 21.9966C10.5677 21.9966 9.82076 19.5618 8.32696 14.6922L7.50003 11.9966L7.35547 11.6323C7.88023 11.866 8.46578 11.9966 9.08336 11.9966C10.4825 11.9966 11.7173 11.3264 12.4531 10.3047C13.0544 11.3149 14.1936 11.9966 15.5 11.9966C15.8641 11.9966 16.2153 11.9436 16.5454 11.8454L16.5 11.9966L15.6731 14.6922C14.1793 19.5618 13.4324 21.9966 12 21.9966Z',
  d4: 'M9.0889 4.81979C9.57419 3.86229 10.6806 3.16667 12 3.16667C13.6534 3.16667 14.9552 4.25079 15.1529 5.57354C15.1705 5.69148 15.1797 5.81215 15.1797 5.93519C15.1797 6.35377 15.0736 6.74928 14.8829 7.10465C14.6287 7.57827 14.8357 8.15373 15.3454 8.38998C15.8551 8.62622 16.4743 8.43379 16.7285 7.96016C16.9227 7.59843 17.0666 7.21065 17.1519 6.80459C17.79 7.2194 18.1875 7.88076 18.1875 8.59722C18.1875 9.78867 17.0812 10.8333 15.6094 10.8333C14.6239 10.8333 13.7866 10.3565 13.3534 9.68012C13.1472 9.35816 13.0312 8.98987 13.0312 8.59722C13.0312 8.06795 12.5695 7.63889 12 7.63889C11.4305 7.63889 10.9688 8.06795 10.9688 8.59722C10.9688 9.09556 11.0672 9.57373 11.247 10.0163C10.6754 10.5171 9.88117 10.8333 8.99219 10.8333C7.1881 10.8333 5.8125 9.5503 5.8125 8.06482C5.8125 6.76016 6.86679 5.61714 8.35029 5.35261C8.67397 5.29489 8.94847 5.09688 9.0889 4.81979ZM12 1.25C14.3641 1.25 16.4093 2.66092 17.0416 4.64658C18.8788 5.18108 20.25 6.72324 20.25 8.59722C20.25 10.4441 18.9225 11.9654 17.1245 12.5223L16.3712 14.9779L16.3712 14.978L16.3712 14.978C15.6404 17.3604 15.0691 19.2226 14.4967 20.484C14.2076 21.1209 13.8908 21.6693 13.5071 22.0654C13.1044 22.4811 12.6049 22.7501 12.0002 22.7501C11.3955 22.7501 10.896 22.4811 10.4933 22.0654C10.1096 21.6693 9.79281 21.1209 9.50374 20.484C8.93125 19.2225 8.35999 17.3603 7.62917 14.9779L7.62917 14.9779L6.81595 12.3269C5.02291 11.5944 3.75 9.98296 3.75 8.06482C3.75 5.92328 5.34248 4.15952 7.46617 3.5816C8.38109 2.17551 10.0806 1.25 12 1.25Z',
  d5: 'M7.28024 11.2831C7.67624 11.1616 8.09574 11.3842 8.21722 11.7802C10.2256 12.6733 11.7106 11.0254 12.202 10.0898C12.707 11.5883 14.7999 11.8411 15.7832 11.7802C15.9047 11.3842 16.3242 11.1616 16.7202 11.2831C17.1162 11.4046 17.3387 11.8241 17.2172 12.2201L16.3712 14.9779L16.3712 14.978C15.6404 17.3603 15.0691 19.2226 14.4967 20.484C14.2076 21.1209 13.8908 21.6693 13.5071 22.0654C13.1044 22.4811 12.6049 22.7501 12.0002 22.7501C11.3955 22.7501 10.896 22.4811 10.4933 22.0654C10.1096 21.6693 9.79281 21.1209 9.50374 20.484C8.93125 19.2225 8.35999 17.3603 7.62917 14.9779L7.62917 14.9779L6.78318 12.2201C6.6617 11.8241 6.88424 11.4046 7.28024 11.2831Z',
  d6: 'M12 3.16667C10.6806 3.16667 9.57419 3.86229 9.0889 4.81979C8.94847 5.09688 8.67397 5.29489 8.35029 5.35261C6.86679 5.61714 5.8125 6.76016 5.8125 8.06482C5.8125 9.5503 7.1881 10.8333 8.99219 10.8333C9.88117 10.8333 10.6754 10.5171 11.247 10.0163C11.0672 9.57373 10.9688 9.09556 10.9688 8.59722C10.9688 8.06795 11.4305 7.63889 12 7.63889C12.5695 7.63889 13.0312 8.06795 13.0312 8.59722C13.0312 8.98987 13.1472 9.35816 13.3534 9.68012C13.7866 10.3565 14.6239 10.8333 15.6094 10.8333C17.0812 10.8333 18.1875 9.78867 18.1875 8.59722C18.1875 7.88076 17.79 7.2194 17.1519 6.80459C17.0666 7.21065 16.9227 7.59843 16.7285 7.96016C16.4743 8.43379 15.8551 8.62622 15.3454 8.38998C14.8357 8.15373 14.6287 7.57827 14.8829 7.10465C15.0736 6.74928 15.1797 6.35377 15.1797 5.93519C15.1797 5.81215 15.1705 5.69148 15.1529 5.57354C14.9552 4.25079 13.6534 3.16667 12 3.16667ZM17.0416 4.64658C16.4093 2.66092 14.3641 1.25 12 1.25C10.0806 1.25 8.38109 2.17551 7.46617 3.5816C5.34248 4.15952 3.75 5.92328 3.75 8.06482C3.75 10.6959 6.145 12.75 8.99219 12.75C10.2949 12.75 11.4948 12.324 12.4174 11.6119C13.2537 12.3212 14.3808 12.75 15.6094 12.75C18.1243 12.75 20.25 10.9343 20.25 8.59722C20.25 6.72324 18.8788 5.18108 17.0416 4.64658Z',
  d7: 'M7.5 11.5L12 22L16.5 12',
  d8: 'M12 8.66667C12 9.26343 12.1647 9.82357 12.4531 10.3081M12.4531 10.3081C11.7173 11.3298 10.4825 12 9.08333 12C6.82817 12 5 10.2589 5 8.11111C5 6.22776 6.40574 4.6571 8.27244 4.2989C8.91067 2.94384 10.3396 2 12 2C14.0719 2 15.7833 3.46957 16.0478 5.37393M12.4531 10.3081C13.0544 11.3183 14.1936 12 15.5 12C17.433 12 19 10.5076 19 8.66667C19 7.00322 17.7206 5.62436 16.0478 5.37393M15.6904 7.55556C15.9423 7.05041 16.0833 6.48533 16.0833 5.88889C16.0833 5.71431 16.0713 5.54242 16.0478 5.37393',
  d9: 'M12 1.25C14.2344 1.25 16.15 2.71516 16.6852 4.74459C18.436 5.23332 19.75 6.78394 19.75 8.66667C19.75 10.9559 17.8123 12.75 15.5 12.75C14.2909 12.75 13.1914 12.2635 12.4132 11.4737C11.5432 12.2675 10.3685 12.75 9.08333 12.75C6.44886 12.75 4.25 10.7072 4.25 8.11111C4.25 5.96384 5.75869 4.19142 7.76792 3.64632C8.59667 2.20764 10.1901 1.25 12 1.25Z',
  d10: 'M7.80859 14.1238L11.3107 22.2955C11.428 22.569 11.6958 22.7474 11.9934 22.75C12.2909 22.7527 12.5619 22.5792 12.684 22.3078L16.337 14.1902C16.0625 14.2297 15.7829 14.2501 15.5001 14.2501C14.3583 14.2501 13.2828 13.9249 12.3771 13.3556C11.4117 13.9259 10.2814 14.2501 9.08343 14.2501C8.64942 14.2501 8.22273 14.2067 7.80859 14.1238Z',
} as const;

export const IconIceCream02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-02-stroke-rounded IconIceCream02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconIceCream02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-02-duotone-rounded IconIceCream02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconIceCream02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-02-twotone-rounded IconIceCream02TwotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconIceCream02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-02-solid-rounded IconIceCream02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconIceCream02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-02-bulk-rounded IconIceCream02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconIceCream02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-02-stroke-sharp IconIceCream02StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconIceCream02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-02-solid-sharp IconIceCream02SolidSharp"
    >
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

export const iconPackOfIceCream02: TheIconSelfPack = {
  name: 'IceCream02',
  StrokeRounded: IconIceCream02StrokeRounded,
  DuotoneRounded: IconIceCream02DuotoneRounded,
  TwotoneRounded: IconIceCream02TwotoneRounded,
  SolidRounded: IconIceCream02SolidRounded,
  BulkRounded: IconIceCream02BulkRounded,
  StrokeSharp: IconIceCream02StrokeSharp,
  SolidSharp: IconIceCream02SolidSharp,
};