export interface ITitleProps {
    children: React.ReactNode
}

export type ListItem = {
  from?: number;
  to?: number;
  id: number;
  title: string;
  description: string;
};

export interface SliderProps {
  list: ListItem[];
  sliderRef: React.RefObject<HTMLDivElement | null>;
};

export interface ISlideProps {
    title: string
    description: string
}

export interface INavButtonProps {
    direction: 'next' | 'prev';
}

export interface ICircleProps {
    page: number,
    points: string[],
    callback: (page: number) => void,
}

export interface ICircleNavProps {
    page: string;
    maxPage: string;
    handleNext: () => void;
    handlePrev: () => void;
    disabledNext: boolean;
    disabledPrev: boolean;
}

export interface ICircleNavBtnProps {
    direction: 'next' | 'prev';
    disabled: boolean;
    callback?: () => void;
}

export interface ICirclePointProps {
    isActive: boolean;
    x: number;
    y: number;
    rotation: number;
    value: number | string;
    title: string;
    callback: () => void;
}

export interface IDates {
    list: ListItem[];
}

export type TypeIncrement = (
    start: number,
    target: number,
    ref: React.RefObject<ReturnType<typeof setInterval> | null>,
    callback: (index: number) => void,
) => void;

export interface ITimeLineProps {
    maxPage: number;
    page: number;
    from: number;
    to: number;
    list: ListItem[];
    sliderRef: React.RefObject<HTMLDivElement | null>;
    points: string[];
    handlePage: (page: number) => void;
    handleNext: () => void;
    handlePrev: () => void;
}

export type TypePageStore = {
    page: number;
    data: any;
    list: any;
    nextPage: (max: number) => void;
    prevPage: () => void;
    toPage: (page: number) => void;
}   