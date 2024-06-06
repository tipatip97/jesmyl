import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12.9946C21.2765 17.6007 17.0206 21.1329 12.005 21.1329C11.3554 21.1337 10.7076 21.0737 10.0695 20.9538C9.61016 20.8676 9.3805 20.8244 9.22016 20.8489C9.05983 20.8734 8.83262 20.9942 8.3782 21.2359C7.0927 21.9196 5.59376 22.1611 4.1522 21.8929C4.7001 21.2189 5.07429 20.4102 5.23941 19.5433C5.33946 19.013 5.09156 18.4979 4.72026 18.1208C3.03385 16.4082 2 14.1004 2 11.5605C2 6.43619 6.20959 2.25172 11.5 2',
  d2: 'M20.017 8.02334L22 10M21.0531 5.52653C21.0531 3.57888 19.4742 2 17.5265 2C15.5789 2 14 3.57888 14 5.52653C14 7.47418 15.5789 9.05306 17.5265 9.05306C19.4742 9.05306 21.0531 7.47418 21.0531 5.52653Z',
  d3: 'M11.9955 12H12.0045M15.991 12H16M8 12H8.00897',
  d4: 'M12 21.1334C17.5222 21.1334 22 16.8499 22 11.5667C22 9.89004 21.549 8.31404 20.7568 6.94369C20.2111 8.1857 18.9701 9.05306 17.5265 9.05306C15.5789 9.05306 14 7.47418 14 5.52653C14 4.31755 14.6084 3.25066 15.5357 2.6153C14.4364 2.21764 13.2447 2 12 2C6.47778 2 2 6.28357 2 11.5667C2 14.1051 3.03333 16.4115 4.71889 18.1231C5.09 18.5 5.33778 19.0148 5.23778 19.5448C5.07275 20.4112 4.69874 21.2194 4.15111 21.893C5.59195 22.161 7.09014 21.9197 8.37499 21.2364C8.82918 20.9949 9.05627 20.8741 9.21653 20.8496C9.37678 20.8251 9.60633 20.8682 10.0654 20.9545C10.7032 21.0742 11.3507 21.1343 12 21.1334Z',
  d5: 'M12.875 5.65153C12.875 3.1516 14.9016 1.125 17.4015 1.125C19.9015 1.125 21.9281 3.1516 21.9281 5.65153C21.9281 6.54055 21.6718 7.36971 21.229 8.06916L22.581 9.41676C22.9721 9.80666 22.9731 10.4398 22.5832 10.831C22.1933 11.2221 21.5602 11.2231 21.169 10.8332L19.8138 9.4824C19.1155 9.92307 18.2883 10.1781 17.4015 10.1781C14.9016 10.1781 12.875 8.15147 12.875 5.65153ZM17.4015 3.125C16.0062 3.125 14.875 4.25617 14.875 5.65153C14.875 7.0469 16.0062 8.17806 17.4015 8.17806C18.7969 8.17806 19.9281 7.0469 19.9281 5.65153C19.9281 4.25617 18.7969 3.125 17.4015 3.125Z',
  d6: 'M12.6961 1.5239C12.6093 1.37499 12.3645 1.37499 11.875 1.37499C5.97023 1.37499 1.125 5.96338 1.125 11.6917C1.125 14.4394 2.24472 16.9315 4.05951 18.7744C4.32727 19.0463 4.41437 19.325 4.37588 19.5302C4.23363 20.2763 3.91197 20.9695 3.44417 21.5448C3.27724 21.7502 3.23086 22.0283 3.32213 22.2766C3.4134 22.525 3.62881 22.7069 3.88896 22.7553C5.50004 23.055 7.17042 22.785 8.60214 22.0236C8.83568 21.8994 8.98822 21.8185 9.10275 21.7641C9.13431 21.7469 9.21834 21.7157 9.30196 21.7286C9.41409 21.7439 9.56479 21.772 9.80198 21.8166C10.4853 21.9449 11.1791 22.0093 11.875 22.0084C17.1823 22.0084 21.6336 18.3016 22.4801 13.392C22.5399 13.0452 22.5698 12.8718 22.4866 12.7667C22.4033 12.6616 22.1765 12.6479 21.723 12.6204C21.1361 12.5849 20.5592 12.3433 20.1101 11.8956L19.7836 11.5701C19.6539 11.4408 19.589 11.3762 19.5087 11.3561C19.4284 11.336 19.3342 11.3645 19.1459 11.4213C18.593 11.5883 18.0072 11.6781 17.4015 11.6781C14.0732 11.6781 11.375 8.97989 11.375 5.65153C11.375 4.45012 11.7266 3.33082 12.3324 2.39089C12.6324 1.9254 12.7825 1.69265 12.7043 1.53901C12.7016 1.53367 12.6991 1.52907 12.6961 1.5239ZM7.875 11.125C7.32272 11.125 6.875 11.5727 6.875 12.125C6.875 12.6773 7.32272 13.125 7.875 13.125H7.88397C8.43626 13.125 8.88397 12.6773 8.88397 12.125C8.88397 11.5727 8.43626 11.125 7.88397 11.125H7.875ZM11.8705 11.125C11.3182 11.125 10.8705 11.5727 10.8705 12.125C10.8705 12.6773 11.3182 13.125 11.8705 13.125H11.8795C12.4318 13.125 12.8795 12.6773 12.8795 12.125C12.8795 11.5727 12.4318 11.125 11.8795 11.125H11.8705Z',
  d7: 'M11.875 1.375C12.3645 1.375 12.6093 1.375 12.6961 1.5239C12.6991 1.52908 12.7016 1.53368 12.7043 1.53902C12.7825 1.69266 12.6324 1.9254 12.3324 2.3909C11.7266 3.33083 11.375 4.45012 11.375 5.65153C11.375 8.97989 14.0732 11.6781 17.4015 11.6781C18.0072 11.6781 18.593 11.5883 19.1459 11.4213C19.3342 11.3645 19.4284 11.336 19.5087 11.3561C19.589 11.3762 19.6539 11.4409 19.7836 11.5701L20.1101 11.8956C20.5592 12.3433 21.1361 12.5849 21.723 12.6204C22.1765 12.6479 22.4033 12.6616 22.4866 12.7667C22.5698 12.8718 22.5399 13.0452 22.4801 13.392C21.6336 18.3016 17.1823 22.0084 11.875 22.0084C11.1791 22.0093 10.4853 21.9449 9.80198 21.8166C9.56479 21.772 9.41409 21.7439 9.30196 21.7286C9.21834 21.7157 9.13431 21.7469 9.10275 21.7641C8.98822 21.8185 8.83568 21.8994 8.60214 22.0236C7.17042 22.785 5.50004 23.055 3.88896 22.7553C3.62881 22.7069 3.4134 22.525 3.32213 22.2767C3.23086 22.0283 3.27724 21.7502 3.44417 21.5449C3.91197 20.9695 4.23363 20.2763 4.37588 19.5302C4.41437 19.325 4.32727 19.0463 4.05951 18.7744C2.24472 16.9315 1.125 14.4394 1.125 11.6917C1.125 5.96338 5.97023 1.375 11.875 1.375Z',
  d8: 'M6.875 12.125C6.875 11.5727 7.32272 11.125 7.875 11.125H7.88397C8.43626 11.125 8.88397 11.5727 8.88397 12.125C8.88397 12.6773 8.43626 13.125 7.88397 13.125H7.875C7.32272 13.125 6.875 12.6773 6.875 12.125ZM10.8705 12.125C10.8705 11.5727 11.3182 11.125 11.8705 11.125H11.8795C12.4318 11.125 12.8795 11.5727 12.8795 12.125C12.8795 12.6773 12.4318 13.125 11.8795 13.125H11.8705C11.3182 13.125 10.8705 12.6773 10.8705 12.125Z',
  d9: 'M20.0126 8.02334L21.9956 10M21.0487 5.52653C21.0487 3.57888 19.4698 2 17.5221 2C15.5745 2 13.9956 3.57888 13.9956 5.52653C13.9956 7.47418 15.5745 9.05306 17.5221 9.05306C19.4698 9.05306 21.0487 7.47418 21.0487 5.52653Z',
  d10: 'M11.9911 12H12.0001M15.9866 12H15.9956M7.99561 12H8.00458',
  d11: 'M12.0617 2C6.50479 2 2 6.25513 2 11.5041C2 14.1818 3.16878 16.5119 5.02326 18.2923L4.01587 21.9874C4.01364 21.9955 4.02195 22.0026 4.0297 21.9991L8.03099 20.2149C9.26507 20.7251 10.6284 21.0082 12.0617 21.0082C17.0808 21.0082 21.2416 17.5369 22 12.9973',
  d12: 'M12.7529 5.59118C12.7529 3.19361 14.6965 1.25 17.0941 1.25C19.4917 1.25 21.4353 3.19361 21.4353 5.59118C21.4353 6.37842 21.2257 7.11672 20.8594 7.75334L22.7504 9.64078L21.1463 11.25L19.2518 9.35904C18.6162 9.7238 17.8795 9.93237 17.0941 9.93237C14.6965 9.93237 12.7529 7.98875 12.7529 5.59118ZM17.0941 3.52214C15.9514 3.52214 15.0251 4.44848 15.0251 5.59118C15.0251 6.73388 15.9514 7.66022 17.0941 7.66022C18.2368 7.66022 19.1632 6.73388 19.1632 5.59118C19.1632 4.44848 18.2368 3.52214 17.0941 3.52214Z',
  d13: 'M11.502 5.59118C11.502 3.89161 12.2603 2.36914 13.457 1.34369C12.9802 1.2819 12.4938 1.25 12 1.25C6.10029 1.25 1.25 5.80369 1.25 11.5C1.25 14.2189 2.36071 16.6855 4.16134 18.5143L3.25001 22.75L8.01735 21.0233C9.25046 21.4925 10.5948 21.75 12 21.75C17.8997 21.75 22.75 17.1963 22.75 11.5C22.75 11.4704 22.7499 11.4407 22.7496 11.4112L21.1476 13.0184L18.9806 10.8554C18.3901 11.0671 17.7543 11.1824 17.0931 11.1824C14.0052 11.1824 11.502 8.67911 11.502 5.59118ZM9.00897 11H7V13H9.00897V11ZM13.0045 13V11H10.9955V13H13.0045Z',
};

export const IconBubbleChatSearchStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-search-stroke-rounded IconBubbleChatSearchStrokeRounded"
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

export const IconBubbleChatSearchDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-search-duotone-rounded IconBubbleChatSearchDuotoneRounded"
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

export const IconBubbleChatSearchTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-search-twotone-rounded IconBubbleChatSearchTwotoneRounded"
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

export const IconBubbleChatSearchSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-search-solid-rounded IconBubbleChatSearchSolidRounded"
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

export const IconBubbleChatSearchBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-search-bulk-rounded IconBubbleChatSearchBulkRounded"
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

export const IconBubbleChatSearchStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-search-stroke-sharp IconBubbleChatSearchStrokeSharp"
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

export const IconBubbleChatSearchSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-search-solid-sharp IconBubbleChatSearchSolidSharp"
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

export const iconPackOfBubbleChatSearch: TheIconSelfPack = {
  name: 'BubbleChatSearch',
  StrokeRounded: IconBubbleChatSearchStrokeRounded,
  DuotoneRounded: IconBubbleChatSearchDuotoneRounded,
  TwotoneRounded: IconBubbleChatSearchTwotoneRounded,
  SolidRounded: IconBubbleChatSearchSolidRounded,
  BulkRounded: IconBubbleChatSearchBulkRounded,
  StrokeSharp: IconBubbleChatSearchStrokeSharp,
  SolidSharp: IconBubbleChatSearchSolidSharp,
};