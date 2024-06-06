import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.4608 5.70939C12.6047 4.89355 12.0599 4.11556 11.2441 3.97171C10.4282 3.82786 9.65023 4.37261 9.50637 5.18845L8.11719 13.0669L7.91449 14.4124L5.88875 12.3369C5.17559 11.6237 4.00086 11.6888 3.37081 12.4763C2.88873 13.0789 2.87541 13.9314 3.33844 14.5487L6.35188 18.5667C7.03576 19.4785 7.3777 19.9344 7.7892 20.2888C8.41699 20.8294 9.16928 21.2056 9.97845 21.3834C10.5088 21.5 11.0787 21.5 12.2185 21.5H14.5582C16.9648 21.5 19.0301 19.7855 19.4728 17.4199L20.5427 11.7039L20.9768 9.24184C21.1206 8.426 20.5759 7.64801 19.76 7.50416C18.9442 7.3603 18.1662 7.90506 18.0223 8.7209M12.4608 5.70939L12.8081 3.73978C12.9519 2.92394 13.7299 2.37918 14.5458 2.52304C15.3616 2.66689 15.9064 3.44488 15.7625 4.26072L15.4152 6.23034M12.4608 5.70939L11.6794 10.141M15.4152 6.23034L14.6338 10.662M15.4152 6.23034C15.5591 5.4145 16.3371 4.86974 17.1529 5.0136C17.9687 5.15745 18.5135 5.93544 18.3696 6.75128L18.0223 8.7209M18.0223 8.7209L17.5882 11.1829',
  d2: 'M6.35188 18.5667L3.33844 14.5487C2.87541 13.9314 2.88873 13.0789 3.37081 12.4763C4.00086 11.6888 5.17559 11.6237 5.88875 12.3369L7.91449 14.4124L8.11719 13.0669L9.50637 5.18845C9.65023 4.37261 10.4282 3.82786 11.2441 3.97171C12.0599 4.11556 12.6047 4.89355 12.4608 5.70939L12.8081 3.73978C12.9519 2.92394 13.7299 2.37918 14.5458 2.52304C15.3616 2.66689 15.9064 3.44488 15.7625 4.26072L15.4152 6.23034C15.5591 5.4145 16.3371 4.86974 17.1529 5.0136C17.9687 5.15745 18.5135 5.93544 18.3696 6.75128L18.0223 8.7209C18.1662 7.90506 18.9442 7.3603 19.76 7.50416C20.5759 7.64801 21.1206 8.426 20.9768 9.24184L20.5427 11.7039L19.4728 17.4199C19.0301 19.7855 16.9648 21.5 14.5582 21.5H12.2185C11.0787 21.5 10.5088 21.5 9.97845 21.3834C9.16928 21.2056 8.41699 20.8294 7.7892 20.2888C7.3777 19.9344 7.03576 19.4785 6.35188 18.5667Z',
  d3: 'M12.4608 5.70939C12.6047 4.89355 12.0599 4.11556 11.2441 3.97171C10.4282 3.82786 9.65023 4.37261 9.50637 5.18845L8.11719 13.0669L7.91449 14.4124L5.88875 12.3369C5.17559 11.6237 4.00086 11.6888 3.37081 12.4763C2.88873 13.0789 2.87541 13.9314 3.33844 14.5487L6.35188 18.5667C7.03576 19.4785 7.3777 19.9344 7.7892 20.2888C8.41699 20.8294 9.16928 21.2056 9.97845 21.3834C10.5088 21.5 11.0787 21.5 12.2185 21.5H14.5582C15.4387 21.5 16.2736 21.2705 17 20.8635M12.4608 5.70939L12.8081 3.73978C12.9519 2.92394 13.7299 2.37918 14.5458 2.52304C15.3616 2.66689 15.9064 3.44488 15.7625 4.26072L15.4152 6.23034L14.6338 10.662M12.4608 5.70939L11.6794 10.141',
  d4: 'M14.8044 1.76941C14.1127 1.64822 13.4531 2.10715 13.3311 2.79447L12.0552 9.98494C12.0145 10.2141 11.7947 10.367 11.5641 10.3266C11.3335 10.2862 11.1796 10.0678 11.2202 9.83865L12.1036 4.86063C12.2255 4.17331 11.7637 3.51788 11.072 3.39669C10.3803 3.2755 9.72066 3.73443 9.5987 4.42175L7.80087 14.7725C7.77689 14.9306 7.6649 15.0616 7.51175 15.1107C7.3586 15.1598 7.1907 15.1184 7.0783 15.004L4.79022 12.6745C4.16252 12.0528 3.13019 12.1102 2.57629 12.7982C2.15209 13.3251 2.14037 14.0704 2.5478 14.6102L5.95435 19.1235C6.73882 20.1628 7.09457 20.6303 7.51666 20.9915C8.17312 21.5532 8.95977 21.9441 9.80589 22.1289C10.3499 22.2477 10.9398 22.25 12.2472 22.25H14.892C17.4086 22.25 19.5681 20.4685 20.0311 18.0105L21.2397 11.5942L21.7305 8.8286C21.8524 8.14128 21.3906 7.48585 20.6989 7.36466C20.0072 7.24347 19.3476 7.7024 19.2256 8.38972L18.7348 11.1553C18.6942 11.3844 18.4743 11.5374 18.2437 11.497C18.0132 11.4566 17.8592 11.2381 17.8999 11.009L18.7832 6.03098C18.9052 5.34366 18.4433 4.68823 17.7516 4.56703C17.0599 4.44584 16.4003 4.90478 16.2784 5.5921L15.395 10.5701C15.3544 10.7992 15.1345 10.9522 14.9039 10.9118C14.6733 10.8714 14.5194 10.6529 14.5601 10.4238L15.836 3.23335C15.958 2.54603 15.4961 1.8906 14.8044 1.76941Z',
  d5: 'M14.8012 1.76979C14.0962 1.64624 13.4238 2.11409 13.2995 2.81477L12.0273 9.98559L11.2502 9.84942L12.131 4.88501C12.2553 4.18433 11.7846 3.51617 11.0795 3.39262C10.3745 3.26907 9.7022 3.73693 9.57788 4.4376L8.01287 13.2584L7.66693 15.5406L4.83106 12.653C4.1933 12.021 3.14434 12.0793 2.58152 12.7785C2.15052 13.3139 2.13861 14.0713 2.55258 14.6199L5.94928 19.1208C6.73072 20.1563 7.08749 20.6255 7.51123 20.9882C8.16933 21.5514 8.95794 21.9432 9.80618 22.1285C10.3523 22.2479 10.9441 22.25 12.2465 22.25H14.8836C17.4065 22.25 19.5715 20.4638 20.0356 17.9993L21.2408 11.6001L21.2415 11.5961L21.7301 8.84214C21.8544 8.14146 21.3836 7.4733 20.6786 7.34975C19.9736 7.2262 19.3013 7.69405 19.177 8.39473L18.6876 11.1527L17.9106 11.0166L18.7914 6.05215C18.9157 5.35148 18.4449 4.68332 17.7399 4.55977C17.0349 4.43622 16.3626 4.90407 16.2382 5.60475L15.3574 10.5692L14.5804 10.433L15.8527 3.26217C15.977 2.5615 15.5062 1.89333 14.8012 1.76979Z',
};

export const IconHold05StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-05-stroke-rounded IconHold05StrokeRounded"
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

export const IconHold05DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-05-duotone-rounded IconHold05DuotoneRounded"
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

export const IconHold05TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-05-twotone-rounded IconHold05TwotoneRounded"
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

export const IconHold05SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-05-solid-rounded IconHold05SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHold05BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-05-bulk-rounded IconHold05BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHold05StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-05-stroke-sharp IconHold05StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHold05SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-05-solid-sharp IconHold05SolidSharp"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHold05: TheIconSelfPack = {
  name: 'Hold05',
  StrokeRounded: IconHold05StrokeRounded,
  DuotoneRounded: IconHold05DuotoneRounded,
  TwotoneRounded: IconHold05TwotoneRounded,
  SolidRounded: IconHold05SolidRounded,
  BulkRounded: IconHold05BulkRounded,
  StrokeSharp: IconHold05StrokeSharp,
  SolidSharp: IconHold05SolidSharp,
};