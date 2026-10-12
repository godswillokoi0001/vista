import type { CSSProperties } from "react";
import { MotionItem, MotionSection } from "../../../../components/motion";

const imageAsset = (fileName: string) =>
  `${import.meta.env.BASE_URL}images/${fileName}`;

type Leader = {
  name: string;
  role: string;
  image: string;
  tint: string;
  fill?: boolean;
  w?: number;
  h?: number;
  x?: number;
  y?: number;
};

const leaders: Leader[] = [
  {
    name: "Anthony Aspire Kolawole",
    role: "Board Chairman",
    image: "image 66.png",
    w: 509,
    h: 598,
    x: -75,
    y: -21,
    tint: "rgba(42, 96, 221, 0.4)",
  },
  {
    name: "Hon. Gbenga Adeleke",
    role: "Board Governance",
    image: "image 67.png",
    w: 388,
    h: 712,
    x: -35,
    y: -62,
    tint: "rgba(42, 96, 221, 0.4)",
  },
  {
    name: "Dr. Emmanuel Abikoye",
    role: "Board Credit",
    image: "img_7295_720 1.png",
    w: 520,
    h: 650,
    x: -103,
    y: -60,
    tint: "rgba(36, 82, 188, 0.4)",
  },
  {
    name: "Adeola Bukola",
    role: "Digital Product Advisor",
    image: "image 66 (1).png",
    w: 386.52,
    h: 490,
    x: -27,
    y: 0,
    tint: "rgba(42, 96, 221, 0.4)",
  },
  {
    name: "Adeola Bukola",
    role: "Digital Product Advisor",
    image: "image 67 (1).png",
    fill: true,
    tint: "rgba(42, 96, 221, 0.4)",
  },
  {
    name: "Adeola Bukola",
    role: "Digital Product Advisor",
    image: "image 68.png",
    fill: true,
    tint: "rgba(42, 96, 221, 0.4)",
  },
];

export const LeadershipSection = (): JSX.Element => {
  return (
    <MotionSection className="mt-[100px] w-full bg-[#F6F6F7] pt-10 pb-10 lg:mt-[209px] lg:bg-[#F4F4F5] lg:pt-[75px] lg:pb-[128px]">
      <div className="mx-auto flex w-full max-w-[1202px] flex-col gap-10 px-5 sm:px-8 lg:gap-[58px] xl:px-0">
        <h2 className="font-['Montserrat',Helvetica] text-[20px] font-bold leading-[1.6] tracking-[-0.04em] text-[#132B63] lg:text-5xl lg:leading-[1.2]">
          Behind Every Vision, a Dedicated Team
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, index) => (
            <MotionItem
              key={`${leader.name}-${index}`}
              delay={index * 0.07}
              className="team-card relative h-[491px] overflow-hidden rounded-[17px] bg-[#CCD9F7]"
            >
              <div
                className={`team-media absolute${
                  leader.fill ? " team-media-fill" : ""
                }`}
                style={
                  leader.fill
                    ? undefined
                    : ({
                        "--w": `${leader.w}px`,
                        "--h": `${leader.h}px`,
                        "--x": `${leader.x}px`,
                        "--y": `${leader.y}px`,
                      } as CSSProperties)
                }
              >
                <img src={imageAsset(leader.image)} alt={leader.name} />
                <div
                  aria-hidden="true"
                  className="team-tint absolute inset-0 mix-blend-overlay"
                  style={{ backgroundColor: leader.tint }}
                />
              </div>
              <div className="team-chip absolute inset-x-4 bottom-4 flex flex-col gap-1 rounded-2xl bg-[#fcfcfccc] px-6 py-4 backdrop-blur-[9.9px] lg:inset-x-5 lg:bottom-6">
                <p className="font-['Montserrat',Helvetica] text-[16px] font-bold leading-[1.2] tracking-[-0.04em] text-[#132B63] lg:text-[22px]">
                  {leader.name}
                </p>
                <p className="font-['Montserrat',Helvetica] text-[14px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#2A60DD] lg:text-base">
                  {leader.role}
                </p>
              </div>
              </MotionItem>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};
