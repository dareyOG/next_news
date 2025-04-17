import NewsList from "@/components/NewsList"
import { getLatestNews } from "@/lib/news"

function LatestNewsPage() {

    const latestNews = getLatestNews()

    // console.log(latestNews);


    return (
        <>
            <h2>
                Latest News
            </h2>
            <NewsList news={latestNews} />
        </>
    )
}

export default LatestNewsPage
