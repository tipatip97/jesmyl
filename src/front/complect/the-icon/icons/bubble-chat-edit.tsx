import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.9955 12H12.0045M8 12H8.00897',
  d2: 'M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9949 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C12.6849 2 13.3538 2.0659 14 2.19142',
  d3: 'M20.8386 2.47645L21.5309 3.16882C22.1167 3.7546 22.1167 4.70435 21.5309 5.29013L17.9035 8.9858C17.6182 9.27115 17.2532 9.46351 16.8565 9.53759L14.6084 10.0256C14.2534 10.1027 13.9373 9.78753 14.0134 9.43236L14.4919 7.19703C14.566 6.80035 14.7583 6.43535 15.0437 6.15L18.7173 2.47645C19.303 1.89066 20.2528 1.89066 20.8386 2.47645Z',
  d4: 'M12.0059 21.1334C17.5281 21.1334 22.0059 16.8499 22.0059 11.5667C22.0059 9.6764 21.4326 7.91405 20.4434 6.4301L17.8942 8.97933C17.3707 9.50281 16.6361 9.62849 15.9147 9.75189C15.7254 9.78428 15.537 9.8165 15.3536 9.85572C14.6637 10.0032 14.3187 10.077 14.1238 9.88211C13.9289 9.6872 14.0027 9.34223 14.1502 8.65228C14.1894 8.46887 14.2216 8.28049 14.254 8.0912C14.3774 7.36984 14.5031 6.6352 15.0266 6.11171L17.5404 3.59784C15.9556 2.58833 14.0525 2 12.0059 2C6.48364 2 2.00586 6.28357 2.00586 11.5667C2.00586 14.1051 3.03919 16.4115 4.72475 18.1231C5.09586 18.5 5.34364 19.0148 5.24364 19.5448C5.07861 20.4112 4.7046 21.2194 4.15697 21.893C5.59781 22.161 7.096 21.9197 8.38085 21.2364C8.83504 20.9949 9.06213 20.8741 9.22239 20.8496C9.38264 20.8251 9.61219 20.8682 10.0713 20.9545C10.7091 21.0742 11.3566 21.1343 12.0059 21.1334Z',
  d5: 'M22.0059 11.5667C22.0059 16.8499 17.5281 21.1334 12.0059 21.1334C11.3566 21.1343 10.7091 21.0742 10.0713 20.9545C9.61219 20.8682 9.38264 20.8251 9.22239 20.8496C9.06213 20.8741 8.83504 20.9949 8.38085 21.2364C7.096 21.9197 5.59781 22.161 4.15697 21.893C4.7046 21.2194 5.07861 20.4112 5.24364 19.5448C5.34364 19.0148 5.09586 18.5 4.72475 18.1231C3.03919 16.4115 2.00586 14.1051 2.00586 11.5667C2.00586 6.28357 6.48364 2 12.0059 2C12.6908 2 13.3597 2.0659 14.0059 2.19142',
  d6: 'M20.8737 2.43934L21.566 3.13171C22.1518 3.71749 22.1518 4.66724 21.566 5.25302L17.9386 8.94869C17.6533 9.23404 17.2883 9.4264 16.8916 9.50048L14.6435 9.98849C14.2885 10.0656 13.9724 9.75042 14.0485 9.39525L14.527 7.15992C14.6011 6.76324 14.7934 6.39824 15.0788 6.11289L18.7524 2.43934C19.3381 1.85355 20.2879 1.85355 20.8737 2.43934Z',
  d7: 'M12.0014 12H12.0104M8.00586 12H8.01483',
  d8: 'M19.0785 2.05388C19.4119 1.72053 19.5785 1.55385 19.7519 1.45375C20.2225 1.18208 20.8022 1.18208 21.2727 1.45375C21.4461 1.55385 21.6128 1.72053 21.9461 2.05388C22.2795 2.38723 22.4461 2.5539 22.5463 2.72729C22.8179 3.19782 22.8179 3.77754 22.5463 4.24807C22.4461 4.42146 22.2795 4.58814 21.9461 4.92149L18.6383 8.22933C17.9774 8.89018 16.9801 8.91705 16.0977 9.10572C15.4078 9.25325 15.0628 9.32701 14.8679 9.13211C14.673 8.9372 14.7468 8.59223 14.8943 7.90228C15.0829 7.01994 15.1098 6.02256 15.7707 5.36171L19.0785 2.05388Z',
  d9: 'M12 1.24999C6.09523 1.24999 1.25 5.83838 1.25 11.5667C1.25 14.3144 2.36972 16.8065 4.18451 18.6494C4.45227 18.9213 4.53937 19.2 4.50088 19.4052C4.35863 20.1513 4.03697 20.8445 3.56917 21.4198C3.40224 21.6252 3.35586 21.9033 3.44713 22.1516C3.5384 22.4 3.75381 22.5819 4.01396 22.6303C5.62504 22.93 7.29542 22.66 8.72714 21.8986C8.96068 21.7744 9.11322 21.6935 9.22775 21.6391C9.25931 21.6219 9.34334 21.5907 9.42696 21.6036C9.53909 21.6189 9.68979 21.647 9.92698 21.6916C10.6103 21.8199 11.3041 21.8843 12 21.8834C17.9048 21.8834 22.75 17.295 22.75 11.5667C22.75 10.3129 22.5179 9.11377 22.0934 8.00537C21.9598 7.65678 21.8931 7.48249 21.7337 7.44855C21.5743 7.41461 21.4366 7.55228 21.1613 7.82761L19.6989 9.28998C19.0987 9.89019 18.3894 10.1531 17.8221 10.298C17.5392 10.3702 17.2608 10.4202 17.0294 10.4602L16.3495 10.5858C16.0623 10.6475 15.7037 10.7245 15.3924 10.7443C15.0313 10.7673 14.3573 10.7429 13.8072 10.1928C13.2571 9.64265 13.2327 8.96869 13.2557 8.60763C13.2755 8.29626 13.3525 7.93768 13.4142 7.6505L13.5398 6.97063C13.5798 6.73916 13.6298 6.46082 13.702 6.17787C13.8469 5.61055 14.1098 4.90125 14.71 4.30105L16.1121 2.89894C16.3901 2.62093 16.5291 2.48193 16.4947 2.32216C16.4602 2.16238 16.2833 2.09562 15.9294 1.96211C14.7104 1.50218 13.3843 1.24999 12 1.24999ZM7 12C7 11.4477 7.44772 11 8 11H8.00897C8.56126 11 9.00897 11.4477 9.00897 12C9.00897 12.5523 8.56126 13 8.00897 13H8C7.44772 13 7 12.5523 7 12ZM10.9955 12C10.9955 11.4477 11.4432 11 11.9955 11H12.0045C12.5568 11 13.0045 11.4477 13.0045 12C13.0045 12.5523 12.5568 13 12.0045 13H11.9955C11.4432 13 10.9955 12.5523 10.9955 12Z',
  d10: 'M1.25 11.5667C1.25 5.83838 6.09523 1.25 12 1.25C13.3843 1.25 14.7104 1.50218 15.9294 1.96211C16.2833 2.09563 16.4602 2.16239 16.4947 2.32216C16.5291 2.48194 16.3901 2.62094 16.1121 2.89895L14.71 4.30105C14.1098 4.90126 13.8469 5.61056 13.702 6.17788C13.6298 6.46083 13.5798 6.73917 13.5398 6.97064L13.4142 7.6505C13.3525 7.93768 13.2755 8.29627 13.2557 8.60763C13.2327 8.96869 13.2571 9.64265 13.8072 10.1928C14.3573 10.7429 15.0313 10.7673 15.3924 10.7443C15.7037 10.7245 16.0623 10.6475 16.3495 10.5858L17.0294 10.4602C17.2608 10.4202 17.5392 10.3702 17.8221 10.298C18.3894 10.1531 19.0987 9.89019 19.6989 9.28999L21.1613 7.82762C21.4366 7.55228 21.5743 7.41462 21.7337 7.44856C21.8931 7.4825 21.9598 7.65679 22.0934 8.00538C22.5179 9.11378 22.75 10.3129 22.75 11.5667C22.75 17.295 17.9048 21.8834 12 21.8834C11.3041 21.8843 10.6103 21.8199 9.92698 21.6916C9.68979 21.647 9.53909 21.6189 9.42696 21.6036C9.34334 21.5907 9.25931 21.6219 9.22775 21.6391C9.11322 21.6935 8.96068 21.7744 8.72714 21.8986C7.29542 22.66 5.62504 22.93 4.01396 22.6303C3.75381 22.5819 3.5384 22.4 3.44713 22.1517C3.35586 21.9033 3.40224 21.6252 3.56917 21.4199C4.03697 20.8445 4.35863 20.1513 4.50088 19.4052C4.53937 19.2 4.45227 18.9213 4.18451 18.6494C2.36972 16.8065 1.25 14.3144 1.25 11.5667Z',
  d11: 'M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H8.00897C8.56126 13 9.00897 12.5523 9.00897 12C9.00897 11.4477 8.56126 11 8.00897 11H8ZM11.9955 11C11.4432 11 10.9955 11.4477 10.9955 12C10.9955 12.5523 11.4432 13 11.9955 13H12.0045C12.5568 13 13.0045 12.5523 13.0045 12C13.0045 11.4477 12.5568 11 12.0045 11H11.9955Z',
  d12: 'M11.9944 12H12.0034M7.99768 12H8.00665',
  d13: 'M21.6558 8.98092C23.3894 15.5097 18.2087 21.0077 12.0033 21.0077C10.5787 21.0077 9.22359 20.7245 7.99699 20.214L4.01996 21.9991C4.01225 22.0026 4.004 21.9955 4.00621 21.9874L5.00749 18.2904C3.16426 16.5092 2.00256 14.178 2.00256 11.4989C2.00256 5.99859 7.06373 0.988541 14.009 2.17603',
  d14: 'M16.4999 9.99976H13.9991V7.49976L19.4937 2.00684C19.4976 2.00293 19.5039 2.00293 19.5078 2.00684L21.9944 4.49269C21.9983 4.4966 21.9983 4.50293 21.9944 4.50684L16.4999 9.99976Z',
  d15: 'M14.75 6.75V9.25H17.25L22.75 3.75L20.25 1.25L14.75 6.75Z',
  d16: 'M12 1.25C13.8821 1.25 15.6575 1.71346 17.2026 2.52962L13.5 6.23223V10.5H17.7678L21.5256 6.74215C22.3069 8.16092 22.75 9.77826 22.75 11.5C22.75 17.1963 17.8997 21.75 12 21.75C10.5948 21.75 9.25046 21.4925 8.01735 21.0233L3.25001 22.75L4.16134 18.5143C2.36071 16.6855 1.25 14.2189 1.25 11.5C1.25 5.80369 6.10029 1.25 12 1.25ZM9.00897 11H7V13H9.00897V11ZM13.0045 13V11H10.9955V13H13.0045Z',
};

export const IconBubbleChatEditStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-edit-stroke-rounded IconBubbleChatEditStrokeRounded"
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

export const IconBubbleChatEditDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-edit-duotone-rounded IconBubbleChatEditDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatEditTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-edit-twotone-rounded IconBubbleChatEditTwotoneRounded"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatEditSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-edit-solid-rounded IconBubbleChatEditSolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatEditBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-edit-bulk-rounded IconBubbleChatEditBulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatEditStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-edit-stroke-sharp IconBubbleChatEditStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatEditSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-edit-solid-sharp IconBubbleChatEditSolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBubbleChatEdit: TheIconSelfPack = {
  name: 'BubbleChatEdit',
  StrokeRounded: IconBubbleChatEditStrokeRounded,
  DuotoneRounded: IconBubbleChatEditDuotoneRounded,
  TwotoneRounded: IconBubbleChatEditTwotoneRounded,
  SolidRounded: IconBubbleChatEditSolidRounded,
  BulkRounded: IconBubbleChatEditBulkRounded,
  StrokeSharp: IconBubbleChatEditStrokeSharp,
  SolidSharp: IconBubbleChatEditSolidSharp,
};