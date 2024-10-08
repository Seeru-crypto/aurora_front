import {useEffect} from "react";
import {setCurrentPage} from "./state/appSlice";
import {useAppDispatch} from "./state/store";

export interface IntersectionOption {
    root: Element | Document | null | undefined,
    rootMargin: string,
    threshold: number | number[]
}

const useIntersectionObserver = (intersectionOptions:IntersectionOption, sections: (HTMLDivElement | null)[]) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    dispatch(setCurrentPage(entry.target.id));
                }
            });
        };

        const observer = new IntersectionObserver(intersectionCallback, intersectionOptions);
        sections.forEach((section: HTMLDivElement | null) => {
            if (section) {
                return section && observer.observe(section);
            }
        });

        return () => {
            sections.forEach((section: HTMLDivElement | null) => {
                return section && observer.unobserve(section);
            });
        };
    }, [dispatch, intersectionOptions, sections]);
}

export default useIntersectionObserver;
