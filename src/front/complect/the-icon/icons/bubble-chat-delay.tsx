import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9949 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2',
  d2: 'M18 6L19 5M22 6C22 8.20914 20.2091 10 18 10C15.7909 10 14 8.20914 14 6C14 3.79086 15.7909 2 18 2C20.2091 2 22 3.79086 22 6Z',
  d3: 'M11.9955 12H12.0045M8 12H8.00897',
  d4: 'M12 21.1334C17.5222 21.1334 22 16.8499 22 11.5667C22 10.374 21.7718 9.23221 21.3548 8.17917C20.6414 9.27527 19.4053 10 18 10C15.7909 10 14 8.20914 14 6C14 4.62647 14.6923 3.41463 15.747 2.69439C14.5897 2.24658 13.3249 2 12 2C6.47778 2 2 6.28357 2 11.5667C2 14.1051 3.03333 16.4115 4.71889 18.1231C5.09 18.5 5.33778 19.0148 5.23778 19.5448C5.07275 20.4112 4.69874 21.2194 4.15111 21.893C5.59195 22.161 7.09014 21.9197 8.37499 21.2364C8.82918 20.9949 9.05627 20.8741 9.21653 20.8496C9.37678 20.8251 9.60633 20.8682 10.0654 20.9545C10.7032 21.0742 11.3507 21.1343 12 21.1334Z',
  d5: 'M18 1.25C15.3766 1.25 13.25 3.37665 13.25 6C13.25 8.62335 15.3766 10.75 18 10.75C20.6234 10.75 22.75 8.62335 22.75 6C22.75 3.37665 20.6234 1.25 18 1.25ZM19.5303 5.53033C19.8232 5.23744 19.8232 4.76256 19.5303 4.46967C19.2374 4.17678 18.7626 4.17678 18.4697 4.46967L17.4697 5.46967C17.1768 5.76256 17.1768 6.23744 17.4697 6.53033C17.7626 6.82322 18.2374 6.82322 18.5303 6.53033L19.5303 5.53033Z',
  d6: 'M13.1303 1.21126C13.053 1.04952 12.8003 1.03737 12.2948 1.01307C12.1143 1.00439 11.9326 1 11.75 1C5.84523 1 1 5.58838 1 11.3167C1 14.0644 2.11972 16.5565 3.93451 18.3994C4.20227 18.6713 4.28937 18.95 4.25088 19.1552C4.10863 19.9013 3.78697 20.5945 3.31917 21.1699C3.15224 21.3752 3.10586 21.6533 3.19713 21.9017C3.2884 22.15 3.50381 22.3319 3.76396 22.3803C5.37504 22.68 7.04542 22.41 8.47714 21.6486C8.71068 21.5244 8.86322 21.4435 8.97775 21.3891C9.00931 21.3719 9.09334 21.3407 9.17696 21.3536C9.28909 21.3689 9.43979 21.397 9.67698 21.4416C10.3603 21.5699 11.0541 21.6343 11.75 21.6334C17.6548 21.6334 22.5 17.045 22.5 11.3167C22.5 11.2805 22.4998 11.2443 22.4994 11.2081C22.4938 10.6873 22.4911 10.427 22.327 10.3451C22.163 10.2632 21.9251 10.4381 21.4495 10.788C20.4137 11.5499 19.1344 12 17.75 12C14.2982 12 11.5 9.20178 11.5 5.75C11.5 4.37163 11.9462 3.09747 12.702 2.06409C13.039 1.60336 13.2075 1.373 13.1303 1.21126ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H8.00897C8.56126 13 9.00897 12.5523 9.00897 12C9.00897 11.4477 8.56126 11 8.00897 11H8ZM11.9955 11C11.4432 11 10.9955 11.4477 10.9955 12C10.9955 12.5523 11.4432 13 11.9955 13H12.0045C12.5568 13 13.0045 12.5523 13.0045 12C13.0045 11.4477 12.5568 11 12.0045 11H11.9955Z',
  d7: 'M12.5448 1.26307C13.0503 1.28737 13.303 1.29952 13.3803 1.46126C13.4575 1.623 13.289 1.85336 12.952 2.31409C12.1962 3.34747 11.75 4.62163 11.75 6C11.75 9.45178 14.5482 12.25 18 12.25C19.3844 12.25 20.6637 11.7999 21.6995 11.038C22.1751 10.6881 22.413 10.5132 22.577 10.5951C22.7411 10.677 22.7438 10.9373 22.7494 11.4581C22.7498 11.4943 22.75 11.5305 22.75 11.5667C22.75 17.295 17.9048 21.8834 12 21.8834C11.3041 21.8843 10.6103 21.8199 9.92698 21.6916C9.68979 21.647 9.53909 21.6189 9.42696 21.6036C9.34334 21.5907 9.25931 21.6219 9.22775 21.6391C9.11322 21.6935 8.96068 21.7744 8.72714 21.8986C7.29542 22.66 5.62504 22.93 4.01396 22.6303C3.75381 22.5819 3.5384 22.4 3.44713 22.1517C3.35586 21.9033 3.40224 21.6252 3.56917 21.4199C4.03697 20.8445 4.35863 20.1513 4.50088 19.4052C4.53937 19.2 4.45227 18.9213 4.18451 18.6494C2.36972 16.8065 1.25 14.3144 1.25 11.5667C1.25 5.83838 6.09523 1.25 12 1.25C12.1826 1.25 12.3643 1.25439 12.5448 1.26307Z',
  d8: 'M7 12C7 11.4477 7.44772 11 8 11H8.00897C8.56126 11 9.00897 11.4477 9.00897 12C9.00897 12.5523 8.56126 13 8.00897 13H8C7.44772 13 7 12.5523 7 12ZM10.9955 12C10.9955 11.4477 11.4432 11 11.9955 11H12.0045C12.5568 11 13.0045 11.4477 13.0045 12C13.0045 12.5523 12.5568 13 12.0045 13H11.9955C11.4432 13 10.9955 12.5523 10.9955 12Z',
  d9: 'M17.4954 6.5L19.4954 4.5M21.9954 6C21.9954 8.20914 20.2045 10 17.9954 10C15.7863 10 13.9954 8.20914 13.9954 6C13.9954 3.79086 15.7863 2 17.9954 2C20.2045 2 21.9954 3.79086 21.9954 6Z',
  d10: 'M11.9909 12H11.9999M7.99536 12H8.00433',
  d11: 'M21.9978 11.5041C21.9978 16.7531 17.5216 21.0082 12 21.0082C10.5758 21.0082 9.22111 20.7251 7.99487 20.2149L4.019 21.9991C4.0113 22.0026 4.00305 21.9955 4.00525 21.9874L5.00624 18.2923C3.16355 16.5119 2.0022 14.1818 2.0022 11.5041C2.0022 6.25513 6.47837 2 12 2',
  d12: 'M18 1.25C15.3766 1.25 13.25 3.37665 13.25 6C13.25 8.62335 15.3766 10.75 18 10.75C20.6234 10.75 22.75 8.62335 22.75 6C22.75 3.37665 20.6234 1.25 18 1.25ZM18.0294 7.03039L20.0294 5.03039L18.9688 3.96973L16.9688 5.96973L18.0294 7.03039Z',
  d13: 'M11.75 6C11.75 4.1751 12.5321 2.53288 13.7794 1.39024C13.2001 1.29798 12.6056 1.25 12 1.25C6.10029 1.25 1.25 5.80369 1.25 11.5C1.25 14.2189 2.36071 16.6855 4.16134 18.5143L3.25001 22.75L8.01735 21.0233C9.25046 21.4925 10.5948 21.75 12 21.75C17.8997 21.75 22.75 17.1963 22.75 11.5C22.75 11.0472 22.7194 10.6017 22.66 10.1651C21.5155 11.4446 19.8518 12.25 18 12.25C14.5482 12.25 11.75 9.45178 11.75 6ZM9.00897 11H7V13H9.00897V11ZM13.0045 13V11H10.9955V13H13.0045Z',
} as const;

export const IconBubbleChatDelayStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-delay-stroke-rounded IconBubbleChatDelayStrokeRounded"
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

export const IconBubbleChatDelayDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-delay-duotone-rounded IconBubbleChatDelayDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBubbleChatDelayTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-delay-twotone-rounded IconBubbleChatDelayTwotoneRounded"
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

export const IconBubbleChatDelaySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-delay-solid-rounded IconBubbleChatDelaySolidRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconBubbleChatDelayBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-delay-bulk-rounded IconBubbleChatDelayBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconBubbleChatDelayStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-delay-stroke-sharp IconBubbleChatDelayStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatDelaySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-delay-solid-sharp IconBubbleChatDelaySolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfBubbleChatDelay: TheIconSelfPack = {
  name: 'BubbleChatDelay',
  StrokeRounded: IconBubbleChatDelayStrokeRounded,
  DuotoneRounded: IconBubbleChatDelayDuotoneRounded,
  TwotoneRounded: IconBubbleChatDelayTwotoneRounded,
  SolidRounded: IconBubbleChatDelaySolidRounded,
  BulkRounded: IconBubbleChatDelayBulkRounded,
  StrokeSharp: IconBubbleChatDelayStrokeSharp,
  SolidSharp: IconBubbleChatDelaySolidSharp,
};