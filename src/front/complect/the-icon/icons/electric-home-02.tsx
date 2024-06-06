import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.0069 10.0034V12.502M10.0232 12.502V10.0034M8.53384 13.3828C8.49476 12.908 8.90282 12.5029 9.4202 12.5029H14.6138C15.1312 12.5029 15.5392 12.908 15.5002 13.3828L15.3933 14.6799C15.3165 15.6124 14.9805 16.5111 14.4175 17.2896L14.0684 17.7722C13.7389 18.2279 13.1834 18.5018 12.5885 18.5018H11.4455C10.8506 18.5018 10.2952 18.2279 9.96553 17.7722L9.6165 17.2896C9.05345 16.5111 8.7174 15.6124 8.64063 14.6799L8.53384 13.3828Z',
  d2: 'M15.0031 22.0011C16.7848 21.9819 17.5484 21.8878 18.4889 21.5012C19.2819 21.1767 19.7798 20.7223 20.2117 19.9159C20.8599 18.7056 21.0761 17.3176 21.2696 15.9573L21.9746 11.0032C22.0261 10.2096 22.0008 9.61801 21.8159 9.03708C21.4627 7.92786 20.5099 7.14489 19.5815 6.44685C15.262 3.19935 13.2318 1.90168 12.0154 2.00497C10.862 1.91379 9.29127 2.84603 4.30666 6.56383C3.47477 7.1843 2.64133 7.86217 2.26246 8.83056C1.73211 10.1862 2.13955 11.7209 2.36292 13.1599C2.62553 14.8518 2.93738 16.9159 3.49765 19.2825C3.53207 19.4279 3.58086 19.5703 3.64641 19.7045C4.14338 20.7217 4.57979 21.1458 5.54185 21.5012C6.54068 21.8702 9.67378 22.1919 11.2453 21.8383C11.7753 21.7191 12.0154 21.1928 12.0154 20.6475V18.5018',
  d3: 'M14.002 10V12.5M10.002 12.5V10',
  d4: 'M21.6506 13.2135L21.3496 15.1724C20.8491 18.4289 20.5989 20.0572 19.431 21.0286C18.4978 21.8048 17.2201 21.9608 15.002 21.9921L10.8632 22C7.44828 22 5.74086 22 4.57295 21.0286C3.40504 20.0572 3.15482 18.4289 2.65438 15.1724L2.35334 13.2135C2.00032 10.9162 1.82381 9.76763 2.25812 8.74938C2.69242 7.73112 3.65598 7.03443 5.58309 5.64106L7.02294 4.6C9.42024 2.86667 10.6189 2 12.002 2C13.3851 2 14.5837 2.86667 16.981 4.6L18.4209 5.64106C20.348 7.03443 21.3115 7.73112 21.7458 8.74938C22.1801 9.76763 22.0036 10.9162 21.6506 13.2135ZM9.39649 12.5C8.87699 12.5 8.46726 12.9051 8.5065 13.38L8.61373 14.6774C8.69081 15.6101 9.02823 16.509 9.59359 17.2876L9.94405 17.7703C10.2751 18.2261 10.8328 18.5 11.4301 18.5H12.5778C13.1751 18.5 13.7329 18.2261 14.0638 17.7703L14.4143 17.2876C14.9796 16.509 15.3171 15.6101 15.3941 14.6774L15.5014 13.38C15.5406 12.9051 15.1309 12.5 14.6114 12.5H9.39649Z',
  d5: 'M8.50651 13.38C8.46727 12.9051 8.877 12.5 9.3965 12.5H14.6114C15.1309 12.5 15.5406 12.9051 15.5014 13.38L15.3941 14.6774C15.317 15.6101 14.9796 16.509 14.4143 17.2876L14.0638 17.7703C13.7329 18.2261 13.1751 18.5 12.5778 18.5H11.4301C10.8328 18.5 10.2751 18.2261 9.94406 17.7703L9.5936 17.2876C9.02824 16.509 8.69082 15.6101 8.61374 14.6774L8.50651 13.38Z',
  d6: 'M15.0041 22.0011C16.7858 21.9819 17.5494 21.8878 18.4899 21.5012C19.2829 21.1767 19.7808 20.7223 20.2127 19.9159C20.8609 18.7056 21.0771 17.3176 21.2706 15.9573L21.9756 11.0032C22.0271 10.2096 22.0018 9.61801 21.8169 9.03708C21.4637 7.92786 20.5109 7.14489 19.5825 6.44685C15.263 3.19935 13.2328 1.90168 12.0164 2.00497C10.863 1.91379 9.29225 2.84603 4.30764 6.56383C3.47575 7.1843 2.64231 7.86217 2.26344 8.83056C1.73309 10.1862 2.14053 11.7209 2.3639 13.1599C2.62651 14.8518 2.93836 16.9159 3.49863 19.2825C3.53305 19.4279 3.58184 19.5703 3.64739 19.7045C4.14436 20.7217 4.58077 21.1458 5.54283 21.5012C6.54166 21.8702 9.67476 22.1919 11.2463 21.8383C11.7763 21.7191 12.0164 21.1928 12.0164 20.6475V18.5018',
  d7: 'M15.0031 22.0011C16.7848 21.9819 17.5484 21.8878 18.4889 21.5012C19.2819 21.1767 19.7798 20.7223 20.2117 19.9159C20.8599 18.7056 21.0761 17.3176 21.2696 15.9573L21.9746 11.0032C22.0261 10.2096 22.0008 9.61801 21.8158 9.03708C21.4627 7.92786 20.5099 7.14489 19.5815 6.44685C15.262 3.19935 13.2318 1.90168 12.0154 2.00497C10.862 1.91379 9.29127 2.84603 4.30666 6.56383C3.47477 7.1843 2.64133 7.86217 2.26246 8.83056C1.73211 10.1862 2.13955 11.7209 2.36292 13.1599C2.62553 14.8518 2.93738 16.9159 3.49765 19.2825C3.53206 19.4279 3.58086 19.5703 3.64641 19.7045C4.14338 20.7217 4.57979 21.1458 5.54185 21.5012C6.54068 21.8702 9.67378 22.1919 11.2453 21.8383',
  d8: 'M13.992 10.0767V12.561M10.025 12.561V10.0767M11.9124 18.544H12.5744C13.173 18.544 13.7385 18.2857 14.0702 17.8286L14.4994 17.2263C15.0659 16.4456 15.3 15.7603 15.3773 14.8251L15.4848 13.5243C15.5241 13.0481 15.1642 12.561 14.6436 12.561H9.41716C8.89651 12.561 8.48378 13.0481 8.5231 13.5243L8.63057 14.8251C8.70782 15.7603 8.97726 16.4456 9.54387 17.2263L9.92106 17.8286C10.2528 18.2857 10.8255 18.544 11.4242 18.544H11.9124ZM11.9124 18.544C12.1434 21.0999 12.2303 21.7886 10.4466 21.9829',
  d9: 'M12 1.25C11.1339 1.25 10.3597 1.52688 9.52381 1.99594C8.7139 2.45043 7.78586 3.12145 6.61887 3.96524L5.10984 5.05632L5.10983 5.05633C4.17329 5.73347 3.42528 6.2743 2.86109 6.77487C2.27855 7.29173 1.84274 7.807 1.5663 8.45513C1.28925 9.10469 1.22225 9.77045 1.25941 10.5381C1.29528 11.2789 1.43264 12.1727 1.60393 13.2872L1.91918 15.3387C2.16256 16.9225 2.35635 18.1836 2.64105 19.1662C2.93544 20.1821 3.35016 20.9887 4.0914 21.6052C4.82957 22.2192 5.7089 22.4926 6.78306 22.6231C7.828 22.75 9.14615 22.75 10.8111 22.75H10.8612L11.2503 22.7493V19.2441C10.4948 19.194 9.78231 18.8263 9.33551 18.211L8.98505 17.7283C8.34145 16.8419 7.95335 15.8127 7.86464 14.7392L7.75742 13.4418C7.68089 12.5158 8.41953 11.8285 9.25032 11.7563V10C9.25032 9.58579 9.5861 9.25 10.0003 9.25C10.4145 9.25 10.7503 9.58579 10.7503 10V11.75H13.2503V10C13.2503 9.58579 13.5861 9.25 14.0003 9.25C14.4145 9.25 14.7503 9.58579 14.7503 10V11.7559C15.5827 11.8263 16.3238 12.5143 16.2471 13.4418L16.1399 14.7392C16.0512 15.8127 15.6631 16.8419 15.0195 17.7283L14.669 18.211C14.2215 18.8274 13.5073 19.1952 12.7503 19.2444V22.7464L15.0014 22.7422L15.0106 22.742C17.1925 22.7112 18.7429 22.5748 19.9086 21.6052C20.6499 20.9887 21.0646 20.1821 21.359 19.1661C21.6437 18.1836 21.8375 16.9225 22.0808 15.3387L22.3961 13.2871C22.5674 12.1726 22.7047 11.2789 22.7406 10.5381C22.7778 9.77045 22.7108 9.10469 22.4337 8.45514C22.1573 7.807 21.7215 7.29173 21.1389 6.77487C20.5747 6.27431 19.8268 5.7335 18.8902 5.05638L18.8902 5.05634L18.8902 5.05632L17.3811 3.96523C16.2141 3.12144 15.2861 2.45043 14.4762 1.99594C13.6403 1.52688 12.8661 1.25 12 1.25Z',
  d10: 'M9.52381 1.99594C10.3597 1.52688 11.1339 1.25 12 1.25C12.8661 1.25 13.6403 1.52688 14.4762 1.99594C15.2861 2.45043 16.2141 3.12144 17.3811 3.96523L18.8902 5.05632L18.8902 5.05634C19.8267 5.73347 20.5747 6.2743 21.1389 6.77487C21.7215 7.29173 22.1573 7.807 22.4337 8.45514C22.7108 9.10469 22.7778 9.77045 22.7406 10.5381C22.7047 11.2789 22.5674 12.1726 22.3961 13.2871L22.0808 15.3387C21.8375 16.9225 21.6437 18.1836 21.359 19.1661C21.0646 20.1821 20.6499 20.9887 19.9086 21.6052C18.7429 22.5748 17.1925 22.7112 15.0106 22.742L15.0014 22.7422L10.8612 22.75H10.8111C9.14615 22.75 7.828 22.75 6.78306 22.6231C5.7089 22.4926 4.82957 22.2192 4.0914 21.6052C3.35016 20.9887 2.93544 20.1821 2.64105 19.1662C2.35635 18.1836 2.16256 16.9225 1.91918 15.3387L1.60393 13.2872C1.43264 12.1727 1.29528 11.2789 1.25941 10.5381C1.22225 9.77045 1.28925 9.10469 1.5663 8.45513C1.84274 7.807 2.27855 7.29173 2.86109 6.77487C3.42528 6.2743 4.17329 5.73347 5.10983 5.05633L5.10984 5.05632L6.61887 3.96524C7.78586 3.12145 8.7139 2.45043 9.52381 1.99594Z',
  d11: 'M10.0003 9.25C10.4145 9.25 10.7503 9.58579 10.7503 10V11.75H13.2503V10C13.2503 9.58579 13.5861 9.25 14.0003 9.25C14.4145 9.25 14.7503 9.58579 14.7503 10V11.7559C15.5827 11.8263 16.3238 12.5143 16.2471 13.4418L16.1399 14.7392C16.0512 15.8127 15.6631 16.8419 15.0195 17.7283L14.669 18.211C14.2215 18.8274 13.5073 19.1952 12.7503 19.2444V22.7464L11.2503 22.7493V19.2441C10.4948 19.194 9.78231 18.8263 9.33551 18.211L8.98505 17.7283C8.34145 16.8419 7.95335 15.8127 7.86464 14.7392L7.75742 13.4418C7.68089 12.5158 8.41953 11.8285 9.25032 11.7563V10C9.25032 9.58579 9.5861 9.25 10.0003 9.25Z',
  d12: 'M14.0335 13.0104H15.5067V16.0149L13.5237 18.9769H10.5281L8.51074 16.0149V13.0104H9.99324M14.0335 13.0104V9.99902M14.0335 13.0104H9.99324M9.99324 13.0104L9.9934 9.99902',
  d13: 'M11.9813 19.3568V21.9902H4.52997C4.52514 21.9902 4.521 21.9868 4.52013 21.982L2.02165 8.40883C2.02092 8.40484 2.02267 8.40081 2.02608 8.39861L12.0039 1.98987C12.0072 1.98773 12.0115 1.98775 12.0148 1.98992L22.0155 8.53902C22.0189 8.54123 22.0206 8.54524 22.0199 8.5492L19.5267 21.9821C19.5258 21.9868 19.5217 21.9902 19.5168 21.9902H15.0101',
  d14: 'M12.4085 1.37116C12.1599 1.20961 11.8396 1.20961 11.591 1.37117L1.59128 7.87117C1.33705 8.03643 1.20734 8.3385 1.26258 8.63664L3.76258 22.1288C3.82842 22.4841 4.13827 22.7419 4.49964 22.7421L11.25 22.7457V19.7498H10.0986L7.75024 16.2269L7.75 12.2498H9.25121V10H10.7512V12.2498H13.2512V10H14.7512V12.2498H16.2502V16.2269L13.9014 19.7498H12.75V22.7465L19.4996 22.75C19.8613 22.7502 20.1716 22.4922 20.2375 22.1366L22.7377 8.63658C22.7929 8.33845 22.6632 8.03639 22.409 7.87116L12.4085 1.37116Z',
};

export const IconElectricHome02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-home-02-stroke-rounded IconElectricHome02StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconElectricHome02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-home-02-duotone-rounded IconElectricHome02DuotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconElectricHome02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-home-02-twotone-rounded IconElectricHome02TwotoneRounded"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconElectricHome02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-home-02-solid-rounded IconElectricHome02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconElectricHome02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-home-02-bulk-rounded IconElectricHome02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconElectricHome02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-home-02-stroke-sharp IconElectricHome02StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconElectricHome02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-home-02-solid-sharp IconElectricHome02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfElectricHome02: TheIconSelfPack = {
  name: 'ElectricHome02',
  StrokeRounded: IconElectricHome02StrokeRounded,
  DuotoneRounded: IconElectricHome02DuotoneRounded,
  TwotoneRounded: IconElectricHome02TwotoneRounded,
  SolidRounded: IconElectricHome02SolidRounded,
  BulkRounded: IconElectricHome02BulkRounded,
  StrokeSharp: IconElectricHome02StrokeSharp,
  SolidSharp: IconElectricHome02SolidSharp,
};