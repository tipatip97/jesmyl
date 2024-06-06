import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21.0477 3.05293C18.8697 0.707363 2.48648 6.4532 2.50001 8.551C2.51535 10.9299 8.89809 11.6617 10.6672 12.1581C11.7311 12.4565 12.016 12.7625 12.2613 13.8781C13.3723 18.9305 13.9301 21.4435 15.2014 21.4996C17.2278 21.5892 23.1733 5.342 21.0477 3.05293Z',
  d2: 'M11.5 12.5L15 9',
  d3: 'M21.5973 2.54257C21.1299 2.03918 20.397 1.85063 19.6968 1.78314C18.9611 1.71223 18.08 1.75939 17.1313 1.88382C15.2288 2.13337 12.9302 2.71102 10.7222 3.42176C8.51281 4.13295 6.35914 4.98865 4.74626 5.80847C3.94355 6.21648 3.24734 6.62932 2.74121 7.02586C2.48919 7.22331 2.25922 7.436 2.08623 7.66237C1.92123 7.87829 1.74764 8.18549 1.75002 8.55582C1.75629 9.5279 2.41829 10.2149 3.12327 10.676C3.84284 11.1467 4.77998 11.5014 5.71161 11.7792C6.65324 12.06 7.64346 12.2776 8.49473 12.454C8.55052 12.4655 8.66203 12.4886 8.79867 12.5168C9.31323 12.6231 9.57051 12.6763 9.81237 12.6039C10.0542 12.5315 10.2402 12.3456 10.612 11.9737L14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289C16.0976 8.68342 16.0976 9.31659 15.7071 9.70711L12.2745 13.1397C11.8954 13.5188 11.7059 13.7083 11.6342 13.9543C11.5624 14.2003 11.6203 14.4614 11.736 14.9837C12.1844 17.0084 12.5738 18.6815 12.9623 19.8071C13.1892 20.4645 13.4445 21.0336 13.7678 21.4533C14.1052 21.8913 14.5642 22.2222 15.1683 22.2489C15.5444 22.2655 15.8571 22.0938 16.0715 21.9344C16.2975 21.7666 16.51 21.5414 16.7071 21.2953C17.1031 20.8005 17.5192 20.1159 17.9332 19.3247C18.7652 17.7347 19.6462 15.6028 20.3917 13.4096C21.1368 11.2173 21.7577 8.9306 22.0568 7.0301C22.206 6.0823 22.2798 5.20207 22.2388 4.46477C22.1999 3.76556 22.0509 3.03106 21.5973 2.54257Z',
  d4: 'M19.6968 1.78314C20.397 1.85063 21.1299 2.03918 21.5973 2.54257C22.0509 3.03106 22.1999 3.76556 22.2388 4.46477C22.2798 5.20207 22.206 6.0823 22.0568 7.0301C21.7577 8.9306 21.1368 11.2173 20.3917 13.4096C19.6462 15.6028 18.7652 17.7347 17.9332 19.3247C17.5192 20.1159 17.1031 20.8005 16.7071 21.2953C16.51 21.5414 16.2975 21.7666 16.0715 21.9344C15.8571 22.0938 15.5444 22.2655 15.1683 22.2489C14.5642 22.2222 14.1052 21.8913 13.7678 21.4533C13.4445 21.0336 13.1892 20.4645 12.9623 19.8071C12.5073 18.4888 12.0798 16.5447 11.5288 14.0391C11.4104 13.5007 11.3108 13.318 11.2213 13.2216C11.1355 13.1291 10.9724 13.0226 10.4646 12.8802C10.1518 12.7924 9.6779 12.6958 9.08022 12.574L9.08018 12.574C8.89638 12.5365 8.70087 12.4967 8.49473 12.454C7.64346 12.2776 6.65324 12.06 5.71161 11.7792C4.77998 11.5014 3.84284 11.1467 3.12327 10.676C2.41829 10.2149 1.75629 9.5279 1.75002 8.55582C1.74764 8.18549 1.92123 7.87829 2.08623 7.66237C2.25922 7.436 2.48919 7.22331 2.74121 7.02586C3.24734 6.62932 3.94355 6.21648 4.74626 5.80847C6.35914 4.98865 8.51281 4.13295 10.7222 3.42176C12.9302 2.71102 15.2288 2.13337 17.1313 1.88382C18.08 1.75939 18.9611 1.71223 19.6968 1.78314Z',
  d5: 'M11.5004 13.9134C11.3945 13.4713 11.3038 13.3101 11.2217 13.2216C11.1359 13.1291 10.9727 13.0226 10.465 12.8802C10.3023 12.8345 10.0961 12.7865 9.85156 12.7338L14.2928 8.29287C14.6834 7.90236 15.3165 7.90238 15.707 8.29292C16.0975 8.68346 16.0975 9.31662 15.707 9.70713L11.5004 13.9134Z',
  d6: 'M15.2014 21.4996L21.5 2.5L2.50001 8.551L11.5065 12.4935L15.2014 21.4996Z',
  d7: 'M22.2119 2.73627C22.3006 2.46855 22.2317 2.17368 22.0334 1.97307C21.8352 1.77246 21.5412 1.70004 21.2724 1.78563L2.27241 7.83663C1.97497 7.93136 1.7673 8.20043 1.75103 8.51217C1.73475 8.82392 1.91328 9.11314 2.19925 9.23832L10.1996 12.7405L14.4705 8.46989L15.5311 9.53058L11.2403 13.8211L14.5075 21.7846C14.6266 22.0748 14.9138 22.2603 15.2273 22.2494C15.5409 22.2386 15.8146 22.0337 15.9133 21.7359L22.2119 2.73627Z',
};

export const IconSentStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sent-stroke-rounded IconSentStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSentDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sent-duotone-rounded IconSentDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSentTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sent-twotone-rounded IconSentTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSentSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sent-solid-rounded IconSentSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSentBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sent-bulk-rounded IconSentBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSentStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sent-stroke-sharp IconSentStrokeSharp"
    >
      <path 
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const IconSentSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sent-solid-sharp IconSentSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSent: TheIconSelfPack = {
  name: 'Sent',
  StrokeRounded: IconSentStrokeRounded,
  DuotoneRounded: IconSentDuotoneRounded,
  TwotoneRounded: IconSentTwotoneRounded,
  SolidRounded: IconSentSolidRounded,
  BulkRounded: IconSentBulkRounded,
  StrokeSharp: IconSentStrokeSharp,
  SolidSharp: IconSentSolidSharp,
};