import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.61 2.14784L7.80042 2.10879C8.28808 2.00879 8.53191 1.95878 8.6895 2.04196C8.84709 2.12513 8.97976 2.43743 9.24511 3.06201C9.72042 4.1808 10.8245 4.96667 12 4.96667C13.1755 4.96667 14.2796 4.1808 14.7549 3.06201C15.0202 2.43743 15.1529 2.12513 15.3105 2.04196C15.4681 1.95878 15.7119 2.00879 16.1996 2.10879L16.39 2.14784C17.6491 2.37796 17.6688 2.38943 18.5326 3.39279C19.2624 4.24054 20.3084 5.10683 20.8298 6.12714C21.2138 6.87858 20.8865 7.52282 20.4556 8.11982C19.9173 8.86548 19.2184 9.58165 18.272 9.00146C17.6678 8.63097 17.1859 7.8491 16.7173 7.30819C16.7173 7.30819 17 10.9245 16 11.9314C16.9077 12.5863 18.3424 13.8579 19.4805 16.4642C19.8862 17.3932 20.4317 18.4519 19.8937 19.4437C18.0646 22.8153 5.97514 22.8887 4.10625 19.4437C3.56824 18.4519 4.11378 17.3932 4.51948 16.4642C5.65756 13.8579 7.0923 12.5863 8 11.9314C7 10.9245 7.2827 7.30819 7.2827 7.30819C6.81411 7.8491 6.33223 8.63098 5.72796 9.00146C4.78163 9.58165 4.08274 8.86548 3.54444 8.11982C3.11346 7.52283 2.78615 6.87858 3.17016 6.12714C3.69156 5.10683 4.73757 4.24054 5.46741 3.39279C6.33123 2.38941 6.35093 2.37797 7.61 2.14784Z',
  d2: 'M8 12H16',
  d3: 'M4.52072 16.4625C5.65881 13.8562 7.09355 12.5846 8.00124 11.9297H16.0012C16.9089 12.5846 18.3437 13.8562 19.4818 16.4625C19.8875 17.3915 20.433 18.4502 19.895 19.442C18.0659 22.8136 5.97638 22.887 4.1075 19.442C3.56949 18.4502 4.11503 17.3915 4.52072 16.4625Z',
  d4: 'M7.61 2.14784L7.80042 2.10879C8.28808 2.00879 8.53191 1.95878 8.6895 2.04196C8.84709 2.12513 8.97976 2.43743 9.24511 3.06201C9.72042 4.1808 10.8245 4.96667 12 4.96667C13.1755 4.96667 14.2796 4.1808 14.7549 3.06201C15.0202 2.43743 15.1529 2.12513 15.3105 2.04196C15.4681 1.95878 15.7119 2.00879 16.1996 2.10879L16.39 2.14784C17.6491 2.37796 17.6688 2.38943 18.5326 3.39279C19.2624 4.24054 20.3084 5.10683 20.8298 6.12714C21.2138 6.87858 20.8865 7.52282 20.4556 8.11982C19.9173 8.86548 19.2184 9.58165 18.272 9.00145C17.6678 8.63097 17.1859 7.8491 16.7173 7.30819C16.7173 7.30819 17 10.9245 16 11.9314C16.9077 12.5863 18.3424 13.8579 19.4805 16.4642C19.8862 17.3932 20.4317 18.4519 19.8937 19.4437C18.0646 22.8153 5.97514 22.8887 4.10625 19.4437C3.56824 18.4519 4.11378 17.3932 4.51948 16.4642C5.65756 13.8579 7.0923 12.5863 8 11.9314C7 10.9245 7.2827 7.30819 7.2827 7.30819C6.81411 7.8491 6.33223 8.63098 5.72796 9.00145C4.78163 9.58165 4.08274 8.86548 3.54444 8.11982C3.11346 7.52282 2.78615 6.87858 3.17016 6.12714C3.69156 5.10683 4.73757 4.24054 5.46741 3.39279C6.33123 2.38941 6.35093 2.37797 7.61 2.14784Z',
  d5: 'M18.3154 13.0872C18.1802 12.9252 18.1127 12.8443 18.012 12.7971C17.9112 12.75 17.8 12.75 17.5775 12.75H6.42084C6.19837 12.75 6.08714 12.75 5.98642 12.7971C5.8857 12.8443 5.81813 12.9252 5.68301 13.0872C4.58463 14.4034 3.62165 16.1011 3.22845 17.7573C3.08205 18.3739 3.06083 19.091 3.4462 19.8014C4.06178 20.9361 5.4196 21.6518 6.88912 22.09C8.40083 22.5408 10.2203 22.7548 12.0161 22.75C13.812 22.7453 15.628 22.5218 17.1334 22.0689C18.5941 21.6294 19.9461 20.9187 20.5522 19.8014C20.9375 19.091 20.9163 18.3739 20.7699 17.7573C20.3767 16.1011 19.4137 14.4034 18.3154 13.0872Z',
  d6: 'M6.19382 9.58729C6.34874 9.48938 6.4262 9.44042 6.47655 9.46541C6.52691 9.49039 6.53439 9.57712 6.54935 9.75058C6.57165 10.0091 6.6024 10.2675 6.6464 10.5233C6.70275 10.8509 6.73093 11.0147 6.87054 11.1323C7.01016 11.25 7.19343 11.25 7.55998 11.25H16.4395C16.806 11.25 16.9893 11.25 17.1289 11.1323C17.2686 11.0147 17.2967 10.8509 17.3531 10.5233C17.3971 10.2675 17.4278 10.0091 17.4501 9.75058C17.4651 9.57712 17.4726 9.49039 17.5229 9.46541C17.5733 9.44042 17.6507 9.48938 17.8057 9.58729C18.4284 9.9809 19.195 10.0937 19.8802 9.71391C20.3964 9.42772 20.7873 8.94144 21.0634 8.55892C22.6398 6.37519 20.3887 4.40077 19.0462 2.84017C18.673 2.40623 18.3722 2.05633 17.9861 1.83199C17.3444 1.45916 16.4478 1.33706 15.7079 1.26075C15.524 1.24178 15.2396 1.23128 14.9602 1.37879C14.471 1.63697 14.2776 2.26686 14.0756 2.74242C13.726 3.56529 12.9194 4.21678 11.9997 4.21678C11.0801 4.21678 10.2735 3.56528 9.9239 2.7424C9.72189 2.26685 9.52846 1.63696 9.03933 1.37879C8.75985 1.23128 8.47546 1.24178 8.29154 1.26075C7.55165 1.33706 6.65507 1.45915 6.01343 1.83198C5.62734 2.05632 5.32647 2.40621 4.95333 2.84015C4.12176 3.80682 3.09157 4.63235 2.50205 5.78597C1.90721 6.94999 2.48445 7.93332 2.93608 8.55892C3.21222 8.94144 3.60304 9.42772 4.11931 9.71391C4.80453 10.0937 5.57106 9.98089 6.19382 9.58729Z',
  d7: 'M7.99316 12.0215H15.9932',
  d8: 'M12.0008 4.50988C13.3642 4.50988 14.4774 3.50181 14.4774 2L17.5035 2.53181L21 6.52135L18.4756 8.97765L16.5 7.49135L15.9983 12.0285C16.9556 12.4931 19.9376 15.9512 20.0158 22H3.95932C4.08022 17.5798 5.69215 13.7798 8.00931 11.9703L7.49997 7.4923L5.52438 9.02554L3 6.50665L6.49632 2.49881C6.49632 2.49881 8.75714 2.16388 9.5086 2.02999C9.5086 3.3154 10.4995 4.50988 12.0008 4.50988Z',
  d9: 'M21.5305 7.12846C21.8095 6.85098 21.8244 6.40604 21.5644 6.11082L17.8878 1.93533L13.75 1.25V2.12981C13.75 3.09026 12.9665 3.86887 12 3.86887C11.0335 3.86887 10.25 3.09026 10.25 2.12981V1.25L6.11217 1.93531L2.43557 6.1108C2.17562 6.40603 2.19046 6.85097 2.4695 7.12845L4.96951 9.61438C5.23351 9.8769 5.65164 9.90639 5.9503 9.68355L6.90174 8.9737L7.16836 11.322H16.8316L17.0983 8.97371L18.0497 9.68357C18.3484 9.9064 18.7665 9.87691 19.0305 9.61439L21.5305 7.12846Z',
  d10: 'M17.8101 12.8126H6.1899C5.92539 13.1475 5.64204 13.5445 5.35943 14.0057C4.29515 15.7424 3.25 18.3765 3.25 22.0047V22.75L20.75 22.75V22.0047C20.75 18.3765 19.7049 15.7424 18.6406 14.0057C18.358 13.5445 18.0746 13.1475 17.8101 12.8126Z',
};

export const IconDress01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-01-stroke-rounded IconDress01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconDress01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-01-duotone-rounded IconDress01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconDress01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-01-twotone-rounded IconDress01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconDress01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-01-solid-rounded IconDress01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDress01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-01-bulk-rounded IconDress01BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconDress01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-01-stroke-sharp IconDress01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDress01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-01-solid-sharp IconDress01SolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDress01: TheIconSelfPack = {
  name: 'Dress01',
  StrokeRounded: IconDress01StrokeRounded,
  DuotoneRounded: IconDress01DuotoneRounded,
  TwotoneRounded: IconDress01TwotoneRounded,
  SolidRounded: IconDress01SolidRounded,
  BulkRounded: IconDress01BulkRounded,
  StrokeSharp: IconDress01StrokeSharp,
  SolidSharp: IconDress01SolidSharp,
};