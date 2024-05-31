import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.9915 22C13.7121 22 13.9925 21.9956 13.9925 21.9956C17.4088 21.971 19.2922 21.8099 20.5342 20.7552C22 19.5104 22 17.5069 22 13.5M11.9906 5C7.27213 5 4.91289 5 3.44705 6.2448C2.32426 7.19827 2.0615 8.59687 2 11',
  d2: 'M16.5312 5.35997V3.95232C16.5312 2.87408 17.4127 2 18.5 2C18.9887 2 19.4359 2.1766 19.7801 2.46895M17.8437 11H19.1563C20.1777 11 20.6884 11 21.0749 10.7951C21.3802 10.6333 21.6302 10.3854 21.7934 10.0827C22 9.6993 22 9.19286 22 8.17998C22 7.16711 22 6.66067 21.7934 6.2773C21.6302 5.9746 21.3802 5.72668 21.0749 5.56488C20.6884 5.35997 20.1777 5.35997 19.1563 5.35997H17.8437C16.8223 5.35997 16.3116 5.35997 15.9251 5.56488C15.6198 5.72668 15.3698 5.9746 15.2066 6.2773C15 6.66067 15 7.16711 15 8.17998C15 9.19286 15 9.6993 15.2066 10.0827C15.3698 10.3854 15.6198 10.6333 15.9251 10.7951C16.3116 11 16.8223 11 17.8437 11Z',
  d3: 'M2.98242 21H2.9914',
  d4: 'M2 17.2349C4.49328 17.2349 6.77053 19.5 6.77053 21.9996M10 21.9996C10 17.5 5.99511 14 2.04522 14',
  d5: 'M22.0006 13.5C22.0006 17.5069 22.0006 19.5104 20.5348 20.7552C19.2928 21.8099 17.4094 21.971 13.9931 21.9956L10.0013 21.997C6.22612 21.9984 4.33854 21.9991 3.16625 20.8264C1.99397 19.6536 1.99542 17.7661 1.99833 13.9909L2.00062 11C2.06212 8.59687 2.32489 7.19827 3.44768 6.2448C4.91352 5 7.27276 5 11.9912 5C15.1543 5 17.2572 5 18.7415 5.375H17.625C16.8096 5.375 16.4019 5.375 16.0803 5.51773C15.6515 5.70803 15.3108 6.07304 15.1332 6.53247C15 6.87704 15 7.31386 15 8.1875C15 9.06114 15 9.49796 15.1332 9.84253C15.3108 10.302 15.6515 10.667 16.0803 10.8573C16.4019 11 16.8096 11 17.625 11H19.375C20.1904 11 20.5981 11 20.9197 10.8573C21.3485 10.667 21.6892 10.302 21.8668 9.84253C21.886 9.79281 21.9025 9.74116 21.9165 9.68656C22.0006 10.7073 22.0006 11.9547 22.0006 13.5Z',
  d6: 'M15.7813 3.95232C15.7813 2.45396 17.0044 1.25 18.5 1.25C19.1725 1.25 19.7904 1.49372 20.2656 1.89733C20.5813 2.16548 20.6198 2.63879 20.3517 2.95449C20.0835 3.27019 19.6102 3.30873 19.2945 3.04058C19.0813 2.85948 18.8049 2.75 18.5 2.75C17.821 2.75 17.2813 3.29421 17.2813 3.95232V4.61162L19.1871 4.60997C19.6715 4.60996 20.0813 4.60994 20.4167 4.63824C20.7683 4.66789 21.1063 4.73264 21.4262 4.90222C21.8618 5.13313 22.2197 5.48753 22.4536 5.92145C22.6257 6.24083 22.6914 6.57833 22.7214 6.92848C22.75 7.2619 22.75 7.73137 22.75 8.2112C22.75 8.69104 22.75 9.09807 22.7214 9.43149C22.6914 9.78163 22.6257 10.1191 22.4536 10.4385C22.2197 10.8724 21.8618 11.2268 21.4262 11.4578C21.1063 11.6273 20.7683 11.6921 20.4167 11.7217C20.0813 11.75 19.6715 11.75 19.1871 11.75H19.1871H17.8129H17.8129C17.3285 11.75 16.9187 11.75 16.5833 11.7217C16.2317 11.6921 15.8937 11.6273 15.5738 11.4578C15.1382 11.2268 14.7803 10.8724 14.5464 10.4385C14.3743 10.1191 14.3086 9.78163 14.2786 9.43149C14.25 9.09807 14.25 8.69105 14.25 8.21122V8.21119C14.25 7.73135 14.25 7.2619 14.2786 6.92848C14.3086 6.57833 14.3743 6.24083 14.5464 5.92145C14.7803 5.48753 15.1382 5.13313 15.5738 4.90222C15.6421 4.86599 15.7113 4.83455 15.7813 4.80722V3.95232Z',
  d7: 'M11.0163 6.19739C9.18623 6.2003 7.81437 6.21925 6.73454 6.34208C5.48503 6.48422 4.77578 6.7525 4.27359 7.1774C3.54072 7.79747 3.20423 8.61737 3.20423 10.5855C3.19042 11.1231 2.74183 11.5477 2.20228 11.534C1.66272 11.5202 1.23652 11.0733 1.25033 10.5357C1.25033 8.70945 1.54676 6.92973 3.00843 5.69304C3.93877 4.90589 5.09859 4.56816 6.51283 4.40728C7.69455 4.27286 9.20339 4.25294 11.0165 4.25C11.5542 4.24913 11.9904 4.68542 11.9904 5.22317C11.9904 5.76093 11.554 6.19653 11.0163 6.19739Z',
  d8: 'M22.7485 14.4769C22.7436 15.94 22.7156 17.2035 22.5585 18.1924C22.3571 19.4594 21.9258 20.4993 20.9723 21.306C20.1841 21.9728 19.2317 22.3168 18.1005 22.5042C16.9868 22.6888 15.6221 22.7331 13.9575 22.7451C13.7985 22.7462 13.759 22.7495 13.4049 22.7495C12.8652 22.7495 12.4276 22.3136 12.4276 21.7758C12.4276 21.2381 12.8652 20.8021 13.4049 20.8021C13.755 20.8021 13.7857 20.7989 13.9397 20.7978C15.6122 20.7858 16.8358 20.7397 17.7798 20.5833C18.7069 20.4296 19.2816 20.1816 19.7072 19.8216C20.1863 19.4162 20.4712 18.8747 20.628 17.8879C20.7637 17.0338 20.7892 15.9481 20.7939 14.4772C20.7957 13.9374 21.2326 13.4995 21.7723 13.4995C22.312 13.4995 22.7503 13.9372 22.7485 14.4769Z',
  d9: 'M1.25 21.7991C1.25 21.2744 1.67493 20.8491 2.19912 20.8491H2.20764C2.73182 20.8491 3.15676 21.2744 3.15676 21.7991C3.15676 22.3238 2.73182 22.7491 2.20764 22.7491H2.19912C1.67493 22.7491 1.25 22.3238 1.25 21.7991Z',
  d10: 'M1.30175 14.2C1.30175 13.6753 1.72668 13.25 2.25087 13.25C6.48852 13.25 10.75 16.9657 10.75 21.7999C10.75 22.3246 10.3251 22.7499 9.80088 22.7499C9.2767 22.7499 8.85177 22.3246 8.85177 21.7999C8.85177 18.0846 5.51103 15.1501 2.25087 15.1501C1.72668 15.1501 1.30175 14.7247 1.30175 14.2ZM1.31934 17.6418C1.41978 17.1269 1.91826 16.7909 2.43273 16.8914C4.71641 17.3377 6.6405 19.3429 6.92317 21.686C6.98601 22.2069 6.61509 22.6802 6.09468 22.7431C5.57428 22.806 5.10147 22.4347 5.03863 21.9138C4.85742 20.4117 3.56772 19.0492 2.069 18.7563C1.55453 18.6557 1.2189 18.1568 1.31934 17.6418Z',
  d11: 'M16.5312 5.35997V3.95232C16.5312 2.87408 17.4127 2 18.5 2C18.9887 2 19.4359 2.1766 19.7801 2.46895M15 11H22V5.35997H15V11Z',
  d12: 'M12.5 21H22V13.5M3 11.5V6H12.5',
  d13: 'M15.0312 4.45232C15.0312 2.81391 16.3683 1.5 18 1.5C18.7338 1.5 19.4086 1.76609 19.9274 2.20679L18.6327 3.73112C18.4631 3.58711 18.2437 3.5 18 3.5C17.4571 3.5 17.0312 3.93425 17.0312 4.45232V4.85997H22.5V12.5H13.5V4.85997H15.0312V4.45232Z',
  d14: 'M1.5 6.5C1.5 5.94772 1.94772 5.5 2.5 5.5H11.4943V7.5H3.5V12H1.5V6.5Z',
  d15: 'M22.5 21.5C22.5 22.0523 22.0523 22.5 21.5 22.5H12V20.5H20.5V14.5H22.5V21.5Z',
  d16: 'M1.54522 15.5C4.98016 15.5 8.5 18.5889 8.5 22.4996H10.5C10.5 17.4111 6.01006 13.5 1.54522 13.5V15.5Z',
  d17: 'M1.5 18.7349C3.4434 18.7349 5.27053 20.5547 5.27053 22.4996H7.27053C7.27053 19.4453 4.54316 16.7349 1.5 16.7349V18.7349Z',
  d18: 'M2.49553 20.5C1.94571 20.5 1.5 20.9477 1.5 21.5C1.5 22.0523 1.94571 22.5 2.49553 22.5H2.50447C3.05429 22.5 3.5 22.0523 3.5 21.5C3.5 20.9477 3.05429 20.5 2.50447 20.5H2.49553Z',
} as const;

export const IconRssUnlockedStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-unlocked-stroke-rounded IconRssUnlockedStrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRssUnlockedDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-unlocked-duotone-rounded IconRssUnlockedDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRssUnlockedTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-unlocked-twotone-rounded IconRssUnlockedTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRssUnlockedSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-unlocked-solid-rounded IconRssUnlockedSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRssUnlockedBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-unlocked-bulk-rounded IconRssUnlockedBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconRssUnlockedStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-unlocked-stroke-sharp IconRssUnlockedStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconRssUnlockedSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-unlocked-solid-sharp IconRssUnlockedSolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRssUnlocked: TheIconSelfPack = {
  name: 'RssUnlocked',
  StrokeRounded: IconRssUnlockedStrokeRounded,
  DuotoneRounded: IconRssUnlockedDuotoneRounded,
  TwotoneRounded: IconRssUnlockedTwotoneRounded,
  SolidRounded: IconRssUnlockedSolidRounded,
  BulkRounded: IconRssUnlockedBulkRounded,
  StrokeSharp: IconRssUnlockedStrokeSharp,
  SolidSharp: IconRssUnlockedSolidSharp,
};