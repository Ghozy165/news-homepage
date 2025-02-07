const articles = [
    {
        title: "Hydrogen VS Electric Cars",
        description: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
        title: "The Downsides of AI Artistry",
        description: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
        title: "Is VC Funding Drying Up?",
        description: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
    {
        title: "Is VC Funding Drying Up?",
        description: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
    {
        title: "Is VC Funding Drying Up?",
        description: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    }
];

export default function Aside(){
    return (
        <aside aria-labelledby="aside-heading">
            <h2 id="aside-heading">New</h2>
            {articles.map((article, index) => (
                <article className="card-aside" key={index}>
                    <a href='#'>{article.title}</a>
                    <p>{article.description}</p>
                    {index < articles.length - 1 && <hr />}
                </article>
            ))}
        </aside>
    )
}