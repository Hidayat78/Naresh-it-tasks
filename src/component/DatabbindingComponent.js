export function DatabbindingComponent() {

    var topics = [
        { title: "HTML", description: "It is a markup language" },
        { title: "React", description: "It is a JavaScript Library" }
    ];

    return (
        <div className="container-fluid mt-2">
            <dl>
                {
                    topics.map(item =>
                        <>
                            <dt>{item.title}</dt>
                            <dd>{item.description}</dd>
                        </>
                    )
                }
            </dl>
            {
                topics.map(item =>
                    <details>
                        <summary>{item.title}</summary>
                        <p>{item.description}</p>
                    </details>
                )
            }
        </div>
    )
}
export default DatabbindingComponent;
