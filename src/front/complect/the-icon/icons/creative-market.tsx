import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.7962 2.91338C11.4188 2.29077 12.2756 1.96039 13.1551 2.0038L18.7587 2.28039C20.3601 2.35944 21.6406 3.63993 21.7196 5.24131L21.9962 10.8449C22.0396 11.7244 21.7092 12.5811 21.0866 13.2037L13.5082 20.7822C11.8844 22.4059 9.25177 22.4059 7.62799 20.7822L3.21783 16.372C1.59406 14.7482 1.59406 12.1156 3.21783 10.4918L10.7962 2.91338Z',
  d2: 'M17.5002 6.5L17.4912 6.5',
  d3: 'M12.982 12.2064L10.0004 14M10.0004 14L7.01869 15.7936M10.0004 14L10.0187 17.5M10.0004 14L9.98202 10.5M10.0004 14L13 15.7063M10.0004 14L7 12.2935',
  d4: 'M10.2659 2.38305C11.0383 1.61071 12.1011 1.20086 13.192 1.25471L18.7957 1.53131C20.7822 1.62936 22.3706 3.21781 22.4687 5.20434L22.7453 10.808C22.7991 11.8989 22.3893 12.9617 21.617 13.7341L14.0385 21.3125C12.1219 23.2292 9.01433 23.2292 7.09766 21.3125L2.6875 16.9023C0.770832 14.9857 0.770833 11.8781 2.6875 9.96146L10.2659 2.38305ZM19 6.5C19 7.32843 18.3314 8 17.5067 8H17.4933C16.6686 8 16 7.32843 16 6.5C16 5.67157 16.6686 5 17.4933 5H17.5067C18.3314 5 19 5.67157 19 6.5ZM10.7321 10.4961C10.73 10.0819 10.3924 9.74784 9.97822 9.75001C9.56402 9.75218 9.22999 10.0897 9.23216 10.5039L9.2437 12.7067L7.37093 11.6416C7.01088 11.4368 6.55299 11.5626 6.3482 11.9227C6.14342 12.2827 6.26928 12.7406 6.62933 12.9454L8.51535 14.0181L6.63222 15.1509C6.27728 15.3644 6.16262 15.8252 6.37614 16.1802C6.58965 16.5351 7.05047 16.6498 7.40542 16.4363L9.2574 15.3222L9.26883 17.5039C9.271 17.9181 9.60854 18.2522 10.0227 18.25C10.437 18.2478 10.771 17.9103 10.7688 17.4961L10.7573 15.2933L12.6293 16.3582C12.9893 16.563 13.4472 16.4372 13.652 16.0772C13.8568 15.7171 13.731 15.2592 13.371 15.0544L11.4856 13.9819L13.3687 12.8491C13.7237 12.6356 13.8383 12.1748 13.6248 11.8198C13.4113 11.4649 12.9505 11.3502 12.5956 11.5637L10.7436 12.6778L10.7321 10.4961Z',
  d5: 'M10.2659 2.38305C11.0383 1.61071 12.1011 1.20086 13.192 1.25471L18.7957 1.53131C20.7822 1.62936 22.3706 3.21781 22.4687 5.20434L22.7453 10.808C22.7991 11.8989 22.3893 12.9617 21.617 13.7341L14.0385 21.3125C12.1219 23.2292 9.01433 23.2292 7.09766 21.3125L2.6875 16.9023C0.770832 14.9857 0.770833 11.8781 2.6875 9.96146L10.2659 2.38305Z',
  d6: 'M19 6.5C19 7.32843 18.3314 8 17.5067 8L17.4933 8C16.6686 8 16 7.32843 16 6.5C16 5.67157 16.6686 5 17.4933 5L17.5067 5C18.3314 5 19 5.67157 19 6.5Z',
  d7: 'M9.97822 9.75001C10.3924 9.74784 10.73 10.0819 10.7321 10.4961L10.7436 12.6778L12.5956 11.5637C12.9505 11.3502 13.4113 11.4649 13.6248 11.8198C13.8383 12.1748 13.7237 12.6356 13.3687 12.8491L11.4856 13.9819L13.371 15.0544C13.731 15.2592 13.8568 15.7171 13.652 16.0772C13.4472 16.4372 12.9893 16.563 12.6293 16.3582L10.7573 15.2933L10.7688 17.4961C10.771 17.9103 10.437 18.2478 10.0227 18.25C9.60854 18.2522 9.271 17.9181 9.26883 17.5039L9.2574 15.3222L7.40542 16.4363C7.05047 16.6498 6.58965 16.5351 6.37614 16.1802C6.16263 15.8252 6.27728 15.3644 6.63222 15.1509L8.51535 14.0181L6.62933 12.9454C6.26928 12.7406 6.14342 12.2827 6.3482 11.9227C6.55299 11.5626 7.01088 11.4368 7.37093 11.6416L9.2437 12.7067L9.23216 10.5039C9.22999 10.0897 9.56402 9.75218 9.97822 9.75001Z',
  d8: 'M17.9958 6.00928H17.9868',
  d9: 'M14.9678 10.2157L11.9862 12.0093M11.9862 12.0093L9.00453 13.8029M11.9862 12.0093L12.0045 15.5093M11.9862 12.0093L11.9678 8.50928M11.9862 12.0093L14.9858 13.7156M11.9862 12.0093L8.98584 10.3028',
  d10: 'M2.00048 12.0068L11.9987 1.99951H22.0024V11.9521L11.9981 21.9975C11.9942 22.0015 11.9878 22.0015 11.9839 21.9976L2.00048 12.0209C1.99659 12.017 1.99658 12.0107 2.00048 12.0068Z',
  d11: 'M12.5304 22.5303C12.2375 22.8232 11.7626 22.8232 11.4697 22.5303L1.46967 12.5303C1.32902 12.3896 1.25 12.1989 1.25 12C1.25 11.8011 1.32902 11.6103 1.46967 11.4696L11.6893 1.25L22.75 1.25L22.75 12.3107L12.5304 22.5303ZM19.75 5.75C19.75 6.57843 19.0814 7.25 18.2567 7.25H18.2433C17.4186 7.25 16.75 6.57843 16.75 5.75C16.75 4.92157 17.4186 4.25 18.2433 4.25H18.2567C19.0814 4.25 19.75 4.92157 19.75 5.75ZM8.62891 10.9454L10.5149 12.0181L8.6318 13.1509L9.40499 14.4363L11.257 13.3222L11.2684 15.504L12.7684 15.4961L12.7568 13.2934L14.6289 14.3583L15.3705 13.0545L13.4851 11.9819L15.3683 10.8491L14.5951 9.56376L12.7431 10.6778L12.7317 8.49609L11.2317 8.50395L11.2433 10.7068L9.3705 9.64158L8.62891 10.9454Z',
};

export const IconCreativeMarketStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="creative-market-stroke-rounded IconCreativeMarketStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCreativeMarketDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="creative-market-duotone-rounded IconCreativeMarketDuotoneRounded"
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

export const IconCreativeMarketTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="creative-market-twotone-rounded IconCreativeMarketTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconCreativeMarketSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="creative-market-solid-rounded IconCreativeMarketSolidRounded"
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

export const IconCreativeMarketBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="creative-market-bulk-rounded IconCreativeMarketBulkRounded"
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

export const IconCreativeMarketStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="creative-market-stroke-sharp IconCreativeMarketStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconCreativeMarketSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="creative-market-solid-sharp IconCreativeMarketSolidSharp"
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

export const iconPackOfCreativeMarket: TheIconSelfPack = {
  name: 'CreativeMarket',
  StrokeRounded: IconCreativeMarketStrokeRounded,
  DuotoneRounded: IconCreativeMarketDuotoneRounded,
  TwotoneRounded: IconCreativeMarketTwotoneRounded,
  SolidRounded: IconCreativeMarketSolidRounded,
  BulkRounded: IconCreativeMarketBulkRounded,
  StrokeSharp: IconCreativeMarketStrokeSharp,
  SolidSharp: IconCreativeMarketSolidSharp,
};