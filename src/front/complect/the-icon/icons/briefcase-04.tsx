import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.57198 8.22365C2.51219 7.73035 2.48229 7.4837 2.51104 7.28193C2.59477 6.69433 3.00682 6.213 3.56187 6.05444C3.75245 6 3.99351 6 4.47562 6H19.5244C20.0065 6 20.2475 6 20.4381 6.05444C20.9932 6.213 21.4052 6.69433 21.489 7.28193C21.5177 7.4837 21.4878 7.73035 21.428 8.22365C21.2687 9.53773 21.1891 10.1948 20.9939 10.7377C20.429 12.3094 19.138 13.4846 17.5556 13.8676C17.0089 14 16.3668 14 15.0826 14H8.91743C7.63318 14 6.99105 14 6.44436 13.8676C4.86198 13.4846 3.571 12.3094 3.00609 10.7377C2.81092 10.1948 2.73128 9.53773 2.57198 8.22365Z',
  d2: 'M12 11H12.009',
  d3: 'M3.5 12L3.5 15.02C3.5 18.0747 3.5 19.6021 4.60649 20.551C5.71297 21.5 7.49383 21.5 11.0556 21.5H12.9444C16.5062 21.5 18.287 21.5 19.3935 20.551C20.5 19.6021 20.5 18.0747 20.5 15.02V12',
  d4: 'M16 6L15.9117 5.69094C15.4717 4.15089 15.2517 3.38087 14.7279 2.94043C14.2041 2.5 13.5084 2.5 12.117 2.5H11.883C10.4916 2.5 9.79587 2.5 9.2721 2.94043C8.74832 3.38087 8.52832 4.15089 8.0883 5.69094L8 6',
  d5: 'M3.5 11.7451V13.4998C3.5 17.271 3.5 19.1566 4.60649 20.3282C5.71297 21.4998 7.49383 21.4998 11.0556 21.4998H12.9444C16.5062 21.4998 18.287 21.4998 19.3935 20.3282C20.5 19.1566 20.5 17.271 20.5 13.4998V11.7451C19.8258 12.8034 18.7776 13.5716 17.5556 13.8674C17.0089 13.9998 16.3668 13.9998 15.0826 13.9998H8.91743C7.63318 13.9998 6.99105 13.9998 6.44436 13.8674C5.22242 13.5716 4.17424 12.8034 3.5 11.7451Z',
  d6: 'M3.0563 14.9313C2.93489 14.8354 2.87419 14.7875 2.82729 14.7984C2.81246 14.8019 2.79956 14.8081 2.78766 14.8176C2.75 14.8476 2.75 14.9233 2.75 15.0747C2.74997 16.5501 2.74995 17.7455 2.89734 18.6868C3.05227 19.6762 3.38382 20.4876 4.11792 21.1179C4.83553 21.734 5.73116 21.999 6.8243 22.1252C7.89606 22.2489 9.26719 22.2489 11.0065 22.2489H12.9935C14.7327 22.2489 16.1039 22.2489 17.1757 22.1252C18.2689 21.999 19.1645 21.734 19.8821 21.1179C20.6162 20.4876 20.9477 19.6762 21.1027 18.6868C21.2501 17.7455 21.25 16.5501 21.25 15.0746C21.25 14.9236 21.25 14.848 21.2125 14.818C21.2005 14.8084 21.1875 14.8021 21.1726 14.7987C21.1257 14.7878 21.0651 14.8357 20.9439 14.9314C20.132 15.5727 19.1827 16.0447 18.1441 16.2962C17.2668 16.5085 16.3077 16.499 15.2241 16.4987H8.77627C7.69269 16.499 6.73351 16.5085 5.85628 16.2962C4.81756 16.0447 3.86825 15.5726 3.0563 14.9313Z',
  d7: 'M4.34239 5.00058C4.38668 5.00083 4.43087 5.00109 4.4749 5.00114H19.5237C19.5677 5.00109 19.6119 5.00083 19.6562 5.00058C20.01 4.99855 20.3706 4.99649 20.7121 5.09405C21.6603 5.36492 22.3409 6.17803 22.4782 7.142C22.5263 7.47938 22.4802 7.85517 22.4321 8.24609C22.4106 8.422 22.3912 8.59878 22.3717 8.77585C22.2861 9.55416 22.2 10.3379 21.9342 11.0771C21.2591 12.9554 19.7095 14.3761 17.7902 14.8407C17.1257 15.0016 16.3715 15.0014 15.2232 15.0012H8.77537C7.62711 15.0014 6.87285 15.0016 6.20834 14.8407C4.28911 14.3761 2.73944 12.9554 2.06432 11.0771C1.7988 10.3384 1.71111 9.54219 1.62487 8.75915C1.60594 8.58724 1.58708 8.41597 1.56642 8.24609C1.5184 7.85516 1.47224 7.47938 1.52032 7.142C1.65768 6.17803 2.33829 5.36492 3.28647 5.09405C3.62798 4.99649 3.98859 4.99855 4.34239 5.00058ZM11.9955 10C11.4457 10 11 10.4477 11 11C11 11.5523 11.4457 12 11.9955 12H12.0045C12.5543 12 13 11.5523 13 11C13 10.4477 12.5543 10 12.0045 10H11.9955Z',
  d8: 'M11.8206 1.5C11.1758 1.49995 10.5973 1.49989 10.1178 1.56382C9.5875 1.63451 9.08106 1.79327 8.62739 2.17507C8.18686 2.54582 7.92389 3.02008 7.71955 3.53295C7.55894 3.93607 7.41039 4.42888 7.24609 4.99968H9.3295C9.41825 4.70806 9.49667 4.47226 9.57577 4.27373C9.72209 3.90647 9.8307 3.7755 9.91351 3.70581C9.98318 3.64718 10.086 3.58572 10.3817 3.54631C10.7136 3.50205 11.1573 3.50001 11.8792 3.50001H12.113C12.8349 3.50001 13.2786 3.50205 13.6105 3.54631C13.9062 3.58572 14.009 3.64718 14.0787 3.70581C14.1615 3.7755 14.2701 3.90647 14.4164 4.27373C14.4955 4.47226 14.5739 4.70806 14.6627 4.99968H16.7461C16.5818 4.42888 16.4332 3.93607 16.2726 3.53295C16.0683 3.02008 15.8053 2.54582 15.3648 2.17507C14.9111 1.79327 14.4047 1.63451 13.8744 1.56382C13.3949 1.49989 12.8164 1.49995 12.1716 1.5H11.8206Z',
  d9: 'M2.74805 12.4258C3.55887 13.6225 4.78106 14.4958 6.20736 14.8411C6.87188 15.002 7.62613 15.0018 8.7744 15.0016H15.2222C16.3705 15.0018 17.1247 15.002 17.7892 14.8411C19.2152 14.4959 20.4372 13.6229 21.248 12.4265V15.0777C21.2481 16.5531 21.2481 17.7485 21.1007 18.6898C20.9458 19.6792 20.6142 20.4906 19.8801 21.1209C19.1625 21.737 18.2669 22.002 17.1738 22.1282C16.102 22.2519 14.7308 22.2519 12.9915 22.2519H11.0045C9.26525 22.2519 7.89411 22.2519 6.82235 22.1282C5.7292 22.002 4.83357 21.737 4.11596 21.1209C3.38186 20.4906 3.05032 19.6792 2.89539 18.6898C2.748 17.7485 2.74802 16.5531 2.74805 15.0777V12.4258Z',
  d10: 'M11.9727 11H11.9817',
  d11: 'M3.4458 12V21.5H20.499V12',
  d12: 'M15.4833 6V2.5H8.46143V6',
  d13: 'M21.4917 6H2.50857C2.50303 6 2.49854 6.00448 2.49854 6.01L2.49854 10.9748L6.89696 13.9873H17.035L21.5017 10.9748L21.5017 6.01C21.5017 6.00448 21.4972 6 21.4917 6Z',
  d14: 'M2.5 5.25C2.08579 5.25 1.75 5.58579 1.75 6V11.4014L6.77292 14.75H17.2271L22.25 11.4014V6C22.25 5.58579 21.9142 5.25 21.5 5.25H2.5ZM11.9955 10C11.4457 10 11 10.4477 11 11C11 11.5523 11.4457 12 11.9955 12H12.0045C12.5543 12 13 11.5523 13 11C13 10.4477 12.5543 10 12.0045 10H11.9955Z',
  d15: 'M7.5 2.75C7.5 2.19772 7.94772 1.75 8.5 1.75H15.5C16.0523 1.75 16.5 2.19772 16.5 2.75V6.25H14.5V3.75H9.5V6.25H7.5V2.75Z',
  d16: 'M2.75 13.8706V21.4998C2.75 21.914 3.08579 22.2498 3.5 22.2498H20.5C20.9142 22.2498 21.25 21.914 21.25 21.4998V13.8706L17.6812 16.2498H6.31875L2.75 13.8706Z',
};

export const IconBriefcase04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-04-stroke-rounded IconBriefcase04StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-04-duotone-rounded IconBriefcase04DuotoneRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-04-twotone-rounded IconBriefcase04TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-04-solid-rounded IconBriefcase04SolidRounded"
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-04-bulk-rounded IconBriefcase04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-04-stroke-sharp IconBriefcase04StrokeSharp"
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconBriefcase04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-04-solid-sharp IconBriefcase04SolidSharp"
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
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBriefcase04: TheIconSelfPack = {
  name: 'Briefcase04',
  StrokeRounded: IconBriefcase04StrokeRounded,
  DuotoneRounded: IconBriefcase04DuotoneRounded,
  TwotoneRounded: IconBriefcase04TwotoneRounded,
  SolidRounded: IconBriefcase04SolidRounded,
  BulkRounded: IconBriefcase04BulkRounded,
  StrokeSharp: IconBriefcase04StrokeSharp,
  SolidSharp: IconBriefcase04SolidSharp,
};