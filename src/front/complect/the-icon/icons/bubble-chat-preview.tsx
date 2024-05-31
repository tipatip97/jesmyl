import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21.8665 9.99999C21.9543 10.5098 22 11.0331 22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9544C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.60645 5.94718 2.48007 11 2',
  d2: 'M17.5 5H17.509',
  d3: 'M21.7948 4.59071C21.9316 4.77342 22 4.86477 22 5C22 5.13523 21.9316 5.22658 21.7948 5.40929C21.1801 6.23024 19.6101 8 17.5 8C15.3899 8 13.8199 6.23024 13.2052 5.40929C13.0684 5.22658 13 5.13523 13 5C13 4.86477 13.0684 4.77342 13.2052 4.59071C13.8199 3.76976 15.3899 2 17.5 2C19.6101 2 21.1801 3.76976 21.7948 4.59071Z',
  d4: 'M11.9955 12H12.0045M8 12H8.00897M15.9955 12H16.0045',
  d5: 'M12 21.1334C17.5222 21.1334 22 16.8499 22 11.5667C22 9.78657 21.4916 8.11991 20.6062 6.69237C19.8205 7.37305 18.7559 8 17.5 8C15.3899 8 13.8199 6.23024 13.2052 5.40929C13.0684 5.22658 13 5.13523 13 5C13 4.86477 13.0684 4.77342 13.2052 4.59071C13.5954 4.06959 14.3705 3.16616 15.4244 2.57576C14.3561 2.20323 13.2028 2 12 2C6.47778 2 2 6.28357 2 11.5667C2 14.1051 3.03333 16.4115 4.71889 18.1231C5.09 18.5 5.33778 19.0148 5.23778 19.5448C5.07275 20.4112 4.69874 21.2194 4.15111 21.893C5.59195 22.161 7.09014 21.9197 8.37499 21.2364C8.82918 20.9949 9.05627 20.8741 9.21653 20.8496C9.37678 20.8251 9.60633 20.8682 10.0654 20.9545C10.7032 21.0742 11.3507 21.1343 12 21.1334Z',
  d6: 'M17.5 1.25C16.23 1.25 15.1557 1.78236 14.3443 2.38563C13.5323 2.9894 12.9365 3.69826 12.6049 4.14117C12.4977 4.28016 12.25 4.60165 12.25 5C12.25 5.39835 12.4977 5.71984 12.6049 5.85883C12.9365 6.30174 13.5323 7.01061 14.3443 7.61437C15.1557 8.21764 16.23 8.75 17.5 8.75C18.77 8.75 19.8443 8.21764 20.6557 7.61437C21.4677 7.0106 22.0635 6.30174 22.3951 5.85883C22.5023 5.71984 22.75 5.39835 22.75 5C22.75 4.60165 22.5023 4.28016 22.3951 4.14117C22.0635 3.69826 21.4677 2.98939 20.6557 2.38563C19.8443 1.78236 18.77 1.25 17.5 1.25ZM17.4933 3.5C16.6686 3.5 16 4.17157 16 5C16 5.82843 16.6686 6.5 17.4933 6.5H17.5067C18.3314 6.5 19 5.82843 19 5C19 4.17157 18.3314 3.5 17.5067 3.5H17.4933Z',
  d7: 'M12.8091 1.52413C12.821 1.66145 12.6552 1.83086 12.3235 2.16967C11.9293 2.5724 11.6233 2.95029 11.4121 3.23159L11.4029 3.24337C11.281 3.39854 10.75 4.07442 10.75 5.0001C10.75 5.92577 11.281 6.60165 11.4029 6.75682L11.4121 6.7686C11.7941 7.27735 12.4861 8.10205 13.4493 8.8182C14.4169 9.53763 15.7997 10.2501 17.5 10.2501C19.2003 10.2501 20.5831 9.53763 21.5507 8.8182C21.8415 8.60198 21.9869 8.49387 22.118 8.52042C22.1457 8.52602 22.1722 8.53539 22.1972 8.54844C22.3159 8.61031 22.3568 8.76986 22.4386 9.08897C22.642 9.88186 22.75 10.7116 22.75 11.5668C22.75 17.2951 17.9048 21.8835 12 21.8835C11.3041 21.8844 10.6103 21.82 9.92698 21.6917C9.68979 21.6471 9.53909 21.619 9.42696 21.6037C9.34334 21.5908 9.25931 21.622 9.22775 21.6392C9.11322 21.6936 8.96068 21.7745 8.72714 21.8987C7.29542 22.6601 5.62504 22.9301 4.01396 22.6304C3.75381 22.582 3.5384 22.4001 3.44713 22.1517C3.35586 21.9034 3.40224 21.6253 3.56917 21.4199C4.03697 20.8446 4.35863 20.1514 4.50088 19.4053C4.53937 19.2001 4.45227 18.9214 4.18451 18.6495C2.36972 16.8066 1.25 14.3145 1.25 11.5668C1.25 5.83848 6.09523 1.2501 12 1.2501C12.432 1.2501 12.648 1.2501 12.7378 1.35468C12.779 1.40269 12.8036 1.46109 12.8091 1.52413ZM8 11.0001C7.44772 11.0001 7 11.4478 7 12.0001C7 12.5524 7.44772 13.0001 8 13.0001H8.00897C8.56126 13.0001 9.00897 12.5524 9.00897 12.0001C9.00897 11.4478 8.56126 11.0001 8.00897 11.0001H8ZM11.9955 11.0001C11.4432 11.0001 10.9955 11.4478 10.9955 12.0001C10.9955 12.5524 11.4432 13.0001 11.9955 13.0001H12.0045C12.5568 13.0001 13.0045 12.5524 13.0045 12.0001C13.0045 11.4478 12.5568 11.0001 12.0045 11.0001H11.9955ZM15.9955 11.0001C15.4432 11.0001 14.9955 11.4478 14.9955 12.0001C14.9955 12.5524 15.4432 13.0001 15.9955 13.0001H16.0045C16.5568 13.0001 17.0045 12.5524 17.0045 12.0001C17.0045 11.4478 16.5568 11.0001 16.0045 11.0001H15.9955Z',
  d8: 'M12.3235 2.16957C12.6552 1.83076 12.821 1.66135 12.8091 1.52404C12.8036 1.46099 12.779 1.40259 12.7378 1.35458C12.648 1.25 12.432 1.25 12 1.25C6.09523 1.25 1.25 5.83838 1.25 11.5667C1.25 14.3144 2.36972 16.8065 4.18451 18.6494C4.45227 18.9213 4.53937 19.2 4.50088 19.4052C4.35863 20.1513 4.03697 20.8445 3.56917 21.4199C3.40224 21.6252 3.35586 21.9033 3.44713 22.1517C3.5384 22.4 3.75381 22.5819 4.01396 22.6303C5.62504 22.93 7.29542 22.66 8.72714 21.8986C8.96068 21.7744 9.11322 21.6935 9.22775 21.6391C9.25931 21.6219 9.34334 21.5907 9.42696 21.6036C9.53909 21.6189 9.68979 21.647 9.92698 21.6916C10.6103 21.8199 11.3041 21.8843 12 21.8834C17.9048 21.8834 22.75 17.295 22.75 11.5667C22.75 10.7115 22.642 9.88177 22.4386 9.08887C22.3568 8.76977 22.3159 8.61021 22.1972 8.54835C22.1722 8.5353 22.1457 8.52592 22.118 8.52032C21.9869 8.49377 21.8415 8.60189 21.5507 8.81811C20.5831 9.53753 19.2003 10.25 17.5 10.25C15.7997 10.25 14.4169 9.53753 13.4493 8.81811C12.4861 8.10195 11.7941 7.27726 11.4121 6.76851L11.4029 6.75673C11.281 6.60155 10.75 5.92567 10.75 5C10.75 4.07433 11.281 3.39845 11.4029 3.24327L11.4121 3.23149C11.6233 2.95019 11.9293 2.5723 12.3235 2.16957Z',
  d9: 'M7 12C7 11.4477 7.44772 11 8 11H8.00897C8.56126 11 9.00897 11.4477 9.00897 12C9.00897 12.5523 8.56126 13 8.00897 13H8C7.44772 13 7 12.5523 7 12ZM10.9955 12C10.9955 11.4477 11.4432 11 11.9955 11H12.0045C12.5568 11 13.0045 11.4477 13.0045 12C13.0045 12.5523 12.5568 13 12.0045 13H11.9955C11.4432 13 10.9955 12.5523 10.9955 12ZM14.9955 12C14.9955 11.4477 15.4432 11 15.9955 11H16.0045C16.5568 11 17.0045 11.4477 17.0045 12C17.0045 12.5523 16.5568 13 16.0045 13H15.9955C15.4432 13 14.9955 12.5523 14.9955 12Z',
  d10: 'M17.4988 5H17.5078',
  d11: 'M17.4988 8C19.9841 8 21.9988 5 21.9988 5C21.9988 5 19.9841 2 17.4988 2C15.0135 2 12.9988 5 12.9988 5C12.9988 5 15.0135 8 17.4988 8Z',
  d12: 'M11.9943 12H12.0033M7.99878 12H8.00775M15.9943 12H16.0033',
  d13: 'M21.64 8.96987C23.4123 15.7353 17.9515 21.0082 12.0069 21.0082C10.5816 21.0082 9.22582 20.7251 7.99862 20.2149L4.01961 21.9991C4.01191 22.0026 4.00365 21.9955 4.00586 21.9874L5.00763 18.2923C3.16349 16.5119 2.00122 14.1818 2.00122 11.5041C2.00122 6.25513 6.48092 2 12.0069 2',
  d14: 'M22.75 5C22.75 5 22.214 4.21064 22.095 4.05931C21.8578 3.75779 21.5135 3.35422 21.0853 2.94832C20.2549 2.16121 18.9881 1.25 17.5 1.25C16.0119 1.25 14.7451 2.16121 13.9147 2.94832C13.4865 3.35422 13.1422 3.75779 12.905 4.05931C12.786 4.21064 12.25 5 12.25 5C12.25 5 12.786 5.78936 12.905 5.94069C13.1422 6.24221 13.4865 6.64578 13.9147 7.05168C14.7451 7.83879 16.0119 8.75 17.5 8.75C18.9881 8.75 20.2549 7.83879 21.0853 7.05168C21.5135 6.64578 21.8578 6.24221 22.095 5.94069C22.214 5.78936 22.75 5 22.75 5ZM17.4933 3.5C16.6686 3.5 16 4.17157 16 5C16 5.82843 16.6686 6.5 17.4933 6.5H17.5067C18.3314 6.5 19 5.82843 19 5C19 4.17157 18.3314 3.5 17.5067 3.5H17.4933Z',
  d15: 'M21.9444 7.95887C21.9808 7.92437 22.0167 7.88991 22.0519 7.85553C22.5027 8.98592 22.75 10.2138 22.75 11.5C22.75 17.1963 17.8997 21.75 12 21.75C10.5948 21.75 9.25046 21.4925 8.01735 21.0233L3.25001 22.75L4.16134 18.5143C2.36071 16.6855 1.25 14.2189 1.25 11.5C1.25 5.80369 6.10029 1.25 12 1.25C12.6154 1.25 13.2194 1.29955 13.8076 1.39477C13.5201 1.61606 13.2677 1.83856 13.054 2.04113C12.5706 2.49934 12.1856 2.95107 11.9218 3.28646C11.831 3.40182 11.6384 3.68007 11.5025 3.8776C11.4267 3.98759 10.7383 5 10.7383 5C10.7383 5 11.4267 6.01241 11.5025 6.1224C11.6384 6.31993 11.831 6.59818 11.9218 6.71354C12.1856 7.04893 12.5706 7.50066 13.054 7.95887C13.9471 8.80543 15.5162 10 17.4992 10C19.4822 10 21.0514 8.80543 21.9444 7.95887ZM9.00897 12H7V14H9.00897V12ZM13.0045 14V12H10.9955V14H13.0045ZM17.0045 12H14.9955V14H17.0045V12Z',
} as const;

export const IconBubbleChatPreviewStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-preview-stroke-rounded IconBubbleChatPreviewStrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatPreviewDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-preview-duotone-rounded IconBubbleChatPreviewDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatPreviewTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-preview-twotone-rounded IconBubbleChatPreviewTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatPreviewSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-preview-solid-rounded IconBubbleChatPreviewSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatPreviewBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-preview-bulk-rounded IconBubbleChatPreviewBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBubbleChatPreviewStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-preview-stroke-sharp IconBubbleChatPreviewStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconBubbleChatPreviewSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-preview-solid-sharp IconBubbleChatPreviewSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBubbleChatPreview: TheIconSelfPack = {
  name: 'BubbleChatPreview',
  StrokeRounded: IconBubbleChatPreviewStrokeRounded,
  DuotoneRounded: IconBubbleChatPreviewDuotoneRounded,
  TwotoneRounded: IconBubbleChatPreviewTwotoneRounded,
  SolidRounded: IconBubbleChatPreviewSolidRounded,
  BulkRounded: IconBubbleChatPreviewBulkRounded,
  StrokeSharp: IconBubbleChatPreviewStrokeSharp,
  SolidSharp: IconBubbleChatPreviewSolidSharp,
};