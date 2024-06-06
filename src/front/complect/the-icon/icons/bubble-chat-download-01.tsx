import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.006 2.19142C13.3595 2.0659 12.6903 2 12.005 2C6.48004 2 2 6.28357 2 11.5667C2 14.1051 3.03385 16.4115 4.72026 18.1231C5.09156 18.5 5.33946 19.0148 5.23941 19.5448C5.07429 20.4112 4.7001 21.2194 4.1522 21.893C5.59376 22.161 7.0927 21.9197 8.3782 21.2364C8.83262 20.9949 9.05983 20.8741 9.22017 20.8496C9.3805 20.8251 9.61016 20.8682 10.0695 20.9545C10.7076 21.0742 11.3554 21.1343 12.005 21.1334C17.3782 21.1334 21.763 17.0821 22 12',
  d2: 'M16 7.5C16.4915 8.0057 17.7998 10 18.5 10M21 7.5C20.5085 8.0057 19.2002 10 18.5 10M18.5 10V2',
  d3: 'M11.9955 12H12.0045M8 12H8.00897',
  d4: 'M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9949 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z',
  d5: 'M19.5059 2.125C19.5059 1.57272 19.0581 1.125 18.5059 1.125C17.9536 1.125 17.5059 1.57272 17.5059 2.125L17.5059 6.62504L16.9116 6.62502C16.736 6.62489 16.5203 6.62474 16.3439 6.64681L16.3405 6.64723C16.2141 6.663 15.638 6.73483 15.3637 7.30043C15.0887 7.86725 15.3907 8.36739 15.456 8.4756L15.4584 8.47963C15.5506 8.63265 15.6848 8.80353 15.7951 8.94408L15.8188 8.97433C16.1135 9.35015 16.4954 9.83437 16.8759 10.2254C17.0657 10.4205 17.283 10.6217 17.5139 10.7806C17.7191 10.9218 18.0693 11.125 18.5 11.125C18.9307 11.125 19.2809 10.9218 19.4861 10.7806C19.717 10.6217 19.9343 10.4205 20.1241 10.2254C20.5046 9.83437 20.8865 9.35015 21.1812 8.97433L21.2049 8.94409C21.3152 8.80353 21.4494 8.63265 21.5416 8.47963L21.544 8.47559C21.6093 8.36739 21.9113 7.86725 21.6363 7.30043C21.362 6.73483 20.7859 6.66299 20.6595 6.64723L20.6561 6.64681C20.4797 6.62474 20.264 6.62489 20.0884 6.62502L19.5059 6.62504L19.5059 2.125Z',
  d6: 'M15.619 1.97528C14.4864 1.58646 13.2676 1.37499 12 1.37499C6.09523 1.37499 1.25 5.96338 1.25 11.6917C1.25 14.4394 2.36972 16.9315 4.18451 18.7744C4.45227 19.0463 4.53937 19.325 4.50088 19.5302C4.35863 20.2763 4.03697 20.9695 3.56917 21.5448C3.40224 21.7502 3.35586 22.0283 3.44713 22.2766C3.5384 22.525 3.75381 22.7069 4.01396 22.7553C5.62504 23.055 7.29542 22.785 8.72714 22.0236C8.96068 21.8994 9.11322 21.8185 9.22775 21.7641C9.25931 21.7469 9.34334 21.7157 9.42696 21.7286C9.53909 21.7439 9.68979 21.772 9.92698 21.8166C10.6103 21.9449 11.3041 22.0093 12 22.0084C17.9048 22.0084 22.75 17.42 22.75 11.6917C22.75 11.4562 22.7418 11.2227 22.7257 10.9913C22.6869 10.4347 22.6676 10.1564 22.4761 10.0933C22.2846 10.0303 22.0905 10.2582 21.7024 10.7138C21.5309 10.9152 21.3588 11.1072 21.199 11.2714C20.9771 11.4994 20.682 11.7784 20.3361 12.0164C20.0532 12.211 19.3916 12.625 18.4998 12.625C17.608 12.625 16.9464 12.211 16.6635 12.0164C16.3176 11.7784 16.0225 11.4994 15.8006 11.2714C15.3555 10.8139 14.6675 10.0639 14.1658 9.24116C14.0659 9.07735 13.3799 7.95264 14.0139 6.64575C14.4002 5.84943 15.036 5.48044 15.5168 5.30849C15.7697 5.21805 15.8962 5.17283 15.9509 5.09512C16.0057 5.01741 16.0057 4.90278 16.0057 4.67351L16.0057 2.52782C16.0057 2.32669 16.0057 2.22613 15.9498 2.14791C15.894 2.06969 15.8023 2.03822 15.619 1.97528ZM8 11.125C7.44772 11.125 7 11.5727 7 12.125C7 12.6773 7.44772 13.125 8 13.125H8.00897C8.56126 13.125 9.00897 12.6773 9.00897 12.125C9.00897 11.5727 8.56126 11.125 8.00897 11.125H8ZM11.9955 11.125C11.4432 11.125 10.9955 11.5727 10.9955 12.125C10.9955 12.6773 11.4432 13.125 11.9955 13.125H12.0045C12.5568 13.125 13.0045 12.6773 13.0045 12.125C13.0045 11.5727 12.5568 11.125 12.0045 11.125H11.9955Z',
  d7: 'M12 1.375C13.2676 1.375 14.4864 1.58647 15.619 1.97528C15.8023 2.03823 15.894 2.0697 15.9498 2.14792C16.0057 2.22613 16.0057 2.32669 16.0057 2.52782L16.0057 4.67352C16.0057 4.90278 16.0057 5.01741 15.9509 5.09513C15.8962 5.17284 15.7697 5.21806 15.5168 5.3085C15.036 5.48045 14.4002 5.84944 14.0139 6.64576C13.3799 7.95264 14.0659 9.07736 14.1658 9.24116C14.6675 10.064 15.3555 10.8139 15.8006 11.2714C16.0225 11.4995 16.3176 11.7784 16.6635 12.0164C16.9464 12.211 17.608 12.625 18.4998 12.625C19.3916 12.625 20.0532 12.211 20.3361 12.0164C20.682 11.7784 20.9771 11.4995 21.199 11.2714C21.3588 11.1072 21.5309 10.9152 21.7024 10.7139C22.0905 10.2582 22.2846 10.0303 22.4761 10.0933C22.6676 10.1564 22.6869 10.4347 22.7257 10.9913C22.7418 11.2227 22.75 11.4563 22.75 11.6917C22.75 17.42 17.9048 22.0084 12 22.0084C11.3041 22.0093 10.6103 21.9449 9.92698 21.8166C9.68979 21.772 9.53909 21.7439 9.42696 21.7286C9.34334 21.7157 9.25931 21.7469 9.22775 21.7641C9.11322 21.8185 8.96068 21.8994 8.72714 22.0236C7.29542 22.785 5.62504 23.055 4.01396 22.7553C3.75381 22.7069 3.5384 22.525 3.44713 22.2767C3.35586 22.0283 3.40224 21.7502 3.56917 21.5449C4.03697 20.9695 4.35863 20.2763 4.50088 19.5302C4.53937 19.325 4.45227 19.0463 4.18451 18.7744C2.36972 16.9315 1.25 14.4394 1.25 11.6917C1.25 5.96338 6.09523 1.375 12 1.375Z',
  d8: 'M7 12.125C7 11.5727 7.44772 11.125 8 11.125H8.00897C8.56126 11.125 9.00897 11.5727 9.00897 12.125C9.00897 12.6773 8.56126 13.125 8.00897 13.125H8C7.44772 13.125 7 12.6773 7 12.125ZM10.9955 12.125C10.9955 11.5727 11.4432 11.125 11.9955 11.125H12.0045C12.5568 11.125 13.0045 11.5727 13.0045 12.125C13.0045 12.6773 12.5568 13.125 12.0045 13.125H11.9955C11.4432 13.125 10.9955 12.6773 10.9955 12.125Z',
  d9: 'M15.9954 6.99756L18.9954 9.9961L21.9954 6.99756M18.9954 2V9.46749',
  d10: 'M11.9909 11.9951H11.9999M7.99536 11.9951H8.00433',
  d11: 'M21.9978 11.5041C21.9978 16.7531 17.5216 21.0082 12 21.0082C10.5758 21.0082 9.22111 20.7251 7.99487 20.2149L4.019 21.9991C4.0113 22.0026 4.00305 21.9955 4.00525 21.9874L5.00624 18.2923C3.16355 16.5119 2.0022 14.1818 2.0022 11.5041C2.0022 6.0064 7.06188 0.998801 14.0051 2.18571',
  d12: 'M19.0429 10.6641L22.75 6.95696L21.3358 5.54274L20.0429 6.83564V1.24985H18.0429V6.83564L16.75 5.54274L15.3358 6.95696L19.0429 10.6641Z',
  d13: 'M19.0432 12.432L22.4384 9.03682C22.6419 9.82486 22.75 10.6497 22.75 11.5C22.75 17.1963 17.8997 21.75 12 21.75C10.5948 21.75 9.25046 21.4925 8.01735 21.0233L3.25001 22.75L4.16134 18.5143C2.36071 16.6855 1.25 14.2189 1.25 11.5C1.25 5.80369 6.10029 1.25 12 1.25C13.718 1.25 15.3471 1.63615 16.7932 2.32423V3.81805L16.7503 3.77515L13.5684 6.95713L19.0432 12.432ZM9.00897 11H7V13H9.00897V11ZM13.0045 13V11H10.9955V13H13.0045Z',
};

export const IconBubbleChatDownload01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-download-01-stroke-rounded IconBubbleChatDownload01StrokeRounded"
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

export const IconBubbleChatDownload01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-download-01-duotone-rounded IconBubbleChatDownload01DuotoneRounded"
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

export const IconBubbleChatDownload01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-download-01-twotone-rounded IconBubbleChatDownload01TwotoneRounded"
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

export const IconBubbleChatDownload01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-download-01-solid-rounded IconBubbleChatDownload01SolidRounded"
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

export const IconBubbleChatDownload01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-download-01-bulk-rounded IconBubbleChatDownload01BulkRounded"
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

export const IconBubbleChatDownload01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-download-01-stroke-sharp IconBubbleChatDownload01StrokeSharp"
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
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatDownload01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-download-01-solid-sharp IconBubbleChatDownload01SolidSharp"
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

export const iconPackOfBubbleChatDownload01: TheIconSelfPack = {
  name: 'BubbleChatDownload01',
  StrokeRounded: IconBubbleChatDownload01StrokeRounded,
  DuotoneRounded: IconBubbleChatDownload01DuotoneRounded,
  TwotoneRounded: IconBubbleChatDownload01TwotoneRounded,
  SolidRounded: IconBubbleChatDownload01SolidRounded,
  BulkRounded: IconBubbleChatDownload01BulkRounded,
  StrokeSharp: IconBubbleChatDownload01StrokeSharp,
  SolidSharp: IconBubbleChatDownload01SolidSharp,
};