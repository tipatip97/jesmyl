import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.4626 3.99352C16.7809 2.3486 14.4404 3.01148 13.0344 4.06738C12.4578 4.50033 12.1696 4.7168 12 4.7168C11.8304 4.7168 11.5422 4.50033 10.9656 4.06738C9.55962 3.01148 7.21909 2.3486 4.53744 3.99352C1.01807 6.1523 0.221719 13.2742 8.33953 19.2827C9.88572 20.4272 10.6588 20.9994 12 20.9994C13.3412 20.9994 14.1143 20.4272 15.6605 19.2827C23.7783 13.2742 22.9819 6.1523 19.4626 3.99352Z',
  d2: 'M12 9V15M9 12L15 12',
  d3: 'M19.4626 3.99352C16.7809 2.3486 14.4404 3.01148 13.0344 4.06738C12.4578 4.50033 12.1696 4.7168 12 4.7168C11.8304 4.7168 11.5422 4.50033 10.9656 4.06738C9.55962 3.01148 7.21908 2.3486 4.53744 3.99352C1.01807 6.1523 0.221718 13.2742 8.33953 19.2827C9.88572 20.4272 10.6588 20.9994 12 20.9994C13.3412 20.9994 14.1143 20.4272 15.6605 19.2827C23.7783 13.2742 22.9819 6.1523 19.4626 3.99352Z',
  d4: 'M12.5846 3.46861C14.2001 2.25537 16.8743 1.52662 19.8553 3.35515C21.9165 4.61952 23.0764 7.2606 22.6694 10.2951C22.2604 13.3443 20.2869 16.7929 16.1073 19.8865C14.6559 20.9614 13.5906 21.7503 12.0006 21.7503C10.4105 21.7503 9.34529 20.9614 7.89392 19.8865C3.71432 16.7929 1.74073 13.3443 1.33179 10.2951C0.924801 7.2606 2.08463 4.61952 4.14587 3.35515C7.12685 1.52662 9.80108 2.25537 11.4166 3.46861C11.6824 3.6682 11.8648 3.8048 12.0006 3.89704C12.1364 3.8048 12.3188 3.6682 12.5846 3.46861ZM11.0002 9C11.0002 8.44772 11.4479 8 12.0002 8C12.5525 8 13.0002 8.44772 13.0002 9L13.0002 11H15.0002C15.5525 11 16.0002 11.4477 16.0002 12C16.0002 12.5523 15.5525 13 15.0002 13H13.0002V15C13.0002 15.5523 12.5525 16 12.0002 16C11.4479 16 11.0002 15.5523 11.0002 15V13H9.0002C8.44791 13 8.0002 12.5523 8.0002 12C8.0002 11.4477 8.44791 11 9.0002 11H11.0002L11.0002 9Z',
  d5: 'M19.8551 3.35515C16.8741 1.52662 14.1999 2.25537 12.5844 3.46861C12.3186 3.6682 12.1362 3.8048 12.0004 3.89704C11.8646 3.8048 11.6822 3.6682 11.4164 3.46861C9.80088 2.25537 7.12665 1.52662 4.14567 3.35515C2.08443 4.61952 0.924601 7.2606 1.33158 10.2951C1.74053 13.3443 3.71412 16.7929 7.89372 19.8865C9.34509 20.9614 10.4103 21.7503 12.0004 21.7503C13.5904 21.7503 14.6557 20.9614 16.1071 19.8865C20.2867 16.7929 22.2602 13.3443 22.6692 10.2951C23.0762 7.2606 21.9163 4.61952 19.8551 3.35515Z',
  d6: 'M12 8C11.4477 8 11 8.44772 11 9V11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H11V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H13V9C13 8.44772 12.5523 8 12 8Z',
  d7: 'M18.8578 3.74469C14.8661 1.60383 12 4.7597 12 4.7597C12 4.7597 9.1338 1.60382 5.14211 3.74468C0.307394 6.33768 -0.039777 16.492 12 21C24.0399 16.492 23.6926 6.33769 18.8578 3.74469Z',
  d8: 'M12 9V12M12 12V15M12 12H9M12 12L15 12',
  d9: 'M11.9998 3.74382L11.9555 3.70846C11.586 3.4164 11.0463 3.0509 10.3634 2.75876C8.97763 2.16592 7.01942 1.88758 4.7874 3.08156C2.00488 4.57003 0.639297 8.13312 1.51321 11.8026C2.39718 15.5144 5.53805 19.3369 11.7368 21.6518L11.9998 21.75L12.2628 21.6518C18.4616 19.3369 21.6024 15.5144 22.4864 11.8026C23.3602 8.13312 21.9946 4.57004 19.2121 3.08157C16.9801 1.88759 15.0219 2.16593 13.6362 2.75876C12.9533 3.05091 12.4136 3.41641 12.0442 3.70847L11.9998 3.74382ZM11.001 8V11H8.00098V13H11.001V16H13.001V13H16.001V11H13.001V8H11.001Z',
};

export const IconHealthStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="health-stroke-rounded IconHealthStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconHealthDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="health-duotone-rounded IconHealthDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHealthTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="health-twotone-rounded IconHealthTwotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHealthSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="health-solid-rounded IconHealthSolidRounded"
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

export const IconHealthBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="health-bulk-rounded IconHealthBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconHealthStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="health-stroke-sharp IconHealthStrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconHealthSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="health-solid-sharp IconHealthSolidSharp"
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

export const iconPackOfHealth: TheIconSelfPack = {
  name: 'Health',
  StrokeRounded: IconHealthStrokeRounded,
  DuotoneRounded: IconHealthDuotoneRounded,
  TwotoneRounded: IconHealthTwotoneRounded,
  SolidRounded: IconHealthSolidRounded,
  BulkRounded: IconHealthBulkRounded,
  StrokeSharp: IconHealthStrokeSharp,
  SolidSharp: IconHealthSolidSharp,
};