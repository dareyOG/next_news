import Link from "next/link";
import NewsList from "@/components/NewsList"

import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news"

function FilteredNewsPage({ params }) {

    const newsPeriod = params.year
    console.log(newsPeriod);

    let links = getAvailableNewsYears()

    const selectedYear = newsPeriod?.[0]
    const selectedMonth = newsPeriod?.[1]

    console.log(selectedYear);

    let news;

    // falback text when no year is selected
    let newsContent = <p>No News found for the selected period.</p>

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear)
        links = getAvailableNewsMonths(selectedYear)
    }

    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth)
        links = []
    }

    if (news && news.length) newsContent = <NewsList news={news} />

    // console.log(links);


    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>{links.map(link => {

                        const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`

                        return <li key={link}><Link href={href}>{link}</Link></li>
                    })}</ul>
                </nav>
            </header>
            {newsContent}
        </>
    )

}

export default FilteredNewsPage
