import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 22C17.6 22 19 18.1665 19 13.5C19 8.83348 17.6 5 12 5C6.39994 5 5 8.83346 5 13.5C5 18.1665 6.39994 22 12 22Z',
  d2: 'M12 8V2',
  d3: 'M10.5 9.5C10.5 9.03406 10.5 8.80109 10.5761 8.61732C10.6776 8.37229 10.8723 8.17761 11.1173 8.07612C11.3011 8 11.5341 8 12 8C12.4659 8 12.6989 8 12.8827 8.07612C13.1277 8.17761 13.3224 8.37229 13.4239 8.61732C13.5 8.80109 13.5 9.03406 13.5 9.5V10.5C13.5 10.9659 13.5 11.1989 13.4239 11.3827C13.3224 11.6277 13.1277 11.8224 12.8827 11.9239C12.6989 12 12.4659 12 12 12C11.5341 12 11.3011 12 11.1173 11.9239C10.8723 11.8224 10.6776 11.6277 10.5761 11.3827C10.5 11.1989 10.5 10.9659 10.5 10.5V9.5Z',
  d4: 'M19 13.5C19 18.1665 17.6 22 12 22C6.39994 22 5 18.1665 5 13.5C5 8.83346 6.39994 5 12 5C17.6 5 19 8.83348 19 13.5ZM10.5761 8.61732C10.5 8.80109 10.5 9.03406 10.5 9.5V10.5C10.5 10.9659 10.5 11.1989 10.5761 11.3827C10.6776 11.6277 10.8723 11.8224 11.1173 11.9239C11.3011 12 11.5341 12 12 12C12.4659 12 12.6989 12 12.8827 11.9239C13.1277 11.8224 13.3224 11.6277 13.4239 11.3827C13.5 11.1989 13.5 10.9659 13.5 10.5V9.5C13.5 9.03406 13.5 8.80109 13.4239 8.61732C13.3224 8.37229 13.1277 8.17761 12.8827 8.07612C12.6989 8 12.4659 8 12 8C11.5341 8 11.3011 8 11.1173 8.07612C10.8723 8.17761 10.6776 8.37229 10.5761 8.61732Z',
  d5: 'M5.78009 7.07748C6.89346 5.44273 8.66748 4.4338 11.25 4.27246V7.27539C11.1154 7.29254 10.9737 7.32344 10.8303 7.38283C10.4015 7.56044 10.0608 7.90112 9.88321 8.32992C9.80099 8.52843 9.77338 8.72377 9.76126 8.90141C9.74998 9.06673 9.74999 9.26358 9.75 9.47786V9.47786L9.75 9.49962L9.75 10.5214V10.5214C9.74999 10.7357 9.74998 10.9325 9.76126 11.0978C9.77338 11.2755 9.80099 11.4708 9.88321 11.6693C10.0608 12.0981 10.4015 12.4388 10.8303 12.6164C11.0288 12.6986 11.2241 12.7262 11.4018 12.7384C11.5671 12.7496 11.764 12.7496 11.9782 12.7496H12.0218C12.236 12.7496 12.4329 12.7496 12.5982 12.7384C12.7759 12.7262 12.9712 12.6986 13.1697 12.6164C13.5985 12.4388 13.9392 12.0981 14.1168 11.6693C14.199 11.4708 14.2266 11.2755 14.2387 11.0978C14.25 10.9325 14.25 10.7357 14.25 10.5214V9.47786C14.25 9.26358 14.25 9.06673 14.2387 8.90141C14.2266 8.72377 14.199 8.52843 14.1168 8.32992C13.9392 7.90112 13.5985 7.56044 13.1697 7.38283C13.0263 7.32344 12.8846 7.29254 12.75 7.27539V4.27246C15.3325 4.43382 17.1065 5.44275 18.2199 7.07748C19.3985 8.80806 19.75 11.1193 19.75 13.4996C19.75 15.88 19.3985 18.1912 18.2199 19.9217C17.0018 21.7102 14.993 22.7496 12 22.7496C9.00689 22.7496 6.99814 21.7102 5.78009 19.9218C4.60145 18.1912 4.25 15.88 4.25 13.4996C4.25 11.1193 4.60145 8.80806 5.78009 7.07748ZM11.2703 8.90093C11.2956 8.84209 11.3425 8.7952 11.4013 8.76992C11.4087 8.76805 11.4371 8.76195 11.5039 8.75739C11.6119 8.75002 11.7568 8.74962 12 8.74962C12.2432 8.74962 12.3881 8.75002 12.4961 8.75739C12.5629 8.76195 12.5913 8.76805 12.5987 8.76992C12.6575 8.7952 12.7044 8.84209 12.7297 8.90093C12.7316 8.90828 12.7377 8.93669 12.7422 9.00352C12.7496 9.11152 12.75 9.25638 12.75 9.49962V10.4996C12.75 10.7429 12.7496 10.8877 12.7422 10.9957C12.7377 11.0625 12.7316 11.091 12.7297 11.0983C12.7044 11.1571 12.6575 11.204 12.5987 11.2293C12.5913 11.2312 12.5629 11.2373 12.4961 11.2418C12.3881 11.2492 12.2432 11.2496 12 11.2496C11.7568 11.2496 11.6119 11.2492 11.5039 11.2418C11.4371 11.2373 11.4087 11.2312 11.4013 11.2293C11.3425 11.204 11.2956 11.1571 11.2703 11.0983C11.2684 11.091 11.2623 11.0626 11.2578 10.9957C11.2504 10.8877 11.25 10.7429 11.25 10.4996V9.49962C11.25 9.25638 11.2504 9.11152 11.2578 9.00352C11.2623 8.93669 11.2684 8.90828 11.2703 8.90093Z',
  d6: 'M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V4.27285C11.4928 4.25768 11.7428 4.25 12 4.25C12.2572 4.25 12.5072 4.25768 12.75 4.27285V2Z',
  d7: 'M5.78009 7.07786C6.99814 5.28942 9.0069 4.25 12 4.25C14.993 4.25 17.0018 5.28942 18.2199 7.07787C19.3985 8.80845 19.75 11.1197 19.75 13.5C19.75 15.8803 19.3985 18.1916 18.2199 19.9221C17.0018 21.7106 14.993 22.75 12 22.75C9.00689 22.75 6.99814 21.7106 5.78009 19.9221C4.60145 18.1916 4.25 15.8804 4.25 13.5C4.25 11.1196 4.60145 8.80844 5.78009 7.07786Z',
  d8: 'M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V7.27578C11.1154 7.29293 10.9737 7.32383 10.8303 7.38321C10.4015 7.56083 10.0608 7.90151 9.88321 8.33031C9.80099 8.52881 9.77338 8.72415 9.76126 8.90179C9.74998 9.06711 9.74999 9.26395 9.75 9.4782V9.47824V9.5V10.5218V10.5218C9.74999 10.7361 9.74998 10.9329 9.76126 11.0982C9.77338 11.2759 9.80099 11.4712 9.88321 11.6697C10.0608 12.0985 10.4015 12.4392 10.8303 12.6168C11.0288 12.699 11.2241 12.7266 11.4018 12.7387C11.5671 12.75 11.764 12.75 11.9782 12.75H12.0218C12.236 12.75 12.4329 12.75 12.5982 12.7387C12.7759 12.7266 12.9712 12.699 13.1697 12.6168C13.5985 12.4392 13.9392 12.0985 14.1168 11.6697C14.199 11.4712 14.2266 11.2759 14.2387 11.0982C14.25 10.9329 14.25 10.736 14.25 10.5218V9.47824C14.25 9.26396 14.25 9.06712 14.2387 8.90179C14.2266 8.72415 14.199 8.52881 14.1168 8.33031C13.9392 7.90151 13.5985 7.56083 13.1697 7.38321C13.0263 7.32382 12.8846 7.29293 12.75 7.27578V2ZM11.2703 8.90131C11.2956 8.84248 11.3425 8.79558 11.4013 8.77031C11.4087 8.76844 11.4371 8.76234 11.5039 8.75778C11.6119 8.75041 11.7568 8.75 12 8.75C12.2432 8.75 12.3881 8.75041 12.4961 8.75778C12.5629 8.76234 12.5913 8.76844 12.5987 8.77031C12.6575 8.79558 12.7044 8.84248 12.7297 8.90131C12.7316 8.90867 12.7377 8.93707 12.7422 9.0039C12.7496 9.11191 12.75 9.25677 12.75 9.5V10.5C12.75 10.7432 12.7496 10.8881 12.7422 10.9961C12.7377 11.0629 12.7316 11.0913 12.7297 11.0987C12.7044 11.1575 12.6575 11.2044 12.5987 11.2297C12.5913 11.2316 12.5629 11.2377 12.4961 11.2422C12.3881 11.2496 12.2432 11.25 12 11.25C11.7568 11.25 11.6119 11.2496 11.5039 11.2422C11.4371 11.2377 11.4087 11.2316 11.4013 11.2297C11.3425 11.2044 11.2956 11.1575 11.2703 11.0987C11.2684 11.0913 11.2623 11.0629 11.2578 10.9961C11.2504 10.8881 11.25 10.7432 11.25 10.5V9.5C11.25 9.25677 11.2504 9.11191 11.2578 9.0039C11.2623 8.93707 11.2684 8.90867 11.2703 8.90131Z',
  d9: 'M13.5 8H10.5V12H13.5V8Z',
  d10: 'M12.75 4.02285V1.5H11.25V4.02285C11.4928 4.00768 11.7428 4 12 4C12.2572 4 12.5072 4.00768 12.75 4.02285Z',
  d11: 'M12.75 4.02246V6.99962H13.5C13.9142 6.99962 14.25 7.3354 14.25 7.74962V11.7496C14.25 12.1638 13.9142 12.4996 13.5 12.4996H10.5C10.0858 12.4996 9.75 12.1638 9.75 11.7496V7.74962C9.75 7.3354 10.0858 6.99962 10.5 6.99962H11.25V4.02246C8.66748 4.1838 6.89346 5.19273 5.78009 6.82748C4.60145 8.55806 4.25 10.8693 4.25 13.2496C4.25 15.63 4.60145 17.9412 5.78009 19.6718C6.99814 21.4602 9.00689 22.4996 12 22.4996C14.993 22.4996 17.0018 21.4602 18.2199 19.6717C19.3985 17.9412 19.75 15.63 19.75 13.2496C19.75 10.8693 19.3985 8.55806 18.2199 6.82748C17.1065 5.19275 15.3325 4.18382 12.75 4.02246Z',
  d12: 'M11.25 8.49962V10.9996H12.75V8.49962H11.25Z',
};

export const IconMouse12StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-12-stroke-rounded IconMouse12StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMouse12DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-12-duotone-rounded IconMouse12DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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
      />
    </TheIconWrapper>
  );
};

export const IconMouse12TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-12-twotone-rounded IconMouse12TwotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse12SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-12-solid-rounded IconMouse12SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconMouse12BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-12-bulk-rounded IconMouse12BulkRounded"
    >
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

export const IconMouse12StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-12-stroke-sharp IconMouse12StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse12SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-12-solid-sharp IconMouse12SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMouse12: TheIconSelfPack = {
  name: 'Mouse12',
  StrokeRounded: IconMouse12StrokeRounded,
  DuotoneRounded: IconMouse12DuotoneRounded,
  TwotoneRounded: IconMouse12TwotoneRounded,
  SolidRounded: IconMouse12SolidRounded,
  BulkRounded: IconMouse12BulkRounded,
  StrokeSharp: IconMouse12StrokeSharp,
  SolidSharp: IconMouse12SolidSharp,
};