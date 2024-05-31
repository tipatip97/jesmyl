import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9.3 8.5V15.5M9.3 8.5C8.58465 8.5 7.5 10.25 7.5 10.25M9.3 8.5C10.004 8.5 11.1 10.25 11.1 10.25M14.7 15.5V8.5M14.7 15.5C13.996 15.5 12.9 13.75 12.9 13.75M14.7 15.5C15.404 15.5 16.5 13.75 16.5 13.75',
  d2: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM9.77502 15.9751C9.77502 16.4031 9.42804 16.7501 9.00002 16.7501C8.572 16.7501 8.22502 16.4031 8.22502 15.9751V10.25H7.26006C7.12093 10.2514 6.97974 10.2168 6.85306 10.1425C6.50088 9.93595 6.39431 9.50102 6.61487 9.17125L6.81102 8.89539C6.92915 8.73586 7.09665 8.51983 7.29018 8.30082C7.4802 8.08578 7.71323 7.84731 7.96384 7.65649C8.18318 7.48948 8.55343 7.25 8.99996 7.25C9.44648 7.25 9.81673 7.48948 10.0361 7.65649C10.2867 7.84731 10.5197 8.08578 10.7097 8.30082C10.9033 8.51983 11.0708 8.73586 11.1889 8.89539L11.3852 9.17144C11.6057 9.5012 11.499 9.93595 11.1469 10.1425C11.0225 10.2154 10.8842 10.2501 10.7475 10.25H9.77502V15.9751ZM15.775 8.0251C15.775 7.59708 15.428 7.2501 15 7.2501C14.572 7.2501 14.225 7.59708 14.225 8.0251V13.7502H13.2601C13.1209 13.7488 12.9797 13.7834 12.8531 13.8577C12.5009 14.0642 12.3943 14.4992 12.6149 14.8289L12.811 15.1048C12.9292 15.2643 13.0967 15.4804 13.2902 15.6994C13.4802 15.9144 13.7132 16.1529 13.9638 16.3437C14.1832 16.5107 14.5534 16.7502 15 16.7502C15.4465 16.7502 15.8167 16.5107 16.0361 16.3437C16.2867 16.1529 16.5197 15.9144 16.7097 15.6994C16.9033 15.4804 17.0708 15.2643 17.1889 15.1048L17.3852 14.8288C17.6057 14.499 17.499 14.0642 17.1468 13.8577C17.0225 13.7848 16.8842 13.7501 16.7475 13.7502H15.775V8.0251Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d4: 'M15 7.2501C15.428 7.2501 15.775 7.59708 15.775 8.0251V13.7502H16.7475C16.8842 13.7501 17.0225 13.7848 17.1468 13.8577C17.499 14.0642 17.6057 14.499 17.3852 14.8288L17.1889 15.1048C17.0708 15.2643 16.9033 15.4804 16.7097 15.6994C16.5197 15.9144 16.2867 16.1529 16.0361 16.3437C15.8167 16.5107 15.4465 16.7502 15 16.7502C14.5534 16.7502 14.1832 16.5107 13.9638 16.3437C13.7132 16.1529 13.4802 15.9144 13.2902 15.6994C13.0967 15.4804 12.9292 15.2643 12.811 15.1048L12.6149 14.8289C12.3943 14.4992 12.5009 14.0642 12.8531 13.8577C12.9797 13.7834 13.1209 13.7488 13.2601 13.7502H14.225V8.0251C14.225 7.59708 14.572 7.2501 15 7.2501Z',
  d5: 'M9.00002 16.7501C9.42804 16.7501 9.77502 16.4031 9.77502 15.9751V10.25H10.7475C10.8842 10.2501 11.0225 10.2154 11.1469 10.1425C11.499 9.93595 11.6057 9.5012 11.3852 9.17144L11.1889 8.89539C11.0708 8.73586 10.9033 8.51983 10.7097 8.30082C10.5197 8.08578 10.2867 7.84731 10.0361 7.65649C9.81673 7.48948 9.44648 7.25 8.99996 7.25C8.55343 7.25 8.18318 7.48948 7.96384 7.65649C7.71323 7.84731 7.4802 8.08578 7.29018 8.30082C7.09665 8.51983 6.92915 8.73586 6.81102 8.89539L6.61487 9.17125C6.39431 9.50102 6.50088 9.93595 6.85306 10.1425C6.97974 10.2168 7.12093 10.2514 7.26006 10.25H8.22502V15.9751C8.22502 16.4031 8.572 16.7501 9.00002 16.7501Z',
  d6: 'M9 16V8.16613M7 10L9 8L11 10M15 8V15.7083M17 14L15 16L13 14',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM11.5294 9.96956L8.9982 7.43933L6.46875 9.96976L7.52962 11.0302L8.2484 10.3112V15.5H9.7484V10.3102L10.469 11.0304L11.5294 9.96956ZM15.7492 13.6893V8.49999H14.2492V13.6893L13.5295 12.9697L12.4689 14.0303L14.9992 16.5607L17.5295 14.0303L16.4689 12.9697L15.7492 13.6893Z',
} as const;

export const IconCircleArrowUpDownStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-down-stroke-rounded IconCircleArrowUpDownStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconCircleArrowUpDownDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-down-duotone-rounded IconCircleArrowUpDownDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconCircleArrowUpDownTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-down-twotone-rounded IconCircleArrowUpDownTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowUpDownSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-down-solid-rounded IconCircleArrowUpDownSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowUpDownBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-down-bulk-rounded IconCircleArrowUpDownBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowUpDownStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-down-stroke-sharp IconCircleArrowUpDownStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowUpDownSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-down-solid-sharp IconCircleArrowUpDownSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCircleArrowUpDown: TheIconSelfPack = {
  name: 'CircleArrowUpDown',
  StrokeRounded: IconCircleArrowUpDownStrokeRounded,
  DuotoneRounded: IconCircleArrowUpDownDuotoneRounded,
  TwotoneRounded: IconCircleArrowUpDownTwotoneRounded,
  SolidRounded: IconCircleArrowUpDownSolidRounded,
  BulkRounded: IconCircleArrowUpDownBulkRounded,
  StrokeSharp: IconCircleArrowUpDownStrokeSharp,
  SolidSharp: IconCircleArrowUpDownSolidSharp,
};