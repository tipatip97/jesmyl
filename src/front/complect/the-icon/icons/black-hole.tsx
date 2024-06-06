import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.5 5C21.3284 5 22 4.32843 22 3.5C22 2.67157 21.3284 2 20.5 2C19.6716 2 19 2.67157 19 3.5C19 4.32843 19.6716 5 20.5 5Z',
  d2: 'M3.5 22C4.32843 22 5 21.3284 5 20.5C5 19.6716 4.32843 19 3.5 19C2.67157 19 2 19.6716 2 20.5C2 21.3284 2.67157 22 3.5 22Z',
  d3: 'M21.0385 13.0623C21.6076 12.9268 22 12.4933 22 12C22 11.5067 21.6076 11.0732 21.0385 10.9377L16.5212 9.8622C15.7198 8.17022 13.9966 7 12 7C10.0034 7 8.28021 8.17023 7.47877 9.8622L2.96152 10.9377C2.39239 11.0732 2 11.5067 2 12C2 12.4933 2.39239 12.9268 2.96152 13.0623L7.47877 14.1378C8.28021 15.8298 10.0034 17 12 17C13.9966 17 15.7198 15.8298 16.5212 14.1378L21.0385 13.0623Z',
  d4: 'M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z',
  d5: 'M15.0007 2.4578C14.0537 2.16035 13.0459 2 12.0007 2C8.7291 2 5.82441 3.57111 4 6M9.00073 21.5422C9.94777 21.8396 10.9555 22 12.0007 22C15.2719 22 18.1763 20.4293 20.0007 18.001',
  d6: 'M22 12C22 12.4933 21.6076 12.9268 21.0385 13.0623L16.5212 14.1378C15.7198 15.8298 13.9966 17 12 17C10.0034 17 8.28021 15.8298 7.47877 14.1378L2.96152 13.0623C2.39239 12.9268 2 12.4933 2 12C2 11.5067 2.39239 11.0732 2.96152 10.9377L7.47877 9.8622C8.28021 8.17023 10.0034 7 12 7C13.9966 7 15.7198 8.17022 16.5212 9.8622L21.0385 10.9377C21.6076 11.0732 22 11.5067 22 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z',
  d7: 'M18.25 3.5C18.25 2.25736 19.2574 1.25 20.5 1.25C21.7426 1.25 22.75 2.25736 22.75 3.5C22.75 4.74264 21.7426 5.75 20.5 5.75C19.2574 5.75 18.25 4.74264 18.25 3.5Z',
  d8: 'M1.25 20.5C1.25 19.2574 2.25736 18.25 3.5 18.25C4.74264 18.25 5.75 19.2574 5.75 20.5C5.75 21.7426 4.74264 22.75 3.5 22.75C2.25736 22.75 1.25 21.7426 1.25 20.5Z',
  d9: 'M12 6.25C9.8347 6.25 7.95027 7.44689 6.96988 9.2124L2.78781 10.2081C1.96752 10.4034 1.25 11.0776 1.25 12C1.25 12.9224 1.96752 13.5966 2.78781 13.7919L6.96988 14.7876C7.95027 16.5531 9.8347 17.75 12 17.75C14.1653 17.75 16.0497 16.5531 17.0301 14.7876L21.2122 13.7919C22.0325 13.5966 22.75 12.9224 22.75 12C22.75 11.0776 22.0325 10.4034 21.2122 10.2081L17.0301 9.21239C16.0497 7.44689 14.1653 6.25 12 6.25ZM12 9.25C10.4812 9.25 9.25 10.4812 9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25Z',
  d10: 'M12.0004 3.20455C9.13844 3.20455 6.59749 4.58477 4.99955 6.72329C4.67709 7.15484 4.06767 7.24191 3.63837 6.91776C3.20906 6.59361 3.12245 5.98099 3.44491 5.54944C5.39428 2.94058 8.50106 1.25 12.0004 1.25C13.1164 1.25 14.1943 1.4222 15.2082 1.7423C15.7204 1.90403 16.0053 2.45258 15.8444 2.96751C15.6835 3.48244 15.1378 3.76877 14.6256 3.60704C13.7981 3.34577 12.9165 3.20455 12.0004 3.20455ZM20.3617 17.0833C20.791 17.4075 20.8775 18.0201 20.555 18.4516C18.6056 21.0599 15.4992 22.75 12.0004 22.75C10.8843 22.75 9.80638 22.5778 8.79251 22.2577C8.28027 22.096 7.99544 21.5474 8.15632 21.0325C8.31721 20.5176 8.86289 20.2312 9.37514 20.393C10.2027 20.6542 11.0842 20.7955 12.0004 20.7955C14.8619 20.7955 17.4025 19.4156 19.0005 17.2776C19.323 16.8461 19.9325 16.7591 20.3617 17.0833Z',
  d11: 'M6.96988 9.2124C7.95027 7.44689 9.8347 6.25 12 6.25C14.1653 6.25 16.0497 7.44689 17.0301 9.21239L21.2122 10.2081C22.0325 10.4034 22.75 11.0776 22.75 12C22.75 12.9224 22.0325 13.5966 21.2122 13.7919L17.0301 14.7876C16.0497 16.5531 14.1653 17.75 12 17.75C9.8347 17.75 7.95027 16.5531 6.96988 14.7876L2.78781 13.7919C1.96752 13.5966 1.25 12.9224 1.25 12C1.25 11.0776 1.96752 10.4034 2.78781 10.2081L6.96988 9.2124Z',
  d12: 'M9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12Z',
  d13: 'M22 12L16.5212 9.8622C15.7198 8.17022 13.9966 7 12 7C10.0034 7 8.28021 8.17023 7.47877 9.8622L2 12L7.47877 14.1378C8.28021 15.8298 10.0034 17 12 17C13.9966 17 15.7198 15.8298 16.5212 14.1378L22 12Z',
  d14: 'M12.0004 3.20455C9.15689 3.20455 6.63229 4.58477 5.04464 6.72329L3.5 5.54944C5.43682 2.94058 8.52361 1.25 12.0004 1.25C13.1093 1.25 14.1802 1.4222 15.1876 1.7423L14.6087 3.60704C13.7865 3.34577 12.9107 3.20455 12.0004 3.20455ZM12.0004 20.7955C14.8435 20.7955 17.3678 19.4156 18.9555 17.2776L20.5 18.4516C18.5631 21.0599 15.4767 22.75 12.0004 22.75C10.8915 22.75 9.82053 22.5778 8.81319 22.2577L9.39207 20.393C10.2143 20.6542 11.0901 20.7955 12.0004 20.7955Z',
  d15: 'M12 6.25C9.81226 6.25 7.91124 7.47183 6.93969 9.26747L1.72737 11.3013C1.43951 11.4136 1.25 11.691 1.25 12C1.25 12.309 1.43951 12.5864 1.72737 12.6987L6.93969 14.7325C7.91124 16.5282 9.81226 17.75 12 17.75C14.1877 17.75 16.0888 16.5282 17.0603 14.7325L22.2726 12.6987C22.5605 12.5864 22.75 12.309 22.75 12C22.75 11.691 22.5605 11.4136 22.2726 11.3013L17.0603 9.26747C16.0888 7.47182 14.1877 6.25 12 6.25ZM12 9.25C10.4812 9.25 9.25 10.4812 9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25Z',
} as const;

export const IconBlackHoleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="black-hole-stroke-rounded IconBlackHoleStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBlackHoleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="black-hole-duotone-rounded IconBlackHoleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconBlackHoleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="black-hole-twotone-rounded IconBlackHoleTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlackHoleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="black-hole-solid-rounded IconBlackHoleSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBlackHoleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="black-hole-bulk-rounded IconBlackHoleBulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBlackHoleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="black-hole-stroke-sharp IconBlackHoleStrokeSharp"
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
        d={d.d13} 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlackHoleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="black-hole-solid-sharp IconBlackHoleSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
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

export const iconPackOfBlackHole: TheIconSelfPack = {
  name: 'BlackHole',
  StrokeRounded: IconBlackHoleStrokeRounded,
  DuotoneRounded: IconBlackHoleDuotoneRounded,
  TwotoneRounded: IconBlackHoleTwotoneRounded,
  SolidRounded: IconBlackHoleSolidRounded,
  BulkRounded: IconBlackHoleBulkRounded,
  StrokeSharp: IconBlackHoleStrokeSharp,
  SolidSharp: IconBlackHoleSolidSharp,
};