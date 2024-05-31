import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5 2.01175C12.3344 2.00395 12.1677 2 12 2C6.47778 2 2 6.28357 2 11.5667C2 14.1051 3.03333 16.4115 4.71889 18.1231C5.09 18.5 5.33778 19.0148 5.23778 19.5448C5.07275 20.4112 4.69874 21.2194 4.15111 21.893C5.59195 22.161 7.09014 21.9197 8.37499 21.2364C8.82918 20.9949 9.05627 20.8741 9.21653 20.8496C9.37678 20.8251 9.60633 20.8682 10.0654 20.9545C10.7032 21.0742 11.3507 21.1343 12 21.1334C17.5222 21.1334 22 16.8499 22 11.5667C22 11.3765 21.9942 11.1875 21.9827 11',
  d2: 'M15 5.5H22M18.5 2L18.5 9',
  d3: 'M11.9955 12H12.0045M15.991 12H16M8 12H8.00897',
  d4: 'M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9949 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z',
  d5: 'M18.375 1.125C18.9273 1.125 19.375 1.57272 19.375 2.125V4.625H21.875C22.4273 4.625 22.875 5.07272 22.875 5.625C22.875 6.17728 22.4273 6.625 21.875 6.625H19.375V9.125C19.375 9.67728 18.9273 10.125 18.375 10.125C17.8227 10.125 17.375 9.67728 17.375 9.125V6.625H14.875C14.3227 6.625 13.875 6.17728 13.875 5.625C13.875 5.07272 14.3227 4.625 14.875 4.625H17.375V2.125C17.375 1.57272 17.8227 1.125 18.375 1.125Z',
  d6: 'M15.8744 2.52661C15.8743 2.27822 15.7223 2.05351 15.4873 1.973C14.3567 1.58564 13.1402 1.37499 11.875 1.37499C5.97023 1.37499 1.125 5.96338 1.125 11.6917C1.125 14.4394 2.24472 16.9315 4.05951 18.7744C4.32727 19.0463 4.41437 19.325 4.37588 19.5302C4.23363 20.2763 3.91197 20.9695 3.44417 21.5448C3.27724 21.7502 3.23086 22.0283 3.32213 22.2766C3.4134 22.525 3.62881 22.7069 3.88896 22.7553C5.50004 23.055 7.17042 22.785 8.60214 22.0236C8.83568 21.8994 8.98822 21.8185 9.10275 21.7641C9.13431 21.7469 9.21834 21.7157 9.30196 21.7286C9.41409 21.7439 9.56479 21.772 9.80198 21.8166C10.4853 21.9449 11.1791 22.0093 11.875 22.0084C17.7798 22.0084 22.625 17.42 22.625 11.6917C22.625 10.595 22.4474 9.54004 22.1187 8.55109C22.033 8.29315 21.7833 8.13031 21.5115 8.12949C21.16 8.12843 20.875 8.40994 20.875 8.76144V9.12499C20.875 10.5057 19.7557 11.625 18.375 11.625C16.9943 11.625 15.875 10.5057 15.875 9.12499C15.875 8.65359 15.875 8.41789 15.7286 8.27144C15.5821 8.12499 15.3464 8.12499 14.875 8.12499C13.4943 8.12499 12.375 7.00571 12.375 5.62499C12.375 4.24428 13.4943 3.12499 14.875 3.12499H15.2766C15.6071 3.12499 15.8746 2.85709 15.8744 2.52661ZM7.875 11.125C7.32272 11.125 6.875 11.5727 6.875 12.125C6.875 12.6773 7.32272 13.125 7.875 13.125H7.88397C8.43626 13.125 8.88397 12.6773 8.88397 12.125C8.88397 11.5727 8.43626 11.125 7.88397 11.125H7.875ZM11.8705 11.125C11.3182 11.125 10.8705 11.5727 10.8705 12.125C10.8705 12.6773 11.3182 13.125 11.8705 13.125H11.8795C12.4318 13.125 12.8795 12.6773 12.8795 12.125C12.8795 11.5727 12.4318 11.125 11.8795 11.125H11.8705Z',
  d7: 'M15.4873 1.97301C15.7223 2.05352 15.8743 2.27822 15.8744 2.52662C15.8746 2.85709 15.6071 3.125 15.2766 3.125H14.875C13.4943 3.125 12.375 4.24429 12.375 5.625C12.375 7.00571 13.4943 8.125 14.875 8.125C15.3464 8.125 15.5821 8.125 15.7286 8.27145C15.875 8.41789 15.875 8.6536 15.875 9.125C15.875 10.5057 16.9943 11.625 18.375 11.625C19.7557 11.625 20.875 10.5057 20.875 9.125V8.76144C20.875 8.40995 21.16 8.12843 21.5115 8.1295C21.7833 8.13032 22.033 8.29316 22.1187 8.5511C22.4474 9.54005 22.625 10.595 22.625 11.6917C22.625 17.42 17.7798 22.0084 11.875 22.0084C11.1791 22.0093 10.4853 21.9449 9.80198 21.8166C9.56479 21.772 9.41409 21.7439 9.30196 21.7286C9.21834 21.7157 9.13431 21.7469 9.10275 21.7641C8.98822 21.8185 8.83568 21.8994 8.60214 22.0236C7.17042 22.785 5.50004 23.055 3.88896 22.7553C3.62881 22.7069 3.4134 22.525 3.32213 22.2767C3.23086 22.0283 3.27724 21.7502 3.44417 21.5449C3.91197 20.9695 4.23363 20.2763 4.37588 19.5302C4.41437 19.325 4.32727 19.0463 4.05951 18.7744C2.24472 16.9315 1.125 14.4394 1.125 11.6917C1.125 5.96338 5.97023 1.375 11.875 1.375C13.1402 1.375 14.3567 1.58564 15.4873 1.97301Z',
  d8: 'M6.875 12.125C6.875 11.5727 7.32272 11.125 7.875 11.125H7.88397C8.43626 11.125 8.88397 11.5727 8.88397 12.125C8.88397 12.6773 8.43626 13.125 7.88397 13.125H7.875C7.32272 13.125 6.875 12.6773 6.875 12.125ZM10.8705 12.125C10.8705 11.5727 11.3182 11.125 11.8705 11.125H11.8795C12.4318 11.125 12.8795 11.5727 12.8795 12.125C12.8795 12.6773 12.4318 13.125 11.8795 13.125H11.8705C11.3182 13.125 10.8705 12.6773 10.8705 12.125Z',
  d9: 'M13.999 6H21.999M17.999 2V10',
  d10: 'M11.9945 12H12.0035M15.99 12H15.999M7.99902 12H8.00799',
  d11: 'M21.9966 11.5041C21.9966 16.7531 17.5204 21.0082 11.9988 21.0082C10.5746 21.0082 9.21989 20.7251 7.99365 20.2149L4.01778 21.9991C4.01008 22.0026 4.00183 21.9955 4.00403 21.9874L5.00502 18.2923C3.16233 16.5119 2.00098 14.1818 2.00098 11.5041C2.00098 6.25513 6.47715 2 11.9988 2',
  d12: 'M17.75 4.25V1.25H19.75V4.25H22.75V6.25H19.75V9.25H17.75V6.25H14.75V4.25H17.75Z',
  d13: 'M12 1.25C13.6029 1.25 15.1283 1.58612 16.5 2.18996V3H13.5V7.5H16.5V10.5H21V7.5H21.902C22.4476 8.72671 22.75 10.0777 22.75 11.5C22.75 17.1963 17.8997 21.75 12 21.75C10.5948 21.75 9.25046 21.4925 8.01735 21.0233L3.25001 22.75L4.16134 18.5143C2.36071 16.6855 1.25 14.2189 1.25 11.5C1.25 5.80369 6.10029 1.25 12 1.25ZM9.00897 11H7V13H9.00897V11ZM13.0045 13V11H10.9955V13H13.0045Z',
} as const;

export const IconBubbleChatAddStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-add-stroke-rounded IconBubbleChatAddStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBubbleChatAddDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-add-duotone-rounded IconBubbleChatAddDuotoneRounded"
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

export const IconBubbleChatAddTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-add-twotone-rounded IconBubbleChatAddTwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatAddSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-add-solid-rounded IconBubbleChatAddSolidRounded"
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

export const IconBubbleChatAddBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-add-bulk-rounded IconBubbleChatAddBulkRounded"
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

export const IconBubbleChatAddStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-add-stroke-sharp IconBubbleChatAddStrokeSharp"
    >
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

export const IconBubbleChatAddSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-add-solid-sharp IconBubbleChatAddSolidSharp"
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

export const iconPackOfBubbleChatAdd: TheIconSelfPack = {
  name: 'BubbleChatAdd',
  StrokeRounded: IconBubbleChatAddStrokeRounded,
  DuotoneRounded: IconBubbleChatAddDuotoneRounded,
  TwotoneRounded: IconBubbleChatAddTwotoneRounded,
  SolidRounded: IconBubbleChatAddSolidRounded,
  BulkRounded: IconBubbleChatAddBulkRounded,
  StrokeSharp: IconBubbleChatAddStrokeSharp,
  SolidSharp: IconBubbleChatAddSolidSharp,
};