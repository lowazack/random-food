import SiteHeader from "../components/SiteHeader";

export default function Layout({children}) {
    return (
        <>
            <SiteHeader/>
            {children}
        </>
    )
}
