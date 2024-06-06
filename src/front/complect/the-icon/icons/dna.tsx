import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22.0004 8.44332C20.2212 10.2226 17.3364 10.2226 15.5571 8.44332C13.7778 6.66405 13.7778 3.77927 15.5571 2',
  d2: 'M2 15.5566C3.77927 13.7773 6.66405 13.7773 8.44332 15.5566C10.2226 17.3359 10.2226 20.2207 8.44332 21.9999',
  d3: 'M2 15.5571C3.77927 13.7778 6.66405 13.7778 8.44332 15.5571C10.2226 17.3364 10.2226 20.2212 8.44332 22.0004',
  d4: 'M16.2642 1.29289C16.6547 1.68342 16.6547 2.31658 16.2642 2.70711C14.8755 4.09586 14.8755 6.34747 16.2642 7.73622C17.653 9.12497 19.9046 9.12497 21.2933 7.73622C21.6839 7.34569 22.317 7.34569 22.7075 7.73622C23.0981 8.12674 23.0981 8.7599 22.7075 9.15043C21.3879 10.4701 19.5696 10.9871 17.8591 10.7016C17.9514 11.1197 18 11.5542 18 12C18 15.3137 15.3137 18 12 18C11.5542 18 11.1197 17.9514 10.7016 17.8591C10.9871 19.5696 10.4701 21.3879 9.15043 22.7075C8.7599 23.0981 8.12674 23.0981 7.73622 22.7075C7.34569 22.317 7.34569 21.6839 7.73622 21.2933C9.12496 19.9046 9.12497 17.653 7.73622 16.2642C6.34746 14.8755 4.09586 14.8755 2.70711 16.2642C2.31658 16.6547 1.68342 16.6547 1.29289 16.2642C0.902369 15.8737 0.902369 15.2405 1.29289 14.85C2.61246 13.5304 4.43063 13.0134 6.14095 13.2988C6.04866 12.8806 6 12.446 6 12C6 8.68629 8.68629 6 12 6C12.446 6 12.8806 6.04866 13.2988 6.14095C13.0134 4.43063 13.5304 2.61246 14.85 1.29289C15.2405 0.902369 15.8737 0.902369 16.2642 1.29289ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z',
  d5: 'M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12Z',
  d6: 'M16.2642 1.29289C16.6547 1.68342 16.6547 2.31658 16.2642 2.70711C14.8755 4.09586 14.8755 6.34747 16.2642 7.73622C17.653 9.12497 19.9046 9.12497 21.2933 7.73622C21.6839 7.34569 22.317 7.34569 22.7075 7.73622C23.0981 8.12674 23.0981 8.7599 22.7075 9.15043C20.5377 11.3202 17.0198 11.3202 14.85 9.15043C12.6802 6.98063 12.6802 3.46269 14.85 1.29289C15.2405 0.902369 15.8737 0.902369 16.2642 1.29289Z',
  d7: 'M7.73622 16.2642C6.34746 14.8755 4.09586 14.8755 2.70711 16.2642C2.31658 16.6547 1.68342 16.6547 1.29289 16.2642C0.902369 15.8737 0.902369 15.2405 1.29289 14.85C3.46269 12.6802 6.98063 12.6802 9.15043 14.85C11.3202 17.0198 11.3202 20.5377 9.15043 22.7075C8.7599 23.0981 8.12674 23.0981 7.73622 22.7075C7.34569 22.317 7.34569 21.6839 7.73622 21.2933C9.12496 19.9046 9.12497 17.653 7.73622 16.2642Z',
  d8: 'M16.2811 2.66987C14.8868 4.06418 14.8868 6.32479 16.2811 7.7191C17.6755 9.11341 19.9361 9.11341 21.3304 7.7191L22.7502 9.13897C21.4253 10.4639 19.5997 10.983 17.8825 10.6963C17.9751 11.1161 18.0239 11.5523 18.0239 11.9999C18.0239 15.3268 15.3268 18.0239 11.9999 18.0239C11.5523 18.0239 11.1161 17.9751 10.6964 17.8825C10.983 19.5997 10.4638 21.4251 9.13897 22.75L7.7191 21.3301C9.1134 19.9358 9.11341 17.6752 7.7191 16.2809C6.32479 14.8866 4.06418 14.8866 2.66987 16.2809L1.25 14.861C2.57481 13.5362 4.40019 13.0171 6.11732 13.3036C6.02469 12.8838 5.97586 12.4475 5.97586 11.9999C5.97586 8.6729 8.6729 5.97586 11.9999 5.97586C12.4476 5.97586 12.884 6.02471 13.3038 6.11737C13.0173 4.40023 13.5364 2.57482 14.8613 1.25L16.2811 2.66987ZM11.9999 7.98386C9.78189 7.98386 7.98386 9.78189 7.98386 11.9999C7.98386 14.2178 9.78189 16.0159 11.9999 16.0159C14.2178 16.0159 16.0159 14.2178 16.0159 11.9999C16.0159 9.78189 14.2178 7.98386 11.9999 7.98386Z',
};

export const IconDnaStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dna-stroke-rounded IconDnaStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDnaDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dna-duotone-rounded IconDnaDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="5" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
      <path 
        d={d.d1} 
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

export const IconDnaTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dna-twotone-rounded IconDnaTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconDnaSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dna-solid-rounded IconDnaSolidRounded"
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

export const IconDnaBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dna-bulk-rounded IconDnaBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDnaStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dna-stroke-sharp IconDnaStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDnaSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dna-solid-sharp IconDnaSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDna: TheIconSelfPack = {
  name: 'Dna',
  StrokeRounded: IconDnaStrokeRounded,
  DuotoneRounded: IconDnaDuotoneRounded,
  TwotoneRounded: IconDnaTwotoneRounded,
  SolidRounded: IconDnaSolidRounded,
  BulkRounded: IconDnaBulkRounded,
  StrokeSharp: IconDnaStrokeSharp,
  SolidSharp: IconDnaSolidSharp,
};