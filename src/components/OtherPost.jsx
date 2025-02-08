const posts = [
    {
      id: 1,
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
      image: "./images/image-retro-pcs.jpg",
      alt: "Reviving Retro PCs",
    },
    {
      id: 2,
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budgets.",
      image: "./images/image-top-laptops.jpg",
      alt: "Top 10 Laptops of 2022",
    },
    {
      id: 3,
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities.",
      image: "./images/image-gaming-growth.jpg",
      alt: "The Growth of Gaming",
    },
];

export default function OtherPost(){
    return (
      <section className='other-post' id='other-post' aria-labelledby="other-post-title">
        <h2 className="sr-only" id="other-post-title">Other Posts</h2>
        {posts.map((post, index) =>
            <article className="card-other-post" key={post.id} role="listitem">
                <div className="image">
                  <img src={post.image} alt={post.alt} />
                </div>
                <div className="info-other-post">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>
                  <a href='#' 
                    onClick={(e) => { e.preventDefault();}}
                    aria-label={`Read more about ${post.title}`}
                  >
                      {post.title}
                  </a>
                  <p>{post.description}</p>
                </div>
            </article>
        )}
      </section>
    )
}