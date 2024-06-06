import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 12.5V7.81818C20 6.12494 20 5.27832 19.732 4.60214C19.3012 3.5151 18.3902 2.65765 17.2352 2.2522C16.5168 2 15.6173 2 13.8182 2C10.6698 2 9.09563 2 7.83836 2.44135C5.81714 3.15088 4.22281 4.65142 3.46894 6.55375C3 7.73706 3 9.21865 3 12.1818V14.7273C3 17.7966 3 19.3313 3.8477 20.3971C4.09058 20.7025 4.37862 20.9736 4.70307 21.2022C5.80885 21.9812 7.38969 21.9996 10.5 22',
  d2: 'M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d3: 'M14.8125 22C14.2436 21.4102 12 19.8403 12 19C12 18.1597 14.2436 16.5898 14.8125 16M18.1875 22C18.7564 21.4102 21 19.8403 21 19C21 18.1597 18.7564 16.5898 18.1875 16',
  d4: 'M3.0014 10.9896C3.34179 10.1536 4.90998 8.49792 8.49805 8.49792C8.79946 8.49792 9.59012 8.19468 9.5492 6.55168C9.53252 5.06667 10.0738 2.12886 12.3445 2.00216C12.7945 2 13.2836 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V17C20 17.9293 20 18.394 19.9231 18.7804C19.6075 20.3671 18.3671 21.6075 16.7804 21.9231C16.394 22 15.9293 22 15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 11.7548 3 11.3586 3.0014 10.9896Z',
  d5: 'M6.81154 22.5222C7.79379 22.625 8.35661 22.625 9.89771 22.625C10.4375 22.625 10.875 22.1874 10.875 21.6477C10.875 21.108 10.4375 20.6704 9.89771 20.6704C8.28909 20.6704 7.88285 20.6691 7.0134 20.5782C6.15948 20.4888 5.67555 20.3221 5.31772 20.069C5.07627 19.8983 4.86389 19.6972 4.6861 19.4728C4.43053 19.1503 4.26109 18.7175 4.16886 17.9308C4.07393 17.121 4.07235 16.0637 4.07235 14.5402L4.07227 11.64C4.07225 11.373 4.07242 10.7345 4.35304 10.2623C4.52597 9.97131 4.74739 9.7282 4.97484 9.60438C5.34135 9.40486 5.76154 9.2915 6.20821 9.2915L7.24858 9.32799C7.62867 9.33588 8.07221 9.32387 8.50036 9.20915C9.33433 8.98569 9.98574 8.33428 10.2092 7.50031C10.3239 7.07216 10.3359 6.62862 10.328 6.24853L10.2915 5.20816C10.2915 4.74047 10.4159 4.33334 10.6333 3.95493C10.76 3.73434 10.9807 3.53245 11.2855 3.35514C11.7476 3.08623 12.301 3.08374 12.6392 3.08222C12.9773 3.08069 13.3341 3.07952 13.6322 3.07952C15.4663 3.07952 16.1334 3.09347 16.6368 3.27082C17.5094 3.57828 18.1751 4.21992 18.4852 5.00529C18.5628 5.20193 18.6177 5.46035 18.6471 5.9083C18.6771 6.36497 18.6776 6.94792 18.6776 7.78818V11.9013C18.6776 12.439 19.1136 12.875 19.6513 12.875C20.1891 12.875 20.625 12.439 20.625 11.9013V7.755C20.625 6.95584 20.625 6.30828 20.5903 5.7797C20.5545 5.23507 20.4789 4.7494 20.2956 4.28524C19.7668 2.94593 18.6584 1.91166 17.2818 1.42666C16.423 1.12407 14.9509 1.12446 13.3959 1.125C10.5563 1.12464 8.86965 1.12443 7.48721 1.61151C5.26721 2.39369 3.49348 4.05643 2.65009 6.19249C2.36897 6.90445 2.24444 7.66916 2.18419 8.586C2.125 9.48671 2.125 10.5993 2.125 12.0176V12.0176V14.6011C2.12498 16.0492 2.12496 17.2219 2.23485 18.1592C2.34896 19.1326 2.59221 19.9705 3.16204 20.6895C3.45722 21.062 3.80577 21.3908 4.19614 21.6669C4.9409 22.1935 5.80212 22.4166 6.81154 22.5222Z',
  d6: 'M15.3817 15.1552C15.7792 15.5387 15.7907 16.1717 15.4073 16.5692C15.2194 16.764 14.9233 17.0122 14.6502 17.241L14.5865 17.2943C14.3097 17.5261 14.0161 17.772 13.7384 18.023C13.4354 18.2968 13.1844 18.5476 13.0159 18.7587C12.9803 18.8033 12.9517 18.842 12.929 18.875C12.9517 18.908 12.9803 18.9467 13.0159 18.9913C13.1844 19.2024 13.4354 19.4532 13.7384 19.727C14.0161 19.978 14.3097 20.2239 14.5865 20.4557L14.5865 20.4557L14.6502 20.5091C14.9233 20.7378 15.2194 20.986 15.4073 21.1808C15.7907 21.5783 15.7792 22.2113 15.3817 22.5948C14.9842 22.9782 14.3512 22.9667 13.9677 22.5692C13.8712 22.4691 13.6734 22.2998 13.3658 22.0421L13.2982 21.9855C13.0261 21.7576 12.7045 21.4884 12.3974 21.2108C12.0684 20.9134 11.7229 20.5773 11.453 20.2393C11.3176 20.0696 11.1829 19.8772 11.0787 19.6694C10.9779 19.4686 10.875 19.1934 10.875 18.875C10.875 18.5566 10.9779 18.2814 11.0787 18.0806C11.1829 17.8728 11.3176 17.6804 11.453 17.5107C11.7229 17.1727 12.0684 16.8366 12.3974 16.5392C12.7045 16.2616 13.0261 15.9924 13.2982 15.7645L13.2982 15.7645L13.3658 15.7079C13.6734 15.4502 13.8712 15.2809 13.9677 15.1808C14.3512 14.7833 14.9842 14.7718 15.3817 15.1552Z',
  d7: 'M17.3683 15.1552C17.7658 14.7718 18.3988 14.7833 18.7823 15.1808C18.8788 15.2809 19.0766 15.4502 19.3842 15.7079L19.4518 15.7645C19.7239 15.9924 20.0455 16.2616 20.3526 16.5392C20.6816 16.8366 21.0271 17.1727 21.297 17.5107C21.4324 17.6804 21.5671 17.8728 21.6713 18.0806C21.7721 18.2814 21.875 18.5566 21.875 18.875C21.875 19.1934 21.7721 19.4686 21.6713 19.6694C21.5671 19.8772 21.4324 20.0696 21.297 20.2393C21.0271 20.5773 20.6816 20.9134 20.3526 21.2108C20.0455 21.4884 19.7239 21.7576 19.4518 21.9855L19.3842 22.0421C19.0766 22.2998 18.8788 22.4691 18.7823 22.5692C18.3988 22.9667 17.7658 22.9782 17.3683 22.5948C16.9708 22.2113 16.9593 21.5783 17.3427 21.1808C17.5306 20.986 17.8267 20.7378 18.0998 20.5091L18.1635 20.4557C18.4403 20.2239 18.7339 19.978 19.0116 19.727C19.3146 19.4532 19.5656 19.2024 19.7341 18.9913C19.7697 18.9467 19.7983 18.908 19.821 18.875C19.7983 18.842 19.7697 18.8033 19.7341 18.7587C19.5656 18.5476 19.3146 18.2968 19.0116 18.023C18.7339 17.772 18.4403 17.5261 18.1635 17.2943L18.0998 17.241C17.8267 17.0122 17.5306 16.764 17.3427 16.5692C16.9593 16.1717 16.9708 15.5387 17.3683 15.1552Z',
  d8: 'M15 22L12 19L15 16M18 22L21 19L18 16',
  d9: 'M9.07219 21.99L3.01 22C3.00448 22 3 21.9955 3 21.99V9L10 2H19.99C19.9955 2 20 2.00448 20 2.01V12.9939M3.5453 9H10V2.56942',
  d10: 'M20.25 2.22727C20.25 1.68754 19.8141 1.25 19.2763 1.25H9.13616L1.75 8.66338V21.7727C1.75 22.3125 2.18593 22.75 2.72368 22.75H9.51306V20.7955H3.69727V10.0455H10.5131L10.5131 3.20459H18.3025V13H20.25V2.22727Z',
  d11: 'M14.129 15.3357L15.5432 16.7499L13.2503 19.0428L15.5432 21.3357L14.129 22.7499L10.4219 19.0428L14.129 15.3357ZM19.4219 19.0428L17.129 16.7499L18.5432 15.3357L22.2503 19.0428L18.5432 22.7499L17.129 21.3357L19.4219 19.0428Z',
};

export const IconFileScriptStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-script-stroke-rounded IconFileScriptStrokeRounded"
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

export const IconFileScriptDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-script-duotone-rounded IconFileScriptDuotoneRounded"
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

export const IconFileScriptTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-script-twotone-rounded IconFileScriptTwotoneRounded"
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

export const IconFileScriptSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-script-solid-rounded IconFileScriptSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileScriptBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-script-bulk-rounded IconFileScriptBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileScriptStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-script-stroke-sharp IconFileScriptStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileScriptSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-script-solid-sharp IconFileScriptSolidSharp"
    >
      <path 
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

export const iconPackOfFileScript: TheIconSelfPack = {
  name: 'FileScript',
  StrokeRounded: IconFileScriptStrokeRounded,
  DuotoneRounded: IconFileScriptDuotoneRounded,
  TwotoneRounded: IconFileScriptTwotoneRounded,
  SolidRounded: IconFileScriptSolidRounded,
  BulkRounded: IconFileScriptBulkRounded,
  StrokeSharp: IconFileScriptStrokeSharp,
  SolidSharp: IconFileScriptSolidSharp,
};