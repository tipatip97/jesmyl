import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8.43816 3.93226C10.1564 2.64409 11.0155 2 12 2C12.9845 2 13.8436 2.64409 15.5618 3.93226L19.004 6.51285C20.7222 7.80103 21.5814 8.44512 21.8856 9.41125C22.1898 10.3774 21.8616 11.4195 21.2053 13.5038L19.8905 17.6793C19.2342 19.7636 18.9061 20.8058 18.1096 21.4029C17.3132 22 16.2512 22 14.1274 22H9.87263C7.74876 22 6.68682 22 5.89037 21.4029C5.09392 20.8058 4.76576 19.7636 4.10945 17.6793L2.79467 13.5038C2.13835 11.4195 1.8102 10.3774 2.11441 9.41125C2.41863 8.44512 3.27776 7.80103 4.99601 6.51285L8.43816 3.93226Z',
  d2: 'M8.43816 3.93226C10.1564 2.64409 11.0155 2 12 2C12.9845 2 13.8436 2.64409 15.5618 3.93226L19.004 6.51285C20.7222 7.80103 21.5814 8.44512 21.8856 9.41125C22.1898 10.3774 21.8616 11.4195 21.2053 13.5038L19.8905 17.6793C19.2342 19.7636 18.9061 20.8058 18.1096 21.4029C17.3132 22 16.2512 22 14.1274 22H12H9.87263C7.74876 22 6.68682 22 5.89037 21.4029C5.09392 20.8058 4.76576 19.7636 4.10945 17.6793L2.79467 13.5038C2.13835 11.4195 1.8102 10.3774 2.11441 9.41125C2.41863 8.44512 3.27776 7.80103 4.99601 6.51285L8.43816 3.93226Z',
  d3: 'M12 2C11.0155 2 10.1564 2.64409 8.43816 3.93226L4.99601 6.51285C3.27776 7.80103 2.41863 8.44512 2.11441 9.41125C1.8102 10.3774 2.13835 11.4195 2.79467 13.5038L4.10945 17.6793C4.76576 19.7636 5.09392 20.8058 5.89037 21.4029C6.68682 22 7.74876 22 9.87263 22H12',
  d4: 'M10.1166 1.83507C10.7322 1.47636 11.3259 1.25 12 1.25C12.6741 1.25 13.2678 1.47636 13.8834 1.83507C14.4737 2.17911 15.1472 2.684 15.9755 3.30505L19.4895 5.93949L19.4895 5.9395C20.3184 6.56088 20.9917 7.06562 21.4908 7.53825C22.0118 8.03165 22.3971 8.53843 22.601 9.18599C22.8044 9.83219 22.7812 10.4722 22.6416 11.1828C22.5075 11.8658 22.2508 12.6807 21.9337 13.6877L20.5928 17.9464C20.2758 18.953 20.0192 19.7681 19.7385 20.4023C19.4467 21.0616 19.0991 21.5985 18.5595 22.003C18.018 22.409 17.4099 22.5867 16.7044 22.6702C16.0297 22.75 15.1962 22.75 14.1731 22.75H14.173H9.82698H9.82693C8.80382 22.75 7.97027 22.75 7.29555 22.6702C6.59007 22.5867 5.98204 22.409 5.44049 22.003C4.90093 21.5985 4.5533 21.0616 4.26152 20.4023C3.98083 19.7681 3.7242 18.953 3.40725 17.9464L2.06625 13.6877C1.74916 12.6807 1.49253 11.8658 1.3584 11.1828C1.21885 10.4722 1.19556 9.8322 1.39904 9.18599C1.60294 8.53843 1.98824 8.03165 2.50924 7.53825C3.00833 7.06561 3.68162 6.56086 4.5105 5.93947L8.02448 3.30503C8.85283 2.684 9.52625 2.17911 10.1166 1.83507Z',
  d5: 'M10.1166 1.83507C10.7322 1.47636 11.3259 1.25 12 1.25C12.6741 1.25 13.2678 1.47636 13.8834 1.83507C14.4737 2.17911 15.1472 2.684 15.9755 3.30505L18.6109 5.28075L4.03912 19.8525C3.83876 19.3169 3.63915 18.6829 3.40725 17.9464L2.06625 13.6877C1.74916 12.6807 1.49253 11.8658 1.3584 11.1828C1.21885 10.4722 1.19556 9.8322 1.39904 9.18599C1.60294 8.53843 1.98824 8.03165 2.50924 7.53825C3.00833 7.06561 3.68162 6.56086 4.5105 5.93947L8.02448 3.30503C8.85283 2.684 9.52625 2.17911 10.1166 1.83507Z',
  d6: 'M19.4895 5.94C20.3183 6.56138 20.9916 7.06612 21.4907 7.53876C22.0117 8.03215 22.397 8.53893 22.6009 9.18649C22.8044 9.8327 22.7811 10.4727 22.6415 11.1833C22.5074 11.8663 22.2508 12.6812 21.9337 13.6882L20.5927 17.9469C20.2757 18.9535 20.0191 19.7686 19.7384 20.4028C19.4466 21.0622 19.099 21.599 18.5595 22.0035C18.0179 22.4095 17.4099 22.5872 16.7044 22.6707C16.0297 22.7505 15.1961 22.7505 14.173 22.7505H14.173H9.82692H9.82687C8.80376 22.7505 7.97021 22.7505 7.29549 22.6707C6.59001 22.5872 5.98198 22.4095 5.44043 22.0035C4.90087 21.599 4.55324 21.0622 4.26146 20.4028C4.18614 20.2326 4.11255 20.0494 4.03906 19.853L18.6108 5.28125L19.4895 5.93999L19.4895 5.94Z',
  d7: 'M5 21.9998H19L22 10.0002L12 2L2 9.99977L5 21.9998Z',
  d8: 'M11.5315 1.41434C11.8054 1.19521 12.1946 1.19522 12.4686 1.41436L22.4686 9.41459C22.6976 9.59779 22.7988 9.89764 22.7276 10.1821L19.7276 22.1817C19.6442 22.5155 19.3442 22.7498 19 22.7498H5.00003C4.65588 22.7498 4.35589 22.5155 4.27242 22.1817L1.27242 10.1817C1.2013 9.89717 1.30252 9.59731 1.53152 9.41411L11.5315 1.41434Z',
};

export const IconPentagon01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pentagon-01-stroke-rounded IconPentagon01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPentagon01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pentagon-01-duotone-rounded IconPentagon01DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconPentagon01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pentagon-01-twotone-rounded IconPentagon01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPentagon01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pentagon-01-solid-rounded IconPentagon01SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPentagon01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pentagon-01-bulk-rounded IconPentagon01BulkRounded"
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

export const IconPentagon01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pentagon-01-stroke-sharp IconPentagon01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPentagon01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pentagon-01-solid-sharp IconPentagon01SolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPentagon01: TheIconSelfPack = {
  name: 'Pentagon01',
  StrokeRounded: IconPentagon01StrokeRounded,
  DuotoneRounded: IconPentagon01DuotoneRounded,
  TwotoneRounded: IconPentagon01TwotoneRounded,
  SolidRounded: IconPentagon01SolidRounded,
  BulkRounded: IconPentagon01BulkRounded,
  StrokeSharp: IconPentagon01StrokeSharp,
  SolidSharp: IconPentagon01SolidSharp,
};