import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.3 2.75143C5.26076 2.94471 4.49591 3.28657 3.89124 3.89124C3.28657 4.49591 2.94471 5.26076 2.75143 6.3M17.7 2.75143C18.7392 2.94471 19.5041 3.28657 20.1088 3.89124C20.7134 4.49591 21.0553 5.26076 21.2486 6.3M13.9 2.50495C13.3156 2.5 12.6839 2.5 12 2.5C11.3161 2.5 10.6844 2.5 10.1 2.50495M21.495 10.1C21.5 10.6844 21.5 11.3161 21.5 12C21.5 12.6839 21.5 13.3156 21.495 13.9001M2.50495 10.1C2.5 10.6844 2.5 11.3161 2.5 12C2.5 12.6839 2.5 13.3156 2.50496 13.9001M2.75143 17.7C2.94471 18.7392 3.28657 19.5041 3.89124 20.1088C4.49591 20.7134 5.26076 21.0553 6.3 21.2486M21.2486 17.7C21.0553 18.7392 20.7134 19.5041 20.1088 20.1088C19.5041 20.7134 18.7392 21.0553 17.7 21.2486M13.9 21.495C13.3156 21.5 12.6839 21.5 12 21.5C11.3162 21.5 10.6845 21.5 10.1002 21.495',
  d2: 'M3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124Z',
  d3: 'M6.3 2.75143C5.26076 2.94471 4.49591 3.28657 3.89124 3.89124C3.28657 4.49591 2.94471 5.26076 2.75143 6.3M17.7 2.75143C18.6779 2.9333 19.4129 3.24674 20 3.78691M13.9 2.50495C13.3156 2.5 12.6839 2.5 12 2.5C11.3161 2.5 10.6844 2.5 10.1 2.50495M2.50495 10.1C2.5 10.6844 2.5 11.3161 2.5 12C2.5 12.6839 2.5 13.3156 2.50496 13.9001M2.75143 17.7C2.9333 18.6779 3.24674 19.4129 3.78691 20',
  d4: 'M11.9972 1.5H12.0028C12.6846 1.5 13.3198 1.5 13.9085 1.50499C14.4607 1.50967 14.9046 1.96117 14.9 2.51343C14.8953 3.0657 14.4438 3.5096 13.8915 3.50492C13.3122 3.50001 12.6849 3.5 12 3.5C11.3151 3.5 10.6878 3.50001 10.1085 3.50492C9.55619 3.5096 9.1047 3.0657 9.10002 2.51343C9.09534 1.96117 9.53924 1.50967 10.0915 1.50499C10.6802 1.5 11.3154 1.5 11.9972 1.5ZM7.28314 2.56858C7.38413 3.11155 7.02582 3.63358 6.48285 3.73457C5.57153 3.90406 5.0166 4.1801 4.59835 4.59835C4.1801 5.0166 3.90406 5.57153 3.73457 6.48285C3.63358 7.02582 3.11155 7.38413 2.56858 7.28314C2.0256 7.18216 1.6673 6.66013 1.76828 6.11715C1.98536 4.94998 2.39304 3.97523 3.18414 3.18414C3.97523 2.39304 4.94998 1.98536 6.11715 1.76828C6.66013 1.6673 7.18216 2.0256 7.28314 2.56858ZM16.7169 2.56858C16.8178 2.0256 17.3399 1.6673 17.8828 1.76828C19.05 1.98536 20.0248 2.39304 20.8159 3.18414C21.607 3.97523 22.0146 4.94998 22.2317 6.11715C22.3327 6.66013 21.9744 7.18216 21.4314 7.28314C20.8884 7.38413 20.3664 7.02582 20.2654 6.48285C20.0959 5.57154 19.8199 5.0166 19.4016 4.59835C18.9834 4.1801 18.4285 3.90406 17.5172 3.73457C16.9742 3.63358 16.6159 3.11155 16.7169 2.56858ZM2.51343 9.10004C3.0657 9.10472 3.5096 9.55621 3.50492 10.1085C3.50001 10.6878 3.5 11.3151 3.5 12C3.5 12.685 3.50001 13.3122 3.50492 13.8916C3.5096 14.4439 3.0657 14.8954 2.51343 14.9C1.96117 14.9047 1.50967 14.4608 1.50499 13.9086C1.5 13.3199 1.5 12.6847 1.5 12.0028V11.9972C1.5 11.3154 1.5 10.6802 1.50499 10.0915C1.50967 9.53926 1.96117 9.09535 2.51343 9.10004ZM21.4866 9.10004C22.0388 9.09535 22.4903 9.53926 22.495 10.0915C22.5 10.6803 22.5 11.3157 22.5 11.9977V12.0023C22.5 12.6844 22.5 13.3197 22.495 13.9086C22.4903 14.4608 22.0388 14.9047 21.4866 14.9C20.9343 14.8954 20.4904 14.4439 20.4951 13.8916C20.5 13.3122 20.5 12.685 20.5 12C20.5 11.3151 20.5 10.6878 20.4951 10.1085C20.4904 9.55621 20.9343 9.10472 21.4866 9.10004ZM2.56858 16.7169C3.11155 16.6159 3.63358 16.9742 3.73457 17.5172C3.90406 18.4285 4.1801 18.9834 4.59835 19.4016C5.0166 19.8199 5.57153 20.0959 6.48285 20.2654C7.02582 20.3664 7.38413 20.8884 7.28314 21.4314C7.18216 21.9744 6.66013 22.3327 6.11715 22.2317C4.94998 22.0146 3.97523 21.607 3.18414 20.8159C2.39304 20.0248 1.98536 19.05 1.76828 17.8828C1.6673 17.3399 2.0256 16.8178 2.56858 16.7169ZM21.4314 16.7169C21.9744 16.8178 22.3327 17.3399 22.2317 17.8828C22.0146 19.05 21.607 20.0248 20.8159 20.8159C20.0248 21.607 19.05 22.0146 17.8828 22.2317C17.3399 22.3327 16.8178 21.9744 16.7169 21.4314C16.6159 20.8884 16.9742 20.3664 17.5172 20.2654C18.4285 20.0959 18.9834 19.8199 19.4016 19.4016C19.8199 18.9834 20.0959 18.4285 20.2654 17.5172C20.3664 16.9742 20.8884 16.6159 21.4314 16.7169ZM9.10019 21.4866C9.10487 20.9343 9.55637 20.4904 10.1086 20.4951C10.688 20.5 11.3151 20.5 12 20.5C12.6849 20.5 13.3122 20.5 13.8915 20.4951C14.4438 20.4904 14.8953 20.9343 14.9 21.4866C14.9046 22.0388 14.4607 22.4903 13.9085 22.495C13.3199 22.5 12.6848 22.5 12.0031 22.5H11.9977C11.3157 22.5 10.6804 22.5 10.0917 22.495C9.53941 22.4903 9.09551 22.0388 9.10019 21.4866Z',
  d5: 'M11.9964 1.5H12.002C12.6838 1.5 13.319 1.5 13.9077 1.50499C14.4599 1.50967 14.9038 1.96117 14.8992 2.51343C14.8945 3.0657 14.443 3.5096 13.8907 3.50492C13.3113 3.50001 12.6841 3.5 11.9992 3.5C11.3142 3.5 10.687 3.50001 10.1077 3.50492C9.55539 3.5096 9.10389 3.0657 9.09921 2.51343C9.09453 1.96117 9.53843 1.50967 10.0907 1.50499C10.6794 1.5 11.3146 1.5 11.9964 1.5ZM7.28233 2.56858C7.38332 3.11155 7.02501 3.63358 6.48204 3.73457C5.57073 3.90406 5.01579 4.1801 4.59754 4.59835C4.17929 5.0166 3.90325 5.57153 3.73376 6.48285C3.63277 7.02582 3.11074 7.38413 2.56777 7.28314C2.0248 7.18216 1.66649 6.66013 1.76748 6.11715C1.98455 4.94998 2.39224 3.97523 3.18333 3.18414C3.97442 2.39304 4.94918 1.98536 6.11634 1.76828C6.65932 1.6673 7.18135 2.0256 7.28233 2.56858ZM16.7161 2.56858C16.817 2.0256 17.3391 1.6673 17.882 1.76828C19.0492 1.98536 20.024 2.39304 20.8151 3.18414C21.6061 3.97523 22.0138 4.94998 22.2309 6.11715C22.3319 6.66013 21.9736 7.18216 21.4306 7.28314C20.8876 7.38413 20.3656 7.02582 20.2646 6.48285C20.0951 5.57154 19.8191 5.0166 19.4008 4.59835C18.9826 4.1801 18.4277 3.90406 17.5163 3.73457C16.9734 3.63358 16.6151 3.11155 16.7161 2.56858ZM2.51262 9.10004C3.06489 9.10472 3.50879 9.55621 3.50411 10.1085C3.49342 11.3693 3.49342 12.6308 3.50411 13.8916C3.50879 14.4439 3.06489 14.8954 2.51263 14.9C1.96036 14.9047 1.50887 14.4608 1.50418 13.9086C1.4934 12.6364 1.4934 11.3636 1.50418 10.0915C1.50887 9.53926 1.96036 9.09535 2.51262 9.10004ZM21.4858 9.10004C22.038 9.09535 22.4895 9.53926 22.4942 10.0915C22.505 11.3636 22.505 12.6364 22.4942 13.9086C22.4895 14.4608 22.038 14.9047 21.4858 14.9C20.9335 14.8954 20.4896 14.4439 20.4943 13.8916C20.505 12.6308 20.505 11.3693 20.4943 10.1085C20.4896 9.55621 20.9335 9.10472 21.4858 9.10004ZM2.56777 16.7169C3.11074 16.6159 3.63277 16.9742 3.73376 17.5172C3.90325 18.4285 4.17929 18.9834 4.59754 19.4016C5.01579 19.8199 5.57073 20.0959 6.48204 20.2654C7.02501 20.3664 7.38332 20.8884 7.28233 21.4314C7.18135 21.9744 6.65932 22.3327 6.11634 22.2317C4.94917 22.0146 3.97442 21.607 3.18333 20.8159C2.39223 20.0248 1.98455 19.05 1.76748 17.8828C1.66649 17.3399 2.0248 16.8178 2.56777 16.7169ZM21.4306 16.7169C21.9736 16.8178 22.3319 17.3399 22.2309 17.8828C22.0138 19.05 21.6061 20.0248 20.8151 20.8159C20.024 21.607 19.0492 22.0146 17.882 22.2317C17.3391 22.3327 16.817 21.9744 16.7161 21.4314C16.6151 20.8884 16.9734 20.3664 17.5163 20.2654C18.4277 20.0959 18.9826 19.8199 19.4008 19.4016C19.8191 18.9834 20.0951 18.4285 20.2646 17.5172C20.3656 16.9742 20.8876 16.6159 21.4306 16.7169ZM9.09938 21.4866C9.10407 20.9343 9.55556 20.4904 10.1078 20.4951C10.6871 20.5 11.3143 20.5 11.9992 20.5C12.6841 20.5 13.3113 20.5 13.8907 20.4951C14.443 20.4904 14.8945 20.9343 14.8992 21.4866C14.9038 22.0388 14.4599 22.4903 13.9077 22.495C13.3191 22.5 12.684 22.5 12.0023 22.5H11.9969C11.3149 22.5 10.6796 22.5 10.0909 22.495C9.5386 22.4903 9.0947 22.0388 9.09938 21.4866Z',
  d6: 'M11.9961 1.5H12.0017C12.6835 1.5 13.3187 1.5 13.9074 1.50499C14.4597 1.50967 14.9036 1.96117 14.8989 2.51343C14.8942 3.0657 14.4427 3.5096 13.8904 3.50492C13.3111 3.50001 12.6839 3.5 11.9989 3.5C11.314 3.5 10.6867 3.50001 10.1074 3.50492C9.55511 3.5096 9.10362 3.0657 9.09893 2.51343C9.09425 1.96117 9.53815 1.50967 10.0904 1.50499C10.6791 1.5 11.3143 1.5 11.9961 1.5ZM7.28206 2.56858C7.38304 3.11155 7.02474 3.63358 6.48176 3.73457C5.57045 3.90406 5.01551 4.1801 4.59727 4.59835C4.17902 5.0166 3.90297 5.57153 3.73348 6.48285C3.6325 7.02582 3.11047 7.38413 2.56749 7.28314C2.02452 7.18216 1.66622 6.66013 1.7672 6.11715C1.98427 4.94998 2.39196 3.97523 3.18305 3.18414C3.97414 2.39304 4.9489 1.98536 6.11607 1.76828C6.65904 1.6673 7.18107 2.0256 7.28206 2.56858ZM16.7158 2.56858C16.8168 2.0256 17.3388 1.6673 17.8818 1.76828C19.0489 1.98536 20.0237 2.39304 20.8148 3.18414C21.6059 3.97523 22.0136 4.94998 22.2306 6.11715C22.3316 6.66013 21.9733 7.18216 21.4303 7.28314C20.8874 7.38413 20.3653 7.02582 20.2644 6.48285C20.0949 5.57154 19.8188 5.0166 19.4006 4.59835C18.9823 4.1801 18.4274 3.90406 17.5161 3.73457C16.9731 3.63358 16.6148 3.11155 16.7158 2.56858Z',
  d7: 'M3.50383 10.1085C3.50852 9.55621 3.06461 9.10472 2.51235 9.10004C1.96008 9.09535 1.50859 9.53926 1.50391 10.0915L1.5 12H3.49582L3.50383 10.1085Z',
  d8: 'M22.4939 10.0915C22.4892 9.53926 22.0377 9.09535 21.4855 9.10004C20.9332 9.10472 20.4893 9.55621 20.494 10.1085C20.4993 10.7389 20.502 12 20.502 12H22.5L22.4939 10.0915Z',
  d9: 'M3 17L3 21H7M21 17V21H17M21 7V3L17 3M3 7L3 3L7 3M3 15L3 9M21 9V15M9 3L15 3M15 21H9',
  d10: 'M20 4H17V2L21 2C21.2652 2 21.5196 2.10536 21.7071 2.29289C21.8946 2.48043 22 2.73478 22 3V7H20V4ZM15 4L9 4V2L15 2V4ZM4 4L7 4V2L3 2C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3L2 7H4V4ZM20 15V9H22V15H20ZM4 9L4 15H2L2 9H4ZM20 20V17H22V21C22 21.5523 21.5523 22 21 22H17V20H20ZM4 20L4 17H2L2 21C2 21.5523 2.44772 22 3 22H7V20H4ZM9 20H15V22H9V20Z',
} as const;

export const IconBorderNone02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="border-none-02-stroke-rounded IconBorderNone02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBorderNone02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="border-none-02-duotone-rounded IconBorderNone02DuotoneRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconBorderNone02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="border-none-02-twotone-rounded IconBorderNone02TwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBorderNone02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="border-none-02-solid-rounded IconBorderNone02SolidRounded"
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

export const IconBorderNone02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="border-none-02-bulk-rounded IconBorderNone02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBorderNone02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="border-none-02-stroke-sharp IconBorderNone02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBorderNone02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="border-none-02-solid-sharp IconBorderNone02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBorderNone02: TheIconSelfPack = {
  name: 'BorderNone02',
  StrokeRounded: IconBorderNone02StrokeRounded,
  DuotoneRounded: IconBorderNone02DuotoneRounded,
  TwotoneRounded: IconBorderNone02TwotoneRounded,
  SolidRounded: IconBorderNone02SolidRounded,
  BulkRounded: IconBorderNone02BulkRounded,
  StrokeSharp: IconBorderNone02StrokeSharp,
  SolidSharp: IconBorderNone02SolidSharp,
};