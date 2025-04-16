import { DUMMY_NEWS } from "@/dummyNews"

function NewsDetailPage({ params }) {
    const news_slug = params.newsID
    const news = DUMMY_NEWS.find(news => news.slug === news_slug)

    return (
        <article className="news-article">
            <header>
                <img src={`/images/news/${news.image}`} alt={news.title} />
                <h1>{news.title}</h1>
                <time datetime={news.date}>{news.date}</time>
            </header>
            <p>
                {news.content}
            </p>
        </article>
    )
}

export default NewsDetailPage
