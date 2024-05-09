import { Description } from "app/components/home/description";
import { Hero } from "app/components/home/hero";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Hero />
            <Description />
            {children}
        </div>
    );
};