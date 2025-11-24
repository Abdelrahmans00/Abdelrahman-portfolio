import { useEffect } from "react";
import { useSection } from "../context/SectionContext";

export default function useSectionObserver(sectionId, ref) {
  const { setActiveSection } = useSection();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActiveSection(sectionId);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, sectionId, setActiveSection]);
}
