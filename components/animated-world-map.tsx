const MAP_HOTSPOTS = [
  [153, 244],
  [301, 421],
  [466, 285],
  [650, 510],
  [770, 270],
  [930, 450],
  [1051, 315],
  [1120, 345],
];

export function AnimatedWorldMap() {
  return (
    <div className="world-map" aria-hidden="true">
      <svg viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="world-map-dots" width="15" height="15" patternUnits="userSpaceOnUse">
            <circle cx="2.5" cy="2.5" r="1.8" className="world-map-dot" />
          </pattern>
          <mask id="world-map-mask">
            <rect width="1280" height="720" fill="black" />
            <path fill="white" d="M52 188 78 151 129 141 166 112 224 119 262 145 304 151 326 184 300 210 267 214 249 248 204 238 177 267 134 256 105 277 70 254 35 250ZM273 284 307 300 325 337 351 365 344 413 370 449 350 488 315 454 302 416 277 390 258 348 235 319Z" />
            <path fill="white" d="M384 180 427 161 477 166 520 148 558 165 578 197 542 213 512 238 468 230 434 249 399 225Z" />
            <path fill="white" d="M449 268 486 246 525 258 551 286 546 326 566 364 549 410 528 451 510 494 482 471 473 431 450 399 457 361 438 324Z" />
            <path fill="white" d="M584 191 628 173 677 180 708 162 760 174 785 198 836 195 871 216 917 211 949 234 1000 235 1035 262 1088 267 1129 293 1175 291 1218 319 1190 347 1145 342 1111 365 1062 353 1021 372 978 349 942 365 900 344 858 349 820 326 781 337 746 314 705 325 672 300 638 303 612 274Z" />
            <path fill="white" d="M736 369 771 355 805 376 821 420 804 466 777 492 754 470 757 431 735 401Z" />
            <path fill="white" d="M1028 460 1072 445 1115 455 1146 483 1120 511 1080 505 1054 529 1018 510 1006 482Z" />
            <path fill="white" d="M1138 555 1170 547 1204 567 1193 594 1157 601 1132 581Z" />
          </mask>
        </defs>

        <rect width="1280" height="720" fill="url(#world-map-dots)" mask="url(#world-map-mask)" />
        <g className="world-map-hotspots">
          {MAP_HOTSPOTS.map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" />
          ))}
        </g>
      </svg>
    </div>
  );
}
