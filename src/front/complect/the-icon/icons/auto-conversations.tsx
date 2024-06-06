import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4.94436 8.04069L10.8282 8.04069M2 18L7.49762 12.5862C7.70914 12.3779 8.03957 12.3544 8.27806 12.5308L12.5239 15.6712C12.774 15.8563 13.1229 15.8204 13.3306 15.5883L21.2849 6.70262M18.1084 6H20.9306C21.4785 6 21.9259 6.44077 21.9371 6.99179L22 10.0649',
  d2: 'M2 18L6.73422 13.2658C7.3363 12.6637 7.63734 12.3627 8.01892 12.3415C8.40049 12.3204 8.73294 12.5863 9.39782 13.1183L11.5173 14.8138C12.2193 15.3754 12.5703 15.6562 12.9679 15.6225C13.3656 15.5887 13.6642 15.2527 14.2615 14.5808L21 7M18 6H20C20.9428 6 21.4142 6 21.7071 6.29289C22 6.58579 22 7.05719 22 8V10',
  d3: 'M5 8H11',
  d4: 'M2 18L6.73422 13.2658C7.3363 12.6637 7.63734 12.3627 8.01892 12.3415C8.40049 12.3204 8.73294 12.5863 9.39782 13.1183L11.5173 14.8138C12.2193 15.3754 12.5703 15.6562 12.9679 15.6225C13.3656 15.5887 13.6642 15.2527 14.2615 14.5808L21 7',
  d5: 'M18 6H20C20.9428 6 21.4142 6 21.7071 6.29289C22 6.58579 22 7.05719 22 8L22 10',
  d6: 'M18.475 8.33538C18.5344 8.26861 18.5641 8.23523 18.5629 8.19554C18.5617 8.15584 18.5302 8.12426 18.467 8.06109L17.5042 7.09827L17.4892 7.08331C17.4328 7.02732 17.326 6.92106 17.2457 6.8144C17.1819 6.72955 16.8453 6.27459 17.0851 5.6956C17.3249 5.11661 17.8847 5.03296 17.9898 5.01809C18.122 4.9994 18.2727 4.99983 18.3521 5.00006L19.9829 5.00009C20.4173 5.00001 20.8394 4.99992 21.1875 5.04673C21.58 5.0995 22.0279 5.22806 22.3999 5.60008C22.7719 5.9721 22.9005 6.41997 22.9533 6.81246C23.0001 7.16059 23 7.58268 22.9999 8.01699L22.9999 9.64793C23.0002 9.72733 23.0006 9.87805 22.9819 10.0102C22.967 10.1153 22.8834 10.6751 22.3044 10.9149C21.7254 11.1547 21.2704 10.8181 21.1856 10.7543C21.0789 10.674 20.9727 10.5672 20.9167 10.5108L20.9017 10.4958L20.167 9.76108C20.0966 9.69074 20.0615 9.65558 20.0183 9.65684C19.9752 9.65811 19.9422 9.69528 19.8761 9.76963L14.9741 15.2844C14.7058 15.5863 14.4437 15.8813 14.1942 16.0972C13.912 16.3413 13.5443 16.5771 13.0525 16.6189C12.5608 16.6606 12.1586 16.4902 11.8393 16.2971C11.5569 16.1264 11.2489 15.8798 10.9336 15.6275L8.77313 13.8991C8.65339 13.8033 8.53435 13.7034 8.41195 13.6083C8.26533 13.4943 8.19202 13.4373 8.07994 13.4435C7.96787 13.4498 7.9013 13.5145 7.76817 13.6439C7.65702 13.752 7.54975 13.8645 7.44132 13.9729L2.70711 18.7071C2.31658 19.0976 1.68342 19.0976 1.29289 18.7071C0.902369 18.3166 0.902369 17.6834 1.29289 17.2929L6.06268 12.5231C6.33269 12.253 6.59808 11.9875 6.84782 11.7945C7.13104 11.5757 7.49312 11.3691 7.96361 11.3431C8.43411 11.317 8.81678 11.4823 9.12244 11.6685C9.39196 11.8327 9.68503 12.0673 9.98322 12.306L12.142 14.033C12.2688 14.1345 12.395 14.2405 12.5248 14.3413C12.6795 14.4614 12.7568 14.5215 12.8736 14.5115C12.9904 14.5016 13.0565 14.4294 13.1887 14.2849C13.2997 14.1637 13.4061 14.0379 13.5141 13.9165L18.475 8.33538Z',
  d7: 'M4 8C4 7.44772 4.44772 7 5 7H11C11.5523 7 12 7.44772 12 8C12 8.55228 11.5523 9 11 9H5C4.44772 9 4 8.55228 4 8Z',
  d8: 'M2 18L8 12L12 16L22 6',
  d9: 'M17 6H22V11',
  d10: 'M19.0859 7.5H16.5002V5.5H22.5002V11.5H20.5002V8.91421L11.5002 17.9142L7.50015 13.9142L2.91421 18.5001L1.5 17.0859L7.50015 11.0858L11.5002 15.0858L19.0859 7.5Z',
  d11: 'M10.5002 9.5H4.50024V7.5H10.5002V9.5Z',
};

export const IconAutoConversationsStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="auto-conversations-stroke-rounded IconAutoConversationsStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAutoConversationsDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="auto-conversations-duotone-rounded IconAutoConversationsDuotoneRounded"
    >
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

export const IconAutoConversationsTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="auto-conversations-twotone-rounded IconAutoConversationsTwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
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

export const IconAutoConversationsSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="auto-conversations-solid-rounded IconAutoConversationsSolidRounded"
    >
      <path 
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

export const IconAutoConversationsBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="auto-conversations-bulk-rounded IconAutoConversationsBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconAutoConversationsStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="auto-conversations-stroke-sharp IconAutoConversationsStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAutoConversationsSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="auto-conversations-solid-sharp IconAutoConversationsSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfAutoConversations: TheIconSelfPack = {
  name: 'AutoConversations',
  StrokeRounded: IconAutoConversationsStrokeRounded,
  DuotoneRounded: IconAutoConversationsDuotoneRounded,
  TwotoneRounded: IconAutoConversationsTwotoneRounded,
  SolidRounded: IconAutoConversationsSolidRounded,
  BulkRounded: IconAutoConversationsBulkRounded,
  StrokeSharp: IconAutoConversationsStrokeSharp,
  SolidSharp: IconAutoConversationsSolidSharp,
};