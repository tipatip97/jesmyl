import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 2C6.47778 2 2 6.28357 2 11.5667C2 14.1051 3.03333 16.4115 4.71889 18.1231C5.09 18.5 5.33778 19.0148 5.23778 19.5448C5.07275 20.4112 4.69874 21.2194 4.15111 21.893C5.59195 22.161 7.09014 21.9197 8.37499 21.2364C8.82918 20.9949 9.05627 20.8741 9.21653 20.8496C9.37678 20.8251 9.60633 20.8682 10.0654 20.9545C10.7032 21.0742 11.3507 21.1343 12 21.1334C17.5222 21.1334 22 16.8499 22 11.5667C22 10.6776 21.8732 9.81683 21.6359 9',
  d2: 'M14 6C14 6 15 6 16 8C16 8 19.1765 3 22 2',
  d3: 'M11.9955 12H12.0045M15.991 12H16M8 12H8.00897',
  d4: 'M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9949 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z',
  d5: 'M22.8176 1.79143C23.002 2.31202 22.7294 2.88352 22.2088 3.0679C21.6752 3.2569 21.0587 3.66376 20.4057 4.23648C19.763 4.80013 19.1378 5.47705 18.5841 6.14086C18.0322 6.80236 17.5635 7.43609 17.2324 7.90508C17.0672 8.13907 16.9372 8.33079 16.8493 8.46286L16.7191 8.66151C16.5258 8.96559 16.1837 9.14239 15.8239 9.12396C15.4639 9.10553 15.1418 8.89485 14.9806 8.57249C14.5399 7.69112 14.1446 7.34017 13.9453 7.20732C13.861 7.15111 13.804 7.12859 13.7814 7.12095C13.273 7.07374 12.875 6.64599 12.875 6.12527C12.875 5.57299 13.3227 5.12527 13.875 5.12527C13.9574 5.12607 14.1621 5.14114 14.3216 5.195C14.5295 5.25439 14.7803 5.36029 15.0547 5.54322C15.329 5.72607 15.6166 5.97884 15.9054 6.3247C16.2206 5.89395 16.609 5.38628 17.0483 4.85968C17.6416 4.14849 18.34 3.38792 19.087 2.73281C19.8236 2.08679 20.663 1.49365 21.5412 1.18265C22.0618 0.998267 22.6332 1.27083 22.8176 1.79143Z',
  d6: 'M16.8358 2.65782C16.8683 2.80796 16.7436 2.94623 16.4944 3.22277C16.3236 3.41229 16.16 3.59837 16.0082 3.77447C15.8532 3.95427 15.7757 4.04417 15.6793 4.066C15.5828 4.08783 15.4634 4.0353 15.2245 3.93024C15.0657 3.86041 14.9113 3.80471 14.7633 3.76104C14.4333 3.656 13.9661 3.6294 13.8867 3.62554L13.8751 3.62509L13.863 3.62504C12.4878 3.63148 11.375 4.74829 11.375 6.12501C11.375 7.20594 12.0602 8.12563 13.0206 8.47488C13.1137 8.50872 13.1602 8.52564 13.1956 8.55208C13.231 8.57853 13.2516 8.60638 13.2928 8.66209C13.384 8.78528 13.503 8.97111 13.6389 9.24304C14.0419 10.0489 14.8473 10.5757 15.7472 10.6217C16.6413 10.6675 17.4907 10.2316 17.9754 9.48087L17.9771 9.47827L17.9783 9.47635L17.9796 9.47445L17.9807 9.47279C18.0115 9.42657 18.3114 8.97738 18.4579 8.76984C18.7726 8.32394 19.2166 7.72398 19.7359 7.10148C19.9197 6.88116 20.1091 6.66257 20.302 6.45025C20.5238 6.20615 20.6347 6.0841 20.7846 6.09872C20.9345 6.11335 21.0184 6.25233 21.1861 6.53028C22.1004 8.04546 22.625 9.80691 22.625 11.6918C22.625 17.4201 17.7798 22.0085 11.875 22.0085C11.1791 22.0093 10.4853 21.945 9.80198 21.8166C9.56479 21.7721 9.41409 21.744 9.30196 21.7286C9.21834 21.7158 9.13431 21.7469 9.10275 21.7641C8.98822 21.8185 8.83568 21.8994 8.60214 22.0236C7.17042 22.785 5.50004 23.055 3.88896 22.7554C3.62881 22.707 3.4134 22.5251 3.32213 22.2767C3.23086 22.0283 3.27724 21.7502 3.44417 21.5449C3.91197 20.9695 4.23363 20.2764 4.37588 19.5303C4.41437 19.3251 4.32727 19.0463 4.05951 18.7744C2.24472 16.9316 1.125 14.4394 1.125 11.6918C1.125 5.96344 5.97023 1.37506 11.875 1.37506C13.4563 1.37506 14.9615 1.70411 16.3181 2.29598C16.6416 2.43711 16.8033 2.50767 16.8358 2.65782ZM7.875 11.125C7.32272 11.125 6.875 11.5727 6.875 12.125C6.875 12.6773 7.32272 13.125 7.875 13.125H7.88397C8.43626 13.125 8.88397 12.6773 8.88397 12.125C8.88397 11.5727 8.43626 11.125 7.88397 11.125H7.875ZM11.8705 11.125C11.3182 11.125 10.8705 11.5727 10.8705 12.125C10.8705 12.6773 11.3182 13.125 11.8705 13.125H11.8795C12.4318 13.125 12.8795 12.6773 12.8795 12.125C12.8795 11.5727 12.4318 11.125 11.8795 11.125H11.8705Z',
  d7: 'M16.4944 3.22271C16.7436 2.94617 16.8683 2.8079 16.8358 2.65776C16.8033 2.50761 16.6416 2.43705 16.3181 2.29592C14.9615 1.70405 13.4563 1.375 11.875 1.375C5.97023 1.375 1.125 5.96338 1.125 11.6917C1.125 14.4394 2.24472 16.9315 4.05951 18.7744C4.32727 19.0463 4.41437 19.325 4.37588 19.5302C4.23363 20.2763 3.91197 20.9695 3.44417 21.5449C3.27724 21.7502 3.23086 22.0283 3.32213 22.2767C3.4134 22.525 3.62881 22.7069 3.88896 22.7553C5.50004 23.055 7.17042 22.785 8.60214 22.0236C8.83568 21.8994 8.98822 21.8185 9.10275 21.7641C9.13431 21.7469 9.21834 21.7157 9.30196 21.7286C9.41409 21.7439 9.56479 21.772 9.80198 21.8166C10.4853 21.9449 11.1791 22.0093 11.875 22.0084C17.7798 22.0084 22.625 17.42 22.625 11.6917C22.625 9.80685 22.1004 8.0454 21.1861 6.53022C21.0184 6.25227 20.9345 6.11329 20.7846 6.09866C20.6347 6.08404 20.5238 6.20609 20.302 6.45019C20.1091 6.66251 19.9197 6.8811 19.7359 7.10142C19.2166 7.72392 18.7726 8.32388 18.4579 8.76978C18.3114 8.97732 18.0115 9.42651 17.9807 9.47273C17.9803 9.47332 17.9799 9.47392 17.9795 9.47445C17.979 9.4752 17.9788 9.47558 17.9783 9.47627C17.9779 9.47696 17.9776 9.47736 17.9771 9.47816C17.9766 9.47891 17.976 9.47984 17.9754 9.48081C17.4907 10.2315 16.6413 10.6675 15.7472 10.6217C14.8473 10.5756 14.0419 10.0489 13.6389 9.24298C13.503 8.97105 13.384 8.78522 13.2928 8.66203C13.2516 8.60632 13.231 8.57847 13.1956 8.55202C13.1602 8.52558 13.1137 8.50866 13.0206 8.47482C12.0602 8.12557 11.375 7.20588 11.375 6.12495C11.375 4.74823 12.4878 3.63142 13.863 3.62498C13.8684 3.62495 13.8712 3.62494 13.8751 3.62503C13.8791 3.62511 13.8817 3.62524 13.8867 3.62548C13.9661 3.62934 14.4333 3.65594 14.7633 3.76098C14.9113 3.80465 15.0657 3.86035 15.2245 3.93018C15.4634 4.03524 15.5828 4.08777 15.6793 4.06594C15.7757 4.04411 15.8532 3.95421 16.0082 3.77441C16.16 3.59831 16.3236 3.41223 16.4944 3.22271Z',
  d8: 'M6.875 12.125C6.875 11.5727 7.32272 11.125 7.875 11.125H7.88397C8.43626 11.125 8.88397 11.5727 8.88397 12.125C8.88397 12.6773 8.43626 13.125 7.88397 13.125H7.875C7.32272 13.125 6.875 12.6773 6.875 12.125ZM10.8705 12.125C10.8705 11.5727 11.3182 11.125 11.8705 11.125H11.8795C12.4318 11.125 12.8795 11.5727 12.8795 12.125C12.8795 12.6773 12.4318 13.125 11.8795 13.125H11.8705C11.3182 13.125 10.8705 12.6773 10.8705 12.125Z',
  d9: 'M13.9978 6L15.9978 8L21.9978 2',
  d10: 'M11.9933 12H12.0023M15.9888 12H15.9978M7.9978 12H8.00677',
  d11: 'M12 2C6.47837 2 2.0022 6.25513 2.0022 11.5041C2.0022 14.1818 3.16355 16.5119 5.00624 18.2923L4.00525 21.9874C4.00305 21.9955 4.0113 22.0026 4.019 21.9991L7.99487 20.2149C9.22111 20.7251 10.5758 21.0082 12 21.0082C17.5216 21.0082 21.9978 16.7531 21.9978 11.5041C21.9978 10.9375 21.9233 9.92539 21.6512 9.00187',
  d12: 'M22.75 2.66421L16.0429 9.37132L13.3358 6.66421L14.75 5.25L16.0429 6.54289L21.3358 1.25L22.75 2.66421Z',
  d13: 'M12 1.25C14.1687 1.25 16.1955 1.8653 17.8918 2.92648L16.0432 4.77507L14.7503 3.48218L11.5684 6.66416L16.0432 11.139L21.1173 6.06495C22.1508 7.63671 22.75 9.49777 22.75 11.5C22.75 17.1963 17.8997 21.75 12 21.75C10.5948 21.75 9.25046 21.4925 8.01735 21.0233L3.25001 22.75L4.16134 18.5143C2.36071 16.6855 1.25 14.2189 1.25 11.5C1.25 5.80369 6.10029 1.25 12 1.25ZM9.00897 11H7V13H9.00897V11ZM13.0045 13V11H10.9955V13H13.0045Z',
};

export const IconBubbleChatDoneStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-done-stroke-rounded IconBubbleChatDoneStrokeRounded"
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

export const IconBubbleChatDoneDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-done-duotone-rounded IconBubbleChatDoneDuotoneRounded"
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

export const IconBubbleChatDoneTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-done-twotone-rounded IconBubbleChatDoneTwotoneRounded"
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

export const IconBubbleChatDoneSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-done-solid-rounded IconBubbleChatDoneSolidRounded"
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

export const IconBubbleChatDoneBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-done-bulk-rounded IconBubbleChatDoneBulkRounded"
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

export const IconBubbleChatDoneStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-done-stroke-sharp IconBubbleChatDoneStrokeSharp"
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

export const IconBubbleChatDoneSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-done-solid-sharp IconBubbleChatDoneSolidSharp"
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

export const iconPackOfBubbleChatDone: TheIconSelfPack = {
  name: 'BubbleChatDone',
  StrokeRounded: IconBubbleChatDoneStrokeRounded,
  DuotoneRounded: IconBubbleChatDoneDuotoneRounded,
  TwotoneRounded: IconBubbleChatDoneTwotoneRounded,
  SolidRounded: IconBubbleChatDoneSolidRounded,
  BulkRounded: IconBubbleChatDoneBulkRounded,
  StrokeSharp: IconBubbleChatDoneStrokeSharp,
  SolidSharp: IconBubbleChatDoneSolidSharp,
};