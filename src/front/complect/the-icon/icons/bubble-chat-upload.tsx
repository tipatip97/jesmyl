import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 12C21.763 17.0821 17.3782 21.1334 12.005 21.1334C11.3554 21.1343 10.7076 21.0742 10.0695 20.9545C9.61016 20.8682 9.3805 20.8251 9.22017 20.8496C9.05983 20.8741 8.83262 20.9949 8.3782 21.2364C7.0927 21.9197 5.59376 22.161 4.1522 21.893C4.7001 21.2194 5.07429 20.4112 5.23941 19.5448C5.33946 19.0148 5.09156 18.5 4.72026 18.1231C3.03385 16.4115 2 14.1051 2 11.5667C2 6.28357 6.48004 2 12.005 2C12.5131 2 13.0123 2.03622 13.5 2.10611',
  d2: 'M16 4.5C16.4915 3.9943 17.7998 2 18.5 2M21 4.5C20.5085 3.9943 19.2002 2 18.5 2M18.5 2V10',
  d3: 'M11.9955 12H12.0045M15.991 12H16M8 12H8.00897',
  d4: 'M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9949 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z',
  d5: 'M19.5059 10.125C19.5059 10.6773 19.0581 11.125 18.5059 11.125C17.9536 11.125 17.5059 10.6773 17.5059 10.125L17.5059 5.62496L16.9116 5.62498C16.736 5.62511 16.5203 5.62526 16.3439 5.60319L16.3405 5.60277C16.2141 5.587 15.638 5.51517 15.3637 4.94957C15.0887 4.38275 15.3907 3.88261 15.456 3.7744L15.4584 3.77037C15.5506 3.61735 15.6848 3.44647 15.7951 3.30592L15.8188 3.27567C16.1135 2.89985 16.4954 2.41563 16.8759 2.02462C17.0657 1.82951 17.283 1.62828 17.5139 1.46943C17.7191 1.32823 18.0693 1.12496 18.5 1.12496C18.9307 1.12496 19.2809 1.32823 19.4861 1.46943C19.717 1.62828 19.9343 1.82951 20.1241 2.02462C20.5046 2.41563 20.8865 2.89985 21.1812 3.27567L21.2049 3.30591C21.3152 3.44647 21.4494 3.61735 21.5416 3.77037L21.544 3.77441C21.6093 3.88261 21.9113 4.38275 21.6363 4.94957C21.362 5.51517 20.7859 5.58701 20.6595 5.60277L20.6561 5.60319C20.4797 5.62526 20.264 5.62511 20.0884 5.62498L19.5059 5.62496L19.5059 10.125Z',
  d6: 'M16.0057 7.5765L16.0057 10.125C16.0057 11.5057 17.1249 12.625 18.5057 12.625C19.8864 12.625 21.0057 11.5057 21.0057 10.125L21.0057 7.33821C21.0057 7.31444 21.0057 7.30255 21.006 7.29549C21.0123 7.16114 21.088 7.06319 21.2164 7.02319C21.2232 7.02109 21.2264 7.02025 21.2329 7.01856C21.2917 7.00325 21.3211 6.9956 21.3282 6.9941C21.4637 6.96576 21.5815 7.01874 21.6501 7.13888C21.6537 7.14519 21.658 7.15361 21.6665 7.17024C22.36 8.53315 22.75 10.0666 22.75 11.6917C22.75 17.4201 17.9048 22.0084 12 22.0084C11.3041 22.0093 10.6103 21.9449 9.92698 21.8166C9.68979 21.772 9.53909 21.744 9.42696 21.7286C9.34334 21.7157 9.25931 21.7469 9.22775 21.7641C9.11322 21.8185 8.96068 21.8994 8.72714 22.0236C7.29542 22.785 5.62504 23.055 4.01396 22.7553C3.75381 22.707 3.5384 22.525 3.44713 22.2767C3.35586 22.0283 3.40224 21.7502 3.56917 21.5449C4.03697 20.9695 4.35863 20.2763 4.50088 19.5302C4.53937 19.325 4.45227 19.0463 4.18451 18.7744C2.36972 16.9316 1.25 14.4394 1.25 11.6917C1.25 5.9634 6.09523 1.37501 12 1.37501C12.8008 1.37501 13.5821 1.4594 14.3345 1.61958C14.5909 1.67418 14.7191 1.70147 14.7859 1.78386C14.8273 1.83487 14.8519 1.90279 14.8529 1.96845C14.8544 2.07451 14.7691 2.18327 14.5988 2.40033C14.4989 2.52743 14.3148 2.76158 14.1735 2.99616L14.1714 2.99953L14.1658 3.00885C14.0659 3.17265 13.3799 4.29737 14.0139 5.60426C14.4002 6.40057 15.036 6.76957 15.5168 6.94152C15.7697 7.03196 15.8962 7.07718 15.9509 7.15489C16.0057 7.2326 16.0057 7.34723 16.0057 7.5765ZM8 11.125C7.44772 11.125 7 11.5727 7 12.125C7 12.6773 7.44772 13.125 8 13.125H8.00897C8.56126 13.125 9.00897 12.6773 9.00897 12.125C9.00897 11.5727 8.56126 11.125 8.00897 11.125H8ZM11.9955 11.125C11.4432 11.125 10.9955 11.5727 10.9955 12.125C10.9955 12.6773 11.4432 13.125 11.9955 13.125H12.0045C12.5568 13.125 13.0045 12.6773 13.0045 12.125C13.0045 11.5727 12.5568 11.125 12.0045 11.125H11.9955Z',
  d7: 'M16.0057 10.125L16.0057 7.57648C16.0057 7.34722 16.0057 7.23258 15.9509 7.15487C15.8962 7.07716 15.7697 7.03194 15.5168 6.9415C15.036 6.76955 14.4002 6.40056 14.0139 5.60424C13.3799 4.29736 14.0659 3.17264 14.1658 3.00884L14.1714 2.99952L14.1735 2.99615C14.3148 2.76157 14.4989 2.52741 14.5988 2.40031C14.5988 2.40032 14.5988 2.40031 14.5988 2.40031C14.7691 2.18325 14.8544 2.07449 14.8529 1.96843C14.8519 1.90278 14.8273 1.83485 14.7859 1.78385C14.7191 1.70146 14.5909 1.67416 14.3345 1.61957C13.5821 1.45939 12.8008 1.375 12 1.375C6.09523 1.375 1.25 5.96338 1.25 11.6917C1.25 14.4394 2.36972 16.9315 4.18451 18.7744C4.45227 19.0463 4.53937 19.325 4.50088 19.5302C4.35863 20.2763 4.03697 20.9695 3.56917 21.5449C3.40224 21.7502 3.35586 22.0283 3.44713 22.2767C3.5384 22.525 3.75381 22.7069 4.01396 22.7553C5.62504 23.055 7.29542 22.785 8.72714 22.0236C8.96068 21.8994 9.11322 21.8185 9.22775 21.7641C9.25931 21.7469 9.34334 21.7157 9.42696 21.7286C9.53909 21.7439 9.68979 21.772 9.92698 21.8166C10.6103 21.9449 11.3041 22.0093 12 22.0084C17.9048 22.0084 22.75 17.42 22.75 11.6917C22.75 10.0666 22.36 8.53314 21.6665 7.17023C21.658 7.15359 21.6537 7.14517 21.6501 7.13886C21.5815 7.01872 21.4637 6.96575 21.3282 6.99409C21.3211 6.99558 21.2917 7.00324 21.2329 7.01854C21.2264 7.02023 21.2232 7.02108 21.2164 7.02318C21.088 7.06318 21.0123 7.16113 21.006 7.29547C21.0057 7.30254 21.0057 7.31442 21.0057 7.33819L21.0057 10.125C21.0057 11.5057 19.8864 12.625 18.5057 12.625C17.1249 12.625 16.0057 11.5057 16.0057 10.125Z',
  d8: 'M7 12.125C7 11.5727 7.44772 11.125 8 11.125H8.00897C8.56126 11.125 9.00897 11.5727 9.00897 12.125C9.00897 12.6773 8.56126 13.125 8.00897 13.125H8C7.44772 13.125 7 12.6773 7 12.125ZM10.9955 12.125C10.9955 11.5727 11.4432 11.125 11.9955 11.125H12.0045C12.5568 11.125 13.0045 11.5727 13.0045 12.125C13.0045 12.6773 12.5568 13.125 12.0045 13.125H11.9955C11.4432 13.125 10.9955 12.6773 10.9955 12.125Z',
  d9: 'M16.0002 5.00567L19.0002 2.01514L22.0002 5.00567M19.0002 9.98988V2.45278',
  d10: 'M11.9957 11.9829H12.0047M15.9912 11.9829H16.0002M8.00024 11.9829H8.00921',
  d11: 'M22.0017 11.4761C22.0017 16.4575 17.7186 20.9499 11.7902 20.9499C9.9069 20.9499 9.47774 20.6558 8.0482 20.2358L4.03057 21.9918C4.02295 21.9952 4.01483 21.9883 4.01687 21.9802L4.9789 18.1775C2.91869 16.5393 1.99829 13.2751 1.99829 11.5717C1.99829 6.59032 5.60649 1.81293 13.0095 2.00564',
  d12: 'M19.0429 1.25L22.75 4.95711L21.3358 6.37132L20.0429 5.07843V10.6642H18.0429V5.07843L16.75 6.37132L15.3358 4.95711L19.0429 1.25Z',
  d13: 'M12 1.25C13.5583 1.25 15.0434 1.56769 16.3852 2.14021L13.5684 4.95705L16.7503 8.13903L16.7932 8.09614V11.9142H21.2932V8.09614L21.3361 8.13903L21.9244 7.55072C22.4559 8.76391 22.75 10.0973 22.75 11.5C22.75 17.1963 17.8997 21.75 12 21.75C10.5948 21.75 9.25046 21.4925 8.01735 21.0233L3.25001 22.75L4.16134 18.5143C2.36071 16.6855 1.25 14.2189 1.25 11.5C1.25 5.80369 6.10029 1.25 12 1.25ZM9.00897 11H7V13H9.00897V11ZM13.0045 13V11H10.9955V13H13.0045Z',
} as const;

export const IconBubbleChatUploadStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-upload-stroke-rounded IconBubbleChatUploadStrokeRounded"
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

export const IconBubbleChatUploadDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-upload-duotone-rounded IconBubbleChatUploadDuotoneRounded"
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

export const IconBubbleChatUploadTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-upload-twotone-rounded IconBubbleChatUploadTwotoneRounded"
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

export const IconBubbleChatUploadSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-upload-solid-rounded IconBubbleChatUploadSolidRounded"
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

export const IconBubbleChatUploadBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-upload-bulk-rounded IconBubbleChatUploadBulkRounded"
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

export const IconBubbleChatUploadStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-upload-stroke-sharp IconBubbleChatUploadStrokeSharp"
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

export const IconBubbleChatUploadSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-upload-solid-sharp IconBubbleChatUploadSolidSharp"
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

export const iconPackOfBubbleChatUpload: TheIconSelfPack = {
  name: 'BubbleChatUpload',
  StrokeRounded: IconBubbleChatUploadStrokeRounded,
  DuotoneRounded: IconBubbleChatUploadDuotoneRounded,
  TwotoneRounded: IconBubbleChatUploadTwotoneRounded,
  SolidRounded: IconBubbleChatUploadSolidRounded,
  BulkRounded: IconBubbleChatUploadBulkRounded,
  StrokeSharp: IconBubbleChatUploadStrokeSharp,
  SolidSharp: IconBubbleChatUploadSolidSharp,
};