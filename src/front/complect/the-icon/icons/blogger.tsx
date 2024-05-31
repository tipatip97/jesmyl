import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M10 10H11',
  d3: 'M10 15H14',
  d4: 'M14.9577 11.4622V10.5088C14.9577 8.63614 14.9577 7.69981 14.4825 7.04341C13.5821 5.79972 11.833 6.01409 10.4788 6.01409C9.12474 6.01409 7.37562 5.79972 6.47521 7.04341C6 7.69981 6 8.63614 6 10.5088V13.0059C6 15.3601 6 16.5373 6.72879 17.2686C7.45758 18 8.63055 18 10.9765 18H14.6862C17.285 18 18.3239 16.1725 17.913 13.5687C17.6684 12.0195 16.3315 11.4622 14.9577 11.4622Z',
  d5: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124ZM14.9577 10.5088V11.4622C16.3315 11.4622 17.6684 12.0195 17.913 13.5687C18.3239 16.1725 17.285 18 14.6862 18H10.9765C8.63055 18 7.45758 18 6.72879 17.2686C6 16.5373 6 15.3601 6 13.0059V10.5088C6 8.63614 6 7.69981 6.47521 7.04342C7.26267 5.95573 8.69928 5.98325 9.95308 6.00727C10.1329 6.01071 10.309 6.01409 10.4788 6.01409C10.6487 6.01409 10.8248 6.01071 11.0046 6.00727C12.2584 5.98325 13.695 5.95573 14.4825 7.04342C14.9577 7.69981 14.9577 8.63614 14.9577 10.5088Z',
  d6: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.7521 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM14.9577 10.5088V11.4622C16.3315 11.4622 17.6684 12.0195 17.913 13.5687C18.3239 16.1725 17.285 18 14.6862 18H10.9765C8.63055 18 7.45758 18 6.72879 17.2686C6 16.5373 6 15.3601 6 13.0059L6 10.5088C6 8.63614 6 7.69981 6.47521 7.04342C7.26267 5.95573 8.69928 5.98325 9.95308 6.00727L9.95316 6.00727L9.9534 6.00728C10.1331 6.01072 10.3091 6.01409 10.4788 6.01409C10.6486 6.01409 10.8246 6.01072 11.0043 6.00728L11.0045 6.00727L11.0046 6.00727C12.2584 5.98325 13.695 5.95573 14.4825 7.04342C14.9577 7.69981 14.9577 8.63614 14.9577 10.5088ZM10 9.25C9.58579 9.25 9.25 9.58579 9.25 10C9.25 10.4142 9.58579 10.75 10 10.75H11C11.4142 10.75 11.75 10.4142 11.75 10C11.75 9.58579 11.4142 9.25 11 9.25H10ZM9.25 15C9.25 14.5858 9.58579 14.25 10 14.25L14 14.25C14.4142 14.25 14.75 14.5858 14.75 15C14.75 15.4142 14.4142 15.75 14 15.75L10 15.75C9.58579 15.75 9.25 15.4142 9.25 15Z',
  d7: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d8: 'M14.9577 11.4622L14.9577 10.5088C14.9577 8.63614 14.9577 7.69981 14.4825 7.04342C13.695 5.95573 12.2584 5.98325 11.0046 6.00727L11.0045 6.00727C10.8247 6.01072 10.6487 6.01409 10.4788 6.01409C10.309 6.01409 10.133 6.01072 9.95316 6.00727L9.95308 6.00727C8.69928 5.98325 7.26267 5.95573 6.47521 7.04342C6 7.69981 6 8.63614 6 10.5088V13.0059C6 15.3601 6 16.5373 6.72879 17.2686C7.45758 18 8.63055 18 10.9765 18H14.6862C17.285 18 18.3239 16.1725 17.913 13.5687C17.6684 12.0195 16.3315 11.4622 14.9577 11.4622ZM9.25 10C9.25 9.58579 9.58579 9.25 10 9.25H11C11.4142 9.25 11.75 9.58579 11.75 10C11.75 10.4142 11.4142 10.75 11 10.75H10C9.58579 10.75 9.25 10.4142 9.25 10ZM10 14.25C9.58579 14.25 9.25 14.5858 9.25 15C9.25 15.4142 9.58579 15.75 10 15.75H14C14.4142 15.75 14.75 15.4142 14.75 15C14.75 14.5858 14.4142 14.25 14 14.25H10Z',
  d9: 'M21 3V21H3V3H21Z',
  d10: 'M10 9.5H11',
  d11: 'M10 14.5H14',
  d12: 'M6.99316 17.512V6.48828H13.9862C13.9917 6.48828 13.9962 6.49276 13.9962 6.49828V11.0176H16.9878C16.9934 11.0176 16.9978 11.0221 16.9978 11.0276V17.502C16.9978 17.5075 16.9934 17.512 16.9878 17.512H6.99316Z',
  d13: 'M9.25 8.75H11.75V10.25H9.25V8.75Z',
  d14: 'M9.25 13.75H14.75V15.25H9.25V13.75Z',
  d15: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM14.75 6.5C14.75 6.08579 14.4142 5.75 14 5.75L6.25 5.75L6.25 18.25L17 18.25C17.4142 18.2499 17.75 17.9142 17.75 17.5V11C17.75 10.8011 17.671 10.6103 17.5303 10.4697C17.3897 10.329 17.1989 10.25 17 10.25H14.75V6.5Z',
} as const;

export const IconBloggerStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blogger-stroke-rounded IconBloggerStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBloggerDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blogger-duotone-rounded IconBloggerDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBloggerTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blogger-twotone-rounded IconBloggerTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBloggerSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blogger-solid-rounded IconBloggerSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBloggerBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blogger-bulk-rounded IconBloggerBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBloggerStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blogger-stroke-sharp IconBloggerStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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
      />
    </TheIconWrapper>
  );
};

export const IconBloggerSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blogger-solid-sharp IconBloggerSolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBlogger: TheIconSelfPack = {
  name: 'Blogger',
  StrokeRounded: IconBloggerStrokeRounded,
  DuotoneRounded: IconBloggerDuotoneRounded,
  TwotoneRounded: IconBloggerTwotoneRounded,
  SolidRounded: IconBloggerSolidRounded,
  BulkRounded: IconBloggerBulkRounded,
  StrokeSharp: IconBloggerStrokeSharp,
  SolidSharp: IconBloggerSolidSharp,
};