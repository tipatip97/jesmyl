import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 8C2 8 6.47715 3 12 3C17.5228 3 22 8 22 8',
  d2: 'M21.544 13.045C21.848 13.4713 22 13.6845 22 14C22 14.3155 21.848 14.5287 21.544 14.955C20.1779 16.8706 16.6892 21 12 21C7.31078 21 3.8221 16.8706 2.45604 14.955C2.15201 14.5287 2 14.3155 2 14C2 13.6845 2.15201 13.4713 2.45604 13.045C3.8221 11.1294 7.31078 7 12 7C16.6892 7 20.1779 11.1294 21.544 13.045Z',
  d3: 'M15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14Z',
  d4: 'M22 14C22 13.6845 21.848 13.4713 21.544 13.045C20.1779 11.1294 16.6892 7 12 7C7.31078 7 3.8221 11.1294 2.45604 13.045C2.15201 13.4713 2 13.6845 2 14C2 14.3155 2.15201 14.5287 2.45604 14.955C3.8221 16.8706 7.31078 21 12 21C16.6892 21 20.1779 16.8706 21.544 14.955C21.848 14.5287 22 14.3155 22 14ZM12 11C13.6569 11 15 12.3431 15 14C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11Z',
  d5: 'M19.6394 4.92721C17.7538 3.62471 15.0525 2.25 12 2.25C8.94756 2.25 6.24625 3.62471 4.3606 4.92721C3.40826 5.58503 2.63887 6.24179 2.10629 6.73514C1.84643 6.97586 1.42164 7.41189 1.26681 7.57083L1.25502 7.58292C0.886606 7.99436 0.921484 8.62657 1.33293 8.99498C1.74409 9.36315 2.37571 9.32857 2.74424 8.91792L2.74502 8.91706C2.86755 8.7913 3.22618 8.42398 3.46543 8.20236C3.94491 7.75821 4.63998 7.16497 5.49728 6.57279C7.23092 5.37529 9.52961 4.25 12 4.25C14.4704 4.25 16.7691 5.37529 18.5027 6.57279C19.36 7.16497 20.0551 7.75821 20.5346 8.20236C20.7738 8.42398 21.1332 8.79216 21.2558 8.91792C21.6243 9.32857 22.2559 9.36315 22.6671 8.99498C23.0785 8.62657 23.1134 7.99436 22.745 7.58292L22.7331 7.57071C22.5782 7.41167 22.1535 6.9758 21.8937 6.73514C21.3612 6.24179 20.5918 5.58503 19.6394 4.92721Z',
  d6: 'M12 6.25C9.42944 6.25 7.22595 7.38141 5.52031 8.71298C3.81313 10.0458 2.49804 11.694 1.79219 12.6837C1.53904 13.0358 1.25 13.4378 1.25 14C1.25 14.5622 1.53904 14.9642 1.79219 15.3163C2.49805 16.306 3.81313 17.9542 5.52031 19.287C7.22595 20.6186 9.42944 21.75 12 21.75C14.5706 21.75 16.774 20.6186 18.4797 19.287C20.1869 17.9542 21.502 16.306 22.2078 15.3163C22.461 14.9642 22.75 14.5622 22.75 14C22.75 13.4378 22.461 13.0358 22.2078 12.6837C21.502 11.694 20.1869 10.0458 18.4797 8.71298C16.774 7.38141 14.5706 6.25 12 6.25ZM10 14C10 15.1046 10.8954 16 12 16C13.1046 16 14 15.1046 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14ZM12 18C9.79086 18 8 16.2091 8 14C8 11.7909 9.79086 10 12 10C14.2091 10 16 11.7909 16 14C16 16.2091 14.2091 18 12 18Z',
  d7: 'M5.52031 8.71298C7.22595 7.38141 9.42944 6.25 12 6.25C14.5706 6.25 16.774 7.38141 18.4797 8.71298C20.1869 10.0458 21.502 11.694 22.2078 12.6837C22.461 13.0358 22.75 13.4378 22.75 14C22.75 14.5622 22.461 14.9642 22.2078 15.3163C21.502 16.306 20.1869 17.9542 18.4797 19.287C16.774 20.6186 14.5706 21.75 12 21.75C9.42944 21.75 7.22595 20.6186 5.52031 19.287C3.81313 17.9542 2.49805 16.306 1.79219 15.3163C1.53904 14.9642 1.25 14.5622 1.25 14C1.25 13.4378 1.53904 13.0358 1.79219 12.6837C2.49804 11.694 3.81313 10.0458 5.52031 8.71298Z',
  d8: 'M12 16C10.8954 16 10 15.1046 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 15.1046 13.1046 16 12 16ZM8 14C8 16.2091 9.79086 18 12 18C14.2091 18 16 16.2091 16 14C16 11.7909 14.2091 10 12 10C9.79086 10 8 11.7909 8 14Z',
  d9: 'M12 7C7.08671 7 3.43133 11.7818 2 14C3.43133 16.2182 7.08671 21 12 21C16.9133 21 20.5687 16.2182 22 14C20.5687 11.7818 16.9133 7 12 7Z',
  d10: 'M21.2618 8.91747C21.2616 8.91729 21.2615 8.91708 22.0064 8.25C22.7514 7.58292 22.7512 7.58268 22.751 7.58241L22.749 7.58021L22.7449 7.57569L22.7318 7.56131C22.7209 7.54938 22.7057 7.53282 22.6863 7.51195C22.6473 7.47022 22.5915 7.41118 22.5195 7.3373C22.3756 7.18963 22.1669 6.98227 21.9002 6.73514C21.3676 6.24179 20.5982 5.58503 19.6458 4.92721C17.7602 3.62471 15.0589 2.25 12.0064 2.25C8.95398 2.25 6.25268 3.62471 4.36703 4.92721C3.41468 5.58503 2.64529 6.24179 2.11272 6.73514C1.84594 6.98227 1.63724 7.18963 1.49336 7.3373C1.42138 7.41118 1.36552 7.47022 1.32661 7.51195C1.30716 7.53282 1.29193 7.54938 1.28104 7.56131L1.26796 7.57569L1.26388 7.58021L1.26246 7.5818C1.26222 7.58206 1.26145 7.58292 2.00644 8.25C2.75142 8.91708 2.75124 8.91729 2.75107 8.91747L2.75786 8.91001L2.78951 8.87574C2.81889 8.84424 2.86461 8.79586 2.92584 8.73301C3.04837 8.60725 3.23261 8.42398 3.47185 8.20236C3.95133 7.75821 4.64641 7.16497 5.50371 6.57279C7.23735 5.37529 9.53604 4.25 12.0064 4.25C14.4768 4.25 16.7755 5.37529 18.5092 6.57279C19.3665 7.16497 20.0615 7.75821 20.541 8.20236C20.7803 8.42398 20.9645 8.60725 21.087 8.73301C21.1483 8.79586 21.194 8.84424 21.2234 8.87574L21.255 8.91001L21.2618 8.91747Z',
  d11: 'M10.0049 14C10.0049 15.1046 10.9003 16 12.0049 16C13.1095 16 14.0049 15.1046 14.0049 14C14.0049 12.8954 13.1095 12 12.0049 12C10.9003 12 10.0049 12.8954 10.0049 14Z',
  d12: 'M11.999 6.25C9.32776 6.25 7.04743 7.56594 5.29231 9.10033C3.53321 10.6382 2.23387 12.4535 1.50799 13.5934L1.24902 14L1.50799 14.4066C2.23387 15.5465 3.53321 17.3618 5.29231 18.8997C7.04743 20.4341 9.32776 21.75 11.999 21.75C14.6703 21.75 16.9506 20.4341 18.7057 18.8997C20.4648 17.3618 21.7642 15.5465 22.4901 14.4066L22.749 14L22.4901 13.5934C21.7642 12.4535 20.4648 10.6382 18.7057 9.10033C16.9506 7.56593 14.6703 6.25 11.999 6.25ZM12.0049 18C9.79574 18 8.00488 16.2091 8.00488 14C8.00488 11.7909 9.79574 10 12.0049 10C14.214 10 16.0049 11.7909 16.0049 14C16.0049 16.2091 14.214 18 12.0049 18Z',
} as const;

export const IconEyeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eye-stroke-rounded IconEyeStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconEyeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eye-duotone-rounded IconEyeDuotoneRounded"
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
        strokeLinecap="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconEyeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eye-twotone-rounded IconEyeTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconEyeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eye-solid-rounded IconEyeSolidRounded"
    >
      <path 
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

export const IconEyeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eye-bulk-rounded IconEyeBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconEyeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eye-stroke-sharp IconEyeStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEyeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eye-solid-sharp IconEyeSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfEye: TheIconSelfPack = {
  name: 'Eye',
  StrokeRounded: IconEyeStrokeRounded,
  DuotoneRounded: IconEyeDuotoneRounded,
  TwotoneRounded: IconEyeTwotoneRounded,
  SolidRounded: IconEyeSolidRounded,
  BulkRounded: IconEyeBulkRounded,
  StrokeSharp: IconEyeStrokeSharp,
  SolidSharp: IconEyeSolidSharp,
};