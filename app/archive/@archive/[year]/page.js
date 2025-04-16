import { getNewsForYear } from "@/lib/news"

import NewsList from "@/components/NewsList"

function FilteredNewsPage({ params }) {
    const newsYear = params.year

    const news = getNewsForYear(newsYear)
    console.log(news);


    return (
        <NewsList news={news} />
    )
}

export default FilteredNewsPage
