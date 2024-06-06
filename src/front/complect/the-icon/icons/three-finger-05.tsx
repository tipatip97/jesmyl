import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.8101 5.70939C12.9539 4.89355 12.4092 4.11556 11.5933 3.97171C10.7775 3.82786 9.99949 4.37261 9.85564 5.18845L9.07422 9.62008L8.14704 14.6982L5.88875 12.3369C5.17559 11.6238 4.00086 11.6888 3.37081 12.4764C2.88873 13.079 2.87541 13.9314 3.33844 14.5488L6.35188 18.5667C7.03576 19.4786 7.3777 19.9345 7.7892 20.2889C8.41699 20.8295 9.16928 21.2056 9.97845 21.3835C10.5088 21.5001 11.0787 21.5001 12.2185 21.5001H14.7006C17.043 21.5001 19.0715 19.8739 19.5809 17.5875L20.8919 11.7039L20.9787 11.2115C21.1226 10.3956 20.5778 9.61763 19.762 9.47377C18.9462 9.32992 18.1682 9.87467 18.0243 10.6905M12.8101 5.70939L13.1574 3.73978C13.3012 2.92394 14.0792 2.37918 14.895 2.52304C15.7109 2.66689 16.2556 3.44488 16.1118 4.26072L15.7645 6.23034M12.8101 5.70939L12.0286 10.141M15.7645 6.23034L14.9831 10.662M15.7645 6.23034C15.9083 5.4145 16.6863 4.86974 17.5022 5.0136C18.318 5.15745 18.8628 5.93544 18.7189 6.75128L18.0243 10.6905M18.0243 10.6905L17.9375 11.1829',
  d2: 'M9.85564 5.18845L9.07422 9.62008L8.14704 14.6982L5.88875 12.3369C5.17559 11.6238 4.00086 11.6888 3.37081 12.4764C2.88873 13.079 2.87541 13.9314 3.33844 14.5488L6.35188 18.5667C7.03576 19.4786 7.3777 19.9345 7.7892 20.2889C8.41699 20.8295 9.16928 21.2056 9.97845 21.3835C10.5088 21.5001 11.0787 21.5001 12.2185 21.5001H14.7006C17.043 21.5001 19.0715 19.8739 19.5809 17.5875L20.8919 11.7039L20.9787 11.2115C21.1226 10.3956 20.5778 9.61763 19.762 9.47377C18.9462 9.32992 18.1682 9.87467 18.0243 10.6905L18.7189 6.75128C18.8628 5.93544 18.318 5.15745 17.5022 5.0136C16.6863 4.86974 15.9083 5.4145 15.7645 6.23034L16.1118 4.26072C16.2556 3.44488 15.7109 2.66689 14.895 2.52304C14.0792 2.37918 13.3012 2.92394 13.1574 3.73978L12.8101 5.70939C12.9539 4.89355 12.4092 4.11556 11.5933 3.97171C10.7775 3.82786 9.99949 4.37261 9.85564 5.18845Z',
  d3: 'M12.8101 5.70939C12.9539 4.89355 12.4092 4.11556 11.5933 3.97171C10.7775 3.82786 9.99949 4.37261 9.85564 5.18845L9.07422 9.62008L8.14704 14.6982L5.88875 12.3369C5.17559 11.6238 4.00086 11.6888 3.37081 12.4764C2.88873 13.079 2.87541 13.9314 3.33844 14.5488L6.35188 18.5667C7.03576 19.4786 7.3777 19.9345 7.7892 20.2889C8.41699 20.8295 9.16928 21.2056 9.97845 21.3835C10.5088 21.5001 11.0787 21.5001 12.2185 21.5001H14.7006C15.5232 21.5001 16.307 21.2995 17 20.9403M12.8101 5.70939L13.1574 3.73978C13.3012 2.92394 14.0792 2.37918 14.895 2.52304C15.7109 2.66689 16.2556 3.44488 16.1118 4.26072L15.7645 6.23034L14.9831 10.662M12.8101 5.70939L12.0286 10.141',
  d4: 'M15.1978 1.76941C14.5061 1.64822 13.8466 2.10715 13.7246 2.79447L12.4488 9.98491C12.4082 10.214 12.1883 10.367 11.9578 10.3266C11.7273 10.2862 11.5733 10.0677 11.614 9.83862L12.4972 4.86062C12.6192 4.1733 12.1574 3.51788 11.4657 3.39668C10.7741 3.27549 10.1146 3.73443 9.99264 4.42174L8.06093 15.1065C8.03232 15.2622 7.91826 15.3889 7.76567 15.4343C7.61308 15.4798 7.44772 15.4364 7.33762 15.322L4.7885 12.6732C4.16073 12.0529 3.12967 12.1107 2.57625 12.7982C2.1521 13.3251 2.14038 14.0704 2.54777 14.6102L5.95393 19.1235C6.73831 20.1628 7.09402 20.6303 7.51606 20.9915C8.17245 21.5532 8.959 21.9441 9.80503 22.1289C10.349 22.2477 10.9388 22.25 12.2461 22.25H15.0516C17.5007 22.25 19.6216 20.5603 20.1542 18.1847L21.7305 11.041C21.8524 10.3537 21.3906 9.69828 20.699 9.57708C20.0074 9.45589 19.3478 9.91483 19.2259 10.6021L19.1277 11.1553C19.0871 11.3844 18.8672 11.5373 18.6367 11.4969C18.4062 11.4565 18.2522 11.2381 18.2929 11.009L19.1761 6.03096C19.2981 5.34365 18.8363 4.68822 18.1447 4.56702C17.4531 4.44585 16.7937 4.90461 16.6716 5.59174L15.7883 10.5701C15.7476 10.7992 15.5278 10.9522 15.2973 10.9118C15.0667 10.8714 14.9128 10.6529 14.9534 10.4238L16.2292 3.23335C16.3512 2.54603 15.8894 1.8906 15.1978 1.76941Z',
  d5: 'M12.8101 5.70939C12.9539 4.89355 12.4092 4.11556 11.5933 3.97171C10.7775 3.82786 9.99949 4.37261 9.85564 5.18845L9.07422 9.62008L8.14704 14.6982L5.88875 12.3369C5.17559 11.6238 4.00086 11.6888 3.37081 12.4764C2.88873 13.079 2.87541 13.9314 3.33844 14.5488L7.87429 20.0459C8.63416 20.9668 9.76565 21.5001 10.9596 21.5001H15.696C17.6138 21.5001 19.2618 20.1389 19.624 18.2555L20.9787 11.2115C21.1226 10.3956 20.5778 9.61763 19.762 9.47377C18.9462 9.32992 18.1682 9.87467 18.0243 10.6905M12.8101 5.70939L13.1574 3.73978C13.3012 2.92394 14.0792 2.37918 14.895 2.52304C15.7109 2.66689 16.2556 3.44488 16.1118 4.26072L15.7645 6.23034M12.8101 5.70939L12.0286 10.141M15.7645 6.23034L14.9831 10.662M15.7645 6.23034C15.9083 5.4145 16.6863 4.86974 17.5022 5.0136C18.318 5.15745 18.8628 5.93544 18.7189 6.75128L18.0243 10.6905M18.0243 10.6905L17.9375 11.1829',
  d6: 'M15.1934 1.76991C14.4885 1.64636 13.8162 2.11421 13.6919 2.81489L12.4198 9.98568L11.6428 9.84951L12.5235 4.88512C12.6478 4.18445 12.1771 3.51628 11.4722 3.39274C10.7672 3.26919 10.095 3.73704 9.97069 4.43771L9.08958 9.40445L7.90575 15.8489L4.82943 12.6518C4.19162 12.0213 3.14384 12.08 2.58149 12.7787C2.15232 13.3118 2.13873 14.0652 2.54739 14.6132L7.65339 20.7636C8.43486 21.705 9.59854 22.2501 10.8264 22.2501H16.1646C18.137 22.2501 19.8318 20.8587 20.2043 18.9335L21.7306 11.0459C21.8532 10.3462 21.3828 9.67964 20.6787 9.55625C19.9738 9.4327 19.3015 9.90055 19.1772 10.6012L19.0794 11.1528L18.3024 11.0167L19.1831 6.05226C19.3074 5.35159 18.8367 4.68343 18.1318 4.55988C17.4269 4.43635 16.7548 4.90403 16.6304 5.60451L15.7496 10.5693L14.9726 10.4331L16.2448 3.26229C16.3691 2.56162 15.8984 1.89346 15.1934 1.76991Z',
};

export const IconThreeFinger05StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="three-finger-05-stroke-rounded IconThreeFinger05StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconThreeFinger05DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="three-finger-05-duotone-rounded IconThreeFinger05DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconThreeFinger05TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="three-finger-05-twotone-rounded IconThreeFinger05TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconThreeFinger05SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="three-finger-05-solid-rounded IconThreeFinger05SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconThreeFinger05BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="three-finger-05-bulk-rounded IconThreeFinger05BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconThreeFinger05StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="three-finger-05-stroke-sharp IconThreeFinger05StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconThreeFinger05SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="three-finger-05-solid-sharp IconThreeFinger05SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfThreeFinger05: TheIconSelfPack = {
  name: 'ThreeFinger05',
  StrokeRounded: IconThreeFinger05StrokeRounded,
  DuotoneRounded: IconThreeFinger05DuotoneRounded,
  TwotoneRounded: IconThreeFinger05TwotoneRounded,
  SolidRounded: IconThreeFinger05SolidRounded,
  BulkRounded: IconThreeFinger05BulkRounded,
  StrokeSharp: IconThreeFinger05StrokeSharp,
  SolidSharp: IconThreeFinger05SolidSharp,
};