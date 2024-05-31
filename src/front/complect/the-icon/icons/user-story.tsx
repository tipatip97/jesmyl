import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 2C17.5237 2 22 6.47778 22 12C22 17.5222 17.5237 22 12 22',
  d2: 'M9 21.5C7.81163 21.0953 6.69532 20.5107 5.72302 19.7462M5.72302 4.25385C6.69532 3.50059 7.81163 2.90473 9 2.5M2 10.2461C2.21607 9.08813 2.66019 7.96386 3.29638 6.94078M2 13.7539C2.21607 14.9119 2.66019 16.0361 3.29638 17.0592',
  d3: 'M8 16.5C10.0726 14.302 13.9051 14.1986 16 16.5M14.2179 9.75C14.2179 10.9926 13.2215 12 11.9925 12C10.7634 12 9.76708 10.9926 9.76708 9.75C9.76708 8.50736 10.7634 7.5 11.9925 7.5C13.2215 7.5 14.2179 8.50736 14.2179 9.75Z',
  d4: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11.992 12C13.221 12 14.2174 10.9926 14.2174 9.75C14.2174 8.50736 13.221 7.5 11.992 7.5C10.7629 7.5 9.7666 8.50736 9.7666 9.75C9.7666 10.9926 10.7629 12 11.992 12Z',
  d5: 'M11.0229 2.22727C11.0229 1.68754 11.4604 1.25 12.0002 1.25C17.9382 1.25 22.7502 6.06364 22.7502 12C22.7502 17.9364 17.9382 22.75 12.0002 22.75C11.4604 22.75 11.0229 22.3125 11.0229 21.7727C11.0229 21.233 11.4604 20.7955 12.0002 20.7955C16.8585 20.7955 20.7956 16.8571 20.7956 12C20.7956 7.14292 16.8585 3.20455 12.0002 3.20455C11.4604 3.20455 11.0229 2.76701 11.0229 2.22727ZM9.58105 2.51096C9.77413 3.01497 9.52206 3.58008 9.01804 3.77315C8.0927 4.12763 7.22663 4.61191 6.46436 5.20245C6.03769 5.533 5.42384 5.45508 5.09329 5.02841C4.76274 4.60174 4.84067 3.98789 5.26734 3.65734C6.18574 2.94584 7.2205 2.36869 8.31885 1.94795C8.82287 1.75487 9.38797 2.00694 9.58105 2.51096ZM4.01043 6.22586C4.46878 6.51088 4.60928 7.11349 4.32427 7.57183C3.76386 8.47304 3.37605 9.45814 3.18814 10.4652C3.08914 10.9958 2.57877 11.3457 2.04819 11.2467C1.51762 11.1477 1.16776 10.6373 1.26675 10.1067C1.50116 8.85047 1.9814 7.63814 2.66446 6.5397C2.94948 6.08136 3.55209 5.94085 4.01043 6.22586ZM2.04819 12.7533C2.57877 12.6543 3.08914 13.0042 3.18814 13.5348C3.37605 14.5419 3.76386 15.527 4.32427 16.4282C4.60928 16.8865 4.46878 17.4891 4.01043 17.7741C3.55209 18.0592 2.94948 17.9186 2.66447 17.4603C1.9814 16.3619 1.50116 15.1495 1.26675 13.8933C1.16776 13.3627 1.51762 12.8523 2.04819 12.7533ZM5.09761 18.9661C5.43122 18.5418 6.04562 18.4683 6.4699 18.8019C7.22608 19.3964 8.08862 19.8729 9.01658 20.2267C9.5209 20.4189 9.77388 20.9837 9.58161 21.488C9.38934 21.9923 8.82464 22.2453 8.32031 22.053C7.22459 21.6353 6.18629 21.0652 5.2618 20.3383C4.83752 20.0047 4.76401 19.3903 5.09761 18.9661Z',
  d6: 'M9.01747 9.75C9.01747 8.10094 10.3418 6.75 11.9929 6.75C13.6439 6.75 14.9682 8.10094 14.9682 9.75C14.9682 11.3991 13.6439 12.75 11.9929 12.75C10.3418 12.75 9.01747 11.3991 9.01747 9.75Z',
  d7: 'M7.47111 15.9682C9.82384 13.4936 14.135 13.3585 16.5389 15.9775C16.6748 16.1256 16.7456 16.322 16.7354 16.5226C16.7253 16.7233 16.635 16.9115 16.4848 17.0451C15.293 18.1052 13.7211 18.75 12.0004 18.75C10.2798 18.75 8.70802 18.1053 7.51624 17.0454C7.36437 16.9103 7.27381 16.7194 7.26531 16.5163C7.2568 16.3133 7.33107 16.1154 7.47111 15.9682Z',
  d8: 'M20.793 12C20.793 7.14292 16.8528 3.20455 11.9907 3.20455V1.25C17.9333 1.25 22.749 6.06364 22.749 12C22.749 17.9364 17.9333 22.75 11.9907 22.75V20.7955C16.8528 20.7955 20.793 16.8571 20.793 12ZM9.37196 3.641C8.30881 4.00281 7.31345 4.53454 6.45064 5.20245L5.25269 3.65734C6.29176 2.85298 7.47998 2.22008 8.74133 1.79082L9.37196 3.641ZM4.3089 7.57183C3.74805 8.47304 3.35995 9.45814 3.17189 10.4652L1.24902 10.1067C1.4836 8.85047 1.96422 7.63814 2.64781 6.5397L4.3089 7.57183ZM2.64781 17.4603C1.96422 16.3619 1.4836 15.1495 1.24902 13.8933L3.17189 13.5348C3.35995 14.5419 3.74805 15.527 4.3089 16.4282L2.64781 17.4603ZM6.45618 18.8019C7.312 19.4743 8.30383 19.9955 9.37196 20.359L8.74133 22.2092C7.48496 21.7816 6.29321 21.1602 5.24715 20.3383L6.45618 18.8019Z',
  d9: 'M9.00707 9C9.00707 7.35094 10.3354 6 11.9913 6C13.6473 6 14.9756 7.35094 14.9756 9C14.9756 10.6491 13.6473 12 11.9913 12C10.3354 12 9.00707 10.6491 9.00707 9Z',
  d10: 'M7.4561 15.2182C9.81585 12.7436 14.1398 12.6085 16.551 15.2275C16.6873 15.3756 16.7583 15.572 16.7481 15.7726C16.7379 15.9733 16.6473 16.1615 16.4967 16.2951C15.3013 17.3552 13.7247 18 11.9989 18C10.2732 18 8.6967 17.3553 7.50136 16.2954C7.34904 16.1603 7.25821 15.9694 7.24968 15.7663C7.24115 15.5633 7.31564 15.3654 7.4561 15.2182Z',
} as const;

export const IconUserStoryStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-story-stroke-rounded IconUserStoryStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconUserStoryDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-story-duotone-rounded IconUserStoryDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconUserStoryTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-story-twotone-rounded IconUserStoryTwotoneRounded"
    >
      <path 
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
      />
    </TheIconWrapper>
  );
};

export const IconUserStorySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-story-solid-rounded IconUserStorySolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserStoryBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-story-bulk-rounded IconUserStoryBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserStoryStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-story-stroke-sharp IconUserStoryStrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserStorySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-story-solid-sharp IconUserStorySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfUserStory: TheIconSelfPack = {
  name: 'UserStory',
  StrokeRounded: IconUserStoryStrokeRounded,
  DuotoneRounded: IconUserStoryDuotoneRounded,
  TwotoneRounded: IconUserStoryTwotoneRounded,
  SolidRounded: IconUserStorySolidRounded,
  BulkRounded: IconUserStoryBulkRounded,
  StrokeSharp: IconUserStoryStrokeSharp,
  SolidSharp: IconUserStorySolidSharp,
};