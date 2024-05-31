import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z',
  d2: 'M10 9.84615C10 8.82655 10.8954 8 12 8C13.1046 8 14 8.82655 14 9.84615C14 10.2137 13.8837 10.5561 13.6831 10.8438C13.0854 11.7012 12 12.5189 12 13.5385V14',
  d3: 'M12 16.5H12.009',
  d4: 'M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9949 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z',
  d5: 'M10.5 10.0385C10.5 9.18879 11.1716 8.5 12 8.5C12.8284 8.5 13.5 9.18879 13.5 10.0385C13.5 10.3447 13.4127 10.6301 13.2623 10.8698C12.8141 11.5844 12 12.2657 12 13.1154V13.5',
  d6: 'M12 15.5H12.009',
  d7: 'M1.25 11.5667C1.25 5.83838 6.09523 1.25 12 1.25C17.9048 1.25 22.75 5.83838 22.75 11.5667C22.75 17.295 17.9048 21.8834 12 21.8834C11.3041 21.8843 10.6103 21.8199 9.92698 21.6916C9.68979 21.647 9.53909 21.6189 9.42696 21.6036C9.34334 21.5907 9.25931 21.6219 9.22775 21.6391C9.11322 21.6935 8.96068 21.7744 8.72714 21.8986C7.29542 22.66 5.62504 22.93 4.01396 22.6303C3.75381 22.5819 3.5384 22.4 3.44713 22.1517C3.35586 21.9033 3.40224 21.6252 3.56917 21.4199C4.03697 20.8445 4.35863 20.1513 4.50088 19.4052C4.53937 19.2 4.45227 18.9213 4.18451 18.6494C2.36972 16.8065 1.25 14.3144 1.25 11.5667ZM11 9.25824C11 8.95663 11.3228 8.5 12 8.5C12.6772 8.5 13 8.95663 13 9.25824C13 9.38027 12.9608 9.50211 12.8762 9.61775C12.7622 9.77341 12.6156 9.93972 12.4303 10.1422L12.3414 10.239C12.1863 10.4076 12.0087 10.6007 11.847 10.796C11.4761 11.2443 11 11.9172 11 12.7747V13.2143C11 13.7666 11.4477 14.2143 12 14.2143C12.5523 14.2143 13 13.7666 13 13.2143V12.7747C13 12.6612 13.0666 12.4593 13.3878 12.0712C13.5131 11.9198 13.6484 11.7726 13.8027 11.6046L13.8027 11.6046L13.9056 11.4925C14.092 11.2889 14.3051 11.0517 14.4901 10.799C14.8065 10.3667 15 9.83626 15 9.25824C15 7.61775 13.5319 6.5 12 6.5C10.4681 6.5 9 7.61775 9 9.25824C9 9.81053 9.44771 10.2582 10 10.2582C10.5523 10.2582 11 9.81053 11 9.25824ZM12 15.5C11.4477 15.5 11 15.9477 11 16.5C11 17.0523 11.4477 17.5 12 17.5H12.012C12.5643 17.5 13.012 17.0523 13.012 16.5C13.012 15.9477 12.5643 15.5 12.012 15.5H12Z',
  d8: 'M12 1.25C6.09523 1.25 1.25 5.83838 1.25 11.5667C1.25 14.3144 2.36972 16.8065 4.18451 18.6494C4.45227 18.9213 4.53937 19.2 4.50088 19.4052C4.35863 20.1513 4.03697 20.8445 3.56917 21.4199C3.40224 21.6252 3.35586 21.9033 3.44713 22.1517C3.5384 22.4 3.75381 22.5819 4.01396 22.6303C5.62504 22.93 7.29542 22.66 8.72714 21.8986C8.96068 21.7744 9.11322 21.6935 9.22775 21.6391C9.25931 21.6219 9.34334 21.5907 9.42696 21.6036C9.53909 21.6189 9.68979 21.647 9.92698 21.6916C10.6103 21.8199 11.3041 21.8843 12 21.8834C17.9048 21.8834 22.75 17.295 22.75 11.5667C22.75 5.83838 17.9048 1.25 12 1.25Z',
  d9: 'M12 8.5C11.3228 8.5 11 8.95663 11 9.25824C11 9.81053 10.5523 10.2582 10 10.2582C9.44772 10.2582 9 9.81053 9 9.25824C9 7.61775 10.4681 6.5 12 6.5C13.5319 6.5 15 7.61775 15 9.25824C15 9.83625 14.8065 10.3667 14.4901 10.799C14.3051 11.0517 14.092 11.2889 13.9056 11.4925C13.8704 11.531 13.8361 11.5683 13.8027 11.6046C13.6484 11.7726 13.5131 11.9198 13.3878 12.0712C13.0666 12.4593 13 12.6612 13 12.7747V13.2143C13 13.7666 12.5523 14.2143 12 14.2143C11.4477 14.2143 11 13.7666 11 13.2143V12.7747C11 11.9172 11.4761 11.2443 11.847 10.796C12.0087 10.6007 12.1863 10.4076 12.3414 10.239C12.372 10.2057 12.4017 10.1734 12.4303 10.1422C12.6156 9.93972 12.7622 9.77341 12.8762 9.61775C12.9608 9.50211 13 9.38027 13 9.25824C13 8.95663 12.6772 8.5 12 8.5ZM11 16.5C11 15.9477 11.4477 15.5 12 15.5H12.012C12.5643 15.5 13.012 15.9477 13.012 16.5C13.012 17.0523 12.5643 17.5 12.012 17.5H12C11.4477 17.5 11 17.0523 11 16.5Z',
  d10: 'M9.50024 9.75292C9.50024 8.37168 10.6195 7.25195 12.0002 7.25195C13.3809 7.25195 14.5002 8.37168 14.5002 9.75292C14.5002 11.1342 13.3809 12.2539 12.0002 12.2539V14.2547M12.0002 15.7552V17.2558',
  d11: 'M12 21.0082C17.5216 21.0082 21.9978 16.7531 21.9978 11.5041C21.9978 6.25513 17.5216 2 12 2C6.47837 2 2.0022 6.25513 2.0022 11.5041C2.0022 14.1818 3.16355 16.5119 5.00624 18.2923L4.00525 21.9874C4.00305 21.9955 4.0113 22.0026 4.019 21.9991L7.99487 20.2149C9.22111 20.7251 10.5758 21.0082 12 21.0082Z',
  d12: 'M12 1.25C6.10029 1.25 1.25 5.80369 1.25 11.5C1.25 14.2189 2.36071 16.6855 4.16134 18.5143L3.25001 22.75L8.01735 21.0233C9.25046 21.4925 10.5948 21.75 12 21.75C17.8997 21.75 22.75 17.1963 22.75 11.5C22.75 5.80369 17.8997 1.25 12 1.25ZM10.25 9.875C10.25 8.9085 11.0335 8.125 12 8.125C12.9665 8.125 13.75 8.9085 13.75 9.875C13.75 10.8415 12.9665 11.625 12 11.625H11.25V14.375H12.75V13.038C14.1833 12.6995 15.25 11.4118 15.25 9.875C15.25 8.08007 13.7949 6.625 12 6.625C10.2051 6.625 8.75 8.08007 8.75 9.875H10.25ZM11.25 15.875V17.375H12.75V15.875H11.25Z',
} as const;

export const IconBubbleChatQuestionStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-question-stroke-rounded IconBubbleChatQuestionStrokeRounded"
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

export const IconBubbleChatQuestionDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-question-duotone-rounded IconBubbleChatQuestionDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatQuestionTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-question-twotone-rounded IconBubbleChatQuestionTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconBubbleChatQuestionSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-question-solid-rounded IconBubbleChatQuestionSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatQuestionBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-question-bulk-rounded IconBubbleChatQuestionBulkRounded"
    >
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

export const IconBubbleChatQuestionStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-question-stroke-sharp IconBubbleChatQuestionStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatQuestionSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-question-solid-sharp IconBubbleChatQuestionSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBubbleChatQuestion: TheIconSelfPack = {
  name: 'BubbleChatQuestion',
  StrokeRounded: IconBubbleChatQuestionStrokeRounded,
  DuotoneRounded: IconBubbleChatQuestionDuotoneRounded,
  TwotoneRounded: IconBubbleChatQuestionTwotoneRounded,
  SolidRounded: IconBubbleChatQuestionSolidRounded,
  BulkRounded: IconBubbleChatQuestionBulkRounded,
  StrokeSharp: IconBubbleChatQuestionStrokeSharp,
  SolidSharp: IconBubbleChatQuestionSolidSharp,
};