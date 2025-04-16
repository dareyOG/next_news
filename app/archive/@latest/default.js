import NewsList from "@/components/NewsList"
import { getLatestNews } from "@/lib/news"

function LatestPage() {
    const latest = getLatestNews()

    return (
        <>
            <h2>Latest News</h2>
            <NewsList news={latest} />
        </>
    )
}

export default LatestPage
