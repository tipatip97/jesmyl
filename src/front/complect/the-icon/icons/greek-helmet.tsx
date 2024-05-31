import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 14C7 14 5.83322 17.6296 5.99988 19C4.14859 17.1983 3 14.6877 3 11.9108C3 6.76287 6.94721 2.53019 12.001 2.03275C12.4478 1.98877 12.6712 1.96677 12.8354 2.11575C13.3348 2.56889 12.9996 4.36144 12.9996 4.96193C13.7789 4.30632 15.0114 2.72457 16.0759 2.57041C16.358 2.52957 16.58 2.62656 17.0239 2.82052C18.6063 3.51193 19.974 4.59861 21 5.95462C21 5.95462 17.5 6.48813 16.9994 8.9327',
  d2: 'M20.1566 12.658C19.789 9.67865 17.7759 8 14.4972 8C9.90074 8 7.84028 13.0457 9.7103 17.0916C9.96239 17.6371 9.73364 18.3581 9.5865 18.907C9.10408 20.7065 8.86287 21.6063 9.08073 21.8176C9.2986 22.0289 10.0823 21.7996 11.6497 21.3409C13.0596 20.9284 15.0623 19.8633 16.5629 20.0289C17.493 20.1316 20.0349 22.4885 20.8339 21.9082C21.1025 21.7132 21.0072 21.2394 20.8167 20.2919L20.385 18.1442C20.2456 17.4512 20.0588 17.3686 19.3707 17.225C18.1757 16.9757 17.2936 16.2442 16.8599 15.7039C16.6029 15.3838 16.6536 15.1174 16.9265 14.8268C17.6835 14.0208 18.4639 13.7839 19.1785 13.716C19.9976 13.6382 20.2609 13.5026 20.1566 12.658Z',
  d3: 'M12.001 2.03275C6.94721 2.53019 3 6.76287 3 11.9108C3 14.6877 4.14859 17.1983 5.99988 19C5.83322 17.6296 7 14 9 14H9.02298C9.01361 10.8599 11.0367 8 14.4972 8C15.5006 8 16.3854 8.15721 17.1408 8.4608C17.9591 6.41815 21 5.95462 21 5.95462C19.974 4.59861 18.6063 3.51193 17.0239 2.82052C16.58 2.62656 16.358 2.52957 16.0759 2.57041C15.0114 2.72457 13.7789 4.30632 12.9996 4.96193C12.9996 4.36144 13.3348 2.56889 12.8354 2.11575C12.6712 1.96677 12.4478 1.98877 12.001 2.03275Z',
  d4: 'M9.00383 10.7019C9.97209 8.7028 11.8829 7.25024 14.4972 7.25024C16.2618 7.25024 17.7691 7.70294 18.8961 8.63371C20.0294 9.56964 20.6982 10.9233 20.901 12.5664C20.9548 13.0022 20.9726 13.5933 20.5336 14.0154C20.3294 14.2118 20.0879 14.3074 19.8847 14.3616C19.6833 14.4153 19.4618 14.4427 19.2494 14.4629C18.6847 14.5166 18.1 14.6891 17.505 15.307C17.8757 15.736 18.6115 16.3007 19.5471 16.4959C19.8461 16.5581 20.252 16.6426 20.564 16.9028C20.9252 17.2041 21.0456 17.6253 21.1202 17.9966L21.5623 20.1954C21.6487 20.6248 21.7294 21.0257 21.7464 21.3422C21.7634 21.6577 21.7363 22.1801 21.2746 22.5153C20.9903 22.7218 20.6721 22.7631 20.413 22.7471C20.1583 22.7314 19.9094 22.6584 19.6902 22.5737C19.253 22.405 18.7789 22.1276 18.3515 21.8618L17.1277 21.0928C16.7535 20.8709 16.4812 20.7748 16.4812 20.7748C15.9105 20.7118 15.1727 20.8832 14.3161 21.1776C13.9676 21.2974 13.6218 21.4291 13.2746 21.5612C12.5207 21.7818 10.4613 22.4704 10.0137 22.5646C9.78806 22.6121 9.55784 22.6487 9.34751 22.647C9.15892 22.6454 8.824 22.6136 8.55858 22.3562C8.27198 22.0782 8.25062 21.7066 8.25001 21.5295C8.24927 21.312 8.28572 21.0653 8.33502 20.8138C8.43245 20.3168 8.66099 19.4644 8.89262 18.6003L8.89905 18.5764C8.96568 18.3313 9.02489 18.1134 9.05526 17.895C9.09095 17.6382 9.06798 17.4898 9.02951 17.4065C8.00356 15.1868 8.04657 12.6783 9.00383 10.7019Z',
  d5: 'M21.1108 6.69624L21.113 6.69588L21.1144 6.69567C21.3751 6.65546 21.5955 6.4812 21.6948 6.23674C21.7943 5.99186 21.7576 5.71269 21.5981 5.50191C20.4952 4.04429 19.0253 2.87635 17.3242 2.13308C16.958 1.97152 16.4683 1.7556 15.9685 1.82797C15.5515 1.88835 15.1697 2.07829 14.8472 2.28779C14.5192 2.50085 14.1414 2.82504 13.858 3.08638C13.8536 2.90503 13.8402 2.72189 13.8122 2.54787C13.7667 2.26495 13.6603 1.85132 13.3394 1.56014C13.0908 1.33458 12.8086 1.26687 12.5674 1.25295C12.375 1.24186 12.1189 1.26722 11.9275 1.28617C6.49809 1.82059 2.25 6.3687 2.25 11.9106C2.25 14.899 3.48704 17.6009 5.4768 19.5373C5.70475 19.7591 6.04783 19.8131 6.33284 19.6719C6.61785 19.5306 6.78279 19.225 6.74439 18.9093C6.7171 18.6848 6.74128 18.2941 6.84959 17.8015C6.92495 17.4588 7.03536 17.0927 7.17714 16.7356C6.50138 14.4687 6.68299 12.0532 7.65432 10.0477C8.84683 7.58557 11.2502 5.74988 14.4977 5.74988C16.2293 5.74988 17.8611 6.13197 19.2141 7.00683C19.3622 7.1026 19.4363 7.15048 19.5073 7.15808C19.5783 7.16568 19.6625 7.1339 19.831 7.07033C20.2237 6.9222 20.7097 6.78324 21.1108 6.69624Z',
  d6: 'M9 14C7 14 5.83322 17.6296 5.99988 19C4.14859 17.1983 3 14.6877 3 11.9107C3 6.76284 7 2 12.9996 2V4.9619L16.0759 2.57038C18.5 2.99997 19.974 4.59858 21 5.95459C21 5.95459 17.5 6.4881 16.9994 8.93266',
  d7: 'M20.3853 13.5C20.3853 9.5 17.7777 8 14.5009 8C9.9071 8 7.50811 13.5 10.006 18L9.00654 22L16.5655 20.0289L21 22L20.3853 17.225C19.191 16.9757 18.0017 17 16.5655 15.5C17.502 13.5 19.6712 13.5679 20.3853 13.5Z',
  d8: 'M8.65899 10.5307C9.62247 8.36443 11.6145 6.77295 14.2511 6.77295C15.9892 6.77295 17.6554 7.16898 18.8992 8.19422C20.1682 9.24033 20.8855 10.8482 20.8855 13.0229V13.705L20.2065 13.7696C20.1184 13.778 20.0229 13.7851 19.9218 13.7926L19.9217 13.7926C19.123 13.852 17.9693 13.9377 17.2624 14.8898C17.7332 15.2945 18.1587 15.5089 18.5574 15.6443C18.9339 15.7721 19.2601 15.8281 19.6395 15.8933L19.6395 15.8933C19.8367 15.9272 20.0483 15.9636 20.2888 16.0138L20.8112 16.1228L21.6644 22.75L16.2509 20.3439L7.72266 22.5677L8.95859 17.6211C7.7375 15.2374 7.73452 12.6092 8.65899 10.5307Z',
  d9: 'M20.8608 6.69639L20.863 6.69603L20.8644 6.69582L22 6.50627L21.3481 5.50206C20.2911 4.10515 18.6688 2.31249 15.9568 1.83189L15.6287 1.77374L13.4996 3.42889V1.25H12.7496C6.30294 1.25 2 6.38225 2 11.9107C2 14.8992 3.23704 17.601 5.2268 19.5375L6.75119 21.021L6.49439 18.9094C6.4671 18.685 6.49128 18.2942 6.59959 17.8017C6.67969 17.4374 6.7994 17.0466 6.95428 16.6684C6.23252 14.3512 6.39049 11.9396 7.28826 9.92108C8.45454 7.29888 10.9334 5.27295 14.2509 5.27295C16.1631 5.27295 18.1917 5.69965 19.7908 6.98604C20.0102 6.90715 20.2141 6.84665 20.3858 6.80156C20.5377 6.76167 20.6618 6.73453 20.7459 6.71769C20.7879 6.70928 20.8197 6.70348 20.8398 6.69997L20.8608 6.69639Z',
} as const;

export const IconGreekHelmetStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="greek-helmet-stroke-rounded IconGreekHelmetStrokeRounded"
    >
      <path 
        d={d.d1} 
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

export const IconGreekHelmetDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="greek-helmet-duotone-rounded IconGreekHelmetDuotoneRounded"
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

export const IconGreekHelmetTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="greek-helmet-twotone-rounded IconGreekHelmetTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconGreekHelmetSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="greek-helmet-solid-rounded IconGreekHelmetSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGreekHelmetBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="greek-helmet-bulk-rounded IconGreekHelmetBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGreekHelmetStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="greek-helmet-stroke-sharp IconGreekHelmetStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconGreekHelmetSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="greek-helmet-solid-sharp IconGreekHelmetSolidSharp"
    >
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

export const iconPackOfGreekHelmet: TheIconSelfPack = {
  name: 'GreekHelmet',
  StrokeRounded: IconGreekHelmetStrokeRounded,
  DuotoneRounded: IconGreekHelmetDuotoneRounded,
  TwotoneRounded: IconGreekHelmetTwotoneRounded,
  SolidRounded: IconGreekHelmetSolidRounded,
  BulkRounded: IconGreekHelmetBulkRounded,
  StrokeSharp: IconGreekHelmetStrokeSharp,
  SolidSharp: IconGreekHelmetSolidSharp,
};