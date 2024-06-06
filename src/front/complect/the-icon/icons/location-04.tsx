import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18',
  d2: 'M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z',
  d3: 'M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z',
  d4: 'M12.0002 18C12.4693 18 12.9201 17.8184 13.2574 17.4936C13.4929 17.2667 13.7344 17.0377 13.9787 16.806C16.9462 13.9914 20.3292 10.7827 18.4666 6.30373C17.3752 3.67933 14.7554 2 12.0002 2C9.24494 2 6.6251 3.67932 5.53371 6.30373C3.67864 10.7645 7.02435 13.9494 9.97577 16.759C10.2358 17.0066 10.4928 17.2512 10.7429 17.4936C11.0802 17.8184 11.531 18 12.0002 18ZM12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z',
  d5: 'M7.97559 17.5306C8.09687 18.0694 7.7584 18.6045 7.2196 18.7258C6.35214 18.9211 5.71016 19.1549 5.31073 19.3834C5.23079 19.4291 5.16903 19.4694 5.12159 19.5035C5.13958 19.5165 5.15957 19.5304 5.18177 19.5451C5.46383 19.7324 5.93794 19.9398 6.61348 20.1295C7.95067 20.505 9.85544 20.7502 12 20.7502C14.1446 20.7502 16.0493 20.505 17.3865 20.1295C18.0621 19.9398 18.5362 19.7324 18.8182 19.5451C18.8404 19.5304 18.8604 19.5165 18.8784 19.5035C18.831 19.4694 18.7692 19.4291 18.6893 19.3834C18.2898 19.1549 17.6479 18.9211 16.7804 18.7258C16.2416 18.6045 15.9031 18.0694 16.0244 17.5306C16.1457 16.9918 16.6808 16.6533 17.2196 16.7746C18.1811 16.991 19.0391 17.2794 19.6824 17.6474C20.2542 17.9745 21 18.5672 21 19.5039C21 20.3297 20.4136 20.8866 19.9244 21.2114C19.3968 21.5616 18.6994 21.8382 17.9272 22.055C16.3689 22.4926 14.2737 22.7502 12 22.7502C9.72629 22.7502 7.63105 22.4926 6.07281 22.055C5.30063 21.8382 4.60317 21.5616 4.07559 21.2114C3.58644 20.8866 3 20.3297 3 19.5039C3 18.5672 3.74579 17.9745 4.31758 17.6474C4.96092 17.2794 5.81894 16.991 6.7804 16.7746C7.31921 16.6533 7.85431 16.9918 7.97559 17.5306Z',
  d6: 'M12.0005 1.25C8.94965 1.25 6.05208 3.10493 4.84158 6.01574C3.71464 8.72562 4.32729 11.035 5.59274 13.0023C6.62554 14.6079 8.13245 16.0411 9.47688 17.3198C9.73237 17.5628 9.98199 17.8002 10.2214 18.0322L10.223 18.0338C10.7003 18.4935 11.3377 18.75 12.0005 18.75C12.6633 18.75 13.3008 18.4935 13.7781 18.0337C14.0042 17.8159 14.2392 17.5932 14.4795 17.3655L14.4802 17.3648L14.4806 17.3645C15.8394 16.0769 17.367 14.6292 18.4106 13.0032C19.6745 11.034 20.285 8.72228 19.1595 6.01574C17.949 3.10493 15.0514 1.25 12.0005 1.25ZM12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6Z',
  d7: 'M4.84158 6.01574C6.05208 3.10493 8.94965 1.25 12.0005 1.25C15.0514 1.25 17.949 3.10493 19.1595 6.01574C20.285 8.72228 19.6745 11.034 18.4106 13.0032C17.367 14.6292 15.8394 16.0769 14.4806 17.3645L14.4802 17.3648C14.2397 17.5928 14.0044 17.8157 13.7781 18.0337C13.3008 18.4935 12.6633 18.75 12.0005 18.75C11.3377 18.75 10.7003 18.4935 10.223 18.0338L10.2214 18.0322C9.98199 17.8002 9.73237 17.5628 9.47688 17.3198C8.13245 16.0411 6.62554 14.6079 5.59274 13.0023C4.32729 11.035 3.71464 8.72562 4.84158 6.01574Z',
  d8: 'M9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9Z',
  d9: 'M19 9.2C19 14.8 12 18 12 18C12 18 5 14.8 5 9.2C5 5.22355 8.13401 2 12 2C15.866 2 19 5.22355 19 9.2Z',
  d10: 'M5.31073 19.3832C5.23079 19.4289 5.16903 19.4691 5.12159 19.5033C5.13958 19.5163 5.15957 19.5302 5.18177 19.5449C5.46383 19.7322 5.93794 19.9396 6.61348 20.1293C7.95067 20.5048 9.85544 20.75 12 20.75C14.1446 20.75 16.0493 20.5048 17.3865 20.1293C18.0621 19.9396 18.5362 19.7322 18.8182 19.5449C18.8404 19.5302 18.8604 19.5163 18.8784 19.5033C18.831 19.4691 18.7692 19.4289 18.6893 19.3832C18.2898 19.1547 17.6479 18.9209 16.7804 18.7256L17.2196 16.7744C18.1811 16.9908 19.0391 17.2791 19.6824 17.6472C20.2542 17.9743 21 18.567 21 19.5037C21 20.3295 20.4136 20.8864 19.9244 21.2112C19.3968 21.5614 18.6994 21.838 17.9272 22.0548C16.3689 22.4924 14.2737 22.75 12 22.75C9.72629 22.75 7.63105 22.4924 6.07281 22.0548C5.30063 21.838 4.60317 21.5614 4.07559 21.2112C3.58644 20.8864 3 20.3295 3 19.5037C3 18.567 3.74579 17.9743 4.31758 17.6472C4.96092 17.2791 5.81894 16.9908 6.7804 16.7744L7.2196 18.7256C6.35214 18.9209 5.71016 19.1547 5.31073 19.3832Z',
  d11: 'M11.3562 18.5185C11.4576 18.5707 12 18.8247 12 18.8247C12 18.8247 12.5424 18.5707 12.6438 18.5185C12.8465 18.4143 13.1329 18.2604 13.4751 18.0583C14.1578 17.6552 15.0712 17.0554 15.9881 16.2694C17.7997 14.7167 19.75 12.3269 19.75 9.2C19.75 4.82939 16.3 1.25 12 1.25C7.70002 1.25 4.25 4.82939 4.25 9.2C4.25 12.3269 6.20032 14.7167 8.01191 16.2694C8.92884 17.0554 9.84219 17.6552 10.5249 18.0583C10.8671 18.2604 11.1535 18.4143 11.3562 18.5185ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z',
};

export const IconLocation04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-04-stroke-rounded IconLocation04StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-04-duotone-rounded IconLocation04DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-04-twotone-rounded IconLocation04TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-04-solid-rounded IconLocation04SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-04-bulk-rounded IconLocation04BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconLocation04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-04-stroke-sharp IconLocation04StrokeSharp"
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
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-04-solid-sharp IconLocation04SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLocation04: TheIconSelfPack = {
  name: 'Location04',
  StrokeRounded: IconLocation04StrokeRounded,
  DuotoneRounded: IconLocation04DuotoneRounded,
  TwotoneRounded: IconLocation04TwotoneRounded,
  SolidRounded: IconLocation04SolidRounded,
  BulkRounded: IconLocation04BulkRounded,
  StrokeSharp: IconLocation04StrokeSharp,
  SolidSharp: IconLocation04SolidSharp,
};