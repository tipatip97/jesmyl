import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 2H16C17.8856 2 18.8284 2 19.4142 2.58579C20 3.17157 20 4.11438 20 6V12C20 13.8856 20 14.8284 19.4142 15.4142C18.8284 16 17.8856 16 16 16H9',
  d2: 'M10 6.5H16',
  d3: 'M2 17V13C2 12.0572 2 11.5858 2.29289 11.2929C2.58579 11 3.05719 11 4 11H6M2 17H6M2 17V22M6 17V11M6 17V22M6 11H9H12',
  d4: 'M6 6.5C6 7.60457 5.10457 8.5 4 8.5C2.89543 8.5 2 7.60457 2 6.5C2 5.39543 2.89543 4.5 4 4.5C5.10457 4.5 6 5.39543 6 6.5Z',
  d5: 'M20 12V6C20 4.11438 20 3.17157 19.4142 2.58579C18.8284 2 17.8856 2 16 2H2V6.5V13C2 12.0572 2 11.5858 2.29289 11.2929C2.58579 11 3.05719 11 4 11H6V16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12ZM2 6.5C2 5.39543 2.89543 4.5 4 4.5C5.10457 4.5 6 5.39543 6 6.5C6 7.60457 5.10457 8.5 4 8.5C2.89543 8.5 2 7.60457 2 6.5Z',
  d6: 'M18.8848 3.2498C18.4338 3.18956 17.8218 3.1875 16.875 3.1875H3.225C2.68652 3.1875 2.25 2.75378 2.25 2.21875C2.25 1.68373 2.68652 1.25 3.225 1.25L16.9392 1.25C17.8035 1.24995 18.5482 1.24991 19.1446 1.32958C19.7837 1.41496 20.3964 1.60749 20.8933 2.10123C21.3902 2.59496 21.584 3.20367 21.6699 3.83871C21.7501 4.43126 21.75 5.17121 21.75 6.03V11.97C21.75 12.8288 21.7501 13.5687 21.6699 14.1613C21.584 14.7963 21.3902 15.405 20.8933 15.8988C20.3964 16.3925 19.7837 16.585 19.1446 16.6704C18.5482 16.7501 17.8035 16.75 16.9392 16.75L10.05 16.75C9.51152 16.75 9.075 16.3163 9.075 15.7812C9.075 15.2462 9.51152 14.8125 10.05 14.8125H16.875C17.8218 14.8125 18.4338 14.8104 18.8848 14.7502C19.3077 14.6937 19.4402 14.6025 19.5144 14.5288C19.5886 14.455 19.6804 14.3233 19.7373 13.9031C19.7979 13.4551 19.8 12.847 19.8 11.9062V6.09375C19.8 5.15302 19.7979 4.54492 19.7373 4.09687C19.6804 3.67669 19.5886 3.54499 19.5144 3.47124C19.4402 3.3975 19.3077 3.30629 18.8848 3.2498Z',
  d7: 'M10 6.5C10 5.94772 10.4477 5.5 11 5.5H17C17.5523 5.5 18 5.94772 18 6.5C18 7.05228 17.5523 7.5 17 7.5H11C10.4477 7.5 10 7.05228 10 6.5Z',
  d8: 'M12.7917 11C13.3209 11 13.75 11.4305 13.75 11.9616C13.75 12.4926 13.3209 12.9231 12.7917 12.9231H8.00001L7.99999 21.7887C7.99999 22.3198 7.57093 22.7503 7.04166 22.7503C6.51239 22.7503 6.08333 22.3198 6.08333 21.7887V17.9426H4.16666V21.7887C4.16666 22.3198 3.7376 22.7503 3.20833 22.7503C2.67906 22.7503 2.25 22.3198 2.25 21.7887L2.25001 13.8323C2.24993 13.4246 2.24985 13.0283 2.29365 12.7014C2.34302 12.333 2.46331 11.9125 2.81139 11.5633C3.15947 11.214 3.57853 11.0933 3.94576 11.0438C4.27152 10.9998 4.66647 10.9999 5.07287 11L12.7917 11Z',
  d9: 'M2.25001 7.25C2.25001 5.73122 3.48123 4.5 5.00001 4.5C6.5188 4.5 7.75001 5.73122 7.75001 7.25C7.75001 8.76878 6.5188 10 5.00001 10C3.48123 10 2.25001 8.76878 2.25001 7.25Z',
  d10: 'M2 2H20V16.1728H9',
  d11: 'M9 6.55554H17',
  d12: 'M6 6.55557C6 7.67377 5.10457 8.58026 4 8.58026C2.89543 8.58026 2 7.67377 2 6.55557C2 5.43737 2.89543 4.53088 4 4.53088C5.10457 4.53088 6 5.43737 6 6.55557Z',
  d13: 'M11.9936 11.1191L5.99015 11.1191M2 22.9962L2.00023 17.1667M2.00023 17.1667V11.1291C2.00023 11.1236 2.0047 11.1191 2.01023 11.1191H5.99015M2.00023 17.1667L5.99015 17.1962M5.99015 17.1962V11.1191M5.99015 17.1962V22.9962',
  d14: 'M3 1.25H20.7632C21.3082 1.25 21.75 1.68372 21.75 2.21875V15.7812C21.75 16.3163 21.3082 16.75 20.7632 16.75H9.90789V14.8125H19.7763V3.1875H3V1.25Z',
  d15: 'M18 7.5H10V5.5H18V7.5Z',
  d16: 'M2.25 7.25C2.25 5.73122 3.48122 4.5 5 4.5C6.51878 4.5 7.75 5.73122 7.75 7.25C7.75 8.76878 6.51878 10 5 10C3.48122 10 2.25 8.76878 2.25 7.25Z',
  d17: 'M2.25 11.9615C2.25 11.4305 2.68754 11 3.22727 11H13V12.9231H8.11364V22.75H6.15909V17.9423H4.20455V22.75H2.25L2.25 11.9615Z',
} as const;

export const IconTeacherStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teacher-stroke-rounded IconTeacherStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTeacherDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teacher-duotone-rounded IconTeacherDuotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconTeacherTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teacher-twotone-rounded IconTeacherTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTeacherSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teacher-solid-rounded IconTeacherSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTeacherBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teacher-bulk-rounded IconTeacherBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTeacherStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teacher-stroke-sharp IconTeacherStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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

export const IconTeacherSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teacher-solid-sharp IconTeacherSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfTeacher: TheIconSelfPack = {
  name: 'Teacher',
  StrokeRounded: IconTeacherStrokeRounded,
  DuotoneRounded: IconTeacherDuotoneRounded,
  TwotoneRounded: IconTeacherTwotoneRounded,
  SolidRounded: IconTeacherSolidRounded,
  BulkRounded: IconTeacherBulkRounded,
  StrokeSharp: IconTeacherStrokeSharp,
  SolidSharp: IconTeacherSolidSharp,
};