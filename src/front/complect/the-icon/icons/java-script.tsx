import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M11.7324 12V16C11.7324 17.1046 10.837 18 9.73244 18C8.99215 18 8.34581 17.5978 8 17',
  d3: 'M18.4668 13C18.121 12.4022 17.4747 12 16.7344 12H16.2344C15.4059 12 14.7344 12.6716 14.7344 13.5C14.7344 14.3284 15.4059 15 16.2344 15H17.2344C18.0628 15 18.7344 15.6716 18.7344 16.5C18.7344 17.3284 18.0628 18 17.2344 18H16.7344C15.9941 18 15.3477 17.5978 15.0019 17',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572ZM11.7326 11.25C12.1468 11.25 12.4826 11.5858 12.4826 12V16C12.4826 17.5188 11.2513 18.75 9.73256 18.75C8.71373 18.75 7.82528 18.1956 7.35092 17.3755C7.14351 17.017 7.26603 16.5582 7.62458 16.3508C7.98313 16.1434 8.44192 16.2659 8.64933 16.6245C8.86659 17 9.27083 17.25 9.73256 17.25C10.4229 17.25 10.9826 16.6904 10.9826 16V12C10.9826 11.5858 11.3183 11.25 11.7326 11.25ZM16.2344 11.25C14.9917 11.25 13.9844 12.2574 13.9844 13.5C13.9844 14.7426 14.9917 15.75 16.2344 15.75H17.2344C17.6486 15.75 17.9844 16.0858 17.9844 16.5C17.9844 16.9142 17.6486 17.25 17.2344 17.25H16.7344C16.2726 17.25 15.8684 17 15.6511 16.6245C15.4437 16.2659 14.9849 16.1434 14.6264 16.3508C14.2678 16.5582 14.1453 17.017 14.3527 17.3755C14.8271 18.1956 15.7155 18.75 16.7344 18.75H17.2344C18.477 18.75 19.4844 17.7426 19.4844 16.5C19.4844 15.2574 18.477 14.25 17.2344 14.25H16.2344C15.8202 14.25 15.4844 13.9142 15.4844 13.5C15.4844 13.0858 15.8202 12.75 16.2344 12.75H16.7344C17.1961 12.75 17.6003 13 17.8176 13.3755C18.025 13.7341 18.4838 13.8566 18.8424 13.6492C19.2009 13.4418 19.3234 12.983 19.116 12.6245C18.6417 11.8044 17.7532 11.25 16.7344 11.25H16.2344Z',
  d5: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d6: 'M11.7326 11.25C12.1468 11.25 12.4826 11.5858 12.4826 12V16C12.4826 17.5188 11.2513 18.75 9.73256 18.75C8.71373 18.75 7.82528 18.1956 7.35092 17.3755C7.14351 17.017 7.26603 16.5582 7.62458 16.3508C7.98313 16.1434 8.44192 16.2659 8.64933 16.6245C8.86659 17 9.27083 17.25 9.73256 17.25C10.4229 17.25 10.9826 16.6904 10.9826 16V12C10.9826 11.5858 11.3183 11.25 11.7326 11.25Z',
  d7: 'M13.9844 13.5C13.9844 12.2574 14.9917 11.25 16.2344 11.25H16.7344C17.7532 11.25 18.6417 11.8044 19.116 12.6245C19.3234 12.983 19.2009 13.4418 18.8424 13.6492C18.4838 13.8566 18.025 13.7341 17.8176 13.3755C17.6003 13 17.1961 12.75 16.7344 12.75H16.2344C15.8202 12.75 15.4844 13.0858 15.4844 13.5C15.4844 13.9142 15.8202 14.25 16.2344 14.25H17.2344C18.477 14.25 19.4844 15.2574 19.4844 16.5C19.4844 17.7426 18.477 18.75 17.2344 18.75H16.7344C15.7155 18.75 14.8271 18.1956 14.3527 17.3755C14.1453 17.017 14.2678 16.5582 14.6264 16.3508C14.9849 16.1434 15.4437 16.2659 15.6511 16.6245C15.8684 17 16.2726 17.25 16.7344 17.25H17.2344C17.6486 17.25 17.9844 16.9142 17.9844 16.5C17.9844 16.0858 17.6486 15.75 17.2344 15.75H16.2344C14.9917 15.75 13.9844 14.7426 13.9844 13.5Z',
  d8: 'M21 21V3H3V21H21Z',
  d9: 'M17.7324 13C17.3866 12.4022 16.7403 12 16 12H15.5C14.6716 12 14 12.6716 14 13.5C14 14.3284 14.6716 15 15.5 15H16.5C17.3284 15 18 15.6716 18 16.5C18 17.3284 17.3284 18 16.5 18H16C15.2597 18 14.6134 17.5978 14.2676 17',
  d10: 'M11.7471 11.2549V15.6123C11.7471 16.185 11.5579 17.4389 10.5418 17.8441C9.46715 18.2726 8.52823 17.8441 7.99805 16.9963',
  d11: 'M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25H21C21.4142 2.25 21.75 2.58579 21.75 3V21C21.75 21.1989 21.671 21.3897 21.5303 21.5303C21.3897 21.671 21.1989 21.75 21 21.75L3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V3ZM12.4832 11.25V16C12.4832 17.5188 11.252 18.75 9.7332 18.75C8.71437 18.75 7.82592 18.1956 7.35156 17.3755L8.64997 16.6245C8.86723 17 9.27147 17.25 9.7332 17.25C10.4236 17.25 10.9832 16.6904 10.9832 16V11.25H12.4832ZM15.5 11.25C14.2574 11.25 13.25 12.2574 13.25 13.5C13.25 14.7426 14.2574 15.75 15.5 15.75H16.5C16.9142 15.75 17.25 16.0858 17.25 16.5C17.25 16.9142 16.9142 17.25 16.5 17.25H16C15.5383 17.25 15.134 17 14.9168 16.6245L13.6184 17.3755C14.0927 18.1956 14.9812 18.75 16 18.75H16.5C17.7426 18.75 18.75 17.7426 18.75 16.5C18.75 15.2574 17.7426 14.25 16.5 14.25H15.5C15.0858 14.25 14.75 13.9142 14.75 13.5C14.75 13.0858 15.0858 12.75 15.5 12.75H16C16.4617 12.75 16.866 13 17.0832 13.3755L18.3816 12.6245C17.9073 11.8044 17.0188 11.25 16 11.25H15.5Z',
};

export const IconJavaScriptStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="java-script-stroke-rounded IconJavaScriptStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconJavaScriptDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="java-script-duotone-rounded IconJavaScriptDuotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconJavaScriptTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="java-script-twotone-rounded IconJavaScriptTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconJavaScriptSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="java-script-solid-rounded IconJavaScriptSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconJavaScriptBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="java-script-bulk-rounded IconJavaScriptBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconJavaScriptStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="java-script-stroke-sharp IconJavaScriptStrokeSharp"
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

export const IconJavaScriptSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="java-script-solid-sharp IconJavaScriptSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfJavaScript: TheIconSelfPack = {
  name: 'JavaScript',
  StrokeRounded: IconJavaScriptStrokeRounded,
  DuotoneRounded: IconJavaScriptDuotoneRounded,
  TwotoneRounded: IconJavaScriptTwotoneRounded,
  SolidRounded: IconJavaScriptSolidRounded,
  BulkRounded: IconJavaScriptBulkRounded,
  StrokeSharp: IconJavaScriptStrokeSharp,
  SolidSharp: IconJavaScriptSolidSharp,
};