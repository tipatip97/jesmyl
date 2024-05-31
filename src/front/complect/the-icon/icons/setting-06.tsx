import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.7906 9.15201C21.5969 10.5418 22 11.2366 22 12C22 12.7634 21.5969 13.4582 20.7906 14.848L18.8669 18.1638C18.0638 19.548 17.6623 20.2402 17.0019 20.6201C16.3416 21 15.5402 21 13.9373 21L10.0627 21C8.45982 21 7.6584 21 6.99807 20.6201C6.33774 20.2402 5.93619 19.548 5.13311 18.1638L3.20942 14.848C2.40314 13.4582 2 12.7634 2 12C2 11.2366 2.40314 10.5418 3.20942 9.152L5.13311 5.83621C5.93619 4.45196 6.33774 3.75984 6.99807 3.37992C7.6584 3 8.45982 3 10.0627 3L13.9373 3C15.5402 3 16.3416 3 17.0019 3.37992C17.6623 3.75984 18.0638 4.45197 18.8669 5.83622L20.7906 9.15201Z',
  d2: 'M9 8L15 16',
  d3: 'M15.8964 2.30109C15.3763 2.24998 14.7443 2.24999 13.9741 2.25H13.9741L10.0259 2.25H10.0259C9.25571 2.24999 8.62365 2.24998 8.10357 2.30109C7.55891 2.35461 7.07864 2.46829 6.62404 2.72984C6.16937 2.99144 5.82995 3.34942 5.51044 3.79326C5.20544 4.21693 4.88869 4.76293 4.50285 5.42801L2.54214 8.80762L2.54214 8.80762C2.15475 9.47532 1.83673 10.0235 1.61974 10.5002C1.39243 10.9996 1.25 11.4737 1.25 12C1.25 12.5263 1.39243 13.0004 1.61974 13.4998C1.83673 13.9766 2.15475 14.5247 2.54214 15.1924L4.50282 18.5719C4.88867 19.237 5.20543 19.7831 5.51044 20.2067C5.82995 20.6506 6.16937 21.0086 6.62404 21.2702C7.07864 21.5317 7.55891 21.6454 8.10357 21.6989C8.62366 21.75 9.25573 21.75 10.026 21.75L13.974 21.75C14.7443 21.75 15.3763 21.75 15.8964 21.6989C16.4411 21.6454 16.9214 21.5317 17.376 21.2702C17.8306 21.0086 18.17 20.6506 18.4896 20.2067C18.7945 19.7831 19.1113 19.2371 19.4971 18.5721L19.4971 18.572L21.4579 15.1924L21.4579 15.1923C21.8453 14.5246 22.1633 13.9765 22.3803 13.4998C22.6076 13.0004 22.75 12.5263 22.75 12C22.75 11.4737 22.6076 10.9996 22.3803 10.5002C22.1633 10.0235 21.8453 9.47535 21.4579 8.80767L19.4972 5.42801C19.1113 4.76293 18.7946 4.21694 18.4896 3.79326C18.1701 3.34942 17.8306 2.99144 17.376 2.72984C16.9214 2.46829 16.4411 2.35461 15.8964 2.30109ZM9.80006 7.40006C9.46869 6.95823 8.84189 6.86869 8.40006 7.20006C7.95823 7.53143 7.86869 8.15823 8.20006 8.60006L14.2001 16.6001C14.5314 17.0419 15.1582 17.1314 15.6001 16.8001C16.0419 16.4687 16.1314 15.8419 15.8001 15.4001L9.80006 7.40006Z',
  d4: 'M13.9741 2.25C14.7443 2.24999 15.3763 2.24998 15.8964 2.30109C16.4411 2.35461 16.9214 2.46829 17.376 2.72984C17.8306 2.99144 18.1701 3.34942 18.4896 3.79326C18.7946 4.21694 19.1113 4.76293 19.4972 5.42801L21.4579 8.80767C21.8453 9.47535 22.1633 10.0235 22.3803 10.5002C22.6076 10.9996 22.75 11.4737 22.75 12C22.75 12.5263 22.6076 13.0004 22.3803 13.4998C22.1633 13.9765 21.8453 14.5246 21.4579 15.1923L21.4579 15.1924L19.4971 18.572L19.4971 18.5721C19.1113 19.2371 18.7945 19.7831 18.4896 20.2067C18.17 20.6506 17.8306 21.0086 17.376 21.2702C16.9214 21.5317 16.4411 21.6454 15.8964 21.6989C15.3763 21.75 14.7443 21.75 13.974 21.75L10.026 21.75C9.25573 21.75 8.62366 21.75 8.10357 21.6989C7.55891 21.6454 7.07864 21.5317 6.62404 21.2702C6.16937 21.0086 5.82995 20.6506 5.51044 20.2067C5.20543 19.7831 4.88867 19.237 4.50282 18.5719L2.54214 15.1924C2.15475 14.5247 1.83673 13.9766 1.61974 13.4998C1.39243 13.0004 1.25 12.5263 1.25 12C1.25 11.4737 1.39243 10.9996 1.61974 10.5002C1.83673 10.0235 2.15475 9.47532 2.54214 8.80762L2.54214 8.80762L4.50285 5.42801C4.88869 4.76293 5.20544 4.21693 5.51044 3.79326C5.82995 3.34942 6.16937 2.99144 6.62404 2.72984C7.07864 2.46829 7.55891 2.35461 8.10357 2.30109C8.62365 2.24998 9.25571 2.24999 10.0259 2.25H10.0259H13.9741H13.9741Z',
  d5: 'M8.40006 7.20006C8.84189 6.86869 9.46869 6.95823 9.80006 7.40006L15.8001 15.4001C16.1314 15.8419 16.0419 16.4687 15.6001 16.8001C15.1582 17.1314 14.5314 17.0419 14.2001 16.6001L8.20006 8.60006C7.86869 8.15823 7.95823 7.53143 8.40006 7.20006Z',
  d6: 'M17.0019 21L22 12L17 3H6.99807L2 12L7 21H17.0019Z',
  d7: 'M6.99807 2.25C6.72565 2.25 6.47465 2.39772 6.34239 2.63588L1.34432 11.6359C1.21854 11.8624 1.21856 12.1378 1.34438 12.3642L6.34438 21.3642C6.47666 21.6023 6.72762 21.75 7 21.75L17.0019 21.75C17.2744 21.75 17.5254 21.6023 17.6576 21.3641L22.6557 12.3641C22.7815 12.1376 22.7814 11.8622 22.6556 11.6358L17.6556 2.63577C17.5233 2.39767 17.2724 2.25 17 2.25L6.99807 2.25ZM8.2002 8.60002L14.2002 16.6L15.8002 15.4L9.8002 7.40002L8.2002 8.60002Z',
} as const;

export const IconSetting06StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-06-stroke-rounded IconSetting06StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSetting06DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-06-duotone-rounded IconSetting06DuotoneRounded"
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
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSetting06TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-06-twotone-rounded IconSetting06TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconSetting06SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-06-solid-rounded IconSetting06SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSetting06BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-06-bulk-rounded IconSetting06BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSetting06StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-06-stroke-sharp IconSetting06StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSetting06SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-06-solid-sharp IconSetting06SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSetting06: TheIconSelfPack = {
  name: 'Setting06',
  StrokeRounded: IconSetting06StrokeRounded,
  DuotoneRounded: IconSetting06DuotoneRounded,
  TwotoneRounded: IconSetting06TwotoneRounded,
  SolidRounded: IconSetting06SolidRounded,
  BulkRounded: IconSetting06BulkRounded,
  StrokeSharp: IconSetting06StrokeSharp,
  SolidSharp: IconSetting06SolidSharp,
};