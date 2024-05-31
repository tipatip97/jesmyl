import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21.766 9.49265C21.9192 10.1586 22 10.8506 22 11.5606C22 16.8468 17.5222 21.1329 12 21.1329C11.3507 21.1337 10.7032 21.0737 10.0654 20.9538C9.60633 20.8676 9.37678 20.8244 9.21653 20.8489C9.05627 20.8734 8.82918 20.9943 8.37499 21.2359C7.09014 21.9196 5.59195 22.1611 4.15111 21.8929C4.69874 21.2189 5.07275 20.4103 5.23778 19.5433C5.33778 19.0131 5.09 18.4979 4.71889 18.1208C3.03333 16.4082 2 14.1004 2 11.5606C2 6.43482 6.21 2.24942 11.5 2',
  d2: 'M14 4.5L22 4.5M14 4.5C14 5.20023 15.9943 6.50847 16.5 7M14 4.5C14 3.79977 15.9943 2.49153 16.5 2',
  d3: 'M11.9955 12H12.0045M15.991 12H16M8 12H8.00897',
  d4: 'M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9949 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z',
  d5: 'M22 5.50586C22.5523 5.50586 23 5.05814 23 4.50586C23 3.95357 22.5523 3.50586 22 3.50586L17.5 3.50586L17.5 2.9116C17.5001 2.73596 17.5003 2.52031 17.4782 2.34387L17.4778 2.34053C17.462 2.21408 17.3902 1.63804 16.8246 1.36368C16.2577 1.08872 15.7576 1.39065 15.6494 1.45597L15.6454 1.45841C15.4924 1.55062 15.3215 1.68477 15.1809 1.79511L15.1507 1.81885C14.7748 2.11348 14.2906 2.49545 13.8996 2.87588C13.7045 3.06571 13.5033 3.28297 13.3444 3.51388C13.2032 3.71914 13 4.06933 13 4.5C13 4.93067 13.2032 5.28086 13.3444 5.48612C13.5033 5.71703 13.7045 5.93429 13.8996 6.12412C14.2906 6.50455 14.7748 6.88652 15.1507 7.18115L15.1809 7.20488C15.3215 7.31523 15.4923 7.44938 15.6454 7.54159L15.6494 7.54403C15.7576 7.60935 16.2578 7.91128 16.8246 7.63632C17.3902 7.36196 17.462 6.78592 17.4778 6.65947L17.4782 6.65613C17.5003 6.47969 17.5001 6.26403 17.5 6.0884L17.5 5.50586L22 5.50586Z',
  d6: 'M14.8839 8.83404C14.0182 8.24215 13.3109 7.64411 12.8536 7.19921C12.6255 6.97732 12.3466 6.68221 12.1086 6.33626C11.914 6.05337 11.5 5.39179 11.5 4.49998C11.5 3.60818 11.914 2.9466 12.1086 2.66371C12.3466 2.31775 12.6255 2.02265 12.8536 1.80076L12.8756 1.77917C13.0526 1.59778 12.9391 1.29255 12.6866 1.27082L12.6758 1.27007C12.4522 1.25671 12.2269 1.24994 12 1.24994C6.09523 1.24994 1.25 5.83832 1.25 11.5667C1.25 14.3143 2.36972 16.8065 4.18451 18.6493C4.45227 18.9212 4.53937 19.1999 4.50088 19.4051C4.35863 20.1513 4.03697 20.8444 3.56917 21.4198C3.40224 21.6251 3.35586 21.9032 3.44713 22.1516C3.5384 22.4 3.75381 22.5819 4.01396 22.6303C5.62504 22.9299 7.29542 22.6599 8.72714 21.8985C8.96068 21.7743 9.11322 21.6934 9.22775 21.639C9.25931 21.6218 9.34334 21.5907 9.42696 21.6035C9.53909 21.6189 9.68979 21.647 9.92698 21.6915C10.6103 21.8198 11.3041 21.8842 12 21.8834C17.9048 21.8834 22.75 17.295 22.75 11.5667C22.75 10.0554 22.4128 8.62357 21.8079 7.33435C21.7344 7.17773 21.6976 7.09942 21.624 7.05263C21.5503 7.00584 21.4603 7.00584 21.2803 7.00584H19.4472C19.2189 7.00584 19.1047 7.00584 19.0271 7.0603C18.9496 7.11475 18.9041 7.24055 18.8132 7.49207C18.6399 7.97183 18.2705 8.60205 17.4792 8.9859C16.1724 9.61985 15.0477 8.93393 14.8839 8.83404ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H8.00897C8.56126 13 9.00897 12.5523 9.00897 12C9.00897 11.4477 8.56126 11 8.00897 11H8ZM11.9955 11C11.4432 11 10.9955 11.4477 10.9955 12C10.9955 12.5523 11.4432 13 11.9955 13H12.0045C12.5568 13 13.0045 12.5523 13.0045 12C13.0045 11.4477 12.5568 11 12.0045 11H11.9955ZM15.991 11C15.4387 11 14.991 11.4477 14.991 12C14.991 12.5523 15.4387 13 15.991 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H15.991Z',
  d7: 'M12.8536 7.19927C13.3109 7.64417 14.0182 8.24221 14.8839 8.8341C15.0477 8.93399 16.1724 9.61991 17.4792 8.98596C18.2705 8.60211 18.6399 7.97189 18.8132 7.49213C18.9041 7.24061 18.9496 7.11481 19.0271 7.06036C19.1047 7.0059 19.2189 7.0059 19.4472 7.0059H21.2803C21.4603 7.0059 21.5503 7.0059 21.624 7.05269C21.6976 7.09948 21.7344 7.17779 21.8079 7.33441C22.4128 8.62363 22.75 10.0555 22.75 11.5667C22.75 17.295 17.9048 21.8834 12 21.8834C11.3041 21.8843 10.6103 21.8199 9.92698 21.6916C9.68979 21.647 9.53909 21.6189 9.42696 21.6036C9.34334 21.5907 9.25931 21.6219 9.22775 21.6391C9.11322 21.6935 8.96068 21.7744 8.72714 21.8986C7.29542 22.66 5.62504 22.93 4.01396 22.6303C3.75381 22.5819 3.5384 22.4 3.44713 22.1517C3.35586 21.9033 3.40224 21.6252 3.56917 21.4199C4.03697 20.8445 4.35863 20.1513 4.50088 19.4052C4.53937 19.2 4.45227 18.9213 4.18451 18.6494C2.36972 16.8065 1.25 14.3144 1.25 11.5667C1.25 5.83838 6.09523 1.25 12 1.25C12.2269 1.25 12.4522 1.25678 12.6758 1.27013L12.6866 1.27088C12.9391 1.29261 13.0526 1.59784 12.8756 1.77924L12.8536 1.80082C12.6255 2.02271 12.3466 2.31781 12.1086 2.66377C11.914 2.94666 11.5 3.60824 11.5 4.50004C11.5 5.39185 11.914 6.05343 12.1086 6.33632C12.3466 6.68227 12.6255 6.97738 12.8536 7.19927Z',
  d8: 'M7 12C7 11.4477 7.44772 11 8 11H8.00897C8.56126 11 9.00897 11.4477 9.00897 12C9.00897 12.5523 8.56126 13 8.00897 13H8C7.44772 13 7 12.5523 7 12ZM10.9955 12C10.9955 11.4477 11.4432 11 11.9955 11H12.0045C12.5568 11 13.0045 11.4477 13.0045 12C13.0045 12.5523 12.5568 13 12.0045 13H11.9955C11.4432 13 10.9955 12.5523 10.9955 12ZM14.991 12C14.991 11.4477 15.4387 11 15.991 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H15.991C15.4387 13 14.991 12.5523 14.991 12Z',
  d9: 'M22 5H14.5422M17 8L14 5L17 2',
  d10: 'M21.6544 8.8995C23.4504 15.7887 17.9502 21.0082 12.0057 21.0082C10.5803 21.0082 9.2246 20.7251 7.9974 20.2149L4.01839 21.9991C4.01069 22.0026 4.00243 21.9955 4.00464 21.9874L5.00641 18.2923C3.16227 16.5119 2 14.1818 2 11.5041C2 6.25513 6.4797 2 12.0057 2',
  d11: 'M17.0429 1.25L18.4571 2.66421L17.1642 3.95711L22.75 3.95711V5.95711L17.1642 5.95711L18.4571 7.25L17.0429 8.66421L13.3358 4.95711L17.0429 1.25Z',
  d12: 'M12 1.25C13.0024 1.25 13.9746 1.38146 14.8978 1.62766L11.5684 4.95705L17.0432 10.4319L20.2252 7.24994L20.1823 7.20705H21.766C22.3971 8.51029 22.75 9.96358 22.75 11.5C22.75 17.1963 17.8997 21.75 12 21.75C10.5948 21.75 9.25046 21.4925 8.01735 21.0233L3.25001 22.75L4.16134 18.5143C2.36071 16.6855 1.25 14.2189 1.25 11.5C1.25 5.80369 6.10029 1.25 12 1.25ZM9.00897 11H7V13H9.00897V11ZM13.0045 13V11H10.9955V13H13.0045Z',
} as const;

export const IconBubbleChatIncomeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-income-stroke-rounded IconBubbleChatIncomeStrokeRounded"
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

export const IconBubbleChatIncomeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-income-duotone-rounded IconBubbleChatIncomeDuotoneRounded"
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

export const IconBubbleChatIncomeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-income-twotone-rounded IconBubbleChatIncomeTwotoneRounded"
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

export const IconBubbleChatIncomeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-income-solid-rounded IconBubbleChatIncomeSolidRounded"
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

export const IconBubbleChatIncomeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-income-bulk-rounded IconBubbleChatIncomeBulkRounded"
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

export const IconBubbleChatIncomeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-income-stroke-sharp IconBubbleChatIncomeStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatIncomeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-income-solid-sharp IconBubbleChatIncomeSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfBubbleChatIncome: TheIconSelfPack = {
  name: 'BubbleChatIncome',
  StrokeRounded: IconBubbleChatIncomeStrokeRounded,
  DuotoneRounded: IconBubbleChatIncomeDuotoneRounded,
  TwotoneRounded: IconBubbleChatIncomeTwotoneRounded,
  SolidRounded: IconBubbleChatIncomeSolidRounded,
  BulkRounded: IconBubbleChatIncomeBulkRounded,
  StrokeSharp: IconBubbleChatIncomeStrokeSharp,
  SolidSharp: IconBubbleChatIncomeSolidSharp,
};