import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.6667 21.2482C18.715 21.0549 19.4866 20.7131 20.0966 20.1084C20.7065 19.5037 21.0514 18.7389 21.2464 17.6996M10 21.4947C10.5895 21.4996 11.2268 21.4996 11.9167 21.4996C12.6066 21.4996 13.2438 21.4996 13.8334 21.4947M21.495 13.8996C21.5 13.3152 21.5 12.6835 21.5 11.9996C21.5 11.3157 21.5 10.684 21.495 10.0996M21.2464 6.29963C21.0514 5.26039 20.7065 4.49555 20.0966 3.89088C19.4866 3.28621 18.715 2.94434 17.6667 2.75106M10 2.50459C10.5893 2.49963 11.2271 2.49963 11.9167 2.49963C12.6065 2.49963 13.2437 2.49963 13.8332 2.50459',
  d2: 'M6.5 21.4996C5.40606 21.3011 4.60096 20.9499 3.96447 20.3288C2.5 18.8998 2.5 16.5997 2.5 11.9996C2.5 7.39955 2.5 5.0995 3.96447 3.67044C4.60096 3.04933 5.40606 2.69817 6.5 2.49963',
  d3: 'M3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124Z',
  d4: 'M17.6667 21.2486C18.715 21.0553 19.4866 20.7134 20.0966 20.1088C20.7065 19.5041 21.0514 18.7392 21.2464 17.7M10 21.495C10.5895 21.5 11.2268 21.5 11.9167 21.5C12.6066 21.5 13.2438 21.5 13.8334 21.495M21.495 13.9C21.5 13.3156 21.5 12.6839 21.5 12C21.5 11.3161 21.5 10.6844 21.495 10.0999M21.2464 6.3C21.0514 5.26076 20.7065 4.49591 20.0966 3.89124C19.4866 3.28657 18.715 2.94471 17.6667 2.75142M10 2.50495C10.5893 2.5 11.2271 2.5 11.9167 2.5C12.6065 2.5 13.2437 2.5 13.8332 2.50495',
  d5: 'M6.5 21.5C5.40606 21.3015 4.60096 20.9503 3.96447 20.3292C2.5 18.9001 2.5 16.6001 2.5 12C2.5 7.39991 2.5 5.09987 3.96447 3.6708C4.60096 3.04969 5.40606 2.69854 6.5 2.5',
  d6: 'M9.00004 2.51336C8.99539 1.96109 9.43933 1.50963 9.99159 1.50499C10.585 1.5 11.2261 1.5 11.9135 1.5L11.9198 1.5C12.6074 1.5 13.248 1.5 13.8416 1.50499C14.3938 1.50963 14.8378 1.96109 14.8331 2.51336C14.8285 3.06562 14.377 3.50956 13.8248 3.50492C13.2403 3.50001 12.6075 3.5 11.9167 3.5C11.226 3.5 10.5927 3.50001 10.0084 3.50492C9.45614 3.50956 9.00468 3.06562 9.00004 2.51336ZM9.00004 21.4866C9.00468 20.9344 9.45614 20.4904 10.0084 20.4951C10.5929 20.5 11.2257 20.5 11.9167 20.5C12.6076 20.5 13.2404 20.5 13.8249 20.4951C14.3772 20.4904 14.8287 20.9344 14.8333 21.4866C14.838 22.0389 14.394 22.4904 13.8418 22.495C13.248 22.5 12.6073 22.5 11.9195 22.5L11.9139 22.5C11.2261 22.5 10.5853 22.5 9.9916 22.495C9.43933 22.4904 8.99539 22.0389 9.00004 21.4866ZM16.6832 21.4299C16.5831 20.8868 16.9422 20.3653 17.4854 20.2651C18.4073 20.0952 18.9694 19.818 19.3925 19.3986C19.8149 18.9799 20.0928 18.4254 20.2635 17.5156C20.3654 16.9728 20.888 16.6153 21.4308 16.7171C21.9736 16.819 22.3311 17.3416 22.2292 17.8844C22.01 19.0531 21.5982 20.0283 20.8006 20.8189C20.0038 21.6088 19.0228 22.0154 17.848 22.232C17.3048 22.3321 16.7834 21.973 16.6832 21.4299ZM16.6832 2.57011C16.7834 2.02698 17.3048 1.66786 17.848 1.768C19.0228 1.98459 20.0038 2.39118 20.8006 3.18105C21.5982 3.97172 22.01 4.94693 22.2292 6.1156C22.3311 6.65841 21.9736 7.18101 21.4308 7.28285C20.888 7.38469 20.3654 7.02721 20.2635 6.4844C20.0928 5.57458 19.8149 5.02011 19.3925 4.60143C18.9694 4.18196 18.4073 3.90482 17.4854 3.73485C16.9422 3.63472 16.5831 3.11324 16.6832 2.57011ZM21.4864 14.9C20.9342 14.8952 20.4903 14.4437 20.495 13.8914C20.5 13.3121 20.5 12.6849 20.5 12C20.5 11.315 20.5 10.6878 20.495 10.1085C20.4903 9.55621 20.9342 9.10468 21.4864 9.09996C22.0387 9.09523 22.4902 9.5391 22.495 10.0914C22.5 10.6801 22.5 11.3154 22.5 11.9973L22.5 12.0027C22.5 12.6845 22.5 13.3198 22.495 13.9086C22.4902 14.4608 22.0387 14.9047 21.4864 14.9Z',
  d7: 'M1.5 12.0761L1.5 11.9236C1.49998 9.68826 1.49996 7.90651 1.69242 6.50961C1.89138 5.06553 2.31278 3.88516 3.26606 2.95492C4.09007 2.15084 5.1037 1.7369 6.32143 1.5159C6.86484 1.41728 7.3853 1.77785 7.48393 2.32126C7.58255 2.86466 7.22198 3.38513 6.67857 3.48375C5.70842 3.65982 5.11186 3.9482 4.66287 4.38633C4.15169 4.88516 3.84086 5.56935 3.6737 6.78258C3.50223 8.02714 3.5 9.67083 3.5 11.9998C3.5 14.3288 3.50223 15.9725 3.6737 17.2171C3.84086 18.4303 4.15169 19.1145 4.66287 19.6133C5.11186 20.0514 5.70842 20.3398 6.67857 20.5159C7.22198 20.6145 7.58255 21.135 7.48393 21.6784C7.38531 22.2218 6.86484 22.5824 6.32143 22.4838C5.1037 22.2628 4.09007 21.8488 3.26606 21.0447C2.31278 20.1145 1.89138 18.9341 1.69242 17.49C1.49996 16.0931 1.49998 14.3114 1.5 12.0761Z',
  d8: 'M7 3.00012H3V21.0001H7M17 21.0001H21V17.0001M17 3.00012H21V7.00012M15 3.00012H9M9 21.0001H15M21 9.00012V15.0001',
  d9: 'M2 3.00012C2 2.44784 2.44772 2.00012 3 2.00012H7V4.00012H4V20.0001H7V22.0001H3C2.44772 22.0001 2 21.5524 2 21.0001V3.00012ZM15 4.00012H9V2.00012H15V4.00012ZM20 4.00012H17V2.00012H21C21.5523 2.00012 22 2.44784 22 3.00012V7.00012H20V4.00012ZM20 15.0001V9.00012H22V15.0001H20ZM20 20.0001V17.0001H22V21.0001C22 21.5524 21.5523 22.0001 21 22.0001H17V20.0001H20ZM9 20.0001H15V22.0001H9V20.0001Z',
};

export const IconBorderLeft02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-left-02-stroke-rounded IconBorderLeft02StrokeRounded"
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

export const IconBorderLeft02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-left-02-duotone-rounded IconBorderLeft02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconBorderLeft02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-left-02-twotone-rounded IconBorderLeft02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBorderLeft02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-left-02-solid-rounded IconBorderLeft02SolidRounded"
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

export const IconBorderLeft02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-left-02-bulk-rounded IconBorderLeft02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBorderLeft02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-left-02-stroke-sharp IconBorderLeft02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBorderLeft02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-left-02-solid-sharp IconBorderLeft02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBorderLeft02: TheIconSelfPack = {
  name: 'BorderLeft02',
  StrokeRounded: IconBorderLeft02StrokeRounded,
  DuotoneRounded: IconBorderLeft02DuotoneRounded,
  TwotoneRounded: IconBorderLeft02TwotoneRounded,
  SolidRounded: IconBorderLeft02SolidRounded,
  BulkRounded: IconBorderLeft02BulkRounded,
  StrokeSharp: IconBorderLeft02StrokeSharp,
  SolidSharp: IconBorderLeft02SolidSharp,
};