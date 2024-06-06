import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 22V5.9907C3 5.25783 3 4.8914 3.20387 4.62261C3.40774 4.35383 3.76006 4.25575 4.46471 4.0596L11.4647 2.11106C11.7307 2.03702 11.8637 2 12 2C12.1363 2 12.2693 2.03702 12.5353 2.11106L19.5353 4.0596C20.2399 4.25575 20.5923 4.35383 20.7961 4.62261C21 4.8914 21 5.25783 21 5.9907V22',
  d2: 'M2 22H22',
  d3: 'M3 9L11.5661 7.04882C11.8519 6.98373 12.1481 6.98373 12.4339 7.04882L21 9',
  d4: 'M19.65 12.7L21 13M15.6 11.8L16.5 12M12.9 11.2L12 11L11.1 11.2M4.35 12.7L3 13M8.4 11.8L7.5 12',
  d5: 'M12 7V22',
  d6: 'M3 9.99303V22H21V9.99303C21 9.44337 21 9.16855 20.7961 8.96696C20.5923 8.76537 20.2399 8.69181 19.5353 8.5447L12.5353 7.0833C12.2693 7.02777 12.1363 7 12 7C11.8637 7 11.7307 7.02777 11.4647 7.0833L4.46471 8.5447C3.76006 8.69181 3.40774 8.76537 3.20387 8.96696C3 9.16855 3 9.44337 3 9.99303Z',
  d7: 'M3 9L11.5661 7.04882C11.8519 6.98373 12.1481 6.98373 12.4339 7.04882L21 9M12 7V22',
  d8: 'M11.3154 1.37402C11.5284 1.31429 11.7576 1.25 12 1.25C12.2425 1.25 12.4716 1.31429 12.6846 1.37402L12.7364 1.38853L19.7719 3.34695C20.0936 3.43646 20.3948 3.52027 20.6379 3.61988C20.9084 3.73075 21.1811 3.88904 21.3937 4.16937C21.6062 4.44957 21.6853 4.75475 21.7194 5.04508C21.7501 5.3062 21.75 5.61921 21.75 5.9539V7.78189C21.75 8.13364 21.75 8.30952 21.6354 8.3996C21.5207 8.48969 21.3498 8.44808 21.0081 8.36485L12.611 6.32011L12.6001 6.31755C12.2047 6.22748 11.7947 6.22748 11.3993 6.31755L2.99196 8.36473C2.65019 8.44795 2.47931 8.48955 2.36466 8.39947C2.25 8.30938 2.25 8.13351 2.25 7.78176L2.25 5.95393C2.24996 5.61922 2.24992 5.30622 2.28062 5.04508C2.31474 4.75475 2.3938 4.44957 2.60632 4.16937C2.81895 3.88904 3.09158 3.73075 3.36211 3.61988C3.6052 3.52026 3.90639 3.43646 4.2281 3.34695L11.2636 1.38853L11.3154 1.37402Z',
  d9: 'M2.25 10.8749C2.25 10.4977 2.25 10.3091 2.35684 10.1732C2.46369 10.0372 2.64693 9.99256 3.01341 9.90332L10.7551 8.01816C10.9829 7.96268 11.0968 7.93494 11.1733 7.995C11.2497 8.05505 11.2497 8.1723 11.2497 8.40681V10.2382C11.2497 10.3151 11.2497 10.3536 11.2277 10.381C11.2057 10.4084 11.1682 10.4168 11.0931 10.4334L10.9372 10.4681C10.5329 10.5579 10.2779 10.9586 10.3678 11.3629C10.4383 11.6806 10.7007 11.906 11.006 11.9445C11.1351 11.9608 11.1997 11.969 11.2247 11.9973C11.2497 12.0257 11.2497 12.0771 11.2497 12.1801V22H12.7497V12.1801C12.7497 12.0772 12.7497 12.0257 12.7747 11.9973C12.7997 11.969 12.8643 11.9608 12.9936 11.9446C13.299 11.9061 13.5614 11.6806 13.632 11.3629C13.7219 10.9586 13.467 10.5579 13.0626 10.4681L12.9063 10.4334C12.8312 10.4167 12.7937 10.4083 12.7717 10.3809C12.7497 10.3535 12.7497 10.315 12.7497 10.2381V8.40681C12.7497 8.1723 12.7497 8.05505 12.8261 7.995C12.9026 7.93494 13.0165 7.96268 13.2443 8.01816L20.9866 9.90346C21.3531 9.9927 21.5363 10.0373 21.6432 10.1733C21.75 10.3093 21.75 10.4979 21.75 10.8751L21.75 11.9168C21.75 12.1493 21.75 12.2656 21.6743 12.3256C21.5986 12.3857 21.4854 12.3592 21.2589 12.3063L19.8207 11.9699C19.4174 11.8756 19.0139 12.1261 18.9196 12.5295C18.8253 12.9328 19.0758 13.3362 19.4791 13.4305L20.9777 13.781C21.3482 13.8676 21.5335 13.9109 21.6418 14.0474C21.75 14.1839 21.75 14.3742 21.75 14.7547L21.75 22.75H2.25001L2.25 14.7536C2.25 14.3728 2.25 14.1824 2.35837 14.0459C2.46673 13.9093 2.65215 13.8661 3.02298 13.7797L4.52018 13.4306C4.92357 13.3366 5.17436 12.9334 5.08032 12.53C4.98629 12.1266 4.58304 11.8758 4.17964 11.9698L2.74081 12.3052C2.51449 12.358 2.40133 12.3844 2.32567 12.3243C2.25 12.2643 2.25 12.1481 2.25 11.9157L2.25 10.8749ZM9.13205 11.6375C9.2219 12.0419 8.96695 12.4425 8.5626 12.5324L7.66261 12.7324C7.25826 12.8222 6.85762 12.5673 6.76777 12.1629C6.67791 11.7586 6.93286 11.3579 7.33721 11.2681L8.23721 11.0681C8.64156 10.9782 9.04219 11.2332 9.13205 11.6375ZM14.8678 11.6375C14.9576 11.2332 15.3583 10.9782 15.7626 11.0681L16.6626 11.2681C17.067 11.3579 17.3219 11.7586 17.232 12.1629C17.1422 12.5673 16.7416 12.8222 16.3372 12.7324L15.4372 12.5324C15.0329 12.4425 14.7779 12.0419 14.8678 11.6375Z',
  d10: 'M1 22C1 21.4477 1.44772 21 2 21H22C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22Z',
  d11: 'M2.25 10.8746C2.25 10.4974 2.25 10.3089 2.35684 10.1729C2.46368 10.0369 2.64692 9.99227 3.01341 9.90303L10.7551 8.01788C10.9829 7.96239 11.0968 7.93465 11.1733 7.99471C11.2497 8.05477 11.2497 8.17202 11.2497 8.40652V10.2379C11.2497 10.3148 11.2497 10.3533 11.2277 10.3807C11.2057 10.4081 11.1682 10.4165 11.0931 10.4332L10.9372 10.4678C10.5329 10.5577 10.2779 10.9583 10.3678 11.3626C10.4383 11.6803 10.7007 11.9057 11.006 11.9442C11.1351 11.9605 11.1997 11.9687 11.2247 11.997C11.2497 12.0254 11.2497 12.0769 11.2497 12.1798V21.9997H12.7497V12.1799C12.7497 12.0769 12.7497 12.0254 12.7747 11.997C12.7997 11.9687 12.8643 11.9605 12.9936 11.9443C13.299 11.9058 13.5614 11.6804 13.632 11.3626C13.7219 10.9583 13.467 10.5577 13.0626 10.4678L12.9063 10.4331C12.8312 10.4164 12.7937 10.408 12.7717 10.3806C12.7497 10.3532 12.7497 10.3147 12.7497 10.2378V8.40652C12.7497 8.17202 12.7497 8.05477 12.8261 7.99471C12.9026 7.93465 13.0165 7.96239 13.2443 8.01788L20.9866 9.90318C21.3531 9.99242 21.5363 10.037 21.6432 10.173C21.75 10.309 21.75 10.4976 21.75 10.8748L21.75 11.9165C21.75 12.149 21.75 12.2653 21.6743 12.3253C21.5986 12.3854 21.4854 12.3589 21.2589 12.306L19.8207 11.9696C19.4173 11.8753 19.0139 12.1258 18.9196 12.5292C18.8253 12.9325 19.0758 13.3359 19.4791 13.4302L20.9777 13.7807C21.3482 13.8673 21.5335 13.9106 21.6417 14.0471C21.75 14.1836 21.75 14.3739 21.75 14.7544L21.75 22.7497H2.25L2.25 14.7533C2.25 14.3725 2.25 14.1821 2.35837 14.0456C2.46673 13.909 2.65214 13.8658 3.02297 13.7794L4.52017 13.4304C4.92357 13.3363 5.17436 12.9331 5.08032 12.5297C4.98628 12.1263 4.58303 11.8755 4.17963 11.9695L2.74081 12.3049C2.51449 12.3577 2.40133 12.3841 2.32566 12.324C2.25 12.264 2.25 12.1478 2.25 11.9154L2.25 10.8746ZM9.13204 11.6372C9.2219 12.0416 8.96695 12.4422 8.5626 12.5321L7.6626 12.7321C7.25825 12.8219 6.85762 12.567 6.76776 12.1626C6.67791 11.7583 6.93286 11.3577 7.33721 11.2678L8.23721 11.0678C8.64156 10.9779 9.04219 11.2329 9.13204 11.6372ZM14.8678 11.6372C14.9576 11.2329 15.3583 10.9779 15.7626 11.0678L16.6626 11.2678C17.067 11.3577 17.3219 11.7583 17.232 12.1626C17.1422 12.567 16.7416 12.8219 16.3372 12.7321L15.4372 12.5321C15.0329 12.4422 14.7779 12.0416 14.8678 11.6372Z',
  d12: 'M2.99979 22L2.99902 4L11.9998 2L20.9998 4V22',
  d13: 'M3 9L12.0008 7L21.0008 9',
  d14: 'M3 13L7.50038 12M21.0008 13L18.7508 12.5L16.5008 12M14.2508 11.5L12.0008 11L9.75057 11.5',
  d15: 'M1.25 21.25H22.75V22.75H1.25V21.25Z',
  d16: 'M11.2441 22.75H2.24496L2.24457 13.5849L7.60932 12.7596L7.38124 11.277L2.24451 12.0672L2.2444 9.55339L11.2441 7.91719V10.417L9.58279 10.7862L9.90815 12.2504L11.2441 11.9536V22.75Z',
  d17: 'M2.24434 8.02881L2.24414 3.41482L11.9949 1.25L21.7449 3.41482V8.02835L11.9963 6.25586L2.24434 8.02881Z',
  d18: 'M21.7449 9.55294L12.7441 7.91643V10.4163L14.4084 10.7862L14.083 12.2504L12.7441 11.9529V22.75H21.7449V13.5847L16.3816 12.7596L16.6097 11.277L21.7449 12.067V9.55294Z',
};

export const IconKaaba01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kaaba-01-stroke-rounded IconKaaba01StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKaaba01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kaaba-01-duotone-rounded IconKaaba01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKaaba01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kaaba-01-twotone-rounded IconKaaba01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKaaba01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kaaba-01-solid-rounded IconKaaba01SolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKaaba01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kaaba-01-bulk-rounded IconKaaba01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKaaba01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kaaba-01-stroke-sharp IconKaaba01StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKaaba01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kaaba-01-solid-sharp IconKaaba01SolidSharp"
    >
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
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfKaaba01: TheIconSelfPack = {
  name: 'Kaaba01',
  StrokeRounded: IconKaaba01StrokeRounded,
  DuotoneRounded: IconKaaba01DuotoneRounded,
  TwotoneRounded: IconKaaba01TwotoneRounded,
  SolidRounded: IconKaaba01SolidRounded,
  BulkRounded: IconKaaba01BulkRounded,
  StrokeSharp: IconKaaba01StrokeSharp,
  SolidSharp: IconKaaba01SolidSharp,
};