import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.9427 16.8354C20.2864 12.8866 18.2432 9.94613 16.467 8.219C15.9501 7.71642 15.6917 7.46513 15.1208 7.23257C14.5499 7 14.0592 7 13.0778 7H10.9222C9.94081 7 9.4501 7 8.87922 7.23257C8.30834 7.46513 8.04991 7.71642 7.53304 8.219C5.75682 9.94613 3.71361 12.8866 3.05727 16.8354C2.56893 19.7734 5.27927 22 8.30832 22H15.6917C18.7207 22 21.4311 19.7734 20.9427 16.8354Z',
  d2: 'M7.25662 4.44287C7.05031 4.14258 6.75128 3.73499 7.36899 3.64205C8.00392 3.54651 8.66321 3.98114 9.30855 3.97221C9.89237 3.96413 10.1898 3.70519 10.5089 3.33548C10.8449 2.94617 11.3652 2 12 2C12.6348 2 13.1551 2.94617 13.4911 3.33548C13.8102 3.70519 14.1076 3.96413 14.6914 3.97221C15.3368 3.98114 15.9961 3.54651 16.631 3.64205C17.2487 3.73499 16.9497 4.14258 16.7434 4.44287L15.8105 5.80064C15.4115 6.38146 15.212 6.67187 14.7944 6.83594C14.3769 7 13.8373 7 12.7582 7H11.2418C10.1627 7 9.6231 7 9.20556 6.83594C8.78802 6.67187 8.5885 6.38146 8.18945 5.80064L7.25662 4.44287Z',
  d3: 'M16.8352 8.11274C19.2505 10.4506 20.8802 13.5816 21.4336 16.8954C21.7169 18.5918 21.0622 20.0804 19.937 21.12C18.823 22.1493 17.2437 22.75 15.5965 22.75H8.40257C6.75537 22.75 5.176 22.1493 4.06205 21.12C2.93684 20.0804 2.28209 18.5918 2.56539 16.8954C3.2355 12.883 5.31961 9.89741 7.13775 8.13796C7.23021 8.04847 7.32272 7.96078 7.42687 7.88473C7.65192 7.72042 8.05423 7.5576 8.33021 7.51914C8.46756 7.5 8.56632 7.5 8.76384 7.5H15.2352C15.4327 7.5 15.5315 7.5 15.6688 7.51914C15.9448 7.5576 16.3471 7.72042 16.5721 7.88473C16.6841 7.9665 16.7345 8.01526 16.8352 8.11274Z',
  d4: 'M10.6408 1.90644C10.887 1.65936 11.352 1.25 11.9993 1.25C12.6466 1.25 13.1116 1.65936 13.3578 1.90644C13.6563 2.20598 13.8942 2.65371 14.273 2.85411C14.5862 3.01979 14.9902 2.85885 15.3028 2.77744C15.6007 2.69989 16.0548 2.58244 16.536 2.64649C16.7451 2.67432 17.0195 2.74083 17.232 2.9301C17.4838 3.15425 17.5244 3.43315 17.4876 3.64394C17.4428 3.90039 17.284 4.11086 17.128 4.31102L16.2357 5.4599C16.0057 5.75681 15.7781 6.06194 15.4725 6.28636C15.2461 6.4526 14.9596 6.5 14.6788 6.5H9.31985C9.03898 6.5 8.75253 6.4526 8.52615 6.28636C8.22055 6.06194 7.9929 5.75681 7.76291 5.4599L6.87058 4.31102C6.71466 4.11086 6.55582 3.9004 6.51104 3.64394C6.47423 3.43315 6.51486 3.15425 6.76661 2.9301C6.97918 2.74083 7.25355 2.67432 7.46265 2.64649C7.94384 2.58244 8.39794 2.69989 8.69587 2.77744C9.00846 2.85885 9.41238 3.01979 9.72561 2.85411C10.1045 2.65371 10.3423 2.20598 10.6408 1.90644Z',
  d5: 'M10.6412 1.90644C10.8875 1.65936 11.3525 1.25 11.9998 1.25C12.647 1.25 13.112 1.65936 13.3583 1.90644C13.6568 2.20598 13.8946 2.65371 14.2735 2.85411C14.5867 3.01979 14.9906 2.85885 15.3032 2.77744C15.6011 2.69989 16.0552 2.58244 16.5364 2.64649C16.7455 2.67432 17.0199 2.74083 17.2325 2.9301C17.4842 3.15425 17.5248 3.43315 17.488 3.64394C17.4432 3.90039 17.2844 4.11086 17.1285 4.31102L16.2362 5.4599C16.0062 5.75681 15.7785 6.06194 15.4729 6.28636C15.2465 6.4526 14.9601 6.5 14.6792 6.5H9.32029C9.03943 6.5 8.75298 6.4526 8.5266 6.28636C8.221 6.06194 7.99334 5.75681 7.76335 5.4599L6.87103 4.31102C6.7151 4.11086 6.55627 3.9004 6.51148 3.64394C6.47467 3.43315 6.5153 3.15425 6.76705 2.9301C6.97962 2.74083 7.25399 2.67432 7.46309 2.64649C7.94428 2.58244 8.39838 2.69989 8.69632 2.77744C9.00891 2.85885 9.41282 3.01979 9.72605 2.85411C10.1049 2.65371 10.3427 2.20598 10.6412 1.90644Z',
  d6: 'M20.9427 16.8343C20.2864 12.8834 16.7762 8.72171 15 6.99365H9C7.22378 8.72171 3.71361 12.8834 3.05727 16.8343C2.56893 19.7739 5.27927 22.0017 8.30832 22.0017H15.6917C18.7207 22.0017 21.4311 19.7739 20.9427 16.8343Z',
  d7: 'M9.02091 7.04641L7.00818 3.52618C7.00402 3.5189 7.01011 3.51004 7.01839 3.51132L10.0079 3.97469L12.0075 2.00093C12.0114 1.99705 12.0178 1.99709 12.0216 2.00102L13.972 3.97469L16.9615 3.51131C16.9698 3.51003 16.9759 3.51886 16.9718 3.52613L14.9753 7.04641',
  d8: 'M16.7455 7.75H7.25396C6.53425 8.56197 5.7337 9.55911 4.98688 10.6648C3.77926 12.4526 2.67082 14.5845 2.31713 16.7124C2.02636 18.4618 2.69835 19.997 3.8532 21.0691C4.99649 22.1305 6.61745 22.75 8.30803 22.75H15.6914C17.382 22.75 19.0029 22.1305 20.1462 21.0691C21.3011 19.997 21.9731 18.4618 21.6823 16.7124C21.3286 14.5845 20.2202 12.4526 19.0125 10.6648C18.2657 9.55911 17.4652 8.56197 16.7455 7.75Z',
  d9: 'M12.5303 1.46967C12.2374 1.17678 11.7626 1.17678 11.4697 1.46967L9.74259 3.19675L7.1233 2.7602C6.83764 2.71259 6.5501 2.8337 6.38458 3.07133C6.21906 3.30897 6.20514 3.62066 6.34882 3.8721L7.70762 6.25H16.2924L17.6512 3.8721C17.7949 3.62066 17.7809 3.30897 17.6154 3.07133C17.4499 2.8337 17.1624 2.71259 16.8767 2.7602L14.2574 3.19675L12.5303 1.46967Z',
};

export const IconMoneyBag01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-bag-01-stroke-rounded IconMoneyBag01StrokeRounded"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconMoneyBag01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-bag-01-duotone-rounded IconMoneyBag01DuotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyBag01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-bag-01-twotone-rounded IconMoneyBag01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyBag01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-bag-01-solid-rounded IconMoneyBag01SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyBag01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-bag-01-bulk-rounded IconMoneyBag01BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyBag01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-bag-01-stroke-sharp IconMoneyBag01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyBag01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-bag-01-solid-sharp IconMoneyBag01SolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoneyBag01: TheIconSelfPack = {
  name: 'MoneyBag01',
  StrokeRounded: IconMoneyBag01StrokeRounded,
  DuotoneRounded: IconMoneyBag01DuotoneRounded,
  TwotoneRounded: IconMoneyBag01TwotoneRounded,
  SolidRounded: IconMoneyBag01SolidRounded,
  BulkRounded: IconMoneyBag01BulkRounded,
  StrokeSharp: IconMoneyBag01StrokeSharp,
  SolidSharp: IconMoneyBag01SolidSharp,
};