import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 4H6.23456C3.79424 4 2.57407 4 2.14438 4.76649C2.13129 4.78984 2.11883 4.81353 2.10701 4.83754C1.71893 5.62592 2.41032 6.63129 3.7931 8.64204C4.89612 10.246 5.44763 11.048 5.4611 11.9555C5.46154 11.9852 5.46154 12.0148 5.4611 12.0445C5.44763 12.952 4.89612 13.754 3.7931 15.358C2.41032 17.3687 1.71893 18.3741 2.10701 19.1625C2.11883 19.1865 2.13129 19.2102 2.14438 19.2335C2.57407 20 3.79424 20 6.23456 20H13C14.9628 20 15.9443 20 16.7889 19.5777C17.6334 19.1554 18.2223 18.3703 19.4 16.8C21.1333 14.4889 22 13.3333 22 12C22 10.6667 21.1333 9.51111 19.4 7.2C18.2223 5.62972 17.6334 4.84458 16.7889 4.42229C15.9443 4 14.9628 4 13 4Z',
  d2: 'M12 4H13C14.9628 4 15.9443 4 16.7889 4.42229C17.6334 4.84458 18.2223 5.62972 19.4 7.2C21.1333 9.51111 22 10.6667 22 12C22 13.3333 21.1333 14.4889 19.4 16.8C18.2223 18.3703 17.6334 19.1554 16.7889 19.5777C15.9443 20 14.9628 20 13 20H12',
  d3: 'M12 4H6.23456C3.79424 4 2.57407 4 2.14438 4.76649C2.13129 4.78984 2.11883 4.81353 2.10701 4.83754C1.71893 5.62592 2.41032 6.63129 3.7931 8.64204C4.89612 10.246 5.44763 11.048 5.4611 11.9555C5.46154 11.9852 5.46154 12.0148 5.4611 12.0445C5.44763 12.952 4.89612 13.754 3.7931 15.358C2.41032 17.3687 1.71893 18.3741 2.10701 19.1625C2.11883 19.1865 2.13129 19.2102 2.14438 19.2335C2.57407 20 3.79424 20 6.23456 20H12',
  d4: 'M13.189 3.25004C14.9682 3.24944 16.1193 3.24905 17.1243 3.75155C18.1293 4.25406 18.8196 5.17511 19.8866 6.59888C20.7295 7.72262 21.5428 8.80708 21.9982 9.58945C22.4686 10.3976 22.75 11.1523 22.75 12.0001C22.75 12.8479 22.4686 13.6026 21.9982 14.4107C21.5428 15.1931 20.7295 16.2775 19.8866 17.4013C18.8196 18.825 18.1293 19.7461 17.1243 20.2486C16.1193 20.7511 14.9682 20.7507 13.189 20.7501L6.17217 20.7501H6.17211C5.00504 20.7501 4.04582 20.7501 3.32833 20.6466C2.59985 20.5414 1.82556 20.192 1.43411 19.4938C1.08058 18.7756 1.28748 18.0462 1.61363 17.3863C1.93486 16.7365 2.51377 15.8947 3.17512 14.9331C3.73584 14.1177 4.12181 13.5546 4.37556 13.0842C4.62075 12.6295 4.70687 12.3233 4.71117 12.0335C4.70687 11.7436 4.62075 11.3707 4.37556 10.916C4.12181 10.4455 3.73584 9.88247 3.17512 9.0671C2.51376 8.10546 1.93486 7.26371 1.61363 6.61382C1.28748 5.95399 1.08058 5.22459 1.43411 4.50639C1.82556 3.80813 2.59985 3.45874 3.32834 3.35359C4.04584 3.25002 5.00509 3.25005 6.17219 3.25008L13 3.25008L13.189 3.25004Z',
  d5: 'M17 4H2.00007L7.00004 12.0001L2 20.0002H17L22.0001 12L17 4Z',
  d6: 'M1.34409 3.63642C1.47626 3.39796 1.72743 3.25 2.00008 3.25H17C17.2586 3.25 17.4989 3.38321 17.636 3.6025L22.6361 11.6025C22.7881 11.8457 22.7881 12.1543 22.6361 12.3975L17.636 20.3977C17.4989 20.617 17.2586 20.7502 17 20.7502H2C1.72736 20.7502 1.47619 20.6022 1.34402 20.3638C1.21185 20.1253 1.2195 19.8339 1.364 19.6027L6.1156 12.0001L1.36407 4.39749C1.21957 4.16629 1.21193 3.87489 1.34409 3.63642Z',
} as const;

export const IconLabelImportantStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="label-important-stroke-rounded IconLabelImportantStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLabelImportantDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="label-important-duotone-rounded IconLabelImportantDuotoneRounded"
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

export const IconLabelImportantTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="label-important-twotone-rounded IconLabelImportantTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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

export const IconLabelImportantSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="label-important-solid-rounded IconLabelImportantSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLabelImportantBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="label-important-bulk-rounded IconLabelImportantBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLabelImportantStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="label-important-stroke-sharp IconLabelImportantStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLabelImportantSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="label-important-solid-sharp IconLabelImportantSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLabelImportant: TheIconSelfPack = {
  name: 'LabelImportant',
  StrokeRounded: IconLabelImportantStrokeRounded,
  DuotoneRounded: IconLabelImportantDuotoneRounded,
  TwotoneRounded: IconLabelImportantTwotoneRounded,
  SolidRounded: IconLabelImportantSolidRounded,
  BulkRounded: IconLabelImportantBulkRounded,
  StrokeSharp: IconLabelImportantStrokeSharp,
  SolidSharp: IconLabelImportantSolidSharp,
};