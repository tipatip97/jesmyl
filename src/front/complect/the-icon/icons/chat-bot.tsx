import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 8H13C15.8284 8 17.2426 8 18.1213 8.87868C19 9.75736 19 11.1716 19 14C19 16.8284 19 18.2426 18.1213 19.1213C17.2426 20 15.8284 20 13 20H12C12 20 11.5 22 8 22C8 22 9 20.9913 9 19.9827C7.44655 19.9359 6.51998 19.7626 5.87868 19.1213C5 18.2426 5 16.8284 5 14C5 11.1716 5 9.75736 5.87868 8.87868C6.75736 8 8.17157 8 11 8Z',
  d2: 'M19 11.5H19.5C20.4346 11.5 20.9019 11.5 21.25 11.701C21.478 11.8326 21.6674 12.022 21.799 12.25C22 12.5981 22 13.0654 22 14C22 14.9346 22 15.4019 21.799 15.75C21.6674 15.978 21.478 16.1674 21.25 16.299C20.9019 16.5 20.4346 16.5 19.5 16.5H19',
  d3: 'M5 11.5H4.5C3.56538 11.5 3.09808 11.5 2.75 11.701C2.52197 11.8326 2.33261 12.022 2.20096 12.25C2 12.5981 2 13.0654 2 14C2 14.9346 2 15.4019 2.20096 15.75C2.33261 15.978 2.52197 16.1674 2.75 16.299C3.09808 16.5 3.56538 16.5 4.5 16.5H5',
  d4: 'M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z',
  d5: 'M12 5V8',
  d6: 'M9 12V13M15 12V13',
  d7: 'M10 16.5C10 16.5 10.6667 17 12 17C13.3333 17 14 16.5 14 16.5',
  d8: 'M12 5C12.8284 5 13.5 4.32843 13.5 3.5C13.5 2.67157 12.8284 2 12 2C11.1716 2 10.5 2.67157 10.5 3.5C10.5 4.32843 11.1716 5 12 5ZM12 5V8',
  d9: 'M9.75 3.5C9.75 2.25736 10.7574 1.25 12 1.25C13.2426 1.25 14.25 2.25736 14.25 3.5C14.25 4.74264 13.2426 5.75 12 5.75C10.7574 5.75 9.75 4.74264 9.75 3.5Z',
  d10: 'M12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V8C12.75 8.41421 12.4142 8.75 12 8.75C11.5858 8.75 11.25 8.41421 11.25 8V5C11.25 4.58579 11.5858 4.25 12 4.25Z',
  d11: 'M13.0549 7.25H13.0549C14.4225 7.24998 15.5248 7.24996 16.3918 7.36652C17.2919 7.48754 18.0497 7.74643 18.6517 8.34835C19.2536 8.95027 19.5125 9.70814 19.6335 10.6083C19.75 11.4752 19.75 12.6873 19.75 14.0549V14.0549V14.0549V14.0549C19.75 15.4225 19.75 16.5248 19.6335 17.3918C19.5125 18.2919 19.2536 19.0497 18.6517 19.6517C18.0497 20.2536 17.2919 20.5125 16.3918 20.6335C15.5248 20.75 14.4225 20.75 13.0549 20.75H13.0549H13.0549H13.0549H12.4815C12.3417 20.9897 12.1288 21.2778 11.8108 21.5606C11.089 22.2021 9.90196 22.75 8 22.75C7.69725 22.75 7.42418 22.568 7.30772 22.2885C7.1913 22.0092 7.25418 21.6872 7.46712 21.4722C7.54644 21.3789 7.76971 21.1143 7.87431 20.956C7.93465 20.8647 7.98964 20.7726 8.03781 20.6813C6.93387 20.5847 6.03487 20.3382 5.34835 19.6517C4.74643 19.0497 4.48754 18.2919 4.36652 17.3918C4.24996 16.5248 4.24998 15.4225 4.25 14.0549V14.0549V14.0549C4.24998 12.6873 4.24996 11.4752 4.36652 10.6083C4.48754 9.70814 4.74643 8.95027 5.34835 8.34835C5.95027 7.74643 6.70814 7.48754 7.60825 7.36652C8.47521 7.24996 9.57752 7.24998 10.9451 7.25H10.9451H10.9451H13.0549H13.0549ZM9 11.25C9.41421 11.25 9.75 11.5858 9.75 12V13C9.75 13.4142 9.41421 13.75 9 13.75C8.58579 13.75 8.25 13.4142 8.25 13V12C8.25 11.5858 8.58579 11.25 9 11.25ZM15 11.25C15.4142 11.25 15.75 11.5858 15.75 12V13C15.75 13.4142 15.4142 13.75 15 13.75C14.5858 13.75 14.25 13.4142 14.25 13V12C14.25 11.5858 14.5858 11.25 15 11.25ZM10.4401 15.8927C10.1093 15.6529 9.6461 15.722 9.40004 16.05C9.15152 16.3814 9.21867 16.8515 9.55004 17.1C9.55425 17.1028 9.55966 17.1064 9.56602 17.1106C9.61187 17.1408 9.70714 17.2036 9.75735 17.2319C9.87172 17.2962 10.0315 17.3753 10.2367 17.4523C10.6485 17.6067 11.2375 17.75 12 17.75C12.7626 17.75 13.3516 17.6067 13.7634 17.4523C13.9686 17.3753 14.1284 17.2962 14.2427 17.2319C14.293 17.2036 14.3882 17.1408 14.4341 17.1106C14.4404 17.1064 14.4458 17.1028 14.45 17.1C14.7814 16.8515 14.8486 16.3814 14.6 16.05C14.354 15.722 13.8907 15.6529 13.56 15.8927C13.5077 15.9221 13.3648 15.9997 13.2367 16.0478C12.9818 16.1434 12.5708 16.25 12 16.25C11.4293 16.25 11.0183 16.1434 10.7634 16.0478C10.6352 15.9997 10.4924 15.9221 10.4401 15.8927Z',
  d12: 'M3.08645 10.8086C2.84317 10.8482 2.60389 10.9186 2.375 11.0507C2.03296 11.2482 1.74892 11.5322 1.55145 11.8743C1.37408 12.1815 1.30802 12.5075 1.27818 12.8366C1.24997 13.1479 1.24999 13.5917 1.25 14.0315C1.24999 14.4713 1.24997 14.8507 1.27818 15.1619C1.30802 15.4911 1.37408 15.8171 1.55145 16.1243C1.74892 16.4663 2.03296 16.7504 2.375 16.9478C2.60355 17.0798 2.84248 17.1501 3.08539 17.1898C2.99989 16.311 2.99995 15.2711 3.00001 14.1301C2.99994 12.9844 2.99988 11.7389 3.08645 10.8086Z',
  d13: 'M20.9151 17.1898C21.158 17.1501 21.3969 17.0798 21.6255 16.9478C21.9675 16.7504 22.2516 16.4663 22.4491 16.1243C22.6264 15.8171 22.6925 15.4911 22.7223 15.1619C22.7505 14.8506 22.7505 14.4713 22.7505 14.0315C22.7505 13.5917 22.7505 13.1479 22.7223 12.8366C22.6925 12.5074 22.6264 12.1815 22.4491 11.8743C22.2516 11.5322 21.9675 11.2482 21.6255 11.0507C21.3966 10.9186 21.1573 10.8482 20.9141 10.8086C21.0006 11.7389 21.0006 12.9843 21.0005 14.1301C21.0006 15.2711 21.0006 16.311 20.9151 17.1898Z',
  d14: 'M13.0549 7.25C14.4225 7.24998 15.5248 7.24996 16.3918 7.36652C17.2919 7.48754 18.0497 7.74643 18.6517 8.34835C19.2536 8.95027 19.5125 9.70814 19.6335 10.6083C19.75 11.4752 19.75 12.6873 19.75 14.0549V14.0549C19.75 15.4225 19.75 16.5248 19.6335 17.3918C19.5125 18.2919 19.2536 19.0497 18.6517 19.6516C18.0497 20.2536 17.2919 20.5125 16.3918 20.6335C15.5248 20.75 14.4225 20.75 13.0549 20.75H13.0549H12.4815C12.3417 20.9897 12.1288 21.2778 11.8108 21.5606C11.089 22.2021 9.90196 22.75 8 22.75C7.69725 22.75 7.42418 22.568 7.30772 22.2885C7.1913 22.0092 7.25418 21.6872 7.46712 21.4722C7.54644 21.3789 7.76971 21.1143 7.87431 20.956C7.93465 20.8647 7.98964 20.7726 8.03781 20.6813C6.93387 20.5847 6.03487 20.3382 5.34835 19.6517C4.74643 19.0497 4.48754 18.2919 4.36652 17.3918C4.24996 16.5248 4.24998 15.4225 4.25 14.0549V14.0549C4.24998 12.6873 4.24996 11.4752 4.36652 10.6082C4.48754 9.70814 4.74643 8.95027 5.34835 8.34835C5.95027 7.74643 6.70814 7.48754 7.60825 7.36652C8.47521 7.24996 9.57753 7.24998 10.9451 7.25H10.9451H13.0549H13.0549Z',
  d15: 'M9 11.25C9.41421 11.25 9.75 11.5858 9.75 12V13C9.75 13.4142 9.41421 13.75 9 13.75C8.58579 13.75 8.25 13.4142 8.25 13V12C8.25 11.5858 8.58579 11.25 9 11.25ZM15 11.25C15.4142 11.25 15.75 11.5858 15.75 12V13C15.75 13.4142 15.4142 13.75 15 13.75C14.5858 13.75 14.25 13.4142 14.25 13V12C14.25 11.5858 14.5858 11.25 15 11.25Z',
  d16: 'M9.40004 16.05C9.6461 15.722 10.1093 15.6529 10.4401 15.8927C10.4924 15.9221 10.6352 15.9997 10.7634 16.0478C11.0183 16.1434 11.4293 16.25 12 16.25C12.5708 16.25 12.9818 16.1434 13.2367 16.0478C13.3648 15.9997 13.5077 15.9221 13.56 15.8927C13.8907 15.6529 14.354 15.722 14.6 16.05C14.8486 16.3814 14.7814 16.8515 14.45 17.1C14.4155 17.1227 14.2999 17.1997 14.2427 17.2319C14.1284 17.2962 13.9686 17.3753 13.7634 17.4523C13.3516 17.6067 12.7626 17.75 12 17.75C11.2375 17.75 10.6485 17.6067 10.2367 17.4523C10.0315 17.3753 9.87172 17.2962 9.75735 17.2319C9.70017 17.1997 9.58457 17.1227 9.55004 17.1C9.21867 16.8515 9.15152 16.3814 9.40004 16.05Z',
  d17: 'M12.75 5C12.75 4.58579 12.4142 4.25 12 4.25C11.5858 4.25 11.25 4.58579 11.25 5V7.25H12.75V5Z',
  d18: 'M19 8H5V20H9V22L12 20H19V8Z',
  d19: 'M19 11.5H22V16.5H19',
  d20: 'M5 16.5L2 16.5L2 11.5L5 11.5',
  d21: 'M9 11V13M15 11V13M9.5 16C9.5 16 10.3333 17 12 17C13.6667 17 14.5 16 14.5 16',
  d22: 'M9.75 3.5C9.75 2.25736 10.7574 1.25 12 1.25C13.2426 1.25 14.25 2.25736 14.25 3.5C14.25 4.47966 13.6239 5.31309 12.75 5.62197V8H11.25V5.62197C10.3761 5.31309 9.75 4.47966 9.75 3.5Z',
  d23: 'M5 7.25C4.58579 7.25 4.25 7.58579 4.25 8V20C4.25 20.4142 4.58579 20.75 5 20.75H8.25V22C8.25 22.2766 8.40224 22.5307 8.64611 22.6613C8.88997 22.7918 9.18588 22.7775 9.41603 22.624L12.2271 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V8C19.75 7.58579 19.4142 7.25 19 7.25H5ZM8.25 11V13H9.75V11H8.25ZM14.25 11V13H15.75V11H14.25ZM9.5 16C8.92383 16.4801 8.92407 16.4804 8.92431 16.4807L8.9248 16.4813L8.92584 16.4825L8.92819 16.4853L8.93386 16.492L8.94921 16.5095C8.96121 16.523 8.97679 16.5401 8.99596 16.5602C9.03426 16.6004 9.08709 16.653 9.15453 16.7137C9.28915 16.8349 9.4838 16.9899 9.73913 17.1431C10.2527 17.4513 11.0095 17.75 12 17.75C12.9905 17.75 13.7473 17.4513 14.2609 17.1431C14.5162 16.9899 14.7109 16.8349 14.8455 16.7137C14.9129 16.653 14.9657 16.6004 15.004 16.5602C15.0232 16.5401 15.0388 16.523 15.0508 16.5095L15.0661 16.492L15.0718 16.4853L15.0742 16.4825L15.0752 16.4813L15.0757 16.4807C15.0759 16.4804 15.0762 16.4801 14.5 16C13.9238 15.5199 13.9241 15.5196 13.9243 15.5193L13.9247 15.5188L13.9255 15.5178L13.927 15.5161L13.929 15.5138C13.93 15.5126 13.9302 15.5124 13.9297 15.513C13.9287 15.5141 13.9247 15.5185 13.9178 15.5257C13.9041 15.5402 13.8788 15.5657 13.842 15.5988C13.7683 15.6651 13.6505 15.7601 13.4891 15.8569C13.1694 16.0487 12.6762 16.25 12 16.25C11.3238 16.25 10.8306 16.0487 10.5109 15.8569C10.3495 15.7601 10.2317 15.6651 10.158 15.5988C10.1212 15.5657 10.0959 15.5402 10.0822 15.5257C10.0753 15.5185 10.0713 15.5141 10.0703 15.513L10.071 15.5138L10.073 15.5161L10.0745 15.5178L10.0753 15.5188L10.0757 15.5193C10.0759 15.5196 10.0762 15.5199 9.5 16Z',
  d24: 'M3 10.75H2C1.58579 10.75 1.25 11.0858 1.25 11.5V16.5C1.25 16.9142 1.58579 17.25 2 17.25H3V10.75Z',
  d25: 'M21 17.25H22C22.4142 17.25 22.75 16.9142 22.75 16.5V11.5C22.75 11.0858 22.4142 10.75 22 10.75H21V17.25Z',
};

export const IconChatBotStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chat-bot-stroke-rounded IconChatBotStrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChatBotDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chat-bot-duotone-rounded IconChatBotDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChatBotTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chat-bot-twotone-rounded IconChatBotTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChatBotSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chat-bot-solid-rounded IconChatBotSolidRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChatBotBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chat-bot-bulk-rounded IconChatBotBulkRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChatBotStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chat-bot-stroke-sharp IconChatBotStrokeSharp"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconChatBotSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chat-bot-solid-sharp IconChatBotSolidSharp"
    >
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChatBot: TheIconSelfPack = {
  name: 'ChatBot',
  StrokeRounded: IconChatBotStrokeRounded,
  DuotoneRounded: IconChatBotDuotoneRounded,
  TwotoneRounded: IconChatBotTwotoneRounded,
  SolidRounded: IconChatBotSolidRounded,
  BulkRounded: IconChatBotBulkRounded,
  StrokeSharp: IconChatBotStrokeSharp,
  SolidSharp: IconChatBotSolidSharp,
};