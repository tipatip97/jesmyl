import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21.766 9.49265C21.9192 10.1586 22 10.8506 22 11.5606C22 16.8468 17.5222 21.1329 12 21.1329C11.3507 21.1337 10.7032 21.0737 10.0654 20.9538C9.60633 20.8676 9.37678 20.8244 9.21653 20.8489C9.05627 20.8734 8.82918 20.9943 8.37499 21.2359C7.09014 21.9196 5.59195 22.1611 4.15111 21.8929C4.69874 21.2189 5.07275 20.4103 5.23778 19.5433C5.33778 19.0131 5.09 18.4979 4.71889 18.1208C3.03333 16.4082 2 14.1004 2 11.5606C2 6.43482 6.21 2.24942 11.5 2',
  d2: 'M22 4.5L14 4.5M22 4.5C22 5.20023 20.0057 6.50847 19.5 7M22 4.5C22 3.79977 20.0057 2.49153 19.5 2',
  d3: 'M11.9955 12H12.0045M15.991 12H16M8 12H8.00897',
  d4: 'M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9949 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z',
  d5: 'M13.875 5.50586C13.3227 5.50586 12.875 5.05814 12.875 4.50586C12.875 3.95357 13.3227 3.50586 13.875 3.50586L18.375 3.50586L18.375 2.9116C18.3749 2.73596 18.3747 2.52031 18.3968 2.34387L18.3972 2.34053C18.413 2.21408 18.4848 1.63804 19.0504 1.36368C19.6173 1.08872 20.1174 1.39065 20.2256 1.45597L20.2296 1.45841C20.3826 1.55062 20.5535 1.68477 20.6941 1.79511L20.7243 1.81885C21.1002 2.11348 21.5844 2.49545 21.9754 2.87588C22.1705 3.06571 22.3717 3.28297 22.5306 3.51388C22.6718 3.71914 22.875 4.06933 22.875 4.5C22.875 4.93067 22.6718 5.28086 22.5306 5.48612C22.3717 5.71703 22.1705 5.93429 21.9754 6.12412C21.5844 6.50455 21.1002 6.88652 20.7243 7.18115L20.6941 7.20488C20.5535 7.31523 20.3827 7.44938 20.2296 7.54159L20.2256 7.54403C20.1174 7.60935 19.6172 7.91128 19.0504 7.63632C18.4848 7.36196 18.413 6.78592 18.3972 6.65947L18.3968 6.65613C18.3747 6.47969 18.3749 6.26403 18.375 6.0884L18.375 5.50586L13.875 5.50586Z',
  d6: 'M14.911 1.66808C13.947 1.39587 12.9279 1.24999 11.875 1.24999C5.97023 1.24999 1.125 5.83838 1.125 11.5667C1.125 14.3144 2.24472 16.8065 4.05951 18.6494C4.32727 18.9213 4.41437 19.2 4.37588 19.4052C4.23363 20.1513 3.91197 20.8445 3.44417 21.4198C3.27724 21.6252 3.23086 21.9033 3.32213 22.1516C3.4134 22.4 3.62881 22.5819 3.88896 22.6303C5.50004 22.93 7.17042 22.66 8.60214 21.8986C8.83568 21.7744 8.98822 21.6935 9.10275 21.6391C9.13431 21.6219 9.21834 21.5907 9.30196 21.6036C9.41409 21.6189 9.56479 21.647 9.80198 21.6916C10.4853 21.8199 11.1791 21.8843 11.875 21.8834C17.7798 21.8834 22.625 17.295 22.625 11.5667C22.625 10.6338 22.4965 9.73121 22.2559 8.87369C22.1557 8.51666 22.1056 8.33815 21.9569 8.28695C21.8082 8.23575 21.6507 8.35155 21.3356 8.58314C21.2144 8.67227 21.0942 8.75991 20.9911 8.83409C20.8273 8.93399 19.7026 9.61991 18.3958 8.98596C17.6045 8.60211 17.2351 7.97187 17.0618 7.49212C16.9709 7.24058 16.9254 7.11481 16.8479 7.06035C16.7703 7.0059 16.6561 7.0059 16.4278 7.0059H13.875C12.4943 7.0059 11.375 5.88661 11.375 4.5059C11.375 3.12519 12.4943 2.0059 13.875 2.0059L14.8555 2.0059C15.2668 2.0059 15.4724 2.0059 15.4843 1.91961C15.4963 1.83333 15.3012 1.77825 14.911 1.66808ZM7.875 11C7.32272 11 6.875 11.4477 6.875 12C6.875 12.5523 7.32272 13 7.875 13H7.88397C8.43626 13 8.88397 12.5523 8.88397 12C8.88397 11.4477 8.43626 11 7.88397 11H7.875ZM11.8705 11C11.3182 11 10.8705 11.4477 10.8705 12C10.8705 12.5523 11.3182 13 11.8705 13H11.8795C12.4318 13 12.8795 12.5523 12.8795 12C12.8795 11.4477 12.4318 11 11.8795 11H11.8705ZM15.866 11C15.3137 11 14.866 11.4477 14.866 12C14.866 12.5523 15.3137 13 15.866 13H15.875C16.4273 13 16.875 12.5523 16.875 12C16.875 11.4477 16.4273 11 15.875 11H15.866Z',
  d7: 'M11.875 1.25C12.9279 1.25 13.947 1.39588 14.911 1.66809C15.3012 1.77825 15.4963 1.83334 15.4843 1.91962C15.4724 2.0059 15.2668 2.0059 14.8555 2.0059L13.875 2.0059C12.4943 2.0059 11.375 3.12519 11.375 4.5059C11.375 5.88662 12.4943 7.0059 13.875 7.0059H16.4278C16.6561 7.0059 16.7703 7.0059 16.8479 7.06036C16.9254 7.11482 16.9709 7.24059 17.0618 7.49213C17.2351 7.97189 17.6045 8.60211 18.3958 8.98596C19.7026 9.61991 20.8273 8.93399 20.9911 8.8341C21.0942 8.75992 21.2144 8.67228 21.3356 8.58315C21.6507 8.35155 21.8082 8.23575 21.9569 8.28695C22.1056 8.33815 22.1557 8.51667 22.2559 8.8737C22.4965 9.73121 22.625 10.6338 22.625 11.5667C22.625 17.295 17.7798 21.8834 11.875 21.8834C11.1791 21.8843 10.4853 21.8199 9.80198 21.6916C9.56479 21.647 9.41409 21.6189 9.30196 21.6036C9.21834 21.5907 9.13431 21.6219 9.10275 21.6391C8.98822 21.6935 8.83568 21.7744 8.60214 21.8986C7.17042 22.66 5.50004 22.93 3.88896 22.6303C3.62881 22.5819 3.4134 22.4 3.32213 22.1517C3.23086 21.9033 3.27724 21.6252 3.44417 21.4199C3.91197 20.8445 4.23363 20.1513 4.37588 19.4052C4.41437 19.2 4.32727 18.9213 4.05951 18.6494C2.24472 16.8065 1.125 14.3144 1.125 11.5667C1.125 5.83838 5.97023 1.25 11.875 1.25Z',
  d8: 'M6.875 12C6.875 11.4477 7.32272 11 7.875 11H7.88397C8.43626 11 8.88397 11.4477 8.88397 12C8.88397 12.5523 8.43626 13 7.88397 13H7.875C7.32272 13 6.875 12.5523 6.875 12ZM10.8705 12C10.8705 11.4477 11.3182 11 11.8705 11H11.8795C12.4318 11 12.8795 11.4477 12.8795 12C12.8795 12.5523 12.4318 13 11.8795 13H11.8705C11.3182 13 10.8705 12.5523 10.8705 12ZM14.866 12C14.866 11.4477 15.3137 11 15.866 11H15.875C16.4273 11 16.875 11.4477 16.875 12C16.875 12.5523 16.4273 13 15.875 13H15.866C15.3137 13 14.866 12.5523 14.866 12Z',
  d9: 'M14 6H21.5522M19 9L22 6L19 3',
  d10: 'M12.0016 2C6.47786 2 2 6.25513 2 11.5041C2 14.1818 3.16179 16.5119 5.00518 18.2923L4.00382 21.9874C4.00161 21.9955 4.00986 22.0026 4.01757 21.9991L7.99494 20.2149C9.22165 20.7251 10.5768 21.0082 12.0016 21.0082C17.3479 21.0082 21.9732 16.8854 21.9999 11.503',
  d11: 'M12 1.25C13.5582 1.25 15.0433 1.56767 16.3851 2.14015L15.8611 2.66416L15.904 2.70705H12.0859V7.20705H15.904L15.8611 7.24994L19.043 10.4319L21.9244 7.55059C22.4559 8.76381 22.75 10.0973 22.75 11.5C22.75 17.1963 17.8997 21.75 12 21.75C10.5948 21.75 9.25046 21.4925 8.01735 21.0233L3.25001 22.75L4.16134 18.5143C2.36071 16.6855 1.25 14.2189 1.25 11.5C1.25 5.80369 6.10029 1.25 12 1.25ZM9.00897 11H7V13H9.00897V11ZM13.0045 13V11H10.9955V13H13.0045ZM17 11H14.991V13H17V11Z',
  d12: 'M18.9216 3.95711L17.6287 2.66421L19.0429 1.25L22.75 4.95711L19.0429 8.66421L17.6287 7.25L18.9216 5.95711L13.3358 5.95711V3.95711L18.9216 3.95711Z',
};

export const IconBubbleChatOutcomeStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-outcome-stroke-rounded IconBubbleChatOutcomeStrokeRounded"
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

export const IconBubbleChatOutcomeDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-outcome-duotone-rounded IconBubbleChatOutcomeDuotoneRounded"
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

export const IconBubbleChatOutcomeTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-outcome-twotone-rounded IconBubbleChatOutcomeTwotoneRounded"
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

export const IconBubbleChatOutcomeSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-outcome-solid-rounded IconBubbleChatOutcomeSolidRounded"
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

export const IconBubbleChatOutcomeBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-outcome-bulk-rounded IconBubbleChatOutcomeBulkRounded"
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

export const IconBubbleChatOutcomeStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-outcome-stroke-sharp IconBubbleChatOutcomeStrokeSharp"
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

export const IconBubbleChatOutcomeSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-outcome-solid-sharp IconBubbleChatOutcomeSolidSharp"
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

export const iconPackOfBubbleChatOutcome: TheIconSelfPack = {
  name: 'BubbleChatOutcome',
  StrokeRounded: IconBubbleChatOutcomeStrokeRounded,
  DuotoneRounded: IconBubbleChatOutcomeDuotoneRounded,
  TwotoneRounded: IconBubbleChatOutcomeTwotoneRounded,
  SolidRounded: IconBubbleChatOutcomeSolidRounded,
  BulkRounded: IconBubbleChatOutcomeBulkRounded,
  StrokeSharp: IconBubbleChatOutcomeStrokeSharp,
  SolidSharp: IconBubbleChatOutcomeSolidSharp,
};