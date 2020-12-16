import React from 'react'

export default function Hero({childeren, hero}) {
    return (
    <header className={hero}>
    <div>
        {childeren}
    </div>
    </header>
    )
}

Hero.defaultProps = {
    hero: "defaultHero"
};
