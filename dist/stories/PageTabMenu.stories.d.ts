/// <reference types="react" />
declare const _default: {
    title: string;
    component: ({ tabList }: {
        tabList: string[];
        onSelectMenu: (tabMenu: string) => void;
        selectedMenu: string;
        type?: "section" | "page" | "modal" | "list" | undefined;
    }) => JSX.Element;
    decorators: ((...args: any) => any)[];
};
export default _default;
export declare const PageTabMenuStory: () => JSX.Element;
export declare const SectionTabMenuStory: () => JSX.Element;
export declare const ModalTabMenuStory: () => JSX.Element;
export declare const ListTabMenuStory: () => JSX.Element;
