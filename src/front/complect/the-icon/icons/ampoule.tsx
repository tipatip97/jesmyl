import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.44572 2.99906C5.12985 5.87904 3.57993 7.06862 4.93752 9.6052C5.02451 9.76774 5.06801 9.84901 5.08406 9.88583C5.26967 10.3116 5.19094 10.6954 4.8527 11.0137C4.82345 11.0412 4.77395 11.0808 4.67498 11.16C4.50514 11.2959 4.42021 11.3638 4.34268 11.4327C3.54255 12.1439 3.06086 13.1461 3.00538 14.2152C3 14.3188 3 14.4275 3 14.645V18.5C3 19.9045 3 20.6067 3.33706 21.1111C3.48298 21.3295 3.67048 21.517 3.88886 21.6629C4.39331 22 5.09554 22 6.5 22C7.90446 22 8.60669 22 9.11114 21.6629C9.32952 21.517 9.51702 21.3295 9.66294 21.1111C10 20.6067 10 19.9045 10 18.5V14.645C10 14.4275 10 14.3188 9.99462 14.2152C9.93913 13.1461 9.45745 12.1439 8.65732 11.4327C8.57978 11.3638 8.49486 11.2959 8.32502 11.16C8.22604 11.0808 8.17655 11.0412 8.1473 11.0137C7.80905 10.6954 7.73032 10.3116 7.91593 9.88584C7.93198 9.84902 7.97548 9.76774 8.06248 9.60519C9.42003 7.06859 7.86981 5.87902 7.55369 2.99897C7.49343 2.44999 7.05198 2 6.49971 2C5.9474 2 5.50594 2.45004 5.44572 2.99906Z',
  d2: 'M10 16H3',
  d3: 'M16.4457 2.99906C16.1298 5.87904 14.5799 7.06862 15.9375 9.6052C16.0245 9.76774 16.068 9.84901 16.0841 9.88583C16.2697 10.3116 16.1909 10.6954 15.8527 11.0137C15.8234 11.0412 15.774 11.0808 15.675 11.16C15.5051 11.2959 15.4202 11.3638 15.3427 11.4327C14.5425 12.1439 14.0609 13.1461 14.0054 14.2152C14 14.3188 14 14.4275 14 14.645V18.5C14 19.9045 14 20.6067 14.3371 21.1111C14.483 21.3295 14.6705 21.517 14.8889 21.6629C15.3933 22 16.0955 22 17.5 22C18.9045 22 19.6067 22 20.1111 21.6629C20.3295 21.517 20.517 21.3295 20.6629 21.1111C21 20.6067 21 19.9045 21 18.5V14.645C21 14.4275 21 14.3188 20.9946 14.2152C20.9391 13.1461 20.4574 12.1439 19.6573 11.4327C19.5798 11.3638 19.4949 11.2959 19.325 11.16C19.226 11.0808 19.1765 11.0412 19.1473 11.0137C18.8091 10.6954 18.7303 10.3116 18.9159 9.88584C18.932 9.84902 18.9755 9.76774 19.0625 9.60519C20.42 7.06859 18.8698 5.87902 18.5537 2.99897C18.4934 2.44999 18.052 2 17.4997 2C16.9474 2 16.5059 2.45004 16.4457 2.99906Z',
  d4: 'M21 16H14',
  d5: 'M9.11114 21.6664C8.60669 22.0034 7.90446 22.0034 6.5 22.0034C5.09554 22.0034 4.39331 22.0034 3.88886 21.6664C3.67048 21.5204 3.48298 21.3329 3.33706 21.1146C3 20.6101 3 19.9079 3 18.5034C3 16.9267 4.27822 15.6484 5.85498 15.6484H7.14502C8.72178 15.6484 10 16.9267 10 18.5034C10 19.9079 10 20.6101 9.66294 21.1146C9.51702 21.3329 9.32952 21.5204 9.11114 21.6664Z',
  d6: 'M20.1111 21.6664C19.6067 22.0034 18.9045 22.0034 17.5 22.0034C16.0955 22.0034 15.3933 22.0034 14.8889 21.6664C14.6705 21.5204 14.483 21.3329 14.3371 21.1146C14 20.6101 14 19.9079 14 18.5034C14 16.9267 15.2782 15.6484 16.855 15.6484H18.145C19.7218 15.6484 21 16.9267 21 18.5034C21 19.9079 21 20.6101 20.6629 21.1146C20.517 21.3329 20.3295 21.5204 20.1111 21.6664Z',
  d7: 'M4.56548 3.09708C4.66755 2.13409 5.43204 1.25 6.49973 1.25C7.56735 1.25 8.33182 2.134 8.43396 3.09691C8.5273 3.97686 8.72423 4.59931 8.93191 5.25574C9.03625 5.58555 9.14331 5.92395 9.24131 6.30789C9.37819 6.84418 9.47476 7.42733 9.42497 8.07798C9.37486 8.73297 9.18104 9.40021 8.80837 10.1208C8.76649 10.2017 8.72409 10.2845 8.70381 10.3244C8.8462 10.4423 9.07305 10.6307 9.1649 10.7152C10.1095 11.5839 10.6781 12.8082 10.7437 14.1142C10.75 14.2411 10.75 14.3713 10.75 14.5599V18.3997C10.75 19.0455 10.7501 19.6023 10.7054 20.0569C10.658 20.5389 10.5526 21.0132 10.2725 21.447C10.0658 21.7671 9.80015 22.042 9.49078 22.2559C9.07153 22.5458 8.61322 22.6548 8.14738 22.7038C7.70805 22.75 7.16991 22.75 6.54588 22.75C5.92184 22.75 5.29195 22.75 4.85263 22.7038C4.38679 22.6548 3.92848 22.5458 3.50923 22.2559C3.19985 22.042 2.93422 21.7671 2.72751 21.447C2.44737 21.0132 2.34204 20.5389 2.29465 20.0569C2.24996 19.6023 2.24998 19.0454 2.25 18.3998V14.5598C2.24999 14.3713 2.24999 14.2411 2.25635 14.1142C2.32186 12.8082 2.89051 11.5839 3.83511 10.7152C3.92694 10.6307 4.15382 10.4423 4.2962 10.3244C4.27592 10.2845 4.23352 10.2017 4.19164 10.1208C3.81897 9.40025 3.62512 8.73303 3.57496 8.07807C3.52514 7.42744 3.62164 6.84431 3.75847 6.30802C3.85643 5.92407 3.96345 5.58567 4.06776 5.25585C4.27536 4.59943 4.47222 3.977 4.56548 3.09708ZM6.43674 3.36643C6.31761 4.4273 6.02498 5.3619 5.79996 6.08059C5.7137 6.35607 5.63737 6.59984 5.58456 6.80682C5.47842 7.22285 5.43073 7.57106 5.45773 7.92356C5.48439 8.27173 5.58838 8.67942 5.85679 9.19836C5.91693 9.31445 5.99696 9.46894 6.02826 9.54322C6.17822 9.89916 6.24681 10.3028 6.16397 10.7206C6.08113 11.1385 5.86451 11.4816 5.59124 11.7477C5.42307 11.8869 5.14037 12.1294 5.08974 12.176C4.52298 12.6972 4.18179 13.4318 4.14248 14.2154H8.85708C8.81778 13.4318 8.47659 12.6972 7.90983 12.176C7.8592 12.1294 7.57648 11.8869 7.40832 11.7477C7.13505 11.4816 6.91844 11.1386 6.8356 10.7207C6.75275 10.3028 6.82134 9.89918 6.9713 9.54324C7.00259 9.46896 7.08262 9.31446 7.14276 9.19837C7.41116 8.67944 7.51512 8.27176 7.54176 7.92361C7.56873 7.57113 7.52101 7.22293 7.41482 6.80689C7.36199 6.59992 7.28563 6.3561 7.19935 6.08064C6.97424 5.36194 6.6815 4.42733 6.56229 3.36642C6.55869 3.33443 6.5317 3.31006 6.49951 3.31006C6.46732 3.31006 6.44033 3.33443 6.43674 3.36643Z',
  d8: 'M15.5655 3.09708C15.6676 2.13409 16.432 1.25 17.4997 1.25C18.5673 1.25 19.3318 2.134 19.434 3.09691C19.5273 3.97686 19.7242 4.59931 19.9319 5.25574C20.0362 5.58555 20.1433 5.92395 20.2413 6.30789C20.3782 6.84418 20.4748 7.42733 20.425 8.07798C20.3749 8.73297 20.181 9.40021 19.8084 10.1208C19.7665 10.2017 19.7241 10.2845 19.7038 10.3244C19.8462 10.4423 20.0731 10.6307 20.1649 10.7152C21.1095 11.5839 21.6781 12.8082 21.7437 14.1142C21.75 14.2411 21.75 14.3713 21.75 14.5599V18.3997C21.75 19.0455 21.7501 19.6023 21.7054 20.0569C21.658 20.5389 21.5526 21.0132 21.2725 21.447C21.0658 21.7671 20.8002 22.042 20.4908 22.2559C20.0715 22.5458 19.6132 22.6548 19.1474 22.7038C18.7081 22.75 18.1699 22.75 17.5459 22.75C16.9218 22.75 16.292 22.75 15.8526 22.7038C15.3868 22.6548 14.9285 22.5458 14.5092 22.2559C14.1999 22.042 13.9342 21.7671 13.7275 21.447C13.4474 21.0132 13.342 20.5389 13.2946 20.0569C13.25 19.6023 13.25 19.0454 13.25 18.3998V14.5598C13.25 14.3713 13.25 14.2411 13.2564 14.1142C13.3219 12.8082 13.8905 11.5839 14.8351 10.7152C14.9269 10.6307 15.1538 10.4423 15.2962 10.3244C15.2759 10.2845 15.2335 10.2017 15.1916 10.1208C14.819 9.40025 14.6251 8.73303 14.575 8.07807C14.5251 7.42744 14.6216 6.84431 14.7585 6.30802C14.8564 5.92407 14.9635 5.58567 15.0678 5.25585C15.2754 4.59943 15.4722 3.977 15.5655 3.09708ZM17.4367 3.36643C17.3176 4.4273 17.025 5.3619 16.8 6.08059C16.7137 6.35607 16.6374 6.59984 16.5846 6.80682C16.4784 7.22285 16.4307 7.57106 16.4577 7.92356C16.4844 8.27173 16.5884 8.67942 16.8568 9.19836C16.9169 9.31445 16.997 9.46894 17.0283 9.54322C17.1782 9.89916 17.2468 10.3028 17.164 10.7206C17.0811 11.1385 16.8645 11.4816 16.5912 11.7477C16.4231 11.8869 16.1404 12.1294 16.0897 12.176C15.523 12.6972 15.1818 13.4318 15.1425 14.2154H19.8571C19.8178 13.4318 19.4766 12.6972 18.9098 12.176C18.8592 12.1294 18.5765 11.8869 18.4083 11.7477C18.135 11.4816 17.9184 11.1386 17.8356 10.7207C17.7528 10.3028 17.8213 9.89918 17.9713 9.54324C18.0026 9.46896 18.0826 9.31446 18.1428 9.19837C18.4112 8.67944 18.5151 8.27176 18.5418 7.92361C18.5687 7.57113 18.521 7.22293 18.4148 6.80689C18.362 6.59992 18.2856 6.3561 18.1993 6.08064C17.9742 5.36194 17.6815 4.42733 17.5623 3.36642C17.5587 3.33443 17.5317 3.31006 17.4995 3.31006C17.4673 3.31006 17.4403 3.33443 17.4367 3.36643Z',
  d9: 'M10 16.0078H3',
  d10: 'M21 16.0078H14',
  d11: 'M5.3945 3.34779C5.46698 2.70861 5.63318 2.0563 6.50027 1.99902C7.19909 2.0591 7.43763 2.47908 7.54258 2.99719C7.5894 3.22832 7.60953 3.46509 7.65209 3.69704C7.69876 3.9514 7.80718 4.42908 8.08585 5.40533C8.77105 7.14254 8.59813 8.02946 8.3566 8.80481L8.01285 9.57919V11.056C8.01285 11.056 8.33007 11.258 8.70386 11.539C9.07948 11.8214 9.37881 12.1952 9.56052 12.6288C9.99987 13.677 10 14.3729 10 14.3733C10 14.3733 10 14.3733 10 14.3733V21.9019C10 21.9572 9.95536 22.002 9.90013 22.002H3.1028C3.04757 22.002 3.00293 21.9572 3.00293 21.9019V14.3733C3.00293 14.3733 3.00293 14.3733 3.00293 14.3733C3.00293 14.3733 3.00293 13.6773 3.44241 12.6288C3.62412 12.1952 3.92345 11.8214 4.29907 11.539C4.67285 11.258 4.99008 11.056 4.99008 11.056V9.57919L4.64633 8.80481C4.4048 8.02946 4.23188 7.14254 4.91708 5.40533C5.40472 3.58881 5.37896 3.48486 5.3945 3.34779Z',
  d12: 'M16.3945 3.34779C16.467 2.70861 16.6332 2.0563 17.5003 1.99902C18.1991 2.0591 18.4376 2.47908 18.5426 2.99719C18.5894 3.22832 18.6095 3.46509 18.6521 3.69704C18.6988 3.9514 18.8072 4.42908 19.0859 5.40533C19.771 7.14254 19.5981 8.02946 19.3566 8.80481L19.0128 9.57919V11.056C19.0128 11.056 19.3301 11.258 19.7039 11.539C20.0795 11.8214 20.3788 12.1952 20.5605 12.6288C21 13.6773 21 14.3733 21 14.3733V21.9019C21 21.9572 20.9554 22.002 20.9001 22.002H14.1028C14.0476 22.002 14.0029 21.9572 14.0029 21.9019V14.3733C14.0029 14.3733 14.0029 14.3733 14.0029 14.3733C14.0029 14.3733 14.0029 13.6773 14.4424 12.6288C14.6241 12.1952 14.9234 11.8214 15.2991 11.539C15.6729 11.258 15.9901 11.056 15.9901 11.056V9.57919L15.6463 8.80481C15.4048 8.02946 15.2319 7.14254 15.9171 5.40533C16.4047 3.58881 16.379 3.48486 16.3945 3.34779Z',
  d13: 'M15.5622 3.097C15.6644 2.13343 16.4297 1.25 17.4972 1.25C18.5646 1.25 19.3299 2.13333 19.4322 3.09683C19.4986 3.72288 19.627 4.26331 19.7722 4.77649C19.8184 4.93977 19.8711 5.11534 19.9253 5.29563C20.0282 5.63798 20.1362 5.99735 20.2141 6.32196C20.3432 6.85977 20.43 7.44144 20.3732 8.08909C20.3222 8.67135 20.1592 9.26356 19.8597 9.89542V10.4958L20.1126 10.668L20.1636 10.7149C21.1089 11.5836 21.6781 12.8079 21.7436 14.1141L21.7449 14.1391L21.75 21.7721C21.7502 22.0314 21.6507 22.2801 21.4736 22.4635C21.2965 22.6469 21.0562 22.75 20.8056 22.75H14.1949C13.6733 22.75 13.2505 22.3125 13.2505 21.7728L13.25 14.1395L13.2513 14.1141C13.3168 12.8079 13.886 11.5836 14.8313 10.7149L14.8823 10.668L15.1353 10.4958V9.89543C14.8357 9.26359 14.6727 8.67141 14.6216 8.08917C14.5649 7.44155 14.6516 6.85989 14.7806 6.32209C14.8584 5.99747 14.9664 5.63808 15.0693 5.29572C15.1234 5.11545 15.1762 4.93991 15.2223 4.77664C15.3675 4.26346 15.4958 3.72304 15.5622 3.097ZM17.9592 5.3253C17.7968 4.75143 17.6373 4.09107 17.5544 3.30982C17.535 3.22194 17.485 3.09889 17.4396 3.30983C17.3567 4.09105 17.1973 4.75139 17.035 5.32525C16.9669 5.5658 16.9043 5.77301 16.8467 5.96357C16.7574 6.25918 16.6802 6.51471 16.6136 6.79244C16.5142 7.20696 16.4714 7.55664 16.5026 7.91214C16.5335 8.26426 16.6418 8.67573 16.912 9.19777L17.0239 9.41396V11.5492L16.0384 12.22C15.5048 12.7329 15.1823 13.4389 15.1387 14.1916L15.1387 14.2496H19.8559L19.8558 14.1919C19.8123 13.4391 19.4897 12.733 18.9561 12.22L17.9706 11.5492V9.41397L18.0824 9.19779C18.3527 8.67575 18.461 8.2643 18.4918 7.9122C18.523 7.55671 18.4801 7.20704 18.3807 6.79251C18.314 6.51479 18.2368 6.25917 18.1474 5.96359C18.0899 5.77303 18.0272 5.56583 17.9592 5.3253Z',
  d14: 'M4.56218 3.097C4.66439 2.13343 5.42969 1.25 6.49718 1.25C7.56462 1.25 8.32989 2.13333 8.43217 3.09683C8.49863 3.72288 8.62696 4.26331 8.77217 4.77649C8.81837 4.93977 8.87114 5.11534 8.92533 5.29563C9.02823 5.63798 9.13624 5.99735 9.21413 6.32196C9.34317 6.85977 9.42996 7.44144 9.37322 8.08909C9.32221 8.67135 9.15919 9.26356 8.85966 9.89542V10.4958L9.11259 10.668L9.16365 10.7149C10.1089 11.5836 10.6781 12.8079 10.7436 14.1141L10.7449 14.1391L10.75 21.7721C10.7502 22.0314 10.6507 22.2801 10.4736 22.4635C10.2965 22.6469 10.0562 22.75 9.80556 22.75H3.19492C2.67335 22.75 2.25051 22.3125 2.25048 21.7728L2.25 14.1395L2.25127 14.1141C2.31684 12.8079 2.88604 11.5836 3.83127 10.7149L3.88233 10.668L4.13526 10.4958V9.89543C3.83573 9.26359 3.67269 8.67141 3.62163 8.08917C3.56485 7.44155 3.65159 6.85989 3.78057 6.32209C3.85842 5.99747 3.9664 5.63808 4.06926 5.29572C4.12342 5.11545 4.17617 4.93991 4.22235 4.77664C4.3675 4.26346 4.49577 3.72304 4.56218 3.097ZM6.95917 5.3253C6.79679 4.75143 6.63729 4.09107 6.55436 3.30982C6.53502 3.22194 6.48498 3.09889 6.43957 3.30983C6.3567 4.09105 6.19728 4.75139 6.03496 5.32525C5.96692 5.5658 5.90432 5.77301 5.84675 5.96357C5.75744 6.25918 5.68023 6.51471 5.61363 6.79244C5.51421 7.20696 5.47141 7.55664 5.50258 7.91214C5.53345 8.26426 5.6418 8.67573 5.91203 9.19777L6.02393 9.41396V11.5492L5.03841 12.22C4.50482 12.7329 4.18232 13.4389 4.13867 14.1916L4.13868 14.2496H8.85587L8.85583 14.1919C8.81226 13.4391 8.48974 12.733 7.95606 12.22L6.97055 11.5492V9.41397L7.08245 9.19779C7.35266 8.67575 7.46098 8.2643 7.49183 7.9122C7.52297 7.55671 7.48014 7.20704 7.38068 6.79251C7.31404 6.51479 7.23678 6.25917 7.14745 5.96359C7.08986 5.77303 7.02723 5.56583 6.95917 5.3253Z',
};

export const IconAmpouleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ampoule-stroke-rounded IconAmpouleStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAmpouleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ampoule-duotone-rounded IconAmpouleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAmpouleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ampoule-twotone-rounded IconAmpouleTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAmpouleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ampoule-solid-rounded IconAmpouleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAmpouleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ampoule-bulk-rounded IconAmpouleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAmpouleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ampoule-stroke-sharp IconAmpouleStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAmpouleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ampoule-solid-sharp IconAmpouleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAmpoule: TheIconSelfPack = {
  name: 'Ampoule',
  StrokeRounded: IconAmpouleStrokeRounded,
  DuotoneRounded: IconAmpouleDuotoneRounded,
  TwotoneRounded: IconAmpouleTwotoneRounded,
  SolidRounded: IconAmpouleSolidRounded,
  BulkRounded: IconAmpouleBulkRounded,
  StrokeSharp: IconAmpouleStrokeSharp,
  SolidSharp: IconAmpouleSolidSharp,
};