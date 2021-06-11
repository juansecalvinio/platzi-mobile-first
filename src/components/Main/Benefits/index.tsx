import React from 'react'

const cardsData = [
    {
        icon: "clock",
        title: "Tiempo real",
        body: "Nuestro API toma información minuto a minuto sobre las tareas que más determinan el comportamiento."
    },
    {
        icon: "eye",
        title: "No hay tasas escondidas",
        body: "Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo."
    },
    {
        icon: "dollar",
        title: "Compara monedas",
        body: "No más rumores, con Batabit sabrás el valor real de cada moneda en el mercado actual."
    },
    {
        icon: "check",
        title: "Información confiable",
        body: "Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan."
    },
]

const Benefits = () => {
    return (
        <section className="main-product-detail">
            <span className="product-detail--batata-logo"></span>
            <div className="product-detail--title">
                <h2>Creamos un producto sin comparación.</h2>
                <p>Confiable y diseñado para su uso diario.</p>
            </div>
            <section className="product-cards--container">
            { cardsData.map(card => {
                return (
                <article className="product-detail--card">
                    <span className={card.icon}></span>
                    <p className="product--card-title">{card.title}</p>
                    <p className="product--card-body">{card.body}</p>
                </article>
                )
            })}
            </section>
        </section>
    )
}

export default Benefits;
