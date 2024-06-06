import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.9961 9.01264H17.0042M17.0045 7.00903V4.50451M22 6.792C22 9.43833 19.7593 11.584 16.9961 11.584C16.6711 11.5844 16.3472 11.5543 16.028 11.4943C15.7983 11.4511 15.6835 11.4296 15.6033 11.4418C15.523 11.454 15.4094 11.5145 15.1822 11.6356C14.5393 11.9778 13.7896 12.0987 13.0686 11.9645C13.3426 11.627 13.5298 11.2222 13.6123 10.7882C13.6624 10.5228 13.5384 10.2649 13.3526 10.0762C12.5093 9.21878 11.9922 8.06347 11.9922 6.792C11.9922 4.14565 14.2328 2 16.9961 2C19.7593 2 22 4.14565 22 6.792Z',
  d2: 'M7.50189 22H4.71817C4.39488 22 4.07021 21.9545 3.77327 21.8269C2.80666 21.4116 2.31624 20.8633 2.08769 20.5202C1.95764 20.325 1.97617 20.0764 2.11726 19.889C3.23716 18.4015 5.8337 17.503 7.50189 17.5029M7.50665 22H10.2904C10.6137 22 10.9383 21.9545 11.2353 21.8269C12.2019 21.4116 12.6923 20.8633 12.9209 20.5202C13.0509 20.325 13.0324 20.0764 12.8913 19.889C11.7714 18.4015 9.17484 17.503 7.50665 17.5029M10.2854 12.2888C10.2854 13.8201 9.0413 15.0614 7.50665 15.0614C5.97199 15.0614 4.72791 13.8201 4.72791 12.2888C4.72791 10.7575 5.97199 9.51611 7.50665 9.51611C9.0413 9.51611 10.2854 10.7575 10.2854 12.2888Z',
  d3: 'M4.18629 18.3334C3.32171 18.8072 1.05483 19.7748 2.43551 20.9856C3.10996 21.577 3.86113 22 4.80552 22H7.49999H10.1945C11.1389 22 11.8901 21.577 12.5645 20.9856C13.9452 19.7748 11.6783 18.8072 10.8137 18.3334C8.78627 17.2222 6.21372 17.2222 4.18629 18.3334Z',
  d4: 'M10.2502 12.25C10.2502 10.7312 9.01903 9.5 7.50024 9.5C5.98146 9.5 4.75024 10.7312 4.75024 12.25C4.75024 13.7688 5.98146 15 7.50024 15C9.01903 15 10.2502 13.7688 10.2502 12.25Z',
  d5: 'M22.0002 6.78336C22.0002 9.42493 19.7614 11.5667 17.0002 11.5667C16.6756 11.5671 16.3519 11.5371 16.033 11.4772C15.8034 11.4341 15.6886 11.4126 15.6085 11.4248C15.5284 11.437 15.4148 11.4974 15.1877 11.6182C14.5453 11.9598 13.7962 12.0805 13.0758 11.9465C13.3496 11.6097 13.5366 11.2056 13.6191 10.7724C13.6691 10.5074 13.5452 10.25 13.3597 10.0616C12.5169 9.20577 12.0002 8.05254 12.0002 6.78336C12.0002 4.14178 14.2391 2 17.0002 2C19.7614 2 22.0002 4.14178 22.0002 6.78336Z',
  d6: 'M22 6.78336C22 9.42493 19.7611 11.5667 17 11.5667C16.6753 11.5671 16.3516 11.5371 16.0327 11.4772C15.8032 11.4341 15.6884 11.4126 15.6083 11.4248C15.5281 11.437 15.4146 11.4974 15.1875 11.6182C14.5451 11.9598 13.796 12.0805 13.0756 11.9465C13.3494 11.6097 13.5364 11.2056 13.6189 10.7724C13.6689 10.5074 13.545 10.25 13.3594 10.0616C12.5167 9.20577 12 8.05254 12 6.78336C12 4.14178 14.2389 2 17 2C19.7611 2 22 4.14178 22 6.78336Z',
  d7: 'M17 9H17.0081M17.0084 7V4.5',
  d8: 'M7.50189 21.9995H4.71817C4.39488 21.9995 4.07021 21.954 3.77327 21.8264C2.80666 21.4111 2.31624 20.8628 2.08769 20.5197C1.95764 20.3245 1.97617 20.0759 2.11726 19.8885C3.23716 18.401 5.8337 17.5025 7.50189 17.5024M7.50665 21.9995H10.2904C10.6137 21.9995 10.9383 21.954 11.2353 21.8264C12.2019 21.4111 12.6923 20.8628 12.9209 20.5197C13.0509 20.3245 13.0324 20.0759 12.8913 19.8885C11.7714 18.401 9.17484 17.5025 7.50665 17.5024M10.2854 12.2883C10.2854 13.8196 9.0413 15.0609 7.50665 15.0609C5.97199 15.0609 4.72791 13.8196 4.72791 12.2883C4.72791 10.757 5.97199 9.51562 7.50665 9.51562C9.0413 9.51562 10.2854 10.757 10.2854 12.2883Z',
  d9: 'M22.002 6.78501C22.002 9.42775 19.7631 11.5705 17.002 11.5705C16.6773 11.5709 16.3536 11.5409 16.0347 11.4809C15.8052 11.4378 15.6904 11.4163 15.6103 11.4285C15.5301 11.4407 15.4166 11.5011 15.1895 11.622C14.5471 11.9638 13.798 12.0845 13.0776 11.9504C13.3514 11.6135 13.5384 11.2092 13.6209 10.7758C13.6709 10.5107 13.547 10.2532 13.3614 10.0647C12.5187 9.2085 12.002 8.05475 12.002 6.78501C12.002 4.14225 14.2409 1.99951 17.002 1.99951C19.7631 1.99951 22.002 4.14225 22.002 6.78501Z',
  d10: 'M17.002 9.0025H17.0101M17.0104 7.0016V4.50049',
  d11: 'M7.49994 22.0007H4.71622C4.39292 22.0007 4.06826 21.9552 3.77132 21.8275C2.80471 21.4121 2.31429 20.8634 2.08574 20.5202C1.95569 20.3249 1.97421 20.0762 2.11531 19.8887C3.23521 18.4006 5.83175 17.5017 7.49994 17.5016M7.5047 22.0007H10.2884C10.6117 22.0007 10.9364 21.9552 11.2333 21.8275C12.1999 21.4121 12.6903 20.8634 12.9189 20.5202C13.0489 20.3249 13.0304 20.0762 12.8893 19.8887C11.7694 18.4006 9.17289 17.5017 7.5047 17.5016M10.2834 12.2851C10.2834 13.8171 9.03935 15.059 7.50469 15.059C5.97004 15.059 4.72596 13.8171 4.72596 12.2851C4.72596 10.7531 5.97004 9.51123 7.50469 9.51123C9.03935 9.51123 10.2834 10.7531 10.2834 12.2851Z',
  d12: 'M17 1.25C13.8563 1.25 11.25 3.6966 11.25 6.78336C11.25 8.26183 11.853 9.60076 12.825 10.5878C12.8635 10.6762 12.851 10.9771 12.4936 11.4734C12.3267 11.6787 12.2803 11.9568 12.3716 12.2052C12.4628 12.4535 12.6783 12.6355 12.9384 12.6838C13.8291 12.8495 14.96 12.6072 15.7493 12.1875C16.1137 12.2559 16.6288 12.3171 17 12.3167C20.1437 12.3167 22.75 9.87012 22.75 6.78336C22.75 3.6966 20.1437 1.25 17 1.25ZM17.7584 4.5C17.7584 4.08579 17.4226 3.75 17.0084 3.75C16.5942 3.75 16.2584 4.08579 16.2584 4.5V7C16.2584 7.41421 16.5942 7.75 17.0084 7.75C17.4226 7.75 17.7584 7.41421 17.7584 7V4.5ZM17 8.25C16.5858 8.25 16.25 8.58579 16.25 9C16.25 9.41421 16.5858 9.75 17 9.75H17.0081C17.4223 9.75 17.7581 9.41421 17.7581 9C17.7581 8.58579 17.4223 8.25 17.0081 8.25H17Z',
  d13: 'M4.00027 12.25C4.00027 10.317 5.56727 8.75 7.50027 8.75C9.43326 8.75 11.0003 10.317 11.0003 12.25C11.0003 14.183 9.43326 15.75 7.50027 15.75C5.56727 15.75 4.00027 14.183 4.00027 12.25Z',
  d14: 'M3.8261 17.6756C6.07808 16.4413 8.92246 16.4413 11.1744 17.6756C11.6058 17.8991 12.5496 18.3899 13.0334 18.8258C13.3317 19.0946 13.676 19.4993 13.74 20.0385C13.8108 20.6346 13.5177 21.1474 13.0592 21.5494C12.311 22.2055 11.3903 22.7499 10.1947 22.7499H4.8058C3.61027 22.7499 2.68958 22.2055 1.94129 21.5494C1.48287 21.1474 1.18972 20.6346 1.26052 20.0385C1.32455 19.4993 1.66888 19.0946 1.96718 18.8258C2.45098 18.3899 3.39471 17.8991 3.8261 17.6756Z',
  d15: 'M10.2397 12.2652C10.2397 10.7488 9.00968 9.51953 7.4924 9.51953C5.97512 9.51953 4.74512 10.7488 4.74512 12.2652C4.74512 13.7817 5.97512 15.011 7.4924 15.011C9.00968 15.011 10.2397 13.7817 10.2397 12.2652Z',
  d16: 'M12.9872 21.9998H1.99805C1.99805 19.7942 4.45805 17.5068 7.49262 17.5068C10.5272 17.5068 12.9872 19.7942 12.9872 21.9998Z',
  d17: 'M16.9776 12.0156C19.7525 12.0156 22.002 9.77353 22.002 7.0078C22.002 4.24207 19.7525 2 16.9776 2C14.2026 2 11.9531 4.24207 11.9531 7.0078C11.9531 8.71928 12.9893 10.2522 13.9436 10.9802C13.8738 11.7177 13.5162 12.4991 12.9977 13.0092C12.9059 13.0994 14.2373 12.7108 15.8082 11.8639C16.2907 11.9762 16.3262 12.0156 16.9776 12.0156Z',
  d18: 'M17.0029 4.04199V7.01172M17.0254 8.27539V9.76367',
  d19: 'M4 12.25C4 10.317 5.567 8.75 7.5 8.75C9.433 8.75 11 10.317 11 12.25C11 14.183 9.433 15.75 7.5 15.75C5.567 15.75 4 14.183 4 12.25Z',
  d20: 'M3.12423 18.3509C4.24783 17.3926 5.79328 16.75 7.5 16.75C9.20672 16.75 10.7522 17.3926 11.8758 18.3509C12.9895 19.3008 13.75 20.6191 13.75 22C13.75 22.4142 13.4142 22.75 13 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22C1.25 20.6191 2.01047 19.3008 3.12423 18.3509Z',
  d21: 'M17 1.25C13.8244 1.25 11.25 3.82436 11.25 7C11.25 8.6875 11.9776 10.2054 13.1339 11.2563C13.0327 11.7415 12.8424 12.0969 12.4697 12.4697C12.2552 12.6842 12.191 13.0068 12.3071 13.287C12.4232 13.5673 12.6967 13.75 13 13.75C13.2721 13.75 13.5464 13.6811 13.7847 13.6021C14.0315 13.5203 14.2908 13.4099 14.5456 13.2921C14.8015 13.1738 15.8728 12.6394 15.8728 12.6394C16.2378 12.712 16.6148 12.75 17 12.75C20.1756 12.75 22.75 10.1756 22.75 7C22.75 3.82436 20.1756 1.25 17 1.25ZM17.7584 6.99805L17.75 3.99805L16.25 4.00225L16.2584 7.00225L17.7584 6.99805ZM17.7581 8.25015H16.25V9.75015H17.7581V8.25015Z',
};

export const IconComplaintStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="complaint-stroke-rounded IconComplaintStrokeRounded"
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

export const IconComplaintDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="complaint-duotone-rounded IconComplaintDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComplaintTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="complaint-twotone-rounded IconComplaintTwotoneRounded"
    >
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
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComplaintSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="complaint-solid-rounded IconComplaintSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComplaintBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="complaint-bulk-rounded IconComplaintBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconComplaintStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="complaint-stroke-sharp IconComplaintStrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconComplaintSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="complaint-solid-sharp IconComplaintSolidSharp"
    >
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfComplaint: TheIconSelfPack = {
  name: 'Complaint',
  StrokeRounded: IconComplaintStrokeRounded,
  DuotoneRounded: IconComplaintDuotoneRounded,
  TwotoneRounded: IconComplaintTwotoneRounded,
  SolidRounded: IconComplaintSolidRounded,
  BulkRounded: IconComplaintBulkRounded,
  StrokeSharp: IconComplaintStrokeSharp,
  SolidSharp: IconComplaintSolidSharp,
};